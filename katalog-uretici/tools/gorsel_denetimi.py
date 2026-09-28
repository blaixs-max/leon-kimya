# Görsel tekrar denetimi — site (assets/i18n.js) ve katalog (build/catalog-*.html)
#   python katalog-uretici/tools/gorsel_denetimi.py
# Kural: ürün dışı bir fotoğraf sitede tek bir varlıkta, katalogda tek bir yerde.
# Kart ile kendi paneli (uygulama kartı + #detay paneli, sistem sekmesi + paneli)
# aynı görseli paylaşabilir. Ürün kartları (productImgs, katalogdaki .pic) kural
# dışında ama içlerindeki fotoğraf başka yerde kullanılamaz.
import json, os, re, subprocess, sys, collections
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REPO = os.path.dirname(ROOT)
hata = 0

js = """global.window={};require(process.argv[1]);const B=window.SITE_BASE;
const u=[],p=[];
B.categories.forEach((c,i)=>u.push([c.img,'hero'+i]));
B.systems.forEach(s=>[s.img,...(s.gallery||[])].forEach(g=>u.push([g,s.L])));
B.applications.forEach(a=>u.push([a.img,a.L]));
u.push([B.aboutImage,'about']);
B.families.forEach(f=>[f.img,...(f.swatches||[])].filter(Boolean).forEach(x=>p.push(x)));
for(const [k,d] of Object.entries(B.details)){
  [d.img,...(k==='epdm'?[]:(d.gallery||[]))].forEach(g=>u.push([g,k]));
  if(k==='epdm')(d.gallery||[]).forEach(x=>p.push(x));
  (d.productImgs||[]).forEach(x=>p.push(x));}
console.log(JSON.stringify({u,p}));"""
r = json.loads(subprocess.run(['node', '-e', js, os.path.join(REPO, 'assets', 'i18n.js')],
                              capture_output=True, text=True, check=True).stdout)
ent = collections.defaultdict(set)
for img, k in r['u']: ent[img].add(k)
urun = set(r['p'])
for img, ks in sorted(ent.items()):
    if len(ks) > 1: print('SİTE tekrar:', img, sorted(ks)); hata += 1
    if img in urun: print('SİTE ürün kartında da:', img); hata += 1
print('site: ürün dışı', len(ent), 'görsel')

for l in ['tr', 'en', 'fr', 'ar']:
    f = os.path.join(ROOT, 'build', f'catalog-{l}.html')
    if not os.path.exists(f): print('katalog', l, ': önce build.py çalıştırın'); continue
    h = open(f, encoding='utf-8').read()
    h = h[h.index('<div id="src"'):h.index('<div id="book">')]
    hepsi = collections.Counter(x for x in re.findall(r'<img[^>]*src="img/([^"]+)"', h) if not x.startswith('logo-'))
    kart = collections.Counter(re.findall(r'<div class="(?:pic|dot)"><img src="img/([^"]+)"', h))
    for img, n in hepsi.items():
        d = n - kart.get(img, 0)
        if d > 1: print('KATALOG', l, 'tekrar:', img, d); hata += 1
        if d > 0 and img in kart: print('KATALOG', l, 'ürün kartında da:', img); hata += 1
    print('katalog', l, ': ürün dışı', sum(1 for i, n in hepsi.items() if n - kart.get(i, 0) > 0), 'görsel')
print('SORUN YOK' if not hata else f'{hata} sorun')
sys.exit(1 if hata else 0)
