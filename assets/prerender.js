/* =============================================================
   LEON KİMYA — derleme zamanı markup üreteci
   Kullanım:  node assets/prerender.js <dil>
   Çıktı   :  #app içine gömülecek HTML (stdout)

   build-pages.py bunu her dil için çağırır. Amaç: sayfanın gövdesi
   HTML'de hazır gelsin — arama motorları ve link önizlemesi yapan
   botlar JavaScript çalıştırmadığı için aksi hâlde boş sayfa görürler.
   ============================================================= */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const dil = (process.argv[2] || "tr").slice(0, 2);
const ASSETS = __dirname;

/* i18n.js tarayıcı için yazıldı: window.SITE_BASE / window.STRINGS atar.
   Node'da window yok, o yüzden sahte bir global veriyoruz. */
const kutu = { console, module: { exports: {} } };
kutu.window = kutu;
vm.createContext(kutu);

function calistir(dosya) {
  const kod = fs.readFileSync(path.join(ASSETS, dosya), "utf8");
  vm.runInContext(kod, kutu, { filename: dosya });
}

calistir("i18n.js");

if (!kutu.SITE_BASE || !kutu.STRINGS) {
  console.error("HATA: i18n.js SITE_BASE/STRINGS tanımlamadı");
  process.exit(1);
}

/* split.js Node modunda buildMarkup'ı module.exports'a koyar.
   Bu bağlamda `window` TANIMSIZ bırakılmalı — split.js NODE modunu
   ondan anlıyor. */
const splitKutu = { console, module: { exports: {} }, require };
vm.createContext(splitKutu);

/* Görsel ölçü haritası: dosya `window.IMG_SIZES = {...}` yazıyor ama burada
   window yok; bare global'e çeviriyoruz ki split.js'in wh() yardımcısı
   bulabilsin. Bulamazsa width/height yazılmaz — sayfa çalışır ama
   görsel yüklenirken zıplar. */
const olcuKod = fs
  .readFileSync(path.join(ASSETS, "img-sizes.js"), "utf8")
  .replace("window.IMG_SIZES", "var IMG_SIZES");
vm.runInContext(olcuKod, splitKutu, { filename: "img-sizes.js" });
if (!splitKutu.IMG_SIZES) {
  console.error("HATA: img-sizes.js yüklenemedi (önce build-img-sizes.py çalıştırın)");
  process.exit(1);
}

vm.runInContext(fs.readFileSync(path.join(ASSETS, "split.js"), "utf8"), splitKutu, {
  filename: "split.js",
});

const buildMarkup = splitKutu.module.exports.buildMarkup;
if (typeof buildMarkup !== "function") {
  console.error("HATA: split.js buildMarkup'ı dışarı vermedi");
  process.exit(1);
}

/* --veri modu: build-pages.py JSON-LD'yi doldurmak icin iletisim verisini
   buradan okur. Amac i18n.js'i TEK KAYNAK tutmak — ayni bilgiyi bir de
   Python tarafina yazmak, birini guncelleyip digerini unutma riski demek. */
if (dil === "--" || process.argv[2] === "--veri") {
  const c = kutu.SITE_BASE.contact || {};
  process.stdout.write(JSON.stringify({
    contactReady: !!kutu.SITE_BASE.contactReady,
    telephone: c.tel1 || "",
    mobile: c.telMobile || "",
    email: c.email || "",
    postal: c.postal || null,
    catalogReady: !!(kutu.SITE_BASE.catalog || {}).ready,
    catalogFiles: (kutu.SITE_BASE.catalog || {}).files || {}
  }));
  process.exit(0);
}

const T = kutu.STRINGS[dil];
if (!T) {
  console.error("HATA: bilinmeyen dil: " + dil);
  process.exit(1);
}

const RTL = (kutu.SITE_BASE.langs.find((l) => l.lang === dil) || {}).dir === "rtl";
process.stdout.write(buildMarkup(kutu.SITE_BASE, T, dil, RTL));
