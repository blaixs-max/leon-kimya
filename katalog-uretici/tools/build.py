# Leon Kimya katalog üretici — tek komut
#   python katalog-uretici/tools/build.py             dört dil → katalog-uretici/out/
#   python katalog-uretici/tools/build.py tr en       yalnız seçilen diller
#   python katalog-uretici/tools/build.py --yayinla   ayrıca assets/katalog/ üzerine yazar
# Gereksinim: Python 3 + playwright (chromium) + pikepdf + segno, Node.js
import os, sys, shutil, subprocess
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REPO = os.path.dirname(ROOT)
TOOLS = os.path.join(ROOT, 'tools')
langs = [a for a in sys.argv[1:] if not a.startswith('--')] or ['tr', 'en', 'fr', 'ar']
B = os.path.join(ROOT, 'build')
for d in ('img', 'fonts'):
    shutil.copytree(os.path.join(ROOT, d), os.path.join(B, d), dirs_exist_ok=True)
# arayüz metinleri, ihracat tabloları ve iletişim bilgisi sitenin i18n.js'inden (tek kaynak)
subprocess.run(['node', os.path.join(TOOLS, 'i18n-dump.js'), os.path.join(REPO, 'assets', 'i18n.js'),
                os.path.join(ROOT, 'content', 'site-i18n.json')], check=True)
for l in langs:
    subprocess.run([sys.executable, os.path.join(TOOLS, 'render.py'), l], check=True)
subprocess.run([sys.executable, os.path.join(TOOLS, 'print.py')] + langs, check=True)
if '--yayinla' in sys.argv:
    for l in langs:
        shutil.copy(os.path.join(ROOT, 'out', f'leon-kimya-katalog-{l}.pdf'), os.path.join(REPO, 'assets', 'katalog'))
    print('assets/katalog/ güncellendi — sonra: python assets/build-pages.py')
