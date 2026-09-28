# Görsel yenileme — tekrarların kaldırılması (09.2026, v3 dalı)

**Durum: tamamlandı ve yayında** (28.09.2026; `tasarim-v3-profesyonel` aynı gün `main`'e merge edildi).

## Kural

- Ürün dışı bir fotoğraf **sitede tek bir varlıkta, katalogda tek bir yerde** kullanılır.
  Site ve katalog ayrı mecralar; aynı fotoğraf ikisinde birer kez olabilir.
- Kart ile kendi paneli (uygulama kartı + `#detay` paneli, sistem sekmesi + paneli)
  aynı görseli paylaşır. Galeriye yalnız o varlığa özgü görsel girer; yoksa galeri boş.
- Neredeyse aynı iki kare de tekrar sayılır (`ind-roller`/`ind-texture` bayt bayt aynı,
  `vid-membrane-v2`/`water-main-v2`, katalogda `db9f0c…`/`276bdf…`, `b9f388…`/`f7957c…`).
- **Ürün kartları:** her ürünün kendi ambalaj görseli var (sitede `productImgs`, katalogda
  `.pic`). Yalnız aynı kodlu ürün iki ailede listelenince aynı görsel kalır (LK-PU-402).
  Ürün kartındaki bir fotoğraf başka yerde kullanılmaz.

Denetim (katalog kısmı için önce `build.py`):

```bash
python katalog-uretici/tools/gorsel_denetimi.py     # "SORUN YOK" görmelisiniz
```

## Yeni görseller

Higgsfield, `nano_banana_pro` (2k), proje `Leon Kimya — Site ve Katalog Görselleri`.
Orijinal PNG'ler kullanıcının bilgisayarında: `İndirilenler\LeonKimya\higgsfield-gorseller-2026-09-28\`.
Sitede `assets/img/v3-<ad>.webp` (1600 px), katalogda `katalog-uretici/img/v3-<ad>.jpg`
(1200 px; kapak 1800, tam sayfa açılışlar ve arka kapak 1500).

| N | Dosya (`v3-…`) | Site | Katalog |
|---|---|---|---|
| 01 | pu-uygulama | Hero: zemin kaplamaları | Kapak (tek görsel) |
| 02 | epdm-oyun-alani | Hero: bağlayıcılar | Dökme Bağlayıcılar bandı |
| 03 | kalite-lab | — | Kurumsal şerit |
| 04 | mamul-depo | — | Kurumsal şerit |
| 05 | yukleme-rampasi | — | Neden Leon Kimya |
| 06 | konteyner-limani | — | Bölüm 04 açılışı |
| 07 | konteyner-yukleme | — | Konteyner ölçüleri |
| 08 | malzeme-kompozisyon | — | Bölüm 01 açılışı |
| 09 | spor-zemin-kesit | Spor sistemi galerisi | Bölüm 02 açılışı |
| 10 | spor-kompleksi | Spor sistemi galerisi | Bölüm 03 açılışı |
| 11 | sbr-karistirma | `dokme` paneli | Bağlayıcılar açılışı |
| 12 | epoksi-uretim-holu | Endüstriyel sistem | Zemin Kaplamaları açılışı |
| 13 | filtre-dolum | `filtre` paneli | Filtre bandı |
| 14 | epdm-mala | `uygEpdm` | EPDM uygulaması |
| 15 | kaucuk-pres | `press` paneli | Press bandı |
| 16 | epdm-granul | `epdm` paneli | EPDM bandı |
| 17 | astar-rulo | Hero: astarlar | Astarlar bandı |
| 18 | macun-catlak | `macun` paneli | Macunlar bandı |
| 19 | kaucuk-spor-salonu | `uygKaucuk` | Kauçuk uygulaması |
| 20 | tas-hali-havuz | `tas` paneli | Dekoratif Taş uygulaması |
| 21 | pist-ayakkabi | `uygElastomer` | Elastomer Sandviç uygulaması |
| 22 | stadyum-start | `uygAtletizm` | Atletizm uygulaması |
| 23 | padel-kort | `uygPadel` | Padel uygulaması |
| 24 | depo-forklift | `uygEndustri` | Endüstriyel sistem bandı |
| 25 | kimya-tesisi | — | Arka kapak |
| 26 | pu-gida-tesisi | `puZemin` paneli | PU bandı |
| 27 | epoksi-dokum | `epZemin` paneli | Epoksi bandı |
| 29 | pist-viraj | `uygSandvic` | Sandviç uygulaması |
| 30 | akrilik-kort | `akZemin` paneli | — |
| 31 | likit-membran | `suUrun` paneli | Su İzolasyon Ürünleri bandı |
| 32 | astar-doseme | `astar` paneli | — |
| 33 | otopark | `uygEndustri` galerisi | Endüstriyel uygulaması |

Kontrolde elenen iki ilk deneme (N21 eski tip bot, N24 bulanık yüz) yeniden üretildi.
İş kimlikleri Higgsfield projesinde; dosya adları `hf_20260928_<saat>_<iş>.png`.

## Kullanımdan çıkanlar

- **Site:** `cat-coating-v2`, `cat-binder-v2` (kullanıcının "başarısız" dediği iki görsel),
  `app-rubber-v2`, `ind-hall`, `ind-roller`, `ind-service`'in hero kullanımı, `sport-05`,
  `sport-tennis`, `vid-membrane-v2`, `vid-parquet-v2`, `vid-track2-v2`, `water-app2`.
  Dosyalar `assets/img/`'de duruyor (v2'den kalan `tiles`/`videos` verisi hâlâ anıyor).
- **Katalog:** 13 dosya `katalog-uretici/img/`'den silindi (`78034a…` ve `b367417…` başarısız
  iki görsel; `4fd185…` düşük çözünürlüklü liman; `df1b57…` 1024×392 panorama;
  `37b52a…`, `0abf70…` düşük çözünürlük; `b9f388…`, `db9f0c…` neredeyse aynı kareler;
  `f898b5…` konu dışı ev; `835906…`, `bbf078…`, `d6a620…`, `e09c92…` galeri artıkları).
- Katalogdan aile ve sistem galerileri kaldırıldı — hepsi başka sayfaların tekrarıydı.
  Kapak dört parçalı mozaik yerine tek görsel.

## Varyant ambalajları (aynı gün, ikinci adım)

Kullanıcı kuralı: **kap, kapak ve renk orijinal ürün görseliyle aynı kalır; yalnız etiket
değişir** (ürün adı + etiket rengi). Her görsel, ailesinin orijinal ambalajı referans
verilerek düzenlendi (`nano_banana_pro`, 2k → 800×500). Dosyalar: `assets/img/prod-lk-<kod>.webp`
ve `katalog-uretici/img/prod-lk-<kod>.jpg`. Orijinaller kullanıcının bilgisayarında:
`İndirilenler\LeonKimya\higgsfield-ambalaj-2026-09-28\`.

| Kod | Ürün | Referans ambalaj | Etiket rengi |
|---|---|---|---|
| LK-PP-202 | SBR Dökme Bağlayıcı | mavi çelik varil (`prod-binder-01-v3`) | grafit |
| LK-PP-211 | Standart Press Bağlayıcı | mavi çelik varil (`prod-binder-01-v3`) | turuncu |
| LK-PP-212 | Hızlı Çevrim Press Bağlayıcı | mavi çelik varil (`prod-binder-02-v3`) | kırmızı |
| LK-PP-213 | Ekonomik Press Bağlayıcı | mavi çelik varil (`prod-binder-01-v3`) | yeşil |
| LK-PP-214 | Yüksek Mukavemet Press Bağlayıcı | mavi çelik varil (`prod-binder-02-v3`) | mor |
| LK-PU-223 | 1K Alifatik Taş Bağlayıcısı | mavi çelik varil (`prod-binder-02-v3`) | kum beji |
| LK-PU-133 | Tiksotropik / Conta Tipi | metal kova + teneke (`prod-filtre-02-v2`) | camgöbeği |
| LK-AC-313 | Akrilik Cushion (İnce) | mavi plastik varil (`prod-ak-02-v2`) | camgöbeği |
| LK-AC-318 | Akrilik Konsantre Boya | mavi plastik varil (`prod-ak-06-v2`) | yeşil |
| LK-EP-322 | Epoksi Zemin Boyası | metal kova + gri teneke (`prod-ep-01-v2`) | kırmızı |
| LK-PU-401 | Solventsiz PU Astar | metal kova + teneke (`prod-astar-01-v2`) | turuncu |
| LK-PU-403 | 1K PU Şeffaf Astar | metal teneke (`prod-ak-07`) | açık mavi |
| LK-EP-404 | 2K Epoksi Nem Bariyeri | metal kova + teneke (`prod-astar-01-v2`) | arduvaz gri |
| LK-EP-406 | 2K Epoksi Astar (Ekonomik) | metal kova + teneke (`prod-astar-01-v2`) | açık yeşil |
| LK-GR-701/702 | EPDM Granül | beyaz 25 kg dokuma çuval (yeni) | çok renkli |
| LK-GR-711/712 | SBR Granül | beyaz 25 kg dokuma çuval (yeni) | grafit |
| LK-WP-601 | Likit Membran | beyaz plastik kova (eski fotoğraftaki kova) | mavi |
| LK-PU-501 | PU Sealer | metal kova + teneke (`prod-pu-01-v2`) | sarı |
| LK-PU-502 | Elastik PU Macun | metal kova + teneke (`prod-pu-01-v2`) | yeşil |
| LK-PU-503 | Düşük Viskoziteli PU Macun | metal kova + teneke (`prod-pu-01-v2`) | mor |
| LK-PU-504 | Yüksek Viskoziteli PU Macun | metal kova + teneke (`prod-pu-01-v2`) | koyu kırmızı |

Orijinal görseli ilk varyant korudu: 201 (`binder-01`), 203 (`binder-02`), 132 (`filtre-02`),
312 (`ak-02`), 317 (`ak-06`), 405 (`astar-01`, etiketi zaten "EPOKSİ ASTAR"). Aile kartında
Su İzolasyon için çatı fotoğrafı yerine yeni kova. Ürün kartından çıkan uygulama
fotoğrafları (`rubber-tiles` press'ten, `app-rubber-v2`, `app-playground-v2`, `epdm-insitu`,
`tile-industrial-v2`, `cat-primer-v2`, `ind-apply`, `prod-su-01-v3`) dosya olarak duruyor.
