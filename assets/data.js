/* =============================================================
   POLİN KİMYA — Paylaşılan İçerik Katmanı
   Tüm 20 tasarım varyantı bu tek kaynaktan beslenir.
   İçerik polinkimya.com'dan birebir korunmuştur.
   ============================================================= */

window.SITE = {
  brand: {
    name: "POLİN KİMYA",
    legal: "Polin Kimya Sanayi ve Ticaret A.Ş.",
    tagline: "1989'dan beri kimya teknolojisinde çözüm ortağınız",
    since: 1989,
    logoDark: "assets/img/logo-dark.png",
    logoWhite: "assets/img/logo-white.png",
    favicon: "assets/img/favicon.png"
  },

  contact: {
    phone1: "+90 (216) 593 33 53",
    phone2: "+90 (216) 593 38 49",
    mobile: "+90 (533) 440 64 37",
    whatsapp: "https://api.whatsapp.com/send?phone=+905334406437",
    email: "info@polinkimya.com",
    exportEmail: "export@polinkimya.com",
    address: "Aydınlı-Birlik OSB Mah. Batı Cad. No:26/2, 34953 Tuzla / İSTANBUL",
    addressShort: "Tuzla / İstanbul, Türkiye",
    catalog: "https://www.polinkimya.com/wp-content/uploads/2025/04/Polin-Kimya-Urun-ve-Sistem-Katalogu-2023.pdf"
  },

  langs: [
    { code: "TR", href: "#", active: true },
    { code: "EN", href: "#" },
    { code: "FR", href: "#" },
    { code: "AR", href: "#" },
    { code: "RU", href: "#" }
  ],

  nav: [
    {
      label: "Kurumsal", href: "#kurumsal", children: [
        { label: "Tarihçemiz", href: "#kurumsal" },
        { label: "Politikalarımız", href: "#kurumsal" },
        { label: "Ekibimiz", href: "#kurumsal" },
        { label: "İnsan Kaynakları", href: "#kurumsal" },
        { label: "Sertifikalar", href: "#sertifikalar" }
      ]
    },
    {
      label: "Ürünler", href: "#urunler", mega: true, children: [
        {
          label: "Yapıştırıcılar", href: "#urunler", children: [
            { label: "Parke Yapıştırıcıları", href: "#urunler" },
            { label: "PVC & Vinly Zemin Yapıştırıcısı", href: "#urunler" },
            { label: "Kauçuk ve Sentetik Çim Yapıştırıcıları", href: "#urunler" },
            { label: "Filtre Yapıştırıcıları", href: "#urunler" },
            { label: "Endüstriyel Yapıştırıcılar", href: "#urunler" }
          ]
        },
        {
          label: "Bağlayıcılar (Binder)", href: "#urunler", children: [
            { label: "Dökme Bağlayıcılar", href: "#urunler" },
            { label: "Press Bağlayıcılar", href: "#urunler" },
            { label: "Taş Bağlayıcıları", href: "#urunler" },
            { label: "EPDM Granüller", href: "#urunler" }
          ]
        },
        {
          label: "Zemin Kaplamaları & Boyalar", href: "#urunler", children: [
            { label: "Poliüretan Zemin Kaplamaları ve Boyaları", href: "#urunler" },
            { label: "Akrilik Zemin Kaplamaları ve Boyaları", href: "#urunler" },
            { label: "Epoksi Zemin Kaplamaları ve Boyaları", href: "#urunler" }
          ]
        },
        {
          label: "Astarlar & Macunlar", href: "#urunler", children: [
            { label: "Astarlar", href: "#urunler" },
            { label: "Macunlar", href: "#urunler" }
          ]
        },
        { label: "Su İzolasyon Ürünleri", href: "#urunler", children: [] },
        { label: "Elektrik İzolasyon Döküm Reçineleri", href: "#urunler", children: [] }
      ]
    },
    {
      label: "Sistemler", href: "#sistemler", children: [
        { label: "Spor Zemin Sistemleri", href: "#sistemler" },
        { label: "Endüstriyel Zemin Sistemleri", href: "#sistemler" },
        { label: "Su İzolasyon Sistemi", href: "#sistemler" }
      ]
    },
    { label: "Referanslarımız", href: "#referanslar" },
    { label: "Uygulamalar", href: "#uygulamalar" },
    { label: "Blog", href: "#blog" },
    { label: "İletişim", href: "#iletisim" }
  ],

  /* Ana sayfa hero'sundaki 6 ürün ailesi */
  categories: [
    { title: "YAPIŞTIRICILAR", en: "ADHESIVES", short: "Yapıştırıcılar", img: "assets/img/app-09.webp",
      desc: "Parke, PVC & vinil, kauçuk, sentetik çim, filtre ve endüstriyel yapıştırıcılar. 30-35 saniyede kürleşen spesifik formülasyonlar dahil." },
    { title: "BAĞLAYICILAR", en: "RUBBER BINDERS", short: "Bağlayıcılar (Binder)", img: "assets/img/sport-02.jpg",
      desc: "Dökme ve press bağlayıcılar, taş bağlayıcıları, aromatik SBR ve alifatik EPDM kauçuk bağlayıcıları ile EPDM granüller." },
    { title: "ZEMİN KAPLAMALARI & BOYALAR", en: "FLOOR COATINGS", short: "Zemin Kaplamaları & Boyalar", img: "assets/img/ind-03.png",
      desc: "Poliüretan, akrilik ve epoksi esaslı zemin kaplama ve boya sistemleri; geniş renk seçeneği ve yüksek mekanik dayanım." },
    { title: "SU İZOLASYON ÜRÜNLERİ", en: "WATERPROOFING", short: "Su İzolasyon Ürünleri", img: "assets/img/water-01.jpg",
      desc: "Likit membranlar, derz dolguları ve çatı izolasyon malzemeleri ile kalıcı, ek yeri olmayan su yalıtımı." },
    { title: "ASTARLAR & MACUNLAR", en: "PRIMERS & PUTTIES", short: "Astarlar & Macunlar", img: "assets/img/sys-water.jpg",
      desc: "Beton, metal ve emici yüzeyler için astarlar; dolgu ve tamir macunları. Zemin kaplamasının atlanamaz ilk adımı." },
    { title: "ELEKTRİK İZOLASYON DÖKÜM REÇİNELERİ", en: "ELECTRICAL CASTING RESINS", short: "Elektrik İzolasyon Reçineleri", img: "assets/img/ind-01.png",
      desc: "Elektrik sektörü için döküm reçineleri, UV dayanımlı poliüretan transformatör boyaları ve kalıp-dolgu malzemeleri." }
  ],

  /* Referans düzendeki 8'li ürün & sistem kutucukları */
  tiles: [
    { title: "PARKE YAPIŞTIRICILARI", img: "assets/img/app-09.webp", href: "#urunler" },
    { title: "KAUÇUK YAPIŞTIRICILARI", img: "assets/img/sport-04.jpg", href: "#urunler" },
    { title: "SUNİ ÇİM YAPIŞTIRICILARI", img: "assets/img/sport-06.jpg", href: "#urunler" },
    { title: "BAĞLAYICILAR", img: "assets/img/sport-02.jpg", href: "#urunler" },
    { title: "SU İZOLASYON", img: "assets/img/water-01.jpg", href: "#sistemler" },
    { title: "EPOKSİ DÖKÜM REÇİNELERİ", img: "assets/img/ind-01.png", href: "#urunler" },
    { title: "ENDÜSTRİYEL ZEMİN SİSTEMLERİ", img: "assets/img/ind-03.png", href: "#sistemler" },
    { title: "SPOR ZEMİN SİSTEMLERİ", img: "assets/img/sys-sport.jpg", href: "#sistemler" }
  ],

  /* Referans düzendeki üst-bar sosyal ikonları */
  social: [
    { name: "LinkedIn", key: "in", href: "#" },
    { name: "YouTube", key: "yt", href: "#" },
    { name: "Instagram", key: "ig", href: "#" },
    { name: "Facebook", key: "fb", href: "#" }
  ],

  /* Referans düzendeki video / saha kartları */
  videos: [
    { title: "Polin Kimya | POLİNFLEX Sandwich System", sub: "Spor Zemin Sistemleri", img: "assets/img/blog-01.webp" },
    { title: "Polin Kimya | Endüstriyel Epoksi Zemin", sub: "Endüstriyel Zemin Sistemleri", img: "assets/img/ind-03.png" },
    { title: "Polin Kimya | Likit Membran Uygulaması", sub: "Su İzolasyon Sistemi", img: "assets/img/water-01.jpg" },
    { title: "Polin Kimya | Parke Yapıştırıcı Uygulaması", sub: "Yapıştırıcılar", img: "assets/img/app-09.webp" }
  ],

  hero: {
    kicker: "1989'DAN BERİ • 55+ ÜLKEYE İHRACAT",
    title: "Kimya sektöründe\nileri teknoloji,\nkanıtlanmış kalite.",
    titlePlain: "Kimya sektöründe ileri teknoloji, kanıtlanmış kalite.",
    lead: "Poliüretan, epoksi, hidrokarbon, akrilik ve STP-hibrit üretim prosesleriyle; yapıştırıcıdan spor zeminine, su izolasyonundan elektrik reçinelerine 150'nin üzerinde ürünü tek noktadan sunuyoruz.",
    ctaPrimary: { label: "Sistemleri İnceleyin", href: "#sistemler" },
    ctaSecondary: { label: "E-Katalog (PDF)", href: "https://www.polinkimya.com/wp-content/uploads/2025/04/Polin-Kimya-Urun-ve-Sistem-Katalogu-2023.pdf" },
    image: "assets/img/sys-industrial.jpg"
  },

  about: {
    title: "Polin Kimya",
    lead: "POLİN KİMYA, kimya sektöründe ilgilendiği branşlarda ileri teknolojiyi kullanarak ve kalifiye personeli çalıştırarak ülke ekonomisine katkıda bulunurken, müşteri memnuniyetinden asla taviz vermeden standartlara uygun kalitedeki ürünleri sunmayı ve müşterilerin değişen beklentilerine cevap verebilen bir marka yaratmayı ilke olarak benimsemektedir.",
    paras: [
      "1989 yılında kurulan Polin Kimya Sanayi ve Ticaret A.Ş., bünyesindeki uzman ve tecrübeli kadrosu ile bugün Türkiye'de alanında önde gelen firmalardan biri olmuştur.",
      "Polin Kimya; poliüretan, epoksi, hidrokarbon, akrilik ve STP-hibrit üretim proseslerini uygulayarak TÜRKAK, TSE, UKAS akreditasyonu ile ISO 9001:2008 ve ISO 14001:2004 standartlarında üretim yapmaktadır.",
      "Polin Kimya; parke yapıştırıcıları, kauçuk yapıştırıcıları, aromatik SBR ve EPDM, alifatik EPDM kauçuk bağlayıcıları, epoksi ve poliüretan taş bağlayıcıları (UV Alifatik), sentetik çim yapıştırıcıları, 30-35 sn'de kürleşen spesifik yapıştırıcılar, endüstriyel zemin kaplamaları, spor zemin kaplamaları, epoksi-poliüretan zemin kaplama sistemleri, kalıp ve dolgu malzemeleri, elektrik izolasyon reçineleri, su izolasyon sistemleri, derz dolguları, poliüretan ve epoksi su bazlı boyalar üretmektedir.",
      "Kurulduğu yıldan beri ürün çeşitliliğini ve üretim kapasitesini artıran Polin Kimya, sektördeki yerini kaliteden ve müşteri memnuniyetinden taviz vermeden, tüketicilerin ihtiyaç ve beklentilerini de dikkate alarak üretim yapmasına borçludur. AR-GE biriminin gücüyle, patentli ürünü de dahil olmak üzere 150'nin üzerindeki ürünü müşteriye tek noktadan temin olanağı sunmaktadır.",
      "Bugün Polin Kimya 30 yılı aşkın tecrübe ve teknik bilgi birikimi ile müşteri memnuniyeti ilkesini ön planda tutarak 55'in üzerindeki ülkeye ihracat yapmakta, dünyanın önemli markaları da dahil olmak üzere birçok yerel ve küresel markaya özel üretimler gerçekleştirmektedir."
    ],
    image: "assets/img/banner.jpg"
  },

  stats: [
    { value: "1989", label: "Kuruluş yılı", suffix: "" },
    { value: "150", label: "Ürün çeşidi", suffix: "+" },
    { value: "55", label: "İhracat ülkesi", suffix: "+" },
    { value: "35", label: "Yıllık tecrübe", suffix: "+" }
  ],

  timeline: [
    { year: "1989", text: "Polin Kimya, Levent Coşkunsu tarafından kuruldu ve faaliyetlerine elektrik sektörü için reçineler, otomotiv sektörüne metal koruyucu ve macun yaparak başladı." },
    { year: "1991", text: "Beyaz eşya sektörüne özel yapıştırıcılar yaparak giriş yapıldı. İnşaat sektörü için çatı izolasyon malzemeleri üretimine başlandı." },
    { year: "1992", text: "İki komponentli parke yapıştırıcıları üretimine gelen istekler üzerine başlandı. Hijyenik zemin kaplama ürünleri ile ilgili faaliyetlere başlandı." },
    { year: "1993", text: "Polin Kimya, limited şirket oldu." },
    { year: "1994", text: "Şerifoğlu® parke yapıştırıcıları ve astarlarına marka tescili alındı." },
    { year: "1997", text: "Power-Pol® iki komponentli elastik parke yapıştırıcısına marka tescili alındı." },
    { year: "2002", text: "Otomotiv sektörü için çok hızlı kürleşen ürünlerin üretimine başlandı. Tixo-Pol® iki komponentli parke yapıştırıcısına marka tescili alındı." },
    { year: "2004", text: "UKAS (United Kingdom Accreditation Service) tarafından ISO 9001:2000 toplam kalite yönetim sistemi sertifikası verildi." },
    { year: "2005", text: "UV dayanımlı poliüretan transformatör boyası üretilmeye başlandı." }
  ],

  systems: [
    {
      id: "spor",
      title: "Spor Zemin Sistemleri",
      img: "assets/img/sys-sport.jpg",
      gallery: ["assets/img/sport-01.jpg", "assets/img/sport-03.jpg", "assets/img/sport-04.jpg", "assets/img/sport-06.jpg"],
      desc: "Poliüretan ve akrilik esaslı spor zemin sistemleridir. Açık veya kapalı alanlar için şartnameye, bütçeye ve alt yapıya göre değişkenlik gösteren sistemlerdir. Sistemlerde kullanılan ürünler likit olmasından dolayı kuruma sonrasında yekpare bir görüntü oluşturması sebebiyle sahaların bütünlüğünü korumaktadır.",
      areas: ["Tenis", "Basketbol", "Futbol", "Voleybol", "Hentbol", "Atletizm", "Atış poligonu"],
      products: ["POLİN AC AKRİLİK SİSTEMLERİ", "POLİNFLEX ECO", "POLİNFLEX PRO", "POLİNFLEX JT JOGGING TRACK", "POLİNFLEX C COMBINED", "POLİNFLEX SC SPRAY COATING System", "POLİNFLEX SW SANDWICH system", "POLİNFLEX FP FULL POUR system"]
    },
    {
      id: "endustriyel",
      title: "Endüstriyel Zemin Sistemleri",
      img: "assets/img/sys-industrial.jpg",
      gallery: ["assets/img/ind-01.png", "assets/img/ind-02.png", "assets/img/ind-03.png", "assets/img/ind-04.png"],
      desc: "Poliüretan ve epoksi esaslı ürünlerle şartnameye, bütçeye ve kullanım amacına göre değişkenlik gösteren sistemlerin birçok avantajı bulunmaktadır. Epoksi ve poliüretan zemin; yüzey düzgünlüğü, kolay temizlenebilmesi, yüksek mekanik ve kimyasal dayanımı, modern ve pürüzsüz görüntüsü ile çok çeşitli renk seçenekleri sağlamaktadır. Kullanılan ürünlerin likit olması ve kuruma sonrasında ek yeri olmadan zeminde bütünlük sağlaması avantajlarındandır.",
      areas: ["Fabrika zeminleri", "Depo ve antrepo zeminleri", "Laboratuvarlar ve soğuk hava depoları", "Kapalı otoparklar", "Uçak hangarları", "Araç servisleri ve oto yıkama istasyonları", "Restoran, kafe, bar ve gece kulüpleri", "Otel oda ve ortak kullanım alanları", "Mağazalar, ofisler ve fuar alanları", "Anaokulu ve kreşler"],
      products: ["POLIN EP HW", "POLIN EP MW", "POLİN EPEX TD TEXTURE DESIGN", "POLİN POL ART DECORATIVE", "POLİN POL SF SEMI FLEXIBLE"]
    },
    {
      id: "su",
      title: "Su İzolasyon Sistemi",
      img: "assets/img/sys-water.jpg",
      gallery: ["assets/img/water-01.jpg", "assets/img/water-02.jpg", "assets/img/teknik.jpg", "assets/img/app-12.webp"],
      desc: "Likit membran esaslı, ek yeri olmayan yekpare su izolasyon sistemleri. Çatı, teras, balkon, banyo ve temel perde uygulamalarında; doğru astar seçimi ve katman kalınlığı ile uzun ömürlü, kalıcı yalıtım sağlar.",
      areas: ["Çatı ve teras", "Balkon", "Banyo ve ıslak hacimler", "Temel ve perde beton", "Su deposu ve havuz", "Otopark döşemesi"],
      products: ["Likit Membran Sistemleri", "Derz Dolguları", "Su Bazlı Poliüretan Boyalar", "Beton Astarları"]
    }
  ],

  why: [
    { title: "Hizmette Mükemmellik", text: "Tüm süreçlerimizdeki verimliliği uluslararası düzeyde rekabet edebilecek seviyeye yükseltmek için çok çalışıyoruz.", icon: "star" },
    { title: "Yüksek Kalite Teknoloji", text: "Yenilikçi ve yaratıcı yaklaşımların cesaretlendirilmesi, teknolojik kalitenin arttırılması için sürekli çalışıyoruz.", icon: "chip" },
    { title: "Üretim Tesisi", text: "Ana hammaddeler hariç, kullanılan bütün malzemeleri firma bünyemizde kendimiz üretiyoruz.", icon: "factory" },
    { title: "Müşteri Odaklı Yaklaşım", text: "Beklentilerinizi en başından dikkate alıp; ön keşif, üretim süreci ve satış sonrası tüm ihtiyaçlarınıza çözüm üretiyoruz.", icon: "users" },
    { title: "Hızlı ve Kaliteli Teslimat", text: "Sahip olduğumuz profesyonel üretim ve montaj ekibi sayesinde ürünleriniz tam zamanında hazırlanıyor.", icon: "truck" },
    { title: "Müşteri Memnuniyeti", text: "Tamamladığımız, sürdürdüğümüz veya yeni alacağımız projelerde, müşteri memnuniyetini ilk sırada tutuyoruz.", icon: "shield" }
  ],

  applications: [
    { title: "POLİÜRETAN SPOR ZEMİNİ", img: "assets/img/sport-01.jpg" },
    { title: "ZEMİN (PARKE) UYGULAMASI", img: "assets/img/app-09.webp" },
    { title: "AKRİLİK SPOR ZEMİNLER", img: "assets/img/sport-03.jpg" },
    { title: "KAUÇUK UYGULAMASI", img: "assets/img/sport-04.jpg" },
    { title: "ATLETİZM PARKURU", img: "assets/img/blog-01.webp" },
    { title: "ÇİM YAPIŞTIRICI UYGULAMALARI", img: "assets/img/sport-06.jpg" },
    { title: "DEKORATİF TAŞ UYGULAMASI", img: "assets/img/app-01.webp" },
    { title: "MAVİ ELASTOMER SANDVİÇ (RACE EPDM)", img: "assets/img/sport-05.jpg" },
    { title: "SANDVİÇ KIRMIZI FAS (Morocco)", img: "assets/img/sport-07.jpg" },
    { title: "ELEKTRİK REÇİNELERİ", img: "assets/img/ind-01.png" },
    { title: "1002 EPDM UYGULAMASI", img: "assets/img/blog-02.webp" },
    { title: "SU GEÇİRMEZ KAPLAMA", img: "assets/img/water-01.jpg" },
    { title: "ENDÜSTRİYEL POLİÜRETAN VE EPOKSİ ZEMİNLER", img: "assets/img/ind-03.png" },
    { title: "3DG PANEL", img: "assets/img/app-03.webp" }
  ],

  brands: [
    { name: "Şerifoğlu", img: "assets/img/brand-polin.png" },
    { name: "Power-Pol", img: "assets/img/brand-powerpol.png" },
    { name: "Tixo-Pol", img: "assets/img/brand-tixopol.png" },
    { name: "Rub-X", img: "assets/img/brand-rubx.png" },
    { name: "Silex", img: "assets/img/brand-silex.png" },
    { name: "Plexi-pal", img: "assets/img/brand-plexipal.png" },
    { name: "Polinat", img: "assets/img/brand-polinat.png" },
    { name: "PlnHK", img: "assets/img/brand-plnhk.png" }
  ],

  certs: ["TÜRKAK", "TSE", "UKAS", "ISO 9001:2008", "ISO 14001:2004", "IAAF Sertifikalı Sistemler"],

  news: [
    { tag: "GÜNCEL HABERLER", title: "Big 5 Global", img: "assets/img/banner.jpg" }
  ],

  blog: [
    { title: "IAAF Sertifikalı Sandwich System Koşu Pisti Hangi Projeler için Uygundur?", img: "assets/img/blog-01.webp" },
    { title: "Çocuk Parkları için EPDM Granül Zemin Kaplama Nedir?", img: "assets/img/blog-02.webp" },
    { title: "EPDM Nedir ve Nerelerde Kullanılır?", img: "assets/img/sport-05.jpg" },
    { title: "Spor Zeminlerinde Akrilik Zemin Kaplama Nedir?", img: "assets/img/sport-03.jpg" },
    { title: "Hastanelerde Zemin Kaplama: Hijyen Standartlarını Karşılayan Sistemler", img: "assets/img/ind-02.png" },
    { title: "Banyo ve Balkon Su Yalıtımı: Doğru Malzeme ile Kalıcı Çözüm", img: "assets/img/water-02.jpg" },
    { title: "Beton Astarı: Zemin Kaplamasında Neden Atlanamaz Bir Adım?", img: "assets/img/sys-water.jpg" },
    { title: "Likit Membran Uygulamasında Dikkat Edilmesi Gereken Hususlar", img: "assets/img/water-01.jpg" },
    { title: "Epoksi Zemin Kaplama Fiyatları: m² Maliyetini Etkileyen Faktörler", img: "assets/img/ind-04.png" },
    { title: "Su Yalıtım Malzemesi Seçerken Nelere Dikkat Edilmeli?", img: "assets/img/teknik.jpg" }
  ],

  footerLinks: {
    "Ürünler": ["Yapıştırıcılar", "Bağlayıcılar (Binder)", "EPDM Granüller", "Zemin Kaplamaları & Boyalar", "Astarlar & Macunlar", "Su İzolasyon Ürünleri", "Elektrik İzolasyon Döküm Reçineleri"],
    "Sistemler": ["Spor Zemin Sistemleri", "Endüstriyel Zemin Sistemleri", "Su İzolasyon Sistemi"],
    "Kurumsal": ["Tarihçemiz", "Politikalarımız", "Ekibimiz", "İnsan Kaynakları", "Sertifikalar", "Referanslarımız"]
  },

  copyright: "Polinkimya.com © 2025",

  form: {
    title: "Bizimle İletişime Geçin",
    text: "Polin Kimya hizmet, ürün ve servisleri hakkında her türlü istek, soru ve sorunlarınızı formumuzu doldurarak bize iletebilirsiniz.",
    fields: [
      { name: "ad", label: "Ad Soyad", type: "text" },
      { name: "firma", label: "Firma", type: "text" },
      { name: "email", label: "E-posta", type: "email" },
      { name: "tel", label: "Telefon", type: "tel" },
      { name: "konu", label: "Konu", type: "select", options: ["Ürün bilgisi", "Sistem / proje teklifi", "Bayilik & iş ortaklığı", "İhracat", "Teknik destek", "Diğer"] },
      { name: "mesaj", label: "Mesajınız", type: "textarea" }
    ],
    submit: "Mesajı Gönder"
  }
};
