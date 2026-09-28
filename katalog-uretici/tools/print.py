# HTML → PDF (Chromium) + önizleme PNG'leri. Kullanım: python3 print.py tr [en fr ar]
import sys, os, json, subprocess, shutil
from playwright.sync_api import sync_playwright
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
B = os.path.join(ROOT, 'build')
shutil.copy(os.path.join(ROOT, 'tools', 'catalog.css'), B)
shutil.copy(os.path.join(ROOT, 'tools', 'catalog.js'), B)
os.makedirs(os.path.join(ROOT, 'out'), exist_ok=True)
with sync_playwright() as p:
    br = p.chromium.launch()
    for lang in sys.argv[1:]:
        pg = br.new_page(viewport={'width': 1000, 'height': 1400})
        msgs = []
        pg.on('console', lambda m: msgs.append(m.text))
        pg.on('pageerror', lambda e_: msgs.append('ERR ' + str(e_)))
        pg.goto('file://' + os.path.join(B, f'catalog-{lang}.html'))
        pg.wait_for_function('window.__done === true', timeout=120000)
        rep = pg.evaluate('window.__report')
        hov = pg.evaluate('''() => {
          const out = [];
          document.querySelectorAll('#book .page *').forEach(el => {
            if (el.children.length && !['TD','TH','H1','H2','H3','SPAN','A','P','DD','DT','LI'].includes(el.tagName)) return;
            const cs = getComputedStyle(el);
            if (cs.display === 'inline' || el.closest('.tab') || el.closest('svg')) return;
            if (el.scrollWidth > el.clientWidth + 1 && el.clientWidth > 0) {
              const pg = el.closest('.page');
              out.push((pg ? pg.id : '?') + ' ' + el.tagName + '.' + (el.className||'') + ' ' + (el.textContent||'').trim().slice(0, 50) + ' [' + el.scrollWidth + '>' + el.clientWidth + ']');
            }
          });
          return out;
        }''')
        if hov: print('  yatay taşma:', len(hov)); [print('   ', h) for h in hov[:25]]
        out = os.path.join(ROOT, 'out', f'leon-kimya-katalog-{lang}.pdf')
        tmp = out + '.tmp'
        pg.pdf(path=tmp, prefer_css_page_size=True, print_background=True, outline=True, tagged=True)
        # web için: nesne akışları + doğrusallaştırma (hızlı web görüntüleme), meta veri
        import pikepdf
        with pikepdf.open(tmp) as pdf:
            with pdf.open_metadata() as meta:
                meta['dc:title'] = pg.title()
                meta['dc:creator'] = ['Leon Kimya']
                meta['dc:language'] = [lang]
            pdf.docinfo['/Title'] = pg.title()
            pdf.docinfo['/Author'] = 'Leon Kimya'
            pdf.docinfo['/Subject'] = pg.title()
            pdf.Root.Lang = pikepdf.String(lang)
            pdf.save(out, compress_streams=True, object_stream_mode=pikepdf.ObjectStreamMode.generate, linearize=True)
        os.remove(tmp)
        print(lang, 'sayfa', rep['pages'], 'taşma', len(rep['overflow']), rep['overflow'][:8], 'boyut', round(os.path.getsize(out) / 1e6, 2), 'MB')
        for m in msgs[:10]: print('  console:', m)
        pg.close()
    br.close()
