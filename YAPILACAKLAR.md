# Yapılacaklar — Leon Kimya

Açık işlerin **tek listesi**. Bir iş bitince buradan silinir; kalıcı olarak
kaydedilmesi gereken bir karar varsa `CLAUDE.md` bölüm 8'deki "Kapanmış olanlar"
listesine yazılır.

> Site **yayında ve aramaya açık**: https://leonkimya.com
> Aşağıdakilerin hiçbiri siteyi çalışmaz hâle getirmiyor.

**Kim sütunu:** `Siz` = panel/karar gerektiren, erişimim yok · `Ben` = söyleyin yapayım

---

## A · Hukuki — en öncelikli

Site halka açık ve iletişim formu kişisel veri topluyor.

| # | İş | Kim | Not |
|---|---|---|---|
| A1 | **KVKK aydınlatma metni** | Siz + Ben | Taslağı ben yazarım, **hukuki onay sizde**. Formun altına ve ayrı bir bölüme konur. |
| A2 | **Çerez bildirimi** | Ben | Site kendi çerezini kullanmıyor ama Google Maps gömülü — ziyaretçinin IP'si Google'a gidiyor. |
| A3 | **Yurt dışına aktarım bildirimi** | A1'in içinde | Form verisi `formsubmit.co` üzerinden geçiyor (üçüncü taraf, yurt dışı). Aydınlatma metninde açıkça yazılmalı. |

**A1 için sizden gereken:** veri sorumlusu unvanı (tam ticari ünvan), verilerin
saklama süresi, varsa KVKK irtibat kişisi. Bunlar olmadan metin yazamam —
uydurulacak şeyler değil.

> **18.08.2026 — ara düzeltme yapıldı.** Onay kutusu ve uyarı metni dört dilde
> "aydınlatma metnini okudum" diyordu; öyle bir metin yoktu. Metinler gerçeği
> söyleyecek şekilde değiştirildi. **Yanlış beyan kalktı, A1 hâlâ açık.**

---

## B · Panel işleri — sizde

| # | İş | Not |
|---|---|---|
| B1 | **Search Console'a sitemap tanıt** | `https://leonkimya.com/sitemap.xml`. Adım adım anlatabilirim. Yapılmadan Google siteyi bulur ama yavaş. |
| B2 | **Form postaları spam'e düşüyor** | Test mesajı Spam klasörüne indi. FormSubmit kendi sunucusundan gönderdiği için `leonkimya.com` SPF'i bu postaları kapsamıyor. Çözüm: gelen mesajı "spam değil" işaretleyin ve Hostinger'da `formsubmit.co` için izin kuralı ekleyin. |

> **DNS uyarısı:** nameserver'lar Hostinger'da kalmalı. Vercel'e taşınırsa
> e-posta kayıtları yazılamaz ve posta çalışmaz. Ayrıntı: `CLAUDE.md` bölüm 2.

---

## C · İçerik — sizden bilgi bekliyor

Hiçbiri uydurulamaz; siz vermeden yazılmaz *(`CLAUDE.md` kural 3)*.

| # | İş | Sizden gereken |
|---|---|---|
| C1 | "Kurumsal" metnindeki `TODO` | Kuruluş hikâyesi, üretim kapasitesi, hedef pazarlar |
| C2 | İstatistik bandı (`SITE_BASE.stats`) | Gerçek rakamlar. Boş olduğu için bant şu an **hiç görünmüyor** — bu kasıtlı. |
| C3 | Sosyal medya (`SITE_BASE.social`) | Hesap adresleri. Boşken satır basılmıyor. |

---

## D · Bakım ve iyileştirme

| # | İş | Kim | Not |
|---|---|---|---|
| D1 | **Katalog boyutu** | Siz | Her dosya ~13 MB. Mobilde ağır. Kataloğu üreten araçtan "web için optimize" çıktısı alınırsa %60–70 küçülür. Zorunlu değil. |
| D2 | **Vercel GitHub App bağlantısı** | Siz | Şu an `git push` tek başına yayına almıyor; `yayinla.bat` deploy ediyor. Bağlanırsa otomatik olur. Vercel → Settings → Git |
| D3 | **`katalog/` git'te versiyonlansın mı?** | Siz — **karar bekliyor** | Kökteki taslak klasörü `.gitignore`'da değil; `git add -A` çalışırsa 49 MB depoya girer. Şimdilik commit'lerde dosya yolları açıkça yazılarak korunuyor. |

---

## E · Kayda geçen — kullanıcı kararı verildi

| # | Konu | Durum |
|---|---|---|
| E1 | Katalogdaki sertifika sayfası ve `Polinflex` ibaresi | Yayındaki dört PDF'te ISO 9001/14001 tesis beyanı, World Athletics ve ITF belge satırları ve sistem adlarında `Polinflex` geçiyor. Durum kullanıcıya iki kez ayrıntılı bildirildi; **mevcut hâliyle yayınlanmasına kullanıcı karar verdi.** Üretici (`build.js`) tarafında `Polinflex` silindi, dolayısıyla yeniden basım istenirse temiz çıkar (~4 dk). **Talep gelmedikçe bu konu yeniden açılmayacak.** |

---

## Kapalı — tekrar açılmayacak

Tam liste ve gerekçeleri `CLAUDE.md` bölüm 8 "Kapanmış olanlar" başlığında.

**19.08.2026'da kapananlar:** Hostinger e-posta kurulumu (`info@leonkimya.com`,
MX/SPF/DKIM/DMARC yerinde) · site e-postasının ve form hedefinin yeni adrese
geçirilmesi · katalog PDF'lerindeki eski alan adı ve e-posta *(alan adı artık
`build.js` içinde `ALAN_ADI` tek sabitinde — bir daha PDF'lerde eski adres kalmaz)*
· formun teslim edilmeyen mesaja "alındı" demesi.

**Daha önce:** görseller, logo, iletişim formu, e-katalog, blog, prerender,
og etiketleri, WebP, CLS, JSON-LD, sitemap, temiz URL, iletişim bilgileri,
alan adı taşıması, aramaya açılma.
