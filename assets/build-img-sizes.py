# -*- coding: utf-8 -*-
"""
Leon Kimya — görsel ölçü haritası üreteci.
Çalıştır:  python assets/build-img-sizes.py

Neden: <img> etiketlerine width/height yazılmazsa tarayıcı görselin
yerini ancak indirdikten sonra öğrenir ve sayfa o anda zıplar (CLS).
Bu betik assets/img/ altındaki her dosyanın gerçek ölçüsünü okuyup
assets/img-sizes.js dosyasına yazar; split.js oradan okur.

Yeni görsel eklendiğinde bu betiği tekrar çalıştırın
(build-pages.py zaten otomatik çağırıyor).
"""
import os, io, json
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, "assets", "img")
CIKTI = os.path.join(ROOT, "assets", "img-sizes.js")

UZANTI = (".webp", ".jpg", ".jpeg", ".png", ".gif", ".svg")

harita = {}
atlanan = []
for ad in sorted(os.listdir(IMG)):
    if not ad.lower().endswith(UZANTI):
        continue
    yol = os.path.join(IMG, ad)
    try:
        with Image.open(yol) as im:
            harita["assets/img/" + ad] = [im.width, im.height]
    except Exception as ex:
        atlanan.append((ad, str(ex)))

govde = json.dumps(harita, ensure_ascii=False, separators=(",", ":"), sort_keys=True)
io.open(CIKTI, "w", encoding="utf-8").write(
    "/* OTOMATIK URETILDI — elle duzenlemeyin.\n"
    "   Kaynak: assets/build-img-sizes.py\n"
    "   Amac: <img> width/height degerleri, sayfa kaymasini (CLS) onler. */\n"
    "window.IMG_SIZES = " + govde + ";\n"
)

print("img-sizes.js yazildi: %d gorsel" % len(harita))
if atlanan:
    print("okunamayan: %d" % len(atlanan))
    for a, e in atlanan[:5]:
        print("   ", a, "-", e)
