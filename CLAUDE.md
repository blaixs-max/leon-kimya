# CLAUDE.md — Leon Kimya web sitesi

Bu dosya, projede çalışan yapay zekâ asistanı içindir. **Yeni bir oturuma
başlarken önce bunu, sonra `git log --oneline -15` çıktısını oku.** Mimariyi,
kuralları ve açık işleri buradan öğren.

> Bu dosya elle güncellenir; kodun kendisi kadar taze olmayabilir.
> Çelişki görürsen **koda ve git geçmişine güven**, sonra burayı düzelt.

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

## 2. ⚠️ ÖNCE BUNU OKU — üçüncü taraf içerik riski

### Neden bu kadar sert kurallar var

Bu şablon **polinkimya.com** adlı gerçek, faaliyette olan bir şirketin
sitesinden alınan içerikle kuruldu; sonra Leon Kimya'ya dönüştürüldü.

Bu sıradan bir "telif" meselesi değil. Başka bir şirketin **telefonu, WhatsApp'ı,
e-postası, adresi, logosu, tescilli markaları ve akreditasyonları** başka bir
şirketin adı altında yayınlandığında ortaya çıkan şey, o şirketin kimliğinin
taklidi olur. Somut sonuçları:

- Ziyaretçi "Leon Kimya" sanıp **Polin Kimya'nın WhatsApp'ına** mesaj atar
  *(bu fiilen yaşandı — kullanıcı fark edip acilen kaldırttı)*
- Polin'in ISO/TÜRKAK/UKAS akreditasyonları Leon'un gibi görünür → **yanlış beyan**
- Şerifoğlu®, Power-Pol®, Tixo-Pol® **tescilli markalar** — kullanımı ihlaldir

Bu yüzden aşağıdaki kurallar "iyi olur"dan ibaret değil; **ihlal edilmemeli**.

### Kaldırılanlar

- ❌ Telefon, WhatsApp, e-posta, adres, harita → boş placeholder
- ❌ Logo → yerine CSS/metin wordmark (`LEON KİMYA`)
- ❌ Tescilli marka adları → marka bölümü tamamen kaldırıldı
- ❌ Sertifika / akreditasyon iddiaları (TÜRKAK, TSE, UKAS, ISO, IAAF)
- ❌ Şirkete özel iddialar (1989 kuruluşu, 55 ülke, 150 ürün)
- ❌ Ürün kodları (POLİNFLEX, POLIN EP HW vb.) → jenerik adlarla değiştirildi
- ❌ polinkimya.com'a giden tüm bağlantılar → sayfa içi çapalara çevrildi

### ⚠️ HÂLÂ AÇIK OLAN RİSK — görseller

`assets/img/` altındaki **145 görselin tamamı üçüncü taraf kaynaklıdır.**
Kaynak zamanla değişti; bugünkü durum:

- Görsellerin çoğu `saraskimya-assets/` arşivinden seçildi
  (529 dosya, **gitignore'da** — "telifli, git'e girmez")
- Seçilenler `assets/img/` altında **git'e commit edilmiş** durumda
- Yani risk çözülmedi, yalnızca **kaynağı değişti**

Bu yüzden site şu an aramaya kapalı:

- `robots.txt` → `Disallow: /`
- `build-pages.py` → `NOINDEX = True` → tüm sayfalarda `noindex,nofollow`

### KURALLAR — asla aykırı davranma

1. Üçüncü tarafa ait telefon / e-posta / WhatsApp / adres / logo / marka /
   sertifika bilgisini **hiçbir gerekçeyle geri ekleme.**
2. **Kendi görselleri gelmeden `robots.txt` ve `NOINDEX` kaldırılmaz.**
   Kullanıcı isterse bile önce bu riski hatırlat, sonra kararına uy.
3. Şirket hakkında **doğrulanmamış sayısal iddia üretme** (kuruluş yılı, ihracat
   ülkesi sayısı, ürün adedi, sertifika). Kullanıcı vermeden yazma.
4. `saraskimya-assets/` ve `_to_delete/` **git'e girmez** — gitignore'u bozma.

---

## 3. Mimari

```
index.html / en.html / fr.html / ar.html   ← build-pages.py ÜRETİR, elle düzenleme
assets/
  i18n.js        İÇERİK. SITE_BASE (dilden bağımsız) + STRINGS (tr/en/fr/ar)
  split.css      TÜM STİL. Renkler token; hiçbir yerde sabit renk yok
  split.js       RENDER + davranış (slider, sekme, detay katmanı, mobil menü)
  build-pages.py 4 dil sayfasını üretir + cache-busting sürüm damgası
  img/           145 görsel (GEÇİCİ — bkz. bölüm 2)
yayinla.bat            Tek tık yayın (pull --rebase → build → commit → push → deploy)
WHATSAPP-KURULUM.md    WhatsApp Business şablon kurulum rehberi
robots.txt             Şu an Disallow: /
vercel.json            Önbellek + güvenlik başlıkları
.env.local             GITIGNORE — sırlar burada, asla commit etme
saraskimya-assets/     GITIGNORE — telifli referans arşivi (529 dosya)
_to_delete/            GITIGNORE — geçici
```

### İş bölümü

- **`SITE_BASE`** → görseller, bağlantılar, sayısal veriler (konteyner ölçüleri,
  Incoterms kuralları), menü ağacı, ürün/sistem detay verileri, form alanları.
  Dilden bağımsız olan her şey. **Tek yerde.**
- **`STRINGS.<dil>`** → yalnızca metin. Dört dil aynı anahtar yapısını paylaşır.
- `split.js` ikisini `LANG` değerine göre birleştirir (`<html lang>` üzerinden).

Menü ve detay kayıtları index tabanlı değil **anahtar tabanlı** eşlenir
(`k:"parquetAdh"` → `T.nav.parquetAdh`). Dizi sıralaması değişirse bozulmaz.

### Detay katmanı (`.dtl`)

Ürün, sistem ve uygulama kartları tıklanınca açılan modal. `split.js` içinde
`#dtl` kabına render edilir; URL'ye `#detay/<anahtar>` yazar, kapanınca temizler.
Galeri görselleri de bu katmandan gelir.

---

## 4. Sık yapılan işler

### Metin değiştirmek
`assets/i18n.js` → `STRINGS.tr` (ve diğer üç dil). Sonra `python assets/build-pages.py`.

### Renk değiştirmek
`build-pages.py` içindeki **`PALETTE`** ve **`BRAND`** sabitleri — tek nokta.
Değiştir, betiği çalıştır; dört dil birden güncellenir. Şu an **Kehribar Çelik**
(`--brand:#D97706`). HTML'deki `:root` bloğu bu sabitten üretilir, elle düzenleme.

### İletişim bilgisi eklemek
`SITE_BASE.contact` alanlarını doldur → sonra `contactReady: true` yap.
Bu bayrak `false` iken telefon/e-posta **bağlantı olarak basılmaz** — eksik veya
yanlış numaraya link verilmesini önleyen kasıtlı bir emniyet. Bozma.

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

**Kolay yol:** `yayinla.bat` çift tıkla. Sırayla şunu yapar:
`git pull --rebase` → `build-pages.py` → `git add/commit/push` → `vercel deploy --prod`

**Elle:**
```bash
git pull --rebase                # once uzaktakini al (yayinla.bat bunu yapar)
python assets/build-pages.py     # 4 dil sayfasını üretir (ZORUNLU)
python -m http.server 5173       # yerel önizleme → http://localhost:5173
git add -A && git commit -m "..." && git push
vercel deploy --prod             # yayına al
```

### ⚠️ `build-pages.py` çalıştırmayı unutma — nedeni

HTML sayfaları elle düzenlenmez. Ayrıca bu betik `split.css + split.js + i18n.js`
içeriğinden SHA-256 alıp `?v=<damga>` üretir. Bu damga **cache-busting** içindir:

Bir kez şu yaşandı → `vercel.json`'da CSS/JS için `max-age=3600` vardı.
Deploy sonrası **yeni HTML + eski JS** birleşti; eski JS silinmiş bir global'i
arayıp hata verdi ve **sayfa bembeyaz açıldı.** Daha önce siteyi hiç açmamış
kullanıcılarda sorun yoktu — bu yüzden teşhis zorlaştı.

Çözüm iki katmanlı, ikisi de yerinde kalmalı:
1. `vercel.json` → CSS/JS/HTML için `max-age=0, must-revalidate`
2. `?v=<hash>` damgası → her deploy'da URL değişir, eski kopya düşer

**Beyaz sayfa görürsen ilk bakacağın yer budur.**

### Otomatik deploy AKTİF DEĞİL
Vercel'in GitHub App'i depoya kurulu olmadığı için `git push` tek başına yayına
almaz; `vercel deploy --prod` gerekir.
Açmak için: Vercel → Project → Settings → Git → Connect Git Repository.

---

## 6. Sayfa yapısı (güncel sıra)

1. Üst bar — dil seçimi
2. Yapışkan header — wordmark, mega menü, "Teklif Alın"
   *(Kurumsal artık alt menüsüz; doğrudan `#kurumsal` bölümüne gider)*
3. **Hero** — 6 ürün ailesini gezen slider + 4'lü özellik paneli
4. **Ürünler & Sistemler** — 8'li kutucuk ızgarası
5. **Uygulamalar (video/saha)** — 4 kart
6. **Sistemler** — 3 sekme (spor / endüstriyel / su izolasyon)
7. **Kurumsal** — görsel + metin
8. **Uygulama alanları** — 14 kart, her biri detay katmanı açar
9. **İletişim** — bilgi + form (form backend'e bağlı değil)
10. **İhracat** — konteyner ölçüleri + Incoterms 2020
    *(kullanıcı isteğiyle 05.08.2026'da sayfa sonuna, footer öncesine taşındı)*
11. Footer
+ Yüzen WhatsApp düğmesi · detay katmanı (`#dtl`)

---

## 7. Kod kuralları

- Yorumlar **Türkçe**, kısa ve nedene odaklı
- CSS'te **sabit renk yasak** — her şey `var(--token)`
- Boş veri = bölüm hiç basılmaz (`has()` yardımcısı). **Bu davranışı bozma.**
- Dış bağlantılar otomatik `target="_blank" rel="noopener"` alır (`ext()`)
- Kart tıklanabilirliği `.lnk-cover` örtüsüyle — `figure/figcaption` semantiği korunur
- Arapçada sayılar **Latin rakamla** yazılır (tablodaki ölçülerle tutarlılık için)
- RTL'de gizleme `left:-9999px` ile YAPILMAZ — belgeyi yatayda büyütüp Arapça
  sayfayı boş gösteriyordu. `clip-path:inset(50%)` kullanılır. *(yaşanmış hata)*

---

## 8. Açık işler

**Yayın öncesi zorunlu**
- [ ] **145 görselin kendi fotoğraflarıyla değiştirilmesi** ← tek gerçek engel
- [ ] `SITE_BASE.contact` doldurulması → sonra `contactReady: true`
- [ ] Leon Kimya logosu → `SITE_BASE.brand.logoDark/logoWhite`
- [ ] Aramaya açılması: `build-pages.py` → `NOINDEX = False` **ve** `robots.txt`
- [ ] `canonical` / `og:url` gerçek alan adına çevrilmesi

**İçerik**
- [ ] "Kurumsal" metnindeki `TODO` — kuruluş hikâyesi, kapasite, hedef pazarlar
- [ ] `SITE_BASE.stats` — gerçek rakamlar (boş olduğu için bant gizli)
- [ ] Sosyal medya hesapları → `SITE_BASE.social` (boşsa satır hiç görünmez)
- [ ] E-katalog PDF → `SITE_BASE.links.catalog`
- [ ] Blog yazıları

**Teknik**
- [ ] İletişim formu backend'i (şu an gönderim yapmıyor)
- [ ] Statik HTML'e dönüştürme veya SSR — SEO için gerekli
- [ ] Görsel optimizasyonu (WebP + `srcset`)
- [ ] KVKK aydınlatma metni + çerez bildirimi
- [ ] Vercel GitHub App bağlantısı (otomatik deploy)

---

## 9. Görsel üretim planı (sıradaki iş)

145 görselin yerine **22 orijinal görsel** yeterli — mevcut tüm slotları
karşılar (hero, kategori, kutucuk, sistem, galeri, uygulama, blog).
Tema ve renk dünyası mevcut tasarımla uyumlu tutulmalı; referans
fotoğrafların birebir kopyası **olmamalı** — amaç zaten bundan kurtulmak.

**Spor zemin (4)**
1. Atletizm parkuru — kırmızı poliüretan, kulvar çizgileri, geniş açı
2. Akrilik saha — açık hava basketbol/tenis, canlı renk ayrımı
3. EPDM granül oyun alanı — renkli, yumuşak zemin, çocuk parkı
4. Sentetik çim uygulaması — serim ve yapıştırma anı

**Endüstriyel (4)**
5. Epoksi depo zemini — parlak, geniş, raf sıraları
6. Otopark / showroom zemini — çizgili, temiz
7. Dekoratif metalik epoksi — yakın plan doku
8. Hijyenik gıda/laboratuvar zemini — beyaz, kavisli süpürgelik

**Su izolasyon (3)**
9. Likit membran uygulaması — rulo ile teras
10. Yalıtılmış teras/balkon — bitmiş hâl
11. Derz/detay çözümü — yakın plan teknik

**Yapıştırıcı (3)**
12. Parke yapıştırıcı — taraklı mala ile uygulama
13. PVC/vinil serim
14. Kauçuk karo yapıştırma

**Diğer ürün (4)**
15. Bağlayıcı dökümü — granülle karıştırma
16. Dekoratif taş halı yüzey
17. Elektrik reçinesi — trafo/döküm
18. Astar uygulaması — beton üzerine

**Kurumsal (4)**
19. Üretim tesisi — reaktör/tank hattı
20. Dolum hattı — bidon/varil
21. AR-GE laboratuvarı — teknisyen, cam malzeme
22. Hero görseli — geniş, endüstriyel, marka rengiyle uyumlu

> Üretim aracı: Higgsfield MCP (`generate_image` / `generate_image_batch`).
> Başlamadan **kredi bakiyesini kontrol et ve kullanıcıya maliyeti söyle** —
> 22 görsel azımsanacak bir tüketim değil. Kullanıcı bir kez "şimdilik dursun,
> sonra yapacağız" dedi; tekrar sormadan üretime başlama.

---

## 10. Karar geçmişi

- **Tasarım:** 20 farklı tasarım yönü üretildi → "Referans Split" düzeni seçildi
  (bölünmüş slider hero + özellik paneli). Elenen 19 yön arşivde.
- **Renk:** 20 modern palet denendi → **Kehribar Çelik** (`#D97706`) seçildi.
  Aday paletler: Emerald Slate, Derin Teal, Adaçayı Minimal (marka yeşiline yakın
  olanlar), Bakır & Kömür (en ayrışan). Elenenler arşivde.
- **Neden 20 varyant:** düzen ve renk **ayrı ayrı** seçilsin diye. Önce düzen
  sabitlendi, sonra aynı düzen üzerinde 20 palet denendi — adil karşılaştırma.
- **İhracat bölümü** başta Sistemler'den sonraydı; kullanıcı isteğiyle sayfa
  sonuna alındı (05.08.2026).
- **Referanslar/Markalar bölümü** ve Kurumsal alt menüsündeki Politikalarımız,
  Ekibimiz, İnsan Kaynakları, Sertifikalar bağlantıları kullanıcı isteğiyle
  siteden tamamen kaldırıldı (09.08.2026). Menü, footer, `SITE_BASE.brands`,
  `ui.refProjects`, karusel JS'i ve `.brand*` CSS'i birlikte silindi. Hero
  özellik panelinin dört bağlantısı mevcut bölümlere yönlendirildi
  (`featLinks`). Geri istenirse git geçmişindeki bu commit'e bakın.
- Elenen 40 deneme `_arsiv-varyantlar.zip` içinde (git'e dahil değil, yerelde).
