# Leon Kimya — Web Sitesi

Dört dilli (TR / EN / FR / AR), tek sayfalık kurumsal site.
Framework yok — sade HTML + CSS + JavaScript.

| | |
|---|---|
| **Canlı** | https://leonkimya.com |
| **Depo** | https://github.com/blaixs-max/leon-kimya (private) |
| **Vercel projesi** | `leon-kimya` |
| **Diller** | TR `/` · EN `/en` · FR `/fr` · AR `/ar` (sağdan sola) |

> ✅ **Site yayında ve aramaya açık** (18.08.2026). v3 tasarım ve yeni katalog
> 28.09.2026'dan beri yayında.

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
  img/                166 görsel (WebP)
  katalog/            E-katalog PDF'leri (dört dil)
katalog-uretici/      Katalog PDF'lerinin kaynağı (metinler + şablon) — yayına çıkmaz
yayinla.bat           Tek tık yayın
YAPILACAKLAR.md       Açık işler listesi
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

**Katalog yayında** (18.08.2026'dan beri): dört dil. Ziyaretçi
menüdeki indirme düğmesinden kendi dilindeki PDF'i indiriyor.

Yeni tasarımlı katalog (v3, 63 sayfa, ~9 MB) `katalog-uretici/` klasöründen
üretilir — metni değiştirmek için oradaki README'ye bakın:

```bash
python katalog-uretici/tools/build.py --yayinla
```

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

*(v3 "Endüstriyel Kurumsal" tasarım, 09.2026)*

1. Üst bar — telefon, e-posta, dil seçimi
2. Yapışkan menü — logo, **Ürünler mega menüsü**, E-Katalog, "Teklif Alın"
3. **Hero** — solda ana mesaj, sağda ürün ailelerini gezen görsel slider
4. **Değer bandı** — 4'lü özellik
5. **Ürün aileleri** — 6 kart (ambalaj görselleri, alt ürün bağlantıları)
6. **Sistemler** — spor / endüstriyel / su izolasyon sekmeleri + katman kesiti
7. **Uygulama alanları** — 14 kart, tıklayınca detay paneli açılır
8. **Kurumsal**
9. **E-Katalog bandı**
10. **İletişim** — bilgiler + harita + form (form çalışıyor, e-postaya düşüyor)
11. **İhracat** — konteyner ölçüleri + Incoterms 2020
12. Footer

---

## Yayına alma

Yayını asistan yürütür. Kendiniz yapmak isterseniz:

```bash
python assets/build-img-sizes.py      # yalnız görsel eklendiyse
python assets/build-pages.py
git add <değişen dosyalar>             # "git add -A" kullanmayın
git commit -m "değişiklik açıklaması"
```

Sonra **`yayinla.bat`** dosyasına çift tıklayın: GitHub'daki son hâli çeker
(`pull --rebase`) ve değişikliklerinizi gönderir (`push`).

**Gereksinim:** Python 3 (+ Pillow) ve Node.js. Node yoksa derleme durur.

> **`main`'e gönderilen her değişiklik birkaç dakika içinde canlıya çıkar** —
> Vercel'in GitHub bağlantısı açık. Denemeleri ayrı bir dalda yapın; diğer
> dallar yalnız Vercel girişiyle açılan önizleme adresine gider.
>
> `git add -A` kökteki `katalog/` ve `kartvizit/` taslaklarını (49 MB) depoya
> sokar; dosya yollarını tek tek yazın. Yerel klasörden `vercel deploy`
> çalıştırmayın — klasörü olduğu gibi yükler (28.09.2026'ya kadar proje notları
> bu yüzden sitede herkese açıktı).

---

## Yayın durumu — tamamlandı (18.08.2026)

1. ~~İletişim bilgileri girildi~~ ✅
2. ~~Alan adı bağlandı~~ ✅ `leonkimya.com` (www otomatik köke yönleniyor)
3. ~~`SITE_URL` çevrildi~~ ✅
4. ~~Aramaya açıldı~~ ✅ `NOINDEX = False` + `robots.txt`
5. ~~Search Console~~ ✅ doğrulandı, sitemap gönderildi (19.08.2026)

### DNS hakkında — önemli

Alan adı Hostinger'da, DNS kayıtları da orada duruyor. Vercel'e yalnızca
iki `A` kaydı çevrildi:

```
A  @    76.76.21.21
A  www  76.76.21.21
```

**Nameserver'ları Vercel'e çevirmeyin.** E-posta (`info@leonkimya.com`)
Hostinger'da çalışıyor; nameserver'lar taşınırsa oradaki e-posta kayıtları
(`MX`, `SPF`, `DKIM`, `DMARC`) devre dışı kalır ve posta durur. Bu hâliyle web
Vercel'de, e-posta Hostinger'da — ikisi birbirine karışmıyor.

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

## Yapılacaklar

Açık işlerin tamamı **`YAPILACAKLAR.md`** dosyasında — öncelik sırasına
dizilmiş, her işin yanında kimin yapacağı yazılı.

En öncelikli olanlar:

- **KVKK aydınlatma metni ve çerez bildirimi** — site halka açık ve
  form kişisel veri topluyor
- **Form postalarının spam'e düşmesi** — Hostinger'da `formsubmit.co` için
  izin kuralı
