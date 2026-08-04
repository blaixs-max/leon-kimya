/* =============================================================
   LEON KİMYA — ÇOK DİLLİ İÇERİK KATMANI
   -------------------------------------------------------------
   ÖNEMLİ / GÜVENLİK NOTU
   Bu şablon başlangıçta bir referans siteden alınan içerikle
   kurulmuştu. Üçüncü tarafa ait olan HER ŞEY kaldırılmıştır:
   telefon, WhatsApp, e-posta, adres, logo, tescilli marka adları,
   sertifika/akreditasyon iddiaları, ürün kodları ve dış bağlantılar.
   Aşağıdaki alanlar PLACEHOLDER'dır — Leon Kimya'nın gerçek
   bilgileriyle doldurulmadan siteyi kamuya açmayın.
   Doldurulacak yerler "TODO" ile işaretlenmiştir.
   ============================================================= */

window.SITE_BASE = {

  /* contactReady false iken telefon/e-posta/WhatsApp bağlantı OLARAK
     render EDİLMEZ; yalnızca "eklenecek" metni gösterilir.
     Gerçek bilgiler girildikten sonra true yapın. */
  contactReady: false,

  contact: {
    phone1: "",            // TODO: "+90 (___) ___ __ __"
    phone2: "",            // TODO
    mobile: "",            // TODO
    tel1: "",              // TODO: "+90..." (boşluksuz)
    tel2: "",              // TODO
    whatsapp: "",          // TODO: "https://api.whatsapp.com/send?phone=+90..."
    email: "",             // TODO: "info@leonkimya.com"
    exportEmail: "",       // TODO: "export@leonkimya.com"
    mapLink: "",           // TODO: Google Maps bağlantısı
    mapEmbed: ""           // TODO: Google Maps embed bağlantısı
  },

  /* TODO: Leon Kimya'nın gerçek hesapları girilene kadar boş kalsın.
     Boş olduğu sürece sosyal medya satırı hiç görünmez. */
  social: [],

  /* Alt sayfalar henüz üretilmedi; tüm bağlantılar sayfa içi bölümlere gider.
     Alt sayfalar hazırlandığında yalnızca buradaki değerleri değiştirin. */
  links: {
    parke:"#urunler", pvc:"#urunler", kaucuk:"#urunler", filtre:"#urunler", endYap:"#urunler",
    dokme:"#urunler", press:"#urunler", tas:"#urunler", epdm:"#urunler",
    puZemin:"#urunler", akZemin:"#urunler", epZemin:"#urunler",
    astar:"#urunler", macun:"#urunler", suUrun:"#urunler", elektrik:"#urunler",
    sporSis:"#sistemler", endSis:"#sistemler", suSis:"#sistemler",
    tarihce:"#kurumsal", politika:"#kurumsal", ekip:"#kurumsal", ik:"#kurumsal",
    sertifika:"#kurumsal", referans:"#referanslar", uygulama:"#uygulamalar",
    blogAll:"#blog", video:"#uygulamalar",
    catalog:""            // TODO: kendi e-katalog PDF'inizin adresi
  },

  langs: [
    { code:"TR", href:"/",   lang:"tr", dir:"ltr" },
    { code:"EN", href:"/en", lang:"en", dir:"ltr" },
    { code:"FR", href:"/fr", lang:"fr", dir:"ltr" },
    { code:"AR", href:"/ar", lang:"ar", dir:"rtl" }
  ],

  /* TODO: Leon Kimya logosu eklenene kadar metin logo (SVG) kullanılır.
     Logo dosyası hazır olduğunda: logoDark/logoWhite yollarını girin. */
  brand: {
    name: "LEON KİMYA",
    logoDark: "",
    logoWhite: ""
  },

  nav: [
    { k:"corporate", href:"#kurumsal", children:[
      { k:"history", L:"tarihce" }, { k:"policies", L:"politika" },
      { k:"team", L:"ekip" }, { k:"hr", L:"ik" }, { k:"certificates", L:"sertifika" } ] },
    { k:"products", href:"#urunler", mega:true, children:[
      { k:"adhesives", L:"parke", children:[
        { k:"parquetAdh", L:"parke" }, { k:"pvcAdh", L:"pvc" },
        { k:"rubberTurfAdh", L:"kaucuk" }, { k:"filterAdh", L:"filtre" }, { k:"indAdh", L:"endYap" } ] },
      { k:"binders", L:"dokme", children:[
        { k:"pourBinder", L:"dokme" }, { k:"pressBinder", L:"press" },
        { k:"stoneBinder", L:"tas" }, { k:"epdmGranule", L:"epdm" } ] },
      { k:"coatings", L:"puZemin", children:[
        { k:"puCoat", L:"puZemin" }, { k:"acCoat", L:"akZemin" }, { k:"epCoat", L:"epZemin" } ] },
      { k:"primersPutties", L:"astar", children:[
        { k:"primers", L:"astar" }, { k:"putties", L:"macun" } ] },
      { k:"waterproofProd", L:"suUrun", children:[] },
      { k:"electricalResin", L:"elektrik", children:[] } ] },
    { k:"systems", href:"#sistemler", children:[
      { k:"sportsSys", L:"sporSis" }, { k:"indSys", L:"endSis" }, { k:"waterSys", L:"suSis" } ] },
    { k:"exportNav", href:"#ihracat", children:[
      { k:"containers", href:"#konteyner" }, { k:"incoterms", href:"#incoterms" } ] },
    { k:"references", href:"#referanslar" },
    { k:"applications", href:"#uygulamalar" },
    { k:"blog", href:"#blog" },
    { k:"contact", href:"#iletisim" }
  ],

  /* TODO: Tüm görseller GEÇİCİ yer tutucudur ve referans siteden gelmektedir.
     Leon Kimya'nın kendi saha fotoğraflarıyla değiştirilmeden yayına almayın. */
  categories: [
    { img:"assets/img/app-09.webp",  L:"parke" },
    { img:"assets/img/sport-02.jpg", L:"dokme" },
    { img:"assets/img/ind-03.png",   L:"puZemin" },
    { img:"assets/img/water-01.jpg", L:"suUrun" },
    { img:"assets/img/sys-water.jpg",L:"astar" },
    { img:"assets/img/ind-01.png",   L:"elektrik" }
  ],

  tiles: [
    { img:"assets/img/app-09.webp",  L:"parke" },
    { img:"assets/img/sport-04.jpg", L:"kaucuk" },
    { img:"assets/img/sport-06.jpg", L:"kaucuk" },
    { img:"assets/img/sport-02.jpg", L:"dokme" },
    { img:"assets/img/water-01.jpg", L:"suSis" },
    { img:"assets/img/ind-01.png",   L:"elektrik" },
    { img:"assets/img/ind-03.png",   L:"endSis" },
    { img:"assets/img/sys-sport.jpg",L:"sporSis" }
  ],

  videos: [
    { img:"assets/img/blog-01.webp", L:"uygulama" },
    { img:"assets/img/ind-03.png",   L:"endSis" },
    { img:"assets/img/water-01.jpg", L:"suSis" },
    { img:"assets/img/app-09.webp",  L:"parke" }
  ],

  featLinks: ["ekip", "tarihce", "referans", "sertifika"],

  heroImage: "assets/img/sys-industrial.jpg",
  aboutImage: "assets/img/banner.jpg",

  /* TODO: Leon Kimya'nın gerçek rakamları girilene kadar boş.
     Boş olduğu sürece istatistik bandı görünmez. */
  stats: [],

  systems: [
    { id:"spor", L:"sporSis", img:"assets/img/sys-sport.jpg",
      gallery:["assets/img/sport-01.jpg","assets/img/sport-03.jpg","assets/img/sport-04.jpg","assets/img/sport-06.jpg"] },
    { id:"endustriyel", L:"endSis", img:"assets/img/sys-industrial.jpg",
      gallery:["assets/img/ind-01.png","assets/img/ind-02.png","assets/img/ind-03.png","assets/img/ind-04.png"] },
    { id:"su", L:"suSis", img:"assets/img/sys-water.jpg",
      gallery:["assets/img/water-01.jpg","assets/img/water-02.jpg","assets/img/teknik.jpg","assets/img/app-12.webp"] }
  ],

  why: [ {icon:"star"},{icon:"chip"},{icon:"factory"},{icon:"users"},{icon:"truck"},{icon:"shield"} ],

  applications: [
    { img:"assets/img/sport-01.jpg", L:"sporSis" },
    { img:"assets/img/app-09.webp",  L:"parke" },
    { img:"assets/img/sport-03.jpg", L:"akZemin" },
    { img:"assets/img/sport-04.jpg", L:"kaucuk" },
    { img:"assets/img/blog-01.webp", L:"sporSis" },
    { img:"assets/img/sport-06.jpg", L:"kaucuk" },
    { img:"assets/img/app-01.webp",  L:"tas" },
    { img:"assets/img/sport-05.jpg", L:"epdm" },
    { img:"assets/img/sport-07.jpg", L:"sporSis" },
    { img:"assets/img/ind-01.png",   L:"elektrik" },
    { img:"assets/img/blog-02.webp", L:"epdm" },
    { img:"assets/img/water-01.jpg", L:"suUrun" },
    { img:"assets/img/ind-03.png",   L:"endSis" },
    { img:"assets/img/app-03.webp",  L:"uygulama" }
  ],

  /* TODO: Tescilli marka bölümü kaldırıldı (üçüncü tarafa aitti).
     Leon Kimya'nın kendi markaları eklendiğinde doldurun.
     Boş olduğu sürece "Markalarımız" karuseli görünmez. */
  brands: [],

  /* TODO: Blog yazıları henüz yok; bağlantısız başlık olarak gösterilir. */
  blog: [
    { img:"assets/img/blog-01.webp", href:"" },
    { img:"assets/img/blog-02.webp", href:"" },
    { img:"assets/img/sport-05.jpg", href:"" },
    { img:"assets/img/sport-03.jpg", href:"" }
  ],

  footer: [
    { k:"fProducts", items:["parquetAdh","binders","epdmGranule","coatings","primersPutties","waterproofProd","electricalResin"],
      L:["parke","dokme","epdm","puZemin","astar","suUrun","elektrik"] },
    { k:"fSystems", items:["sportsSys","indSys","waterSys","history","team","hr","certificates"],
      L:["sporSis","endSis","suSis","tarihce","ekip","ik","sertifika"] }
  ],

  /* ---- İHRACAT: konteyner ölçüleri ----
     ISO standart kuru yük konteynerleri. Değerler GÖSTERGE niteliğindedir;
     üretici ve taşıyıcıya göre birkaç santim / birkaç yüz kilo değişebilir.
     L/W/H = iç ölçü (m), dW/dH = kapı açıklığı (m), vol = hacim (m³),
     tare = boş ağırlık (kg), pay = azami yük (kg),
     ibc = 1000 L IBC adedi, drum = 200 L varil adedi (paletli, 2 sıra) */
  containers: [
    { k:"dv20", L:5.90,  W:2.35, H:2.39, dW:2.34, dH:2.28, vol:33.2, tare:2250, pay:28200, ibc:10, drum:80  },
    { k:"dv40", L:12.03, W:2.35, H:2.39, dW:2.34, dH:2.28, vol:67.7, tare:3750, pay:26730, ibc:20, drum:160 },
    { k:"hc40", L:12.03, W:2.35, H:2.70, dW:2.34, dH:2.58, vol:76.4, tare:3900, pay:26580, ibc:20, drum:160 },
    { k:"hc45", L:13.56, W:2.35, H:2.70, dW:2.34, dH:2.58, vol:86.0, tare:4800, pay:27700, ibc:25, drum:180 }
  ],

  /* ---- İHRACAT: Incoterms 2020 ----
     mode: any = tüm taşıma modları, sea = deniz / iç su yolu
     freight (navlun) ve imp (ithalat gümrüğü): S = satıcı, B = alıcı
     ins (sigorta): S = satıcı yükümlü, "-" = zorunlu değil */
  incoterms: [
    { code:"EXW", mode:"any", freight:"B", ins:"-", imp:"B" },
    { code:"FCA", mode:"any", freight:"B", ins:"-", imp:"B" },
    { code:"FAS", mode:"sea", freight:"B", ins:"-", imp:"B" },
    { code:"FOB", mode:"sea", freight:"B", ins:"-", imp:"B" },
    { code:"CFR", mode:"sea", freight:"S", ins:"-", imp:"B" },
    { code:"CIF", mode:"sea", freight:"S", ins:"S", imp:"B" },
    { code:"CPT", mode:"any", freight:"S", ins:"-", imp:"B" },
    { code:"CIP", mode:"any", freight:"S", ins:"S", imp:"B" },
    { code:"DAP", mode:"any", freight:"S", ins:"-", imp:"B" },
    { code:"DPU", mode:"any", freight:"S", ins:"-", imp:"B" },
    { code:"DDP", mode:"any", freight:"S", ins:"-", imp:"S" }
  ],

  formFields: [
    { name:"ad",    k:"fName",    type:"text" },
    { name:"firma", k:"fCompany", type:"text" },
    { name:"email", k:"fEmail",   type:"email" },
    { name:"tel",   k:"fPhone",   type:"tel" },
    { name:"konu",  k:"fSubject", type:"select" },
    { name:"mesaj", k:"fMessage", type:"textarea" }
  ]
};

/* =============================================================
   METİNLER — tr / en / fr / ar
   Şirkete özel iddialar (kuruluş yılı, ihracat ülkesi sayısı,
   akreditasyonlar) bilinçli olarak çıkarılmıştır.
   ============================================================= */
window.STRINGS = {

/* ---------------------------------------------------------- TÜRKÇE */
tr: {
  meta:{
    title:"Leon Kimya | Yapıştırıcı, Bağlayıcı, Zemin Kaplama ve Su İzolasyon Sistemleri",
    desc:"Poliüretan, epoksi ve akrilik esaslı yapıştırıcı, bağlayıcı, zemin kaplama ve su izolasyon çözümleri."
  },
  tagline:"Kimya teknolojisinde çözüm ortağınız",
  address:"",                       // TODO: Leon Kimya adresi
  addressShort:"",                  // TODO
  addressTodo:"Adres bilgisi eklenecek",
  phoneTodo:"Telefon numarası eklenecek",
  emailTodo:"E-posta adresi eklenecek",
  copyright:"Leon Kimya © 2026",
  partner:"",

  nav:{
    corporate:"Kurumsal", history:"Hakkımızda", policies:"Politikalarımız", team:"Ekibimiz",
    hr:"İnsan Kaynakları", certificates:"Sertifikalar",
    products:"Ürünler", adhesives:"Yapıştırıcılar", parquetAdh:"Parke Yapıştırıcıları",
    pvcAdh:"PVC & Vinil Zemin Yapıştırıcısı", rubberTurfAdh:"Kauçuk ve Sentetik Çim Yapıştırıcıları",
    filterAdh:"Filtre Yapıştırıcıları", indAdh:"Endüstriyel Yapıştırıcılar",
    binders:"Bağlayıcılar (Binder)", pourBinder:"Dökme Bağlayıcılar", pressBinder:"Press Bağlayıcılar",
    stoneBinder:"Taş Bağlayıcıları", epdmGranule:"EPDM Granüller",
    coatings:"Zemin Kaplamaları & Boyalar", puCoat:"Poliüretan Zemin Kaplamaları",
    acCoat:"Akrilik Zemin Kaplamaları", epCoat:"Epoksi Zemin Kaplamaları",
    primersPutties:"Astarlar & Macunlar", primers:"Astarlar", putties:"Macunlar",
    waterproofProd:"Su İzolasyon Ürünleri", electricalResin:"Elektrik İzolasyon Döküm Reçineleri",
    systems:"Sistemler", sportsSys:"Spor Zemin Sistemleri", indSys:"Endüstriyel Zemin Sistemleri",
    waterSys:"Su İzolasyon Sistemi",
    exportNav:"İhracat", containers:"Konteyner Ölçüleri", incoterms:"Incoterms / Teslim Şekilleri",
    references:"Referanslar", applications:"Uygulamalar", blog:"Blog", contact:"İletişim",
    fProducts:"Ürünler", fSystems:"Sistemler & Kurumsal"
  },

  ui:{
    home:"Anasayfa", quote:"Teklif Alın", catalog:"E-Katalog", catalogPdf:"E-Katalog (PDF)",
    detail:"Detaylı Bilgi", productFamily:"ÜRÜN AİLESİ", viewSystems:"Sistemleri İnceleyin",
    prev:"Önceki", next:"Sonraki", menu:"Menü", closeMenu:"Menüyü kapat", openSub:"Alt menüyü aç",
    toTop:"Sayfa başına dön", skip:"İçeriğe geç",
    secProducts:"Ürünler & Sistemler",
    secProductsSub:"Yapıştırıcıdan bağlayıcıya, zemin kaplamasından su izolasyonuna; altı ana ürün ailesi ve üç sistem başlığı.",
    secVideo:"Uygulamalar", secVideoSub:"Sistemlerimizin sahadaki uygulamaları.",
    secSystems:"Sistemler",
    secSystemsSub:"Şartnameye, bütçeye ve alt yapıya göre kurgulanan sistemler.",
    secApps:"Uygulama Alanları",
    secAppsSub:"Poliüretan spor zemininden dekoratif taşa, atletizm parkurundan endüstriyel epoksiye.",
    applicationAreas:"Uygulama Alanları", systemProducts:"Sistem Özellikleri",
    systemDetails:"Sistem detayları", projectQuote:"Proje için teklif alın",
    allApplications:"Tüm uygulamalar", refProjects:"Referans projelerimiz",
    corporateKicker:"KURUMSAL", contactKicker:"İLETİŞİM",
    fullHistory:"Hakkımızda",
    blogKicker:"BLOG", blogTitle:"Blog Yazıları", more:"Daha Fazlası",
    readPost:"Yakında", tagBlog:"BLOG",
    contactInfo:"İletişim Bilgileri", labelAddress:"Adres", labelPhone:"Telefon",
    labelEmail:"E-posta", labelExport:"Dış Ticaret",
    labelFactory:"Fabrika", labelGeneral:"Genel",
    mapTitle:"Leon Kimya konum", sinceProduction:"",
    allRights:"Tüm hakları saklıdır.",
    mapTodo:"Konum bilgisi eklendiğinde harita burada görünecek."
  },

  hero:{
    kicker:"YAPIŞTIRICI • BAĞLAYICI • ZEMİN • SU İZOLASYONU",
    title:"Kimya sektöründe\nileri teknoloji,\nkanıtlanmış kalite.",
    lead:"Poliüretan, epoksi ve akrilik esaslı üretim prosesleriyle; yapıştırıcıdan spor zeminine, su izolasyonundan elektrik reçinelerine geniş bir ürün yelpazesini tek noktadan sunuyoruz."
  },

  categories:[
    {title:"ADHESIVES", sub:"YAPIŞTIRICILAR", desc:"Parke, PVC & vinil, kauçuk, sentetik çim, filtre ve endüstriyel yapıştırıcılar."},
    {title:"RUBBER BINDERS", sub:"BAĞLAYICILAR", desc:"Dökme ve press bağlayıcılar, taş bağlayıcıları, SBR ve EPDM kauçuk bağlayıcıları ile EPDM granüller."},
    {title:"FLOOR COATINGS", sub:"ZEMİN KAPLAMALARI & BOYALAR", desc:"Poliüretan, akrilik ve epoksi esaslı zemin kaplama ve boya sistemleri; geniş renk seçeneği ve yüksek mekanik dayanım."},
    {title:"WATERPROOFING", sub:"SU İZOLASYON ÜRÜNLERİ", desc:"Likit membranlar, derz dolguları ve çatı izolasyon malzemeleri ile kalıcı, ek yeri olmayan su yalıtımı."},
    {title:"PRIMERS & PUTTIES", sub:"ASTARLAR & MACUNLAR", desc:"Beton, metal ve emici yüzeyler için astarlar; dolgu ve tamir macunları."},
    {title:"ELECTRICAL RESINS", sub:"ELEKTRİK İZOLASYON REÇİNELERİ", desc:"Elektrik sektörü için döküm reçineleri, UV dayanımlı poliüretan transformatör boyaları ve kalıp-dolgu malzemeleri."}
  ],

  tiles:["PARKE YAPIŞTIRICILARI","KAUÇUK YAPIŞTIRICILARI","SUNİ ÇİM YAPIŞTIRICILARI","BAĞLAYICILAR",
         "SU İZOLASYON","EPOKSİ DÖKÜM REÇİNELERİ","ENDÜSTRİYEL ZEMİN SİSTEMLERİ","SPOR ZEMİN SİSTEMLERİ"],

  videos:[
    {title:"Atletizm parkuru uygulaması", sub:"Spor Zemin Sistemleri"},
    {title:"Endüstriyel epoksi zemin", sub:"Endüstriyel Zemin Sistemleri"},
    {title:"Likit membran uygulaması", sub:"Su İzolasyon Sistemi"},
    {title:"Parke yapıştırıcı uygulaması", sub:"Yapıştırıcılar"}
  ],

  feat:[
    {t:"UZMAN VE TECRÜBELİ EKİP", d:"Alanında uzman kadromuzla üretim, AR-GE ve uygulama süreçlerinin tamamında destek sağlıyoruz."},
    {t:"ÜRETİM", d:"Ürünlerimizi kendi kontrolümüzdeki üretim süreçlerinde hazırlıyor, geniş bir ürün yelpazesini tek noktadan sunuyoruz."},
    {t:"PROJE DESTEĞİ", d:"Ön keşiften ürün seçimine, uygulama detayından şartnameye kadar proje boyunca teknik destek veriyoruz."},
    {t:"KALİTELİ ÜRÜN & HİZMET", d:"Yüksek teknolojiyle birlikte kaliteli hammaddeler kullanarak nihai ürün kalitesini koruyoruz."}
  ],

  about:{
    title:"Leon Kimya",
    lead:"Leon Kimya, kimya sektöründe ilgilendiği branşlarda ileri teknolojiyi kullanarak ve kalifiye personel çalıştırarak, müşteri memnuniyetinden taviz vermeden standartlara uygun kalitedeki ürünleri sunmayı ve müşterilerin değişen beklentilerine cevap verebilen bir marka yaratmayı ilke olarak benimsemektedir.",
    paras:[
      "Poliüretan, epoksi ve akrilik esaslı üretim prosesleriyle; yapıştırıcılar, kauçuk bağlayıcılar, endüstriyel ve spor zemin kaplamaları, elektrik izolasyon reçineleri, su izolasyon sistemleri ile derz dolguları alanlarında çözüm üretiyoruz.",
      "Ürün geliştirme sürecimizde sahadan gelen geri bildirimi esas alıyor; şartnameye, bütçeye ve alt yapıya göre değişen sistem kurguları hazırlıyoruz.",
      "TODO: Bu bölüme Leon Kimya'nın kuruluş hikâyesi, üretim kapasitesi ve hedef pazarları yazılacak."
    ]
  },

  systems:[
    { title:"Spor Zemin Sistemleri",
      desc:"Poliüretan ve akrilik esaslı spor zemin sistemleridir. Açık veya kapalı alanlar için şartnameye, bütçeye ve alt yapıya göre değişkenlik gösterir. Kullanılan ürünler likit olduğundan kuruma sonrasında yekpare bir yüzey oluşturarak sahanın bütünlüğünü korur.",
      areas:["Tenis","Basketbol","Futbol","Voleybol","Hentbol","Atletizm","Atış poligonu"],
      props:["Yekpare, ek yeri olmayan yüzey","Şoku emen esnek katman","UV dayanımlı üst kaplama","Geniş renk seçeneği","Açık ve kapalı alan uygulaması"] },
    { title:"Endüstriyel Zemin Sistemleri",
      desc:"Poliüretan ve epoksi esaslı ürünlerle, kullanım amacına göre değişkenlik gösteren sistemlerdir. Yüzey düzgünlüğü, kolay temizlenebilme, yüksek mekanik ve kimyasal dayanım ile modern ve pürüzsüz bir görüntü sağlar.",
      areas:["Fabrika zeminleri","Depo ve antrepo","Laboratuvar ve soğuk hava deposu","Kapalı otopark","Uçak hangarı","Araç servisi ve oto yıkama","Restoran, kafe ve bar","Otel oda ve ortak alanları","Mağaza, ofis ve fuar alanı","Anaokulu ve kreş"],
      props:["Yüksek mekanik dayanım","Kimyasal dayanım","Hijyenik, kolay temizlenen yüzey","Antibakteriyel seçenek","Kaymaz yüzey alternatifi"] },
    { title:"Su İzolasyon Sistemi",
      desc:"Likit membran esaslı, ek yeri olmayan yekpare su izolasyon sistemleri. Çatı, teras, balkon, banyo ve temel perde uygulamalarında; doğru astar seçimi ve katman kalınlığı ile uzun ömürlü yalıtım sağlar.",
      areas:["Çatı ve teras","Balkon","Banyo ve ıslak hacim","Temel ve perde beton","Su deposu ve havuz","Otopark döşemesi"],
      props:["Ek yeri olmayan yekpare kaplama","Yüksek elastikiyet","UV dayanımlı alifatik üst kat","Detay ve derz çözümleri","Üzerine kaplama yapılabilir"] }
  ],

  why:[
    {title:"Hizmette Mükemmellik", text:"Tüm süreçlerimizdeki verimliliği rekabet edebilecek seviyeye yükseltmek için çalışıyoruz."},
    {title:"Yüksek Kalite Teknoloji", text:"Yenilikçi ve yaratıcı yaklaşımları cesaretlendirerek teknolojik kaliteyi artırıyoruz."},
    {title:"Üretim Kontrolü", text:"Üretim süreçlerimizi kendi kontrolümüzde yürütüyor, parti bazında kalite takibi yapıyoruz."},
    {title:"Müşteri Odaklı Yaklaşım", text:"Beklentilerinizi en başından dikkate alıp ön keşif, üretim ve satış sonrası ihtiyaçlarınıza çözüm üretiyoruz."},
    {title:"Hızlı ve Kaliteli Teslimat", text:"Profesyonel üretim ve sevkiyat planlamamız sayesinde ürünleriniz zamanında hazırlanıyor."},
    {title:"Müşteri Memnuniyeti", text:"Tamamladığımız, sürdürdüğümüz veya yeni alacağımız projelerde müşteri memnuniyetini ilk sırada tutuyoruz."}
  ],

  applications:["POLİÜRETAN SPOR ZEMİNİ","ZEMİN (PARKE) UYGULAMASI","AKRİLİK SPOR ZEMİNLER","KAUÇUK UYGULAMASI",
    "ATLETİZM PARKURU","ÇİM YAPIŞTIRICI UYGULAMALARI","DEKORATİF TAŞ UYGULAMASI","ELASTOMER SANDVİÇ SİSTEM",
    "SANDVİÇ SPOR ZEMİNİ","ELEKTRİK REÇİNELERİ","EPDM GRANÜL UYGULAMASI","SU GEÇİRMEZ KAPLAMA",
    "ENDÜSTRİYEL POLİÜRETAN VE EPOKSİ ZEMİNLER","DEKORATİF PANEL"],

  blog:["Poliüretan spor zemini nedir, hangi projelere uygundur?",
        "Çocuk parkları için EPDM granül zemin kaplama",
        "EPDM nedir ve nerelerde kullanılır?",
        "Spor zeminlerinde akrilik zemin kaplama"],

  exp:{
    kicker:"İHRACAT", title:"İhracat Bilgileri",
    sub:"Yükleme planlaması ve teslim şekli seçimi için ihtiyacınız olan referans bilgiler.",
    cTitle:"Konteyner Ölçüleri",
    cSub:"Standart ISO kuru yük konteynerlerinin iç ölçüleri ve yükleme kapasiteleri.",
    cNote:"Değerler gösterge niteliğindedir; konteyner üreticisine ve taşıyıcıya göre birkaç santimetre ve birkaç yüz kilogram değişebilir. Kesin ölçü ve azami yük için sevkiyat öncesi taşıyıcınızdan teyit alın.",
    cCols:{ type:"Konteyner", inner:"İç ölçü (U × G × Y)", door:"Kapı açıklığı (G × Y)",
            vol:"Hacim", tare:"Boş ağırlık", pay:"Azami yük", load:"Yükleme kapasitesi" },
    cNames:{ dv20:"20' DV — Standart", dv40:"40' DV — Standart", hc40:"40' HC — Yüksek", hc45:"45' HC — Yüksek" },
    loadIbc:"IBC (1000 L)", loadDrum:"varil (200 L)",
    iTitle:"Incoterms 2020 — Teslim Şekilleri",
    iSub:"Satıcı ile alıcı arasında masrafın ve riskin nerede el değiştirdiğini belirleyen uluslararası kurallar.",
    iNote:"Incoterms®, Milletlerarası Ticaret Odası'nın (ICC) tescilli markasıdır. Tablo özet niteliğindedir; sözleşmede kural adının yanına mutlaka teslim yerini de yazın (örnek: \"FOB İstanbul, Incoterms 2020\").",
    iCols:{ code:"Kod", name:"Açıklama", mode:"Taşıma modu", freight:"Navlun", ins:"Sigorta", risk:"Riskin devri" },
    modeAny:"Tüm modlar", modeSea:"Deniz / iç su yolu",
    seller:"Satıcı", buyer:"Alıcı", none:"Zorunlu değil",
    terms:{
      EXW:{ n:"Ex Works — İşyerinde Teslim", risk:"Satıcının tesisinde, mal alıcının emrine hazır edildiğinde" },
      FCA:{ n:"Free Carrier — Taşıyıcıya Masrafsız", risk:"Belirlenen yerde taşıyıcıya teslim edildiğinde" },
      FAS:{ n:"Free Alongside Ship — Gemi Doğrultusunda Masrafsız", risk:"Yükleme limanında geminin doğrultusuna konulduğunda" },
      FOB:{ n:"Free On Board — Gemide Masrafsız", risk:"Mal, yükleme limanında gemiye yüklendiğinde" },
      CFR:{ n:"Cost and Freight — Masraflar ve Navlun", risk:"Mal, yükleme limanında gemiye yüklendiğinde" },
      CIF:{ n:"Cost, Insurance and Freight — Masraflar, Sigorta ve Navlun", risk:"Mal, yükleme limanında gemiye yüklendiğinde", ins:"Satıcı — asgari teminat (ICC C)" },
      CPT:{ n:"Carriage Paid To — Taşıma Ödenmiş Olarak", risk:"Mal, ilk taşıyıcıya teslim edildiğinde" },
      CIP:{ n:"Carriage and Insurance Paid To — Taşıma ve Sigorta Ödenmiş Olarak", risk:"Mal, ilk taşıyıcıya teslim edildiğinde", ins:"Satıcı — geniş teminat (ICC A)" },
      DAP:{ n:"Delivered At Place — Belirlenen Yerde Teslim", risk:"Varış yerinde, araç üstünde boşaltılmadan" },
      DPU:{ n:"Delivered at Place Unloaded — Boşaltılmış Olarak Teslim", risk:"Varış yerinde boşaltma tamamlandığında" },
      DDP:{ n:"Delivered Duty Paid — Gümrük Resmi Ödenmiş Teslim", risk:"Varış yerinde, araç üstünde boşaltılmadan" }
    }
  },

  form:{
    title:"Bizimle İletişime Geçin",
    text:"Ürün ve hizmetlerimiz hakkında her türlü istek, soru ve talebinizi formu doldurarak bize iletebilirsiniz.",
    fName:"Ad Soyad", fCompany:"Firma", fEmail:"E-posta", fPhone:"Telefon",
    fSubject:"Konu", fMessage:"Mesajınız",
    subjects:["Ürün bilgisi","Sistem / proje teklifi","Bayilik & iş ortaklığı","İhracat","Teknik destek","Diğer"],
    kvkk:"Kişisel verilerimin işlenmesine ilişkin aydınlatma metnini okudum, onaylıyorum.",
    submit:"Mesajı Gönder",
    notWired:"Form henüz bir gönderim servisine bağlı değildir."
  }
},

/* ---------------------------------------------------------- ENGLISH */
en: {
  meta:{
    title:"Leon Kimya | Adhesives, Binders, Floor Coatings and Waterproofing Systems",
    desc:"Polyurethane, epoxy and acrylic based adhesives, binders, floor coatings and waterproofing solutions."
  },
  tagline:"Your partner in chemical technology",
  address:"", addressShort:"",
  addressTodo:"Address to be added",
  phoneTodo:"Phone number to be added",
  emailTodo:"E-mail address to be added",
  copyright:"Leon Kimya © 2026",
  partner:"",

  nav:{
    corporate:"Company", history:"About Us", policies:"Our Policies", team:"Our Team",
    hr:"Human Resources", certificates:"Certificates",
    products:"Products", adhesives:"Adhesives", parquetAdh:"Parquet Adhesives",
    pvcAdh:"PVC & Vinyl Flooring Adhesive", rubberTurfAdh:"Rubber & Synthetic Turf Adhesives",
    filterAdh:"Filter Adhesives", indAdh:"Industrial Adhesives",
    binders:"Binders", pourBinder:"Pour Binders", pressBinder:"Press Binders",
    stoneBinder:"Stone Binders", epdmGranule:"EPDM Granules",
    coatings:"Floor Coatings & Paints", puCoat:"Polyurethane Floor Coatings",
    acCoat:"Acrylic Floor Coatings", epCoat:"Epoxy Floor Coatings",
    primersPutties:"Primers & Putties", primers:"Primers", putties:"Putties",
    waterproofProd:"Waterproofing Products", electricalResin:"Electrical Insulation Casting Resins",
    systems:"Systems", sportsSys:"Sports Flooring Systems", indSys:"Industrial Flooring Systems",
    waterSys:"Waterproofing System",
    exportNav:"Export", containers:"Container Dimensions", incoterms:"Incoterms / Delivery Terms",
    references:"References", applications:"Applications", blog:"Blog", contact:"Contact",
    fProducts:"Products", fSystems:"Systems & Company"
  },

  ui:{
    home:"Home", quote:"Request a Quote", catalog:"E-Catalogue", catalogPdf:"E-Catalogue (PDF)",
    detail:"Learn More", productFamily:"PRODUCT FAMILY", viewSystems:"Explore Our Systems",
    prev:"Previous", next:"Next", menu:"Menu", closeMenu:"Close menu", openSub:"Open submenu",
    toTop:"Back to top", skip:"Skip to content",
    secProducts:"Products & Systems",
    secProductsSub:"From adhesives to binders, from floor coatings to waterproofing: six product families and three system categories.",
    secVideo:"Applications", secVideoSub:"Our systems applied on site.",
    secSystems:"Systems",
    secSystemsSub:"Systems configured to the specification, budget and substrate.",
    secApps:"Application Areas",
    secAppsSub:"From polyurethane sports flooring to decorative stone, from athletics tracks to industrial epoxy.",
    applicationAreas:"Application Areas", systemProducts:"System Features",
    systemDetails:"System details", projectQuote:"Request a project quote",
    allApplications:"All applications", refProjects:"Our reference projects",
    corporateKicker:"COMPANY", contactKicker:"CONTACT",
    fullHistory:"About us",
    blogKicker:"BLOG", blogTitle:"Blog Posts", more:"See More",
    readPost:"Coming soon", tagBlog:"BLOG",
    contactInfo:"Contact Details", labelAddress:"Address", labelPhone:"Phone",
    labelEmail:"E-mail", labelExport:"Export",
    labelFactory:"Factory", labelGeneral:"General",
    mapTitle:"Leon Kimya location", sinceProduction:"",
    allRights:"All rights reserved.",
    mapTodo:"The map will appear here once the location is added."
  },

  hero:{
    kicker:"ADHESIVES • BINDERS • FLOORING • WATERPROOFING",
    title:"Advanced technology,\nproven quality\nin chemistry.",
    lead:"Through polyurethane, epoxy and acrylic based production processes we supply a broad product range from a single source — from adhesives to sports flooring, from waterproofing to electrical resins."
  },

  categories:[
    {title:"ADHESIVES", sub:"Parquet, PVC, rubber and synthetic turf", desc:"Adhesives for parquet, PVC & vinyl, rubber, synthetic turf, filters and industry."},
    {title:"RUBBER BINDERS", sub:"Pour, press and stone binders", desc:"Pour and press binders, stone binders, SBR and EPDM rubber binders, together with EPDM granules."},
    {title:"FLOOR COATINGS", sub:"Polyurethane, acrylic and epoxy", desc:"Polyurethane, acrylic and epoxy based floor coating and paint systems; a wide colour range with high mechanical resistance."},
    {title:"WATERPROOFING", sub:"Liquid membranes and sealants", desc:"Durable, seamless waterproofing with liquid membranes, joint sealants and roof insulation materials."},
    {title:"PRIMERS & PUTTIES", sub:"Surface preparation and filling", desc:"Primers for concrete, metal and absorbent surfaces; filling and repair putties."},
    {title:"ELECTRICAL RESINS", sub:"Casting resins and transformer paints", desc:"Casting resins for the electrical industry, UV-resistant polyurethane transformer paints, moulding and filling compounds."}
  ],

  tiles:["PARQUET ADHESIVES","RUBBER ADHESIVES","SYNTHETIC TURF ADHESIVES","BINDERS",
         "WATERPROOFING","EPOXY CASTING RESINS","INDUSTRIAL FLOORING SYSTEMS","SPORTS FLOORING SYSTEMS"],

  videos:[
    {title:"Athletics track application", sub:"Sports Flooring Systems"},
    {title:"Industrial epoxy flooring", sub:"Industrial Flooring Systems"},
    {title:"Liquid membrane application", sub:"Waterproofing System"},
    {title:"Parquet adhesive application", sub:"Adhesives"}
  ],

  feat:[
    {t:"EXPERIENCED EXPERT TEAM", d:"Our specialist staff supports every stage of production, R&D and application."},
    {t:"PRODUCTION", d:"We prepare our products under our own controlled processes and offer a broad range from one source."},
    {t:"PROJECT SUPPORT", d:"From initial survey and product selection to application details and specifications, we support you throughout the project."},
    {t:"QUALITY PRODUCTS & SERVICE", d:"We combine advanced technology with quality raw materials to protect the final product quality."}
  ],

  about:{
    title:"Leon Kimya",
    lead:"Leon Kimya applies advanced technology and employs qualified people across every branch of chemistry it works in. It has made it a principle to deliver products of standard-compliant quality without compromising on customer satisfaction, and to build a brand that responds to changing customer expectations.",
    paras:[
      "With polyurethane, epoxy and acrylic based production processes, we deliver solutions in adhesives, rubber binders, industrial and sports floor coatings, electrical insulation resins, waterproofing systems and joint sealants.",
      "Our product development is driven by feedback from the field; we build system configurations that vary with the specification, the budget and the substrate.",
      "TODO: Add Leon Kimya's founding story, production capacity and target markets here."
    ]
  },

  systems:[
    { title:"Sports Flooring Systems",
      desc:"Polyurethane and acrylic based sports flooring systems. For indoor or outdoor areas, they vary according to the specification, the budget and the substrate. Because the products used are liquid, they form a monolithic surface once cured, preserving the integrity of the court.",
      areas:["Tennis","Basketball","Football","Volleyball","Handball","Athletics","Shooting range"],
      props:["Seamless, monolithic surface","Shock-absorbing elastic layer","UV-resistant top coat","Wide colour range","Indoor and outdoor use"] },
    { title:"Industrial Flooring Systems",
      desc:"Systems based on polyurethane and epoxy products, varying with the intended use. They offer surface evenness, easy cleaning, high mechanical and chemical resistance and a modern, seamless appearance.",
      areas:["Factory floors","Warehouses and bonded stores","Laboratories and cold storage","Indoor car parks","Aircraft hangars","Vehicle service and car wash","Restaurants, cafés and bars","Hotel rooms and common areas","Shops, offices and exhibition halls","Nurseries and kindergartens"],
      props:["High mechanical resistance","Chemical resistance","Hygienic, easy-clean surface","Antibacterial option","Anti-slip alternative"] },
    { title:"Waterproofing System",
      desc:"Seamless, monolithic waterproofing systems based on liquid membranes. For roofs, terraces, balconies, bathrooms and foundation walls, the right primer choice and layer thickness deliver long-lasting protection.",
      areas:["Roofs and terraces","Balconies","Bathrooms and wet areas","Foundations and retaining walls","Water tanks and pools","Car park decks"],
      props:["Seamless monolithic coating","High elasticity","UV-resistant aliphatic top coat","Detail and joint solutions","Can be overcoated"] }
  ],

  why:[
    {title:"Excellence in Service", text:"We work to raise efficiency across all our processes to a competitive level."},
    {title:"High Quality Technology", text:"We encourage innovative and creative approaches in order to raise technological quality."},
    {title:"Production Control", text:"We run our production processes under our own control, with batch-level quality tracking."},
    {title:"Customer-Focused Approach", text:"We take your expectations into account from the start and provide solutions across survey, production and after-sales."},
    {title:"Fast, Quality Delivery", text:"Thanks to professional production and dispatch planning, your products are prepared on time."},
    {title:"Customer Satisfaction", text:"In every project we have completed, are running or will take on, customer satisfaction comes first."}
  ],

  applications:["POLYURETHANE SPORTS FLOORING","PARQUET FLOORING APPLICATION","ACRYLIC SPORTS FLOORS","RUBBER APPLICATION",
    "ATHLETICS TRACK","SYNTHETIC TURF ADHESIVE APPLICATIONS","DECORATIVE STONE APPLICATION","ELASTOMER SANDWICH SYSTEM",
    "SANDWICH SPORTS FLOORING","ELECTRICAL RESINS","EPDM GRANULE APPLICATION","WATERPROOF COATING",
    "INDUSTRIAL POLYURETHANE AND EPOXY FLOORS","DECORATIVE PANEL"],

  blog:["What is polyurethane sports flooring and which projects suit it?",
        "EPDM granule flooring for children's playgrounds",
        "What is EPDM and where is it used?",
        "Acrylic floor coating for sports surfaces"],

  exp:{
    kicker:"EXPORT", title:"Export Information",
    sub:"Reference data you need for load planning and for choosing the right delivery term.",
    cTitle:"Container Dimensions",
    cSub:"Internal dimensions and loading capacities of standard ISO dry cargo containers.",
    cNote:"Figures are indicative and may vary by a few centimetres and a few hundred kilograms depending on the container manufacturer and the carrier. Confirm exact dimensions and maximum payload with your carrier before shipment.",
    cCols:{ type:"Container", inner:"Internal (L × W × H)", door:"Door opening (W × H)",
            vol:"Capacity", tare:"Tare weight", pay:"Max payload", load:"Loading capacity" },
    cNames:{ dv20:"20' DV — Standard", dv40:"40' DV — Standard", hc40:"40' HC — High Cube", hc45:"45' HC — High Cube" },
    loadIbc:"IBC (1000 L)", loadDrum:"drums (200 L)",
    iTitle:"Incoterms 2020 — Delivery Terms",
    iSub:"The international rules that define where cost and risk pass between seller and buyer.",
    iNote:"Incoterms® is a registered trademark of the International Chamber of Commerce (ICC). This table is a summary; always state the named place next to the rule in the contract (e.g. \"FOB Istanbul, Incoterms 2020\").",
    iCols:{ code:"Code", name:"Description", mode:"Transport mode", freight:"Freight", ins:"Insurance", risk:"Risk transfers" },
    modeAny:"All modes", modeSea:"Sea / inland waterway",
    seller:"Seller", buyer:"Buyer", none:"Not required",
    terms:{
      EXW:{ n:"Ex Works", risk:"At the seller's premises, once goods are placed at the buyer's disposal" },
      FCA:{ n:"Free Carrier", risk:"On delivery to the carrier at the named place" },
      FAS:{ n:"Free Alongside Ship", risk:"When placed alongside the vessel at the port of shipment" },
      FOB:{ n:"Free On Board", risk:"When the goods are on board the vessel at the port of shipment" },
      CFR:{ n:"Cost and Freight", risk:"When the goods are on board the vessel at the port of shipment" },
      CIF:{ n:"Cost, Insurance and Freight", risk:"When the goods are on board the vessel at the port of shipment", ins:"Seller — minimum cover (ICC C)" },
      CPT:{ n:"Carriage Paid To", risk:"On delivery to the first carrier" },
      CIP:{ n:"Carriage and Insurance Paid To", risk:"On delivery to the first carrier", ins:"Seller — extensive cover (ICC A)" },
      DAP:{ n:"Delivered At Place", risk:"At the named destination, ready for unloading on the vehicle" },
      DPU:{ n:"Delivered at Place Unloaded", risk:"At the named destination, once unloading is complete" },
      DDP:{ n:"Delivered Duty Paid", risk:"At the named destination, ready for unloading on the vehicle" }
    }
  },

  form:{
    title:"Get in Touch",
    text:"Use the form to send us any request, question or enquiry about our products and services.",
    fName:"Full Name", fCompany:"Company", fEmail:"E-mail", fPhone:"Phone",
    fSubject:"Subject", fMessage:"Your Message",
    subjects:["Product information","System / project quote","Distribution & partnership","Export","Technical support","Other"],
    kvkk:"I have read and accept the personal data protection notice.",
    submit:"Send Message",
    notWired:"This form is not yet connected to a delivery service."
  }
},

/* ---------------------------------------------------------- FRANÇAIS */
fr: {
  meta:{
    title:"Leon Kimya | Adhésifs, liants, revêtements de sol et systèmes d'étanchéité",
    desc:"Adhésifs, liants, revêtements de sol et solutions d'étanchéité à base de polyuréthane, d'époxy et d'acrylique."
  },
  tagline:"Votre partenaire en technologie chimique",
  address:"", addressShort:"",
  addressTodo:"Adresse à compléter",
  phoneTodo:"Numéro de téléphone à compléter",
  emailTodo:"Adresse e-mail à compléter",
  copyright:"Leon Kimya © 2026",
  partner:"",

  nav:{
    corporate:"Entreprise", history:"À propos", policies:"Nos politiques", team:"Notre équipe",
    hr:"Ressources humaines", certificates:"Certificats",
    products:"Produits", adhesives:"Adhésifs", parquetAdh:"Adhésifs pour parquet",
    pvcAdh:"Adhésif pour sols PVC & vinyle", rubberTurfAdh:"Adhésifs caoutchouc & gazon synthétique",
    filterAdh:"Adhésifs pour filtres", indAdh:"Adhésifs industriels",
    binders:"Liants", pourBinder:"Liants coulés", pressBinder:"Liants pressés",
    stoneBinder:"Liants pour pierre", epdmGranule:"Granulés EPDM",
    coatings:"Revêtements de sol & peintures", puCoat:"Revêtements polyuréthane",
    acCoat:"Revêtements acryliques", epCoat:"Revêtements époxy",
    primersPutties:"Primaires & mastics", primers:"Primaires", putties:"Mastics",
    waterproofProd:"Produits d'étanchéité", electricalResin:"Résines de coulée pour isolation électrique",
    systems:"Systèmes", sportsSys:"Systèmes de sols sportifs", indSys:"Systèmes de sols industriels",
    waterSys:"Système d'étanchéité",
    exportNav:"Export", containers:"Dimensions des conteneurs", incoterms:"Incoterms / Conditions de livraison",
    references:"Références", applications:"Applications", blog:"Blog", contact:"Contact",
    fProducts:"Produits", fSystems:"Systèmes & entreprise"
  },

  ui:{
    home:"Accueil", quote:"Demander un devis", catalog:"E-Catalogue", catalogPdf:"E-Catalogue (PDF)",
    detail:"En savoir plus", productFamily:"FAMILLE DE PRODUITS", viewSystems:"Découvrir nos systèmes",
    prev:"Précédent", next:"Suivant", menu:"Menu", closeMenu:"Fermer le menu", openSub:"Ouvrir le sous-menu",
    toTop:"Haut de page", skip:"Aller au contenu",
    secProducts:"Produits & systèmes",
    secProductsSub:"Des adhésifs aux liants, des revêtements de sol à l'étanchéité : six familles de produits et trois catégories de systèmes.",
    secVideo:"Applications", secVideoSub:"Nos systèmes appliqués sur chantier.",
    secSystems:"Systèmes",
    secSystemsSub:"Des systèmes conçus selon le cahier des charges, le budget et le support.",
    secApps:"Domaines d'application",
    secAppsSub:"Du sol sportif polyuréthane à la pierre décorative, de la piste d'athlétisme à l'époxy industriel.",
    applicationAreas:"Domaines d'application", systemProducts:"Caractéristiques du système",
    systemDetails:"Détails du système", projectQuote:"Devis pour votre projet",
    allApplications:"Toutes les applications", refProjects:"Nos projets de référence",
    corporateKicker:"ENTREPRISE", contactKicker:"CONTACT",
    fullHistory:"À propos",
    blogKicker:"BLOG", blogTitle:"Articles du blog", more:"Voir plus",
    readPost:"Bientôt disponible", tagBlog:"BLOG",
    contactInfo:"Coordonnées", labelAddress:"Adresse", labelPhone:"Téléphone",
    labelEmail:"E-mail", labelExport:"Export",
    labelFactory:"Usine", labelGeneral:"Général",
    mapTitle:"Localisation Leon Kimya", sinceProduction:"",
    allRights:"Tous droits réservés.",
    mapTodo:"La carte s'affichera ici une fois l'adresse renseignée."
  },

  hero:{
    kicker:"ADHÉSIFS • LIANTS • SOLS • ÉTANCHÉITÉ",
    title:"Technologie de pointe,\nqualité éprouvée\nen chimie.",
    lead:"Grâce à nos procédés à base de polyuréthane, d'époxy et d'acrylique, nous proposons une large gamme depuis une source unique — des adhésifs aux sols sportifs, de l'étanchéité aux résines électriques."
  },

  categories:[
    {title:"ADHÉSIFS", sub:"Parquet, PVC, caoutchouc et gazon synthétique", desc:"Adhésifs pour parquet, PVC & vinyle, caoutchouc, gazon synthétique, filtres et industrie."},
    {title:"LIANTS", sub:"Liants coulés, pressés et pour pierre", desc:"Liants coulés et pressés, liants pour pierre, liants caoutchouc SBR et EPDM, ainsi que granulés EPDM."},
    {title:"REVÊTEMENTS DE SOL", sub:"Polyuréthane, acrylique et époxy", desc:"Systèmes de revêtement et de peinture à base de polyuréthane, d'acrylique et d'époxy ; large gamme de coloris et haute résistance mécanique."},
    {title:"ÉTANCHÉITÉ", sub:"Membranes liquides et mastics", desc:"Étanchéité durable et sans joint grâce aux membranes liquides, mastics de joint et matériaux d'isolation de toiture."},
    {title:"PRIMAIRES & MASTICS", sub:"Préparation et rebouchage des supports", desc:"Primaires pour béton, métal et supports absorbants ; mastics de rebouchage et de réparation."},
    {title:"RÉSINES ÉLECTRIQUES", sub:"Résines de coulée et peintures transformateur", desc:"Résines de coulée pour l'industrie électrique, peintures polyuréthane résistantes aux UV, produits de moulage et de remplissage."}
  ],

  tiles:["ADHÉSIFS PARQUET","ADHÉSIFS CAOUTCHOUC","ADHÉSIFS GAZON SYNTHÉTIQUE","LIANTS",
         "ÉTANCHÉITÉ","RÉSINES DE COULÉE ÉPOXY","SYSTÈMES DE SOLS INDUSTRIELS","SYSTÈMES DE SOLS SPORTIFS"],

  videos:[
    {title:"Application de piste d'athlétisme", sub:"Systèmes de sols sportifs"},
    {title:"Sol époxy industriel", sub:"Systèmes de sols industriels"},
    {title:"Application de membrane liquide", sub:"Système d'étanchéité"},
    {title:"Application d'adhésif parquet", sub:"Adhésifs"}
  ],

  feat:[
    {t:"ÉQUIPE EXPERTE ET EXPÉRIMENTÉE", d:"Nos spécialistes accompagnent chaque étape de la production, de la R&D et de l'application."},
    {t:"PRODUCTION", d:"Nous élaborons nos produits sous nos propres processus contrôlés et proposons une large gamme depuis une source unique."},
    {t:"ACCOMPAGNEMENT PROJET", d:"Du relevé initial au choix des produits, des détails d'application au cahier des charges, nous vous accompagnons tout au long du projet."},
    {t:"PRODUITS & SERVICE DE QUALITÉ", d:"Nous associons technologies avancées et matières premières de qualité pour préserver la qualité du produit fini."}
  ],

  about:{
    title:"Leon Kimya",
    lead:"Leon Kimya met en œuvre des technologies de pointe et s'appuie sur des collaborateurs qualifiés dans chacune des branches de la chimie où elle intervient. L'entreprise s'est fixé pour principe de livrer des produits conformes aux normes sans transiger sur la satisfaction client, et de bâtir une marque capable de répondre à des attentes en constante évolution.",
    paras:[
      "Avec des procédés à base de polyuréthane, d'époxy et d'acrylique, nous apportons des solutions en adhésifs, liants caoutchouc, revêtements de sol industriels et sportifs, résines d'isolation électrique, systèmes d'étanchéité et mastics de joint.",
      "Notre développement produit s'appuie sur les retours du terrain ; nous concevons des configurations de systèmes qui varient selon le cahier des charges, le budget et le support.",
      "TODO : ajouter ici l'histoire de Leon Kimya, sa capacité de production et ses marchés cibles."
    ]
  },

  systems:[
    { title:"Systèmes de sols sportifs",
      desc:"Systèmes de sols sportifs à base de polyuréthane et d'acrylique. Pour espaces couverts ou extérieurs, ils varient selon le cahier des charges, le budget et le support. Les produits utilisés étant liquides, ils forment après séchage une surface monolithique qui préserve l'intégrité du terrain.",
      areas:["Tennis","Basket-ball","Football","Volley-ball","Handball","Athlétisme","Stand de tir"],
      props:["Surface monolithique sans joint","Couche élastique absorbant les chocs","Finition résistante aux UV","Large gamme de coloris","Usage intérieur et extérieur"] },
    { title:"Systèmes de sols industriels",
      desc:"Systèmes à base de produits polyuréthane et époxy, variables selon l'usage prévu. Ils offrent planéité, facilité de nettoyage, haute résistance mécanique et chimique et un aspect moderne sans joint.",
      areas:["Sols d'usine","Entrepôts et magasins sous douane","Laboratoires et chambres froides","Parkings couverts","Hangars d'aviation","Ateliers automobiles et stations de lavage","Restaurants, cafés et bars","Chambres et espaces communs d'hôtel","Magasins, bureaux et halls d'exposition","Crèches et écoles maternelles"],
      props:["Haute résistance mécanique","Résistance chimique","Surface hygiénique, facile à nettoyer","Option antibactérienne","Alternative antidérapante"] },
    { title:"Système d'étanchéité",
      desc:"Systèmes d'étanchéité monolithiques et sans joint à base de membranes liquides. Pour toitures, terrasses, balcons, salles de bain et murs de fondation, le choix du primaire et l'épaisseur des couches assurent une protection durable.",
      areas:["Toitures et terrasses","Balcons","Salles de bain et pièces humides","Fondations et murs de soutènement","Réservoirs et piscines","Dalles de parking"],
      props:["Revêtement monolithique sans joint","Haute élasticité","Finition aliphatique résistante aux UV","Solutions de détails et de joints","Recouvrable"] }
  ],

  why:[
    {title:"Excellence du service", text:"Nous travaillons à porter l'efficacité de tous nos processus à un niveau compétitif."},
    {title:"Technologie de haute qualité", text:"Nous encourageons les approches innovantes et créatives afin d'élever la qualité technologique."},
    {title:"Maîtrise de la production", text:"Nous conduisons nos procédés sous notre propre contrôle, avec un suivi qualité par lot."},
    {title:"Approche centrée client", text:"Nous prenons en compte vos attentes dès le départ et apportons des solutions du relevé initial à l'après-vente."},
    {title:"Livraison rapide et soignée", text:"Grâce à une planification professionnelle de la production et des expéditions, vos produits sont prêts à temps."},
    {title:"Satisfaction client", text:"Dans chaque projet achevé, en cours ou à venir, la satisfaction du client passe avant tout."}
  ],

  applications:["SOL SPORTIF POLYURÉTHANE","APPLICATION DE PARQUET","SOLS SPORTIFS ACRYLIQUES","APPLICATION CAOUTCHOUC",
    "PISTE D'ATHLÉTISME","APPLICATIONS D'ADHÉSIF GAZON","APPLICATION PIERRE DÉCORATIVE","SYSTÈME SANDWICH ÉLASTOMÈRE",
    "SOL SPORTIF SANDWICH","RÉSINES ÉLECTRIQUES","APPLICATION DE GRANULÉS EPDM","REVÊTEMENT ÉTANCHE",
    "SOLS INDUSTRIELS POLYURÉTHANE ET ÉPOXY","PANNEAU DÉCORATIF"],

  blog:["Qu'est-ce qu'un sol sportif polyuréthane et à quels projets convient-il ?",
        "Sol en granulés EPDM pour aires de jeux",
        "Qu'est-ce que l'EPDM et où l'utilise-t-on ?",
        "Revêtement acrylique pour sols sportifs"],

  exp:{
    kicker:"EXPORT", title:"Informations export",
    sub:"Les données de référence nécessaires à la planification du chargement et au choix de l'incoterm.",
    cTitle:"Dimensions des conteneurs",
    cSub:"Dimensions intérieures et capacités de chargement des conteneurs secs ISO standard.",
    cNote:"Les valeurs sont indicatives et peuvent varier de quelques centimètres et de quelques centaines de kilogrammes selon le fabricant du conteneur et le transporteur. Confirmez les dimensions exactes et la charge utile maximale auprès de votre transporteur avant expédition.",
    cCols:{ type:"Conteneur", inner:"Intérieur (L × l × H)", door:"Ouverture de porte (l × H)",
            vol:"Volume", tare:"Tare", pay:"Charge utile max.", load:"Capacité de chargement" },
    cNames:{ dv20:"20' DV — Standard", dv40:"40' DV — Standard", hc40:"40' HC — High Cube", hc45:"45' HC — High Cube" },
    loadIbc:"IBC (1000 L)", loadDrum:"fûts (200 L)",
    iTitle:"Incoterms 2020 — Conditions de livraison",
    iSub:"Les règles internationales qui définissent où les frais et les risques passent du vendeur à l'acheteur.",
    iNote:"Incoterms® est une marque déposée de la Chambre de commerce internationale (ICC). Ce tableau est un résumé ; indiquez toujours le lieu convenu à côté de la règle dans le contrat (ex. « FOB Istanbul, Incoterms 2020 »).",
    iCols:{ code:"Code", name:"Description", mode:"Mode de transport", freight:"Fret", ins:"Assurance", risk:"Transfert du risque" },
    modeAny:"Tous modes", modeSea:"Maritime / fluvial",
    seller:"Vendeur", buyer:"Acheteur", none:"Non obligatoire",
    terms:{
      EXW:{ n:"Ex Works — À l'usine", risk:"Dans les locaux du vendeur, dès que la marchandise est mise à disposition" },
      FCA:{ n:"Free Carrier — Franco transporteur", risk:"À la remise au transporteur au lieu convenu" },
      FAS:{ n:"Free Alongside Ship — Franco le long du navire", risk:"Une fois placée le long du navire au port d'embarquement" },
      FOB:{ n:"Free On Board — Franco à bord", risk:"Lorsque la marchandise est à bord du navire au port d'embarquement" },
      CFR:{ n:"Cost and Freight — Coût et fret", risk:"Lorsque la marchandise est à bord du navire au port d'embarquement" },
      CIF:{ n:"Cost, Insurance and Freight — Coût, assurance et fret", risk:"Lorsque la marchandise est à bord du navire au port d'embarquement", ins:"Vendeur — couverture minimale (ICC C)" },
      CPT:{ n:"Carriage Paid To — Port payé jusqu'à", risk:"À la remise au premier transporteur" },
      CIP:{ n:"Carriage and Insurance Paid To — Port payé, assurance comprise", risk:"À la remise au premier transporteur", ins:"Vendeur — couverture étendue (ICC A)" },
      DAP:{ n:"Delivered At Place — Rendu au lieu de destination", risk:"Au lieu de destination, prêt au déchargement sur le véhicule" },
      DPU:{ n:"Delivered at Place Unloaded — Rendu déchargé", risk:"Au lieu de destination, une fois le déchargement terminé" },
      DDP:{ n:"Delivered Duty Paid — Rendu droits acquittés", risk:"Au lieu de destination, prêt au déchargement sur le véhicule" }
    }
  },

  form:{
    title:"Contactez-nous",
    text:"Utilisez ce formulaire pour nous adresser toute demande ou question concernant nos produits et services.",
    fName:"Nom et prénom", fCompany:"Société", fEmail:"E-mail", fPhone:"Téléphone",
    fSubject:"Sujet", fMessage:"Votre message",
    subjects:["Information produit","Devis système / projet","Distribution & partenariat","Export","Support technique","Autre"],
    kvkk:"J'ai lu et j'accepte la notice relative à la protection des données personnelles.",
    submit:"Envoyer le message",
    notWired:"Ce formulaire n'est pas encore relié à un service d'envoi."
  }
},

/* ---------------------------------------------------------- العربية */
ar: {
  meta:{
    title:"ليون كيميا | مواد لاصقة ورابطة وأنظمة أرضيات وعزل مائي",
    desc:"حلول لاصقة ورابطة وأنظمة أرضيات وعزل مائي على أساس البولي يوريثان والإيبوكسي والأكريليك."
  },
  tagline:"شريككم في التقنية الكيميائية",
  address:"", addressShort:"",
  addressTodo:"سيتم إضافة العنوان",
  phoneTodo:"سيتم إضافة رقم الهاتف",
  emailTodo:"سيتم إضافة البريد الإلكتروني",
  copyright:"Leon Kimya © 2026",
  partner:"",

  nav:{
    corporate:"عن الشركة", history:"من نحن", policies:"سياساتنا", team:"فريقنا",
    hr:"الموارد البشرية", certificates:"الشهادات",
    products:"المنتجات", adhesives:"المواد اللاصقة", parquetAdh:"لواصق الباركيه",
    pvcAdh:"لاصق أرضيات PVC والفينيل", rubberTurfAdh:"لواصق المطاط والعشب الصناعي",
    filterAdh:"لواصق الفلاتر", indAdh:"اللواصق الصناعية",
    binders:"المواد الرابطة", pourBinder:"روابط الصب", pressBinder:"روابط الكبس",
    stoneBinder:"روابط الحجر", epdmGranule:"حبيبات EPDM",
    coatings:"أرضيات ودهانات", puCoat:"أرضيات البولي يوريثان",
    acCoat:"أرضيات الأكريليك", epCoat:"أرضيات الإيبوكسي",
    primersPutties:"البرايمرات والمعاجين", primers:"البرايمرات", putties:"المعاجين",
    waterproofProd:"منتجات العزل المائي", electricalResin:"راتنجات صب العزل الكهربائي",
    systems:"الأنظمة", sportsSys:"أنظمة الأرضيات الرياضية", indSys:"أنظمة الأرضيات الصناعية",
    waterSys:"نظام العزل المائي",
    exportNav:"التصدير", containers:"أبعاد الحاويات", incoterms:"إنكوترمز / شروط التسليم",
    references:"مشاريعنا", applications:"التطبيقات", blog:"المدونة", contact:"اتصل بنا",
    fProducts:"المنتجات", fSystems:"الأنظمة والشركة"
  },

  ui:{
    home:"الرئيسية", quote:"اطلب عرض سعر", catalog:"الكتالوج", catalogPdf:"الكتالوج (PDF)",
    detail:"تفاصيل أكثر", productFamily:"عائلة المنتجات", viewSystems:"تصفّح أنظمتنا",
    prev:"السابق", next:"التالي", menu:"القائمة", closeMenu:"إغلاق القائمة", openSub:"فتح القائمة الفرعية",
    toTop:"العودة إلى الأعلى", skip:"تخطَّ إلى المحتوى",
    secProducts:"المنتجات والأنظمة",
    secProductsSub:"من المواد اللاصقة إلى الرابطة، ومن أرضيات الطلاء إلى العزل المائي: ست عائلات منتجات وثلاثة أنظمة.",
    secVideo:"التطبيقات", secVideoSub:"أنظمتنا أثناء التنفيذ في الموقع.",
    secSystems:"الأنظمة",
    secSystemsSub:"أنظمة تُصمَّم وفق المواصفات والميزانية وطبيعة الأرضية.",
    secApps:"مجالات التطبيق",
    secAppsSub:"من الأرضيات الرياضية بالبولي يوريثان إلى الحجر الديكوري، ومن مضامير ألعاب القوى إلى الإيبوكسي الصناعي.",
    applicationAreas:"مجالات التطبيق", systemProducts:"خصائص النظام",
    systemDetails:"تفاصيل النظام", projectQuote:"عرض سعر لمشروعك",
    allApplications:"جميع التطبيقات", refProjects:"مشاريعنا المرجعية",
    corporateKicker:"عن الشركة", contactKicker:"اتصل بنا",
    fullHistory:"من نحن",
    blogKicker:"المدونة", blogTitle:"مقالات المدونة", more:"المزيد",
    readPost:"قريبًا", tagBlog:"مدونة",
    contactInfo:"بيانات الاتصال", labelAddress:"العنوان", labelPhone:"الهاتف",
    labelEmail:"البريد الإلكتروني", labelExport:"التصدير",
    labelFactory:"المصنع", labelGeneral:"عام",
    mapTitle:"موقع ليون كيميا", sinceProduction:"",
    allRights:"جميع الحقوق محفوظة.",
    mapTodo:"ستظهر الخريطة هنا بعد إضافة بيانات الموقع."
  },

  hero:{
    kicker:"مواد لاصقة • روابط • أرضيات • عزل مائي",
    title:"تقنية متقدمة\nوجودة مثبتة\nفي الصناعات الكيميائية.",
    lead:"عبر عمليات الإنتاج القائمة على البولي يوريثان والإيبوكسي والأكريليك، نوفّر تشكيلة واسعة من مصدر واحد — من المواد اللاصقة إلى الأرضيات الرياضية، ومن العزل المائي إلى راتنجات العزل الكهربائي."
  },

  categories:[
    {title:"المواد اللاصقة", sub:"باركيه، PVC، مطاط وعشب صناعي", desc:"لواصق للباركيه وأرضيات PVC والفينيل والمطاط والعشب الصناعي والفلاتر والصناعة."},
    {title:"المواد الرابطة", sub:"روابط الصب والكبس والحجر", desc:"روابط الصب والكبس، وروابط الحجر، وروابط المطاط SBR وEPDM، إضافة إلى حبيبات EPDM."},
    {title:"أرضيات الطلاء", sub:"بولي يوريثان وأكريليك وإيبوكسي", desc:"أنظمة أرضيات ودهانات على أساس البولي يوريثان والأكريليك والإيبوكسي؛ مع تشكيلة ألوان واسعة ومقاومة ميكانيكية عالية."},
    {title:"العزل المائي", sub:"أغشية سائلة ومواد مانعة للتسرب", desc:"عزل مائي متين وبلا وصلات عبر الأغشية السائلة ومواد ملء الفواصل ومواد عزل الأسطح."},
    {title:"البرايمرات والمعاجين", sub:"تجهيز الأسطح والملء", desc:"برايمرات للخرسانة والمعادن والأسطح الماصّة، ومعاجين الملء والإصلاح."},
    {title:"راتنجات العزل الكهربائي", sub:"راتنجات صب ودهانات محوّلات", desc:"راتنجات صب لقطاع الكهرباء، ودهانات بولي يوريثان مقاومة للأشعة فوق البنفسجية، ومواد قوالب وملء."}
  ],

  tiles:["لواصق الباركيه","لواصق المطاط","لواصق العشب الصناعي","المواد الرابطة",
         "العزل المائي","راتنجات صب الإيبوكسي","أنظمة الأرضيات الصناعية","أنظمة الأرضيات الرياضية"],

  videos:[
    {title:"تنفيذ مضمار ألعاب القوى", sub:"أنظمة الأرضيات الرياضية"},
    {title:"أرضية إيبوكسي صناعية", sub:"أنظمة الأرضيات الصناعية"},
    {title:"تطبيق الغشاء السائل", sub:"نظام العزل المائي"},
    {title:"تطبيق لاصق الباركيه", sub:"المواد اللاصقة"}
  ],

  feat:[
    {t:"فريق خبير وذو تجربة", d:"يقدّم كادرنا المتخصص الدعم في جميع مراحل الإنتاج والبحث والتطوير والتنفيذ."},
    {t:"الإنتاج", d:"نُعِدّ منتجاتنا ضمن عمليات خاضعة لرقابتنا ونقدّم تشكيلة واسعة من مصدر واحد."},
    {t:"دعم المشاريع", d:"من المعاينة الأولية واختيار المنتج إلى تفاصيل التنفيذ والمواصفات، نرافقكم طوال المشروع."},
    {t:"منتج وخدمة بجودة عالية", d:"نجمع بين التقنية المتقدمة والمواد الخام الجيدة للحفاظ على جودة المنتج النهائي."}
  ],

  about:{
    title:"ليون كيميا",
    lead:"تعتمد ليون كيميا التقنيات المتقدمة وتوظّف كوادر مؤهلة في كل فرع من فروع الكيمياء التي تعمل فيها. وقد جعلت من مبادئها تقديم منتجات مطابقة للمعايير دون أي تنازل عن رضا العملاء، وبناء علامة تجارية قادرة على تلبية التوقعات المتغيّرة.",
    paras:[
      "عبر عمليات الإنتاج القائمة على البولي يوريثان والإيبوكسي والأكريليك، نقدّم حلولًا في المواد اللاصقة وروابط المطاط وأرضيات الطلاء الصناعية والرياضية وراتنجات العزل الكهربائي وأنظمة العزل المائي ومواد ملء الفواصل.",
      "يعتمد تطوير منتجاتنا على ملاحظات الميدان؛ ونُعِدّ تكوينات أنظمة تتغيّر وفق المواصفات والميزانية وطبيعة الأرضية.",
      "TODO: تُضاف هنا قصة تأسيس ليون كيميا وطاقتها الإنتاجية وأسواقها المستهدفة."
    ]
  },

  systems:[
    { title:"أنظمة الأرضيات الرياضية",
      desc:"أنظمة أرضيات رياضية على أساس البولي يوريثان والأكريليك. تُصمَّم للمساحات المفتوحة أو المغلقة وتتغيّر وفق المواصفات والميزانية وطبيعة الأرضية. ولأن المواد المستخدمة سائلة، فإنها تكوّن بعد الجفاف سطحًا متجانسًا بلا وصلات.",
      areas:["التنس","كرة السلة","كرة القدم","الكرة الطائرة","كرة اليد","ألعاب القوى","ميادين الرماية"],
      props:["سطح متجانس بلا وصلات","طبقة مرنة ممتصة للصدمات","طبقة علوية مقاومة للأشعة","تشكيلة ألوان واسعة","للاستخدام الداخلي والخارجي"] },
    { title:"أنظمة الأرضيات الصناعية",
      desc:"أنظمة قائمة على مواد البولي يوريثان والإيبوكسي، تتغيّر وفق الغرض من الاستخدام. توفّر استواءً في السطح وسهولة في التنظيف ومقاومة ميكانيكية وكيميائية عالية ومظهرًا حديثًا بلا وصلات.",
      areas:["أرضيات المصانع","المستودعات والمخازن","المختبرات وغرف التبريد","مواقف السيارات المغلقة","حظائر الطائرات","مراكز صيانة وغسيل السيارات","المطاعم والمقاهي","غرف الفنادق والمساحات المشتركة","المتاجر والمكاتب وصالات المعارض","الحضانات ورياض الأطفال"],
      props:["مقاومة ميكانيكية عالية","مقاومة كيميائية","سطح صحي سهل التنظيف","خيار مضاد للبكتيريا","بديل مقاوم للانزلاق"] },
    { title:"نظام العزل المائي",
      desc:"أنظمة عزل مائي متجانسة وبلا وصلات على أساس الأغشية السائلة. في الأسطح والشرفات والحمامات وجدران الأساسات، يضمن اختيار البرايمر المناسب وسماكة الطبقات حمايةً طويلة الأمد.",
      areas:["الأسطح والشرفات","البلكونات","الحمامات والمساحات الرطبة","الأساسات والجدران الساندة","خزانات المياه والمسابح","أسطح مواقف السيارات"],
      props:["طلاء متجانس بلا وصلات","مرونة عالية","طبقة أليفاتية مقاومة للأشعة","حلول للتفاصيل والفواصل","قابل للطلاء فوقه"] }
  ],

  why:[
    {title:"التميّز في الخدمة", text:"نعمل على رفع كفاءة جميع عملياتنا إلى مستوى تنافسي."},
    {title:"تقنية عالية الجودة", text:"نشجّع الأساليب المبتكرة والإبداعية بهدف رفع مستوى الجودة التقنية."},
    {title:"التحكم في الإنتاج", text:"ندير عمليات الإنتاج تحت رقابتنا مع متابعة الجودة على مستوى كل دفعة."},
    {title:"نهج يركّز على العميل", text:"نأخذ توقعاتكم بالحسبان منذ البداية ونقدّم حلولًا في المعاينة والإنتاج وما بعد البيع."},
    {title:"تسليم سريع وعالي الجودة", text:"بفضل تخطيط الإنتاج والشحن الاحترافي، تُجهَّز منتجاتكم في موعدها."},
    {title:"رضا العملاء", text:"في كل مشروع أنجزناه أو نعمل عليه أو سنتولّاه، يأتي رضا العميل في المقام الأول."}
  ],

  applications:["أرضيات رياضية بالبولي يوريثان","تطبيق أرضيات الباركيه","أرضيات رياضية أكريليك","تطبيق المطاط",
    "مضمار ألعاب القوى","تطبيقات لاصق العشب الصناعي","تطبيق الحجر الديكوري","نظام ساندويتش إيلاستومر",
    "أرضية رياضية ساندويتش","راتنجات كهربائية","تطبيق حبيبات EPDM","طلاء مانع لتسرب المياه",
    "أرضيات صناعية بالبولي يوريثان والإيبوكسي","لوح ديكوري"],

  blog:["ما هي الأرضيات الرياضية بالبولي يوريثان وما المشاريع التي تناسبها؟",
        "أرضيات حبيبات EPDM لملاعب الأطفال",
        "ما هو EPDM وأين يُستخدم؟",
        "الطلاء الأكريليكي للأرضيات الرياضية"],

  exp:{
    kicker:"التصدير", title:"معلومات التصدير",
    sub:"البيانات المرجعية التي تحتاجها لتخطيط التحميل واختيار شرط التسليم المناسب.",
    cTitle:"أبعاد الحاويات",
    cSub:"الأبعاد الداخلية وسعات التحميل للحاويات الجافة القياسية ISO.",
    cNote:"القيم استرشادية وقد تختلف ببضعة سنتيمترات وبضع مئات من الكيلوغرامات حسب الشركة المصنّعة للحاوية وشركة النقل. تأكّد من الأبعاد الدقيقة والحمولة القصوى مع الناقل قبل الشحن.",
    cCols:{ type:"الحاوية", inner:"الأبعاد الداخلية (ط × ع × ا)", door:"فتحة الباب (ع × ا)",
            vol:"الحجم", tare:"الوزن الفارغ", pay:"الحمولة القصوى", load:"سعة التحميل" },
    cNames:{ dv20:"20' DV — قياسية", dv40:"40' DV — قياسية", hc40:"40' HC — عالية", hc45:"45' HC — عالية" },
    loadIbc:"حاوية IBC (1000 لتر)", loadDrum:"برميل (200 لتر)",
    iTitle:"إنكوترمز 2020 — شروط التسليم",
    iSub:"القواعد الدولية التي تحدّد أين تنتقل التكاليف والمخاطر بين البائع والمشتري.",
    iNote:"إنكوترمز® علامة تجارية مسجّلة لغرفة التجارة الدولية (ICC). هذا الجدول ملخّص؛ اذكر دائمًا مكان التسليم بجوار القاعدة في العقد (مثال: \"FOB إسطنبول، إنكوترمز 2020\").",
    iCols:{ code:"الرمز", name:"الوصف", mode:"وسيلة النقل", freight:"أجرة الشحن", ins:"التأمين", risk:"انتقال المخاطر" },
    modeAny:"جميع الوسائل", modeSea:"بحري / نهري",
    seller:"البائع", buyer:"المشتري", none:"غير إلزامي",
    terms:{
      EXW:{ n:"Ex Works — التسليم في المصنع", risk:"في منشأة البائع، عند وضع البضاعة تحت تصرّف المشتري" },
      FCA:{ n:"Free Carrier — التسليم إلى الناقل", risk:"عند التسليم إلى الناقل في المكان المتفق عليه" },
      FAS:{ n:"Free Alongside Ship — التسليم بجانب السفينة", risk:"عند وضع البضاعة بجانب السفينة في ميناء الشحن" },
      FOB:{ n:"Free On Board — التسليم على ظهر السفينة", risk:"عند تحميل البضاعة على ظهر السفينة في ميناء الشحن" },
      CFR:{ n:"Cost and Freight — التكلفة وأجرة الشحن", risk:"عند تحميل البضاعة على ظهر السفينة في ميناء الشحن" },
      CIF:{ n:"Cost, Insurance and Freight — التكلفة والتأمين وأجرة الشحن", risk:"عند تحميل البضاعة على ظهر السفينة في ميناء الشحن", ins:"البائع — تغطية دنيا (ICC C)" },
      CPT:{ n:"Carriage Paid To — أجرة النقل مدفوعة إلى", risk:"عند التسليم إلى الناقل الأول" },
      CIP:{ n:"Carriage and Insurance Paid To — أجرة النقل والتأمين مدفوعتان إلى", risk:"عند التسليم إلى الناقل الأول", ins:"البائع — تغطية شاملة (ICC A)" },
      DAP:{ n:"Delivered At Place — التسليم في المكان المتفق عليه", risk:"في مكان الوصول، جاهزة للتفريغ على وسيلة النقل" },
      DPU:{ n:"Delivered at Place Unloaded — التسليم بعد التفريغ", risk:"في مكان الوصول، بعد إتمام التفريغ" },
      DDP:{ n:"Delivered Duty Paid — التسليم مع دفع الرسوم", risk:"في مكان الوصول، جاهزة للتفريغ على وسيلة النقل" }
    }
  },

  form:{
    title:"تواصل معنا",
    text:"استخدم النموذج لإرسال أي طلب أو سؤال بخصوص منتجاتنا وخدماتنا.",
    fName:"الاسم الكامل", fCompany:"الشركة", fEmail:"البريد الإلكتروني", fPhone:"الهاتف",
    fSubject:"الموضوع", fMessage:"رسالتك",
    subjects:["معلومات عن منتج","عرض سعر لنظام أو مشروع","التوزيع والشراكة","التصدير","الدعم الفني","أخرى"],
    kvkk:"لقد قرأت إشعار حماية البيانات الشخصية وأوافق عليه.",
    submit:"إرسال الرسالة",
    notWired:"هذا النموذج غير مرتبط بعد بخدمة إرسال."
  }
}

};
