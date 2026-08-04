# Leon Kimya — Web Sitesi

Dört dilli (TR / EN / FR / AR), tek sayfalık statik kurumsal site.
Derleme aracı yok; sade HTML + CSS + JavaScript.

| | |
|---|---|
| **Canlı** | https://leon-kimya.vercel.app |
| **Depo** | https://github.com/blaixs-max/leon-kimya (private) |
| **Vercel projesi** | `leon-kimya` |
| **Diller** | TR `/` · EN `/en` · FR `/fr` · AR `/ar` (sağdan sola) |

> ⚠️ **Site şu an aramaya kapalı** (`noindex`). Sebebi ve ne zaman açılacağı
> için aşağıdaki "Yayına almadan önce" bölümüne bakın.

---

## Hızlı başlangıç

```bash
python assets/build-pages.py
python -m http.server 5173
```

Sonra tarayıcıda `http://localhost:5173/`

---

## Dosya yapısı

```
index.html  en.html  fr.html  ar.html   ← ÜRETİLİR, elle düzenlemeyin
assets/
  i18n.js          Tüm içerik: veriler + dört dilde metinler
  split.css        Tüm stil (renkler token güdümlü)
  split.js         Sayfayı oluşturan ve çalıştıran kod
  build-pages.py   Dil sayfalarını üretir
  img/             34 görsel
CLAUDE.md          Yapay zekâ asistanı için proje notları
robots.txt         Şu an aramaya kapalı
vercel.json        Önbellek + güvenlik başlıkları
```

**Altın kural:** `index.html`, `en.html`, `fr.html`, `ar.html` dosyalarını elle
düzenlemeyin. Bunlar `build-pages.py` tarafından üretilir; elle yaptığınız
değişiklik bir sonraki üretimde silinir.

---

## Sık yapılan işler

### Bir metni değiştirmek

`assets/i18n.js` dosyasını açın → `STRINGS` bölümü → ilgili dil (`tr`, `en`,
`fr`, `ar`). Metni değiştirip kaydedin, sonra:

```bash
python assets/build-pages.py
```

### Sitenin rengini değiştirmek

`assets/build-pages.py` içindeki **`PALETTE`** bloğu tek noktadır. Oradaki
renkleri değiştirip betiği çalıştırın — tüm site ve dört dil birden değişir.

Şu anki palet: **Kehribar Çelik** — ana renk `#D97706`

### Telefon / e-posta / adres eklemek

`assets/i18n.js` → en üstteki `SITE_BASE.contact` bloğu. `TODO` yazan alanları
doldurun, ardından hemen üstteki satırı değiştirin:

```js
contactReady: true,
```

> Bu bayrak `false` olduğu sürece site hiçbir telefon/e-posta bağlantısı
> üretmez — yanlışlıkla eksik veya hatalı numaraya bağlantı verilmesini önler.

### Sosyal medya hesapları eklemek

`assets/i18n.js` → `SITE_BASE.social` dizisi. Boş olduğu sürece sosyal medya
satırı sitede hiç görünmez.

---

## Sayfa bölümleri

1. Üst bar — dil seçimi
2. Yapışkan menü — logo, ürün mega menüsü, "Teklif Alın"
3. **Hero** — 6 ürün ailesini gezen slider + 4'lü özellik paneli
4. **Ürünler & Sistemler** — 8'li kutucuk
5. **Uygulamalar** — 4 kart
6. **Sistemler** — spor / endüstriyel / su izolasyon sekmeleri
7. **İhracat** — konteyner ölçüleri + Incoterms 2020 tabloları
8. **Kurumsal**
9. **Uygulama alanları** — 14 başlık
10. **Blog** — 4 kart
11. **İletişim** — bilgiler + form
12. Footer

---

## Yayına alma

```bash
python assets/build-pages.py
git add -A
git commit -m "değişiklik açıklaması"
git push
vercel deploy --prod
```

**Otomatik deploy henüz açık değil** — `git push` tek başına siteyi
güncellemez, `vercel deploy --prod` komutu gerekir.

Açmak isterseniz (tek seferlik): Vercel → Project → Settings → Git →
**Connect Git Repository** → `blaixs-max/leon-kimya`. Sonrasında sadece
`git push` yeterli olur.

---

## Yayına almadan önce — zorunlu adımlar

Bu şablon başlangıçta başka bir firmanın sitesinden alınan içerikle kurulmuştu.
İletişim bilgileri, logo, marka adları ve sertifika iddiaları **kaldırıldı**;
ancak **`assets/img/` altındaki 34 görsel hâlâ o siteye ait**.

Bu yüzden site şu an arama motorlarına kapalı. Sırasıyla:

1. **Görselleri değiştirin** — kendi saha ve ürün fotoğraflarınızla
2. **İletişim bilgilerini girin** — `SITE_BASE.contact` + `contactReady: true`
3. **Logoyu ekleyin** — `SITE_BASE.brand.logoDark` / `logoWhite`
4. **Aramaya açın:**
   - `assets/build-pages.py` → `NOINDEX = False`
   - `robots.txt` → içindeki hazır sürümle değiştirin
5. **Alan adını bağlayın** — Vercel → Settings → Domains

---

## Henüz tamamlanmamış

- İletişim formu bir gönderim servisine bağlı değil
- Blog yazıları yok (kartlar "Yakında" durumunda)
- "Kurumsal" metninde kuruluş hikâyesi bekliyor
- İstatistik bandı boş (rakamlar girilmedi, o yüzden gizli)
- Sayfa istemci tarafında oluşturuluyor — SEO için statik HTML'e
  dönüştürülmesi gerekir
- Görsel optimizasyonu (WebP + `srcset`)
- KVKK aydınlatma metni ve çerez bildirimi
