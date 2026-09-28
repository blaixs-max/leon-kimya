# Leon Kimya kataloğu — eski PDF'ten yapılandırılmış içerik çıkarımı.
# Kullanım: python3 extract.py <pdf> <dil> <çıktı.json> <görsel_klasörü>
# Eski katalog Chromium ile HTML'den basıldığı için stiller tutarlı; sayfa
# türleri dört dilde aynı sayfa numaralarında. Arapça (RTL) ayrı ele alınır.
import sys, re, json, hashlib, os, io
import pdfplumber, pikepdf
from pikepdf import PdfImage
from PIL import Image

W = 594.96
PDF, LANG, OUT, IMGDIR = sys.argv[1:5]
RTL = LANG == 'ar'
os.makedirs(IMGDIR, exist_ok=True)

def hexc(c):
    if not c: return '-'
    if isinstance(c, (list, tuple)):
        if len(c) == 3: return '#%02X%02X%02X' % tuple(int(round(v * 255)) for v in c)
        if len(c) == 1:
            g = int(round(c[0] * 255)); return '#%02X%02X%02X' % (g, g, g)
    return str(c)

def fclass(fn):
    fn = fn.split('+')[-1]
    # Arapça PDF'te Arial Black yerine Arapça glifler Times New Roman Bold'a,
    # kalın metin Segoe UI Semibold/Bold'a düşmüş — rol olarak eşle
    if 'Black' in fn or 'TimesNewRoman' in fn: return 'K'
    if 'Consolas' in fn or 'Mono' in fn: return 'M'
    if 'Bold' in fn or 'Semibold' in fn: return 'B'
    return 'R'

# ---------- Arapça: görsel sıradaki glifleri mantıksal sıraya çevir ----------
import unicodedata
def is_rtl_char(t):
    for ch in t:
        b = unicodedata.bidirectional(ch)
        if b in ('R', 'AL'): return True
    return False
def is_ltr_char(t):
    for ch in t:
        b = unicodedata.bidirectional(ch)
        if b in ('L', 'EN', 'AN'): return True
    return False
MIRROR = {'(': ')', ')': '(', '[': ']', ']': '[', '«': '»', '»': '«', '<': '>', '>': '<'}

# Times New Roman'ın ToUnicode eşlemesi paylaşılan glifleri Farsça kod noktalarına
# bağlıyor: form bazında Arapça karşılığa çevir (NFKC'den ÖNCE)
PF_FIX = {0xFBFC: '\u0649', 0xFBFD: '\u0649', 0xFBFE: '\u064A', 0xFBFF: '\u064A',
          0xFBAA: '\u0647', 0xFBAB: '\u0647', 0xFBAC: '\u0647', 0xFBAD: '\u0647',
          0xFB8E: '\u0643', 0xFB8F: '\u0643', 0xFB90: '\u0643', 0xFB91: '\u0643',
          0x06CC: '\u064A', 0x06BE: '\u0647', 0x06A9: '\u0643'}
def ar_norm(t):
    out = []
    for ch in t:
        o = ord(ch)
        if o in PF_FIX: out.append(PF_FIX[o])
        elif 0xFC5E <= o <= 0xFC63 or 0xFE70 <= o <= 0xFE7F:
            # yalıtık hareke biçimleri NFKC'de "boşluk + hareke" olur: boşluğu at
            out.append(unicodedata.normalize('NFKC', ch).replace(' ', '').replace('\u0640', ''))
        elif 0xFB50 <= o <= 0xFDFF or 0xFE80 <= o <= 0xFEFF: out.append(unicodedata.normalize('NFKC', ch))
        else: out.append(ch)
    return ''.join(out)

def bcls(t):
    ch = t[0]
    b = unicodedata.bidirectional(ch)
    if b in ('R', 'AL'): return 'R'
    if b == 'L': return 'L'
    if b in ('EN', 'AN'): return 'N'
    if b in ('ES', 'ET', 'CS'): return 'S'
    if b == 'WS' or ch == ' ': return 'W'
    return 'O'

def rtl_text(chars, size):
    """Görsel sıradaki (soldan sağa) glifleri mantıksal sıraya çevir (RTL paragraf)."""
    chars = sorted(chars, key=lambda c: c['x0'])
    toks = []; prev = None
    for c in chars:
        if prev is not None and c['x0'] - prev['x1'] > 0.16 * size and c['text'] != ' ' and toks and toks[-1] != ' ':
            toks.append(' ')
        toks.append(c['text'] + c.get('_m', ''))
        prev = c
    cls = [bcls(t) for t in toks]
    if 'R' not in cls:
        return ''.join(toks)
    n = len(toks)
    eff = cls[:]
    last = None
    for i in range(n):  # W7: Latin harften sonra gelen rakam Latin sayılır
        if cls[i] == 'R': last = 'R'
        elif cls[i] == 'L': last = 'L'
        elif cls[i] == 'N' and last == 'L': eff[i] = 'L'
    runs = []; i = 0
    while i < n:
        if eff[i] in ('L', 'N'):
            j = i; k = i + 1
            while k < n:
                if eff[k] in ('L', 'N'):
                    if k == j + 1: j = k; k += 1; continue
                    between = eff[j + 1:k]
                    if eff[j] == 'L' and eff[k] == 'L' and all(x in ('W', 'O', 'S') for x in between): j = k; k += 1; continue
                    if eff[j] == 'N' and eff[k] == 'N' and len(between) == 1 and between[0] == 'S': j = k; k += 1; continue
                    break
                elif eff[k] in ('W', 'O', 'S'):
                    k += 1
                else:
                    break
            # sayıya bitişik yüzde/birim işaretleri (ET) sayıya dahil
            if eff[i] == 'N' and i > 0 and cls[i - 1] == 'S' and unicodedata.bidirectional(toks[i - 1][0]) == 'ET': i -= 1
            if eff[j] == 'N' and j + 1 < n and cls[j + 1] == 'S' and unicodedata.bidirectional(toks[j + 1][0]) == 'ET': j += 1
            runs.append((i, j)); i = j + 1
        else:
            i += 1
    units = []; i = 0; ri = 0
    while i < n:
        if ri < len(runs) and runs[ri][0] == i:
            a, b = runs[ri]; units.append((''.join(toks[a:b + 1]), True)); i = b + 1; ri += 1
        else:
            units.append((toks[i], False)); i += 1
    units.reverse()
    out = ''.join((MIRROR.get(t, t) if (not r and len(t) == 1) else t) for t, r in units)
    return re.sub(r'\s+', ' ', out).strip()

def ltr_text(chars, size):
    """LTR paragraf içinde görsel sıradaki glifleri mantıksal sıraya çevir (değer hücreleri)."""
    chars = sorted(chars, key=lambda c: c['x0'])
    toks = []; prev = None
    for c in chars:
        if prev is not None and c['x0'] - prev['x1'] > 0.16 * size and c['text'] != ' ' and toks and toks[-1] != ' ':
            toks.append(' ')
        toks.append(c['text'] + c.get('_m', ''))
        prev = c
    cls = [bcls(t) for t in toks]
    n = len(toks); out = []; i = 0
    while i < n:
        # RTL dizisi: R ile başlar (soluna bitişik rakamlar dahil), son R ile biter
        if cls[i] == 'R' or (cls[i] == 'N' and i + 1 < n and cls[i + 1] == 'R'):
            j = i; k = i
            while k < n and cls[k] != 'L':
                if cls[k] == 'R': j = k
                k += 1
            run = toks[i:j + 1][::-1]
            # ters çevrilen dizideki sayıları yeniden soldan sağa yaz
            rc = [bcls(t) for t in run]; m = 0; fixed = []
            while m < len(run):
                if rc[m] == 'N':
                    q = m
                    while q + 1 < len(run) and (rc[q + 1] == 'N' or (rc[q + 1] == 'S' and q + 2 < len(run) and rc[q + 2] == 'N')): q += 1
                    fixed += run[m:q + 1][::-1]; m = q + 1
                else:
                    fixed.append(MIRROR.get(run[m], run[m]) if len(run[m]) == 1 else run[m]); m += 1
            out += fixed; i = j + 1
        else:
            out.append(toks[i]); i += 1
    return re.sub(r'\s+', ' ', ''.join(out)).strip()

def frag_text_ltr(chars, size):
    chars = sorted(chars, key=lambda c: c['x0'])
    cc = []
    for c in chars:
        d = dict(c); d['text'] = ar_norm(c['text']); d['_m'] = ar_norm(c.get('_m', '')); cc.append(d)
    return ar_norm(ltr_text(cc, size))

def frag_text(chars, size):
    """Aynı satırdaki karakterleri metne çevir. LTR: x'e göre; RTL: bidi ters çevirme."""
    chars = sorted(chars, key=lambda c: c['x0'])
    if RTL and any(is_rtl_char(ar_norm(c['text'])) for c in chars):
        cc = []
        for c in chars:
            d = dict(c); d['text'] = ar_norm(c['text']); d['_m'] = ar_norm(c.get('_m', '')); cc.append(d)
        return ar_norm(rtl_text(cc, size))
    # harf aralıklı (tracking) başlıklarda karakter boşluğu büyük: kelime
    # boşluğunu medyan karakter boşluğuna göre ayır
    gaps = sorted(b['x0'] - a['x1'] for a, b in zip(chars, chars[1:]))
    med = max(0.0, gaps[len(gaps) // 4]) if gaps else 0.0
    thr = med + 0.15 * size
    out = ''; prev = None
    for c in chars:
        if prev is not None and c['x0'] - prev['x1'] > thr and not out.endswith(' ') and c['text'] != ' ':
            out += ' '
        out += c['text']; prev = c
    return re.sub(r'\s+', ' ', out).strip()

def attach_marks(chs):
    """Harekeleri (Mn) kendi satırları yerine taban harfe bağla."""
    def ism(c):
        t = ar_norm(c['text']).strip()
        return bool(t) and all(unicodedata.category(x) == 'Mn' for x in t)
    marks = [c for c in chs if ism(c)]
    if not marks: return chs
    bases = [dict(c) for c in chs if not ism(c)]
    for b in bases: b['_m'] = ''
    for m in marks:
        cx = (m['x0'] + m['x1']) / 2
        best = None; bd = 1e9
        for b in bases:
            if b['text'].strip() == '': continue
            if abs(b['size'] - m['size']) > .2 or abs(b['top'] - m['top']) > .95 * m['size']: continue
            if not (b['x0'] - 1.0 <= cx <= b['x1'] + 1.0): continue
            d = abs(cx - (b['x0'] + b['x1']) / 2) + abs(b['top'] - m['top']) * .2
            if d < bd: bd = d; best = b
        if best is not None: best['_m'] += ar_norm(m['text']).strip()
    return bases

def frags(page):
    """Karakterleri stil+satır bazında parçalara böl (büyük boşlukta böl)."""
    chs = [c for c in page.chars if c['text'].strip() != '' or c['text'] == ' ']
    if RTL: chs = attach_marks(chs)
    groups = {}
    for c in chs:
        st = (fclass(c['fontname']), round(c['size'], 1), hexc(c.get('non_stroking_color')))
        groups.setdefault(st, []).append(c)
    out = []
    for st, cs in groups.items():
        size = st[1]
        cs.sort(key=lambda c: (c['top'], c['x0']))
        lines = []
        for c in cs:
            for L in lines:
                if abs(L['top'] - c['top']) <= 1.0:
                    L['cs'].append(c); break
            else:
                lines.append({'top': c['top'], 'cs': [c]})
        for L in lines:
            row = sorted([c for c in L['cs'] if c['text'] != ' '], key=lambda c: c['x0'])
            cur = []
            for c in row:
                if cur and c['x0'] - cur[-1]['x1'] > 0.6 * size:
                    out.append(mk(cur, st)); cur = []
                cur.append(c)
            if cur: out.append(mk(cur, st))
    out.sort(key=lambda f: (round(f['top'], 0), f['x0']))
    return out

def mk(cs, st):
    return {'x0': min(c['x0'] for c in cs), 'x1': max(c['x1'] for c in cs),
            'top': min(c['top'] for c in cs), 'bottom': max(c['bottom'] for c in cs),
            'f': st[0], 's': st[1], 'c': st[2], 't': frag_text(cs, st[1]),
            'tl': frag_text_ltr(cs, st[1]) if RTL else None}

def X(f):  # RTL'de ayna koordinat (sol kenar = mantıksal başlangıç)
    return W - f['x1'] if RTL else f['x0']

def sel(fs, f=None, s=None, c=None, y0=-1, y1=9999, x0=-1, x1=9999):
    r = []
    for q in fs:
        if f and q['f'] not in f: continue
        if s is not None and abs(q['s'] - s) > .15: continue
        if c and q['c'] != c: continue
        if not (y0 <= q['top'] < y1): continue
        if not (x0 <= X(q) < x1): continue
        r.append(q)
    return r

def lines_of(fs, tol=1.6):
    """Parçaları satırlara topla, satır içinde okuma sırasına diz."""
    fs = sorted(fs, key=lambda q: (q['top'], X(q)))
    lines = []
    for q in fs:
        if lines and abs(lines[-1][0]['top'] - q['top']) <= tol: lines[-1].append(q)
        else: lines.append([q])
    res = []
    for L in lines:
        L.sort(key=lambda q: X(q))
        res.append({'top': L[0]['top'], 'x': X(L[0]), 's': L[0]['s'], 't': ' '.join(q['t'] for q in L)})
    return res

def join_lines(ls):
    s = ''
    for L in ls:
        t = L['t']
        if s.endswith('-') and not s.endswith(' -'): s = s + t  # tireyle bölünmüş kelime (nadir)
        else: s = (s + ' ' + t) if s else t
    return re.sub(r'\s+', ' ', s).strip()

def paras(fs, gap_k=1.75):
    ls = lines_of(fs)
    out = []; cur = []
    for L in ls:
        if cur and L['top'] - cur[-1]['top'] > gap_k * L['s']:
            out.append(join_lines(cur)); cur = []
        cur.append(L)
    if cur: out.append(join_lines(cur))
    return out

def text1(fs):
    return join_lines(lines_of(fs))

# ---------- görseller ----------
PK = pikepdf.open(PDF)
IMGCACHE = {}
def save_img(objid):
    if objid in IMGCACHE: return IMGCACHE[objid]
    obj = PK.get_object((objid, 0))
    raw = bytes(obj.read_raw_bytes())
    h = hashlib.md5(raw).hexdigest()[:12]
    pim = PdfImage(obj)
    smask = obj.get('/SMask')
    if smask is None and obj.get('/Filter') == '/DCTDecode':
        fn = f'{h}.jpg'
        p = os.path.join(IMGDIR, fn)
        if not os.path.exists(p): open(p, 'wb').write(raw)
    else:
        fn = f'{h}.png'
        p = os.path.join(IMGDIR, fn)
        if not os.path.exists(p):
            im = pim.as_pil_image().convert('RGB')
            if smask is not None:
                m = PdfImage(smask).as_pil_image().convert('L')
                if m.size != im.size: m = m.resize(im.size)
                im.putalpha(m)
            im.save(p)
    w, hh = int(obj.Width), int(obj.Height)
    IMGCACHE[objid] = {'f': fn, 'w': w, 'h': hh}
    return IMGCACHE[objid]

def imgs(page, minw=30):
    r = []
    for im in page.images:
        if im['x1'] - im['x0'] < minw: continue
        d = dict(save_img(im['stream'].objid))
        # görünür alan (sayfa ile kesişim) ve merkez
        vx0, vx1 = max(im['x0'], 0), min(im['x1'], W)
        vy0, vy1 = max(im['top'], 0), min(im['bottom'], 842)
        cx = (vx0 + vx1) / 2
        d.update({'x0': W - vx1 if RTL else vx0, 'x1': W - vx0 if RTL else vx1, 'top': vy0, 'bottom': vy1,
                  'cx': (W - cx) if RTL else cx, 'cy': (vy0 + vy1) / 2})
        r.append(d)
    return r

def ref(d): return d['f']

# ---------- ortak sayfa parçaları ----------
BR = '#B45309'; INK = '#1C1917'; MUT = '#78716C'; TXT = '#3B3733'

def head(fs):
    k = sel(fs, 'B', 7.5, BR, 50, 70)
    t = sel(fs, 'K', None, INK, 70, 110)
    t = [q for q in t if q['s'] >= 15]
    return (text1(k) if k else ''), (text1(t) if t else '')

def lead(fs, y0=110, y1=300):
    ls = sel(fs, 'B', 11.0, INK, y0, y1)
    return text1(ls) if ls else ''

def lead_end(fs, y0=110, y1=300):
    ls = sel(fs, 'B', 11.0, INK, y0, y1)
    return (max(q['top'] for q in ls) + 6) if ls else 110

def markers(page):
    ms = []
    for r in page.rects + page.curves:
        w, h = r['width'], r['height']
        if 4 <= w <= 8 and 4 <= h <= 8 and hexc(r.get('non_stroking_color')) == '#D97706':
            x = W - r['x1'] if RTL else r['x0']
            ms.append({'x': x, 'top': r['top']})
    return ms

def bullets(page, fs, size, y0, y1):
    """İki sütunlu madde listesi: sütunları ayrı satırlara topla; madde başı = işaret kutusu."""
    ms = markers(page)
    allf = sel(fs, 'R', size, TXT, y0, y1)
    out = []
    for col in (0, 1):
        cf = [q for q in allf if (X(q) < W / 2 - 10) == (col == 0)]
        items = []
        for L in lines_of(cf):
            start = any(abs(m['top'] - L['top']) < 6 and 0 < L['x'] - m['x'] < 20 for m in ms)
            if start or not items: items.append([L])
            else: items[-1].append(L)
        out += [join_lines(it) for it in items]
    return out

def chips(fs, y0, y1):
    return [q['t'] for q in sorted(sel(fs, 'B', 8.0, BR, y0, y1), key=lambda q: (round(q['top']), X(q)))]

def headings(fs):
    return sorted([q for q in sel(fs, 'K', 8.0, INK) if q['top'] > 100], key=lambda q: q['top'])

def VT(q):  # değer metni: Arapçada LTR yorumu
    return q['tl'] if (RTL and q.get('tl')) else q['t']

def textv(fs):
    return ' '.join(VT(q) for q in sorted(fs, key=lambda q: (round(q['top']), X(q))))

def cards(page, fs, y0, y1, pageimgs):
    anc = [q for q in sel(fs, 'K', 6.5, BR, y0, y1) if re.fullmatch(r'\d\d', q['t'])]
    xs = sorted(set(round(X(a) / 5) for a in anc))
    grid = len(xs) > 1
    res = []
    for a in anc:
        row = sorted([b for b in anc if abs(b['top'] - a['top']) < 15], key=X)
        nxt = [b for b in row if X(b) > X(a) + 5]
        xa = X(a) - 8; xb = (X(nxt[0]) - 8) if nxt else W
        below = [b for b in anc if abs(X(b) - X(a)) < 4 and b['top'] > a['top'] + 5]
        ya = a['top'] - 6; yb = min([b['top'] - 6 for b in below] + [y1])
        reg = [q for q in fs if ya <= q['top'] < yb and xa <= X(q) < xb]
        code = [q for q in reg if q['f'] == 'M']
        name = [q for q in reg if q['f'] == 'K' and q['c'] == INK]
        desc = [q for q in reg if q['f'] == 'R' and q['c'] == MUT and q['s'] >= 7.8]
        lab = [q for q in reg if q['f'] == 'R' and q['c'] == MUT and q['s'] < 7.6]
        val = [q for q in reg if q['f'] == 'B' and q['c'] == INK and q['s'] < 7.6]
        specs = []
        labs = sorted(lab, key=lambda q: (q['top'], X(q)))
        for L in labs:
            same = [m for m in labs if abs(m['top'] - L['top']) < 1.5 and X(m) > X(L) + 5]
            lim = min([X(m) for m in same] + [xb])
            v = [q for q in val if abs(q['top'] - L['top']) < 1.5 and X(L) < X(q) < lim]
            specs.append({'l': L['t'], 'v': ' '.join(VT(q) for q in sorted(v, key=X)), '_x': X(L), '_lim': lim, '_top': L['top']})
        # devam satırları (etiketsiz değer)
        used = set()
        for sp in specs:
            for q in val:
                if abs(q['top'] - sp['_top']) < 1.5 and sp['_x'] < X(q) < sp['_lim']: used.add(id(q))
        for q in sorted(val, key=lambda q: q['top']):
            if id(q) in used: continue
            cand = [sp for sp in specs if sp['_top'] < q['top'] and sp['_x'] <= X(q) < sp['_lim']]
            if cand:
                sp = max(cand, key=lambda sp: sp['_top']); sp['v'] = (sp['v'] + ' ' + VT(q)).strip()
        for sp in specs:
            for k in ('_x', '_lim', '_top'): sp.pop(k)
        res.append({'_a': a, 'no': a['t'], 'code': text1(code), 'name': text1(name), 'desc': text1(desc),
                    'specs': specs, '_x': X(a), '_ya': ya, '_yb': yb, '_xa': xa, '_xb': xb})
    # görselleri kartlara ata
    for im in pageimgs:
        if im.get('_used'): continue
        best = None; bd = 1e9
        for cd in res:
            if grid:
                if not (cd['_xa'] - 5 <= im['cx'] <= cd['_xb'] + 5): continue
                d = cd['_a']['top'] - im['bottom']
                if d < -15 or d > 120: continue
            else:
                d = abs(im['cy'] - (cd['_a']['top'] + 35))
                if d > 110 or im['cx'] > cd['_x']: continue
            if d < bd: bd = d; best = cd
        if best is not None and 'img' not in best:
            best['img'] = ref(im); im['_used'] = True
    for cd in res:
        for k in ('_a', '_x', '_ya', '_yb', '_xa', '_xb'): cd.pop(k)
    # sıra: kartın kendi numarası (RTL ızgarada fiziksel sıra terstir)
    res.sort(key=lambda cd: int(cd['no']) if cd['no'].isdigit() else 99)
    return res

# ---------- sayfa türleri ----------
pdf = pdfplumber.open(PDF)
P = lambda n: pdf.pages[n - 1]
F = {}
def fs_of(n):
    if n not in F: F[n] = frags(P(n))
    return F[n]

D = {'lang': LANG, 'ui': {}}
ui = D['ui']

def run_head(n):
    fs = fs_of(n)
    r = sel(fs, 'R', 7.5, MUT, 10, 20)
    return text1(r) if r else ''

# 1 kapak
fs = fs_of(1)
D['cover'] = {
    'title': text1([q for q in fs if q['s'] == 19.0]),
    'tagline': text1(sel(fs, 'B', 11.0, '#FCD34D')),
    'edition': text1([q for q in sel(fs, 'R', 9.0, '#E7E5E4') if X(q) < 200]),
    'site': text1([q for q in sel(fs, 'R', 9.0, '#E7E5E4') if X(q) >= 200]),
    'imgs': [ref(i) for i in sorted(imgs(P(1)), key=lambda i: (i['top'], i['x0']))],
}
# 2 giriş
fs = fs_of(2)
D['intro'] = {'tagline': text1(sel(fs, 'R', 12.0)), 'disclaimer': text1(sel(fs, 'R', 7.5)),
              'logo': ref(imgs(P(2))[0])}
# 3 kurumsal
fs = fs_of(3)
k, t = head(fs)
ims = sorted(imgs(P(3)), key=lambda i: (i['top'], i['x0']))
D['corporate'] = {'kicker': k, 'title': t, 'lead': lead(fs),
                  'cols': [paras(sel(fs, 'R', 9.4, TXT, 250, 800, -1, W / 2 - 10)),
                           paras(sel(fs, 'R', 9.4, TXT, 250, 800, W / 2 - 10, 9999))],
                  'img': ref(ims[0]), 'gallery': [ref(i) for i in ims[1:]]}
# 4 neden
fs = fs_of(4)
k, t = head(fs)
nums = sel(fs, 'K', 18.0, '#FCD34D')
items = []
for nq in sorted(nums, key=lambda q: q['t']):
    col = [q for q in sel(fs, 'K', 11.0, INK) if abs(X(q) - X(nq)) < 6 and q['top'] > nq['top']]
    tt = min(col, key=lambda q: q['top'])
    nxt = [q for q in nums if abs(X(q) - X(nq)) < 6 and q['top'] > nq['top'] + 5]
    yb = min([q['top'] for q in nxt] + [800])
    body = [q for q in sel(fs, 'R', 8.8, MUT) if abs(X(q) - X(nq)) < 6 and tt['top'] < q['top'] < yb]
    items.append({'no': nq['t'], 'title': tt['t'], 'text': text1(body)})
D['why'] = {'kicker': k, 'title': t, 'lead': lead(fs), 'items': items}

# 5 standartlar
def table(fs, hdr_style, y0, y1, rowkey, cell_styles):
    """Başlık parçalarının x'lerinden sütun sınırı; satırlar rowkey parçalarıyla başlar."""
    hd = sorted(sel(fs, 'B', None, '#E7E5E4', y0, y1), key=lambda q: (q['top'], X(q)))
    hd = [q for q in hd if abs(q['s'] - hdr_style) < .2]
    htop = min(q['top'] for q in hd)
    # başlık hücreleri (çok satırlı olabilir)
    colx = sorted(set(round(X(q), 0) for q in hd if q['top'] - htop < 8 or True))
    cols = []
    for x in colx:
        if not cols or x - cols[-1] > 6: cols.append(x)
    heads = []
    for i, x in enumerate(cols):
        xb = cols[i + 1] if i + 1 < len(cols) else 9999
        heads.append(text1([q for q in hd if x - 1 <= X(q) < xb - 1]))
    hb = max(q['bottom'] for q in hd)
    body = [q for q in fs if hb + 2 < q['top'] < y1 and q['c'] != '#E7E5E4' and (q['f'], q['c']) in cell_styles]
    # satırlar: dikey boşluğa göre (hücre içi satır aralığı < 1.8 × punto)
    tops = sorted(set(round(q['top'], 1) for q in body))
    groups = []
    for t in tops:
        if groups and t - groups[-1][-1] <= 1.5: groups[-1].append(t); continue
        if groups and t - groups[-1][-1] < 16: groups[-1].append(t); continue
        groups.append([t])
    rows = []
    for g in groups:
        ya, yb = g[0] - 1.6, g[-1] + 1.6
        cells = []
        for j, x in enumerate(cols):
            xb = cols[j + 1] if j + 1 < len(cols) else 9999
            cells.append(text1([q for q in body if ya <= q['top'] <= yb and x - 1 <= X(q) < xb - 1]))
        rows.append(cells)
    return {'head': heads, 'rows': rows}

fs = fs_of(5)
k, t = head(fs)
h3 = sorted(sel(fs, 'B', 10.0, BR), key=lambda q: q['top'])
notes = sel(fs, 'R', 8.0, MUT)
def note_after(y, y1):
    n = [q for q in notes if y < q['top'] < y1]
    return text1(n) if n else ''
ys = [q['top'] for q in h3] + [805]
std = {'kicker': k, 'title': t, 'lead': lead(fs, 110, 170), 'sections': []}
CS = {('R', TXT), ('B', INK), ('K', BR)}
for i, q in enumerate(h3):
    hd = [z for z in sel(fs, 'B', None, '#E7E5E4', q['top'], ys[i + 1])]
    nlim = min([z['top'] for z in hd] + [ys[i + 1]]) - 2
    sec = {'title': q['t'], 'note': note_after(q['top'], nlim)}
    if hd:
        if i == 0:
            sec['table'] = table(fs, 7.2, q['top'], ys[i + 1], lambda z: z['f'] == 'K' and z['c'] == BR, CS)
        else:
            x0c = min(X(z) for z in hd)
            sec['table'] = table(fs, 7.2, q['top'], ys[i + 1], lambda z, x0c=x0c: abs(X(z) - x0c) < 2, CS)
    std['sections'].append(sec)
std['footnote'] = text1(sel(fs, 'R', 7.5, MUT, 790, 842))
# Üçüncü taraf markası (Polinflex) — CLAUDE.md kural 1; build.js'te de silinmişti
def clean(s):
    return re.sub(r'\s*\(\s*Polinflex[^)]*\)', '', s).replace('Polinflex', '').strip()
for sec in std['sections']:
    if 'table' in sec:
        sec['table']['rows'] = [[clean(c) for c in r] for r in sec['table']['rows']]
D['standards'] = std

# 8 ürün listesi — başlık
fs = fs_of(8)
k, t = head(fs)
D['productList'] = {'kicker': k, 'title': t}
# 6 içindekiler — başlıklar
fs = fs_of(6)
k, t = head(fs)
ui['tocKicker'] = k; ui['tocTitle'] = t

# bölüm açılışları
def part(n):
    fs = fs_of(n)
    num = [q for q in fs if q['s'] >= 50]
    ttl = [q for q in fs if q['f'] == 'K' and q['s'] == 30.0]
    desc = sel(fs, 'R', 11.0, '#E7E5E4')
    ims = imgs(P(n))
    return {'no': text1(num), 'title': text1(ttl), 'desc': text1(desc), 'img': ref(ims[0]) if ims else None}

def catdiv(n):
    fs = fs_of(n)
    ims = imgs(P(n))
    return {'kicker': text1(sel(fs, 'B', 7.5, '#FCD34D')), 'title': text1([q for q in fs if q['f'] == 'K' and q['s'] == 24.0]),
            'items': [q['t'] for q in sorted(sel(fs, 'R', 10.0, '#E7E5E4'), key=lambda q: q['top'])],
            'img': ref(ims[0]) if ims else None}

def family_intro(n):
    fs = fs_of(n); pg = P(n)
    k, t = head(fs)
    hs = headings(fs)
    first_h = hs[0]['top'] if hs else 800
    d = {'page': n, 'kicker': k, 'title': t, 'lead': lead(fs, 110, first_h),
         'paras': paras(sel(fs, 'R', 9.4, TXT, lead_end(fs, 110, first_h), first_h)), 'uses': [], 'areas': [], 'products': []}
    ims = imgs(pg)
    bounds = [h['top'] for h in hs] + [812]
    for i, h in enumerate(hs):
        y0, y1 = h['top'] + 5, bounds[i + 1]
        b = bullets(pg, fs, 8.2, y0, y1)
        c = chips(fs, y0, y1)
        anc = [q for q in sel(fs, 'K', 6.5, BR, y0, y1) if re.fullmatch(r'\d\d', q['t'])]
        if anc:
            d['products'] = cards(pg, fs, y0, y1, ims); d['hProducts'] = h['t']
        elif b:
            d['uses'] = b; d['hUses'] = h['t']
        elif c:
            d['areas'] = c; d['hAreas'] = h['t']
    rest = sorted([i for i in ims if not i.get('_used')], key=lambda i: (i['top'], i['x0']))
    if rest:
        main = [i for i in rest if i['top'] < 200 and (i['bottom'] - i['top']) > 120]
        if main:
            d['img'] = ref(main[0]); rest = [i for i in rest if i is not main[0]]
        d['gallery'] = [ref(i) for i in sorted(rest, key=lambda i: i['x0'])]
    return d

def product_page(n):
    fs = fs_of(n); pg = P(n)
    k, t = head(fs)
    hs = headings(fs)
    y1 = hs[0]['top'] if hs else 812
    d = {'page': n, 'kicker': k, 'title': t, 'products': cards(pg, fs, 100, y1, imgs(pg))}
    if hs:
        d['hFeatures'] = hs[0]['t']
        d['features'] = bullets(pg, fs, 9.0, hs[0]['top'] + 5, 812)
    return d

def color_chart(n):
    fs = fs_of(n); pg = P(n)
    k, t = head(fs)
    ims = sorted(imgs(pg), key=lambda i: (round(i['top']), i['x0']))
    labs = sel(fs, 'R', 7.5, MUT, 100, 812)
    sw = []
    for im in ims:
        lab = min(labs, key=lambda q: abs(q['top'] - im['bottom'] - 10) + abs(X(q) - im['x0']) * .3)
        sw.append({'img': ref(im), 'label': lab['t']})
    return {'kicker': k, 'title': t, 'lead': text1(sel(fs, 'R', 9.4, TXT, 110, 160)), 'swatches': sw}

def system_intro(n):
    fs = fs_of(n); pg = P(n)
    k, t = head(fs)
    hs = headings(fs)
    first_h = hs[0]['top'] if hs else 800
    d = {'kicker': k, 'title': t, 'lead': lead(fs, 110, first_h), 'paras': paras(sel(fs, 'R', 9.4, TXT, lead_end(fs, 110, first_h), first_h))}
    if hs:
        d['hAreas'] = hs[0]['t']; d['areas'] = chips(fs, hs[0]['top'] + 5, 812)
    ims = imgs(pg)
    if ims: d['img'] = ref(max(ims, key=lambda i: (i['bottom'] - i['top']) * (i['x1'] - i['x0'])))
    return d

def system_features(n):
    fs = fs_of(n); pg = P(n)
    k, t = head(fs)
    b = bullets(pg, fs, 9.0, 100, 175)
    pr = paras(sel(fs, 'R', 9.4, TXT, 100, 812))
    ims = sorted(imgs(pg), key=lambda i: (round(i['cy'] / 60), i['cx']))
    return {'kicker': k, 'title': t, 'features': b, 'paras': pr, 'gallery': [ref(i) for i in ims]}

def system_sections(n):
    fs = fs_of(n)
    k, t = head(fs)
    sub = sel(fs, 'K', 8.0, INK, 60, 110)
    names = sorted([q for q in fs if q['f'] == 'K' and q['s'] == 11.5 and q['c'] == INK], key=lambda q: q['top'])
    secs = []
    for i, nm in enumerate(names):
        ya = nm['top'] - 4; yb = names[i + 1]['top'] - 4 if i + 1 < len(names) else 765
        badge = sel(fs, 'B', 7.2, BR, ya, ya + 12)
        desc = sel(fs, 'R', 7.8, MUT, ya, ya + 40)
        hd = sorted(sel(fs, 'B', 6.8, '#E7E5E4', ya, yb), key=X)
        rowsn = sorted([q for q in sel(fs, 'K', 7.2, BR, ya, yb) if re.fullmatch(r'\d\d', q['t'])], key=lambda q: q['top'])
        rows = []
        for j, rn in enumerate(rowsn):
            ra = rn['top'] - 4; rb = rowsn[j + 1]['top'] - 4 if j + 1 < len(rowsn) else yb
            name = sel(fs, 'B', 7.2, INK, ra, rb)
            det = sel(fs, 'R', 6.8, MUT, ra, rb)
            code = [q for q in fs if q['f'] == 'M' and ra <= q['top'] < rb]
            amt = sel(fs, 'R', 7.2, TXT, ra, rb)
            rows.append({'no': rn['t'], 'name': text1(name), 'detail': textv(det), 'code': text1(code), 'amount': textv(amt)})
        secs.append({'name': nm['t'], 'thickness': text1(badge), 'desc': text1(desc), 'rows': rows,
                     'head': [q['t'] for q in hd]})
    foot = sel(fs, 'R', 7.0, MUT, 765, 812)
    return {'kicker': k, 'title': t, 'sub': text1(sub) if sub else '', 'sections': secs, 'footnote': text1(foot) if foot else ''}

def applications(n):
    fs = fs_of(n); pg = P(n)
    k, t = head(fs)
    raw = sorted([q for q in fs if q['f'] == 'K' and q['s'] == 12.0 and q['c'] == INK], key=lambda q: q['top'])
    ttl = []
    for q in raw:  # iki satıra kırılan başlıkları birleştir
        if ttl and abs(X(q) - X(ttl[-1][0])) < 3 and q['top'] - ttl[-1][-1]['top'] < 18: ttl[-1].append(q)
        else: ttl.append([q])
    ims = imgs(pg)
    items = []
    for i, grp in enumerate(ttl):
        q = grp[0]
        ya = q['top'] - 2; yb = ttl[i + 1][0]['top'] - 40 if i + 1 < len(ttl) else 812
        body = [z for z in sel(fs, 'R', 8.2, TXT, ya, yb) if X(q) - 3 <= X(z) < X(q) + 270]
        im = min(ims, key=lambda m: abs(m['cy'] - (q['top'] + 40)))
        items.append({'title': text1(grp), 'paras': paras(body, 1.9), 'img': ref(im)})
    return {'kicker': k, 'title': t, 'items': items}

def containers(n):
    fs = fs_of(n); pg = P(n)
    k, t = head(fs)
    tb = table(fs, 7.2, 140, 335, lambda q: q['f'] == 'B' and q['c'] == INK and X(q) < 60, {('R', TXT), ('B', INK)})
    ims = sorted(imgs(pg), key=lambda i: i['x0'])
    return {'kicker': k, 'title': t, 'lead': text1(sel(fs, 'R', 9.4, TXT, 110, 150)), 'table': tb,
            'footnote': text1(sel(fs, 'R', 7.0, MUT, 335, 400)), 'gallery': [ref(i) for i in ims]}

def incoterms(n):
    fs = fs_of(n)
    k, t = head(fs)
    tb = table(fs, 7.2, 140, 700, lambda q: q['f'] == 'K' and q['c'] == BR, {('R', TXT), ('K', BR)})
    foot = [q for q in sel(fs, 'R', 7.0, MUT, 500, 812)]
    return {'kicker': k, 'title': t, 'lead': text1(sel(fs, 'R', 9.4, TXT, 110, 150)), 'table': tb, 'footnote': text1(foot)}

def back(n):
    fs = fs_of(n)
    labs = sorted(sel(fs, 'B', 7.0, '#FCD34D'), key=lambda q: (q['top'], X(q)))
    vals = sel(fs, 'R', 10.0, '#FFFFFF')
    contact = []
    for L in labs:
        v = [q for q in vals if abs(X(q) - X(L)) < 5 and L['top'] < q['top'] < L['top'] + 40]
        contact.append({'label': L['t'], 'value': [q['t'] for q in sorted(v, key=lambda q: q['top'])]})
    disc = sel(fs, 'R', 8.0, '#A8A29E')
    ls = lines_of(disc)
    return {'tagline': text1(sel(fs, 'R', 11.0, '#E7E5E4')), 'contact': contact,
            'disclaimer': join_lines(ls[:-1]), 'copyright': ls[-1]['t']}

# ---------- yapı ----------
FAM = {  # aile giriş sayfası → ürün sayfaları
    11: [12], 13: [], 14: [15, 16], 17: [18], 20: [21], 22: [23], 24: [25], 26: [], 29: [30], 31: [32, 33],
    34: [35], 37: [38], 39: [40], 42: []}
CATS = [(10, [11, 13, 14, 17]), (19, [20, 22, 24, 26]), (28, [29, 31, 34]), (36, [37, 39]), (41, [42])]
parts = []
p1 = part(7); p1['categories'] = []
for cp, fams in CATS:
    c = catdiv(cp); c['families'] = []
    for fp in fams:
        f = family_intro(fp)
        f['productPages'] = [product_page(x) for x in FAM[fp]]
        c['families'].append(f)
    p1['categories'].append(c)
p1['colorChart'] = color_chart(27)
parts.append(p1)
p2 = part(43)
p2['systems'] = []
for ip, fp, sp in [(44, 45, [46, 47, 48, 49, 50]), (51, 52, [53, 54, 55]), (56, 57, [])]:
    s = system_intro(ip); s['features'] = system_features(fp); s['sectionPages'] = [system_sections(x) for x in sp]
    p2['systems'].append(s)
parts.append(p2)
p3 = part(58); p3['pages'] = [applications(x) for x in range(59, 66)]
parts.append(p3)
p4 = part(66); p4['containers'] = containers(67); p4['incoterms'] = incoterms(68)
parts.append(p4)
D['parts'] = parts
D['back'] = back(69)
ui['runHead'] = {n: run_head(n) for n in range(3, 69)}
# ürün listesi (çapraz kontrol için)
pl = []
for n in (8, 9):
    fs = fs_of(n)
    pl += [q['t'] for q in fs if q['s'] in (6.8, 7.2, 8.0, 8.6)]
D['_productList'] = pl
json.dump(D, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('ok', OUT, len(IMGCACHE), 'görsel')
