# Eski ve yeni PDF'lerin kelime karşılaştırması (içerik kaybı var mı?) — pdfplumber ile
import sys, re, collections, pdfplumber, logging
logging.disable(logging.WARNING)
old_pdf, new_pdf = sys.argv[1], sys.argv[2]
def words(pdf, skip=()):
    c = collections.Counter()
    with pdfplumber.open(pdf) as P:
        for i, p in enumerate(P.pages):
            if i + 1 in skip: continue
            t = p.extract_text(x_tolerance=1.5) or ''
            for w in re.findall(r"[\w'’²³]+", t.lower()):
                if len(w) >= 3: c[w] += 1
    return c
old = words(old_pdf, skip=(6, 8, 9))
new = words(new_pdf)
miss = {w: k for w, k in old.items() if w not in new}
print('eski kelime', sum(old.values()), 'yeni', sum(new.values()), 'eksik tür', len(miss))
print(sorted(miss.items(), key=lambda x: -x[1])[:60])
