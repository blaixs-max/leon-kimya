# Katalog üretici (v3 · Endüstriyel Kurumsal)

`assets/katalog/leon-kimya-katalog-{tr,en,fr,ar}.pdf` dosyalarını üreten kaynak.
Sitenin v3 tasarımıyla aynı renk dili (Kehribar Çelik, `#D97706`).

```bash
python katalog-uretici/tools/build.py             # dört dil → katalog-uretici/out/
python katalog-uretici/tools/build.py tr          # yalnız Türkçe
python katalog-uretici/tools/build.py --yayinla   # ayrıca assets/katalog/ üzerine yazar
```

**Gereksinim:** Python 3 (`pip install playwright pikepdf segno` + `playwright install chromium`)
ve Node.js. Fontlar klasörde (sistem fontu gerekmez).

## Nerede ne var

| | |
|---|---|
| `content/<dil>.json` | **Katalog metinleri** — başlıklar, paragraflar, ürün kodları, teknik değerler, katman tabloları. Metin değişikliği burada yapılır (dört dilde birden). |
| `assets/i18n.js` (site) | İhracat tabloları, iletişim bilgisi, katman notu — derlemede otomatik okunur (`content/site-i18n.json` üretilir, elle düzenlenmez). |
| `tools/render.py` | Sayfa kurgusu (bölüm sırası, kart tipi, görsel seçimi) |
| `tools/catalog.css` | Tüm stil — renkler `:root` jetonlarında |
| `tools/catalog.js` | Sayfalama: taşan blok yeni sayfaya geçer, tablolar satır satır bölünür, içindekiler ve ürün listesi sayfa numaraları otomatik |
| `tools/print.py` | Chromium ile PDF + web için sıkıştırma (nesne akışları, doğrusallaştırma) + taşma denetimi |
| `img/` | Görseller (web için yeniden kodlanmış; **ürün görsellerinin içeriği eski katalogdakiyle aynı**) |
| `fonts/` | TeX Gyre Heros (TrueType'a çevrilmiş) + DejaVu Sans (Arapça) |
| `tools/tasima/` | Bir kerelik: içeriği eski PDF'lerden JSON'a taşıyan araçlar (kayıt için) |

## Notlar

- Fontlar TrueType olmalı: Chromium CFF (OTF) fontları PDF'e Type 3 olarak gömüyor.
  `tools/otf2ttf.py` bu yüzden var.
- Arapça sayfalar `dir="rtl"`; Arapça glifler DejaVu Sans'tan gelir.
- Eski FR/AR PDF'lerinde taşma yüzünden basılmamış birkaç teknik satır (raf ömrü vb.)
  TR ile hizalanarak tamamlandı (`render.py → complete_specs`).
- Polinflex (üçüncü taraf markası) ibaresi içerikte yok — geri eklemeyin (CLAUDE.md kural 1).
- Derleme sonunda `taşma 0` görmelisiniz; aksi hâlde hangi blokta olduğu yazılır.
