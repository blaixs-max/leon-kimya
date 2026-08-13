# -*- coding: utf-8 -*-
"""
Leon Kimya — dil sayfası üreteci.
Tek şablondan tr / en / fr / ar sayfalarını üretir.
Çalıştır:  python assets/build-pages.py
"""
import os, io, hashlib, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def asset_version():
    """CSS/JS içeriğinden kısa bir sürüm damgası üretir.
    Sayfalara ?v=<damga> olarak eklenir; böylece her deploy'da tarayıcı
    kesinlikle yeni dosyayı çeker, eski sürüm cache'te kalmaz."""
    h = hashlib.sha256()
    for name in ("split.css", "split.js", "i18n.js"):
        p = os.path.join(ROOT, "assets", name)
        with open(p, "rb") as f:
            h.update(f.read())
    return h.hexdigest()[:10]

V = asset_version()


def prerender(lang):
    """split.js'i Node ile calistirip #app icine gomulecek HTML'i uretir.

    Neden: sayfanin govdesi HTML'de hazir gelsin. Arama motorlari ve link
    onizlemesi yapan botlar (WhatsApp, LinkedIn) JavaScript calistirmadigi
    icin, aksi halde bos sayfa gorurler.

    Node bulunamazsa derleme DURUR — sessizce bos govde uretip sorunu
    fark etmemektense hata vermek daha iyi."""
    try:
        r = subprocess.run(
            ["node", os.path.join(ROOT, "assets", "prerender.js"), lang],
            capture_output=True, timeout=120)
    except FileNotFoundError:
        sys.exit("HATA: 'node' bulunamadi. Node.js kurulu olmali (prerender icin).")
    if r.returncode != 0:
        sys.exit("HATA: prerender basarisiz (%s):\n%s"
                 % (lang, r.stderr.decode("utf-8", "replace")))
    html = r.stdout.decode("utf-8")
    if len(html) < 5000:
        sys.exit("HATA: prerender ciktisi supheli kisa (%s): %d karakter" % (lang, len(html)))
    return html

# =============================================================
# KURUMSAL PALET — sitenin rengini değiştirmek için TEK NOKTA.
# Burayı düzenleyip `python assets/build-pages.py` çalıştırmak yeterli.
# =============================================================
PALETTE_NAME = "KEHRİBAR ÇELİK"
BRAND = "#D97706"          # ana marka rengi (theme-color olarak da kullanılır)
PALETTE = """
  --brand:{brand}; --brand-d:#B45309; --brand-l:#FCD34D; --brand-xl:#FFFBEB; --brand-on:#FFFFFF;
  --ink:#1C1917; --ink-2:#3B3733; --mut:#78716C; --mut-2:#A8A29E;
  --line:#E7E5E4; --bg:#FFFCFA; --bg-2:#FAF8F5; --surface:#FFFFFF;
  --shade:28,25,23;
  --top-bg:#1C1917; --top-fg:#E7E5E4;
  --ftr-bg:#1C1917; --ftr-fg:#D6D3D1; --ftr-head:#FCD34D; --ftr-line:rgba(255,255,255,.12);
  --play:#B45309; --hero-ink:#FFFFFF;
  --wa:#25D366;   /* WhatsApp kurumsal yesili (marka rengi, palete bagli degil) */""".format(brand=BRAND)

# Sitenin genel adresi. Sonda "/" YOK.
# TODO: yeni alan adına geçince yalnızca burayı değiştirin — canonical,
# og:url, og:image ve hreflang bu sabitten üretilir.
SITE_URL = "https://leon-kimya.vercel.app"
OG_IMAGE = "/assets/img/og-image.jpg"      # 1200x630, paylaşım kartı

# Aramaya açmak için False yapın. ÖNCE şunlar tamamlanmalı:
# iletişim bilgileri girilmiş + contactReady:true + alan adı kesinleşmiş.
# Ayrıca robots.txt dosyasını da güncellemeyi unutmayın.
NOINDEX = True

PAGES = [
  dict(file="index.html", lang="tr", og_locale="tr_TR", dir="ltr", path="/",
       title="Leon Kimya | Yapıştırıcı, Bağlayıcı, Zemin Kaplama ve Su İzolasyon Sistemleri",
       desc="Poliüretan, epoksi ve akrilik esaslı yapıştırıcı, bağlayıcı, zemin kaplama ve su izolasyon çözümleri.",
       skip="İçeriğe geç", noscript="Bu site içeriği görüntülemek için JavaScript gerektirir."),
  dict(file="en.html", lang="en", og_locale="en_US", dir="ltr", path="/en",
       title="Leon Kimya | Adhesives, Binders, Floor Coatings and Waterproofing Systems",
       desc="Polyurethane, epoxy and acrylic based adhesives, binders, floor coatings and waterproofing solutions.",
       skip="Skip to content", noscript="This site requires JavaScript to display its content."),
  dict(file="fr.html", lang="fr", og_locale="fr_FR", dir="ltr", path="/fr",
       title="Leon Kimya | Adhésifs, liants, revêtements de sol et systèmes d'étanchéité",
       desc="Adhésifs, liants, revêtements de sol et solutions d'étanchéité à base de polyuréthane, d'époxy et d'acrylique.",
       skip="Aller au contenu", noscript="Ce site nécessite JavaScript pour afficher son contenu."),
  dict(file="ar.html", lang="ar", og_locale="ar_AR", dir="rtl", path="/ar",
       title="ليون كيميا | مواد لاصقة ورابطة وأنظمة أرضيات وعزل مائي",
       desc="حلول لاصقة ورابطة وأنظمة أرضيات وعزل مائي على أساس البولي يوريثان والإيبوكسي والأكريليك.",
       skip="تخطَّ إلى المحتوى", noscript="يتطلب هذا الموقع تفعيل JavaScript لعرض المحتوى."),
]

FONTS = {
  "tr":"family=Inter:wght@300;400;500;600;700;800;900",
  "en":"family=Inter:wght@300;400;500;600;700;800;900",
  "fr":"family=Inter:wght@300;400;500;600;700;800;900",
  "ar":"family=Inter:wght@300;400;500;600;700;800;900&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700",
}

ARABIC_FONT_CSS = """
  --font:"IBM Plex Sans Arabic",Inter,system-ui,"Segoe UI",sans-serif;"""

TPL = """<!DOCTYPE html>
<html lang="{lang}" dir="{dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
{robots}<meta name="theme-color" content="{brand}">
<link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon-32.png?v={v}">
<link rel="icon" type="image/png" sizes="192x192" href="assets/img/favicon.png?v={v}">
<link rel="apple-touch-icon" href="assets/img/favicon.png?v={v}">
{alternates}
<link rel="canonical" href="{canonical}">

<!-- Sosyal paylasim (WhatsApp, LinkedIn, X, Facebook) -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="Leon Kimya">
<meta property="og:locale" content="{og_locale}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{canonical}">
<meta property="og:image" content="{og_image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Leon Kimya">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{desc}">
<meta name="twitter:image" content="{og_image}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?{font}&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/split.css?v={v}">
<style>
/* =============================================================
   LEON KİMYA — KURUMSAL PALET: {palette_name}
   Bu blok build-pages.py içindeki PALETTE sabitinden üretilir.
   Elle düzenlemeyin — orayı düzenleyip betiği yeniden çalıştırın.
   ============================================================= */
:root{{{palette}{extra}
}}
</style>
</head>
<body>
<a class="skip" href="#main">{skip}</a>
<div id="app">{app}</div>
<noscript><p style="padding:40px;text-align:center">{noscript}</p></noscript>
<script src="assets/i18n.js?v={v}"></script>
<script src="assets/split.js?v={v}"></script>
</body>
</html>
"""

for p in PAGES:
    alts = "\n".join(
        '<link rel="alternate" hreflang="{}" href="{}">'.format(
            q["lang"], SITE_URL + ("/" if q["path"] == "/" else q["path"]))
        for q in PAGES
    ) + '\n<link rel="alternate" hreflang="x-default" href="%s/">' % SITE_URL
    body = TPL.format(
        lang=p["lang"], dir=p["dir"], title=p["title"], desc=p["desc"],
        skip=p["skip"], noscript=p["noscript"], font=FONTS[p["lang"]],
        alternates=alts,
        extra=ARABIC_FONT_CSS if p["lang"] == "ar" else "",
        v=V,
        brand=BRAND,
        palette=PALETTE,
        palette_name=PALETTE_NAME,
        robots='<meta name="robots" content="noindex,nofollow">\n' if NOINDEX else "",
        canonical=SITE_URL + ("" if p["path"] == "/" else p["path"]) + ("/" if p["path"] == "/" else ""),
        og_locale=p["og_locale"],
        og_image=SITE_URL + OG_IMAGE,
        app=prerender(p["lang"]),
    )
    with io.open(os.path.join(ROOT, p["file"]), "w", encoding="utf-8") as f:
        f.write(body)
    print("yazildi:", p["file"], "(", p["lang"], p["dir"], ")")

print("toplam:", len(PAGES))
