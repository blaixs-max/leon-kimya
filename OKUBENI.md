# Leon Kimya — Web Sitesi

Dört dilde tek sayfa kurumsal site: **TR / EN / FR / AR** (Arapça sağdan sola).

| | |
|---|---|
| **Site** | https://leon-kimya.vercel.app |
| **Diller** | `/` (TR) · `/en` · `/fr` · `/ar` |
| **Depo** | https://github.com/blaixs-max/leon-kimya (private) |

---

## ⚠️ YAYINA ALMADAN ÖNCE — ZORUNLU

Bu şablon başlangıçta bir **referans siteden** (polinkimya.com) alınan içerikle kuruldu.
Üçüncü tarafa ait olan her şey kaldırıldı, ancak **görseller hâlâ o siteden geliyor.**

### Kaldırılanlar ✅
- WhatsApp, telefon ve e-posta bağlantıları — hiçbir yerde tıklanabilir bağlantı yok
- polinkimya.com'a giden tüm dış bağlantılar
- Logo, favicon ve 8 tescilli marka görseli (Şerifoğlu, Power-Pol, Tixo-Pol vb.)
- TÜRKAK / TSE / UKAS / ISO / IAAF akreditasyon iddiaları
- Kuruluş yılı, "55 ülkeye ihracat", "150+ ürün" gibi şirkete özel iddialar
- Ürün kodları (POLİNFLEX, POLIN EP HW vb.) → yerine genel sistem özellikleri
- E-katalog bağlantısı

### Hâlâ yapılması gerekenler ❌
1. **34 görselin tamamı referans siteden alınmıştır ve GEÇİCİDİR.**
   Leon Kimya'nın kendi saha fotoğraflarıyla değiştirilmeden siteyi kamuya açmayın.
   Konum: `assets/img/`
2. **İletişim bilgileri boş.** `assets/i18n.js` → `SITE_BASE.contact` doldurun,
   sonra `contactReady: true` yapın. Bu bayrak `false` olduğu sürece telefon/e-posta
   bağlantı olarak değil, "eklenecek" yer tutucusu olarak görünür.
3. **Logo yok.** Şu an metin logo (LEON KİMYA) kullanılıyor.
   Gerçek logo hazır olunca `SITE_BASE.brand.logoDark` / `logoWhite` yollarını girin.
4. **Sosyal medya hesapları boş** (`SITE_BASE.social`). Boş olduğu sürece hiç görünmez.
5. **Form gönderim yapmıyor** — bir backend/servise bağlanmalı.
6. **`assets/i18n.js` içinde TODO işaretleri** — hepsi doldurulmalı, özellikle
   "Hakkımızda" bölümündeki kuruluş hikâyesi.
7. **`robots.txt` ve sayfalardaki `noindex`** — gerçek alan adına geçince kaldırın.

---

## Dosya yapısı

```
index.html   en.html   fr.html   ar.html    ← 4 dil sayfası (üretilir, elle düzenlemeyin)
assets/
  i18n.js            TÜM içerik: SITE_BASE (yapı) + STRINGS (4 dil metni)
  split.css          Tasarımın tamamı — renkler token, RTL desteği dahil
  split.js           Render + slider, sekmeler, mobil menü, sayaçlar
  build-pages.py     4 dil sayfasını üretir
  img/               34 GEÇİCİ görsel — değiştirilmeli
vercel.json          cache + güvenlik başlıkları, /en /fr /ar temiz adresler
robots.txt           şu an Disallow: / (staging)
```

## Nasıl düzenlenir

**Metin değiştirmek** → `assets/i18n.js` içindeki `STRINGS.tr` / `.en` / `.fr` / `.ar`.
Dört dil aynı yapıyı paylaşır; bir dilde alan eklerseniz diğer üçüne de ekleyin.

**Renk değiştirmek** → her sayfanın `<head>` içindeki `:root` bloğu.
Şablonu `assets/build-pages.py` içinde değiştirip yeniden üretin:

```bash
python assets/build-pages.py
```

**Görsel veya bağlantı değiştirmek** → `assets/i18n.js` → `SITE_BASE`.
Alt sayfalar hazırlandığında `SITE_BASE.links` içindeki `#bolum` değerlerini
gerçek sayfa adresleriyle değiştirmek yeterli.

## Yerel çalıştırma

```bash
python -m http.server 5173
```

## Yayına alma

```bash
git add -A
git commit -m "aciklama"
git push
vercel deploy --prod
```

Otomatik deploy için Vercel'in GitHub App'i depoya kurulmalı:
https://vercel.com/blaixs-4009s-projects/leon-kimya/settings/git
