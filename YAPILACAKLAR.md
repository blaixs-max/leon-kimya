# Yapılacaklar — Leon Kimya

Açık işlerin **tek listesi**. Bir iş bitince buradan silinir; kalıcı olarak
kaydedilmesi gereken bir karar varsa `CLAUDE.md` bölüm 8'deki "Kapanmış olanlar"
listesine yazılır.

> Site **yayında ve aramaya açık**: https://leonkimya.com
> Aşağıdakilerin hiçbiri siteyi çalışmaz hâle getirmiyor.

**Kim sütunu:** `Siz` = panel/karar gerektiren, erişimim yok · `Ben` = söyleyin yapayım

---

## A · Hukuki — en öncelikli

Site artık halka açık ve iletişim formu kişisel veri topluyor.

| # | İş | Kim | Not |
|---|---|---|---|
| A1 | **KVKK aydınlatma metni** | Siz + Ben | Taslağı ben yazarım, **hukuki onay sizde**. Formun altına ve ayrı bir bölüme konur. |
| A2 | **Çerez bildirimi** | Ben | Site kendi çerezini kullanmıyor ama Google Maps gömülü — ziyaretçinin IP'si Google'a gidiyor. |
| A3 | **Yurt dışına aktarım bildirimi** | A1'in içinde | Form verisi `formsubmit.co` üzerinden geçiyor (üçüncü taraf, yurt dışı). Aydınlatma metninde açıkça yazılmalı. |

> **18.08.2026 — ara düzeltme yapıldı.** Onay kutusu ve uyarı metni dört dilde
> "aydınlatma metnini okudum" diyordu; **öyle bir metin yoktu**. Ziyaretçiye var
> olmayan bir belgeyi okuduğunu beyan ettiriyorduk ve kutu zorunluydu. Metinler
> gerçeği söyleyecek şekilde değiştirildi ("bilgilerimin yalnızca talebime yanıt
> verilmesi amacıyla işlenmesini kabul ediyorum"). **Yanlış beyan kalktı, ama
> A1 hâlâ açık** — bu düzeltme KVKK'yı karşılamıyor, yalnızca yanlışı gideriyor.

**A1 için sizden gereken:** veri sorumlusu unvanı (tam ticari ünvan), verilerin
saklama süresi, varsa KVKK irtibat kişisi. Bunlar olmadan metin yazamam —
uydurulacak şeyler değil.

---

## B · Panel işleri — sizde

| # | İş | Not |
|---|---|---|
| B1 | **Search Console'a sitemap tanıt** | `https://leonkimya.com/sitemap.xml`. Adım adım anlatabilirim. Bu yapılmadan Google siteyi bulur ama yavaş. |
| B2 | **Hostinger e-posta kurulumunu tamamla** | Plan alınmış, kurulum yarım (`MX`/`TXT` kaydı yok). Bitince B3 açılır. |
| B3 | **Yeni e-postayı siteye geçir** | B2 bitince: `SITE_BASE.contact.email` ve `SITE_BASE.formEndpoint` → `@leonkimya.com`. İkisi de tek satır, **Ben** yaparım. |

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
| D1 | **Katalog PDF'lerini yeniden üret** | Siz | Dört dosyanın içinde hâlâ `leon-kimya.vercel.app` yazıyor. `SITE_URL` gibi otomatik türemez. Yeni çıktıyı verin, aynı adlarla değiştiririm. |
| D2 | **Katalog boyutu** | Siz | Her dosya ~13 MB. Mobilde ağır. Kataloğu üreten araçtan "web için optimize" çıktısı alınırsa %60–70 küçülür. Zorunlu değil. |
| D3 | **Vercel GitHub App bağlantısı** | Siz | Şu an `git push` tek başına yayına almıyor; `yayinla.bat` deploy ediyor. Bağlanırsa otomatik olur. Vercel → Settings → Git |
| D4 | **`katalog/` git'te versiyonlansın mı?** | Siz — **karar bekliyor** | Kökteki taslak klasörü `.gitignore`'da değil; `git add -A` çalışırsa 49 MB depoya girer. Şimdilik commit'lerde dosya yolları açıkça yazılarak korunuyor. |

---

## Kapalı — tekrar açılmayacak

Tam liste ve gerekçeleri `CLAUDE.md` bölüm 8 "Kapanmış olanlar" başlığında.
Özet: görseller, logo, iletişim formu, e-katalog, blog, prerender, og etiketleri,
WebP, CLS, JSON-LD, sitemap, temiz URL, iletişim bilgileri, alan adı taşıması,
aramaya açılma.
