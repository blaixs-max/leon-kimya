# Leon Kimya — Web Sitesi

Dört dilli (TR / EN / FR / AR), tek sayfalık kurumsal site.
Framework yok — sade HTML + CSS + JavaScript.

| | |
|---|---|
| **Canlı** | https://leon-kimya.vercel.app |
| **Depo** | https://github.com/blaixs-max/leon-kimya (private) |
| **Vercel projesi** | `leon-kimya` |
| **Diller** | TR `/` · EN `/en` · FR `/fr` · AR `/ar` (sağdan sola) |

> ⚠️ **Site şu an aramaya kapalı.** Sebebi ve ne zaman açılacağı için
> aşağıdaki "Yayına almadan önce" bölümüne bakın.

---

## Açmak

`index.html` dosyasına çift tıklayarak açılır. Doğru sonuç için yerel sunucu:

```bash
python -m http.server 5173
```

Sonra `http://localhost:5173/`

---

## Dosya yapısı

```
index.html  en.html  fr.html  ar.html   ← ÜRETİLİR, elle düzenlemeyin
sitemap.xml                             ← ÜRETİLİR
assets/
  i18n.js             Tüm içerik: veriler + dört dilde metinler
  split.css           Tüm stil
  split.js            Sayfayı oluşturan ve çalıştıran kod
  prerender.js        Derleme anında içeriği HTML'e gömer
  img-sizes.js        ÜRETİLİR — görsel ölçüleri
  build-pages.py      Dil sayfalarını ve sitemap'i üretir
  build-img-sizes.py  Görsel ölçü haritasını üretir
  img/                120 görsel (WebP)
  katalog/            E-katalog PDF'leri (dört dil, 69 sayfa)
yayinla.bat           Tek tık yayın
```

**Altın kural:** `index.html`, `en.html`, `fr.html`, `ar.html` ve `sitemap.xml`
dosyalarını elle düzenlemeyin. Bunlar üretilir; elle yaptığınız değişiklik
bir sonraki üretimde silinir.

---

## Sık yapılan işler

### Bir metni değiştirmek

`assets/i18n.js` → `STRINGS` bölümü → ilgili dil (`tr`, `en`, `fr`, `ar`).
Kaydedin, sonra:

```bash
python assets/build-pages.py
```

### Sitenin rengini değiştirmek

`assets/build-pages.py` içindeki **`PALETTE`** bloğu tek noktadır.
Şu anki palet: **Kehribar Çelik** — ana renk `#D97706`

### Telefon / e-posta / adres eklemek

Bilgiler **girildi**. Değiştirmek için: `assets/i18n.js` → `SITE_BASE.contact`
(numaralar, e-posta, harita) ve `STRINGS` içindeki her dilin `address` /
`addressShort` alanları (adres dört dilde ayrı yazılır).

Numaralar iki biçimde tutulur: `phone1` / `mobile` ekranda görünen hâl,
`tel1` / `telMobile` tıklanabilir `tel:` bağlantısı için boşluksuz hâl —
ikisini birlikte güncelleyin. `whatsapp` da cep numarasıyla aynı olmalı.

> `contactReady: false` yapılırsa site hiçbir telefon/e-posta bağlantısı
> üretmez ve WhatsApp düğmesi gizlenir — eksik bilgiyle yayına çıkmayı önler.

### E-Katalog'u güncellemek

**Katalog yayında** (18.08.2026'dan beri): dört dil, 69 sayfa. Ziyaretçi
menüdeki indirme düğmesinden kendi dilindeki PDF'i indiriyor.

Yeni sürüm için dosyaları **aynı adlarla** `assets/katalog/` klasörüne
kopyalayın (üzerine yazın):

```
leon-kimya-katalog-tr.pdf
leon-kimya-katalog-en.pdf
leon-kimya-katalog-fr.pdf
leon-kimya-katalog-ar.pdf
```

Sonra `python assets/build-pages.py` çalıştırın. `i18n.js`'te bir şey
değiştirmeniz gerekmez — düğme zaten açık.

> Katalog düğmesini geçici olarak kaldırmak isterseniz `ready: false` yapın.
> Dosyalar eksikken `ready: true` bırakırsanız derleme durur ve hangi dosyanın
> eksik olduğunu söyler — ziyaretçiye boşa çıkan indirme düğmesi göstermemek için.

### Yeni görsel eklemek

Görseli `assets/img/` içine koyup şunu çalıştırın:

```bash
python assets/build-img-sizes.py
python assets/build-pages.py
```

İlk betik görselin ölçüsünü okur; bu sayede sayfa görsel yüklenirken zıplamaz.

---

## Sayfa bölümleri

1. Üst bar — dil seçimi
2. Yapışkan menü — logo, ürün mega menüsü, **E-Katalog indirme düğmesi**,
   "Teklif Alın"
3. **Hero** — ürün ailelerini gezen slider + 4'lü özellik paneli
4. **Ürünler & Sistemler** — kutucuk ızgarası
5. **Uygulamalar** — 4 kart
6. **Sistemler** — spor / endüstriyel / su izolasyon sekmeleri
7. **Kurumsal**
8. **Uygulama alanları** — 14 başlık, tıklayınca detay açılır
9. **İletişim** — bilgiler + form (form çalışıyor, e-postaya düşüyor)
10. **İhracat** — konteyner ölçüleri + Incoterms 2020
11. Footer

---

## Yayına alma

Yayını asistan yürütür. Kendiniz yapmak isterseniz:

```bash
python assets/build-img-sizes.py
python assets/build-pages.py
git add -A
git commit -m "değişiklik açıklaması"
```

Sonra **`yayinla.bat`** dosyasına çift tıklayın.

**Gereksinim:** Python 3 (+ Pillow) ve Node.js. Node yoksa derleme durur.

> `git push` tek başına siteyi güncellemez — otomatik deploy henüz açık değil.
> Açmak için: Vercel → Project → Settings → Git → Connect Git Repository.

---

## Yayına almadan önce — zorunlu adımlar

1. ~~İletişim bilgilerini girin~~ — **tamamlandı 18.08.2026**
2. **Alan adını bağlayın** — Vercel → Settings → Domains
3. **`SITE_URL` değiştirin** — `assets/build-pages.py` içinde.
   Canonical, og:url, hreflang, sitemap ve yapısal veri hepsi bundan türer;
   başka hiçbir yeri düzeltmeye gerek yok.
4. **Aramaya açın** — `NOINDEX = False` + `robots.txt` (hazır sürüm içinde)
5. **Search Console'a sitemap tanıtın** — `https://alanadi/sitemap.xml`

Şu an kapalı olmasının tek sebebi: alan adı henüz kesinleşmedi. Yanlış adres
indekslenirse taşıma sonrası düzeltme maliyeti çıkar.

---

## Yapılmış SEO işleri

- Her sayfada özgün başlık, açıklama, canonical
- Open Graph + Twitter etiketleri (WhatsApp/LinkedIn önizlemesi)
- Yapısal veri (schema.org Organization)
- `sitemap.xml` — 4 adres, dört dilin hreflang karşılığıyla
- Görseller WebP (8.58 MB → 4.74 MB)
- Tüm görsellerde `width`/`height` — sayfa kayması (CLS) önlendi
- İçerik HTML'de hazır geliyor (prerender) — arama motorları JS beklemiyor
- Temiz URL (`/en`, `/en.html` değil)

---

## Henüz tamamlanmamış

- İstatistik bandı boş (rakamlar verilmedi, o yüzden gizli)
- Sosyal medya hesapları girilmedi
- "Kurumsal" metninde kuruluş hikâyesi bekliyor
- KVKK aydınlatma metni ve çerez bildirimi
