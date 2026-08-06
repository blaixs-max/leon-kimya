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
    whatsapp: "https://wa.me/905337040125",   // Leon Kimya WhatsApp hattı
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
    parke:"#detay/parke", pvc:"#detay/pvc", kaucuk:"#detay/kaucuk", filtre:"#detay/filtre", endYap:"#detay/endYap",
    dokme:"#detay/dokme", press:"#detay/press", tas:"#detay/tas", epdm:"#detay/epdm",
    puZemin:"#detay/puZemin", akZemin:"#detay/akZemin", epZemin:"#detay/epZemin",
    astar:"#detay/astar", macun:"#detay/macun", suUrun:"#detay/suUrun", elektrik:"#detay/elektrik",
    sporSis:"#detay/sporSis", endSis:"#detay/endSis", suSis:"#detay/suSis",
    uygSporPu:"#detay/uygSporPu", uygParke:"#detay/uygParke", uygAkrilik:"#detay/uygAkrilik",
    uygKaucuk:"#detay/uygKaucuk", uygAtletizm:"#detay/uygAtletizm", uygCim:"#detay/uygCim",
    uygTas:"#detay/uygTas", uygElastomer:"#detay/uygElastomer", uygSandvic:"#detay/uygSandvic",
    uygElektrik:"#detay/uygElektrik", uygEpdm:"#detay/uygEpdm", uygSu:"#detay/uygSu",
    uygEndustri:"#detay/uygEndustri", uygDokum:"#detay/uygDokum",
    tarihce:"#kurumsal", politika:"#kurumsal", ekip:"#kurumsal", ik:"#kurumsal",
    sertifika:"#kurumsal", referans:"#referanslar", uygulama:"#uygulamalar",
    video:"#uygulamalar",
    catalog:""            // TODO: kendi e-katalog PDF'inizin adresi
  },

  langs: [
    { code:"TR", href:"/",   lang:"tr", dir:"ltr" },
    { code:"EN", href:"/en", lang:"en", dir:"ltr" },
    { code:"FR", href:"/fr", lang:"fr", dir:"ltr" },
    { code:"AR", href:"/ar", lang:"ar", dir:"rtl" }
  ],

  /* Logo: aslan+dişli amblemli yatay lockup (06.08.2026, kullanıcının verdiği
     kurumsal kimlik görselinden çıkarıldı). logoDark açık zeminde (header/menü),
     logoWhite koyu zeminde (footer) basılır — bkz. split.js wordmark(). */
  brand: {
    name: "LEON KİMYA",
    logoDark: "assets/img/logo-dark.png",
    logoWhite: "assets/img/logo-footer.png"
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
    { k:"contact", href:"#iletisim" }
  ],

  /* TODO: Tüm görseller GEÇİCİ yer tutucudur ve referans siteden gelmektedir.
     Leon Kimya'nın kendi saha fotoğraflarıyla değiştirilmeden yayına almayın. */
  categories: [
    { img:"assets/img/cat-parquet-v2.jpg",  L:"parke" },
    { img:"assets/img/cat-binder-v2.jpg",   L:"dokme" },
    { img:"assets/img/cat-coating-v2.jpg",  L:"puZemin" },
    { img:"assets/img/cat-water-v2.jpg",    L:"suUrun" },
    { img:"assets/img/cat-primer-v2.jpg",   L:"astar" },
    { img:"assets/img/ind-01.png",       L:"elektrik" }
  ],

  tiles: [
    { img:"assets/img/tile-parquet-v2.jpg",    L:"parke" },
    { img:"assets/img/tile-rubber-v2.jpg",     L:"kaucuk" },
    { img:"assets/img/tile-turf-v2.jpg",       L:"kaucuk" },
    { img:"assets/img/tile-binder-v2.jpg",     L:"dokme" },
    { img:"assets/img/tile-water-v2.jpg",      L:"suSis" },
    { img:"assets/img/tile-resin-v2.jpg",      L:"elektrik" },
    { img:"assets/img/tile-industrial-v2.jpg", L:"endSis" },
    { img:"assets/img/tile-sport-v2.jpg",      L:"sporSis" }
  ],

  videos: [
    { img:"assets/img/sys-sport2-v2.jpg",   L:"uygulama" },
    { img:"assets/img/ind-service.jpg",  L:"endSis" },
    { img:"assets/img/vid-membrane-v2.jpg", L:"suSis" },
    { img:"assets/img/vid-parquet-v2.jpg",  L:"parke" }
  ],

  featLinks: ["ekip", "tarihce", "referans", "sertifika"],

  heroImage: "assets/img/ind-apply.jpg",
  aboutImage: "assets/img/corp-plant-v2.jpg",

  /* TODO: Leon Kimya'nın gerçek rakamları girilene kadar boş.
     Boş olduğu sürece istatistik bandı görünmez. */
  stats: [],

  systems: [
    { id:"spor", L:"sporSis", img:"assets/img/sys-sport2-v2.jpg",
      gallery:["assets/img/sport-tennis.jpg","assets/img/tile-sport-v2.jpg","assets/img/sport-gym.jpg","assets/img/app-turf-v2.jpg"] },
    { id:"endustriyel", L:"endSis", img:"assets/img/ind-apply.jpg",
      gallery:["assets/img/ind-texture.jpg","assets/img/ind-roller.jpg","assets/img/ind-machines.jpg","assets/img/tile-industrial-v2.jpg"] },
    { id:"su", L:"suSis", img:"assets/img/water-main-v2.jpg",
      gallery:["assets/img/water-app1.jpg","assets/img/water-app2.jpg","assets/img/water-app3.jpg","assets/img/vid-membrane-v2.jpg"] }
  ],

  why: [ {icon:"star"},{icon:"chip"},{icon:"factory"},{icon:"users"},{icon:"truck"},{icon:"shield"} ],

  applications: [
    { img:"assets/img/sport-gym.jpg",     L:"uygSporPu" },
    { img:"assets/img/app-parquet-v2.jpg",   L:"uygParke" },
    { img:"assets/img/sport-tennis2.jpg", L:"uygAkrilik" },
    { img:"assets/img/app-rubber-v2.jpg",    L:"uygKaucuk" },
    { img:"assets/img/sys-sport2-v2.jpg",    L:"uygAtletizm" },
    { img:"assets/img/app-turf-v2.jpg",      L:"uygCim" },
    { img:"assets/img/app-stone-v2.jpg",     L:"uygTas" },
    { img:"assets/img/sport-05.jpg",      L:"uygElastomer" },
    { img:"assets/img/vid-track2-v2.jpg",    L:"uygSandvic" },
    { img:"assets/img/ind-01.png",        L:"uygElektrik" },
    { img:"assets/img/app-playground-v2.jpg",L:"uygEpdm" },
    { img:"assets/img/water-app3.jpg",    L:"uygSu" },
    { img:"assets/img/ind-hall.jpg",      L:"uygEndustri" },
    { img:"assets/img/app-resin-v2.jpg",     L:"uygDokum" }
  ],

  /* TODO: Tescilli marka bölümü kaldırıldı (üçüncü tarafa aitti).
     Leon Kimya'nın kendi markaları eklendiğinde doldurun.
     Boş olduğu sürece "Markalarımız" karuseli görünmez. */
  brands: [],

  /* Blog bölümü kullanıcı isteğiyle kaldırıldı (05.08.2026). */

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
  ],

  /* ---- ÜRÜN & SİSTEM DETAY KARTLARI ----
     nav: başlık için T.nav anahtarı; img: kapak; gallery: küçük görseller.
     Metinler STRINGS.<dil>.details altında aynı anahtarla tutulur. */
  details: {
    "uygSporPu": {"app": true, "img": "assets/img/sport-gym.jpg", "gallery": ["assets/img/tile-sport-v2.jpg", "assets/img/sys-sport2-v2.jpg", "assets/img/vid-track2-v2.jpg"]},
    "uygParke": {"app": true, "img": "assets/img/app-parquet-v2.jpg", "gallery": ["assets/img/vid-parquet-v2.jpg", "assets/img/cat-parquet-v2.jpg", "assets/img/tile-parquet-v2.jpg"]},
    "uygAkrilik": {"app": true, "img": "assets/img/sport-tennis2.jpg", "gallery": ["assets/img/sport-tennis.jpg"]},
    "uygKaucuk": {"app": true, "img": "assets/img/app-rubber-v2.jpg", "gallery": ["assets/img/rubber-tiles.jpg", "assets/img/tile-rubber-v2.jpg", "assets/img/sport-gym.jpg"]},
    "uygAtletizm": {"app": true, "img": "assets/img/sys-sport2-v2.jpg", "gallery": ["assets/img/vid-track2-v2.jpg"]},
    "uygCim": {"app": true, "img": "assets/img/app-turf-v2.jpg", "gallery": ["assets/img/tile-turf-v2.jpg", "assets/img/prod-kaucuk-05.jpg"]},
    "uygTas": {"app": true, "img": "assets/img/app-stone-v2.jpg", "gallery": ["assets/img/stone-sample.jpg"]},
    "uygElastomer": {"app": true, "img": "assets/img/sport-05.jpg", "gallery": ["assets/img/vid-track2-v2.jpg", "assets/img/sys-sport2-v2.jpg"]},
    "uygSandvic": {"app": true, "img": "assets/img/vid-track2-v2.jpg", "gallery": ["assets/img/sys-sport2-v2.jpg"]},
    "uygElektrik": {"app": true, "img": "assets/img/ind-01.png", "gallery": ["assets/img/resin-table.jpg", "assets/img/resin-wave.jpg"]},
    "uygEpdm": {"app": true, "img": "assets/img/app-playground-v2.jpg", "gallery": ["assets/img/epdm-insitu.jpg", "assets/img/tile-binder-v2.jpg", "assets/img/cat-binder-v2.jpg"]},
    "uygSu": {"app": true, "img": "assets/img/water-app3.jpg", "gallery": ["assets/img/water-main-v2.jpg", "assets/img/water-app1.jpg", "assets/img/water-app2.jpg", "assets/img/vid-membrane-v2.jpg", "assets/img/tile-water-v2.jpg"]},
    "uygEndustri": {"app": true, "img": "assets/img/ind-hall.jpg", "gallery": ["assets/img/ind-apply.jpg", "assets/img/ind-texture.jpg", "assets/img/ind-roller.jpg", "assets/img/ind-machines.jpg", "assets/img/tile-industrial-v2.jpg", "assets/img/ind-service.jpg"]},
    "uygDokum": {"app": true, "img": "assets/img/app-resin-v2.jpg", "gallery": ["assets/img/resin-table.jpg", "assets/img/resin-wave.jpg", "assets/img/tile-resin-v2.jpg"]},
    "parke": {"nav": "parquetAdh", "img": "assets/img/cat-parquet-v2.jpg", "gallery": ["assets/img/vid-parquet-v2.jpg", "assets/img/app-parquet-v2.jpg", "assets/img/tile-parquet-v2.jpg"], "productImgs": ["assets/img/prod-parke-01.jpg", "assets/img/prod-parke-02.jpg", "assets/img/prod-parke-03.jpg", "assets/img/prod-parke-04.jpg", "assets/img/prod-parke-05.jpg", "assets/img/prod-parke-06.jpg", "assets/img/app-parquet-v2.jpg"]},
    "pvc": {"nav": "pvcAdh", "img": "assets/img/pvc-apply.jpg", "gallery": ["assets/img/pvc-hall.jpg"], "productImgs": ["assets/img/prod-pvc-01.jpg"]},
    "kaucuk": {"nav": "rubberTurfAdh", "img": "assets/img/tile-rubber-v2.jpg", "gallery": ["assets/img/rubber-tiles.jpg", "assets/img/app-rubber-v2.jpg", "assets/img/app-turf-v2.jpg", "assets/img/tile-turf-v2.jpg"], "productImgs": ["assets/img/prod-kaucuk-01.jpg", "assets/img/prod-kaucuk-02.jpg", "assets/img/prod-kaucuk-03.jpg", "assets/img/prod-kaucuk-04.jpg", "assets/img/prod-kaucuk-05.jpg", "assets/img/rubber-tiles.jpg", "assets/img/sport-gym.jpg"]},
    "filtre": {"nav": "filterAdh", "img": "assets/img/ind-machines.jpg", "gallery": [], "productImgs": ["assets/img/prod-filtre-01.jpg", "assets/img/prod-filtre-02.jpg", "assets/img/prod-filtre-02.jpg", "assets/img/prod-filtre-02.jpg", "assets/img/prod-filtre-02.jpg", "assets/img/prod-filtre-02.jpg"]},
    "endYap": {"nav": "indAdh", "img": "assets/img/ind-hall.jpg", "gallery": ["assets/img/corp-plant-v2.jpg"], "productImgs": ["assets/img/prod-endyap-01.jpg", "assets/img/prod-endyap-02.jpg", "assets/img/prod-endyap-03.jpg"]},
    "dokme": {"nav": "pourBinder", "img": "assets/img/cat-binder-v2.jpg", "gallery": ["assets/img/epdm-insitu.jpg", "assets/img/tile-binder-v2.jpg", "assets/img/app-playground-v2.jpg"], "productImgs": ["assets/img/prod-binder-01.jpg", "assets/img/prod-binder-01.jpg", "assets/img/prod-binder-01.jpg", "assets/img/prod-binder-02.jpg", "assets/img/prod-binder-01.jpg"]},
    "press": {"nav": "pressBinder", "img": "assets/img/rubber-tiles.jpg", "gallery": ["assets/img/app-rubber-v2.jpg", "assets/img/sport-gym.jpg"], "productImgs": ["assets/img/prod-binder-01.jpg", "assets/img/prod-binder-02.jpg", "assets/img/rubber-tiles.jpg", "assets/img/app-rubber-v2.jpg"]},
    "tas": {"nav": "stoneBinder", "img": "assets/img/app-stone-v2.jpg", "gallery": ["assets/img/stone-sample.jpg"], "productImgs": ["assets/img/prod-tas-01.jpg", "assets/img/prod-tas-02.jpg", "assets/img/prod-binder-02.jpg"]},
    "epdm": {"nav": "epdmGranule", "img": "assets/img/app-playground-v2.jpg", "gallery": ["assets/img/epdm-01.jpg", "assets/img/epdm-02.jpg", "assets/img/epdm-03.jpg", "assets/img/epdm-04.jpg", "assets/img/epdm-05.jpg", "assets/img/epdm-06.jpg", "assets/img/epdm-07.jpg", "assets/img/epdm-08.jpg", "assets/img/epdm-09.jpg", "assets/img/epdm-10.jpg", "assets/img/epdm-11.jpg", "assets/img/epdm-12.jpg", "assets/img/epdm-13.jpg", "assets/img/epdm-14.jpg", "assets/img/epdm-15.jpg", "assets/img/epdm-16.jpg", "assets/img/epdm-17.jpg", "assets/img/epdm-18.jpg", "assets/img/epdm-19.jpg", "assets/img/epdm-20.jpg", "assets/img/epdm-21.jpg", "assets/img/epdm-22.jpg", "assets/img/epdm-23.jpg", "assets/img/epdm-24.jpg"], "productImgs": ["assets/img/app-playground-v2.jpg", "assets/img/epdm-insitu.jpg"]},
    "puZemin": {"nav": "puCoat", "img": "assets/img/cat-coating-v2.jpg", "gallery": ["assets/img/ind-service.jpg", "assets/img/tile-sport-v2.jpg", "assets/img/ind-apply.jpg"], "productImgs": ["assets/img/prod-pu-01.jpg", "assets/img/prod-pu-02.jpg", "assets/img/prod-pu-03.jpg"]},
    "akZemin": {"nav": "acCoat", "img": "assets/img/sport-tennis.jpg", "gallery": ["assets/img/sport-tennis2.jpg"], "productImgs": ["assets/img/prod-ak-01.jpg", "assets/img/prod-ak-02.jpg", "assets/img/prod-ak-02.jpg", "assets/img/prod-ak-03.jpg", "assets/img/prod-ak-04.jpg", "assets/img/prod-ak-05.jpg", "assets/img/prod-ak-06.jpg", "assets/img/prod-ak-06.jpg", "assets/img/prod-ak-07.jpg", "assets/img/prod-ak-08.jpg", "assets/img/prod-ak-09.jpg"]},
    "epZemin": {"nav": "epCoat", "img": "assets/img/ind-apply.jpg", "gallery": ["assets/img/ind-texture.jpg", "assets/img/ind-roller.jpg", "assets/img/tile-industrial-v2.jpg", "assets/img/resin-wave.jpg"], "productImgs": ["assets/img/prod-ep-01.jpg", "assets/img/tile-industrial-v2.jpg", "assets/img/prod-ep-02.jpg"]},
    "astar": {"nav": "primers", "img": "assets/img/cat-primer-v2.jpg", "gallery": ["assets/img/ind-apply.jpg"], "productImgs": ["assets/img/cat-primer-v2.jpg", "assets/img/prod-ak-07.jpg", "assets/img/ind-apply.jpg", "assets/img/prod-astar-01.jpg", "assets/img/prod-astar-01.jpg", "assets/img/prod-astar-01.jpg"]},
    "macun": {"nav": "putties", "img": "assets/img/ind-roller.jpg", "gallery": ["assets/img/ind-texture.jpg"]},
    "suUrun": {"nav": "waterproofProd", "img": "assets/img/water-main-v2.jpg", "gallery": ["assets/img/water-app1.jpg", "assets/img/water-app2.jpg", "assets/img/water-app3.jpg", "assets/img/tile-water-v2.jpg"], "productImgs": ["assets/img/prod-su-01.jpg"]},
    "elektrik": {"nav": "electricalResin", "img": "assets/img/ind-01.png", "gallery": ["assets/img/resin-table.jpg", "assets/img/resin-wave.jpg"], "productImgs": [null, "assets/img/prod-el-01.jpg", "assets/img/prod-el-02.jpg", "assets/img/prod-el-03.jpg", "assets/img/prod-el-04.jpg", "assets/img/prod-el-05.jpg", "assets/img/prod-el-06.jpg"]},
    "sporSis": {"nav": "sportsSys", "img": "assets/img/sys-sport2-v2.jpg", "gallery": ["assets/img/sport-tennis.jpg", "assets/img/tile-sport-v2.jpg", "assets/img/sport-gym.jpg", "assets/img/vid-track2-v2.jpg"]},
    "endSis": {"nav": "indSys", "img": "assets/img/ind-apply.jpg", "gallery": ["assets/img/ind-texture.jpg", "assets/img/ind-machines.jpg", "assets/img/tile-industrial-v2.jpg", "assets/img/ind-service.jpg"]},
    "suSis": {"nav": "waterSys", "img": "assets/img/water-main-v2.jpg", "gallery": ["assets/img/water-app1.jpg", "assets/img/water-app3.jpg", "assets/img/vid-membrane-v2.jpg", "assets/img/tile-water-v2.jpg"]}
  }
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
    mapTodo:"Konum bilgisi eklendiğinde harita burada görünecek.",
    close:"Kapat", keyFeatures:"Öne Çıkan Özellikler", productRange:"Ürün Çeşitleri",
    waLabel:"WhatsApp ile yazın", waPrefill:"Merhaba, ürünleriniz hakkında bilgi almak istiyorum."
  },

  hero:{
    kicker:"YAPIŞTIRICI • BAĞLAYICI • ZEMİN • SU İZOLASYONU",
    title:"Kimya sektöründe\nileri teknoloji,\nkanıtlanmış kalite.",
    lead:"Poliüretan, epoksi ve akrilik esaslı üretim prosesleriyle; yapıştırıcıdan spor zeminine, su izolasyonundan elektrik reçinelerine geniş bir ürün yelpazesini tek noktadan sunuyoruz."
  },

  categories:[
    {title:"ADHESIVES", sub:"YAPIŞTIRICILAR", desc:"Parke, PVC & vinil, kauçuk, sentetik çim, filtre ve sandviç panel uygulamaları için ağırlıklı poliüretan esaslı, solvent içermeyen yapıştırıcı çözümleri."},
    {title:"RUBBER BINDERS", sub:"BAĞLAYICILAR", desc:"SBR ve EPDM granülleri birbirine bağlayan, nemle kürlenen prepolimer reçineler: dökme (wet-pour), press ve taş halı uygulamaları için aromatik ve sararmayan alifatik seçenekler."},
    {title:"FLOOR COATINGS", sub:"ZEMİN KAPLAMALARI & BOYALAR", desc:"Self-levelling yüzeylerden kaymaz portakal kabuğu tekstürüne; poliüretan, akrilik ve epoksi esaslı kaplama ve boya sistemleri. RAL renk skalası, yüksek mekanik ve kimyasal dayanım."},
    {title:"WATERPROOFING", sub:"SU İZOLASYON ÜRÜNLERİ", desc:"Likit membran esaslı, ek yeri olmayan su yalıtımı: çatı ve terastan temele, ıslak hacimden su deposuna; UV'ye açık yüzeyler için alifatik son katlar."},
    {title:"PRIMERS & PUTTIES", sub:"ASTARLAR & MACUNLAR", desc:"Emici ve emici olmayan yüzeyler için epoksi, poliüretan ve akrilik astarlar; nem bariyerleri, dolgulu astarlar ile derz ve tamir macunları. Doğru astar, sistemin ömrünü belirler."},
    {title:"ELECTRICAL RESINS", sub:"ELEKTRİK İZOLASYON REÇİNELERİ", desc:"Trafo, kablo eki ve elektronik devreler için epoksi ve poliüretan döküm reçineleri; boşluksuz izolasyon, titreşim sönümleme ve şeffaf dekoratif döküm uygulamaları."}
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
      "Üretimin yanında ürün geliştirme (AR-GE) ve müşteriye özel uyarlama (ÜR-GE) süreçlerini ayrı disiplinler olarak yürütüyor; ürünün kullanılacağı zemine, iklime ve işletme koşullarına göre formülasyon öneriyoruz. Solvent içermeyen, kullanıcı ve çevre dostu formülasyonları önceliklendiriyor; uygulama tarafında çözüm ortaklarımızla birlikte projeye özel sistem kurguları hazırlıyoruz."
    ]
  },

  systems:[
    { title:"Spor Zemin Sistemleri",
      desc:"Poliüretan ve akrilik esaslı spor zemin sistemleridir. Açık veya kapalı alanlar için şartnameye, bütçeye ve alt yapıya göre kurgulanır: astar üzerine darbe emici SBR/EPDM elastik çekirdek, gözenekleri kapatan macun katmanı, self-levelling poliüretan kaplama ve UV dayanımlı son kat. Likit uygulandığı için kuruma sonrasında yekpare, derzsiz bir yüzey oluşur; renk ve saha çizgileri yalnızca son kat yenilenerek güncellenebilir.",
      areas:["Tenis kortları","Basketbol ve voleybol","Kapalı spor salonları","Atletizm pistleri","Koşu ve yürüyüş yolları","Çocuk oyun alanları","Fitness salonları","Atış poligonu"],
      props:["Astar → elastik çekirdek → macun → son kat katman kurgusu","Darbe emici SBR/EPDM çekirdek ile sporcu güvenliği","Sararmayan, UV dayanımlı alifatik üst kaplamalar","Sandviç ve dökme sistem alternatifleri","Son kat boya ile düşük maliyetli renk yenileme","Açık ve kapalı alan uygulaması"] },
    { title:"Endüstriyel Zemin Sistemleri",
      desc:"Poliüretan ve epoksi esaslı, kullanım amacına göre kurgulanan sistemlerdir. Pürüzsüz self-levelling yüzeylerden kaymaz portakal kabuğu tekstürüne, ince film zemin boyalarından ağır yük alanları için epoksi harca uzanan seçenekler; derzsiz, hijyenik, tozumayan ve yüksek mekanik-kimyasal dayanımlı zeminler sağlar.",
      areas:["Fabrika zeminleri","Depo ve antrepo","Laboratuvar ve soğuk hava deposu","Gıda ve ilaç tesisleri","Kapalı otopark","Uçak hangarı","Araç servisi ve oto yıkama","Restoran, kafe ve bar","Otel oda ve ortak alanları","Mağaza, ofis ve fuar alanı","Anaokulu ve kreş"],
      props:["Self-levelling veya kaymaz tekstürlü yüzey seçenekleri","Tüm RAL renklerinde uygulama","Antibakteriyel ve iletken (ESD) alternatifler","Ağır yük alanları için epoksi harç takviyesi","Derzsiz, tozumayan, kolay temizlenen yüzey","Zemine logo, yönlendirme ve çizgi uygulanabilir"] },
    { title:"Su İzolasyon Sistemi",
      desc:"Likit membran esaslı, ek yeri olmayan yekpare su izolasyon sistemleri. Yüzeye uygun astar, köşe ve süzgeç detaylarında güçlendirme bandı, katlar hâlinde uygulanan likit membran ve UV'ye açık yüzeylerde alifatik son kat ile kurgulanır; uygulama su testiyle doğrulanır.",
      areas:["Çatı ve teras","Balkon","Banyo ve ıslak hacim","Temel ve perde beton","Su deposu ve havuz","Otopark döşemesi"],
      props:["Ek yeri olmayan yekpare kaplama","Karmaşık detaylara tam uyum","UV dayanımlı alifatik üst kat","Detay bantlama ve güçlendirme çözümleri","Basınçlı sızıntılar için enjeksiyon reçineleri","Üzerine seramik ve kaplama yapılabilir"] }
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
    "ENDÜSTRİYEL POLİÜRETAN VE EPOKSİ ZEMİNLER","EPOKSİ DÖKÜM UYGULAMALARI"],

  details:{
    uygSporPu:{"title": "Poliüretan Spor Zemini", "lead": "Kapalı salonlardan fitness alanlarına; darbe emici, derzsiz poliüretan spor zeminleri.", "paras": ["Astar üzerine SBR çekirdek, macun ve self-levelling poliüretan katmanlarıyla kurulan sistem; saha çizgileri ve renk son katla tamamlanır. Basketboldan çok amaçlı salonlara, kullanım yoğunluğuna göre kalınlık seçilir."]},
    uygParke:{"title": "Zemin (Parke) Uygulaması", "lead": "Masif ve lamine parkelerin elastik poliüretan yapıştırıcılarla derzsiz ve sessiz montajı.", "paras": ["Zemin nemi ölçülüp uygun astar ve dişli mala seçildikten sonra parke, elastik yapıştırıcı üzerine döşenir; gıcırtı ve ayrılma önlenir, yerden ısıtmalı sistemlerde güvenle çalışılır."]},
    uygAkrilik:{"title": "Akrilik Spor Zeminler", "lead": "Tenis kortlarından çok amaçlı sahalara; oyun hızı ayarlanabilen akrilik kaplama uygulamaları.", "paras": ["Resurfacer, cushion katmanları ve dolgulu son kat sırayla uygulanır; kum oranıyla saha hızı belirlenir, çizgi boyasıyla tamamlanır. Don-çözülme dayanımıyla dış mekânda uzun ömür sunar."]},
    uygKaucuk:{"title": "Kauçuk Uygulaması", "lead": "Kauçuk karo ve ruloların spor salonu, kreş ve endüstriyel alanlara montajı.", "paras": ["Yüzey hazırlığı sonrası çift komponentli poliüretan yapıştırıcı taraklanır, karolar şaşırtmalı yerleştirilir ve rulo ile bastırılır; bağlantı yaklaşık sekiz saatte kürleşir."]},
    uygAtletizm:{"title": "Atletizm Parkuru", "lead": "Sandviç ve tam dökme sistemlerle profesyonel koşu pisti uygulamaları.", "paras": ["Finişerle serilen SBR-bağlayıcı çekirdek üzerine elastomer ve EPDM yüzey uygulanır; drenajla uyumlu, her hava koşulunda tutuş sağlayan bir pist yüzeyi elde edilir."]},
    uygCim:{"title": "Çim Yapıştırıcı Uygulamaları", "lead": "Halı saha ve peyzaj çimlerinde ek hattı odaklı profesyonel yapıştırma.", "paras": ["Şeritler ek bandı üzerine merkezlenir, yapıştırıcı bandın tamamına eşit yayılır ve kür süresi boyunca bağlantı korunur; ek yerleri görünmez kalır, saha erken kullanıma açılmaz."]},
    uygTas:{"title": "Dekoratif Taş Uygulaması", "lead": "Şeffaf bağlayıcıyla doğal taş granüllerinden su geçirgen, dekoratif 'taş halı' yüzeyler.", "paras": ["Granül ve bağlayıcı homojen karıştırılıp mala ile serilir; kürlenince kaymaz, bakım gerektirmeyen ve yağmur suyunu geçiren bir yüzey oluşur. Havuz çevresi ve yürüyüş yollarının tercihidir."]},
    uygElastomer:{"title": "Elastomer Sandviç Sistem", "lead": "Elastik çekirdek, elastomer ve renkli EPDM yüzeyden oluşan çift katmanlı spor zemin kurgusu.", "paras": ["Elastomer katman henüz ıslakken EPDM granül serpilir; enerji geri kazanımı ve deformasyon değerleri profesyonel kullanım standartlarına göre ayarlanır."]},
    uygSandvic:{"title": "Sandviç Spor Zemini", "lead": "Stadyum ve üniversite pistleri için sandviç sistem uygulamaları.", "paras": ["Doğru uygulama ve düzenli bakımla uzun hizmet ömrü sunar; aşınan bölgeler lokal onarımla yenilenir, renk kombinasyonları projeye göre kurgulanır."]},
    uygElektrik:{"title": "Elektrik Reçineleri", "lead": "Trafo, kablo eki ve elektronik bileşenlerde boşluksuz döküm uygulamaları.", "paras": ["Reçine, bileşeni tamamen saracak akışkanlıkta dökülür; kürlenince şok ve vibrasyona dayanıklı, nem almayan bir izolasyon bloğu oluşur."]},
    uygEpdm:{"title": "EPDM Granül Uygulaması", "lead": "Renkli EPDM granülle çocuk oyun alanları ve spor sahalarında güvenli, desenli zeminler.", "paras": ["SBR alt katman üzerine EPDM-bağlayıcı karışımı serilir ve düzlenir; katman kalınlığı düşme yüksekliğine göre belirlenir, 24 renkle serbest desen kurgulanır."]},
    uygSu:{"title": "Su Geçirmez Kaplama", "lead": "Çatıdan ıslak hacme; likit membranla ek yeri olmayan su yalıtımı uygulamaları.", "paras": ["Köşe ve süzgeç detayları bantlanır, membran katlar hâlinde uygulanır ve su testiyle doğrulanır; UV gören yüzeyler alifatik son katla korunur."]},
    uygEndustri:{"title": "Endüstriyel Poliüretan ve Epoksi Zeminler", "lead": "Fabrika, depo ve otoparklarda hijyenik, yüke dayanıklı derzsiz zemin uygulamaları.", "paras": ["Kumlama ve astar sonrası self-levelling veya tekstürlü kaplama uygulanır; forklift trafiğine, kimyasallara ve yoğun temizliğe dayanıklı tek parça bir yüzey elde edilir."]},
    uygDokum:{"title": "Epoksi Döküm Uygulamaları", "lead": "Şeffaf epoksi reçineyle masa, obje ve dekoratif yüzey dökümleri.", "paras": ["Döküm ortadan kenarlara ilerletilir, hava kabarcıkları kendiliğinden atılır; jelleşme sonrası kat kat derinlik verilir, zımpara ve cila ile kristal parlaklık elde edilir."]},
    parke:{ lead:"Masif, lamine ve mühendislik parkeleri şap ve beton yüzeylere kalıcı olarak bağlayan, ağırlıklı poliüretan esaslı yapıştırıcı ailesi.",
      paras:["Portföy üç kimyasal aile üzerine kuruludur: her cins parkede kullanılabilen solventsiz çift komponentli (2K) poliüretanlar; nemle kürlenen ve taze hâldeyken leke bırakmadan silinebilen tek komponentli STPE hibritler; ahşap ve lamine uygulamaları için su bazlı PVAc tutkallar. Doğru seçim; parkenin boyutsal hareketine, şapın emiciliğine ve ihtiyaç duyulan çalışma süresine göre yapılır.", "Tiksotropik yapı düşey kaymayı önler; elastik bağlantı parkenin ses yapmasını ve zamanla ayrılmasını engeller. Ürünler yerden ısıtmalı sistemlerle uyumludur. Uygulama öncesinde zemin nemi ölçülmeli, doğru dişli mala seçilmeli ve açık bekleme süresi aşılmamalıdır."],
      areas:["Masif ve lamine parke", "Mühendislik parkesi", "Yerden ısıtmalı zeminler", "Konut ve ofisler", "Otel ve mağazalar", "Spor salonu ahşap zeminleri"],
      props:["Solventsiz 2K poliüretan, 1K STPE hibrit ve PVAc seçenekleri", "Gıcırtı ve ayrılmayı önleyen elastik bağ", "Tiksotropik yapı — düşey yüzeyde kaymaz", "Yerden ısıtma sistemleriyle uyumlu", "Farklı iklim koşullarına uygun formülasyonlar"],
      products:[{"t": "Standart 2K Poliüretan Parke Yapıştırıcısı", "d": "Her cins parkede güvenle kullanılan, solventsiz çift komponentli poliüretan; yüksek nihai mukavemet ve dengeli çalışma süresi sunar."}, {"t": "Tiksotropik 2K Poliüretan Parke Yapıştırıcısı", "d": "Yüksek kıvamlı yapısıyla mala izini korur, eğimli yüzeylerde akmaz; geniş ebatlı parkelerde kontrollü ve temiz serme sağlar."}, {"t": "Elastik 2K Poliüretan Parke Yapıştırıcısı", "d": "Ahşabın boyutsal hareketini karşılayan kalıcı elastik bağ; masif ve geniş lamelli parkeler ile yerden ısıtmalı sistemlerin ilk tercihidir."}, {"t": "Ekstra Elastik 2K Poliüretan Parke Yapıştırıcısı", "d": "Yüksek uzama kabiliyetiyle hareketli ve problemli zeminlerde gerilmeleri karşılar, ses köprülerini keserek sessiz bir zemin sağlar."}, {"t": "Güçlendirilmiş 2K Poliüretan Parke Yapıştırıcısı", "d": "Ağır trafik ve zorlu yüzeyler için güçlendirilmiş tutunma profili; spor salonu ahşap zeminleri gibi talepkâr uygulamalara uygundur."}, {"t": "1K STPE Hibrit Parke Yapıştırıcısı", "d": "Nemle kürlenen, karıştırma gerektirmeyen tek komponentli hibrit; uygun betonda astarsız uygulanır, taze hâldeyken iz bırakmadan silinir."}, {"t": "1K PVAc Ahşap Tutkalı (D3)", "d": "Su bazlı, D3 su direnci sınıfında ahşap ve lamine tutkalı; montaj ve lamine birleştirme işlerinde hızlı, temiz ve kokusuz çözüm."}] },
    pvc:{ lead:"Esnek PVC, vinil, linolyum, marley ve tabanı kaplı halı türü döşemeleri emici yüzeylere sabitleyen, su bazlı akrilik yapıştırıcı.",
      paras:["Tek komponentli ve solvent içermeyen formülasyon; kokusuz yapısıyla hastane, okul ve konut gibi kapalı alanlarda güvenle çalışılmasına imkân verir. Yüksek ilk yapışma (tack) ve uzun çalışma aralığı, geniş alan uygulamalarında düzeltme payı bırakır.", "Yapıştırıcı dişli mala ile eşit yayılır, kaplama birkaç dakika içinde serilir ve rulo ile bastırılarak tam yüzey teması sağlanır. Yerden ısıtmalı zeminlerde sistem uygulamadan önce kapatılır, döşeme sonrası kademeli olarak açılır. Zemin kaplama yapıştırıcısı, sert PVC boru yapıştırıcısı ile karıştırılmamalıdır."],
      areas:["Hastane ve laboratuvarlar", "Okul ve kreşler", "Konutlar", "AVM ve mağazalar", "Ofisler", "Homojen ve heterojen PVC zeminler"],
      props:["Su bazlı, tek komponentli akrilik — solventsiz", "Düşük sarfiyatla ekonomik uygulama", "Yüksek ilk yapışma ve nihai mukavemet", "Kapalı alanda kokusuz çalışma", "Yerden ısıtma protokolüyle uyumlu"],
      products:[{"t": "Su Bazlı Akrilik Zemin Kaplama Yapıştırıcısı", "d": "Tek komponentli, akrilik esaslı ve solvent içermez. Kolay uygulanır; uzun çalışma aralığında yüksek ilk ve nihai yapışma verir. PVC, PU ve lateks yer döşemeleri; marley, marmolyum, linolyum ve tabanı kaplı halıların beton ile şapa yapıştırılmasında kullanılır."}] },
    kaucuk:{ lead:"Kauçuk karo ve ruloları zemine, sentetik çim şeritlerini birbirine ve ek bandına bağlayan çift komponentli poliüretan yapıştırıcılar.",
      paras:["Solventsiz 2K poliüretan yapı; gün ışığından, sudan ve dış etkenlerden etkilenmeden yapışma gücünü uzun süre korur. Kauçuk karo ve rulolar beton, MDF, sunta ve metal yüzeylere; gerektiğinde seramik, granit ve mermer üzerine uygulanır.", "Sentetik çimde kritik bölge geniş yüzey değil, ek hatları ve kenar dönüşleridir: yapıştırıcı ek bandına eşit yayılır, şeritler merkezlenir ve kür süresi boyunca bağlantı korunur. Yeşil renk seçeneği ek yerlerinin görünmemesini sağlar."],
      areas:["Halı saha ve futbol sahaları", "Kauçuk karo ve rulo zeminler", "Spor salonları", "Çocuk oyun alanları", "Peyzaj ve dekoratif çim", "Havuz çevresi"],
      props:["Çift komponentli, solventsiz poliüretan", "UV, su ve dış ortam dayanımı", "Ek bandı ile tam uyumlu uygulama", "Tiksotropik — eğimli yüzeyde akmaz", "Esnek ve ekonomik varyantlar"],
      products:[{"t": "Esnek 2K Poliüretan Kauçuk Yapıştırıcısı", "d": "Kauçuk karo ve ruloları beton, ahşap ve metal yüzeylere bağlayan solventsiz, esnek çift komponentli sistem."}, {"t": "Ekonomik 2K Poliüretan Kauçuk Yapıştırıcısı", "d": "Geniş alan uygulamalarında maliyet avantajı sunan, dengeli tutunma profilli çift komponentli varyant."}, {"t": "2K Poliüretan Sentetik Çim Yapıştırıcısı", "d": "Sentetik çim şeritlerini ek bandına bağlayan; suya ve dış ortama dayanıklı, yeşil renkli yapıştırıcı."}, {"t": "Ekonomik Sentetik Çim Yapıştırıcısı", "d": "Halı saha ve peyzaj uygulamaları için ekonomik çift komponentli çözüm."}, {"t": "Derz / Ek Bandı", "d": "Sentetik çim şeritlerini alttan birleştiren dokuma ek bandı; yapıştırıcı ile birlikte kullanılır."}, {"t": "Kauçuk Karo", "d": "Esnek, aşınmaya dayanıklı hazır zemin karoları; farklı ebat ve kalınlık seçenekleriyle."}, {"t": "SBR Kauçuk Rulo", "d": "Spor zemin sistemlerinin darbe emici alt katmanı; şap altı ve ses yalıtımında da kullanılır."}] },
    filtre:{ lead:"Filtre medyasını, çerçeveyi ve kapağı bir arada tutan; gerektiğinde yerinde conta oluşturan endüstriyel poliüretan sistemler.",
      paras:["İki ayrı görev iki ayrı ürün ailesiyle karşılanır: medya sabitlemede hedef güçlü ve tekrarlanabilir bağlantı; conta ürünlerinde kontrollü dolgu, form kararlılığı ve sızdırmazlıktır. Manuel döküm için yavaş, otomatik dozaj hatları için hızlı kürlenen ve akmayan (tiksotropik) varyantlar mevcuttur.", "Ürün seçiminde dozaj yöntemi, viskozite, çalışma süresi, hizmet sıcaklığı ve temas edilen akışkan belirleyicidir. Medya, çerçeve veya hammadde partisi değiştiğinde seri üretime geçmeden küçük ölçekli deneme önerilir."],
      areas:["Hava filtreleri", "Otomotiv filtreleri", "Endüstriyel filtre kasetleri", "Filtre contaları", "Seri dozaj hatları"],
      props:["Medya sabitleme ve conta için ayrı ürünler", "Manuel ve otomatik hatta uygun kürlenme hızları", "Tiksotropik (akmayan) seçenek", "Tekrarlanabilir dozaj kararlılığı", "Metal ve plastik çerçevelerle uyum"],
      products:[{"t": "Hızlı Kürlenen Filtre Yapıştırıcısı", "d": "Otomatik dozaj hatlarında kısa çevrim süreleri için geliştirilen poliüretan sistem."}, {"t": "Manuel Döküm Filtre Yapıştırıcısı", "d": "Elle dozajlamada geniş çalışma süresi sunan, medya sabitleme odaklı tip."}, {"t": "Otomatik Dozaj Filtre Yapıştırıcısı", "d": "Seri üretim hatlarında tekrarlanabilir dozaj kararlılığı sağlayan tip."}, {"t": "Hızlı Tip Filtre Yapıştırıcısı", "d": "Yüksek hat hızları için kısaltılmış jelleşme süreli varyant."}, {"t": "Standart Filtre Yapıştırıcısı", "d": "Hava ve otomotiv filtrelerinde genel amaçlı medya birleştirme çözümü."}, {"t": "Tiksotropik / Conta Tipi", "d": "Akmadan yerinde conta oluşturan, form kararlılığı yüksek dolgu tipi."}] },
    endYap:{ lead:"Sandviç panel ve araç üstü yapılarda izolasyon panellerini CTP, metal ve alternatif yüzeylere bağlayan poliüretan sistemler.",
      paras:["Frigorifik kamyon ve ticari araç üst yapıları için tek veya çift komponentli panel yapıştırıcıları; makine uygulaması için düşük viskoziteli, hızlı kürlenen varyantlarla desteklenir. Kauçuk levhaların sunta veya metale yapıştırılması için ayrı poliüretan çözümler sunulur.", "Gıda taşımacılığı araçlarında; yapışma ve mekanik özellikleri yüksek, gıda asitlerine ve birçok kimyasala dayanıklı antibakteriyel epoksi zemin kaplamaları sistemi tamamlar. Tüm ürünler solvent içermez."],
      areas:["Sandviç panel üretimi", "Frigorifik araç üst yapıları", "Ticari araç zeminleri", "Soğuk oda panelleri", "Endüstriyel montaj hatları"],
      props:["1K ve 2K poliüretan seçenekleri", "Makine uygulaması için düşük viskozite", "Hızlı kürlenen varyantlar", "Antibakteriyel epoksi zemin tamamlayıcısı", "Solvent içermeyen formülasyon"],
      products:[{"t": "1K Poliüretan Panel Yapıştırıcısı", "d": "Nemle kürlenen tek komponentli sistem; sandviç panel ve araç üstü yapılarda pratik uygulama."}, {"t": "2K Poliüretan Panel Yapıştırıcısı", "d": "İzolasyon panellerini CTP ve metale bağlayan, yüksek mukavemetli çift komponentli sistem."}, {"t": "2K Makine Uygulama Panel Yapıştırıcısı", "d": "Düşük viskoziteli, hızlı kürlenen tip; otomatik uygulama hatları için."}] },
    dokme:{ lead:"SBR ve EPDM granülleri sahada tek parça, esnek bir zemine dönüştüren; nemle kürlenen tek komponentli poliüretan prepolimerler.",
      paras:["Granülle karıştırılıp yüzeye serilen bağlayıcı, kürlendiğinde su geçirgen, darbe emici ve yekpare bir katman oluşturur. Büyük alanlarda finişer makinesiyle, küçük alanlarda elle serilir. Aromatik tipler siyah SBR ve koyu renkli sistemlerde ekonomik çözümdür; renkli EPDM yüzeylerde sararmayan alifatik / UV dayanımlı tipler önerilir.", "Eksik bağlayıcı zayıf bağa, fazlası yüzey sertleşmesine yol açar; karışım oranı ve granül temizliği uygulamanın belirleyicisidir. Yeni granül partisinde küçük bir deneme uygulaması yapılmalıdır."],
      areas:["Çocuk oyun alanları", "Koşu ve yürüyüş yolları", "Spor zeminleri", "Okul bahçeleri", "Park ve peyzaj alanları", "Dekoratif zeminler"],
      props:["Nemle kürlenen 1K prepolimer", "Aromatik ve alifatik (sararmayan) seçenekler", "Su geçirgen, derzsiz esnek yüzey", "Finişerle veya elle uygulama", "EPDM ve SBR granüllerle tam uyum"],
      products:[{"t": "Renkli Dökme Bağlayıcı", "d": "Renkli granül sistemlerinde ton bütünlüğü sağlayan pigmentli bağlayıcı."}, {"t": "Aromatik Dökme Bağlayıcı (Düşük Viskozite)", "d": "Kolay işlenen, granülü hızla saran ekonomik aromatik tip."}, {"t": "Aromatik Dökme Bağlayıcı", "d": "Siyah SBR ve koyu renkli sistemler için standart wet-pour bağlayıcısı."}, {"t": "Alifatik EPDM Bağlayıcı (UV Dayanımlı)", "d": "Renkli EPDM yüzeylerde sararma yapmayan, UV kararlı premium tip."}, {"t": "Wet-Pour Sistem Bağlayıcısı", "d": "Çocuk oyun alanı ve spor zemini dökme sistemleri için genel amaçlı bağlayıcı."}] },
    press:{ lead:"Kauçuk karo, bordür ve teknik parçaların kalıpta basınç ve sıcaklık altında üretimi için geliştirilen bağlayıcı reçineler.",
      paras:["Granül-bağlayıcı karışımı kalıpta preslenerek yoğun ve formunu koruyan ürünlere dönüşür. Kalıp sıcaklığı, çevrim süresi ve granül yapısı sonucu belirler; parametrelerin sabit tutulması seri üretimde parça bütünlüğünü garanti eder.", "Dökme ürün ile pres ürünü birbirinin yerine kullanılmamalıdır: çalışma süresi, yüzey kalitesi ve mukavemet iki proseste farklı kurgulanmıştır. Granül kalitesi esnekliği, granül boyutu sarfiyatı belirler."],
      areas:["Kauçuk karo üretimi", "Kauçuk bordür ve rampalar", "Ahır ve padok zemin plakaları", "Teknik kauçuk parçalar", "Fabrika içi seri üretim"],
      props:["Kalıp prosesine özel formülasyon", "Düşük sarfiyatla yüksek bağ gücü", "Sabit çevrim parametreleriyle tekrarlanabilirlik", "Yoğun, formunu koruyan ürün yapısı", "SBR ve EPDM granüllerle uyum"],
      products:[{"t": "Standart Press Bağlayıcı", "d": "Kauçuk karo ve bordür üretiminde dengeli çevrim süresi sunan kalıp bağlayıcısı."}, {"t": "Hızlı Çevrim Press Bağlayıcı", "d": "Yüksek kapasiteli üretim hatları için kısaltılmış pres süresi."}, {"t": "Ekonomik Press Bağlayıcı", "d": "Standart parçalarda maliyet avantajı sağlayan tip."}, {"t": "Yüksek Mukavemet Press Bağlayıcı", "d": "Yoğun trafiğe maruz teknik parçalar için güçlendirilmiş formül."}] },
    tas:{ lead:"Doğal ve renkli taş granülleri şeffaf bir film ile bağlayarak 'taş halı' adı verilen dekoratif, su geçirgen yüzeyler oluşturan reçineler.",
      paras:["Tek komponentli alifatik, çift komponentli alifatik ve çift komponentli epoksi olmak üzere üç varyant sunulur. Alifatik tipler UV altında sararmaz ve dış mekânın ilk tercihidir; epoksi tip, iç mekân ve UV görmeyen alanlarda ekonomik alternatiftir.", "Kürlenen yüzey kaymaz, rüzgârdan etkilenmez, suya ve çoğu kimyasala dayanıklıdır; özel bakım gerektirmeden hafif trafiğe uzun yıllar hizmet eder."],
      areas:["Yürüyüş yolları ve geçitler", "Park, bahçe ve botanik alanlar", "Havuz ve gölet çevresi", "Balkon ve teraslar", "Otel ve galeri zeminleri", "Dekoratif iç mekânlar"],
      props:["Taş dokusunu gösteren şeffaf film", "Alifatik tiplerde sararmazlık", "Su geçirgen, kaymaz yüzey", "1K ve 2K uygulama seçenekleri", "Bakım gerektirmeyen dayanıklılık"],
      products:[{"t": "2K Alifatik Taş Bağlayıcısı", "d": "Sararmayan, şeffaf çift komponentli sistem; dış mekân taş halı uygulamalarının ilk tercihi."}, {"t": "2K Epoksi Taş Bağlayıcısı", "d": "İç mekân ve UV görmeyen alanlar için ekonomik, yüksek mukavemetli tip."}, {"t": "1K Alifatik Taş Bağlayıcısı", "d": "Tek komponentli pratik uygulama; balkon, teras ve yürüyüş yollarında."}] },
    epdm:{ lead:"Sentetik EPDM kauçuğundan üretilen, UV dayanımlı ve canlı renkli granüller; poliüretan bağlayıcı ile esnek ve güvenli zeminlerin ham maddesi.",
      paras:["Homojen tane yapısı ve geniş renk paleti; desenli oyun alanlarından çok renkli spor sahalarına kadar serbest tasarım imkânı verir. Granül boyutu ve katman kalınlığı ayarlanarak farklı düşme güvenliği seviyeleri elde edilir; oyun alanlarında katman kalınlığı EN 1177 kritik düşme yüksekliği yaklaşımına göre belirlenir.", "Geri dönüşümden elde edilen SBR granül, sistemlerin ekonomik elastik alt katmanı olarak EPDM ile birlikte çalışır."],
      areas:["Çocuk oyun alanları", "Koşu parkurları ve tartan pistler", "Okul bahçeleri", "Spor sahaları", "Havuz kenarları", "Jimnastik ve egzersiz alanları"],
      props:["UV dayanımı ile kalıcı renkler", "Toksik olmayan, kaymaz yüzey", "Darbe emici esnek yapı", "Zengin renk paleti ve desen imkânı", "SBR alt katman ile ekonomik sistem"],
      products:[{"t": "EPDM Granül — 24 Standart Renk", "d": "UV dayanımlı, homojen tane yapılı renkli granül; galeriden tüm renk paletini inceleyebilirsiniz."}, {"t": "SBR Granül (Geri Dönüşüm)", "d": "Sistemlerin ekonomik, darbe emici siyah alt katman granülü."}] },
    puZemin:{ lead:"Elastikiyet, darbe emme ve UV dayanımının belirleyici olduğu zeminler için poliüretan esaslı kaplama ve boya sistemleri.",
      paras:["Sert self-levelling tipler fabrika, depo ve soğuk hava depolarında pürüzsüz ve hijyenik yüzeyler oluşturur; esnek tipler spor salonu, poligon ve kreş gibi alanlarda darbe emerek yaralanma riskini azaltır. Sistem; macun, EPDM son katı ve UV dayanımlı son kat boya ile tamamlanır.", "Poliüretan, epoksinin sert yapısına karşı termal harekete uyum, titreşim sönümleme ve yürüme sesini azaltma avantajı sunar; UV ve dış hava koşullarına dayanımı daha yüksektir."],
      areas:["Fabrika ve depolar", "Soğuk hava depoları", "Spor salonları ve poligonlar", "Otopark ve açık alanlar", "Ofis, mağaza ve showroomlar", "Islak hacimler"],
      props:["Sert veya esnek sistem kurgusu", "UV dayanımlı, sararmayan son katlar", "Termal gerilmelere uyum", "Yürüme sesini azaltan yüzey", "Antibakteriyel ve alev dayanımlı seçenekler"],
      products:[{"t": "2K Poliüretan Zemin Boyası (UV)", "d": "Sistemlerin renk ve koruma katmanı; sararmayan son kat boya."}, {"t": "2K PU Self-Levelling Kaplama (Sert)", "d": "Fabrika ve depolar için pürüzsüz, yüksek dayanımlı kaplama."}, {"t": "2K PU Self-Levelling Kaplama (Elastik)", "d": "Spor salonu ve konfor odaklı alanlar için darbe emici tip."}] },
    akZemin:{ lead:"Beton ve asfalt üzerine kat kat uygulanan; su bazlı, solventsiz ve UV'ye son derece dayanıklı akrilik spor zemin kaplamaları.",
      paras:["Sistem; yüzey düzeltici (resurfacer), şok emici cushion katmanları, dolgulu son kat ve saha çizgi boyasından oluşur. Kum içeriği ve katman sayısı ayarlanarak sahanın sürtünme katsayısı — yani oyun hızı — özelleştirilir.", "Don-çözülme döngüsüne dayanımı ve yüksek renk kalıcılığı ile dış mekânda uzun ömür sunar; iç mekânda da amatörden profesyonele her seviyede kullanılır."],
      areas:["Tenis kortları", "Basketbol ve voleybol sahaları", "Çok amaçlı sahalar", "Koşu ve bisiklet parkurları", "Okul ve belediye tesisleri"],
      props:["Su bazlı, çevre dostu sistem", "Ayarlanabilir saha hızı (sürtünme katsayısı)", "UV ve don-çözülme dayanımı", "Beton ve asfalta güçlü yapışma", "Düşük bakım maliyeti, geniş renk skalası"],
      products:[{"t": "Akrilik Cila", "d": "Akrilik yüzeylere parlaklık ve koruma kazandıran son kat."}, {"t": "Akrilik Cushion (Kalın)", "d": "Kortlarda şok emilimi sağlayan kalın yastık katmanı."}, {"t": "Akrilik Cushion (İnce)", "d": "Hassas hız ayarı için ince yastık katmanı."}, {"t": "Premium Akrilik Resurfacer", "d": "Yüzey hatalarını dolduran, üst katmanlara zemin hazırlayan premium düzeltici."}, {"t": "Akrilik Resurfacer", "d": "Beton ve asfalt üzerinde standart yüzey düzeltme katmanı."}, {"t": "Akrilik Dolgulu Son Kat Boya", "d": "Kum dolgusuyla sürtünme katsayısını belirleyen renkli son kat."}, {"t": "Premium Akrilik Konsantre Boya", "d": "Yüksek pigmentli, uzun ömürlü renk katmanı."}, {"t": "Akrilik Konsantre Boya", "d": "Saha renklendirmede ekonomik konsantre çözüm."}, {"t": "1K Poliüretan Astar", "d": "Akrilik sistem öncesi beton yüzey astarı."}, {"t": "Akrilik Astar", "d": "Akrilik katmanların tutunmasını sağlayan su bazlı astar."}, {"t": "Akrilik Çizgi Boyası", "d": "Saha çizgileri için yüksek örtücülüğe sahip boya."}] },
    epZemin:{ lead:"İnce film boyadan kendiliğinden yayılan kaplamalara ve epoksi harca; hijyen ve mekanik dayanım odaklı derzsiz zemin sistemleri.",
      paras:["Self-levelling tipler pürüzsüz ve parlak, tekstürlü (portakal kabuğu) tipler kaymaz ve ekonomik yüzeyler oluşturur. Tozumayan ve bakteri barındırmayan yekpare yapı; hastane, gıda ve laboratuvar ortamlarında hijyeni destekler. İstenirse iletken (ESD) olarak üretilebilir.", "Yeni beton üzerinde yaklaşık üç haftalık kür beklenmeli, yüzey astarlanmalı ve nem kontrolü yapılmalıdır. Epoksinin UV dayanımı sınırlı olduğundan güneş gören alanlarda UV dayanımlı son kat boya ile korunur; ağır yük alanlarında sistem epoksi harç ile güçlendirilir."],
      areas:["Fabrika ve üretim tesisleri", "Depo ve antrepolar", "Hastane ve laboratuvarlar", "Gıda ve ilaç tesisleri", "Kapalı otoparklar", "Endüstriyel mutfaklar"],
      props:["Self-levelling, boya ve tekstür seçenekleri", "Yüksek mekanik ve kimyasal dayanım", "Hijyenik, tozumayan derzsiz yüzey", "İletken (ESD) üretim imkânı", "Tüm RAL renklerinde uygulama"],
      products:[{"t": "Epoksi Tekstür Kaplama (Portakal Kabuğu)", "d": "Kaymaz dokulu, ekonomik ve dekoratif son kat kaplama."}, {"t": "Epoksi Zemin Boyası", "d": "Hafif ve orta trafik için ince film koruyucu boya."}, {"t": "Epoksi Self-Levelling Kaplama", "d": "Pürüzsüz, parlak ve yüksek dayanımlı kendiliğinden yayılan kaplama."}] },
    astar:{ lead:"Kaplama ile beton arasında bağ köprüsü kuran; emiciliği dengeleyen, tozumayı kesen ve gerektiğinde nem bariyeri oluşturan ilk katman.",
      paras:["Epoksi astarlar yüksek yapışma ve kimyasal direnç gereken zeminlerde; poliüretan astarlar esnek üst katmanlarla, akrilik astarlar akrilik spor sistemleriyle eşleşir. Dolgulu astarlar yüzey hatalarını doldurarak pürüzsüz bir zemin hazırlar.", "Zemin nemi uygulamanın ilk kontrolüdür: yaklaşık %3'e kadar standart astar yeterlidir, %3–7 aralığında nem bariyerli epoksi astar zorunludur, daha yüksek nemde uygulama yapılmaz. Astar atlanırsa kaplama kısa sürede soyulur ve kabarır."],
      areas:["Beton ve şap yüzeyler", "Metal yüzeyler", "Nemli zeminler (bariyerli tip)", "Spor sistem altları", "Kaplama öncesi tüm zeminler"],
      props:["Epoksi, poliüretan ve akrilik aileler", "Nem bariyerli seçenekler", "Dolgulu astar ile yüzey düzeltme", "Emici olmayan yüzeyler için özel tipler", "Sistem ömrünü belirleyen kritik katman"],
      products:[{"t": "Solventsiz PU Astar", "d": "Kapalı alanlarda güvenle kullanılan, kokusuz poliüretan astar."}, {"t": "1K Poliüretan Astar", "d": "Nemle kürlenen pratik astar; esnek üst katmanlarla uyumlu."}, {"t": "1K PU Şeffaf Astar", "d": "Emici yüzeylerde derine nüfuz eden şeffaf tip."}, {"t": "2K Epoksi Nem Bariyeri", "d": "Yüksek zemin neminde kaplamayı koruyan bariyer astar."}, {"t": "2K Epoksi Astar", "d": "Yüksek yapışma ve kimyasal direnç gereken zeminlerin standardı."}, {"t": "2K Epoksi Astar (Ekonomik)", "d": "Genel amaçlı beton astarlamada ekonomik çözüm."}] },
    macun:{ lead:"Derz, çatlak ve gözenekleri dolduran; katmanlar arasında sızdırmaz ve pürüzsüz geçiş sağlayan poliüretan dolgu ürünleri.",
      paras:["Yüksek ve düşük viskoziteli tipler ile elastik varyantlar, zemindeki harekete uyum sağlayarak dolgunun çatlamasını önler. Spor zemin sistemlerinde granül katmanının gözeneklerini kapatan ara katman olarak görev yapar.", "Doğru macun seçimi, üzerine gelen self-levelling katmanın sarfiyatını düşürür ve bitmiş yüzeyin kalitesini doğrudan etkiler."],
      areas:["Derz ve çatlak dolguları", "Spor zemin ara katmanları", "Kauçuk ve SBR yüzey gözenekleri", "Beton tamiratları", "Kaplama öncesi düzeltmeler"],
      props:["Yüksek / düşük viskoziteli ve elastik varyantlar", "Zemin hareketine uyum", "Gözenek kapatma ve sızdırmazlık", "Son kat sarfiyatını azaltır", "Poliüretan sistemlerle tam uyum"],
      products:[{"t": "PU Sealer", "d": "Spor sistemlerde granül gözeneklerini kapatan sızdırmazlık katmanı."}, {"t": "Elastik PU Macun", "d": "Hareketli zeminlerde çatlamadan çalışan elastik dolgu."}, {"t": "Düşük Viskoziteli PU Macun", "d": "İnce gözenek ve kılcal boşluklara nüfuz eden akıcı tip."}, {"t": "Yüksek Viskoziteli PU Macun", "d": "Derz ve geniş boşluklarda formunu koruyan yoğun tip."}] },
    suUrun:{ lead:"Çatıdan temele her detay için likit membranlar, astarlar ve enjeksiyon reçinelerinden oluşan eksiksiz su yalıtım portföyü.",
      paras:["UV'ye açık son katlar için alifatik, kaplama altı için ekonomik tipler; düşey yüzeyler için akmayan (tiksotropik) ve bitüm-poliüretan melez varyantlar sunulur. Emici ve emici olmayan yüzeyler için ayrı astarlar sistemi tamamlar.", "Basınçlı su sızıntılarında; suyla temasta genleşerek kapalı hücreli köpüğe dönüşen tek komponentli enjeksiyon reçineleri kullanılır. Bodrum, tünel, havuz ve altyapı sızıntılarını kaynağında durdurur."],
      areas:["Çatı ve teraslar", "Banyo, balkon ve ıslak hacimler", "Temel ve perde betonlar", "Su depoları ve havuzlar", "Tünel ve altyapı enjeksiyonları", "Gizli dere detayları"],
      props:["1K ve 2K likit membranlar", "Alifatik, UV dayanımlı son katlar", "Düşey yüzeyler için tiksotropik tipler", "Bitüm-poliüretan melez seçenekler", "Negatif yönden enjeksiyon çözümleri"],
      products:[{"t": "Likit Membran Ürün Ailesi", "d": "1K ve 2K poliüretan likit membranlar, astarlar ve alifatik son katlardan oluşan komple yalıtım seti."}, {"t": "Düşey Yüzey (Tiksotropik) Membran", "d": "Parapet ve duvarlarda akmadan uygulanan yoğun kıvamlı tip."}, {"t": "Enjeksiyon Reçinesi (Suyla Genleşen)", "d": "Basınçlı sızıntıları kaynağında durduran, suyla köpüğe dönüşen reçine."}] },
    elektrik:{ lead:"Trafodan kablo ekine, bobinajdan elektronik devrelere; boşluksuz izolasyon ve mekanik koruma sağlayan döküm reçineleri.",
      paras:["Dört kimyasal aile sunulur: hava kurumalı bobinaj vernikleri; orta ve yüksek gerilim için sert, kimyasala dayanıklı çift komponentli epoksiler; alçak ve orta gerilimde titreşim ve rezonans sesini sönümleyen sert/elastik poliüretanlar; izosiyanat içermeyen, kesilip yeniden doldurulabilen elastik hidrokarbon reçineler.", "Elastik tipler kablonun termal genleşmesine uyum sağlayarak çatlama ve kopmayı önler; hidrofobik yapılarıyla metal parçaları korozyona karşı korur. Şeffaf epoksi döküm reçineleri ise masa, obje ve dekoratif zemin uygulamalarında kullanılır."],
      areas:["Kuru tip transformatörler", "Kablo ek mufları", "Bobinaj ve motorlar", "Elektronik devre kapatma (potting)", "Dalgıç pompalar", "Dekoratif şeffaf döküm"],
      props:["Epoksi, poliüretan ve hidrokarbon aileler", "Boşluksuz döküm — şok ve vibrasyon dayanımı", "Elastik tiplerde tamir edilebilirlik", "Hidrofobik, korozyon önleyici yapı", "Şeffaf dekoratif döküm seçenekleri"],
      products:[{"t": "1K PU Bobinaj Verniği", "d": "Nemle kürlenen, her yüzeye uygulanabilen hava kurumalı vernik."}, {"t": "2K PU Döküm Reçinesi (Sert)", "d": "Alçak ve orta gerilimde boşluksuz izolasyon ve mekanik koruma."}, {"t": "2K PU Döküm Reçinesi (Elastik)", "d": "Titreşimi sönümleyen, termal harekete uyumlu esnek tip."}, {"t": "2K PU Döküm Reçinesi (Dolgulu)", "d": "Yüksek dolgulu, boyutsal kararlılığı artırılmış varyant."}, {"t": "2K Epoksi Döküm Reçinesi", "d": "Orta ve yüksek gerilim için sert, kimyasala dayanıklı reçine."}, {"t": "Hidrokarbon Reçine (Tamir Edilebilir)", "d": "İzosiyanat içermeyen, kesilip yeniden doldurulabilen kablo eki reçinesi."}, {"t": "2K PU Kablo Reçinesi", "d": "Kablo ek muflarında hızlı ve güvenli dolgu."}] },
    sporSis:{ lead:"Astar, elastik çekirdek, macun ve son kattan oluşan; amatör salonlardan profesyonel atletizm pistlerine ölçeklenen katmanlı spor zemin kurguları.",
      paras:["Kapalı salonlarda SBR rulo veya yerinde dökme SBR çekirdek üzerine poliüretan self-levelling kaplama ve UV dayanımlı son kat uygulanır; toplam kalınlık kullanım yoğunluğuna göre kurgulanır. Atletizm tarafında sandviç sistem (dökme SBR çekirdek + elastomer + serbest EPDM yüzey) ve tam dökme sistem; su geçirgen combined ve ekonomik sprey kaplama alternatifleriyle tamamlanır.", "Akrilik sistemler sert kortlarda resurfacer, cushion ve dolgulu son kat ile oyun hızının ayarlanmasına imkân verir. Saha çizgileri en son katman olarak uygulanır; yenileme yalnızca son kat boya ile düşük maliyetle yapılır."],
      areas:["Tenis kortları", "Basketbol ve voleybol", "Kapalı spor salonları", "Atletizm pistleri", "Koşu ve yürüyüş yolları", "Çocuk oyun alanları", "Fitness salonları", "Atış poligonu"],
      props:["Astar → elastik çekirdek → macun → son kat kurgusu", "Sandviç, tam dökme, combined ve sprey varyantları", "Darbe emici SBR/EPDM çekirdek", "Sararmayan alifatik üst kaplamalar", "Son kat ile ekonomik renk ve çizgi yenileme", "Açık ve kapalı alan uygulaması"] },
    endSis:{ lead:"İnce film boyadan epoksi harca; trafik yüküne, hijyen gereksinimine ve bütçeye göre kurgulanan endüstriyel zemin sistemleri.",
      paras:["Hafif trafik için ekonomik epoksi boya; orta ve ağır hizmet için astar, ara kat ve self-levelling kaplamadan oluşan sistemler; ağır yük ve bozuk zeminlerde şap gibi uygulanan epoksi harç takviyesi. Kaymazlık istenen alanlarda son kat tekstüre edilerek portakal kabuğu dokusu verilir.", "Asma kat, otel ve ofislerde yarı-esnek poliüretan sistemler yürüme sesini azaltır; dekoratif projelerde cips, renkli kum ve baskı ara malzemeleriyle butik yüzeyler üretilir. Hastane tipi alanlarda antibakteriyel ve iletken (ESD) seçenekler devreye girer."],
      areas:["Fabrika zeminleri", "Depo ve antrepo", "Laboratuvar ve soğuk hava deposu", "Gıda ve ilaç tesisleri", "Kapalı otopark", "Uçak hangarı", "Araç servisi ve oto yıkama", "Restoran, kafe ve bar", "Otel oda ve ortak alanları", "Mağaza, ofis ve fuar alanı", "Anaokulu ve kreş"],
      props:["Boya, self-levelling, tekstür ve harç kademeleri", "Kaymaz portakal kabuğu dokusu seçeneği", "Yürüme sesini azaltan yarı-esnek kurgu", "Dekoratif cips ve renkli kum uygulamaları", "Antibakteriyel ve ESD alternatifleri", "Tüm RAL renklerinde uygulama"] },
    suSis:{ lead:"Astar, detay güçlendirme, katlar hâlinde likit membran ve UV korumalı son kattan oluşan yekpare su yalıtım sistemi.",
      paras:["Islak hacimlerde köşe ve süzgeç detayları güçlendirme bandı ile bantlanır, en az iki kat likit membran uygulanır; sistem su testiyle doğrulandıktan sonra üzerine seramik kaplanır. Çatı ve terasta UV dayanımlı membran veya alifatik son kat kullanılır; büyük düz alanlarda rulo membran ile likit detay çözümü birlikte kurgulanabilir.", "Basınçlı sızıntılar ve negatif yön yalıtımı için suyla genleşen enjeksiyon reçineleri sistemin parçasıdır. Su yalıtımı yapı henüz inşa hâlindeyken planlanmalıdır; sonradan müdahale daha zor ve maliyetlidir."],
      areas:["Çatı ve teras", "Balkon", "Banyo ve ıslak hacim", "Temel ve perde beton", "Su deposu ve havuz", "Otopark döşemesi"],
      props:["Detay bantlama ve güçlendirme filesi", "Katlar hâlinde kontrollü film kalınlığı", "Su testi ile doğrulama", "UV'ye açık yüzeylerde alifatik son kat", "Rulo membran ile kombine çözüm", "Enjeksiyonla negatif yön yalıtımı"] }
  },

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
    mapTodo:"The map will appear here once the location is added.",
    close:"Close", keyFeatures:"Key Features", productRange:"Product Range",
    waLabel:"Chat on WhatsApp", waPrefill:"Hello, I would like to get information about your products."
  },

  hero:{
    kicker:"ADHESIVES • BINDERS • FLOORING • WATERPROOFING",
    title:"Advanced technology,\nproven quality\nin chemistry.",
    lead:"Through polyurethane, epoxy and acrylic based production processes we supply a broad product range from a single source — from adhesives to sports flooring, from waterproofing to electrical resins."
  },

  categories:[
    {title:"ADHESIVES", sub:"Parquet, PVC, rubber and synthetic turf", desc:"Predominantly polyurethane based, solvent-free adhesive solutions for parquet, PVC & vinyl, rubber, synthetic turf, filter and sandwich panel applications."},
    {title:"RUBBER BINDERS", sub:"Pour, press and stone binders", desc:"Moisture-curing prepolymer resins that bond SBR and EPDM granules together: aromatic and non-yellowing aliphatic options for wet-pour, press and stone carpet applications."},
    {title:"FLOOR COATINGS", sub:"Polyurethane, acrylic and epoxy", desc:"From self-levelling surfaces to anti-slip orange-peel texture; polyurethane, acrylic and epoxy based coating and paint systems. Full RAL colour range, high mechanical and chemical resistance."},
    {title:"WATERPROOFING", sub:"Liquid membranes and sealants", desc:"Liquid-membrane based, seamless waterproofing: from roofs and terraces to foundations, wet areas and water tanks; aliphatic top coats for UV-exposed surfaces."},
    {title:"PRIMERS & PUTTIES", sub:"Surface preparation and filling", desc:"Epoxy, polyurethane and acrylic primers for absorbent and non-absorbent substrates; moisture barriers, filled primers, joint and repair putties. The right primer determines the life of the system."},
    {title:"ELECTRICAL RESINS", sub:"Casting resins and transformer paints", desc:"Epoxy and polyurethane casting resins for transformers, cable joints and electronic circuits; void-free insulation, vibration damping and clear decorative casting applications."}
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
      "Alongside production, we run product development (R&D) and customer-specific adaptation as separate disciplines, recommending formulations that match the substrate, the climate and the operating conditions. We prioritise solvent-free, user- and environment-friendly formulations, and together with our application partners we prepare project-specific system build-ups."
    ]
  },

  systems:[
    { title:"Sports Flooring Systems",
      desc:"Polyurethane and acrylic based sports flooring systems, configured for indoor or outdoor use according to the specification, the budget and the substrate: a primer, a shock-absorbing SBR/EPDM elastic core, a pore-sealing putty layer, a self-levelling polyurethane coating and a UV-resistant top coat. Applied as liquids, they cure into a monolithic, seamless surface; colours and court markings can be renewed simply by re-applying the top coat.",
      areas:["Tennis courts","Basketball and volleyball","Indoor sports halls","Athletics tracks","Jogging and walking paths","Children's playgrounds","Fitness gyms","Shooting ranges"],
      props:["Layered build-up: primer → elastic core → putty → top coat","Shock-absorbing SBR/EPDM core for athlete safety","Non-yellowing, UV-resistant aliphatic top coats","Sandwich and wet-pour system alternatives","Low-cost colour renewal with a fresh top coat","Indoor and outdoor application"] },
    { title:"Industrial Flooring Systems",
      desc:"Polyurethane and epoxy based systems configured for the intended use: from smooth self-levelling surfaces to anti-slip orange-peel texture, from thin-film floor paints to epoxy mortar for heavy-load areas. The result is a seamless, hygienic, dust-free floor with high mechanical and chemical resistance.",
      areas:["Factory floors","Warehouses and bonded stores","Laboratories and cold storage","Food and pharmaceutical plants","Indoor car parks","Aircraft hangars","Vehicle service and car wash","Restaurants, cafés and bars","Hotel rooms and common areas","Shops, offices and exhibition halls","Nurseries and kindergartens"],
      props:["Self-levelling or anti-slip textured finish options","Available in all RAL colours","Antibacterial and conductive (ESD) alternatives","Epoxy mortar reinforcement for heavy loads","Seamless, dust-free, easy-clean surface","Logos, markings and lines can be applied"] },
    { title:"Waterproofing System",
      desc:"Seamless, monolithic waterproofing systems based on liquid membranes: a primer matched to the substrate, reinforcement tape at corners and drain details, liquid membrane applied in layers, and an aliphatic top coat on UV-exposed surfaces. The application is verified with a water test.",
      areas:["Roofs and terraces","Balconies","Bathrooms and wet areas","Foundations and retaining walls","Water tanks and pools","Car park decks"],
      props:["Seamless monolithic coating","Full adaptation to complex details","UV-resistant aliphatic top coat","Detail taping and reinforcement solutions","Injection resins for pressurised leaks","Can be tiled or overcoated"] }
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
    "INDUSTRIAL POLYURETHANE AND EPOXY FLOORS","EPOXY CASTING APPLICATIONS"],

  details:{
    uygSporPu:{"title": "Polyurethane Sports Flooring", "lead": "Shock-absorbing, seamless polyurethane sports floors from indoor halls to fitness areas.", "paras": ["The system is built with an SBR core, putty and self-levelling polyurethane over a primer; court lines and colour complete it with the finish coat. Thickness follows the intensity of use."]},
    uygParke:{"title": "Parquet Flooring Application", "lead": "Seamless, silent installation of solid and laminate parquet with elastic polyurethane adhesives.", "paras": ["After moisture testing and selecting the right primer and notched trowel, the parquet is laid onto elastic adhesive; creaking and separation are prevented, and underfloor heating is safe."]},
    uygAkrilik:{"title": "Acrylic Sports Floors", "lead": "Acrylic coating applications with adjustable pace, from tennis courts to multi-purpose fields.", "paras": ["Resurfacer, cushion layers and the filled top coat are applied in sequence; sand content sets the court pace and line paint completes the job. Freeze-thaw resistance gives long outdoor life."]},
    uygKaucuk:{"title": "Rubber Application", "lead": "Installation of rubber tiles and rolls in sports halls, nurseries and industrial areas.", "paras": ["After surface preparation the two-component polyurethane adhesive is combed on, tiles are laid staggered and pressed with a roller; the bond cures in about eight hours."]},
    uygAtletizm:{"title": "Athletics Track", "lead": "Professional running track applications with sandwich and full-pour systems.", "paras": ["An elastomer and EPDM surface is applied over a paver-laid SBR-binder core; the result is a drainage-compatible track surface with grip in all weather."]},
    uygCim:{"title": "Turf Adhesive Applications", "lead": "Professional seam-focused bonding for pitches and landscape turf.", "paras": ["Strips are centred on the seaming tape, adhesive is spread evenly across the tape and the joint is protected throughout curing; seams stay invisible and the field is not opened early."]},
    uygTas:{"title": "Decorative Stone Application", "lead": "Water-permeable, decorative stone-carpet surfaces from natural granules and clear binder.", "paras": ["Granules and binder are mixed homogeneously and laid by trowel; once cured, the surface is slip-resistant, maintenance-free and rain-permeable. The choice for pool surrounds and walkways."]},
    uygElastomer:{"title": "Elastomer Sandwich System", "lead": "A two-layer sports floor build-up of elastic core, elastomer and coloured EPDM surface.", "paras": ["EPDM granules are broadcast while the elastomer layer is still wet; energy return and deformation values are tuned to professional standards."]},
    uygSandvic:{"title": "Sandwich Sports Flooring", "lead": "Sandwich system applications for stadium and university tracks.", "paras": ["Correct application and regular maintenance give a long service life; worn areas are renewed with local repairs and colour schemes follow the project."]},
    uygElektrik:{"title": "Electrical Resins", "lead": "Void-free casting applications in transformers, cable joints and electronic components.", "paras": ["The resin is poured at a flow that fully envelops the component; once cured it forms a moisture-proof insulation block resistant to shock and vibration."]},
    uygEpdm:{"title": "EPDM Granule Application", "lead": "Safe, patterned floors for playgrounds and sports fields with coloured EPDM granules.", "paras": ["The EPDM-binder mix is spread and levelled over an SBR base; layer thickness follows fall height, and 24 colours allow free pattern design."]},
    uygSu:{"title": "Waterproof Coating", "lead": "Seamless liquid-membrane waterproofing applications from roofs to wet areas.", "paras": ["Corner and drain details are taped, the membrane is applied in layers and verified with a water test; UV-exposed surfaces are protected with an aliphatic finish."]},
    uygEndustri:{"title": "Industrial Polyurethane and Epoxy Floors", "lead": "Hygienic, load-bearing seamless floor applications in factories, warehouses and car parks.", "paras": ["After blasting and priming, a self-levelling or textured coating is applied; the result is a monolithic surface resistant to forklift traffic, chemicals and intensive cleaning."]},
    uygDokum:{"title": "Epoxy Casting Applications", "lead": "Tables, objects and decorative surface castings with clear epoxy resin.", "paras": ["The pour is worked from the centre outwards and air bubbles release on their own; depth is built in layers after gelling, and sanding plus polishing bring crystal gloss."]},
    parke:{ lead:"A predominantly polyurethane based adhesive family that bonds solid, laminate and engineered parquet permanently to screed and concrete substrates.",
      paras:["The portfolio is built on three chemical families: solvent-free two-component (2K) polyurethanes suitable for every parquet type; moisture-curing one-component STPE hybrids that wipe off without staining while fresh; and water-based PVAc glues for wood and laminate work. The right choice depends on the dimensional movement of the wood, the absorbency of the screed and the working time required.", "The thixotropic body prevents vertical slump, while the elastic bond stops creaking and gradual separation of the boards. The products are compatible with underfloor heating. Before application, substrate moisture must be measured, the correct notched trowel selected and the open time never exceeded."],
      areas:["Solid and laminate parquet", "Engineered wood flooring", "Underfloor-heated substrates", "Homes and offices", "Hotels and retail spaces", "Sports hall timber floors"],
      props:["Solvent-free 2K PU, 1K STPE hybrid and PVAc options", "Elastic bond that prevents creaking and separation", "Thixotropic — no slump on vertical surfaces", "Compatible with underfloor heating", "Formulations for different climate conditions"],
      products:[{"t": "Standard 2K Polyurethane Parquet Adhesive", "d": "Solvent-free two-component polyurethane for every parquet type; high final strength with a balanced working time."}, {"t": "Thixotropic 2K Polyurethane Parquet Adhesive", "d": "Its high-body consistency holds the trowel ridges and does not run on slopes; controlled, clean spreading for wide-format parquet."}, {"t": "Flexible 2K Polyurethane Parquet Adhesive", "d": "A permanently elastic bond that follows the dimensional movement of wood; first choice for solid, wide-plank and underfloor-heated floors."}, {"t": "Extra-Flexible 2K Polyurethane Parquet Adhesive", "d": "High elongation absorbs stress on difficult, moving substrates and cuts sound bridges for a quiet floor."}, {"t": "Reinforced 2K Polyurethane Parquet Adhesive", "d": "A reinforced grip profile for heavy traffic and demanding substrates, such as sports hall timber floors."}, {"t": "1K STPE Hybrid Parquet Adhesive", "d": "Moisture-curing, no-mix one-component hybrid; applied without primer on suitable concrete, wipes off without staining while fresh."}, {"t": "1K PVAc Wood Glue (D3)", "d": "Water-based wood and laminate glue in water-resistance class D3; fast, clean and odourless for assembly and laminating work."}] },
    pvc:{ lead:"A water-based acrylic adhesive that fixes flexible PVC, vinyl, linoleum, marley and backed carpet floorings onto absorbent substrates.",
      paras:["The one-component, solvent-free formulation is odourless, allowing safe work in enclosed spaces such as hospitals, schools and homes. High initial tack and a long working window leave room for adjustment on large areas.", "The adhesive is spread evenly with a notched trowel, the covering is laid within minutes and pressed with a roller for full surface contact. On underfloor-heated screeds the system is switched off before application and restarted gradually after installation. Floor-covering adhesive must never be confused with rigid PVC pipe cement."],
      areas:["Hospitals and laboratories", "Schools and nurseries", "Residential buildings", "Malls and shops", "Offices", "Homogeneous and heterogeneous PVC floors"],
      props:["Water-based, one-component acrylic — solvent-free", "Economical application with low consumption", "High initial tack and final strength", "Odourless work in enclosed spaces", "Compatible with underfloor-heating protocol"],
      products:[{"t": "Water-Based Acrylic Floor-Covering Adhesive", "d": "One-component, acrylic based and solvent-free. Easy to apply, with high initial and final adhesion over a long working window. Used to bond PVC, PU and latex floorings, marley, marmoleum, linoleum and backed carpets to concrete and screed."}] },
    kaucuk:{ lead:"Two-component polyurethane adhesives that bond rubber tiles and rolls to the substrate, and synthetic turf strips to each other and to the seaming tape.",
      paras:["The solvent-free 2K polyurethane build keeps its bond strength for years, unaffected by daylight, water or outdoor exposure. Rubber tiles and rolls are bonded to concrete, MDF, chipboard and metal — and where needed to ceramic, granite and marble.", "In synthetic turf the critical zone is not the open field but the seams and edge returns: the adhesive is spread evenly on the seaming tape, the strips are centred and the joint is protected throughout curing. A green colour option keeps the seams invisible."],
      areas:["Artificial turf and football pitches", "Rubber tile and roll floors", "Sports halls", "Children's playgrounds", "Landscape and decorative turf", "Pool surrounds"],
      props:["Two-component, solvent-free polyurethane", "UV, water and outdoor resistance", "Fully compatible with seaming tape", "Thixotropic — no run on sloped surfaces", "Flexible and economical variants"],
      products:[{"t": "Flexible 2K PU Rubber Adhesive", "d": "A solvent-free, flexible two-component system bonding rubber tiles and rolls to concrete, wood and metal."}, {"t": "Economical 2K PU Rubber Adhesive", "d": "A balanced-grip two-component variant offering cost advantage on large areas."}, {"t": "2K PU Synthetic Turf Adhesive", "d": "A green adhesive bonding turf strips to the seaming tape; resistant to water and outdoor exposure."}, {"t": "Economical Synthetic Turf Adhesive", "d": "An economical two-component solution for pitches and landscaping."}, {"t": "Seaming Tape", "d": "The woven tape that joins synthetic turf strips from below; used together with the adhesive."}, {"t": "Rubber Tiles", "d": "Flexible, wear-resistant ready floor tiles in various sizes and thicknesses."}, {"t": "SBR Rubber Roll", "d": "The shock-absorbing base layer of sports floors; also used under screed and for acoustics."}] },
    filtre:{ lead:"Industrial polyurethane systems that hold filter media, frame and end caps together — and form gaskets in place where required.",
      paras:["Two distinct jobs are covered by two distinct product families: media potting aims for a strong, repeatable bond, while gasket products deliver controlled filling, shape stability and sealing. Slow-curing grades suit manual pouring; fast-curing and non-sag (thixotropic) grades suit automated dosing lines.", "Dosing method, viscosity, working time, service temperature and the fluid in contact drive product selection. Whenever the media, frame or raw-material batch changes, a small-scale trial is recommended before series production."],
      areas:["Air filters", "Automotive filters", "Industrial filter cartridges", "Filter gaskets", "Automated dosing lines"],
      props:["Separate products for media potting and gaskets", "Curing speeds for manual and automated lines", "Non-sag (thixotropic) option", "Repeatable dosing stability", "Compatible with metal and plastic frames"],
      products:[{"t": "Fast-Curing Filter Adhesive", "d": "A polyurethane system developed for short cycle times on automated dosing lines."}, {"t": "Manual-Pour Filter Adhesive", "d": "A media-potting grade with a wide working window for manual dosing."}, {"t": "Automated-Dosing Filter Adhesive", "d": "A grade delivering repeatable dosing stability on production lines."}, {"t": "Fast-Grade Filter Adhesive", "d": "A short gel-time variant for high line speeds."}, {"t": "Standard Filter Adhesive", "d": "A general-purpose media bonding solution for air and automotive filters."}, {"t": "Thixotropic / Gasket Grade", "d": "A non-sag filling grade forming gaskets in place with high shape stability."}] },
    endYap:{ lead:"Polyurethane systems that bond insulation panels to GRP, metal and alternative surfaces in sandwich panels and vehicle bodies.",
      paras:["One- and two-component panel adhesives for refrigerated trucks and commercial vehicle bodies are complemented by low-viscosity, fast-curing grades for machine application. Separate polyurethane solutions bond rubber sheets to chipboard or metal.", "For food-transport vehicles, antibacterial epoxy floor coatings — with high adhesion and mechanical performance, resistant to food acids and many chemicals — complete the system. All products are solvent-free."],
      areas:["Sandwich panel production", "Refrigerated vehicle bodies", "Commercial vehicle floors", "Cold-room panels", "Industrial assembly lines"],
      props:["1K and 2K polyurethane options", "Low viscosity for machine application", "Fast-curing variants", "Antibacterial epoxy floor complement", "Solvent-free formulation"],
      products:[{"t": "1K PU Panel Adhesive", "d": "A moisture-curing one-component system for practical application on panels and vehicle bodies."}, {"t": "2K PU Panel Adhesive", "d": "A high-strength two-component system bonding insulation panels to GRP and metal."}, {"t": "2K Machine-Applied Panel Adhesive", "d": "A low-viscosity, fast-curing grade for automated application lines."}] },
    dokme:{ lead:"Moisture-curing, one-component polyurethane prepolymers that turn SBR and EPDM granules into a monolithic, flexible floor on site.",
      paras:["Mixed with granules and spread on the surface, the binder cures into a water-permeable, shock-absorbing, seamless layer. Large areas are laid with a paver (finisher); small areas by hand. Aromatic grades are the economical choice for black SBR and dark systems; non-yellowing aliphatic / UV-stable grades are recommended for coloured EPDM.", "Too little binder weakens the bond; too much hardens the surface. Mixing ratio and granule cleanliness decide the outcome, and a small trial is advised with every new granule batch."],
      areas:["Children's playgrounds", "Jogging and walking paths", "Sports floors", "Schoolyards", "Parks and landscaping", "Decorative floors"],
      props:["Moisture-curing 1K prepolymer", "Aromatic and aliphatic (non-yellowing) options", "Water-permeable, seamless flexible surface", "Application by paver or by hand", "Full compatibility with EPDM and SBR granules"],
      products:[{"t": "Coloured Pour Binder", "d": "A pigmented binder preserving colour consistency in coloured granule systems."}, {"t": "Aromatic Pour Binder (Low Viscosity)", "d": "An easy-working, fast-wetting economical aromatic grade."}, {"t": "Aromatic Pour Binder", "d": "The standard wet-pour binder for black SBR and dark systems."}, {"t": "Aliphatic EPDM Binder (UV-Stable)", "d": "A premium non-yellowing grade for coloured EPDM surfaces."}, {"t": "Wet-Pour System Binder", "d": "A general-purpose binder for playground and sports floor pour systems."}] },
    press:{ lead:"Binder resins developed for moulding rubber tiles, kerbs and technical parts under pressure and heat.",
      paras:["The granule-binder mix is pressed in the mould into dense, shape-retaining products. Mould temperature, cycle time and granule structure determine the result; keeping these parameters constant guarantees part integrity in series production.", "Pour and press binders must not be substituted for each other: working time, surface quality and strength are engineered differently for the two processes. Granule quality defines elasticity; granule size defines consumption."],
      areas:["Rubber tile production", "Rubber kerbs and ramps", "Stable and paddock mats", "Technical rubber parts", "In-plant series production"],
      props:["Formulated specifically for the moulding process", "High bond strength at low consumption", "Repeatability with constant cycle parameters", "Dense, shape-retaining product structure", "Compatible with SBR and EPDM granules"],
      products:[{"t": "Standard Press Binder", "d": "A mould binder with balanced cycle times for rubber tile and kerb production."}, {"t": "Fast-Cycle Press Binder", "d": "Shortened press times for high-capacity production lines."}, {"t": "Economical Press Binder", "d": "A cost-advantage grade for standard parts."}, {"t": "High-Strength Press Binder", "d": "A reinforced formulation for heavy-traffic technical parts."}] },
    tas:{ lead:"Resins that bind natural and coloured stone granules with a clear film, creating the decorative, water-permeable surfaces known as stone carpet.",
      paras:["Three variants are offered: one-component aliphatic, two-component aliphatic and two-component epoxy. Aliphatic grades do not yellow under UV and are the first choice outdoors; the epoxy grade is the economical alternative for interiors and UV-free areas.", "The cured surface is slip-resistant, unaffected by wind, resistant to water and most chemicals, and serves light traffic for many years without special maintenance."],
      areas:["Walkways and passages", "Parks, gardens and botanical areas", "Pool and pond surrounds", "Balconies and terraces", "Hotel and gallery floors", "Decorative interiors"],
      props:["Clear film that reveals the stone texture", "Non-yellowing aliphatic grades", "Water-permeable, slip-resistant surface", "1K and 2K application options", "Maintenance-free durability"],
      products:[{"t": "2K Aliphatic Stone Binder", "d": "A non-yellowing clear two-component system — first choice for outdoor stone carpet."}, {"t": "2K Epoxy Stone Binder", "d": "An economical, high-strength grade for interiors and UV-free areas."}, {"t": "1K Aliphatic Stone Binder", "d": "Practical one-component application for balconies, terraces and walkways."}] },
    epdm:{ lead:"UV-stable, vividly coloured granules produced from synthetic EPDM rubber — the raw material of flexible, safe floors with polyurethane binders.",
      paras:["A homogeneous grain structure and a wide colour palette allow free design, from patterned playgrounds to multicoloured sports fields. Adjusting granule size and layer thickness produces different fall-protection levels; on playgrounds the thickness follows the EN 1177 critical fall height approach.", "Recycled SBR granules work alongside EPDM as the economical elastic base layer of these systems."],
      areas:["Children's playgrounds", "Running tracks and tartan surfaces", "Schoolyards", "Sports fields", "Pool surrounds", "Gymnastics and exercise areas"],
      props:["Lasting colours through UV stability", "Non-toxic, slip-resistant surface", "Shock-absorbing elastic structure", "Rich colour palette and pattern options", "Economical build-up with SBR base layer"],
      products:[{"t": "EPDM Granules — 24 Standard Colours", "d": "UV-stable, homogeneous coloured granules; browse the full palette in the gallery."}, {"t": "SBR Granules (Recycled)", "d": "The economical, shock-absorbing black base-layer granule of the systems."}] },
    puZemin:{ lead:"Polyurethane based coating and paint systems for floors where elasticity, impact absorption and UV resistance are decisive.",
      paras:["Rigid self-levelling grades create smooth, hygienic surfaces in factories, warehouses and cold stores; flexible grades absorb impact in sports halls, shooting ranges and nurseries, reducing injury risk. The system is completed with putty, an EPDM top layer and a UV-resistant finish coat.", "Compared with the rigid nature of epoxy, polyurethane offers accommodation of thermal movement, vibration damping and reduced footfall noise — with higher resistance to UV and outdoor weathering."],
      areas:["Factories and warehouses", "Cold stores", "Sports halls and shooting ranges", "Car parks and outdoor areas", "Offices, shops and showrooms", "Wet areas"],
      props:["Rigid or flexible system build-up", "UV-resistant, non-yellowing finish coats", "Accommodation of thermal stress", "Reduced footfall noise", "Antibacterial and flame-retardant options"],
      products:[{"t": "2K PU Floor Paint (UV)", "d": "The colour and protection layer of the systems; a non-yellowing finish."}, {"t": "2K PU Self-Levelling Coating (Rigid)", "d": "A smooth, high-resistance coating for factories and warehouses."}, {"t": "2K PU Self-Levelling Coating (Flexible)", "d": "A shock-absorbing grade for sports halls and comfort areas."}] },
    akZemin:{ lead:"Water-based, solvent-free acrylic sports coatings applied in successive layers over concrete and asphalt, with outstanding UV resistance.",
      paras:["The system consists of a resurfacer, shock-absorbing cushion layers, a filled top coat and line paint. By adjusting sand content and the number of layers, the court's coefficient of friction — its pace — is customised.", "Freeze-thaw resistance and high colour retention give long outdoor life; indoors the system serves every level from amateur to professional."],
      areas:["Tennis courts", "Basketball and volleyball courts", "Multi-purpose courts", "Running and cycling tracks", "School and municipal facilities"],
      props:["Water-based, environmentally friendly system", "Adjustable court pace (friction)", "UV and freeze-thaw resistance", "Strong adhesion to concrete and asphalt", "Low maintenance cost, wide colour range"],
      products:[{"t": "Acrylic Finish / Sealer", "d": "A final coat adding gloss and protection to acrylic surfaces."}, {"t": "Acrylic Cushion (Thick)", "d": "The thick shock-absorbing cushion layer of courts."}, {"t": "Acrylic Cushion (Thin)", "d": "A thin cushion layer for fine pace tuning."}, {"t": "Premium Acrylic Resurfacer", "d": "A premium leveller filling surface defects and preparing the base."}, {"t": "Acrylic Resurfacer", "d": "The standard surface-correction layer over concrete and asphalt."}, {"t": "Acrylic Filled Top Coat", "d": "The coloured, sand-filled coat that sets the friction coefficient."}, {"t": "Premium Acrylic Concentrated Paint", "d": "A high-pigment, long-life colour layer."}, {"t": "Acrylic Concentrated Paint", "d": "An economical concentrate for court colouring."}, {"t": "1K PU Primer", "d": "The concrete primer applied before acrylic systems."}, {"t": "Acrylic Primer", "d": "A water-based primer securing adhesion of acrylic layers."}, {"t": "Acrylic Line Paint", "d": "A high-opacity paint for court markings."}] },
    epZemin:{ lead:"From thin-film paint to self-levelling coatings and epoxy mortar: seamless floor systems focused on hygiene and mechanical strength.",
      paras:["Self-levelling grades create smooth, glossy floors; textured (orange-peel) grades create slip-resistant, economical ones. The dust-free, monolithic structure leaves no room for bacteria, supporting hygiene in hospitals, food plants and laboratories. Conductive (ESD) versions can be produced on request.", "New concrete needs roughly three weeks of curing, priming and a moisture check before application. Because epoxy has limited UV resistance, sun-exposed areas are protected with a UV-stable finish coat, and heavy-load areas are reinforced with epoxy mortar."],
      areas:["Factories and production plants", "Warehouses and bonded stores", "Hospitals and laboratories", "Food and pharmaceutical plants", "Indoor car parks", "Industrial kitchens"],
      props:["Self-levelling, paint and textured options", "High mechanical and chemical resistance", "Hygienic, dust-free seamless surface", "Conductive (ESD) versions available", "Application in all RAL colours"],
      products:[{"t": "Epoxy Textured Coating (Orange Peel)", "d": "An anti-slip, economical and decorative textured finish."}, {"t": "Epoxy Floor Paint", "d": "A thin-film protective paint for light and medium traffic."}, {"t": "Epoxy Self-Levelling Coating", "d": "A smooth, glossy, high-resistance self-levelling coat."}] },
    astar:{ lead:"The first layer: a bonding bridge between coating and concrete that balances absorbency, stops dusting and forms a moisture barrier where needed.",
      paras:["Epoxy primers suit floors demanding high adhesion and chemical resistance; polyurethane primers pair with flexible top layers, acrylic primers with acrylic sports systems. Filled primers level out surface defects, preparing a smooth base.", "Substrate moisture is the first check: up to about 3% a standard primer suffices, between 3–7% a moisture-barrier epoxy primer is mandatory, and above that no application is made. Skipping the primer leads to early peeling and blistering."],
      areas:["Concrete and screed surfaces", "Metal surfaces", "Damp substrates (barrier grade)", "Sports system bases", "All floors before coating"],
      props:["Epoxy, polyurethane and acrylic families", "Moisture-barrier options", "Surface correction with filled primer", "Special grades for non-absorbent surfaces", "The critical layer that defines system life"],
      products:[{"t": "Solvent-Free PU Primer", "d": "An odourless polyurethane primer safe for enclosed spaces."}, {"t": "1K PU Primer", "d": "A practical moisture-curing primer compatible with flexible top layers."}, {"t": "1K PU Clear Primer", "d": "A clear, deep-penetrating grade for absorbent substrates."}, {"t": "2K Epoxy Moisture Barrier", "d": "A barrier primer protecting the coating on damp substrates."}, {"t": "2K Epoxy Primer", "d": "The standard for floors demanding high adhesion and chemical resistance."}, {"t": "2K Epoxy Primer (Economical)", "d": "An economical solution for general concrete priming."}] },
    macun:{ lead:"Polyurethane filling products that close joints, cracks and pores, creating a sealed, smooth transition between layers.",
      paras:["High- and low-viscosity grades and elastic variants follow the movement of the floor, preventing the filling from cracking. In sports floor systems the putty acts as the intermediate layer that seals the pores of the granule core.", "The right putty lowers the consumption of the self-levelling layer above it and directly improves the quality of the finished surface."],
      areas:["Joint and crack filling", "Sports floor intermediate layers", "Rubber and SBR surface pores", "Concrete repairs", "Pre-coating corrections"],
      props:["High/low-viscosity and elastic variants", "Accommodation of floor movement", "Pore sealing and watertightness", "Reduces top-coat consumption", "Full compatibility with PU systems"],
      products:[{"t": "PU Sealer", "d": "The sealing layer that closes granule pores in sports systems."}, {"t": "Elastic PU Putty", "d": "An elastic filler that works without cracking on moving floors."}, {"t": "Low-Viscosity PU Putty", "d": "A fluid grade penetrating fine pores and capillaries."}, {"t": "High-Viscosity PU Putty", "d": "A dense grade holding its shape in joints and wide gaps."}] },
    suUrun:{ lead:"A complete waterproofing portfolio of liquid membranes, primers and injection resins for every detail from roof to foundation.",
      paras:["Aliphatic grades serve UV-exposed finish coats and economical grades go under tiling; non-sag (thixotropic) types handle vertical surfaces and bitumen-polyurethane hybrids extend the range. Separate primers for absorbent and non-absorbent substrates complete the system.", "Pressurised leaks are stopped with one-component injection resins that expand on contact with water into closed-cell foam — sealing basement, tunnel, pool and infrastructure leaks at the source."],
      areas:["Roofs and terraces", "Bathrooms, balconies and wet areas", "Foundations and retaining walls", "Water tanks and pools", "Tunnel and infrastructure injection", "Concealed gutter details"],
      props:["1K and 2K liquid membranes", "Aliphatic, UV-resistant finish coats", "Thixotropic grades for vertical surfaces", "Bitumen-polyurethane hybrid options", "Negative-side injection solutions"],
      products:[{"t": "Liquid Membrane Product Family", "d": "A complete waterproofing set of 1K/2K PU liquid membranes, primers and aliphatic finish coats."}, {"t": "Vertical-Surface (Thixotropic) Membrane", "d": "A high-body grade applied without sagging on parapets and walls."}, {"t": "Injection Resin (Water-Reactive)", "d": "A resin that foams on contact with water, stopping pressurised leaks at the source."}] },
    elektrik:{ lead:"Casting resins providing void-free insulation and mechanical protection — from transformers and cable joints to windings and electronic circuits.",
      paras:["Four chemical families are offered: air-drying winding varnishes; hard, chemical-resistant two-component epoxies for medium and high voltage; rigid or elastic polyurethanes that damp vibration and resonance noise at low and medium voltage; and isocyanate-free elastic hydrocarbon resins that can be cut open and refilled.", "Elastic grades follow the thermal expansion of the cable, preventing cracking and separation, and their hydrophobic nature protects metal parts against corrosion. Clear epoxy casting resins also serve tables, objects and decorative floor applications."],
      areas:["Dry-type transformers", "Cable joints", "Windings and motors", "Electronic potting", "Submersible pumps", "Decorative clear casting"],
      props:["Epoxy, polyurethane and hydrocarbon families", "Void-free casting — shock and vibration resistance", "Repairability of elastic grades", "Hydrophobic, corrosion-preventing structure", "Clear decorative casting options"],
      products:[{"t": "1K PU Winding Varnish", "d": "A moisture-curing, air-drying varnish applicable to any surface."}, {"t": "2K PU Casting Resin (Rigid)", "d": "Void-free insulation and mechanical protection at low and medium voltage."}, {"t": "2K PU Casting Resin (Elastic)", "d": "A flexible grade damping vibration and following thermal movement."}, {"t": "2K PU Casting Resin (Filled)", "d": "A highly filled variant with increased dimensional stability."}, {"t": "2K Epoxy Casting Resin", "d": "A hard, chemical-resistant resin for medium and high voltage."}, {"t": "Hydrocarbon Resin (Repairable)", "d": "An isocyanate-free cable-joint resin that can be cut open and refilled."}, {"t": "2K PU Cable Resin", "d": "Fast, safe filling of cable joints."}] },
    sporSis:{ lead:"Layered sports floor build-ups — primer, elastic core, putty and finish — scaling from amateur halls to professional athletics tracks.",
      paras:["Indoors, a polyurethane self-levelling coat and UV-resistant finish are applied over an SBR roll or cast-in-place SBR core; total thickness follows the intensity of use. For athletics, the sandwich system (cast SBR core + elastomer + broadcast EPDM surface) and the full-pour system are complemented by the water-permeable combined build-up and the economical spray coating.", "On hard courts, acrylic systems allow the pace of play to be tuned through resurfacer, cushion layers and a filled top coat. Court markings are always the final layer; renewal takes nothing more than a fresh finish coat."],
      areas:["Tennis courts", "Basketball and volleyball", "Indoor sports halls", "Athletics tracks", "Jogging and walking paths", "Children's playgrounds", "Fitness gyms", "Shooting ranges"],
      props:["Primer → elastic core → putty → finish build-up", "Sandwich, full-pour, combined and spray variants", "Shock-absorbing SBR/EPDM core", "Non-yellowing aliphatic top coats", "Economical colour and marking renewal", "Indoor and outdoor application"] },
    endSis:{ lead:"Industrial floor systems configured by traffic load, hygiene requirement and budget — from thin-film paint to epoxy mortar.",
      paras:["Economical epoxy paint for light traffic; primer, body coat and self-levelling systems for medium and heavy duty; and screed-like epoxy mortar reinforcement for heavy loads and damaged substrates. Where slip resistance matters, the finish is textured into an orange-peel skin.", "Semi-flexible polyurethane systems reduce footfall noise on mezzanines, hotels and offices; decorative projects use flakes, coloured quartz and printed interlayers for one-off surfaces. Hospital-grade areas call for the antibacterial and conductive (ESD) options."],
      areas:["Factory floors", "Warehouses and bonded stores", "Laboratories and cold storage", "Food and pharmaceutical plants", "Indoor car parks", "Aircraft hangars", "Vehicle service and car wash", "Restaurants, cafés and bars", "Hotel rooms and common areas", "Shops, offices and exhibition halls", "Nurseries and kindergartens"],
      props:["Paint, self-levelling, texture and mortar tiers", "Slip-resistant orange-peel option", "Semi-flexible build-up that dampens footfall", "Decorative flakes and coloured quartz", "Antibacterial and ESD alternatives", "Application in all RAL colours"] },
    suSis:{ lead:"A monolithic waterproofing system built from primer, detail reinforcement, layered liquid membrane and a UV-protected finish coat.",
      paras:["In wet areas, corner and drain details are taped with reinforcement band and at least two coats of liquid membrane are applied; after verification with a water test, tiling follows. On roofs and terraces a UV-resistant membrane or aliphatic finish is used, and on large flat areas sheet membrane can be combined with liquid detailing.", "Water-reactive injection resins handle pressurised leaks and negative-side waterproofing. Waterproofing should be planned while the building is still under construction; later intervention is harder and costlier."],
      areas:["Roofs and terraces", "Balconies", "Bathrooms and wet areas", "Foundations and retaining walls", "Water tanks and pools", "Car park decks"],
      props:["Detail taping and reinforcement mesh", "Controlled film thickness in layers", "Verification by water test", "Aliphatic finish on UV-exposed surfaces", "Combined solution with sheet membrane", "Negative-side waterproofing by injection"] }
  },

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
    mapTodo:"La carte s'affichera ici une fois l'adresse renseignée.",
    close:"Fermer", keyFeatures:"Caractéristiques clés", productRange:"Gamme de produits",
    waLabel:"Écrire sur WhatsApp", waPrefill:"Bonjour, je souhaite obtenir des informations sur vos produits."
  },

  hero:{
    kicker:"ADHÉSIFS • LIANTS • SOLS • ÉTANCHÉITÉ",
    title:"Technologie de pointe,\nqualité éprouvée\nen chimie.",
    lead:"Grâce à nos procédés à base de polyuréthane, d'époxy et d'acrylique, nous proposons une large gamme depuis une source unique — des adhésifs aux sols sportifs, de l'étanchéité aux résines électriques."
  },

  categories:[
    {title:"ADHÉSIFS", sub:"Parquet, PVC, caoutchouc et gazon synthétique", desc:"Solutions adhésives majoritairement à base de polyuréthane, sans solvant, pour parquet, sols PVC & vinyle, caoutchouc, gazon synthétique, filtres et panneaux sandwich."},
    {title:"LIANTS", sub:"Liants coulés, pressés et pour pierre", desc:"Résines prépolymères réticulant à l'humidité qui lient les granulés SBR et EPDM : options aromatiques et aliphatiques non jaunissantes pour les applications coulées (wet-pour), pressées et moquette de pierre."},
    {title:"REVÊTEMENTS DE SOL", sub:"Polyuréthane, acrylique et époxy", desc:"Des surfaces autolissantes à la texture antidérapante « peau d'orange » ; systèmes de revêtement et de peinture à base de polyuréthane, d'acrylique et d'époxy. Toute la gamme RAL, haute résistance mécanique et chimique."},
    {title:"ÉTANCHÉITÉ", sub:"Membranes liquides et mastics", desc:"Étanchéité sans joint à base de membrane liquide : des toits et terrasses aux fondations, pièces humides et réservoirs ; finitions aliphatiques pour les surfaces exposées aux UV."},
    {title:"PRIMAIRES & MASTICS", sub:"Préparation et rebouchage des supports", desc:"Primaires époxy, polyuréthane et acryliques pour supports absorbants ou non ; barrières anti-humidité, primaires chargés, mastics de joint et de réparation. Le bon primaire détermine la durée de vie du système."},
    {title:"RÉSINES ÉLECTRIQUES", sub:"Résines de coulée et peintures transformateur", desc:"Résines de coulée époxy et polyuréthane pour transformateurs, jonctions de câbles et circuits électroniques ; isolation sans vide, amortissement des vibrations et coulées décoratives transparentes."}
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
      "Parallèlement à la production, nous menons le développement produit (R&D) et l'adaptation aux besoins spécifiques des clients comme des disciplines distinctes, en recommandant des formulations adaptées au support, au climat et aux conditions d'exploitation. Nous privilégions des formulations sans solvant, respectueuses de l'utilisateur et de l'environnement, et préparons avec nos partenaires applicateurs des systèmes conçus pour chaque projet."
    ]
  },

  systems:[
    { title:"Systèmes de sols sportifs",
      desc:"Systèmes de sols sportifs à base de polyuréthane et d'acrylique, configurés pour l'intérieur ou l'extérieur selon le cahier des charges, le budget et le support : un primaire, un cœur élastique SBR/EPDM absorbant les chocs, une couche de mastic obturant les pores, un revêtement polyuréthane autolissant et une finition résistante aux UV. Appliqués à l'état liquide, ils forment après séchage une surface monolithique sans joint ; couleurs et tracés de jeu se renouvellent simplement en refaisant la couche de finition.",
      areas:["Courts de tennis","Basket-ball et volley-ball","Salles de sport couvertes","Pistes d'athlétisme","Parcours de course et de marche","Aires de jeux pour enfants","Salles de fitness","Stands de tir"],
      props:["Structure en couches : primaire → cœur élastique → mastic → finition","Cœur SBR/EPDM absorbant les chocs pour la sécurité des sportifs","Finitions aliphatiques résistantes aux UV, non jaunissantes","Alternatives sandwich et systèmes coulés","Renouvellement des couleurs à faible coût par la finition","Usage intérieur et extérieur"] },
    { title:"Systèmes de sols industriels",
      desc:"Systèmes à base de polyuréthane et d'époxy configurés selon l'usage prévu : des surfaces autolissantes lisses à la texture antidérapante « peau d'orange », des peintures de sol en film mince au mortier époxy pour les zones à fortes charges. Résultat : un sol sans joint, hygiénique, sans poussière, à haute résistance mécanique et chimique.",
      areas:["Sols d'usine","Entrepôts et magasins sous douane","Laboratoires et chambres froides","Usines agroalimentaires et pharmaceutiques","Parkings couverts","Hangars d'aviation","Ateliers automobiles et stations de lavage","Restaurants, cafés et bars","Chambres et espaces communs d'hôtel","Magasins, bureaux et halls d'exposition","Crèches et écoles maternelles"],
      props:["Finition autolissante ou texturée antidérapante","Disponible dans toutes les teintes RAL","Options antibactérienne et conductrice (ESD)","Renfort en mortier époxy pour fortes charges","Surface sans joint, sans poussière, facile à nettoyer","Logos, marquages et lignes applicables au sol"] },
    { title:"Système d'étanchéité",
      desc:"Systèmes d'étanchéité monolithiques et sans joint à base de membranes liquides : un primaire adapté au support, une bande de renfort aux angles et aux évacuations, une membrane liquide appliquée en couches et une finition aliphatique sur les surfaces exposées aux UV. L'application est vérifiée par un test d'eau.",
      areas:["Toitures et terrasses","Balcons","Salles de bain et pièces humides","Fondations et murs de soutènement","Réservoirs et piscines","Dalles de parking"],
      props:["Revêtement monolithique sans joint","Adaptation totale aux détails complexes","Finition aliphatique résistante aux UV","Bandes de renfort et solutions de détails","Résines d'injection pour fuites sous pression","Peut être carrelé ou recouvert"] }
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
    "SOLS INDUSTRIELS POLYURÉTHANE ET ÉPOXY","APPLICATIONS DE COULÉE ÉPOXY"],

  details:{
    uygSporPu:{"title": "Sol sportif polyuréthane", "lead": "Sols sportifs polyuréthane amortissants et sans joint, du gymnase à la salle de fitness.", "paras": ["Le système se monte sur primaire avec noyau SBR, mastic et autolissant polyuréthane ; lignes et couleur arrivent avec la finition. L'épaisseur suit l'intensité d'usage."]},
    uygParke:{"title": "Application de parquet", "lead": "Pose sans joint et silencieuse de parquets massifs et stratifiés aux adhésifs PU élastiques.", "paras": ["Après mesure d'humidité et choix du primaire et de la spatule crantée, le parquet est posé sur l'adhésif élastique ; grincements et décollements sont évités, le sol chauffant reste sûr."]},
    uygAkrilik:{"title": "Sols sportifs acryliques", "lead": "Applications acryliques à vitesse de jeu réglable, du court de tennis au terrain multisport.", "paras": ["Resurfaceur, couches cushion et finition chargée s'appliquent en séquence ; la teneur en sable fixe la vitesse, le traçage conclut. La tenue gel-dégel assure une longue vie extérieure."]},
    uygKaucuk:{"title": "Application caoutchouc", "lead": "Pose de dalles et rouleaux caoutchouc en salles de sport, crèches et zones industrielles.", "paras": ["Après préparation du support, l'adhésif PU bicomposant est peigné, les dalles posées en quinconce et marouflées ; la liaison réticule en huit heures environ."]},
    uygAtletizm:{"title": "Piste d'athlétisme", "lead": "Applications de pistes professionnelles en systèmes sandwich et full-pour.", "paras": ["Une surface élastomère et EPDM est appliquée sur un noyau SBR-liant posé au finisseur ; on obtient une piste compatible drainage, avec du grip par tous les temps."]},
    uygCim:{"title": "Applications d'adhésif gazon", "lead": "Collage professionnel centré sur les jonctions pour terrains et gazon paysager.", "paras": ["Les lés sont centrés sur la bande, l'adhésif étalé uniformément et la jonction protégée pendant la réticulation ; les joints restent invisibles, le terrain n'ouvre pas trop tôt."]},
    uygTas:{"title": "Application pierre décorative", "lead": "Surfaces « moquette de pierre » drainantes et décoratives en granulats naturels et liant transparent.", "paras": ["Granulats et liant sont mélangés puis étalés à la spatule ; une fois réticulée, la surface est antidérapante, sans entretien et perméable à la pluie. Le choix des abords de piscine."]},
    uygElastomer:{"title": "Système sandwich élastomère", "lead": "Structure sportive à deux couches : noyau élastique, élastomère et surface EPDM colorée.", "paras": ["Les granulés EPDM sont épandus sur l'élastomère encore humide ; retour d'énergie et déformation sont réglés aux standards professionnels."]},
    uygSandvic:{"title": "Sol sportif sandwich", "lead": "Applications du système sandwich pour pistes de stades et d'universités.", "paras": ["Une pose correcte et un entretien régulier assurent une longue durée de vie ; les zones usées se réparent localement, les couleurs suivent le projet."]},
    uygElektrik:{"title": "Résines électriques", "lead": "Applications de coulée sans vide dans transformateurs, jonctions de câbles et composants.", "paras": ["La résine est coulée à une fluidité qui enveloppe totalement le composant ; réticulée, elle forme un bloc isolant étanche, résistant aux chocs et vibrations."]},
    uygEpdm:{"title": "Application de granulés EPDM", "lead": "Sols sûrs et à motifs pour aires de jeux et terrains, en granulés EPDM colorés.", "paras": ["Le mélange EPDM-liant est étalé et nivelé sur une sous-couche SBR ; l'épaisseur suit la hauteur de chute, et 24 couleurs permettent des motifs libres."]},
    uygSu:{"title": "Revêtement étanche", "lead": "Applications d'étanchéité liquide sans joint, du toit aux pièces humides.", "paras": ["Angles et évacuations sont renforcés à la bande, la membrane appliquée en couches et vérifiée au test d'eau ; les surfaces exposées aux UV reçoivent une finition aliphatique."]},
    uygEndustri:{"title": "Sols industriels polyuréthane et époxy", "lead": "Applications de sols sans joint, hygiéniques et résistants, en usines, entrepôts et parkings.", "paras": ["Après grenaillage et primaire, un autolissant ou un revêtement texturé est appliqué ; on obtient une surface monolithique résistant aux chariots, aux produits chimiques et au nettoyage intensif."]},
    uygDokum:{"title": "Applications de coulée époxy", "lead": "Coulées de tables, objets et surfaces décoratives en résine époxy transparente.", "paras": ["La coulée progresse du centre vers les bords, les bulles s'échappent d'elles-mêmes ; la profondeur se construit par couches, ponçage et polissage donnent l'éclat cristal."]},
    parke:{ lead:"Une famille d'adhésifs majoritairement polyuréthane qui lie durablement les parquets massifs, stratifiés et contrecollés aux chapes et supports béton.",
      paras:["Le portefeuille repose sur trois familles chimiques : polyuréthanes bicomposants (2K) sans solvant adaptés à tous les parquets ; hybrides STPE monocomposants réticulant à l'humidité, essuyables sans trace à l'état frais ; et colles PVAc en phase aqueuse pour le bois et le stratifié. Le bon choix dépend du mouvement dimensionnel du bois, de l'absorption de la chape et du temps de travail requis.", "La consistance thixotrope évite le coulage vertical ; la liaison élastique empêche les grincements et le décollement progressif des lames. Les produits sont compatibles avec le chauffage au sol. Avant application : mesurer l'humidité du support, choisir la bonne spatule crantée et respecter le temps ouvert."],
      areas:["Parquet massif et stratifié", "Parquet contrecollé", "Sols chauffants", "Logements et bureaux", "Hôtels et commerces", "Parquets de salles de sport"],
      props:["Options PU 2K sans solvant, hybride STPE 1K et PVAc", "Liaison élastique anti-grincement", "Thixotrope — ne coule pas à la verticale", "Compatible chauffage au sol", "Formulations adaptées aux climats variés"],
      products:[{"t": "Adhésif parquet PU 2K standard", "d": "Polyuréthane bicomposant sans solvant pour tous les parquets ; haute résistance finale et temps de travail équilibré."}, {"t": "Adhésif parquet PU 2K thixotrope", "d": "Sa consistance élevée conserve les sillons de spatule et ne coule pas en pente ; étalement contrôlé et propre pour les grandes lames."}, {"t": "Adhésif parquet PU 2K souple", "d": "Liaison élastique durable qui suit le mouvement du bois ; premier choix pour massif, larges lames et sols chauffants."}, {"t": "Adhésif parquet PU 2K extra-souple", "d": "Sa forte élongation absorbe les contraintes des supports difficiles et coupe les ponts phoniques pour un sol silencieux."}, {"t": "Adhésif parquet PU 2K renforcé", "d": "Profil d'accroche renforcé pour trafic intense et supports exigeants, comme les parquets de salles de sport."}, {"t": "Adhésif parquet hybride STPE 1K", "d": "Monocomposant réticulant à l'humidité, sans mélange ; applicable sans primaire sur béton adapté, essuyable sans trace à l'état frais."}, {"t": "Colle à bois PVAc 1K (D3)", "d": "Colle bois et stratifié en phase aqueuse, classe D3 ; rapide, propre et inodore pour l'assemblage et le contrecollage."}] },
    pvc:{ lead:"Un adhésif acrylique en phase aqueuse qui fixe les revêtements souples PVC, vinyle, linoléum et moquettes à dossier sur supports absorbants.",
      paras:["La formulation monocomposante sans solvant est inodore : elle permet de travailler en toute sécurité dans les espaces clos — hôpitaux, écoles, logements. Un tack initial élevé et une longue fenêtre de travail laissent une marge d'ajustement sur les grandes surfaces.", "L'adhésif est étalé uniformément à la spatule crantée, le revêtement posé en quelques minutes puis marouflé au rouleau. Sur sol chauffant, le système est arrêté avant la pose et relancé progressivement après. Ne pas confondre colle pour revêtement de sol et colle pour tube PVC rigide."],
      areas:["Hôpitaux et laboratoires", "Écoles et crèches", "Logements", "Centres commerciaux et magasins", "Bureaux", "Sols PVC homogènes et hétérogènes"],
      props:["Acrylique monocomposant en phase aqueuse — sans solvant", "Application économique à faible consommation", "Tack initial et résistance finale élevés", "Travail inodore en espace clos", "Compatible protocole sol chauffant"],
      products:[{"t": "Adhésif acrylique en phase aqueuse pour revêtements de sol", "d": "Monocomposant, à base acrylique et sans solvant. Facile à appliquer, avec un tack initial et une adhérence finale élevés sur une longue fenêtre de travail. Colle PVC, PU et latex, marley, marmoleum, linoléum et moquettes à dossier sur béton et chape."}] },
    kaucuk:{ lead:"Adhésifs polyuréthane bicomposants qui lient dalles et rouleaux caoutchouc au support, et les lés de gazon synthétique entre eux et à la bande de jonction.",
      paras:["La structure PU 2K sans solvant conserve sa force d'adhérence pendant des années, insensible à la lumière, à l'eau et aux intempéries. Dalles et rouleaux caoutchouc se collent sur béton, MDF, aggloméré et métal — et au besoin sur céramique, granit et marbre.", "Sur gazon synthétique, la zone critique n'est pas la surface mais les jonctions et retours de bord : l'adhésif est étalé uniformément sur la bande, les lés sont centrés et la jonction protégée pendant la réticulation. L'option de couleur verte rend les joints invisibles."],
      areas:["Terrains de football et gazon synthétique", "Sols en dalles et rouleaux caoutchouc", "Salles de sport", "Aires de jeux", "Gazon paysager et décoratif", "Abords de piscine"],
      props:["Polyuréthane bicomposant sans solvant", "Résistance aux UV, à l'eau et aux intempéries", "Application parfaitement compatible avec la bande de jonction", "Thixotrope — ne coule pas sur surface inclinée", "Variantes souples et économiques"],
      products:[{"t": "Adhésif caoutchouc PU 2K souple", "d": "Système bicomposant souple sans solvant liant dalles et rouleaux caoutchouc au béton, au bois et au métal."}, {"t": "Adhésif caoutchouc PU 2K économique", "d": "Variante bicomposante à accroche équilibrée, avantageuse sur grandes surfaces."}, {"t": "Adhésif gazon synthétique PU 2K", "d": "Adhésif vert liant les lés de gazon à la bande de jonction ; résistant à l'eau et aux intempéries."}, {"t": "Adhésif gazon synthétique économique", "d": "Solution bicomposante économique pour terrains et paysagisme."}, {"t": "Bande de jonction", "d": "La bande tissée qui relie les lés de gazon par dessous ; s'utilise avec l'adhésif."}, {"t": "Dalles caoutchouc", "d": "Dalles prêtes à poser, souples et résistantes à l'usure, en plusieurs formats."}, {"t": "Rouleau caoutchouc SBR", "d": "La sous-couche amortissante des sols sportifs ; aussi sous chape et en acoustique."}] },
    filtre:{ lead:"Systèmes polyuréthane industriels qui solidarisent média filtrant, cadre et couvercles — et forment des joints in situ si nécessaire.",
      paras:["Deux missions distinctes, deux familles de produits : la fixation du média vise une liaison forte et répétable ; les produits de joint apportent remplissage contrôlé, stabilité de forme et étanchéité. Des grades à prise lente pour la coulée manuelle, rapides et non coulants (thixotropes) pour les lignes de dosage automatiques.", "Méthode de dosage, viscosité, temps de travail, température de service et fluide en contact guident la sélection. À chaque changement de média, de cadre ou de lot, un essai à petite échelle est recommandé avant la série."],
      areas:["Filtres à air", "Filtres automobiles", "Cartouches filtrantes industrielles", "Joints de filtres", "Lignes de dosage automatiques"],
      props:["Produits distincts pour fixation du média et joints", "Vitesses de prise pour lignes manuelles et automatiques", "Option non coulante (thixotrope)", "Stabilité de dosage répétable", "Compatible cadres métal et plastique"],
      products:[{"t": "Adhésif filtre à prise rapide", "d": "Système polyuréthane conçu pour les cycles courts des lignes de dosage automatiques."}, {"t": "Adhésif filtre coulée manuelle", "d": "Grade de fixation du média à large fenêtre de travail pour dosage manuel."}, {"t": "Adhésif filtre dosage automatique", "d": "Grade offrant une stabilité de dosage répétable en production."}, {"t": "Adhésif filtre rapide", "d": "Variante à gel court pour cadences élevées."}, {"t": "Adhésif filtre standard", "d": "Solution générale de liaison du média pour filtres à air et automobiles."}, {"t": "Grade thixotrope / joint", "d": "Grade non coulant formant des joints in situ, à haute stabilité de forme."}] },
    endYap:{ lead:"Systèmes polyuréthane qui collent les panneaux isolants sur PRV, métal et surfaces alternatives dans les panneaux sandwich et carrosseries.",
      paras:["Adhésifs de panneaux mono ou bicomposants pour camions frigorifiques et carrosseries utilitaires, complétés par des grades à basse viscosité et prise rapide pour application machine. Des solutions PU distinctes collent les plaques caoutchouc sur aggloméré ou métal.", "Pour les véhicules de transport alimentaire, des revêtements de sol époxy antibactériens — à forte adhérence, résistants aux acides alimentaires et à de nombreux produits chimiques — complètent le système. Tous les produits sont sans solvant."],
      areas:["Production de panneaux sandwich", "Carrosseries frigorifiques", "Planchers de véhicules utilitaires", "Panneaux de chambres froides", "Lignes de montage industrielles"],
      props:["Options PU 1K et 2K", "Basse viscosité pour application machine", "Variantes à prise rapide", "Complément sol époxy antibactérien", "Formulation sans solvant"],
      products:[{"t": "Adhésif panneaux PU 1K", "d": "Système monocomposant réticulant à l'humidité ; application pratique sur panneaux et carrosseries."}, {"t": "Adhésif panneaux PU 2K", "d": "Système bicomposant haute résistance liant les panneaux isolants au PRV et au métal."}, {"t": "Adhésif panneaux application machine 2K", "d": "Grade fluide à prise rapide pour lignes d'application automatiques."}] },
    dokme:{ lead:"Prépolymères polyuréthane monocomposants réticulant à l'humidité, qui transforment sur site les granulés SBR et EPDM en un sol souple monolithique.",
      paras:["Mélangé aux granulés puis étalé, le liant réticule en une couche perméable à l'eau, absorbant les chocs et sans joint. Les grandes surfaces se posent au finisseur, les petites à la main. Les grades aromatiques sont le choix économique pour le SBR noir et les systèmes foncés ; pour l'EPDM coloré, on recommande les grades aliphatiques non jaunissants résistants aux UV.", "Trop peu de liant affaiblit la liaison ; trop durcit la surface. Le taux de mélange et la propreté des granulés font le résultat, et un essai est conseillé à chaque nouveau lot de granulés."],
      areas:["Aires de jeux", "Parcours de course et de marche", "Sols sportifs", "Cours d'école", "Parcs et paysagisme", "Sols décoratifs"],
      props:["Prépolymère 1K réticulant à l'humidité", "Options aromatiques et aliphatiques (non jaunissantes)", "Surface souple, perméable, sans joint", "Pose au finisseur ou à la main", "Compatibilité totale granulés EPDM et SBR"],
      products:[{"t": "Liant coulé coloré", "d": "Liant pigmenté préservant la cohérence des couleurs dans les systèmes colorés."}, {"t": "Liant coulé aromatique (basse viscosité)", "d": "Grade aromatique économique, facile à travailler et mouillant vite le granulé."}, {"t": "Liant coulé aromatique", "d": "Le liant wet-pour standard pour SBR noir et systèmes foncés."}, {"t": "Liant EPDM aliphatique (UV)", "d": "Grade premium non jaunissant pour surfaces EPDM colorées."}, {"t": "Liant système wet-pour", "d": "Liant polyvalent pour aires de jeux et sols sportifs coulés."}] },
    press:{ lead:"Résines liantes développées pour mouler dalles, bordures et pièces techniques en caoutchouc sous pression et chaleur.",
      paras:["Le mélange granulés-liant est pressé dans le moule en produits denses et stables en forme. Température du moule, temps de cycle et structure des granulés déterminent le résultat ; des paramètres constants garantissent l'intégrité des pièces en série.", "Liants coulés et liants pressés ne sont pas interchangeables : temps de travail, qualité de surface et résistance sont conçus différemment. La qualité du granulé définit l'élasticité, sa taille la consommation."],
      areas:["Production de dalles caoutchouc", "Bordures et rampes caoutchouc", "Tapis d'écurie et de paddock", "Pièces techniques en caoutchouc", "Production en série en usine"],
      props:["Formulation dédiée au procédé de moulage", "Forte adhérence à faible consommation", "Répétabilité par paramètres de cycle constants", "Structure dense et stable en forme", "Compatible granulés SBR et EPDM"],
      products:[{"t": "Liant pressé standard", "d": "Liant de moule à cycles équilibrés pour dalles et bordures caoutchouc."}, {"t": "Liant pressé cycle rapide", "d": "Temps de presse raccourcis pour lignes à haute capacité."}, {"t": "Liant pressé économique", "d": "Grade avantageux pour les pièces standard."}, {"t": "Liant pressé haute résistance", "d": "Formulation renforcée pour pièces techniques à trafic intense."}] },
    tas:{ lead:"Résines qui lient les granulats de pierre naturels et colorés par un film transparent, créant les surfaces décoratives et drainantes dites « moquette de pierre ».",
      paras:["Trois variantes : aliphatique monocomposante, aliphatique bicomposante et époxy bicomposante. Les grades aliphatiques ne jaunissent pas aux UV — premier choix en extérieur ; le grade époxy est l'alternative économique en intérieur et zones sans UV.", "La surface réticulée est antidérapante, insensible au vent, résistante à l'eau et à la plupart des produits chimiques ; elle sert un trafic léger de longues années sans entretien particulier."],
      areas:["Allées et passages", "Parcs, jardins et espaces botaniques", "Abords de piscines et bassins", "Balcons et terrasses", "Sols d'hôtels et de galeries", "Intérieurs décoratifs"],
      props:["Film transparent révélant la texture de la pierre", "Grades aliphatiques non jaunissants", "Surface drainante et antidérapante", "Options d'application 1K et 2K", "Durabilité sans entretien"],
      products:[{"t": "Liant pierre aliphatique 2K", "d": "Système transparent non jaunissant — premier choix de la moquette de pierre extérieure."}, {"t": "Liant pierre époxy 2K", "d": "Grade économique haute résistance pour intérieurs et zones sans UV."}, {"t": "Liant pierre aliphatique 1K", "d": "Application monocomposante pratique pour balcons, terrasses et allées."}] },
    epdm:{ lead:"Granulés aux couleurs vives et stables aux UV, produits en caoutchouc EPDM synthétique — la matière première des sols souples et sûrs, avec liants polyuréthane.",
      paras:["Une granulométrie homogène et une large palette de couleurs autorisent une conception libre, des aires de jeux à motifs aux terrains multicolores. Taille des granulés et épaisseur de couche se règlent pour obtenir différents niveaux d'amortissement des chutes ; sur les aires de jeux, l'épaisseur suit l'approche de hauteur de chute critique EN 1177.", "Le granulé SBR recyclé travaille aux côtés de l'EPDM comme sous-couche élastique économique de ces systèmes."],
      areas:["Aires de jeux", "Pistes de course et surfaces tartan", "Cours d'école", "Terrains de sport", "Abords de piscine", "Espaces de gymnastique"],
      props:["Couleurs durables grâce à la stabilité UV", "Surface non toxique et antidérapante", "Structure élastique absorbant les chocs", "Riche palette de couleurs et de motifs", "Système économique avec sous-couche SBR"],
      products:[{"t": "Granulés EPDM — 24 couleurs standard", "d": "Granulés colorés homogènes et stables aux UV ; parcourez la palette dans la galerie."}, {"t": "Granulés SBR (recyclés)", "d": "Le granulé noir économique et amortissant de la sous-couche des systèmes."}] },
    puZemin:{ lead:"Systèmes de revêtement et de peinture polyuréthane pour les sols où élasticité, absorption des chocs et tenue aux UV sont décisives.",
      paras:["Les grades autolissants rigides créent des surfaces lisses et hygiéniques dans les usines, entrepôts et chambres froides ; les grades souples absorbent les chocs dans les salles de sport, stands de tir et crèches. Le système se complète d'un mastic, d'une couche EPDM et d'une finition résistante aux UV.", "Face à la rigidité de l'époxy, le polyuréthane offre l'accommodation des mouvements thermiques, l'amortissement des vibrations et la réduction du bruit de pas — avec une meilleure tenue aux UV et aux intempéries."],
      areas:["Usines et entrepôts", "Chambres froides", "Salles de sport et stands de tir", "Parkings et espaces extérieurs", "Bureaux, magasins et showrooms", "Pièces humides"],
      props:["Configuration rigide ou souple", "Finitions non jaunissantes résistantes aux UV", "Accommodation des contraintes thermiques", "Réduction du bruit de pas", "Options antibactériennes et ignifuges"],
      products:[{"t": "Peinture de sol PU 2K (UV)", "d": "La couche de couleur et de protection des systèmes ; finition non jaunissante."}, {"t": "Autolissant PU 2K (rigide)", "d": "Revêtement lisse à haute résistance pour usines et entrepôts."}, {"t": "Autolissant PU 2K (souple)", "d": "Grade amortissant pour salles de sport et espaces de confort."}] },
    akZemin:{ lead:"Revêtements sportifs acryliques en phase aqueuse, sans solvant, appliqués en couches successives sur béton et asphalte, d'une excellente tenue aux UV.",
      paras:["Le système se compose d'un resurfaceur, de couches amortissantes « cushion », d'une finition chargée et de la peinture de traçage. En réglant la teneur en sable et le nombre de couches, on personnalise le coefficient de friction — la vitesse de jeu — du court.", "La résistance aux cycles gel-dégel et la tenue des couleurs assurent une longue vie en extérieur ; en intérieur, le système sert tous les niveaux, de l'amateur au professionnel."],
      areas:["Courts de tennis", "Terrains de basket et volley", "Terrains multisports", "Pistes de course et cyclables", "Équipements scolaires et municipaux"],
      props:["Système en phase aqueuse, écologique", "Vitesse de jeu réglable (friction)", "Résistance aux UV et au gel-dégel", "Forte adhérence sur béton et asphalte", "Entretien économique, large palette de couleurs"],
      products:[{"t": "Vernis acrylique", "d": "Finition apportant brillance et protection aux surfaces acryliques."}, {"t": "Cushion acrylique (épais)", "d": "La couche coussin épaisse qui amortit les chocs des courts."}, {"t": "Cushion acrylique (fin)", "d": "Couche coussin fine pour un réglage précis de la vitesse."}, {"t": "Resurfaceur acrylique premium", "d": "Ragréage premium comblant les défauts et préparant la base."}, {"t": "Resurfaceur acrylique", "d": "La couche standard de correction sur béton et asphalte."}, {"t": "Finition acrylique chargée", "d": "La couche colorée chargée en sable qui fixe le coefficient de friction."}, {"t": "Peinture concentrée acrylique premium", "d": "Couche de couleur longue durée à haute teneur en pigments."}, {"t": "Peinture concentrée acrylique", "d": "Concentré économique pour la mise en couleur des terrains."}, {"t": "Primaire PU 1K", "d": "Le primaire béton appliqué avant les systèmes acryliques."}, {"t": "Primaire acrylique", "d": "Primaire en phase aqueuse assurant l'accroche des couches acryliques."}, {"t": "Peinture de traçage acrylique", "d": "Peinture à fort pouvoir couvrant pour les lignes de jeu."}] },
    epZemin:{ lead:"De la peinture en film mince aux revêtements autolissants et au mortier époxy : des systèmes de sol sans joint axés sur l'hygiène et la résistance mécanique.",
      paras:["Les grades autolissants créent des sols lisses et brillants ; les grades texturés « peau d'orange », des sols antidérapants et économiques. La structure monolithique sans poussière ne laisse aucune place aux bactéries — un atout pour hôpitaux, agroalimentaire et laboratoires. Des versions conductrices (ESD) sont possibles.", "Un béton neuf demande environ trois semaines de cure, un primaire et un contrôle d'humidité. L'époxy résistant peu aux UV, les zones ensoleillées reçoivent une finition UV-stable, et les zones à fortes charges un renfort en mortier époxy."],
      areas:["Usines et sites de production", "Entrepôts et magasins sous douane", "Hôpitaux et laboratoires", "Sites agroalimentaires et pharmaceutiques", "Parkings couverts", "Cuisines industrielles"],
      props:["Options autolissant, peinture et texturé", "Haute résistance mécanique et chimique", "Surface hygiénique, sans poussière ni joint", "Versions conductrices (ESD) disponibles", "Application dans toutes les teintes RAL"],
      products:[{"t": "Revêtement époxy texturé (peau d'orange)", "d": "Finition texturée antidérapante, économique et décorative."}, {"t": "Peinture de sol époxy", "d": "Peinture protectrice en film mince pour trafic léger et moyen."}, {"t": "Autolissant époxy", "d": "Revêtement autolissant lisse, brillant et très résistant."}] },
    astar:{ lead:"La première couche : un pont d'adhérence entre revêtement et béton, qui équilibre l'absorption, stoppe le poussiérage et forme au besoin une barrière anti-humidité.",
      paras:["Les primaires époxy conviennent aux sols exigeant adhérence et résistance chimique ; les primaires PU s'accordent aux couches souples, les acryliques aux systèmes sportifs acryliques. Les primaires chargés rebouchent les défauts pour préparer une base lisse.", "L'humidité du support est le premier contrôle : jusqu'à 3 % environ, un primaire standard suffit ; entre 3 et 7 %, le primaire époxy barrière anti-humidité est obligatoire ; au-delà, pas d'application. Sauter le primaire mène au décollement et au cloquage précoces."],
      areas:["Surfaces béton et chape", "Surfaces métalliques", "Supports humides (grade barrière)", "Sous-couches de systèmes sportifs", "Tous les sols avant revêtement"],
      props:["Familles époxy, polyuréthane et acrylique", "Options barrière anti-humidité", "Correction de surface par primaire chargé", "Grades spéciaux pour supports non absorbants", "La couche critique qui définit la durée de vie"],
      products:[{"t": "Primaire PU sans solvant", "d": "Primaire polyuréthane inodore, sûr en espaces clos."}, {"t": "Primaire PU 1K", "d": "Primaire pratique réticulant à l'humidité, compatible couches souples."}, {"t": "Primaire PU 1K transparent", "d": "Grade transparent pénétrant en profondeur les supports absorbants."}, {"t": "Barrière anti-humidité époxy 2K", "d": "Primaire barrière protégeant le revêtement sur supports humides."}, {"t": "Primaire époxy 2K", "d": "Le standard des sols exigeant adhérence et résistance chimique élevées."}, {"t": "Primaire époxy 2K (économique)", "d": "Solution économique pour l'imprégnation générale du béton."}] },
    macun:{ lead:"Produits de rebouchage polyuréthane qui comblent joints, fissures et pores, assurant une transition lisse et étanche entre les couches.",
      paras:["Grades à haute et basse viscosité et variantes élastiques suivent les mouvements du sol et empêchent le rebouchage de fissurer. Dans les sols sportifs, le mastic est la couche intermédiaire qui scelle les pores du noyau granulaire.", "Le bon mastic réduit la consommation de la couche autolissante supérieure et améliore directement la qualité de la surface finie."],
      areas:["Rebouchage de joints et fissures", "Couches intermédiaires de sols sportifs", "Pores des surfaces caoutchouc et SBR", "Réparations de béton", "Corrections avant revêtement"],
      props:["Variantes haute/basse viscosité et élastiques", "Accommodation des mouvements du sol", "Scellement des pores et étanchéité", "Réduit la consommation de finition", "Compatibilité totale avec les systèmes PU"],
      products:[{"t": "Sealer PU", "d": "La couche d'étanchéité qui scelle les pores granulaires des systèmes sportifs."}, {"t": "Mastic PU élastique", "d": "Rebouchage élastique travaillant sans fissurer sur sols en mouvement."}, {"t": "Mastic PU basse viscosité", "d": "Grade fluide pénétrant pores fins et capillaires."}, {"t": "Mastic PU haute viscosité", "d": "Grade dense gardant sa forme dans joints et vides larges."}] },
    suUrun:{ lead:"Un portefeuille d'étanchéité complet — membranes liquides, primaires et résines d'injection — pour chaque détail, du toit aux fondations.",
      paras:["Grades aliphatiques pour les finitions exposées aux UV, grades économiques sous carrelage ; types non coulants (thixotropes) pour les surfaces verticales et hybrides bitume-polyuréthane en complément. Des primaires distincts pour supports absorbants et non absorbants complètent le système.", "Les fuites sous pression sont stoppées par des résines d'injection monocomposantes qui gonflent au contact de l'eau en mousse à cellules fermées — colmatant à la source les fuites de sous-sols, tunnels, piscines et infrastructures."],
      areas:["Toits et terrasses", "Salles de bain, balcons et pièces humides", "Fondations et voiles", "Réservoirs et piscines", "Injection en tunnel et infrastructure", "Détails de chéneaux cachés"],
      props:["Membranes liquides 1K et 2K", "Finitions aliphatiques résistantes aux UV", "Types thixotropes pour surfaces verticales", "Options hybrides bitume-polyuréthane", "Solutions d'injection côté négatif"],
      products:[{"t": "Famille membranes liquides", "d": "Un ensemble complet d'étanchéité : membranes PU 1K/2K, primaires et finitions aliphatiques."}, {"t": "Membrane surfaces verticales (thixotrope)", "d": "Grade épais s'appliquant sans couler sur acrotères et murs."}, {"t": "Résine d'injection (réactive à l'eau)", "d": "Résine moussant au contact de l'eau, colmatant les fuites sous pression à la source."}] },
    elektrik:{ lead:"Résines de coulée assurant isolation sans vide et protection mécanique — des transformateurs et jonctions de câbles aux bobinages et circuits électroniques.",
      paras:["Quatre familles chimiques : vernis de bobinage séchant à l'air ; époxys bicomposants durs et résistants aux produits chimiques pour moyenne et haute tension ; polyuréthanes rigides ou élastiques amortissant vibrations et résonance en basse et moyenne tension ; et résines hydrocarbonées élastiques sans isocyanate, réouvrables et re-remplissables.", "Les grades élastiques suivent la dilatation thermique du câble et évitent fissures et ruptures ; leur nature hydrophobe protège les parties métalliques de la corrosion. Les résines époxy transparentes servent aussi aux tables, objets et sols décoratifs."],
      areas:["Transformateurs de type sec", "Jonctions de câbles", "Bobinages et moteurs", "Enrobage électronique (potting)", "Pompes immergées", "Coulée décorative transparente"],
      props:["Familles époxy, polyuréthane et hydrocarbonée", "Coulée sans vide — tenue aux chocs et vibrations", "Réparabilité des grades élastiques", "Structure hydrophobe anticorrosion", "Options de coulée décorative transparente"],
      products:[{"t": "Vernis de bobinage PU 1K", "d": "Vernis séchant à l'air, réticulant à l'humidité, applicable sur toute surface."}, {"t": "Résine de coulée PU 2K (rigide)", "d": "Isolation sans vide et protection mécanique en basse et moyenne tension."}, {"t": "Résine de coulée PU 2K (élastique)", "d": "Grade souple amortissant les vibrations et suivant les mouvements thermiques."}, {"t": "Résine de coulée PU 2K (chargée)", "d": "Variante fortement chargée à stabilité dimensionnelle accrue."}, {"t": "Résine de coulée époxy 2K", "d": "Résine dure et résistante aux produits chimiques pour moyenne et haute tension."}, {"t": "Résine hydrocarbonée (réparable)", "d": "Résine de jonction sans isocyanate, réouvrable et re-remplissable."}, {"t": "Résine de câble PU 2K", "d": "Remplissage rapide et sûr des jonctions de câbles."}] },
    sporSis:{ lead:"Des structures de sols sportifs en couches — primaire, noyau élastique, mastic et finition — du gymnase amateur à la piste d'athlétisme professionnelle.",
      paras:["En intérieur, un autolissant polyuréthane et une finition UV-stable sont appliqués sur un rouleau SBR ou un noyau SBR coulé en place ; l'épaisseur totale suit l'intensité d'usage. En athlétisme, le système sandwich (noyau SBR coulé + élastomère + EPDM épandu) et le système full-pour sont complétés par la structure drainante « combined » et le revêtement projeté économique.", "Sur courts durs, les systèmes acryliques permettent de régler la vitesse de jeu via resurfaceur, couches cushion et finition chargée. Le traçage est toujours la dernière couche ; le renouvellement ne demande qu'une nouvelle finition."],
      areas:["Courts de tennis", "Basket-ball et volley-ball", "Salles de sport couvertes", "Pistes d'athlétisme", "Parcours de course et de marche", "Aires de jeux pour enfants", "Salles de fitness", "Stands de tir"],
      props:["Structure primaire → noyau élastique → mastic → finition", "Variantes sandwich, full-pour, combined et projetée", "Noyau SBR/EPDM absorbant les chocs", "Finitions aliphatiques non jaunissantes", "Renouvellement économique des couleurs et tracés", "Usage intérieur et extérieur"] },
    endSis:{ lead:"Systèmes de sols industriels configurés selon le trafic, l'hygiène et le budget — de la peinture en film mince au mortier époxy.",
      paras:["Peinture époxy économique pour trafic léger ; systèmes primaire + couche intermédiaire + autolissant pour service moyen et intensif ; renfort en mortier époxy appliqué comme une chape pour fortes charges et supports dégradés. Où l'antidérapance compte, la finition est texturée en peau d'orange.", "Les systèmes polyuréthane semi-souples réduisent le bruit de pas en mezzanines, hôtels et bureaux ; les projets décoratifs utilisent paillettes, quartz coloré et interlayers imprimés. Les zones de type hospitalier appellent les options antibactériennes et conductrices (ESD)."],
      areas:["Sols d'usine", "Entrepôts et magasins sous douane", "Laboratoires et chambres froides", "Usines agroalimentaires et pharmaceutiques", "Parkings couverts", "Hangars d'aviation", "Ateliers automobiles et stations de lavage", "Restaurants, cafés et bars", "Chambres et espaces communs d'hôtel", "Magasins, bureaux et halls d'exposition", "Crèches et écoles maternelles"],
      props:["Niveaux peinture, autolissant, texturé et mortier", "Option antidérapante peau d'orange", "Structure semi-souple réduisant le bruit de pas", "Paillettes décoratives et quartz coloré", "Alternatives antibactériennes et ESD", "Application dans toutes les teintes RAL"] },
    suSis:{ lead:"Un système d'étanchéité monolithique : primaire, renfort des détails, membrane liquide en couches et finition protégée des UV.",
      paras:["En pièces humides, angles et évacuations sont renforcés à la bande, puis au moins deux couches de membrane liquide sont appliquées ; après vérification par test d'eau, le carrelage suit. En toiture et terrasse, membrane UV-stable ou finition aliphatique ; sur les grandes surfaces planes, la membrane en lés peut se combiner au détail liquide.", "Les résines d'injection réactives à l'eau traitent les fuites sous pression et l'étanchéité côté négatif. L'étanchéité se planifie pendant la construction ; intervenir après coup est plus difficile et coûteux."],
      areas:["Toitures et terrasses", "Balcons", "Salles de bain et pièces humides", "Fondations et murs de soutènement", "Réservoirs et piscines", "Dalles de parking"],
      props:["Bande de renfort et maille aux détails", "Épaisseur de film contrôlée par couches", "Vérification par test d'eau", "Finition aliphatique sur surfaces exposées aux UV", "Solution combinée avec membrane en lés", "Étanchéité côté négatif par injection"] }
  },

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
    mapTodo:"ستظهر الخريطة هنا بعد إضافة بيانات الموقع.",
    close:"إغلاق", keyFeatures:"أبرز الخصائص", productRange:"تشكيلة المنتجات",
    waLabel:"تواصل عبر واتساب", waPrefill:"مرحبًا، أودّ الحصول على معلومات عن منتجاتكم."
  },

  hero:{
    kicker:"مواد لاصقة • روابط • أرضيات • عزل مائي",
    title:"تقنية متقدمة\nوجودة مثبتة\nفي الصناعات الكيميائية.",
    lead:"عبر عمليات الإنتاج القائمة على البولي يوريثان والإيبوكسي والأكريليك، نوفّر تشكيلة واسعة من مصدر واحد — من المواد اللاصقة إلى الأرضيات الرياضية، ومن العزل المائي إلى راتنجات العزل الكهربائي."
  },

  categories:[
    {title:"المواد اللاصقة", sub:"باركيه، PVC، مطاط وعشب صناعي", desc:"حلول لاصقة خالية من المذيبات وقائمة أساسًا على البولي يوريثان، لتطبيقات الباركيه وأرضيات PVC والفينيل والمطاط والعشب الصناعي والفلاتر وألواح الساندويتش."},
    {title:"المواد الرابطة", sub:"روابط الصب والكبس والحجر", desc:"راتنجات بريبوليمر تتصلّب بالرطوبة وتربط حبيبات SBR وEPDM ببعضها: خيارات أروماتية وأليفاتية لا تصفرّ لتطبيقات الصب (wet-pour) والكبس وسجاد الحجر."},
    {title:"أرضيات الطلاء", sub:"بولي يوريثان وأكريليك وإيبوكسي", desc:"من الأسطح ذاتية التسوية إلى الملمس المانع للانزلاق «قشرة البرتقال»؛ أنظمة طلاء ودهانات على أساس البولي يوريثان والأكريليك والإيبوكسي. كامل تشكيلة ألوان RAL ومقاومة ميكانيكية وكيميائية عالية."},
    {title:"العزل المائي", sub:"أغشية سائلة ومواد مانعة للتسرب", desc:"عزل مائي بلا وصلات على أساس الغشاء السائل: من الأسطح والشرفات إلى الأساسات والمساحات الرطبة وخزانات المياه؛ مع طبقات نهائية أليفاتية للأسطح المعرّضة للأشعة فوق البنفسجية."},
    {title:"البرايمرات والمعاجين", sub:"تجهيز الأسطح والملء", desc:"برايمرات إيبوكسي وبولي يوريثان وأكريليك للأسطح الماصّة وغير الماصّة؛ حواجز رطوبة وبرايمرات محمّلة ومعاجين فواصل وإصلاح. البرايمر الصحيح يحدّد عمر النظام."},
    {title:"راتنجات العزل الكهربائي", sub:"راتنجات صب ودهانات محوّلات", desc:"راتنجات صب إيبوكسي وبولي يوريثان للمحوّلات ووصلات الكابلات والدوائر الإلكترونية؛ عزل خالٍ من الفراغات وامتصاص للاهتزازات وتطبيقات صب ديكورية شفافة."}
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
      "إلى جانب الإنتاج، ندير تطوير المنتجات (البحث والتطوير) والتكييف وفق احتياجات كل عميل كتخصصين مستقلين، ونقترح تركيبات تناسب الأرضية والمناخ وظروف التشغيل. نمنح الأولوية للتركيبات الخالية من المذيبات والصديقة للمستخدم والبيئة، ونُعِدّ مع شركائنا في التنفيذ أنظمة مصمّمة لكل مشروع على حدة."
    ]
  },

  systems:[
    { title:"أنظمة الأرضيات الرياضية",
      desc:"أنظمة أرضيات رياضية على أساس البولي يوريثان والأكريليك، تُكوَّن للمساحات المفتوحة أو المغلقة وفق المواصفات والميزانية وطبيعة الأرضية: برايمر، ثم نواة مرنة من حبيبات SBR/EPDM ممتصة للصدمات، ثم طبقة معجون تسدّ المسام، ثم طلاء بولي يوريثان ذاتي التسوية وطبقة نهائية مقاومة للأشعة فوق البنفسجية. ولأنها تُطبَّق سائلة، تتصلّب في سطح متجانس بلا وصلات؛ وتُجدَّد الألوان وخطوط الملعب بإعادة الطبقة النهائية فقط.",
      areas:["ملاعب التنس","كرة السلة والكرة الطائرة","الصالات الرياضية المغلقة","مضامير ألعاب القوى","مسارات الجري والمشي","ملاعب الأطفال","صالات اللياقة","ميادين الرماية"],
      props:["تكوين طبقي: برايمر ← نواة مرنة ← معجون ← طبقة نهائية","نواة SBR/EPDM ممتصة للصدمات لسلامة الرياضيين","طبقات نهائية أليفاتية لا تصفرّ ومقاومة للأشعة","بدائل نظام الساندويتش وأنظمة الصب","تجديد الألوان بتكلفة منخفضة عبر الطبقة النهائية","للاستخدام الداخلي والخارجي"] },
    { title:"أنظمة الأرضيات الصناعية",
      desc:"أنظمة على أساس البولي يوريثان والإيبوكسي تُكوَّن وفق الغرض من الاستخدام: من الأسطح ذاتية التسوية الملساء إلى الملمس المانع للانزلاق «قشرة البرتقال»، ومن دهانات الأرضيات رقيقة الطبقة إلى مونة الإيبوكسي لمناطق الأحمال الثقيلة. والنتيجة أرضية بلا وصلات، صحية، لا يتصاعد منها الغبار، وذات مقاومة ميكانيكية وكيميائية عالية.",
      areas:["أرضيات المصانع","المستودعات والمخازن","المختبرات وغرف التبريد","منشآت الأغذية والأدوية","مواقف السيارات المغلقة","حظائر الطائرات","مراكز صيانة وغسيل السيارات","المطاعم والمقاهي","غرف الفنادق والمساحات المشتركة","المتاجر والمكاتب وصالات المعارض","الحضانات ورياض الأطفال"],
      props:["خيارات سطح ذاتي التسوية أو بملمس مانع للانزلاق","التطبيق بجميع ألوان RAL","بدائل مضادة للبكتيريا وموصلة (ESD)","تدعيم بمونة الإيبوكسي لمناطق الأحمال الثقيلة","سطح بلا وصلات ولا غبار وسهل التنظيف","إمكانية تنفيذ الشعارات والعلامات والخطوط على الأرضية"] },
    { title:"نظام العزل المائي",
      desc:"أنظمة عزل مائي متجانسة وبلا وصلات على أساس الأغشية السائلة: برايمر يناسب السطح، وشريط تقوية عند الزوايا وتفاصيل الصرف، وغشاء سائل يُطبَّق على طبقات، وطبقة نهائية أليفاتية على الأسطح المعرّضة للأشعة فوق البنفسجية. ويُتحقَّق من التنفيذ باختبار الماء.",
      areas:["الأسطح والشرفات","البلكونات","الحمامات والمساحات الرطبة","الأساسات والجدران الساندة","خزانات المياه والمسابح","أسطح مواقف السيارات"],
      props:["طلاء متجانس بلا وصلات","توافق تام مع التفاصيل المعقّدة","طبقة أليفاتية مقاومة للأشعة","حلول أشرطة التقوية والتفاصيل","راتنجات حقن للتسرّبات المضغوطة","قابل للتبليط أو الطلاء فوقه"] }
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
    "أرضيات صناعية بالبولي يوريثان والإيبوكسي","تطبيقات صب الإيبوكسي"],

  details:{
    uygSporPu:{"title": "أرضيات رياضية بالبولي يوريثان", "lead": "أرضيات رياضية بولي يوريثانية ممتصة للصدمات وبلا وصلات، من الصالات المغلقة إلى مناطق اللياقة.", "paras": ["يُبنى النظام فوق البرايمر بنواة SBR ومعجون وطلاء ذاتي التسوية؛ وتكتمل خطوط الملعب واللون مع الطبقة النهائية. وتُختار السماكة وفق كثافة الاستخدام."]},
    uygParke:{"title": "تطبيق أرضيات الباركيه", "lead": "تركيب صامت وبلا وصلات للباركيه الصلب والمصفّح بلواصق بولي يوريثان مرنة.", "paras": ["بعد قياس الرطوبة واختيار البرايمر والمالج المسنّن، يُفرَش الباركيه على اللاصق المرن؛ فيُمنع الصرير والانفصال ويُعمل بأمان فوق التدفئة الأرضية."]},
    uygAkrilik:{"title": "أرضيات رياضية أكريليك", "lead": "تطبيقات طلاء أكريليكي بسرعة لعب قابلة للضبط، من ملاعب التنس إلى الملاعب متعددة الأغراض.", "paras": ["يُطبَّق معيد التسوية وطبقات الوسائد والطبقة المحمّلة بالتتابع؛ نسبة الرمل تحدّد السرعة ويكتمل العمل بدهان الخطوط. ومقاومة التجمد تمنح عمرًا طويلًا خارجيًا."]},
    uygKaucuk:{"title": "تطبيق المطاط", "lead": "تركيب بلاط ولفائف المطاط في الصالات الرياضية والحضانات والمناطق الصناعية.", "paras": ["بعد تجهيز السطح يُمشَّط اللاصق الثنائي، ويُرصف البلاط بشكل متعرّج ويُكبس بالأسطوانة؛ وتتصلّب الرابطة في نحو ثماني ساعات."]},
    uygAtletizm:{"title": "مضمار ألعاب القوى", "lead": "تطبيقات مضامير احترافية بنظامي الساندويتش والصب الكامل.", "paras": ["يُطبَّق سطح الإيلاستومر وEPDM فوق نواة SBR المفروشة بالفينيشر؛ فنحصل على مضمار متوافق مع الصرف بثبات قدم في كل الأجواء."]},
    uygCim:{"title": "تطبيقات لاصق العشب", "lead": "لصق احترافي يركّز على خطوط الوصل لملاعب العشب الصناعي والتجميلي.", "paras": ["تُوسَّط الشرائح على شريط الوصل ويُفرَد اللاصق بالتساوي وتُحمى الوصلة طوال التصلب؛ فتبقى الوصلات خفية ولا يُفتح الملعب مبكرًا."]},
    uygTas:{"title": "تطبيق الحجر الديكوري", "lead": "أسطح «سجاد حجر» ديكورية نفوذة للماء من حبيبات طبيعية ورابط شفاف.", "paras": ["تُخلَط الحبيبات مع الرابط وتُفرَش بالمالج؛ وبعد التصلب يصبح السطح مانعًا للانزلاق بلا صيانة ونفوذًا لمياه المطر. خيار محيط المسابح والممرات."]},
    uygElastomer:{"title": "نظام الساندويتش الإيلاستومري", "lead": "تكوين رياضي من طبقتين: نواة مرنة وإيلاستومر وسطح EPDM ملوّن.", "paras": ["تُنثر حبيبات EPDM والإيلاستومر ما يزال رطبًا؛ ويُضبط ارتجاع الطاقة والتشوّه وفق المعايير الاحترافية."]},
    uygSandvic:{"title": "أرضية رياضية ساندويتش", "lead": "تطبيقات نظام الساندويتش لمضامير الملاعب والجامعات.", "paras": ["التطبيق الصحيح والصيانة المنتظمة يمنحان عمرًا طويلًا؛ وتُجدَّد المناطق المتآكلة بإصلاح موضعي وتُكوَّن الألوان وفق المشروع."]},
    uygElektrik:{"title": "راتنجات كهربائية", "lead": "تطبيقات صب خالٍ من الفراغات في المحوّلات ووصلات الكابلات والمكوّنات الإلكترونية.", "paras": ["يُصَب الراتنج بسيولة تغلّف المكوّن بالكامل؛ وبعد التصلب يشكّل كتلة عزل لا تنفذ منها الرطوبة، مقاومة للصدمات والاهتزاز."]},
    uygEpdm:{"title": "تطبيق حبيبات EPDM", "lead": "أرضيات آمنة ومزخرفة لملاعب الأطفال والملاعب الرياضية بحبيبات EPDM ملوّنة.", "paras": ["يُفرَش خليط EPDM والرابط ويُسوَّى فوق طبقة SBR؛ وتُحدَّد السماكة وفق ارتفاع السقوط، و24 لونًا تتيح زخارف حرة."]},
    uygSu:{"title": "طلاء مانع لتسرب المياه", "lead": "تطبيقات عزل مائي بلا وصلات بالغشاء السائل، من الأسطح إلى المساحات الرطبة.", "paras": ["تُقوّى الزوايا وتفاصيل الصرف بالشريط، ويُطبَّق الغشاء طبقات ويُتحقَّق باختبار الماء؛ وتُحمى الأسطح المشمسة بطبقة أليفاتية."]},
    uygEndustri:{"title": "أرضيات صناعية بالبولي يوريثان والإيبوكسي", "lead": "تطبيقات أرضيات صحية بلا وصلات تتحمّل الأحمال في المصانع والمستودعات والمواقف.", "paras": ["بعد السفع والبرايمر يُطبَّق طلاء ذاتي التسوية أو بملمس؛ فنحصل على سطح متجانس يقاوم حركة الرافعات والكيماويات والتنظيف المكثّف."]},
    uygDokum:{"title": "تطبيقات صب الإيبوكسي", "lead": "صب طاولات وقطع وأسطح ديكورية براتنج إيبوكسي شفاف.", "paras": ["يتقدّم الصب من الوسط نحو الأطراف وتخرج الفقاعات تلقائيًا؛ ويُبنى العمق طبقات بعد التجلط، ويمنح الصنفرة والتلميع لمعانًا بلوريًا."]},
    parke:{ lead:"عائلة لواصق قائمة أساسًا على البولي يوريثان تربط الباركيه الصلب والمصفّح والهندسي بالخرسانة وطبقات التسوية ربطًا دائمًا.",
      paras:["تقوم المجموعة على ثلاث عائلات كيميائية: بولي يوريثان ثنائي المكوّن (2K) خالٍ من المذيبات يناسب جميع أنواع الباركيه؛ وهجائن STPE أحادية المكوّن تتصلّب بالرطوبة ويمكن مسحها دون أثر وهي طرية؛ وغراء PVAc مائي للخشب والمصفّح. يعتمد الاختيار الصحيح على حركة الخشب البُعدية وامتصاصية الأرضية وزمن العمل المطلوب.", "القوام الثيكسوتروبي يمنع الانزلاق الرأسي، والرابطة المرنة تمنع صرير الألواح وانفصالها مع الوقت. المنتجات متوافقة مع أنظمة التدفئة الأرضية. قبل التطبيق يجب قياس رطوبة الأرضية واختيار المالج المسنّن الصحيح وعدم تجاوز زمن الفتح."],
      areas:["الباركيه الصلب والمصفّح", "الباركيه الهندسي", "الأرضيات ذات التدفئة", "المنازل والمكاتب", "الفنادق والمتاجر", "أرضيات الصالات الرياضية الخشبية"],
      props:["خيارات PU 2K خالية من المذيبات وSTPE 1K وPVAc", "رابطة مرنة تمنع الصرير والانفصال", "ثيكسوتروبي — لا ينزلق على الأسطح الرأسية", "متوافق مع التدفئة الأرضية", "تركيبات تناسب مختلف المناخات"],
      products:[{"t": "لاصق باركيه بولي يوريثان 2K قياسي", "d": "بولي يوريثان ثنائي المكوّن خالٍ من المذيبات لجميع أنواع الباركيه؛ قوة نهائية عالية وزمن عمل متوازن."}, {"t": "لاصق باركيه بولي يوريثان 2K ثيكسوتروبي", "d": "قوامه العالي يحفظ أسنان المالج ولا يسيل على الميول؛ فرد نظيف ومنضبط للألواح العريضة."}, {"t": "لاصق باركيه بولي يوريثان 2K مرن", "d": "رابطة مرنة دائمة تساير حركة الخشب؛ الخيار الأول للباركيه الصلب والألواح العريضة والتدفئة الأرضية."}, {"t": "لاصق باركيه بولي يوريثان 2K فائق المرونة", "d": "استطالته العالية تمتص الإجهادات على الأرضيات الصعبة والمتحركة وتقطع جسور الصوت لأرضية هادئة."}, {"t": "لاصق باركيه بولي يوريثان 2K معزّز", "d": "قبضة معزّزة للحركة الكثيفة والأسطح الصعبة، كأرضيات الصالات الرياضية الخشبية."}, {"t": "لاصق باركيه هجين STPE أحادي المكوّن", "d": "يتصلّب بالرطوبة دون خلط؛ يُطبَّق بلا برايمر على الخرسانة المناسبة ويُمسح دون أثر وهو طري."}, {"t": "غراء خشب PVAc أحادي (D3)", "d": "غراء مائي للخشب والمصفّح بفئة D3؛ سريع ونظيف وبلا رائحة لأعمال التجميع والتصفيح."}] },
    pvc:{ lead:"لاصق أكريليكي مائي يثبّت أرضيات PVC المرنة والفينيل واللينوليوم والموكيت المبطّن على الأسطح الماصّة.",
      paras:["تركيبة أحادية المكوّن خالية من المذيبات وعديمة الرائحة، تتيح العمل بأمان في الأماكن المغلقة كالمستشفيات والمدارس والمنازل. الالتصاق الأولي العالي وفترة العمل الطويلة يتركان هامشًا للتعديل في المساحات الواسعة.", "يُفرَد اللاصق بالتساوي بمالج مسنّن، ويُفرَش الغطاء خلال دقائق ثم يُكبَس بالأسطوانة لضمان التلامس الكامل. في الأرضيات المدفّأة يُطفأ النظام قبل التطبيق ويُعاد تشغيله تدريجيًا بعد التركيب. يجب عدم الخلط بين لاصق الأرضيات ولاصق أنابيب PVC الصلبة."],
      areas:["المستشفيات والمختبرات", "المدارس والحضانات", "المباني السكنية", "المولات والمتاجر", "المكاتب", "أرضيات PVC المتجانسة وغير المتجانسة"],
      props:["أكريليك مائي أحادي المكوّن — بلا مذيبات", "تطبيق اقتصادي باستهلاك منخفض", "التصاق أولي وقوة نهائية عاليان", "عمل بلا رائحة في الأماكن المغلقة", "متوافق مع بروتوكول التدفئة الأرضية"],
      products:[{"t": "لاصق أرضيات أكريليكي مائي", "d": "أحادي المكوّن، أكريليكي الأساس وخالٍ من المذيبات. سهل التطبيق بالتصاق أولي ونهائي عاليين وفترة عمل طويلة. يُستخدم للصق أرضيات PVC وPU واللاتكس والمارلي والمارموليوم واللينوليوم والموكيت المبطّن على الخرسانة وطبقات التسوية."}] },
    kaucuk:{ lead:"لواصق بولي يوريثان ثنائية المكوّن تربط بلاط المطاط ولفائفه بالأرضية، وشرائح العشب الصناعي ببعضها وبشريط الوصل.",
      paras:["البنية الثنائية الخالية من المذيبات تحافظ على قوة الالتصاق سنوات دون تأثر بضوء النهار أو الماء أو العوامل الخارجية. يُلصق بلاط المطاط ولفائفه على الخرسانة وMDF والخشب المضغوط والمعدن — وعند الحاجة على السيراميك والغرانيت والرخام.", "في العشب الصناعي، المنطقة الحرجة ليست السطح الواسع بل خطوط الوصل ومرتدّات الحواف: يُفرَد اللاصق بالتساوي على شريط الوصل وتُوسَّط الشرائح وتُحمى الوصلة طوال فترة التصلب. خيار اللون الأخضر يجعل الوصلات غير مرئية."],
      areas:["ملاعب كرة القدم والعشب الصناعي", "أرضيات بلاط ولفائف المطاط", "الصالات الرياضية", "ملاعب الأطفال", "العشب التجميلي والمناظر الطبيعية", "محيط المسابح"],
      props:["بولي يوريثان ثنائي المكوّن بلا مذيبات", "مقاومة للأشعة والماء والعوامل الخارجية", "توافق تام مع شريط الوصل", "ثيكسوتروبي — لا يسيل على الأسطح المائلة", "خيارات مرنة واقتصادية"],
      products:[{"t": "لاصق مطاط بولي يوريثان 2K مرن", "d": "نظام ثنائي مرن خالٍ من المذيبات يربط بلاط المطاط ولفائفه بالخرسانة والخشب والمعدن."}, {"t": "لاصق مطاط بولي يوريثان 2K اقتصادي", "d": "نسخة ثنائية متوازنة القبضة بميزة تكلفة في المساحات الكبيرة."}, {"t": "لاصق عشب صناعي بولي يوريثان 2K", "d": "لاصق أخضر يربط شرائح العشب بشريط الوصل؛ مقاوم للماء والعوامل الخارجية."}, {"t": "لاصق عشب صناعي اقتصادي", "d": "حل ثنائي اقتصادي للملاعب وأعمال المناظر الطبيعية."}, {"t": "شريط الوصل", "d": "الشريط المنسوج الذي يصل شرائح العشب من الأسفل؛ يُستخدم مع اللاصق."}, {"t": "بلاط المطاط", "d": "بلاط أرضيات جاهز مرن مقاوم للاهتراء بمقاسات وسماكات متعددة."}, {"t": "لفائف مطاط SBR", "d": "الطبقة السفلية الممتصة للصدمات في الأرضيات الرياضية؛ تُستخدم أيضًا تحت التسوية وللعزل الصوتي."}] },
    filtre:{ lead:"أنظمة بولي يوريثان صناعية تمسك وسيط الترشيح والإطار والأغطية معًا — وتشكّل حشوات إحكام في مكانها عند الحاجة.",
      paras:["مهمتان مختلفتان تلبيهما عائلتان مختلفتان: تثبيت الوسيط يستهدف رابطة قوية قابلة للتكرار، بينما منتجات الحشوات تقدّم ملءًا محكومًا وثبات شكل وإحكامًا. تتوفر درجات بطيئة التصلب للصب اليدوي وسريعة وغير سائلة (ثيكسوتروبية) لخطوط الجرعات الآلية.", "طريقة الجرعة واللزوجة وزمن العمل ودرجة حرارة التشغيل والسائل الملامس تحدّد الاختيار. عند تغيّر الوسيط أو الإطار أو دفعة المواد، يُنصح بتجربة صغيرة قبل الإنتاج التسلسلي."],
      areas:["فلاتر الهواء", "فلاتر السيارات", "خراطيش الترشيح الصناعية", "حشوات الفلاتر", "خطوط الجرعات الآلية"],
      props:["منتجات منفصلة للتثبيت والحشوات", "سرعات تصلب للخطوط اليدوية والآلية", "خيار غير سائل (ثيكسوتروبي)", "ثبات جرعات قابل للتكرار", "توافق مع الأطر المعدنية والبلاستيكية"],
      products:[{"t": "لاصق فلاتر سريع التصلب", "d": "نظام بولي يوريثان مطوّر لدورات قصيرة في خطوط الجرعات الآلية."}, {"t": "لاصق فلاتر للصب اليدوي", "d": "درجة لتثبيت الوسيط بفترة عمل واسعة للجرعات اليدوية."}, {"t": "لاصق فلاتر للجرعات الآلية", "d": "درجة توفر ثبات جرعات قابلًا للتكرار في خطوط الإنتاج."}, {"t": "لاصق فلاتر سريع", "d": "نسخة بزمن تجلط قصير لسرعات الخطوط العالية."}, {"t": "لاصق فلاتر قياسي", "d": "حل عام لربط الوسيط في فلاتر الهواء والسيارات."}, {"t": "درجة ثيكسوتروبية / حشوات", "d": "درجة غير سائلة تشكّل الحشوات في مكانها بثبات شكل عالٍ."}] },
    endYap:{ lead:"أنظمة بولي يوريثان تربط ألواح العزل بأسطح GRP والمعدن وغيرها في ألواح الساندويتش وهياكل المركبات.",
      paras:["لواصق ألواح أحادية وثنائية المكوّن لشاحنات التبريد وهياكل المركبات التجارية، تدعمها درجات منخفضة اللزوجة سريعة التصلب للتطبيق الآلي. وتُقدَّم حلول بولي يوريثان مستقلة للصق ألواح المطاط على الخشب المضغوط أو المعدن.", "في مركبات نقل الأغذية، تُكمِل المنظومةَ طلاءاتُ أرضيات إيبوكسي مضادة للبكتيريا عالية الالتصاق والأداء الميكانيكي، مقاومة لأحماض الأغذية وكثير من الكيماويات. جميع المنتجات خالية من المذيبات."],
      areas:["إنتاج ألواح الساندويتش", "هياكل مركبات التبريد", "أرضيات المركبات التجارية", "ألواح الغرف الباردة", "خطوط التجميع الصناعية"],
      props:["خيارات بولي يوريثان 1K و2K", "لزوجة منخفضة للتطبيق الآلي", "درجات سريعة التصلب", "مكمّل أرضيات إيبوكسي مضاد للبكتيريا", "تركيبة خالية من المذيبات"],
      products:[{"t": "لاصق ألواح بولي يوريثان 1K", "d": "نظام أحادي يتصلّب بالرطوبة؛ تطبيق عملي على الألواح وهياكل المركبات."}, {"t": "لاصق ألواح بولي يوريثان 2K", "d": "نظام ثنائي عالي المتانة يربط ألواح العزل بالـGRP والمعدن."}, {"t": "لاصق ألواح للتطبيق الآلي 2K", "d": "درجة منخفضة اللزوجة سريعة التصلب لخطوط التطبيق الآلية."}] },
    dokme:{ lead:"بريبوليمرات بولي يوريثان أحادية المكوّن تتصلّب بالرطوبة، تحوّل حبيبات SBR وEPDM في الموقع إلى أرضية مرنة متجانسة.",
      paras:["يُخلَط الرابط مع الحبيبات ويُفرَش على السطح ليتصلّب في طبقة نفوذة للماء ممتصة للصدمات وبلا وصلات. تُفرَش المساحات الكبيرة بآلة الفرد (الفينيشر) والصغيرة يدويًا. الدرجات الأروماتية خيار اقتصادي للـSBR الأسود والأنظمة الداكنة؛ وللـEPDM الملوّن تُنصح الدرجات الأليفاتية التي لا تصفرّ والمقاومة للأشعة.", "قلة الرابط تُضعف الرابطة وزيادته تُقسّي السطح؛ نسبة الخلط ونظافة الحبيبات تحسمان النتيجة، ويُنصح بتجربة صغيرة مع كل دفعة حبيبات جديدة."],
      areas:["ملاعب الأطفال", "مسارات الجري والمشي", "الأرضيات الرياضية", "ساحات المدارس", "الحدائق والمناظر الطبيعية", "الأرضيات الديكورية"],
      props:["بريبوليمر 1K يتصلّب بالرطوبة", "خيارات أروماتية وأليفاتية (لا تصفرّ)", "سطح مرن نفوذ للماء بلا وصلات", "فرد بالفينيشر أو يدويًا", "توافق تام مع حبيبات EPDM وSBR"],
      products:[{"t": "رابط صب ملوّن", "d": "رابط مصبوغ يحافظ على اتساق الألوان في الأنظمة الملوّنة."}, {"t": "رابط صب أروماتي (لزوجة منخفضة)", "d": "درجة أروماتية اقتصادية سهلة التشغيل سريعة تبليل الحبيبات."}, {"t": "رابط صب أروماتي", "d": "رابط wet-pour القياسي للـSBR الأسود والأنظمة الداكنة."}, {"t": "رابط EPDM أليفاتي (مقاوم للأشعة)", "d": "درجة مميزة لا تصفرّ لأسطح EPDM الملوّنة."}, {"t": "رابط نظام wet-pour", "d": "رابط متعدد الأغراض لملاعب الأطفال والأرضيات الرياضية المصبوبة."}] },
    press:{ lead:"راتنجات رابطة مطوّرة لإنتاج بلاط المطاط والحواف والقطع التقنية في القوالب تحت الضغط والحرارة.",
      paras:["يُكبَس خليط الحبيبات والرابط في القالب ليتحوّل إلى منتجات كثيفة ثابتة الشكل. حرارة القالب وزمن الدورة وبنية الحبيبات تحدّد النتيجة؛ وثبات هذه المعايير يضمن سلامة القطع في الإنتاج التسلسلي.", "لا يجوز استبدال رابط الصب برابط الكبس أو العكس: زمن العمل وجودة السطح والمتانة مصمّمة بشكل مختلف للعمليتين. جودة الحبيبات تحدّد المرونة وحجمها يحدّد الاستهلاك."],
      areas:["إنتاج بلاط المطاط", "حواف ومنحدرات مطاطية", "حصائر الإسطبلات", "القطع المطاطية التقنية", "الإنتاج التسلسلي داخل المصنع"],
      props:["تركيبة مخصّصة لعملية القولبة", "قوة ربط عالية باستهلاك منخفض", "قابلية تكرار بمعايير دورة ثابتة", "بنية منتج كثيفة ثابتة الشكل", "توافق مع حبيبات SBR وEPDM"],
      products:[{"t": "رابط كبس قياسي", "d": "رابط قوالب بدورات متوازنة لإنتاج بلاط وحواف المطاط."}, {"t": "رابط كبس سريع الدورة", "d": "أزمنة كبس مختصرة لخطوط الإنتاج عالية الطاقة."}, {"t": "رابط كبس اقتصادي", "d": "درجة بميزة تكلفة للقطع القياسية."}, {"t": "رابط كبس عالي المتانة", "d": "تركيبة معزّزة للقطع التقنية ذات الحركة الكثيفة."}] },
    tas:{ lead:"راتنجات تربط حبيبات الحجر الطبيعية والملوّنة بغشاء شفاف، مكوّنة الأسطح الديكورية النفوذة للماء المعروفة بسجاد الحجر.",
      paras:["تُقدَّم ثلاثة خيارات: أليفاتي أحادي المكوّن، وأليفاتي ثنائي المكوّن، وإيبوكسي ثنائي المكوّن. الأنواع الأليفاتية لا تصفرّ تحت الأشعة وهي الخيار الأول خارجيًا؛ والإيبوكسي بديل اقتصادي للداخل والمناطق المحجوبة عن الشمس.", "السطح المتصلّب مانع للانزلاق، لا يتأثر بالرياح، مقاوم للماء ومعظم الكيماويات؛ ويخدم الحركة الخفيفة سنوات طويلة دون صيانة خاصة."],
      areas:["الممرات والمعابر", "الحدائق والمساحات النباتية", "محيط المسابح والبرك", "البلكونات والشرفات", "أرضيات الفنادق والمعارض", "الديكورات الداخلية"],
      props:["غشاء شفاف يُظهر ملمس الحجر", "أنواع أليفاتية لا تصفرّ", "سطح نفوذ للماء مانع للانزلاق", "خيارا تطبيق 1K و2K", "متانة بلا صيانة"],
      products:[{"t": "رابط حجر أليفاتي 2K", "d": "نظام شفاف لا يصفرّ — الخيار الأول لسجاد الحجر الخارجي."}, {"t": "رابط حجر إيبوكسي 2K", "d": "درجة اقتصادية عالية المتانة للداخل والمناطق المحجوبة عن الأشعة."}, {"t": "رابط حجر أليفاتي 1K", "d": "تطبيق أحادي عملي للبلكونات والشرفات والممرات."}] },
    epdm:{ lead:"حبيبات زاهية الألوان ثابتة تحت الأشعة، تُنتَج من مطاط EPDM الصناعي — المادة الخام للأرضيات المرنة الآمنة مع الروابط البولي يوريثانية.",
      paras:["البنية المتجانسة للحبيبات واتساع لوحة الألوان يتيحان تصميمًا حرًا، من ملاعب الأطفال المزخرفة إلى الملاعب متعددة الألوان. بضبط حجم الحبيبات وسماكة الطبقة تُحقَّق مستويات مختلفة من أمان السقوط؛ وفي ملاعب الأطفال تُحدَّد السماكة وفق نهج ارتفاع السقوط الحرج EN 1177.", "تعمل حبيبات SBR المعاد تدويرها إلى جانب EPDM كطبقة سفلية مرنة اقتصادية لهذه الأنظمة."],
      areas:["ملاعب الأطفال", "مضامير الجري وأسطح الترتان", "ساحات المدارس", "الملاعب الرياضية", "محيط المسابح", "مساحات الجمباز والتمارين"],
      props:["ألوان دائمة بفضل ثبات الأشعة", "سطح غير سام مانع للانزلاق", "بنية مرنة ممتصة للصدمات", "لوحة ألوان غنية وإمكانات زخرفية", "نظام اقتصادي بطبقة SBR سفلية"],
      products:[{"t": "حبيبات EPDM — 24 لونًا قياسيًا", "d": "حبيبات ملوّنة متجانسة ثابتة تحت الأشعة؛ تصفّح اللوحة الكاملة في المعرض."}, {"t": "حبيبات SBR (معاد تدويرها)", "d": "حبيبات الطبقة السفلية السوداء الاقتصادية الممتصة للصدمات."}] },
    puZemin:{ lead:"أنظمة طلاء ودهانات بولي يوريثان للأرضيات التي تكون فيها المرونة وامتصاص الصدمات ومقاومة الأشعة عوامل حاسمة.",
      paras:["الأنواع الصلبة ذاتية التسوية تصنع أسطحًا ملساء صحية في المصانع والمستودعات وغرف التبريد؛ والأنواع المرنة تمتص الصدمات في الصالات الرياضية وميادين الرماية والحضانات فتقلّل خطر الإصابات. يكتمل النظام بالمعجون وطبقة EPDM وطبقة نهائية مقاومة للأشعة.", "مقارنة بصلابة الإيبوكسي، يقدّم البولي يوريثان تكيّفًا مع الحركة الحرارية وامتصاصًا للاهتزازات وخفضًا لصوت الخطوات — مع مقاومة أعلى للأشعة والعوامل الجوية."],
      areas:["المصانع والمستودعات", "غرف التبريد", "الصالات الرياضية وميادين الرماية", "مواقف السيارات والمساحات المفتوحة", "المكاتب والمتاجر وصالات العرض", "المساحات الرطبة"],
      props:["تكوين صلب أو مرن", "طبقات نهائية لا تصفرّ مقاومة للأشعة", "تكيّف مع الإجهادات الحرارية", "سطح يخفض صوت الخطوات", "خيارات مضادة للبكتيريا ومقاومة للهب"],
      products:[{"t": "دهان أرضيات بولي يوريثان 2K (UV)", "d": "طبقة اللون والحماية في الأنظمة؛ طبقة نهائية لا تصفرّ."}, {"t": "طلاء ذاتي التسوية 2K (صلب)", "d": "طلاء أملس عالي المقاومة للمصانع والمستودعات."}, {"t": "طلاء ذاتي التسوية 2K (مرن)", "d": "درجة ممتصة للصدمات للصالات الرياضية ومساحات الراحة."}] },
    akZemin:{ lead:"طلاءات رياضية أكريليكية مائية خالية من المذيبات، تُطبَّق طبقات متتالية على الخرسانة والأسفلت بمقاومة ممتازة للأشعة.",
      paras:["يتكوّن النظام من معيد تسوية (resurfacer) وطبقات وسائد ممتصة للصدمات وطبقة نهائية محمّلة ودهان خطوط. بضبط محتوى الرمل وعدد الطبقات يُخصَّص معامل احتكاك الملعب — أي سرعة اللعب.", "مقاومة دورات التجمد والذوبان وثبات الألوان يمنحان عمرًا طويلًا خارجيًا؛ وداخليًا يخدم النظام كل المستويات من الهواة إلى المحترفين."],
      areas:["ملاعب التنس", "ملاعب السلة والطائرة", "الملاعب متعددة الأغراض", "مسارات الجري والدراجات", "منشآت المدارس والبلديات"],
      props:["نظام مائي صديق للبيئة", "سرعة ملعب قابلة للضبط (الاحتكاك)", "مقاومة الأشعة والتجمد والذوبان", "التصاق قوي بالخرسانة والأسفلت", "صيانة اقتصادية وألوان واسعة"],
      products:[{"t": "ورنيش أكريليكي", "d": "طبقة نهائية تمنح الأسطح الأكريليكية لمعانًا وحماية."}, {"t": "وسادة أكريليكية (سميكة)", "d": "طبقة الوسادة السميكة الممتصة للصدمات في الملاعب."}, {"t": "وسادة أكريليكية (رقيقة)", "d": "طبقة وسادة رقيقة لضبط دقيق لسرعة الملعب."}, {"t": "معيد تسوية أكريليكي مميز", "d": "ممهّد مميز يملأ العيوب ويحضّر القاعدة."}, {"t": "معيد تسوية أكريليكي", "d": "طبقة التصحيح القياسية فوق الخرسانة والأسفلت."}, {"t": "طبقة نهائية أكريليكية محمّلة", "d": "الطبقة الملوّنة المحمّلة بالرمل التي تحدّد معامل الاحتكاك."}, {"t": "دهان أكريليكي مركّز مميز", "d": "طبقة لون طويلة العمر عالية الأصباغ."}, {"t": "دهان أكريليكي مركّز", "d": "مركّز اقتصادي لتلوين الملاعب."}, {"t": "برايمر بولي يوريثان 1K", "d": "برايمر الخرسانة المطبَّق قبل الأنظمة الأكريليكية."}, {"t": "برايمر أكريليكي", "d": "برايمر مائي يؤمّن التصاق الطبقات الأكريليكية."}, {"t": "دهان خطوط أكريليكي", "d": "دهان عالي التغطية لخطوط الملاعب."}] },
    epZemin:{ lead:"من الدهان رقيق الطبقة إلى الطلاءات ذاتية التسوية ومونة الإيبوكسي: أنظمة أرضيات بلا وصلات تركّز على النظافة والمتانة الميكانيكية.",
      paras:["الأنواع ذاتية التسوية تصنع أسطحًا ملساء لامعة؛ والأنواع ذات الملمس (قشرة البرتقال) أسطحًا مانعة للانزلاق واقتصادية. البنية المتجانسة التي لا يتصاعد منها الغبار لا تترك مكانًا للبكتيريا — ميزة للمستشفيات ومصانع الأغذية والمختبرات. ويمكن إنتاج نسخ موصلة (ESD) عند الطلب.", "تحتاج الخرسانة الجديدة نحو ثلاثة أسابيع من الإنضاج مع برايمر وفحص رطوبة قبل التطبيق. ولأن مقاومة الإيبوكسي للأشعة محدودة، تُحمى المناطق المشمسة بطبقة نهائية مقاومة للأشعة، وتُدعَّم مناطق الأحمال الثقيلة بمونة الإيبوكسي."],
      areas:["المصانع ومواقع الإنتاج", "المستودعات والمخازن", "المستشفيات والمختبرات", "منشآت الأغذية والأدوية", "مواقف السيارات المغلقة", "المطابخ الصناعية"],
      props:["خيارات ذاتية التسوية ودهان وملمس", "مقاومة ميكانيكية وكيميائية عالية", "سطح صحي بلا غبار ولا وصلات", "نسخ موصلة (ESD) متاحة", "التطبيق بجميع ألوان RAL"],
      products:[{"t": "طلاء إيبوكسي بملمس (قشرة البرتقال)", "d": "طبقة نهائية بملمس مانع للانزلاق، اقتصادية وديكورية."}, {"t": "دهان أرضيات إيبوكسي", "d": "دهان حماية رقيق الطبقة للحركة الخفيفة والمتوسطة."}, {"t": "طلاء إيبوكسي ذاتي التسوية", "d": "طلاء ذاتي التسوية أملس لامع عالي المقاومة."}] },
    astar:{ lead:"الطبقة الأولى: جسر التصاق بين الطلاء والخرسانة، يوازن الامتصاصية ويوقف الغبار ويشكّل حاجز رطوبة عند الحاجة.",
      paras:["برايمرات الإيبوكسي تناسب الأرضيات التي تتطلب التصاقًا ومقاومة كيميائية عالية؛ وبرايمرات البولي يوريثان تتوافق مع الطبقات المرنة، والأكريليكية مع الأنظمة الرياضية الأكريليكية. البرايمرات المحمّلة تملأ عيوب السطح وتحضّر قاعدة ملساء.", "رطوبة الأرضية هي الفحص الأول: حتى نحو 3% يكفي برايمر قياسي، وبين 3 و7% يلزم برايمر إيبوكسي بحاجز رطوبة، وفوق ذلك لا يُطبَّق النظام. تجاوز البرايمر يؤدي إلى تقشّر وانتفاخ مبكرين."],
      areas:["أسطح الخرسانة وطبقات التسوية", "الأسطح المعدنية", "الأرضيات الرطبة (نوع الحاجز)", "قواعد الأنظمة الرياضية", "جميع الأرضيات قبل الطلاء"],
      props:["عائلات إيبوكسي وبولي يوريثان وأكريليك", "خيارات بحاجز رطوبة", "تصحيح السطح بالبرايمر المحمّل", "أنواع خاصة للأسطح غير الماصّة", "الطبقة الحاسمة لعمر النظام"],
      products:[{"t": "برايمر بولي يوريثان بلا مذيبات", "d": "برايمر عديم الرائحة آمن للأماكن المغلقة."}, {"t": "برايمر بولي يوريثان 1K", "d": "برايمر عملي يتصلّب بالرطوبة ومتوافق مع الطبقات المرنة."}, {"t": "برايمر بولي يوريثان 1K شفاف", "d": "درجة شفافة عميقة النفاذ للأسطح الماصّة."}, {"t": "حاجز رطوبة إيبوكسي 2K", "d": "برايمر حاجز يحمي الطلاء على الأرضيات الرطبة."}, {"t": "برايمر إيبوكسي 2K", "d": "المعيار للأرضيات التي تتطلب التصاقًا ومقاومة كيميائية عاليين."}, {"t": "برايمر إيبوكسي 2K (اقتصادي)", "d": "حل اقتصادي لتأسيس الخرسانة العام."}] },
    macun:{ lead:"منتجات ملء بولي يوريثانية تسدّ الفواصل والشقوق والمسام، وتؤمّن انتقالًا أملس محكمًا بين الطبقات.",
      paras:["الأنواع عالية ومنخفضة اللزوجة والمتغيرات المرنة تساير حركة الأرضية وتمنع تشقق الحشوة. وفي الأنظمة الرياضية يعمل المعجون كطبقة وسيطة تسدّ مسام نواة الحبيبات.", "اختيار المعجون الصحيح يخفض استهلاك الطبقة ذاتية التسوية فوقه ويحسّن مباشرة جودة السطح النهائي."],
      areas:["ملء الفواصل والشقوق", "الطبقات الوسيطة للأرضيات الرياضية", "مسام أسطح المطاط وSBR", "إصلاحات الخرسانة", "تصحيحات ما قبل الطلاء"],
      props:["متغيرات عالية/منخفضة اللزوجة ومرنة", "مسايرة حركة الأرضية", "سد المسام والإحكام", "يقلّل استهلاك الطبقة النهائية", "توافق تام مع أنظمة البولي يوريثان"],
      products:[{"t": "مادة إحكام PU", "d": "طبقة الإحكام التي تسدّ مسام الحبيبات في الأنظمة الرياضية."}, {"t": "معجون PU مرن", "d": "حشوة مرنة تعمل دون تشقق على الأرضيات المتحركة."}, {"t": "معجون PU منخفض اللزوجة", "d": "درجة سائلة تنفذ إلى المسام الدقيقة والشعيرات."}, {"t": "معجون PU عالي اللزوجة", "d": "درجة كثيفة تحفظ شكلها في الفواصل والفراغات الواسعة."}] },
    suUrun:{ lead:"محفظة عزل مائي كاملة من الأغشية السائلة والبرايمرات وراتنجات الحقن، لكل تفصيل من السطح حتى الأساسات.",
      paras:["درجات أليفاتية للطبقات النهائية المعرّضة للأشعة ودرجات اقتصادية تحت التبليط؛ وأنواع غير سائلة (ثيكسوتروبية) للأسطح الرأسية ومتغيرات هجينة من البيتومين والبولي يوريثان. وتكتمل المنظومة ببرايمرات منفصلة للأسطح الماصّة وغير الماصّة.", "تُوقَف التسرّبات المضغوطة براتنجات حقن أحادية المكوّن تنتفخ عند ملامسة الماء لتتحول إلى رغوة مغلقة الخلايا — فتسدّ تسرّبات الأقبية والأنفاق والمسابح والبنية التحتية من مصدرها."],
      areas:["الأسطح والشرفات", "الحمامات والبلكونات والمساحات الرطبة", "الأساسات والجدران الساندة", "خزانات المياه والمسابح", "حقن الأنفاق والبنية التحتية", "تفاصيل المزاريب المخفية"],
      props:["أغشية سائلة 1K و2K", "طبقات نهائية أليفاتية مقاومة للأشعة", "أنواع ثيكسوتروبية للأسطح الرأسية", "خيارات هجينة بيتومين-بولي يوريثان", "حلول حقن من الجهة السلبية"],
      products:[{"t": "عائلة الأغشية السائلة", "d": "مجموعة عزل كاملة من أغشية PU سائلة 1K/2K وبرايمرات وطبقات نهائية أليفاتية."}, {"t": "غشاء الأسطح الرأسية (ثيكسوتروبي)", "d": "درجة كثيفة تُطبَّق دون سيلان على الجدران وحواف الأسطح."}, {"t": "راتنج حقن (متفاعل مع الماء)", "d": "راتنج يتحوّل لرغوة عند ملامسة الماء فيوقف التسرّبات المضغوطة من مصدرها."}] },
    elektrik:{ lead:"راتنجات صب توفّر عزلًا خاليًا من الفراغات وحماية ميكانيكية — من المحوّلات ووصلات الكابلات إلى الملفات والدوائر الإلكترونية.",
      paras:["تُقدَّم أربع عائلات كيميائية: ورنيشات ملفات تجف بالهواء؛ وإيبوكسيات ثنائية صلبة مقاومة للكيماويات للجهدين المتوسط والعالي؛ وبولي يوريثانات صلبة أو مرنة تمتص الاهتزاز وضجيج الرنين في الجهدين المنخفض والمتوسط؛ وراتنجات هيدروكربونية مرنة خالية من الإيزوسيانات يمكن فتحها وإعادة ملئها.", "الأنواع المرنة تساير التمدد الحراري للكابل فتمنع التشقق والانفصال، وطبيعتها الكارهة للماء تحمي الأجزاء المعدنية من التآكل. وتُستخدم راتنجات الإيبوكسي الشفافة أيضًا في الطاولات والقطع والأرضيات الديكورية."],
      areas:["المحوّلات الجافة", "وصلات الكابلات", "الملفات والمحركات", "تغليف الدوائر الإلكترونية (potting)", "المضخات الغاطسة", "الصب الديكوري الشفاف"],
      props:["عائلات إيبوكسي وبولي يوريثان وهيدروكربون", "صب بلا فراغات — مقاومة للصدمات والاهتزاز", "قابلية إصلاح الأنواع المرنة", "بنية كارهة للماء مانعة للتآكل", "خيارات صب ديكوري شفاف"],
      products:[{"t": "ورنيش ملفات PU أحادي", "d": "ورنيش يجف بالهواء ويتصلّب بالرطوبة، قابل للتطبيق على أي سطح."}, {"t": "راتنج صب PU 2K (صلب)", "d": "عزل خالٍ من الفراغات وحماية ميكانيكية للجهدين المنخفض والمتوسط."}, {"t": "راتنج صب PU 2K (مرن)", "d": "درجة مرنة تمتص الاهتزاز وتساير الحركة الحرارية."}, {"t": "راتنج صب PU 2K (محمّل)", "d": "نسخة عالية الحشو بثبات أبعاد معزّز."}, {"t": "راتنج صب إيبوكسي 2K", "d": "راتنج صلب مقاوم للكيماويات للجهدين المتوسط والعالي."}, {"t": "راتنج هيدروكربوني (قابل للإصلاح)", "d": "راتنج وصلات كابلات بلا إيزوسيانات يمكن فتحه وإعادة ملئه."}, {"t": "راتنج كابلات PU 2K", "d": "ملء سريع وآمن لوصلات الكابلات."}] },
    sporSis:{ lead:"تكوينات أرضيات رياضية طبقية — برايمر ونواة مرنة ومعجون وطبقة نهائية — تتدرّج من الصالات الهاوية إلى مضامير ألعاب القوى الاحترافية.",
      paras:["في الصالات المغلقة يُطبَّق طلاء بولي يوريثان ذاتي التسوية وطبقة نهائية مقاومة للأشعة فوق لفائف SBR أو نواة SBR مصبوبة في الموقع؛ وتُحدَّد السماكة الكلية وفق كثافة الاستخدام. وفي ألعاب القوى يتكامل نظام الساندويتش (نواة SBR مصبوبة + إيلاستومر + سطح EPDM منثور) مع نظام الصب الكامل، والتكوين النفوذ للماء «combined» والطلاء الرشّي الاقتصادي.", "على الملاعب الصلبة تتيح الأنظمة الأكريليكية ضبط سرعة اللعب عبر معيد التسوية وطبقات الوسائد والطبقة المحمّلة. وتُرسَم خطوط الملعب دائمًا كآخر طبقة؛ ويتم التجديد بطبقة نهائية جديدة فقط وبتكلفة منخفضة."],
      areas:["ملاعب التنس", "كرة السلة والكرة الطائرة", "الصالات الرياضية المغلقة", "مضامير ألعاب القوى", "مسارات الجري والمشي", "ملاعب الأطفال", "صالات اللياقة", "ميادين الرماية"],
      props:["تكوين برايمر ← نواة مرنة ← معجون ← طبقة نهائية", "بدائل الساندويتش والصب الكامل وcombined والرش", "نواة SBR/EPDM ممتصة للصدمات", "طبقات أليفاتية لا تصفرّ", "تجديد اقتصادي للألوان والخطوط", "للاستخدام الداخلي والخارجي"] },
    endSis:{ lead:"أنظمة أرضيات صناعية تُكوَّن وفق حمل الحركة ومتطلبات النظافة والميزانية — من الدهان رقيق الطبقة إلى مونة الإيبوكسي.",
      paras:["دهان إيبوكسي اقتصادي للحركة الخفيفة؛ وأنظمة من برايمر وطبقة وسطى وطلاء ذاتي التسوية للخدمة المتوسطة والشاقة؛ وتدعيم بمونة إيبوكسي تُطبَّق كطبقة تسوية لمناطق الأحمال الثقيلة والأرضيات المتضررة. وحيث يلزم منع الانزلاق، تُمنَح الطبقة النهائية ملمس قشرة البرتقال.", "الأنظمة البولي يوريثانية شبه المرنة تخفض صوت الخطوات في الطوابق المعلّقة والفنادق والمكاتب؛ وتستخدم المشاريع الديكورية رقائق ورمالًا ملوّنة وطبقات مطبوعة لأسطح فريدة. وفي المناطق ذات الطابع الطبي تُفعَّل الخيارات المضادة للبكتيريا والموصلة (ESD)."],
      areas:["أرضيات المصانع", "المستودعات والمخازن", "المختبرات وغرف التبريد", "منشآت الأغذية والأدوية", "مواقف السيارات المغلقة", "حظائر الطائرات", "مراكز صيانة وغسيل السيارات", "المطاعم والمقاهي", "غرف الفنادق والمساحات المشتركة", "المتاجر والمكاتب وصالات المعارض", "الحضانات ورياض الأطفال"],
      props:["مستويات دهان وذاتي تسوية وملمس ومونة", "خيار قشرة البرتقال المانع للانزلاق", "تكوين شبه مرن يخفض صوت الخطوات", "رقائق ديكورية ورمال ملوّنة", "بدائل مضادة للبكتيريا وESD", "التطبيق بجميع ألوان RAL"] },
    suSis:{ lead:"نظام عزل مائي متجانس من برايمر وتقوية للتفاصيل وغشاء سائل على طبقات وطبقة نهائية محمية من الأشعة.",
      paras:["في المساحات الرطبة تُقوّى الزوايا وتفاصيل الصرف بشريط التقوية ثم تُطبَّق طبقتان على الأقل من الغشاء السائل؛ وبعد التحقق باختبار الماء يُبلَّط فوقه. وعلى الأسطح والشرفات يُستخدم غشاء مقاوم للأشعة أو طبقة أليفاتية؛ وفي المساحات المستوية الكبيرة يمكن الجمع بين الغشاء اللفائفي والتفاصيل السائلة.", "راتنجات الحقن المتفاعلة مع الماء تعالج التسرّبات المضغوطة والعزل من الجهة السلبية. ويجب التخطيط للعزل المائي أثناء الإنشاء؛ فالتدخل اللاحق أصعب وأكثر كلفة."],
      areas:["الأسطح والشرفات", "البلكونات", "الحمامات والمساحات الرطبة", "الأساسات والجدران الساندة", "خزانات المياه والمسابح", "أسطح مواقف السيارات"],
      props:["شريط تقوية وشبكة للتفاصيل", "سماكة غشاء محكومة على طبقات", "تحقّق باختبار الماء", "طبقة أليفاتية على الأسطح المعرّضة للأشعة", "حل مركّب مع الغشاء اللفائفي", "عزل من الجهة السلبية بالحقن"] }
  },

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
