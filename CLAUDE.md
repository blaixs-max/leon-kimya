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

`assets/img/` altındaki **119 görselin tamamı AI ile yeniden üretildi**
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
assets/
  i18n.js        İÇERİK. SITE_BASE (dilden bağımsız) + STRINGS (tr/en/fr/ar)
  split.css      TÜM STİL. Renkler token; hiçbir yerde sabit renk yok
  split.js       RENDER + davranış (slider, sekme, detay katmanı, mobil menü)
  build-pages.py 4 dil sayfasını üretir + cache-busting sürüm damgası
  img/           119 görsel (AI ile üretildi, telif sorunu yok)
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
**baştan sona sen yürüt**: `build-pages.py` → commit → `yayinla.bat`.

```bash
python assets/build-pages.py                    # sayfaları üret
git add -A && git commit -F <mesaj-dosyasi>     # commit
cmd /c yayinla.bat < nul                        # pull --rebase + push + deploy
```

İki tuzak:

1. **Commit mesajını `-m` ile çok satırlı verme.** PowerShell satır başındaki
   `-` işaretlerini ayrı argüman sanıyor, commit sessizce oluşmuyor.
   Mesajı bir dosyaya yazıp `git commit -F dosya.txt` kullan. *(yaşandı)*
2. **`yayinla.bat` sonunda `pause` var.** Etkileşimsiz kabuktan çalıştırırken
   `< nul` ile besle, yoksa bekler.

`yayinla.bat` sırayla: çalışma ağacı temiz mi kontrol → `git pull --rebase` →
`git push` → `vercel deploy --prod`.

**`pull --rebase` adımını atlama.** Elle `commit → push → deploy` yapıp bu
adımı atlarsan, başka bir oturumdan commit gelmişse push reddedilir. Betiği
kullanmak bunu kendiliğinden halleder.

> `build-pages.py`'yi betik ÇALIŞTIRMAZ — düzenlemeden sonra elle çalıştırıp
> commit'e dahil etmek gerekir. Ağaç kirliyse betik en başta durur ve ne
> yapılacağını yazar (`git pull --rebase` kirli ağaçta çalışmaz).

> Vercel CLI bir kez sürüm yükseltme sorusu sordu, `npm` bulunamadı ve
> **başarılı deploy'dan sonra** betik hata verdi. Betiğe `NO_UPDATE_NOTIFIER=1`
> ve `<nul` eklendi; ayrıca deploy adımı hata dönerse çıktıda `Ready`/`Aliased`
> satırlarına bakılması gerektiğini söyleyen ayrı bir uyarı basılıyor (09.08.2026).

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

---

## 8. Açık işler

**Yayın öncesi zorunlu**
- [ ] `SITE_BASE.contact` doldurulması (telefon, e-posta, adres)
      → sonra `contactReady: true`
- [ ] Yeni alan adı + hosting'e taşınması
- [ ] `canonical` / `og:url` yeni alan adına çevrilmesi
- [ ] Aramaya açılması: `build-pages.py` → `NOINDEX = False` **ve** `robots.txt`
      *(yalnızca yukarıdaki üçü tamamlandıktan sonra)*

**İçerik**
- [ ] "Kurumsal" metnindeki `TODO` — kuruluş hikâyesi, kapasite, hedef pazarlar
- [ ] `SITE_BASE.stats` — gerçek rakamlar (boş olduğu için bant gizli)
- [ ] Sosyal medya hesapları → `SITE_BASE.social` (boşsa satır hiç görünmez)

**Teknik**
- [ ] **Statik HTML'e dönüştürme** — SEO için gerekli, bkz. bölüm 9
- [ ] Görsel optimizasyonu (WebP + `srcset`)
- [ ] KVKK aydınlatma metni + çerez bildirimi
- [ ] Vercel GitHub App bağlantısı (otomatik deploy)

**Kapanmış olanlar** *(tekrar açma)*
- [x] Görseller — 119'unun tamamı AI ile üretildi, yeni görsel gelmeyecek
- [x] Logo — `assets/img/logo-dark.png`
- [x] İletişim formu — `formsubmit.co` üzerinden çalışıyor
- [x] E-katalog — **üretilmeyecek**, karar verildi. `links.catalog` boş kalır,
      boş olduğu için katalog butonları hiç basılmaz.
- [x] Blog — bölüm sayfadan kaldırıldı, yazı üretilmeyecek

---

## 9. Statik HTML'e dönüştürme (sıradaki teknik iş)

### Sorun

`index.html` ve kardeşleri neredeyse boş: içlerinde `<div id="app"></div>` var,
gövde içeriğini tarayıcı `split.js`'i çalıştırınca kuruyor. Sonuçları:

- Google JS'i çalıştırıyor ama iki aşamada; render kuyruğu günler sürebilir
- Bing/Yandex çok daha zayıf render eder
- WhatsApp / LinkedIn / X link önizlemesi JS **hiç** çalıştırmaz
- JS yavaşlar veya hata verirse sayfa bomboş kalır
  *(bu fiilen yaşandı — bkz. bölüm 5, cache/beyaz sayfa olayı)*

`<title>`, `description` ve `hreflang` zaten statik (`build-pages.py` yazıyor);
eksik olan yalnızca gövde.

### Çözüm ve neyi bozmadığı

Derleme anında JS bir kez çalıştırılır, ürettiği markup HTML'e yazılır.

- **CSS hiç değişmez** — görünüm, renk, yuvarlatma aynı kalır
- **Animasyonlar çalışmaya devam eder** — slider, sekmeler, reveal, sayaçlar,
  detay katmanı hepsi tarayıcıda çalışmaya devam eder
- **Görseller aynı dosyalar** — dokunulmaz
- Tek fark: içerik JS yüklenmeden önce de görünür

### Gerekli refactor

`split.js` şu an hem markup üretiyor hem davranış bağlıyor. İkisi ayrılmalı:

```
assets/render-markup.js   → yalnızca HTML string üretir (derlemede çalışır)
assets/behaviors.js       → DOM'a olay bağlar (tarayıcıda çalışır)
```

Ayrılmazsa hem derlemede hem tarayıcıda render edilir ve **içerik iki kez basılır.**

`build-pages.py` markup üretimini Node ile çağırıp (`node render-markup.js tr`)
çıktıyı `<div id="app">…</div>` içine gömer. Dört dil için ayrı ayrı.

> Bu işi **yeni alan adına taşırken** yapmak mantıklı — ikisi de `canonical`
> ve indeksleme ile ilgili, tek seferde bitirilir.

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
