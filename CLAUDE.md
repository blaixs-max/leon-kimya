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
web sitesi. Framework yok — sade HTML/CSS/JS.
**Derleme adımı var:** `build-pages.py` sayfaları üretir ve içeriği
Node ile önceden render eder (bkz. bölüm 5 ve 9).

| | |
|---|---|
| **Canlı** | https://leon-kimya.vercel.app |
| **Depo** | https://github.com/blaixs-max/leon-kimya (private) |
| **Vercel projesi** | `leon-kimya` (hesap: `blaixs-4009`) |
| **Yerel** | `C:\Users\Dell\Desktop\Web Site` |
| **Diller** | TR (`/`), EN (`/en`), FR (`/fr`), AR (`/ar` — RTL) |

---

## 2. ⚠️ ÖNCE BUNU OKU — devralınan içerik ve indeksleme

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

### ✅ ÇÖZÜLDÜ — görseller

`assets/img/` altındaki **görsellerin tamamı AI ile yeniden üretildi**
(120 dosya: 116 WebP + favicon/og görseli)
(kullanıcı onayı, 06.08.2026). Üçüncü taraf fotoğrafı kalmadı, telif riski
kapandı. **Yeni görsel gelmeyecek**, bu iş bitti.

`saraskimya-assets/` klasörü diskte duruyor (529 dosya) ama **gitignore'da**
ve artık kullanılmıyor — yalnızca eski referans arşivi.

### Site neden hâlâ aramaya kapalı

Görsel sorunu bitti ama iki gerekçe daha var:

- **İletişim bilgileri eksik** — telefon, e-posta, adres boş; `contactReady:false`
- **Alan adı taşınacak** — yeni domain + hosting planlanıyor; `canonical`
  ve `og:url` kesinleşmeden indekslenmesi yanlış adresi kaydettirir

Bu yüzden: `robots.txt` → `Disallow: /` ve `build-pages.py` → `NOINDEX = True`.

### KURALLAR — asla aykırı davranma

1. Üçüncü tarafa ait telefon / e-posta / WhatsApp / adres / logo / marka /
   sertifika bilgisini **hiçbir gerekçeyle geri ekleme.**
2. **Aramaya açmadan önce** iletişim bilgileri girilmiş, `contactReady:true`
   yapılmış ve alan adı kesinleşmiş olmalı. Üçü tamamlanmadan `NOINDEX`
   ve `robots.txt` değiştirilmez.
3. Şirket hakkında **doğrulanmamış sayısal iddia üretme** (kuruluş yılı, ihracat
   ülkesi sayısı, ürün adedi, sertifika). Kullanıcı vermeden yazma.
4. `saraskimya-assets/` ve `_to_delete/` **git'e girmez** — gitignore'u bozma.

---

## 3. Mimari

```
index.html / en.html / fr.html / ar.html   ← build-pages.py ÜRETİR, elle düzenleme
sitemap.xml                               ← build-pages.py ÜRETİR
assets/
  i18n.js             İÇERİK. SITE_BASE (dilden bağımsız) + STRINGS (tr/en/fr/ar)
  split.css           TÜM STİL. Renkler token; hiçbir yerde sabit renk yok
  split.js            buildMarkup() + davranışlar — İKİ MODLU (bkz. bölüm 9)
  prerender.js        Node: derleme anında markup üretir
  img-sizes.js        OTOMATİK ÜRETİLİR — görsel ölçüleri (CLS için)
  build-pages.py      4 dil sayfası + sitemap.xml + sürüm damgası
  build-img-sizes.py  img-sizes.js'i üretir
  img/                120 görsel (116 WebP + favicon/og), AI ile üretildi
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

### ⚠️ YAYINI ASİSTAN YAPAR — kullanıcıya bırakma

Kullanıcı yayın adımlarını elle çalıştırmak istemiyor. Onay aldıktan sonra
**baştan sona sen yürüt**.

```bash
python assets/build-img-sizes.py    # görsel ölçü haritası (görsel eklendiyse)
python assets/build-pages.py        # 4 sayfa + sitemap.xml (ZORUNLU)
git add -A && git commit -F <mesaj-dosyasi>
cmd /c "<tam-yol>\yayinla.bat" < nul
```

**Gereksinimler:** Python 3 + Pillow (ölçü okuma) ve **Node.js** (prerender).
Node yoksa `build-pages.py` hata verip DURUR — sessizce boş gövde üretmez.

### Üç tuzak — hepsi yaşandı

1. **Commit mesajını `-m` ile çok satırlı verme.** PowerShell satır başındaki
   `-` işaretlerini ayrı argüman sanıyor, commit sessizce oluşmuyor.
   Mesajı dosyaya yazıp `git commit -F dosya.txt` kullan.
2. **`yayinla.bat`'ı tam yolla ve `< nul` ile çağır.** Sonunda `pause` var;
   ayrıca `cmd /c yayinla.bat` çalışma dizinini aktarmıyor.
3. **`yayinla.bat` başarılı deploy'da bile sıfırdan farklı kod dönebilir.**
   Çıktıda `Ready` / `Aliased` satırları varsa deploy BAŞARILIDIR; hata
   Vercel CLI'nin kendi adımına aittir. Betik bunu ekrana da yazıyor.

`yayinla.bat` sırayla: ağaç temiz mi → `git pull --rebase` → `git push` →
`vercel deploy --prod`. **`pull --rebase` adımını atlama** — başka bir
oturumdan commit gelmişse push reddedilir.

### ⚠️ `build-pages.py` çalıştırmayı unutma — nedeni

HTML sayfaları elle düzenlenmez. Betik ayrıca `split.css + split.js + i18n.js`
içeriğinden SHA-256 alıp `?v=<damga>` üretir. Bu damga **cache-busting** içindir:

Bir kez şu yaşandı → `vercel.json`'da CSS/JS için `max-age=3600` vardı.
Deploy sonrası **yeni HTML + eski JS** birleşti; eski JS silinmiş bir global'i
arayıp hata verdi ve **sayfa bembeyaz açıldı.** Siteyi hiç açmamış
kullanıcılarda sorun yoktu — bu yüzden teşhis zorlaştı.

Çözüm iki katmanlı, ikisi de yerinde kalmalı:
1. `vercel.json` → CSS/JS/HTML için `max-age=0, must-revalidate`
2. `?v=<hash>` damgası → her deploy'da URL değişir, eski kopya düşer

**Beyaz sayfa görürsen ilk bakacağın yer budur.**

### Otomatik deploy AKTİF DEĞİL
Vercel'in GitHub App'i depoya kurulu olmadığı için `git push` tek başına
yayına almaz. Açmak için: Vercel → Settings → Git → Connect Git Repository.

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
9. **İletişim** — bilgi + form. Koyu kömür bandı, 26px yuvarlak köşe,
   form beyaz kart. Form **çalışıyor**: `SITE_BASE.formEndpoint` →
   `formsubmit.co` üzerinden e-postaya düşüyor.
10. **İhracat** — konteyner ölçüleri + Incoterms 2020
    *(kullanıcı isteğiyle 05.08.2026'da sayfa sonuna, footer öncesine taşındı)*
11. Footer
+ Yüzen WhatsApp düğmesi · detay katmanı (`#dtl`)

**Kaldırılan bölümler:** Blog ve Markalar sayfadan tamamen çıkarıldı
(`split.js` içinde artık `const blog` / `const brands` yok). Menüdeki Blog
bağlantısı da kalkmalıysa `SITE_BASE.nav` üzerinden düzenlenir.

---

## 7. Kod kuralları

### ⚠️ DÖRT DİL KURALI — istisnasız

**Yapılan her değişiklik dört dile birden işlemeli.** Bir dilde olup diğerinde
olmayan hiçbir şey kalmaz: ne stil, ne bölüm, ne metin, ne bağlantı.

Mimari bunu zaten zorluyor — `split.css` ve `split.js` dört dilde ortak,
`i18n.js` ise dört dilin metnini aynı anahtar yapısında tutuyor. Ama:

1. Yeni bir metin eklerken **dördünü birden** ekle (`tr`, `en`, `fr`, `ar`).
   Birini atlarsan o dilde anahtar adı ham hâliyle ekrana basılır.
2. Değişiklikten sonra `python assets/build-pages.py` çalıştır — dört sayfa
   birden üretilir. Sadece birini elle düzenlemek yanlış.
3. **Doğrulamayı dört dilde birden yap.** Yalnız TR'ye veya TR+AR'ye bakmak
   yetmez; Arapça RTL olduğu için farklı davranır, EN/FR metin uzunlukları
   farklıdır ve taşma yaratabilir.

Değişiklik sonrası kontrol edilecekler: bölüm sayısı, kart/kutucuk sayısı,
uygulanan stil değerleri, yatay taşma, RTL'de yön duyarlı özellikler.

### Diğer kurallar

- Yorumlar **Türkçe**, kısa ve nedene odaklı
- CSS'te **sabit renk yasak** — her şey `var(--token)`
- Boş veri = bölüm hiç basılmaz (`has()` yardımcısı). **Bu davranışı bozma.**
- Dış bağlantılar otomatik `target="_blank" rel="noopener"` alır (`ext()`)
- Kart tıklanabilirliği `.lnk-cover` örtüsüyle — `figure/figcaption` semantiği korunur
- Arapçada sayılar **Latin rakamla** yazılır (tablodaki ölçülerle tutarlılık için)
- RTL'de gizleme `left:-9999px` ile YAPILMAZ — belgeyi yatayda büyütüp Arapça
  sayfayı boş gösteriyordu. `clip-path:inset(50%)` kullanılır. *(yaşanmış hata)*
- Temel kuralda **`img{...;height:auto;...}` kaldırılmaz.** `<img>` üzerindeki
  `width`/`height` öznitelikleri CSS'e "presentational hint" olarak yükseklik
  dayatır; `aspect-ratio` yalnızca yükseklik `auto` iken çalıştığı için öznitelik
  eklendiği anda oran devre dışı kalır ve görsel doğal yüksekliğine uzar.
  Bir görsele CSS'ten sabit yükseklik veriliyorsa (`.drw__hd img{height:44px}`)
  yanına **`width:auto`** de yazılmalı — yoksa bu kez genişliği öznitelik ezer.
  *(yaşanmış hata: CLS için öznitelik eklendi, ürün pop-up'ındaki kartlar
  256×160 yerine 256×500 basıldı)*

---

## 8. Açık işler

**Yayın öncesi zorunlu**
- [ ] `SITE_BASE.contact` doldurulması (telefon, e-posta, adres)
      → sonra `contactReady: true`
- [ ] Yeni alan adı + hosting'e taşınması
- [ ] `build-pages.py` → `SITE_URL` yeni alan adına çevrilmesi
      *(canonical, og:url, hreflang, sitemap ve JSON-LD hepsi bundan türer —
      başka hiçbir yeri elle düzeltmeye gerek yok)*
- [ ] Aramaya açılması: `NOINDEX = False` **ve** `robots.txt`
      *(yalnızca yukarıdakiler tamamlandıktan sonra)*
- [ ] Google Search Console'a `sitemap.xml` tanıtılması

**İçerik**
- [ ] "Kurumsal" metnindeki `TODO` — kuruluş hikâyesi, kapasite, hedef pazarlar
- [ ] `SITE_BASE.stats` — gerçek rakamlar (boş olduğu için bant gizli)
- [ ] Sosyal medya hesapları → `SITE_BASE.social` (boşsa satır hiç görünmez)
- [ ] JSON-LD'ye telefon/adres eklenmesi → `build-pages.py` içinde `jsonld()`
      fonksiyonunda TODO olarak hazır. Adres girilince `@type` `Organization`'dan
      `LocalBusiness`'a yükseltilebilir (Google Haritalar görünürlüğü).

**Teknik**
- [ ] KVKK aydınlatma metni + çerez bildirimi
- [ ] Vercel GitHub App bağlantısı (otomatik deploy)

**Kapanmış olanlar** *(tekrar açma)*
- [x] Görseller — tamamı AI ile üretildi, yeni görsel gelmeyecek
- [x] Logo — `assets/img/logo-dark.webp`
- [x] İletişim formu — `formsubmit.co` üzerinden çalışıyor
- [x] E-katalog — **üretilmeyecek**, karar verildi
- [x] Blog — bölüm sayfadan kaldırıldı, yazı üretilmeyecek
- [x] **Statik HTML / prerender** — bkz. bölüm 9
- [x] **og / twitter etiketleri + canonical** — dört dilde, `SITE_URL`'den türer
- [x] **WebP** — 116 dosya, 8.58 MB → 4.74 MB (%47)
- [x] **Görsel width/height (CLS)** — `img-sizes.js` otomatik üretiliyor
- [x] **JSON-LD** — Organization şeması, dört dilde
- [x] **sitemap.xml** — `build-pages.py` üretiyor, 4 adres + hreflang
- [x] **Temiz URL** — `vercel.json` `cleanUrls`; `.htaccess` Apache'ye ait,
      Vercel'de geçersiz

---

## 9. Prerender — nasıl çalışıyor

Sayfa gövdesi artık HTML'de hazır geliyor. Öncesinde ham HTML'de yalnızca
68 karakter metin vardı ("JavaScript gerektirir"); arama motorları ve link
önizlemesi yapan botlar (WhatsApp, LinkedIn) sayfayı boş görüyordu.
Şimdi ~12.000 karakter.

### `split.js` iki modlu

```
buildMarkup(B, T, LANG, RTL)   → saf fonksiyon, DOM'a dokunmaz, HTML döndürür
                                  Node'da da çalışır
[Node ise burada biter: module.exports]
tarayıcı kısmı                 → #app doluysa markup TEKRAR ÜRETİLMEZ,
                                  yalnızca davranış bağlanır
```

**Neden tek dosya?** Detay katmanı (`#dtl`) çalışma anında HTML üretiyor ve
`e()`, `ic()`, `label()` yardımcılarını kullanıyor. Dosyayı ikiye bölmek bu
yardımcıları çoğaltmak demekti.

### Zincir

```
build-pages.py → node assets/prerender.js <dil> → markup → <div id="app">…</div>
```

`prerender.js` `i18n.js` ve `img-sizes.js`'i sahte bir global bağlamda
yükler (ikisi de `window.` yazıyor, Node'da window yok).

### İki emniyet

1. **Derleme durur:** Node yoksa veya çıktı 5.000 karakterden kısaysa
   `build-pages.py` hata verip çıkar. Sessizce boş gövde üretmektense
   hata vermek doğru.
2. **Tarayıcı emniyet ağı:** prerender bir şekilde oluşmazsa tarayıcı
   markup'ı kendisi kurar. Boş `#app` ile test edildi, çalışıyor.

### Bozmadıkları
CSS, animasyonlar (slider, sekme, reveal, sayaç, detay katmanı), görseller —
hiçbiri değişmedi. Tek fark: içerik JS yüklenmeden önce de görünür.

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
- **Parke Yapıştırıcıları detayı sadeleştirildi** (09.08.2026). Ürün listesi
  7'den 3'e indi (Standart / Tiksotropik / Elastik 2K PU); Ekstra Elastik,
  Güçlendirilmiş, 1K STPE Hibrit ve 1K PVAc (D3) dört dilden de silindi.
  `paras` metinleri buna göre düzeltildi — artık STPE ve PVAc ailelerine atıf
  yok. Aynı istekle bu detayın `props` dizisi boşaltıldı, böylece **yalnız
  parke pop-up'ında** "Öne Çıkan Özellikler" bölümü basılmıyor (diğer
  detaylarda duruyor — bu kasıtlı). Tiksotropik ürününün görseli
  `prod-parke-01.jpg` referansıyla mor etiketli olarak yeniden üretildi:
  `prod-parke-02-v2.jpg`. Kullanılmayan `prod-parke-02/04/05/06.jpg`
  `_to_delete/parke-eski-gorseller/` altına alındı.
- **Kauçuk & sentetik çim ambalajları standartlaştırıldı** (09.08.2026). Dört
  ürün görseli (`prod-kaucuk-01..04-v2.jpg`) parke serisindeki referans kap
  düzeniyle, ama **beyaz** kova + beyaz şişe olarak yeniden üretildi. Her ürün
  kendi etiket karakterini korudu; aksan renkleri ayrıştırıldı (lacivert,
  turkuaz, çim yeşili, kehribar). Etiket metinlerinde uydurma ürün kodları
  (RUB-X) atıldı, "SENTETİK BOYA" ve "Jelkot" gibi yanlış tanımlar düzeltildi,
  `prod-kaucuk-04`'teki **"LEON POL A GÜÇ" POL kalıntısı temizlendi**.
  Üretim: Pixa `nano-banana-2`, 30 kredi/görsel, **iki referanslı** akış
  (`image_0` = kap, `image_1` = etiket) — ayrıntı proje hafızasında.
- **Ürün portföyü daraltıldı** (09.08.2026). *Endüstriyel Yapıştırıcılar*
  (`endYap` / `indAdh`) dört dilden, mega menüden, `links` ve `detailAssets`
  kayıtlarından tamamen silindi. *Filtre Yapıştırıcıları* 6→3 ürüne indi
  (kalanlar: Hızlı Kürlenen, Otomatik Dozaj, Tiksotropik/Conta; silinenler:
  Manuel Döküm, Hızlı Tip, Standart) — `paras` metnindeki "manuel döküm" atfı
  da düzeltildi. *Dökme Bağlayıcılar* 5→3: "Renkli Dökme Bağlayıcı" →
  **EPDM Dökme Bağlayıcı**, "Aromatik Dökme Bağlayıcı" → **SBR Dökme
  Bağlayıcı**; "Aromatik (Düşük Viskozite)" ve "Wet-Pour Sistem Bağlayıcısı"
  silindi, "Alifatik EPDM (UV Dayanımlı)" kaldı. Her iki grubun `props`
  dizisi boşaltıldı → bu iki pop-up'ta "Öne Çıkan Özellikler" basılmıyor.
  `productImgs` dizileri yeni ürün sayısına göre kısaltıldı.
- Elenen 40 deneme `_arsiv-varyantlar.zip` içinde (git'e dahil değil, yerelde).
- **Framework kullanılmadı** (07.08.2026). Astro/Next.js/Tailwind değerlendirildi;
  tek sayfa × 4 dil için karmaşıklığı gereksiz bulundu. Next.js'in çözdüğü üç şey
  (prerender, og etiketleri, görsel optimizasyonu) mevcut yapıda ~%90 oranında
  karşılandı. Eşik: gerçek blog, ürün detay sayfalarının kendi URL'leri, CMS
  veya sayfa sayısının 15-20'yi geçmesi.
- **`ChemicalSupplier` şeması kullanılmadı** — schema.org'da böyle bir tip yok;
  geçersiz tip yazılsaydı Google şemayı tümden yok sayardı. `Organization` seçildi.
- **Prerender için tek dosya korundu** — `split.js` ikiye bölünmedi, iki modlu
  yapıldı. Detay katmanı `e()`/`ic()`/`label()` yardımcılarını çalışma anında
  kullandığı için bölmek çoğaltma anlamına gelirdi.
- **Bazı görsellerde `alt=""` bilinçli** — slider arka planı ve ürün kutucukları.
  Yanlarında aynı metin zaten yazılı; WCAG H67 bu durumda boş alt ister.
