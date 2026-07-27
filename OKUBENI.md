# Polin Kimya — Web Sitesi

İçerik kaynağı: **polinkimya.com** — menü ağacı, ürün aileleri, sistemler, uygulamalar,
tarihçe, referans markalar, sertifikalar, blog başlıkları ve iletişim bilgileri birebir korundu.

**Seçilen tasarım:** bölünmüş slider hero düzeni · **Kehribar Çelik** paleti.

## Açmak

`index.html` dosyasına çift tıklayarak açılır. Doğru sonuç için yerel sunucu önerilir:

```bash
python -m http.server 5173
```

Sonra `http://localhost:5173/`

## Dosya yapısı

```
index.html            Site. Palet burada, <style> içindeki :root bloğunda.
assets/
  data.js             Sitenin TÜM metni ve görsel yolları — tek kaynak
  split.css           Düzenin tamamı (renkler token; sabit renk yok)
  split.js            Render + slider, sekmeler, karusel, sayaçlar, mobil menü
  img/                45 görsel (logo, sistem, uygulama, marka, blog)
_arsiv-varyantlar.zip Elenen 20 tasarım yönü + 20 palet denemesi (silinebilir)
```

## Sayfa bölümleri

1. **Üst bar** — telefonlar, e-posta, adres, sosyal ikonlar, ENGLISH
2. **Yapışkan header** — logo, mega menü, telefon, "Teklif Alın"
3. **Hero** — solda 6 ürün ailesini gezen slider, sağda 4'lü özellik paneli
4. **Ürünler & Sistemler** — 8'li kutucuk ızgarası
5. **Video** — 4 kart
6. **Sistemler** — 3 sekme; uygulama alanları + sistem ürünleri + galeri
7. **Kurumsal** — görsel + metin, ardından sayaçlı istatistik bandı
8. **Uygulamalar** — 14 başlık
9. **Markalarımız** — oklu karusel + sertifika rozetleri
10. **Blog** — 4 kart
11. **İletişim** — bilgiler + harita + form
12. **Footer** — kehribar üst çizgi, iletişim, kısayollar, sosyal, dil

## Metin değiştirme

Tüm metinler `assets/data.js` içinde. Orada değiştirmek yeterli — HTML'e dokunmaya gerek yok.

## Renk değiştirme

`index.html` içindeki `:root` bloğu. Tüm site bu token'lardan beslenir:

| Token | Ne |
|---|---|
| `--brand` | Ana kehribar `#D97706` — butonlar, ikonlar, vurgular |
| `--brand-d` | Koyu ton `#B45309` — hover, marka renkli metin |
| `--brand-l` | Açık ton `#FCD34D` — footer başlıkları, slider noktası |
| `--brand-xl` | Çok açık zemin `#FFFBEB` — çipler, etiketler |
| `--ink` / `--ink-2` / `--mut` / `--mut-2` | Metin kademeleri |
| `--line` / `--bg` / `--bg-2` / `--surface` | Çizgi ve yüzeyler |
| `--shade` | `28,25,23` — tüm koyu bindirmeler ve gölgeler |
| `--top-bg` / `--top-fg` | Üst bar |
| `--ftr-*` | Footer |

Koyu mod istenirse `<body class="dark">` yeterli: logo beyaza döner, marka renkli
metinler açık tona geçer, harita filtresi ters çevrilir.

## Yayına almadan önce yapılacaklar

Bu sürümde sayfa istemci tarafında `data.js`'ten render ediliyor. Canlıya çıkmadan:

1. **Statik HTML'e dönüştürme** — arama motorları için gerekli (veya WordPress şablonuna aktarım)
2. **Form bağlantısı** — iletişim formu şu an gönderim yapmıyor; backend/servis bağlanmalı
3. **Dil sayfaları** — EN / FR / AR / RU bağlantıları `#` durumunda
4. **Sosyal medya bağlantıları** — üst bar ve footer ikonları `#` durumunda, gerçek hesaplar girilmeli
5. **Video bölümü** — kartlar şu an görsel; YouTube gömme bağlanmalı
6. **Alt sayfalar** — ürün detay, blog yazıları, referanslar, sertifikalar sayfaları
7. **Görsel optimizasyonu** — WebP + `srcset`; `assets/img/` toplam ~8 MB
8. **KVKK / çerez** — aydınlatma metni ve çerez bildirimi
