# Baskı varlıklarını hazırla: fontlar, logo varyantları, web için optimize görseller.
# Görsellerin İÇERİĞİ değişmez (ürün görselleri dahil) — yalnızca JPEG'e yeniden
# kodlanır ve gerekirse makul çözünürlüğe küçültülür (PDF boyutu için).
import json, os, re, shutil
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
B = os.path.join(ROOT, 'build')
os.makedirs(os.path.join(B, 'fonts'), exist_ok=True)
shutil.rmtree(os.path.join(B, 'img'), ignore_errors=True)
os.makedirs(os.path.join(B, 'img'), exist_ok=True)

TG = '/usr/share/texmf/fonts/opentype/public/tex-gyre/'
DV = '/usr/share/fonts/truetype/dejavu/'
import sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from otf2ttf import convert
for f in ['texgyreheros-regular', 'texgyreheros-bold', 'texgyreheros-italic', 'texgyreheroscn-regular', 'texgyreheroscn-bold']:
    dst = os.path.join(B, 'fonts', f + '.ttf')
    if not os.path.exists(dst): convert(TG + f + '.otf', dst)
for f in ['DejaVuSans.ttf', 'DejaVuSans-Bold.ttf', 'DejaVuSansCondensed.ttf', 'DejaVuSansCondensed-Bold.ttf']:
    shutil.copy(DV + f, os.path.join(B, 'fonts', f))

# logo: beyaz/alfa PNG'den tek renkli varyantlar (sitedeki logo-dark / logo-footer mantığı)
src = Image.open(os.path.join(ROOT, 'img-src', '4a503266b0ed.png')).convert('RGBA')
a = src.getchannel('A')
bbox = a.getbbox()
a = a.crop(bbox)
for name, col in [('logo-ink', (28, 25, 23)), ('logo-white', (255, 255, 255)), ('logo-amber', (251, 191, 36))]:
    im = Image.new('RGBA', a.size, col + (0,))
    im.putalpha(a)
    im.save(os.path.join(B, 'img', name + '.png'), optimize=True)

# kullanılan görseller (TR içerik yapısı tüm diller için ortak)
D = json.load(open(os.path.join(ROOT, 'content', 'tr.json')))
T_COVER = D['cover']['imgs'] + [D['intro']['logo']]
used = set()
def walk(o):
    if isinstance(o, dict): [walk(v) for v in o.values()]
    elif isinstance(o, list): [walk(v) for v in o]
    elif isinstance(o, str) and re.fullmatch(r'[0-9a-f]{12}\.(jpg|png)', o): used.add(o)
walk(D)
# render.py'nin ek olarak kullandığı fotoğraflar (kapak, içindekiler, arka kapak vb.)
used |= {'b9f3880361e1.jpg', '78034a880a05.jpg', 'fa6cf4c4a588.jpg', '2b31d9a81b6a.jpg', 'b80ab6c5b632.jpg',
         '2ca2ee1f38be.jpg', 'cf0041b7b776.jpg', 'e69ce003efd3.jpg', '276bdfbd9a27.jpg'}
# kapaktaki eski gri döşeme görselleri ve eski logo artık kullanılmıyor
used -= set(T_COVER)
n = 0; tot = 0
for f in sorted(used):
    im = Image.open(os.path.join(ROOT, 'img-src', f))
    out = os.path.join(B, 'img', f.rsplit('.', 1)[0] + '.jpg')
    if im.mode in ('RGBA', 'LA', 'P'):
        im = im.convert('RGBA'); bg = Image.new('RGB', im.size, (255, 255, 255)); bg.paste(im, mask=im.getchannel('A')); im = bg
    else:
        im = im.convert('RGB')
    if im.width > 1400:
        im = im.resize((1400, round(im.height * 1400 / im.width)), Image.LANCZOS)
    photo = im.width >= 1000
    im.save(out, 'JPEG', quality=68 if photo else 80, optimize=True, progressive=False, subsampling=2 if photo else 0)
    n += 1; tot += os.path.getsize(out)
print('görsel', n, 'toplam', round(tot / 1e6, 2), 'MB')
