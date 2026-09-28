# Arapça içerik düzeltmesi: PDF'ten geri kazanılan metinleri sitenin i18n.js'teki
# Arapça metinleriyle eşleştir (harekesiz, boşluksuz karşılaştırma); eşleşen alanlarda
# sitenin temiz metnini kullan. Kalanlar için hedefli düzeltmeler.
import json, os, re, sys, unicodedata

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
A = json.load(open(os.path.join(ROOT, 'content', 'ar.json'), encoding='utf-8'))
T = json.load(open(os.path.join(ROOT, 'content', 'tr.json'), encoding='utf-8'))
S = json.load(open(os.path.join(ROOT, 'content', 'site-i18n.json'), encoding='utf-8'))['STRINGS']['ar']

def norm(s):
    s = unicodedata.normalize('NFKC', s)
    s = re.sub(r'[ً-ٰٟـ]', '', s)
    s = s.replace('أ', 'ا').replace('إ', 'ا').replace('آ', 'ا').replace('ى', 'ي').replace('ة', 'ه').replace('ی', 'ي').replace('ھ', 'ه')
    return re.sub(r'[^\w]', '', s)

pool = {}
def collect(o):
    if isinstance(o, dict): [collect(v) for v in o.values()]
    elif isinstance(o, list): [collect(v) for v in o]
    elif isinstance(o, str) and re.search(r'[؀-ۿ]', o):
        pool.setdefault(norm(o), o)
collect(S)

stats = {'match': 0, 'same': 0, 'miss': 0}
misses = []
def walk(o, path=''):
    if isinstance(o, dict):
        for k, v in o.items():
            if isinstance(v, str): o[k] = fix(v, path + '/' + k)
            else: walk(v, path + '/' + k)
    elif isinstance(o, list):
        for i, v in enumerate(o):
            if isinstance(v, str): o[i] = fix(v, f'{path}[{i}]')
            else: walk(v, f'{path}[{i}]')

def fix(s, path):
    if not re.search(r'[؀-ۿ]', s): return s
    n = norm(s)
    if n in pool:
        if pool[n] != s: stats['match'] += 1
        else: stats['same'] += 1
        return pool[n]
    stats['miss'] += 1
    misses.append((path, s))
    return s

walk(A)

# kaplama kalınlığı rozetleri: sayısal kısmı TR'den, etiket ve birim Arapçadan
for sp_a, sp_t in zip([sp for s_ in A['parts'][1]['systems'] for sp in s_['sectionPages']],
                      [sp for s_ in T['parts'][1]['systems'] for sp in s_['sectionPages']]):
    for se_a, se_t in zip(sp_a['sections'], sp_t['sections']):
        m = re.search(r':\s*(\S+)\s*mm', se_t['thickness'])
        lab = se_a['thickness'].split(':')[0].strip()
        if m and lab:
            se_a['thickness'] = f'{lab}: {m.group(1)} مم'
        # katman ayrıntısı (tane boyutu vb.) TR'deki sayılarla; birim Arapça
        for ra, rt in zip(se_a['rows'], se_t['rows']):
            if rt.get('detail'):
                ra['detail'] = rt['detail'].replace(' mm', ' مم').replace('mm', ' مم').replace('  ', ' ')

# ölçüler: çok satıra kırılan değerleri TR'deki sayılardan kur
def prods(D):
    return [p for c in D['parts'][0]['categories'] for f in c['families'] for p in (f['products'] + [x for pp in f['productPages'] for x in pp['products']])]
UNIT = [(' cm', ' سم'), (' mm', ' مم'), (' m', ' م'), ('rulo', 'لفة')]
for pa, pt in zip(prods(A), prods(T)):
    for sa, st in zip(pa['specs'], pt['specs']):
        if st['l'] in ('Ölçüler',) and pa['code'] == 'LK-AK-731':
            v = st['v']
            for a, b in UNIT: v = v.replace(a, b)
            sa['v'] = v

# şeddenin tâ-i merbûtaya yanlış bağlandığı birkaç kelime (هشةّ → هشّة)
def fix_marks(o):
    if isinstance(o, dict): return {k: fix_marks(v) for k, v in o.items()}
    if isinstance(o, list): return [fix_marks(v) for v in o]
    if isinstance(o, str): return re.sub(r'(\S)\u0629\u0651', '\\1\u0651\u0629', o)
    return o
A = fix_marks(A)
json.dump(A, open(os.path.join(ROOT, 'content', 'ar.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('eşleşme/düzeltme:', stats, 'havuz', len(pool))
if '-v' in sys.argv:
    for p, s in misses: print(p, '|', s)
