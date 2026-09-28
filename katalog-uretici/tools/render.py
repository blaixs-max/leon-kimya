# Katalog HTML'ini üretir: python3 render.py <dil>
# İçerik: content/<dil>.json (eski PDF'ten çıkarılan metinler)
# Yapı + görseller: content/tr.json (dört dilde aynı sayfa yapısı, aynı görseller)
import json, os, re, sys, html
import segno

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LANG = sys.argv[1] if len(sys.argv) > 1 else 'tr'
RTL = LANG == 'ar'
L = json.load(open(os.path.join(ROOT, 'content', f'{LANG}.json'), encoding='utf-8'))
T = json.load(open(os.path.join(ROOT, 'content', 'tr.json'), encoding='utf-8'))
SITE = json.load(open(os.path.join(ROOT, 'content', 'site-i18n.json'), encoding='utf-8'))
SS = SITE['STRINGS'][LANG]
CONTACT = SITE['SITE_BASE']['contact']

def all_products(D):
    out = []
    for ci, c in enumerate(D['parts'][0]['categories']):
        for fi, f in enumerate(c['families']):
            for p in f['products']: out.append(((ci, fi, 'i', len(out)), p))
            for pi, pp in enumerate(f['productPages']):
                for p in pp['products']: out.append(((ci, fi, pi, len(out)), p))
    return out

def complete_specs():
    # Eski FR/AR PDF'lerinde bazı kartların son satırı taşma yüzünden basılmamıştı.
    # TR'deki eksiksiz listeyle hizalayıp etiket/değer çevirilerini diğer ürünlerden öğrenerek tamamla.
    if LANG == 'tr': return []
    PL, PT = all_products(L), all_products(T)
    lab, val = {}, {}
    for (_, pl), (_, pt) in zip(PL, PT):
        if len(pl['specs']) == len(pt['specs']):
            for a, b in zip(pt['specs'], pl['specs']):
                lab.setdefault(a['l'], b['l']); val.setdefault(a['v'], b['v'])
    fixed = []
    for (_, pl), (_, pt) in zip(PL, PT):
        if len(pl['specs']) < len(pt['specs']):
            have = [s_['l'] for s_ in pl['specs']]
            new = []
            ok = True
            for a in pt['specs']:
                ll = lab.get(a['l'])
                if ll is None: ok = False; break
                if ll in have: new.append(next(s_ for s_ in pl['specs'] if s_['l'] == ll)); continue
                vv = val.get(a['v'])
                if vv is None: ok = False; break
                new.append({'l': ll, 'v': vv})
            if ok and len(new) == len(pt['specs']):
                fixed.append((pl['code'], [x['l'] for x in new if x['l'] not in have]))
                pl['specs'] = new
    return fixed

def e(s):
    return html.escape(s or '', quote=True)

def img(ref, cls='', alt='', extra=''):
    if not ref: return ''
    f = ref.rsplit('.', 1)[0] + '.jpg'
    c = f' class="{cls}"' if cls else ''
    return f'<img{c} src="img/{f}" alt="{e(alt)}"{extra}>'

def up(s):
    # Türkçe büyük harf (CSS lang ile de yapılır; burada gerekmez)
    return s

def slug(s):
    return re.sub(r'[^a-z0-9]+', '-', (s or '').lower()).strip('-')

OUT = []
def flow(kind, blocks, run='', tab='', band=False, cols=False, conthead='', fid=''):
    attrs = f' data-kind="{kind}" data-run="{e(run)}" data-tab="{tab}"'
    if band: attrs += ' data-band="1"'
    if cols: attrs += ' data-cols="2"'
    ch = f'<div class="conthead">{conthead}</div>' if conthead else ''
    OUT.append(f'<section class="flow"{attrs}>{ch}{"".join(blocks)}</section>')

def kick(s): return f'<div class="kick">{e(s)}</div>' if s else ''

def band_blk(image, kicker, title, bid='', sub='', small=False):
    i = f' id="{bid}"' if bid else ''
    s = f'<div class="sub">{e(sub)}</div>' if sub else ''
    return (f'<div class="blk band{" sm" if small else ""}"{i}>{img(image)}'
            f'<div class="plate">{kick(kicker)}<h1 class="t">{e(title)}</h1>{s}</div></div>')

def ttl_blk(kicker, title, bid='', h='h1', lead=''):
    i = f' id="{bid}"' if bid else ''
    ld = f'<p class="lead">{e(lead)}</p>' if lead else ''
    return f'<div class="blk ttl"{i}>{kick(kicker)}<{h} class="t">{e(title)}</{h}>{ld}</div>'

def sech(kicker, title, cnt=''):
    c = f'<span class="cnt">{e(cnt)}</span>' if cnt else ''
    return f'<div class="blk sech kwn"><div>{kick(kicker)}<h2>{e(title)}</h2></div>{c}</div>'

def chk(items, cls=''):
    return f'<ul class="chk {cls}">' + ''.join(f'<li>{e(x)}</li>' for x in items) + '</ul>'

def chips(items):
    return '<div class="chips">' + ''.join(f'<span>{e(x)}</span>' for x in items) + '</div>'

def paras(ps, cls=''):
    return ''.join(f'<p class="{cls}">{e(p)}</p>' if cls else f'<p>{e(p)}</p>' for p in ps)

def ltr(s):
    return f'<span dir="ltr">{e(s)}</span>'

# ---------- ürün kartları ----------
PROD_IMG = {}
def collect_imgs():
    for c in T['parts'][0]['categories']:
        for f in c['families']:
            for p in f['products']:
                PROD_IMG[p['code']] = p.get('img')
            for pp in f['productPages']:
                for p in pp['products']:
                    PROD_IMG[p['code']] = p.get('img')
collect_imgs()

def pid(code, fk=''): return 'pr-' + slug(code) + (('-' + fk) if fk else '')

def card(p, variant, fk=''):
    im = PROD_IMG.get(p['code'])
    if im:
        pic = f'<div class="pic">{img(im, alt=p["name"])}</div>'
    else:
        pic = ''
    specs = p.get('specs') or []
    sp = ''
    if specs:
        one = ' one' if (variant == 'tile' or len(specs) == 1) else ''
        sp = f'<dl class="specs{one}">' + ''.join(f'<div><dt>{e(s["l"])}</dt><dd>{e(s["v"])}</dd></div>' for s in specs) + '</dl>'
    desc = f'<p class="desc">{e(p["desc"])}</p>' if p.get('desc') else ''
    return (f'<article class="card {variant}{"" if pic else " nopic"}" id="{pid(p["code"], fk)}">{pic}<div class="bd">'
            f'<div class="meta"><span class="no">{e(p["no"])}</span><span class="code">{e(p["code"])}</span></div>'
            f'<h3>{e(p["name"])}</h3>{desc}{sp}</div></article>')

def placeholder_svg(code):
    # görseli olmayan ürünler için nötr kod kartı (yeni görsel üretmeden)
    return (f'<svg viewBox="0 0 160 100" width="100%" style="display:block"><rect width="160" height="100" style="fill:var(--bg-2)"/>'
            f'<rect x="0" y="92" width="160" height="8" style="fill:var(--brand)"/>'
            f'<g transform="translate(80 44)" style="fill:none;stroke:var(--line-2);stroke-width:2">'
            f'<rect x="-20" y="-22" width="40" height="44" rx="4"/><path d="M-20 -10 H20"/><path d="M-8 -30 H8 V-22 H-8 Z"/></g>'
            f'<text x="80" y="84" text-anchor="middle" style="font:700 9px var(--fh);fill:var(--mut);letter-spacing:.08em" direction="ltr">{e(code)}</text></svg>')

def product_blocks(products, variant, ncol=3, fk=''):
    if variant == 'row':
        return [f'<div class="blk">{card(p, "row", fk)}</div>' for p in products]
    out = []
    for i in range(0, len(products), ncol):
        grp = products[i:i + ncol]
        out.append(f'<div class="blk cards-row n{ncol}">' + ''.join(card(p, 'tile', fk) for p in grp) + '</div>')
    return out

def pick_variant(products):
    mx = max([len(p.get('specs') or []) for p in products] + [0])
    if mx >= 4 or (mx == 3 and len(products) <= 3): return 'row', 1
    if len(products) == 1: return 'row', 1
    if len(products) in (2, 4): return 'tile', 2
    return 'tile', 3

# ---------- katman kesiti (şematik) ----------
MAT_H = {'primer': 7, 'adh': 7, 'line': 5.5, 'top': 7, 'putty': 8.5, 'rub': 19, 'epdm': 16, 'pu': 12.5, 'spray': 9.5,
         'acr': 9.5, 'acr2': 9.5, 'mortar': 21, 'ep': 8.5, 'ep2': 9.5, 'epsl': 11.5, 'tex': 8.5, 'screed': 14}
SPECKLE = {'rub', 'epdm', 'mortar', 'spray'}

def mat_of(name_tr, code):
    n = (name_tr or '').lower()
    if 'astar' in n: return 'primer'
    if 'yapıştırıcı' in n: return 'adh'
    if 'rulo pad' in n or 'kauçuk zemin' in n or 'sbr' in n or 'kauçuk bağlayıcı' in n: return 'rub'
    if 'epdm' in n: return 'epdm'
    if 'macun' in n: return 'putty'
    if 'şap' in n: return 'screed'
    if 'sprey' in n: return 'spray'
    if 'çizgi' in n: return 'line'
    if 'cushion' in n: return 'acr2'
    if n.startswith('akrilik'): return 'acr'
    if 'harç' in n: return 'mortar'
    if 'tekstür' in n: return 'tex'
    if 'epoksi' in n and 'self' in n: return 'epsl'
    if 'epoksi ara' in n: return 'ep2'
    if 'epoksi' in n: return 'ep'
    if 'self-levelling' in n or 'ara kat' in n: return 'pu'
    if 'boya' in n: return 'top'
    return 'ep2'

def stack_svg(rows_tr, sub_label, uid):
    mats = [mat_of(r['name'], r['code']) for r in rows_tr]
    n = len(mats)
    W, dx, dy = 236.0, 36.0, -19.0
    x0, xR = 4.0, 190.0
    step = min(22.0, 128.0 / max(n, 1))
    hs = 30.0
    hts = [MAT_H.get(m, 7) for m in mats]
    total = hs + sum(hts)
    H = total + 10
    y = H - 2 - hs  # alt katmanın üst kenarı
    parts = []
    defs = (f'<defs><pattern id="sp{uid}" width="5" height="5" patternUnits="userSpaceOnUse">'
            f'<circle cx="1.2" cy="1.3" r=".62" fill="rgba(255,255,255,.42)"/><circle cx="3.7" cy="3.6" r=".55" fill="rgba(0,0,0,.42)"/>'
            f'<circle cx="3.9" cy="1" r=".35" fill="rgba(255,255,255,.3)"/></pattern>'
            f'<pattern id="ht{uid}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">'
            f'<line x1="0" y1="0" x2="0" y2="6" stroke="rgba(0,0,0,.10)" stroke-width="1.4"/></pattern></defs>')
    def slab(xl, ytop, h, var, speck=False, hatch=False):
        s = []
        # ön yüz
        s.append(f'<rect x="{xl:.1f}" y="{ytop:.1f}" width="{xR - xl:.1f}" height="{h:.1f}" style="fill:var({var})"/>')
        if speck: s.append(f'<rect x="{xl:.1f}" y="{ytop:.1f}" width="{xR - xl:.1f}" height="{h:.1f}" fill="url(#sp{uid})"/>')
        if hatch: s.append(f'<rect x="{xl:.1f}" y="{ytop:.1f}" width="{xR - xl:.1f}" height="{h:.1f}" fill="url(#ht{uid})"/>')
        # üst yüz
        top = f'{xl:.1f},{ytop:.1f} {xl + dx:.1f},{ytop + dy:.1f} {xR + dx:.1f},{ytop + dy:.1f} {xR:.1f},{ytop:.1f}'
        s.append(f'<polygon points="{top}" style="fill:var({var})"/>')
        if speck: s.append(f'<polygon points="{top}" fill="url(#sp{uid})"/>')
        s.append(f'<polygon points="{top}" fill="rgba(255,255,255,.26)"/>')
        # yan yüz
        side = f'{xR:.1f},{ytop:.1f} {xR + dx:.1f},{ytop + dy:.1f} {xR + dx:.1f},{ytop + dy + h:.1f} {xR:.1f},{ytop + h:.1f}'
        s.append(f'<polygon points="{side}" style="fill:var({var})"/><polygon points="{side}" fill="rgba(0,0,0,.2)"/>')
        s.append(f'<path d="M{xl:.1f} {ytop:.1f} H{xR:.1f} M{xR:.1f} {ytop:.1f} L{xR + dx:.1f} {ytop + dy:.1f}" stroke="rgba(0,0,0,.18)" stroke-width=".5" fill="none"/>')
        return ''.join(s)
    # zemin
    parts.append(slab(x0, y, hs, '--m-sub', hatch=True))
    lab = e(sub_label)
    if RTL:
        parts.append(f'<text x="{xR - 6:.1f}" y="{y + hs - 8:.1f}" direction="rtl" text-anchor="start" style="font:700 8px var(--f);fill:rgba(28,25,23,.6)">{lab}</text>')
    else:
        parts.append(f'<text x="{x0 + 6:.1f}" y="{y + hs - 8:.1f}" style="font:700 8px var(--f);fill:rgba(28,25,23,.6)">{lab}</text>')
    badges = []
    cur = y
    for i, (m, h) in enumerate(zip(mats, hts)):
        xl = x0 + (i + 1) * step
        ytop = cur - h
        parts.append(slab(xl, ytop, h, '--m-' + m, speck=m in SPECKLE))
        # rozet: katmanın görünen basamağına
        bx = xl + min(step, 20) / 2 + 5 + dx * .5
        by = ytop + dy * .5
        badges.append((bx, by, i + 1))
        cur = ytop
    for bx, by, k in badges:
        parts.append(f'<g transform="translate({bx:.1f} {by:.1f})"><circle r="6.6" style="fill:var(--dk)" stroke="#fff" stroke-width="1"/>'
                     f'<text y="2.7" text-anchor="middle" style="font:700 7.6px var(--fh);fill:#fff">{k}</text></g>')
    vb_top = min(cur + dy - 9, 0)
    return (f'<svg viewBox="0 {vb_top:.1f} {W:.0f} {H - vb_top:.1f}" role="img">{defs}{"".join(parts)}</svg>')

FIXED = complete_specs()
if FIXED: print('tamamlanan özellik satırları:', FIXED)
# ---------- sayfa blokları ----------
C = L['cover']; TC = T['cover']
parts = L['parts']; TP = T['parts']
cats = parts[0]['categories']; TCATS = TP[0]['categories']
LOGO_INK = 'img/logo-ink.png'
SITE_URL = C['site'] or 'leonkimya.com'

# konu dışı veya art arda tekrar eden ürün DIŞI fotoğraflar — ürün görsellerine dokunulmaz
def swap_images():
    fam = T['parts'][0]['categories'][1]['families'][2]          # Taş bağlayıcıları: ev fotoğrafı yerine taş halı dokusu
    if fam.get('img') == 'f898b5cef6b4.jpg':
        fam['img'] = 'e69ce003efd3.jpg'
        fam['gallery'] = [g for g in fam.get('gallery', []) if g != 'e69ce003efd3.jpg']
    cat = T['parts'][0]['categories'][4]                          # Su izolasyonu açılışı: aile bandıyla aynı fotoğraftı
    if cat.get('img') == 'db9f0c046d13.jpg':
        cat['img'] = '276bdfbd9a27.jpg'
swap_images()
# 1) KAPAK
mos = ['b9f3880361e1.jpg', '78034a880a05.jpg', 'fa6cf4c4a588.jpg', '2b31d9a81b6a.jpg']
fams_cover = ''.join(f'<span>{e(c["title"])}</span>' for c in cats)
OUT.append(f'''<section class="flow" data-kind="full"><div class="page full cover">
<div class="mos">{''.join(img(m) for m in mos)}</div>
<img class="lgc" src="img/logo-white.png" alt="Leon Kimya">
<div class="yr">{e(C['edition'])}</div>
<div class="cb"><div class="bar"></div><h1>{e(C['title'])}</h1><div class="tag">{e(C['tagline'])}</div></div>
<div class="fams">{fams_cover}</div>
<div class="foot"><span></span><span>{e(SITE_URL)}</span></div>
</div></section>''')

# 2) İÇİNDEKİLER
def toc_e(title, ref, cls=''):
    return f'<a class="toc-e {cls}" data-href="{ref}"><span class="x">{e(title)}</span><span class="p" data-ref="{ref}"></span></a>'
def toc_part(no, title, ref, entries):
    return (f'<div class="toc-part"><a class="ph" data-href="{ref}" style="text-decoration:none"><span class="i">{e(no)}</span>'
            f'<span class="x">{e(title)}</span><span class="p" data-ref="{ref}"></span></a>{"".join(entries)}</div>')
corp = L['corporate']; why = L['why']; std = L['standards']
left = []
ents = [toc_e(L['productList']['title'], 'plist')]
for ci, c in enumerate(cats):
    ents.append(toc_e(c['title'], f'cat{ci}', 'cat'))
    for fi, f in enumerate(c['families']):
        ents.append(toc_e(f['title'], f'fam{ci}-{fi}', 'sub'))
        if ci == 1 and fi == len(c['families']) - 1:
            ents.append(toc_e(parts[0]['colorChart']['title'], 'colors', 'sub'))
left.append(toc_part(parts[0]['no'], parts[0]['title'], 'part0', ents))
right = []
right.append(toc_part('00', corp['kicker'].title() if not RTL else corp['kicker'], 'corp',
                      [toc_e(corp['title'], 'corp'), toc_e(why['title'], 'why'), toc_e(std['title'], 'std')]))
right.append(toc_part(parts[1]['no'], parts[1]['title'], 'part1', [toc_e(s['title'], f'sys{i}') for i, s in enumerate(parts[1]['systems'])]))
right.append(toc_part(parts[2]['no'], parts[2]['title'], 'part2', [toc_e(parts[2]['pages'][0]['title'], 'apps')]))
right.append(toc_part(parts[3]['no'], parts[3]['title'], 'part3', [toc_e(parts[3]['containers']['title'], 'cont'), toc_e(parts[3]['incoterms']['title'], 'inco')]))
flow('std', [band_blk('b80ab6c5b632.jpg', L['ui']['tocKicker'], L['ui']['tocTitle'], 'toc', small=True),
             f'<div class="blk toc-grid"><div>{"".join(left)}</div><div>{"".join(right)}</div></div>'],
     run=L['ui']['tocTitle'], band=True)

# 3) KURUMSAL
tcorp = T['corporate']
flow('std', [band_blk(tcorp['img'], corp['kicker'], corp['title'], 'corp'),
             f'<div class="blk intro"><p class="lead">{e(corp["lead"])}</p><div class="cols2">{paras(corp["cols"][0] + corp["cols"][1])}</div></div>',
             '<div class="blk strip">' + ''.join(img(g) for g in tcorp['gallery']) + '</div>'],
     run=corp['kicker'], band=True)
# 4) NEDEN
items = ''.join(f'<div class="why-it"><div class="i">{e(it["no"])}</div><div><h3>{e(it["title"])}</h3><p>{e(it["text"])}</p></div></div>' for it in why['items'])
flow('std', [ttl_blk(why['kicker'], why['title'], 'why', lead=why['lead']),
             f'<div class="blk why-grid">{items}</div>',
             '<div class="blk grow">' + img('2ca2ee1f38be.jpg', 'fillimg') + '</div>'],
     run=why['kicker'])
# 5) STANDARTLAR
sb = [ttl_blk(std['kicker'], std['title'], 'std', lead=std['lead'])]
for si, sec in enumerate(std['sections']):
    tb = ''
    if 'table' in sec:
        t = sec['table']
        th = ''.join(f'<th>{e(h)}</th>' for h in t['head'])
        rows = ''
        for r in t['rows']:
            cells = ''
            for ci_, c in enumerate(r):
                cls = ' class="k"' if (si == 0 and ci_ == 0) else (' class="b"' if (si == 1 and ci_ == 1) else '')
                cells += f'<td{cls}>{e(c)}</td>'
            rows += f'<tr>{cells}</tr>'
        tb = f'<table class="t"><thead><tr>{th}</tr></thead><tbody>{rows}</tbody></table>'
    note = f'<p class="note">{e(sec["note"])}</p>' if sec.get('note') else ''
    sb.append(f'<div class="blk std-sec"><h3>{e(sec["title"])}</h3>{note}{tb}</div>')
FALLBACK = {'fr': "Les copies de certificats, les rapports d'essai et les déclarations de performance sont fournis sur demande."}
sb.append(f'<div class="blk"><p class="note">{e(std["footnote"] or FALLBACK.get(LANG, ""))}</p></div>')
flow('std', sb, run=std['kicker'])

# 6) BÖLÜM 01 — ÜRÜNLER
def divider(no, title, desc, image, links, pid_, tab, kicker='', cat=False):
    lk = ''.join(f'<a data-href="{r}"><span class="i">{e(i_)}</span><span class="x">{e(t)}</span><span class="p" data-ref="{r}"></span></a>' for i_, t, r in links)
    big = f'<div class="big">{e(no)}</div>' if no else ''
    d = f'<p>{e(desc)}</p>' if desc else ''
    OUT.append(f'''<section class="flow" data-kind="full" data-tab="{tab}"><div class="page full div{' cat' if cat else ''}">
{img(image, 'bg')}<div class="shade"></div>
<img class="lgx" src="img/logo-white.png" alt="Leon Kimya"><div class="ptag">{e(C['title'])}</div>
<div class="dv" id="{pid_}">{big}{kick(kicker)}<h1>{e(title)}</h1>{d}<div class="dl">{lk}</div></div>
</div></section>''')

p0, tp0 = parts[0], TP[0]
divider(p0['no'], p0['title'], p0['desc'], tp0['img'],
        [('', L['productList']['title'], 'plist')] + [(f'{i + 1:02d}', c['title'], f'cat{i}') for i, c in enumerate(cats)], 'part0', '01')

# ürün listesi (kod + ad + sayfa)
pl = [f'<div class="blk ttl pl-t" id="plist" style="column-span:all">{kick(L["productList"]["kicker"])}<h1 class="t">{e(L["productList"]["title"])}</h1></div>']
for ci, c in enumerate(cats):
    for fi, f in enumerate(c['families']):
        prods = list(f['products']) + [p for pp in f['productPages'] for p in pp['products']]
        rows = f'<div class="pl-fam">{e(f["title"])}</div>'
        for p in prods:
            rows += f'<a class="pl-row" data-href="{pid(p["code"], f"{ci}{fi}")}"><span class="code">{e(p["code"])}</span><span>{e(p["name"])}</span><span class="p" data-ref="{pid(p["code"], f"{ci}{fi}")}"></span></a>'
        hd = f'<h3><span>{e(c["title"])}</span></h3>' if fi == 0 else ''
        pl.append(f'<div class="blk pl-cat{" first" if fi == 0 else ""}">{hd}{rows}</div>')
flow('std', pl, run=L['productList']['kicker'], tab='01', cols=True)

# "Ürün Ailesi" başlığı (dilin kendi metni)
PF_TITLE = next(pp['title'] for c_ in cats for f_ in c_['families'] for pp in f_['productPages'])
# kategoriler + aileler
for ci, (c, tc) in enumerate(zip(cats, TCATS)):
    divider('', c['title'], '', tc['img'], [(f'{fi + 1:02d}', f['title'], f'fam{ci}-{fi}') for fi, f in enumerate(c['families'])] +
            ([('', parts[0]['colorChart']['title'], 'colors')] if ci == 1 else []), f'cat{ci}', '01', kicker=c['kicker'], cat=True)
    for fi, (f, tf) in enumerate(zip(c['families'], tc['families'])):
        bl = [band_blk(tf.get('img') or (tf.get('gallery') or [None])[0], c['title'], f['title'], f'fam{ci}-{fi}')]
        bl.append(f'<div class="blk intro"><p class="lead">{e(f["lead"])}</p><div class="cols2">{paras(f["paras"])}</div></div>')
        if f['uses'] or f['areas']:
            u = f'<div><div class="lbl">{e(f.get("hUses", ""))}</div>{chk(f["uses"])}</div>' if f['uses'] else ''
            a = f'<div><div class="lbl">{e(f.get("hAreas", ""))}</div>{chips(f["areas"])}</div>' if f['areas'] else ''
            bl.append(f'<div class="blk ua{"" if (u and a) else " one"}">{u}{a}</div>')
        gal = [g for g in (tf.get('gallery') or []) if g != tf.get('img')]
        if gal:
            bl.append(f'<div class="blk gal g{min(len(gal), 3)}">' + ''.join(img(g) for g in gal[:3]) + '</div>')
        # ürünler
        groups = []
        if f['products']:
            groups.append({'title': f.get('hProducts', ''), 'products': f['products'], 'features': [], 'hFeatures': ''})
        for pp in f['productPages']:
            groups.append({'title': pp['title'], 'products': pp['products'], 'features': pp.get('features', []), 'hFeatures': pp.get('hFeatures', '')})
        conth = ''
        allp = sum(len(g['products']) for g in groups)
        first = True
        for g in groups:
            if not g['products']: continue
            var, ncol = pick_variant(g['products'])
            pb = product_blocks(g['products'], var, ncol, f'{ci}{fi}')
            if first:
                title = PF_TITLE
                hdr = sech(f['title'], title)
                conth = f'<div class="sech"><div>{kick(f["title"])}<h2>{e(title)}</h2></div></div>'
                # başlık + ilk kart birlikte
                pb[0] = pb[0]
                bl.append(hdr)
                first = False
            bl += pb
            if g['features']:
                bl.append(f'<div class="blk feat"><div class="lbl">{e(g["hFeatures"])}</div>{chk(g["features"], "c2")}</div>')
        # EPDM renk kartelası (Bağlayıcılar kategorisinin sonunda, aynı akışta)
        if ci == 1 and fi == len(c['families']) - 1:
            cc, tcc = parts[0]['colorChart'], tp0['colorChart']
            sw = ''.join(f'<figure><div class="dot">{img(s["img"])}</div><figcaption>{e(ls["label"])}</figcaption></figure>'
                         for s, ls in zip(tcc['swatches'], cc['swatches']))
            bl.append(f'<div class="blk ttl kwn cc" id="colors">{kick(cc["kicker"])}<h2 class="t">{e(cc["title"])}</h2><p class="lead">{e(cc["lead"])}</p></div>')
            bl.append(f'<div class="blk sw">{sw}</div>')
        flow('std', bl, run=c['title'], tab='01', band=True, conthead=conth)

# 7) BÖLÜM 02 — SİSTEMLER
p1, tp1 = parts[1], TP[1]
divider(p1['no'], p1['title'], p1['desc'], tp1['img'], [(f'{i + 1:02d}', s['title'], f'sys{i}') for i, s in enumerate(p1['systems'])], 'part1', '02')
SUBLAB = [SS['layers'].get('substrate', ''), SS['layers'].get('concrete', ''), SS['layers'].get('surface', '')]
for si, (s, ts) in enumerate(zip(p1['systems'], tp1['systems'])):
    bl = [band_blk(ts['img'], s['kicker'], s['title'], f'sys{si}')]
    bl.append(f'<div class="blk intro"><p class="lead">{e(s["lead"])}</p><div class="cols2">{paras(s["paras"])}</div></div>')
    if s.get('areas'):
        bl.append(f'<div class="blk ua one"><div><div class="lbl">{e(s.get("hAreas", ""))}</div>{chips(s["areas"])}</div></div>')
    ft, tft = s['features'], ts['features']
    fb = f'<div class="lbl">{e(ft["title"])}</div>{chk(ft["features"], "c2")}'
    if ft['paras']: fb += '<div style="margin-top:3mm">' + paras(ft['paras']) + '</div>'
    bl.append(sech(ft['kicker'], ft['title']) if False else f'<div class="blk feat">{fb}</div>')
    if tft['gallery']:
        bl.append(f'<div class="blk gal g4s">' + ''.join(img(g) for g in tft['gallery'][:4]) + '</div>')
    if s['sectionPages']:
        sp0 = s['sectionPages'][0]
        bl.append(sech(s['title'], sp0['title']))
        conth = f'<div class="sech"><div>{kick(s["title"])}<h2>{e(sp0["title"])}</h2></div></div>'
        k = 0
        for spi, (sp, tsp) in enumerate(zip(s['sectionPages'], ts['sectionPages'])):
            for sei, (se, tse) in enumerate(zip(sp['sections'], tsp['sections'])):
                head = se['head'] or ['#', '', '']
                rows = ''
                for r, tr_ in zip(se['rows'], tse['rows']):
                    m = mat_of(tr_['name'], tr_['code'])
                    det = f'<span class="dt">{e(r["detail"])}</span>' if r.get('detail') else ''
                    code = f'<div><span class="code">{e(r["code"])}</span></div>' if r.get('code') else ''
                    rows += (f'<tr><td class="no">{e(r["no"])}</td><td><span class="sw-dot" style="background:var(--m-{m})"></span>'
                             f'<span class="ln">{e(r["name"])}</span>{det}{code}</td><td class="am">{e(r["amount"])}</td></tr>')
                lab = SUBLAB[1] if si == 1 else (SUBLAB[2] if si == 2 else SUBLAB[0])
                svg = stack_svg(tse['rows'], lab, f'{si}{spi}{sei}')
                desc = f'<p class="sdesc">{e(se["desc"])}</p>' if se.get('desc') else '<p class="sdesc"></p>'
                bl.append(f'<div class="blk sys"><header><h3>{e(se["name"])}</h3><span class="thk">{e(se["thickness"])}</span></header>{desc}'
                          f'<div class="sysg"><div class="dia">{svg}</div><table class="lt"><thead><tr><th>{e(head[0])}</th><th>{e(head[1])}</th>'
                          f'<th class="am">{e(head[2])}</th></tr></thead><tbody>{rows}</tbody></table></div></div>')
                k += 1
        fn = s['sectionPages'][-1].get('footnote', '')
        notes = f'<div class="dnote">{e(fn)}<br>{e(SS["ui"].get("layersNote", ""))}</div>'
        bl[-1] = bl[-1][:-len('</div>')] + notes + '</div>'
        flow('std', bl, run=p1['title'], tab='02', band=True, conthead=conth)
    else:
        flow('std', bl, run=p1['title'], tab='02', band=True)

# 8) BÖLÜM 03 — UYGULAMA ALANLARI
p2, tp2 = parts[2], TP[2]
divider(p2['no'], p2['title'], p2['desc'], tp2['img'], [('', p2['pages'][0]['title'], 'apps')], 'part2', '03')
ab = [ttl_blk(p2['pages'][0]['kicker'], p2['pages'][0]['title'], 'apps')]
k = 0
for pg, tpg in zip(p2['pages'], tp2['pages']):
    for it, tit in zip(pg['items'], tpg['items']):
        k += 1
        ps = it['paras']
        sm = f'<p class="sum">{e(ps[0])}</p>' if ps else ''
        rest = paras(ps[1:])
        ab.append(f'<article class="blk app">{img(tit["img"], "hero", it["title"])}<div class="txt"><div><div class="no">{k:02d}</div>'
                  f'<h3>{e(it["title"])}</h3></div><div>{sm}{rest}</div></div></article>')
flow('std', ab, run=p2['title'], tab='03')

# 9) BÖLÜM 04 — İHRACAT
p3, tp3 = parts[3], TP[3]
divider(p3['no'], p3['title'], p3['desc'], tp3['img'], [('01', p3['containers']['title'], 'cont'), ('02', p3['incoterms']['title'], 'inco')], 'part3', '04')
ct, it_ = p3['containers'], p3['incoterms']
XP = SS['exp']; SB = SITE['SITE_BASE']
def fmt_num(n):
    loc = 'en' if LANG in ('ar', 'en') else LANG
    n = int(n)
    sep = {'tr': '.', 'fr': '\u202f', 'en': ',', 'ar': ','}.get(loc, ',')
    return f'{n:,}'.replace(',', sep)
def cont_table():
    th = ''.join(f'<th>{e(XP["cCols"][k])}</th>' for k in ('type', 'inner', 'door', 'vol', 'tare', 'pay', 'load'))
    rows = ''
    for c in SB['containers']:
        cn = XP['cNames'][c['k']]
        a_, _, b_ = cn.partition(' — ')
        cname = (ltr(a_) + ' — ' + e(b_)) if b_ else e(cn)
        rows += (f'<tr><td class="b">{cname}</td><td class="r">{ltr(f"{c[chr(76)]} × {c[chr(87)]} × {c[chr(72)]} m")}</td>'
                 f'<td class="r">{ltr(f"{c[chr(100)+chr(87)]} × {c[chr(100)+chr(72)]} m")}</td><td class="r">{ltr(str(c["vol"]) + " m³")}</td>'
                 f'<td class="r">{ltr(fmt_num(c["tare"]) + " kg")}</td><td class="r b">{ltr(fmt_num(c["pay"]) + " kg")}</td>'
                 f'<td>{e(str(c["ibc"]) + " × " + XP["loadIbc"])}<br><span class="note">{e(str(c["drum"]) + " × " + XP["loadDrum"])}</span></td></tr>')
    return f'<table class="t"><thead><tr>{th}</tr></thead><tbody>{rows}</tbody></table>'
def inco_table():
    th = ''.join(f'<th>{e(XP["iCols"][k])}</th>' for k in ('code', 'name', 'mode', 'freight', 'ins', 'risk'))
    rows = ''
    for t in SB['incoterms']:
        s_ = XP['terms'].get(t['code'], {})
        ins = s_.get('ins') or (XP['seller'] if t.get('ins') == 'S' else XP['none'])
        mode = XP['modeSea'] if t.get('mode') == 'sea' else XP['modeAny']
        fr_ = XP['seller'] if t.get('freight') == 'S' else XP['buyer']
        rows += (f'<tr><td class="k">{e(t["code"])}</td><td>{e(s_.get("n", ""))}</td><td>{e(mode)}</td><td>{e(fr_)}</td>'
                 f'<td>{e(ins)}</td><td>{e(s_.get("risk", ""))}</td></tr>')
    return f'<table class="t inco"><thead><tr>{th}</tr></thead><tbody>{rows}</tbody></table>'
eb = [ttl_blk(ct['kicker'], XP['cTitle'], 'cont', lead=XP['cSub']),
      f'<div class="blk">{cont_table()}<p class="note" style="margin-top:2.6mm">{e(XP["cNote"])}</p></div>',
      '<div class="blk strip s2">' + ''.join(img(g) for g in tp3['containers']['gallery'][:2]) + '</div>',
      '<div class="blk pb"></div>',
      ttl_blk(it_['kicker'], XP['iTitle'], 'inco', lead=XP['iSub']),
      f'<div class="blk split">{inco_table()}</div>',
      f'<div class="blk"><p class="note">{e(XP["iNote"])}</p></div>']
flow('std', eb, run=p3['title'], tab='04')

# 10) ARKA KAPAK
bk = L['back']
qr = segno.make('https://leonkimya.com', error='m')
qsvg = qr.svg_inline(dark='#161311', light=None, border=0, omitsize=True)
cells = ''
tel = {CONTACT.get('phone1', ''): CONTACT.get('tel1', ''), CONTACT.get('mobile', ''): CONTACT.get('telMobile', '')}
for ci_, cinfo in enumerate(bk['contact']):
    vals = []
    raw = cinfo['value']
    if ci_ == 0 and len(raw) > 1: raw = [' '.join(raw)]   # adres: satır kırılımını tarayıcıya bırak
    for v in raw:
        if '@' in v: vals.append(f'<a href="mailto:{e(v)}">{ltr(v)}</a>')
        elif v in tel and tel[v]: vals.append(f'<a href="tel:{e(tel[v])}">{ltr(v)}</a>')
        elif not re.search(r'[\u0600-\u06FF]', v): vals.append(ltr(v))
        else: vals.append(e(v))
    cells += f'<div><div class="l">{e(cinfo["label"])}</div><div class="v">{"<br>".join(vals)}</div></div>'
OUT.append(f'''<section class="flow" data-kind="full"><div class="page full back">
{img('cf0041b7b776.jpg', 'bgt')}<div class="shade"></div>
<div class="inner">
<img class="lgb" src="img/logo-amber.png" alt="Leon Kimya">
<div class="tg">{e(bk['tagline'])}</div><div class="bar"></div>
<div class="cg">{cells}</div>
<div class="qr"><div class="q">{qsvg}</div><div class="u"><a href="https://leonkimya.com" style="color:#fff;text-decoration:none">{e(SITE_URL)}</a><small>{e(C['title'])} · {e(C['edition'])}</small></div></div>
<div class="disc">{e(bk['disclaimer'])}<div class="c">{e(bk['copyright'])}</div></div>
</div></div></section>''')

TITLE = f'Leon Kimya — {C["title"]}'
doc = f'''<!doctype html>
<html lang="{LANG}"{' dir="rtl"' if RTL else ''}>
<head><meta charset="utf-8"><title>{e(TITLE)}</title>
<meta name="author" content="Leon Kimya"><meta name="description" content="{e(C['tagline'])}">
<link rel="stylesheet" href="catalog.css"></head>
<body>
<div id="src" data-logo="{LOGO_INK}" data-site="{e(SITE_URL)}">{''.join(OUT)}</div>
<div id="book"></div>
<script src="catalog.js"></script>
</body></html>'''
os.makedirs(os.path.join(ROOT, 'build'), exist_ok=True)
open(os.path.join(ROOT, 'build', f'catalog-{LANG}.html'), 'w', encoding='utf-8').write(doc)
print('ok', LANG, len(doc))
