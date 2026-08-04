# CLAUDE.md — Leon Kimya web sitesi

Bu dosya, projede çalışan yapay zekâ asistanı içindir. Yeni bir oturuma
başlarken önce bunu oku; mimariyi, kuralları ve açık işleri buradan öğren.

---

## 1. Proje nedir

Leon Kimya (kimya sanayi: yapıştırıcı, bağlayıcı, zemin kaplama, su izolasyonu,
elektrik izolasyon reçineleri) için **tek sayfalık, dört dilli, statik** kurumsal
web sitesi. Derleme adımı yok — tarayıcıda çalışan sade HTML/CSS/JS.

| | |
|---|---|
| **Canlı** | https://leon-kimya.vercel.app |
| **Depo** | https://github.com/blaixs-max/leon-kimya (private) |
| **Vercel projesi** | `leon-kimya` (hesap: `blaixs-4009`) |
| **Yerel** | `C:\Users\Dell\Desktop\Web Site` |
| **Diller** | TR (`/`), EN (`/en`), FR (`/fr`), AR (`/ar` — RTL) |

---

## 2. ⚠️ ÖNCE BUNU OKU — devralınan içerik sorunu

Bu şablon başlangıçta **polinkimya.com** adlı gerçek bir üçüncü taraf şirketin
sitesinden alınan içerikle kuruldu. Sonradan Leon Kimya'ya dönüştürüldü.
Üçüncü tarafa ait olan her şey **kaldırıldı**:

- ❌ Telefon, WhatsApp, e-posta, adres, harita → `assets/i18n.js` içinde boş placeholder
- ❌ Logo → yerine CSS/metin wordmark (`LEON KİMYA`)
- ❌ Tescilli marka adları (Şerifoğlu®, Power-Pol®, Tixo-Pol® vb.) → marka bölümü tamamen kaldırıldı
- ❌ Sertifika / akreditasyon iddiaları (TÜRKAK, TSE, UKAS, ISO, IAAF) → kaldırıldı
- ❌ Şirkete özel iddialar (1989 kuruluşu, 55 ülke, 150 ürün) → kaldırıldı
- ❌ Ürün kodları (POLİNFLEX, POLIN EP HW vb.) → jenerik sistem özellikleriyle değiştirildi
- ❌ polinkimya.com'a giden tüm bağlantılar → sayfa içi çapalara çevrildi

**⚠️ HÂLÂ AÇIK OLAN TEK RİSK:** `assets/img/` altındaki **34 görselin tamamı**
hâlâ o siteden indirilmiş fotoğraflardır. Bu yüzden site şu an:

- `robots.txt` → `Disallow: /`
- tüm sayfalarda `<meta name="robots" content="noindex,nofollow">`

**KURALLAR — bunlara asla aykırı davranma:**

1. Üçüncü tarafa ait telefon / e-posta / WhatsApp / adres / logo / marka /
   sertifika bilgisini **hiçbir gerekçeyle geri ekleme.**
2. Kendi görselleri gelmeden `robots.txt` ve `noindex` **kaldırılmaz.**
   Kullanıcı isterse bile önce bu riski hatırlat.
3. Şirket hakkında **doğrulanmamış sayısal iddia üretme** (kuruluş yılı, ihracat
   ülkesi sayısı, ürün adedi, sertifika). Kullanıcı vermeden yazma.

---

## 3. Mimari — dört dosya

```
index.html / en.html / fr.html / ar.html   ← build-pages.py ÜRETİR, elle düzenleme
assets/
  i18n.js        İÇERİK. SITE_BASE (dilden bağımsız) + STRINGS (tr/en/fr/ar)
  split.css      TÜM STİL. Renkler token; hiçbir yerde sabit renk yok
  split.js       RENDER + davranış (slider, sekme, sayaç, mobil menü)
  build-pages.py 4 dil sayfasını üretir + cache-busting sürüm damgası
  img/           34 görsel (GEÇİCİ — bkz. bölüm 2)
```

### İş bölümü

- **`SITE_BASE`** → görseller, bağlantılar, sayısal veriler (konteyner ölçüleri,
  Incoterms kuralları), menü ağacının yapısı, form alan adları.
  Dilden bağımsız olan her şey. **Tek yerde.**
- **`STRINGS.<dil>`** → yalnızca metin. Dört dil aynı anahtar yapısını paylaşır.
- `split.js` ikisini `LANG` değerine göre birleştirir (`<html lang>` üzerinden).

Menü, index tabanlı değil **anahtar tabanlı** eşlenir (`k:"parquetAdh"` →
`T.nav.parquetAdh`). Dizi sıralaması değişirse bozulmaz.

---

## 4. Sık yapılan işler

### Metin değiştirmek
`assets/i18n.js` → `STRINGS.tr` (ve diğer üç dil). Sonra `python assets/build-pages.py`.

### Renk değiştirmek
`build-pages.py` içindeki **`PALETTE`** ve **`BRAND`** sabitleri — tek nokta.
Değiştir, betiği çalıştır; dört dil birden güncellenir. Şu an **Kehribar Çelik**
(`--brand:#D97706`). HTML'deki `:root` bloğu bu sabitten üretilir, elle düzenleme.

### Yeni dil eklemek
1. `SITE_BASE.langs` dizisine ekle
2. `STRINGS.<kod>` bloğunu ekle (mevcut bir dili kopyalayıp çevir)
3. `build-pages.py` içindeki `PAGES` listesine ekle
4. RTL ise `dir:"rtl"` ver — `split.css` içindeki `[dir="rtl"]` bloğu gerisini halleder

### Yeni bölüm eklemek
1. `SITE_BASE`'e veri, `STRINGS`'e dört dilde metin
2. `split.js` içinde `const yeniBolum = \`<section ...>\`` yaz
3. En alttaki `innerHTML` birleştirmesine ekle (sıra = sayfadaki sıra)
4. `split.css`'e stil ekle
5. Menüde görünecekse `SITE_BASE.nav`'a ve dört dilin `nav` sözlüğüne ekle

---

## 5. Derleme ve yayın

```bash
python assets/build-pages.py     # 4 dil sayfasını üretir (ZORUNLU)
python -m http.server 5173       # yerel önizleme → http://localhost:5173
git add -A && git commit -m "..." && git push
vercel deploy --prod             # yayına al
```

> **`build-pages.py` çalıştırmayı unutma.** HTML sayfaları elle düzenlenmez;
> ayrıca bu betik CSS/JS içeriğinden `?v=<hash>` damgası üretir. Damga
> güncellenmezse kullanıcılar eski JS'i cache'ten okur ve **sayfa bembeyaz açılır**
> (bu hata bir kez yaşandı, çözümü budur).

**Otomatik deploy AKTİF DEĞİL.** Vercel'in GitHub App'i depoya kurulu olmadığı
için `git push` tek başına yayına almaz; `vercel deploy --prod` gerekir.
Açmak için: Vercel → Project → Settings → Git → Connect Git Repository.

---

## 6. Sayfa yapısı (sıra ile)

1. Üst bar — dil seçimi (iletişim bilgisi girilene kadar boş)
2. Yapışkan header — wordmark, mega menü, "Teklif Alın"
3. **Hero** — 6 ürün ailesini gezen slider + 4'lü özellik paneli
4. **Ürünler & Sistemler** — 8'li kutucuk ızgarası
5. **Uygulamalar** — 4 kart
6. **Sistemler** — 3 sekme (spor / endüstriyel / su izolasyon)
7. **İhracat** — konteyner ölçüleri tablosu + Incoterms 2020 tablosu
8. **Kurumsal** — görsel + metin
9. **Uygulama alanları** — 14 başlık
10. **Blog** — 4 kart (bağlantısız, "Yakında")
11. **İletişim** — bilgi + form (form backend'e bağlı değil)
12. Footer

---

## 7. Kod kuralları

- Yorumlar **Türkçe**, kısa ve nedene odaklı
- CSS'te **sabit renk yasak** — her şey `var(--token)`
- Boş veri = bölüm hiç basılmaz (`has()` yardımcısı). Boş telefon `tel:` üretmez,
  boş `social` dizisi sosyal satırını tamamen gizler. **Bu davranışı bozma.**
- Dış bağlantılar otomatik `target="_blank" rel="noopener"` alır (`ext()`)
- Kart tıklanabilirliği `.lnk-cover` örtüsüyle yapılır — `figure/figcaption`
  semantiği korunur
- Arapçada sayılar Latin rakamla yazılır (tablodaki ölçülerle tutarlılık için)

---

## 8. Açık işler

**Yayın öncesi zorunlu**
- [ ] 34 görselin kendi fotoğraflarıyla değiştirilmesi
- [ ] `SITE_BASE.contact` doldurulması → sonra `contactReady: true`
- [ ] Leon Kimya logosu → `SITE_BASE.brand.logoDark/logoWhite`
- [ ] Kendi görselleri gelince aramaya açılması:
      `build-pages.py` → `NOINDEX = False` **ve** `robots.txt` güncellenmesi
- [ ] `canonical` / `og:url` gerçek alan adına çevrilmesi

**İçerik**
- [ ] "Kurumsal" metnindeki `TODO` — kuruluş hikâyesi, kapasite, hedef pazarlar
- [ ] `SITE_BASE.stats` — gerçek rakamlar (boş olduğu için bant gizli)
- [ ] Sosyal medya hesapları → `SITE_BASE.social`
- [ ] E-katalog PDF → `SITE_BASE.links.catalog`
- [ ] Blog yazıları

**Teknik**
- [ ] İletişim formu backend'i (şu an gönderim yapmıyor)
- [ ] Statik HTML'e dönüştürme veya SSR — SEO için gerekli, sayfa şu an
      istemci tarafında render ediliyor
- [ ] Görsel optimizasyonu (WebP + `srcset`) — `assets/img/` ~8 MB
- [ ] KVKK aydınlatma metni + çerez bildirimi
- [ ] Vercel GitHub App bağlantısı (otomatik deploy)

---

## 9. Karar geçmişi

- **Tasarım:** 20 farklı tasarım yönü üretildi → "Referans Split" düzeni seçildi
  (bölünmüş slider hero + özellik paneli)
- **Renk:** 20 modern palet denendi → **Kehribar Çelik** (`#D97706`) seçildi
- Elenen 40 deneme `_arsiv-varyantlar.zip` içinde (git'e dahil değil, yerelde)
