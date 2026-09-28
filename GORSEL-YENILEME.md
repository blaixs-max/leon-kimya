# Görsel yenileme — tekrarların kaldırılması (09.2026, v3 dalı)

**Durum:** 32 görsel Higgsfield'da üretildi, **indirilmeyi bekliyor.**
Çalışma alanı Higgsfield dosya sunucusuna (`d8j0ntlcm91z4.cloudfront.net`)
erişemiyor (403). Dosyalar kullanıcının bilgisayarından (İndirilenler) ya da
sohbete ek olarak alınacak. Entegrasyon bitince bu dosya "yapıldı" notuyla
kısaltılır.

**Kural:** sitede ve her katalogda bir fotoğraf **yalnız bir yerde** kullanılır.
Kart ile kendi detay paneli aynı görseli paylaşabilir. Galeriye yalnız o
varlığa özgü görsel girer; yoksa galeri boş kalır. Görsel olarak neredeyse
aynı iki kare (ör. `vid-membrane-v2` / `water-main-v2`) de tekrar sayılır.
**Ürün görselleri (`prod-*`, `epdm-*`, `productImgs`, katalog ürün kartları)
değişmez** — yalnız başka yerlerdeki kopya kullanımları kaldırılır.

Higgsfield projesi: `Leon Kimya — Site ve Katalog Görselleri`
(`22683b71-aeb5-4573-9f80-eaf2f619c6f3`). Model `nano_banana_pro` (2k).
İndirilen dosya adı `hf_20260928_<saat>_<iş kimliği>.png` biçiminde; eşleme
iş kimliğiyle yapılır.

| N | İş kimliği | Konu | Site | Katalog |
|---|---|---|---|---|
| 01 | 85d5fb69 | Kehribar PU self-levelling uygulaması (ekteki başarısız görselin yenisi) | Hero: kaplama | Kapak (tek görsel) |
| 02 | 25732c69 | EPDM dökme oyun alanı (ekteki başarısız görselin yenisi) | Hero: bağlayıcı | Dökme Bağlayıcılar bandı |
| 03 | 724fd638 | Kalite laboratuvarı, çekme testi | — | Kurumsal şerit |
| 04 | bcd8af53 | Mamul deposu (kova, varil, IBC) | — | Kurumsal şerit |
| 05 | a1b11108 | Yükleme rampası, akşam | — | Neden Leon sayfası |
| 06 | c2a30c2b | Konteyner limanı (4:3) | — | Bölüm 04 açılışı |
| 07 | 1f5fdb58 | Konteyner içi yükleme | — | Konteyner ölçüleri sayfası |
| 08 | bd5bdc91 | Malzeme natürmortu (4:3) | — | Bölüm 01 açılışı |
| 09 | c9176305 | Spor zemini katman kesiti numunesi (4:3) | Spor sistemi galerisi | Bölüm 02 açılışı |
| 10 | b96e67b3 | Spor kompleksi, havadan (4:3) | Spor sistemi galerisi | Bölüm 03 açılışı |
| 11 | 7c51c519 | SBR granül + bağlayıcı karıştırma | `dokme` paneli | Bağlayıcılar açılışı |
| 12 | ea66d086 | Parlak epoksi üretim holü | Endüstriyel sistem (sekme + `endSis`) | Zemin Kaplamaları açılışı |
| 13 | 4191ba34 | Filtre kapağına PU dolum | `filtre` paneli | Filtre bandı |
| 14 | f027961b | EPDM yüzeyi mala ile düzleme | `uygEpdm` | EPDM uygulaması |
| 15 | 6169d775 | Kauçuk karo presi | `press` paneli | Press bandı |
| 16 | 4390ce8e | EPDM granül makro | `epdm` paneli | EPDM bandı |
| 17 | 66fab42f | Astar rulosu yakın plan | Hero: astar | Astarlar bandı |
| 18 | 2413a5da | Çatlağa tamir macunu | `macun` paneli | Macunlar bandı |
| 19 | 3a2c326e | Spor salonu kauçuk zemin montajı | `uygKaucuk` | Kauçuk uygulaması |
| 20 | 9e37d067 | Havuz kenarı taş halı | `tas` paneli | Dekoratif Taş uygulaması |
| 21 | 88ef900b | Pistte çivili ayakkabı (ilk deneme `4dbf66b7` elendi) | `uygElastomer` | Elastomer Sandviç uygulaması |
| 22 | 9c950dda | Boş stadyum, start blokları | `uygAtletizm` | Atletizm uygulaması |
| 23 | 028a241a | Kapalı padel kortu | `uygPadel` | Padel uygulaması |
| 24 | b60fd6c6 | Depoda forklift, arkadan (ilk deneme `0e820b81` elendi) | `uygEndustri` | Endüstriyel sistem bandı |
| 25 | fe317299 | Kimya üretim tesisi, reaktörler | — | Arka kapak |
| 26 | 756f2d9e | Gıda tesisi, PU çimento zemin | `puZemin` paneli | PU bandı |
| 27 | 4839f3ef | Epoksi self-levelling dökümü | `epZemin` paneli | Epoksi bandı |
| 29 | 4dfb3dda | Pist virajı, yukarıdan | `uygSandvic` | Sandviç uygulaması |
| 30 | 508b73ca | Akrilik tenis kortu yenileme | `akZemin` paneli | — |
| 31 | 6402b47d | Terasta likit membran | `suUrun` paneli | — |
| 32 | 3befd722 | Geniş döşemeye astar | `astar` paneli | — |
| 33 | ebd22d70 | Otopark katı, PU kaplama | `uygEndustri` galerisi | Endüstriyel uygulaması |

## Site — mevcut görsellerin yeni yerleri

- Hero: `tile-parquet-v2` ve `cat-water-v2` yerinde kalır.
- Spor sistemi: `sys-sport2-v2` (yalnız burada). Su sistemi: `water-main-v2`,
  galeri `water-app1`, `tile-water-v2`. Endüstriyel galeri: `ind-apply`,
  `tile-industrial-v2`.
- Uygulamalar: `uygSporPu` `tile-sport-v2` · `uygParke` `app-parquet-v2` ·
  `uygAkrilik` `sport-tennis2` · `uygKaucuk` galeri `sport-gym` ·
  `uygCim` `kaucuk-kapak` + `app-turf-v2` · `uygTas` `stone-sample` +
  `app-stone-v2` · `uygPadel` galeri `app-padel`, `app-padel-02`, `sys-padel` ·
  `uygEpdm` galeri `app-playground-v2`, `tile-binder-v2`, `tile-rubber-v2` ·
  `uygSu` `water-app3` · `uygEndustri` galeri `ind-machines` ·
  `uygDokum` `app-resin-v2` + `resin-table`, `resin-wave`, `tile-resin-v2`.
- Paneller: `parke` `cat-parquet-v2` · `pvc` `pvc-apply` + `pvc-hall` ·
  `kaucuk` `rubber-tiles` + `tile-turf-v2` · `epZemin` galeri `ind-texture` ·
  `astar` galeri `cat-primer-v2`.
- Kullanımdan çıkanlar: `cat-coating-v2`, `cat-binder-v2` (ekteki başarısız
  iki görsel), `app-rubber-v2`, `ind-hall`, `ind-roller`, `ind-service`,
  `sport-05`, `sport-tennis`, `vid-membrane-v2`, `vid-parquet-v2`,
  `vid-track2-v2`, `water-app2` — ya tekrar ya da başka bir karenin neredeyse
  aynısı. Galerilerdeki ürün görseli kopyaları (`prod-kaucuk-05`,
  `epdm-insitu`) çıkarılır; ürün yuvalarında kalırlar.

## Katalog — mevcut görsellerin yerleri

İçindekiler `b80ab6c5b632` · Kurumsal bant `cf0041b7b776` + şerit
`2ca2ee1f38be` · Yapıştırıcılar açılışı `fa6cf4c4a588` · Astarlar & Macunlar
açılışı `f08f38f410ea` · Su İzolasyon açılışı `276bdfbd9a27` · Bantlar: Parke
`6140cb…`, PVC `7b2319…`, Kauçuk `36e594…`, Taş `e69ce003efd3`, Akrilik
`03e1bf…`, Su İzolasyon Ürünleri `db9f0c046d13` · Sistemler: Spor `f7957c254b4d`,
Su `e9ec37…` · Uygulamalar: PU Spor `247924…`, Parke `9c80fafd0b40`, Akrilik
`0bf913225e9d`, Çim `2f32e326ff4a`, Su Geçirmez `47fc880b9248`, Epoksi Döküm
`443fa1e42df7`. Aile ve sistem galerileri kaldırılır.
