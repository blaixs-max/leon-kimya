/* =============================================================
   LEON KİMYA — render betiği  (v3 · "Endüstriyel Kurumsal" tasarım)
   İçerik: assets/i18n.js (SITE_BASE + STRINGS)  |  Stil: assets/split.css
   Dil: <html lang="..."> değerinden okunur. Arapça için dir="rtl".
   -------------------------------------------------------------
   GÜVENLİK KURALI
   Boş bırakılmış iletişim bilgileri ASLA bağlantı olarak render
   edilmez. WhatsApp / telefon / e-posta / harita / katalog alanları
   boşsa ilgili buton veya bölüm hiç basılmaz.
   -------------------------------------------------------------
   ÜRÜN GÖRSELLERİ
   Mevcut prod-* / epdm-* dosyaları bu tasarımda DEĞİŞTİRİLMEDİ; yalnızca
   nasıl gösterildikleri değişti (kırpılmadan, beyaz zeminde "contain" ile).
   09.2026: aynı ambalajı paylaşan varyantlara ayrı ambalaj görseli eklendi
   (prod-lk-<kod>.webp; kap aynı, yalnız etiket farklı).
   ============================================================= */
(function(){
"use strict";
/* Bu dosya IKI ortamda calisir:
   - Node (derleme): buildMarkup() disari verilir, build-pages.py cagirir
   - Tarayici: markup zaten HTML'de varsa TEKRAR URETMEZ, sadece davranis baglar
   Prerender bir sebeple uretilmezse tarayici markup'i kendisi kurar (emniyet agi). */
const NODE = (typeof window === "undefined");

/* ---- saf yardimcilar: hem markup hem davranis tarafi kullanir ---- */
const $=(s,r)=>(r||document).querySelector(s), $$=(s,r)=>[...(r||document).querySelectorAll(s)];
/* Tirnak da kacirilir: metinler aria-label / title gibi özniteliklere de yaziliyor */
const e = s => String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const n2 = i => String(i+1).padStart(2,"0");
const has = v => !!(v && String(v).trim());

/* Gorselin gercek olcusunu <img>'e yazar: tarayici yeri onceden ayirir,
   sayfa gorsel yuklenince ZIPLAMAZ (CLS). Harita otomatik uretilir:
   assets/build-img-sizes.py -> assets/img-sizes.js */
const SIZES = (typeof window !== "undefined" && window.IMG_SIZES)
            || (typeof IMG_SIZES !== "undefined" ? IMG_SIZES : {});
const wh = src => {
  const d = SIZES[String(src||"").split("?")[0]];
  return d ? ` width="${d[0]}" height="${d[1]}"` : "";
};
/* Telefon ve e-posta her zaman soldan sağa: Arapça sayfada "+90 212 ..." aksi hâlde
   ters sırada görünüyordu ("32 52 912 212 90+"). */
const ltr = s => `<span dir="ltr">${e(s)}</span>`;
const isExt = h => /^https?:\/\//i.test(h||"");
const ext   = h => isExt(h) ? ' target="_blank" rel="noopener"' : "";

/* <img>: ölçü + tembel yükleme. eager yalnizca ilk ekrandaki gorsel icin. */
const img = (src, alt, o) => {
  o = o || {};
  return `<img src="${src}"${wh(src)} alt="${e(alt||"")}"`
    + (o.eager ? ' fetchpriority="high"' : ' loading="lazy"')
    + ' decoding="async"'
    + (o.pos ? ` style="object-position:${o.pos}"` : "")
    + ">";
};

/* ---- ikonlar (24x24, cizgi) ---- */
const P = {
  phone:'<path d="M4 5c0-1 .8-2 1.8-2h2c.8 0 1.5.6 1.7 1.4l.7 2.8c.2.7-.1 1.4-.7 1.8l-1.4.9a12 12 0 0 0 5 5l.9-1.4c.4-.6 1.1-.9 1.8-.7l2.8.7c.8.2 1.4.9 1.4 1.7v2c0 1-1 1.8-2 1.8C10.6 19 4 12.4 4 5z"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5 12 13l8.5-6.5"/>',
  pin:'<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  chev:'<path d="m6 9 6 6 6-6"/>',
  close:'<path d="M6 6l12 12M18 6 6 18"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  download:'<path d="M12 3.5v10.5"/><path d="m7.6 10.2 4.4 4.4 4.4-4.4"/><path d="M4.5 20.5h15"/>',
  doc:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  users:'<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 5.5a3.2 3.2 0 0 1 0 6.4"/><path d="M17.5 14.4A6.5 6.5 0 0 1 21.5 20"/>',
  factory:'<path d="M3 21V10l6 4V10l6 4V6l6 3v12z"/><path d="M7 21v-4M12 21v-4M17 21v-4"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
  award:'<circle cx="12" cy="9" r="5.4"/><path d="M8.2 13.4 7 21l5-2.4L17 21l-1.2-7.6"/>',
  layers:'<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>'
};
const ic=(k,w)=>`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w||1.8}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[k]||""}</svg>`;
const WA = '<svg class="i" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a9.9 9.9 0 0 0-8.55 14.9L2.1 21.9l5.14-1.32A9.94 9.94 0 1 0 12 2Zm0 1.67a8.27 8.27 0 1 1-4.2 15.4l-.3-.18-3.05.78.81-2.96-.2-.31A8.27 8.27 0 0 1 12 3.67Zm-3.1 4.35c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.6.12.17 1.74 2.79 4.3 3.8 2.13.84 2.56.67 3.02.63.46-.04 1.49-.61 1.7-1.2.21-.59.21-1.09.15-1.2-.06-.1-.23-.17-.48-.29-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.12-.17.25-.65.82-.8.99-.15.17-.29.19-.54.06a6.8 6.8 0 0 1-2-1.23 7.5 7.5 0 0 1-1.39-1.72c-.14-.25-.01-.39.11-.51.11-.11.25-.29.38-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.55-1.39-.77-1.9-.2-.49-.4-.42-.55-.43l-.55-.01Z"/></svg>';

/* ---- dile bagli ortak yardimcilar (markup + detay katmani ayni seti kullanir) ---- */
function ctx(B, T, LANG){
  const link  = h => B.links[h] || "#";
  const label = k => k === "__home" ? T.ui.home : ((T.nav && T.nav[k]) || k);
  /* metin logo: gerçek logo dosyası yoksa kullanılır */
  const logo = cls => has(B.brand.logoDark)
    ? `<img class="${cls}" src="${cls==="lw"?B.brand.logoWhite:B.brand.logoDark}"${wh(cls==="lw"?B.brand.logoWhite:B.brand.logoDark)} alt="${e(B.brand.name)}">`
    : `<span class="wordmark ${cls}"><b>LEON</b><i>KİMYA</i></span>`;
  /* E-Katalog: dil başına ayrı PDF. Dosya yoksa veya catalog.ready false ise
     düğme HİÇ basılmaz — var olmayan dosyaya indirme bağlantısı vermeyelim diye.
     `download` özniteliği tarayıcıyı sekmede açmak yerine indirmeye zorlar. */
  const c = B.catalog || {};
  const catFile = c.ready && c.files ? (c.files[LANG] || "") : "";
  const catBtn = (cls, txt) => has(catFile)
    ? `<a class="btn ${cls}" href="${catFile}" download title="${e(T.ui.catalogTitle)}">${ic("download")}<span>${e(txt||T.ui.catalog)}</span><span class="btn__tag">PDF</span></a>`
    : "";
  return { link, label, logo, catFile, catBtn };
}

/* ---- katman kesiti (sematik) ----
   Katmanlar ASAGIDAN YUKARIYA verilir; ilk eleman alt zemindir ve numara almaz.
   Numara = uygulama sirasi. Her ust katman bir basamak geriden baslar, boylece
   alttaki katmanlarin ust yuzeyi gorunur kalir. Kalinliklar temsilidir.
   SVG'de metin YOK (yalniz rakam) — etiketler yanindaki HTML listede, dort dilde. */
function stackSvg(id, layers){
  const H = 316, x0 = 22, Wf = 322, dx = 196, dy = -100;
  const n = layers.length;
  const step = Math.min(56, 240 / Math.max(1, n - 1));
  const xr = x0 + Wf;
  let y = H - 14;
  const g = layers.map((L, i) => { const t = { yt: y - L.h, yb: y, xl: x0 + i * step }; y = t.yt; return t; });
  const pt = a => a.map(p => p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ");
  const face = (cls, pts, tex) => `<polygon class="${cls}" points="${pts}"/>`
    + (tex ? `<polygon points="${pts}" fill="url(#${id}-${tex})"/>` : "");
  let body = "";
  g.forEach((t, i) => {
    const L = layers[i];
    const top   = pt([[t.xl,t.yt],[xr,t.yt],[xr+dx,t.yt+dy],[t.xl+dx,t.yt+dy]]);
    const side  = pt([[xr,t.yt],[xr+dx,t.yt+dy],[xr+dx,t.yb+dy],[xr,t.yb]]);
    const front = pt([[t.xl,t.yt],[xr,t.yt],[xr,t.yb],[t.xl,t.yb]]);
    let stripe = "";
    if (L.stripe) {           /* ust yuzeyde saha cizgisi / guvenlik seridi */
      const a = t.xl + (xr - t.xl) * .56, w = L.stripe === "safety" ? 9 : 4;
      stripe = `<polygon class="st-${L.stripe}" points="${pt([[a,t.yt],[a+w,t.yt],[a+w+dx,t.yt+dy],[a+dx,t.yt+dy]])}"/>`;
    }
    body += `<g class="lay${L.opt?" lay--opt":""}">`
      + face("f-"+L.c, top, L.t) + stripe + `<polygon class="sh-t" points="${top}"/>`
      + face("f-"+L.c, side, L.t) + `<polygon class="sh-s" points="${side}"/>`
      + face("f-"+L.c, front, L.t) + `<polygon class="sh-f" points="${front}"/>`
      + `</g>`;
  });
  /* numara rozetleri: her katmanin gorunen ust seridinin ortasi */
  let badges = "";
  g.forEach((t, i) => {
    if (i === 0) return;
    const xe = i < n - 1 ? g[i+1].xl : xr;
    const cx = (t.xl + xe) / 2 + dx / 2, cy = t.yt + dy / 2;
    badges += `<g class="bdg"><circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="11.5"/><text x="${cx.toFixed(1)}" y="${(cy+4.3).toFixed(1)}" text-anchor="middle">${i}</text></g>`;
  });
  const defs = `<defs>
    <pattern id="${id}-speck" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="3" cy="4" r="1.1" class="p-d"/><circle cx="12" cy="7" r=".8" class="p-l"/><circle cx="8" cy="14" r="1.3" class="p-d"/><circle cx="16" cy="15" r=".7" class="p-l"/></pattern>
    <pattern id="${id}-gran" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="3" r="1.7" class="p-d"/><circle cx="8.5" cy="2.5" r="1.3" class="p-l"/><circle cx="6" cy="8.5" r="1.9" class="p-d"/><circle cx="11" cy="9.5" r="1.1" class="p-c"/></pattern>
    <pattern id="${id}-sand" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="2" r=".9" class="p-d"/><circle cx="5" cy="5" r=".8" class="p-l"/></pattern>
    <pattern id="${id}-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="1.4" height="6" class="p-h"/></pattern>
  </defs>`;
  /* görünüm kutusu çizimin üst sınırından başlar: üstte boş şerit kalmasın */
  const vy = Math.floor(g[n-1].yt + dy - 18);
  return `<svg class="stack__svg" viewBox="0 ${vy} ${xr + dx + 20} ${H - vy}" aria-hidden="true" focusable="false">${defs}${body}${badges}</svg>`;
}

/* ================= MARKUP URETICI =================
   Saf fonksiyon: DOM'a dokunmaz, yalnizca HTML string dondurur.
   Bu sayede Node tarafinda da calisabiliyor. */
function buildMarkup(B, T, LANG, RTL){
const X = ctx(B, T, LANG);
const { link, label, logo, catFile, catBtn } = X;

/* ---- dil seçici ---- */
const langs = cls => `<nav class="${cls}" aria-label="${e(T.ui.langLabel||"Language")}">${B.langs.map(l=>
  `<a href="${l.href}" hreflang="${l.lang}" lang="${l.lang}"${l.lang===LANG?' class="on" aria-current="page"':""}>${l.code}</a>`).join("")}</nav>`;

/* ---- ÜST BAR ---- */
const topItems = [];
if (B.contactReady && has(B.contact.phone1))
  topItems.push(`<a href="tel:${B.contact.tel1}">${ic("phone")}${ltr(B.contact.phone1)}</a>`);
if (B.contactReady && has(B.contact.email))
  topItems.push(`<a class="top__mail" href="mailto:${B.contact.email}">${ic("mail")}${ltr(B.contact.email)}</a>`);
if (has(T.addressShort))
  topItems.push(`<span class="top__addr">${ic("pin")}<span>${e(T.addressShort)}</span></span>`);
const top = `<div class="top"><div class="wrap top__in"><div class="top__l">${topItems.join("")}</div>${langs("top__langs")}</div></div>`;

/* ---- HEADER + MEGA MENÜ ---- */
const famNav = (B.nav.find(n=>n.mega) || {children:[]}).children;
const mega = `<div class="mega"><div class="wrap mega__in">
  <div class="mega__cols">${famNav.map((f,i)=>{const h=link(f.L);
    return `<div class="mega__col"><a class="mega__h" href="${h}"><span>${n2(i)}</span>${e(label(f.k))}</a>`
      + ((f.children||[]).length ? `<ul>${f.children.map(c=>`<li><a href="${link(c.L)}">${e(label(c.k))}</a></li>`).join("")}</ul>` : "")
      + `</div>`;}).join("")}</div>
  ${has(catFile) ? `<aside class="mega__cat"><span class="eyebrow">${e(T.ui.catalog)}</span><p>${e(T.ui.catBandTitle)}</p>${catBtn("btn--brand btn--sm", T.ui.catalogPdf)}</aside>` : ""}
</div></div>`;

const navItems = B.nav.map(it=>{
  const kids = it.children && it.children.length;
  if (it.mega)
    return `<li class="nav__it nav__it--mega"><a class="nav__a" href="${it.href}">${e(label(it.k))}${ic("chev",2)}</a>${mega}</li>`;
  if (kids)
    return `<li class="nav__it nav__it--dd"><a class="nav__a" href="${it.href}">${e(label(it.k))}${ic("chev",2)}</a><ul class="dd">${it.children.map(c=>{
      const h = c.L ? link(c.L) : (c.href||"#");
      return `<li><a href="${h}"${ext(h)}><span>${e(label(c.k))}</span>${ic("arrow")}</a></li>`;}).join("")}</ul></li>`;
  return `<li class="nav__it"><a class="nav__a" href="${it.href}">${e(label(it.k))}</a></li>`;
}).join("");

const hdr = `<header class="hdr" id="hdr"><div class="wrap hdr__in">
  <a class="logo" href="#top" aria-label="${e(B.brand.name)}">${logo("ld")}</a>
  <nav class="nav" aria-label="${e(T.ui.menu)}"><ul class="nav__list">${navItems}</ul></nav>
  <div class="hdr__act">
    ${catBtn("btn--line btn--sm hdr__cat")}
    <a class="btn btn--brand btn--sm hdr__q" href="#iletisim">${e(T.ui.quote)}</a>
    <button class="burger" type="button" aria-label="${e(T.ui.menu)}" aria-expanded="false" aria-controls="drw"><span></span><span></span><span></span></button>
  </div>
</div></header>`;

/* ---- MOBİL ÇEKMECE ---- */
const flat = it => it.mega ? it.children.map(c=>({k:c.k,L:c.L,children:c.children||[]})) : it.children;
const drwTree = items => `<ul>${items.map(i=>{
  const h = i.L ? link(i.L) : (i.href||"#");
  const kids = i.children && i.children.length;
  return `<li><div class="drw__row"><a href="${h}"${ext(h)}>${e(label(i.k))}</a>${kids?`<button class="drw__tg" type="button" aria-expanded="false" aria-label="${e(T.ui.openSub)}">${ic("plus",2)}</button>`:""}</div>`
    + (kids ? `<div class="drw__sub">${drwTree(i.children)}</div>` : "") + `</li>`;}).join("")}</ul>`;
const drwContact = [];
if (B.contactReady && has(B.contact.phone1)) drwContact.push(`<a href="tel:${B.contact.tel1}">${ic("phone")}${ltr(B.contact.phone1)}</a>`);
if (B.contactReady && has(B.contact.email))  drwContact.push(`<a href="mailto:${B.contact.email}">${ic("mail")}${ltr(B.contact.email)}</a>`);
const drw = `<div class="drw" id="drw" aria-hidden="true" inert>
  <div class="drw__hd">${logo("ld")}<button class="drw__x" type="button" aria-label="${e(T.ui.closeMenu)}">${ic("close",2)}</button></div>
  <nav class="drw__nav" aria-label="${e(T.ui.menu)}">${drwTree([{k:"__home",href:"#top"}].concat(B.nav.map(i=>({k:i.k,href:i.href,children:i.mega?flat(i):i.children}))))}</nav>
  <div class="drw__ft">
    ${catBtn("btn--line", T.ui.catalogPdf)}
    <a class="btn btn--brand" href="#iletisim">${e(T.ui.quote)} ${ic("arrow")}</a>
    ${drwContact.length ? `<div class="drw__ct">${drwContact.join("")}</div>` : ""}
    ${langs("drw__langs")}
  </div>
</div><div class="scrim" id="scrim" hidden></div>`;

/* ---- HERO: sabit başlık + ürün ailelerini gezen görsel slider ---- */
const cats = B.categories;
const last = n2(cats.length - 1);
const heroSlides = cats.map((c,i)=>`<div class="hs${i===0?" on":""}">${img(c.img, "", {pos:c.pos, eager:i===0})}</div>`).join("");
const heroCaps = cats.map((c,i)=>{const s=T.categories[i]||{}; const h=link(c.L);
  return `<div class="hcap__i${i===0?" on":""}"${i?' aria-hidden="true"':""}>
    <span class="hcap__k">${n2(i)} / ${last} — ${e(T.ui.productFamily)}</span>
    <h2 class="hcap__t">${e(label(c.k))}</h2>
    <p class="hcap__d">${e(s.desc)}</p>
    <a class="lnk lnk--l" href="${h}"${ext(h)}${i?' tabindex="-1"':""}>${e(T.ui.detail)} ${ic("arrow")}</a>
  </div>`;}).join("");
const heroCtl = `<div class="hctl">
  <div class="hctl__bars">${cats.map((c,i)=>`<button type="button" class="hctl__b${i===0?" on":""}" data-g="${i}" aria-label="${e(label(c.k))}"${i===0?' aria-current="true"':""}><span></span></button>`).join("")}</div>
  <div class="hctl__ar"><button type="button" data-d="-1" aria-label="${e(T.ui.prev)}">${ic("arrow",2)}</button><button type="button" data-d="1" aria-label="${e(T.ui.next)}">${ic("arrow",2)}</button></div>
</div>`;
const titleLines = String(T.hero.title||"").split("\n").map(l=>`<span>${e(l)}</span>`).join(" ");
const hero = `<section class="hero" id="top"><div class="hero__in">
  <div class="hero__txt">
    <h1 class="hero__h"><span class="hero__k">${e(T.hero.kicker)}</span><span class="hero__t">${titleLines}</span></h1>
    <p class="hero__lead">${e(T.hero.lead)}</p>
    <div class="hero__cta">
      <a class="btn btn--brand btn--lg" href="#iletisim">${e(T.ui.quote)} ${ic("arrow")}</a>
      <a class="btn btn--ghost btn--lg" href="#sistemler">${e(T.ui.viewSystems)}</a>
    </div>
    ${has(catFile) ? `<a class="hero__cat" href="${catFile}" download title="${e(T.ui.catalogTitle)}">${ic("doc")}<span>${e(T.ui.catalogPdf)}</span>${ic("download")}</a>` : ""}
  </div>
  <div class="hero__media" id="sld" role="region" aria-roledescription="carousel" aria-label="${e(label("products"))}">
    ${heroSlides}
    <div class="hcap">${heroCaps}</div>
    ${heroCtl}
  </div>
</div></section>`;

/* ---- DEĞER BANDI (4'lü özellik) ---- */
const featIcons = ["users","factory","globe","award"];
const vals = `<section class="vals" aria-label="${e(B.brand.name)}"><div class="wrap"><ul class="vals__in">${T.feat.map((f,i)=>{
  const h = link(B.featLinks[i]);
  return `<li><a class="val" href="${h}"${ext(h)}><span class="val__ic">${ic(featIcons[i],1.7)}</span><span class="val__t">${e(f.t)}</span><span class="val__d">${e(f.d)}</span></a></li>`;}).join("")}</ul></div></section>`;

/* ---- bölüm başlığı ---- */
const sh = (kick, title, sub, act, dark) =>
  `<div class="sh${dark?" sh--dark":""}"><div class="sh__txt">`
  + (has(kick) ? `<p class="eyebrow">${e(kick)}</p>` : "")
  + `<h2 class="sh__t">${e(title)}</h2>`
  + (has(sub) ? `<p class="sh__s">${e(sub)}</p>` : "")
  + `</div>${act ? `<div class="sh__act">${act}</div>` : ""}</div>`;

/* ---- ÜRÜN AİLELERİ ----
   Ürün ambalaj görselleri kırpılmadan gösterilir (dosyalar değişmedi). */
const famLines = f => {
  const node = famNav.find(n=>n.k===f.k);
  let lines = [];
  if (node && (node.children||[]).length)
    lines = node.children.filter(c=>!(f.skip||[]).includes(c.k)).map(c=>({t:label(c.k), h:link(c.L)}));
  else {
    const d = (T.details||{})[f.det||f.L] || {};
    lines = (d.products||[]).slice(0,3).map(p=>({t:p.t, h:link(f.L)}));
  }
  (f.extra||[]).forEach(x=>lines.push({t:label(x.k), h:link(x.L)}));
  return lines;
};
const famDesc = f => f.cat != null ? (T.categories[f.cat]||{}).desc : (((T.details||{})[f.det]||{}).lead || "");
const prods = `<section class="sec prods" id="urunler"><div class="wrap">
  ${sh(label("products"), T.ui.secProducts, T.ui.secProductsSub, catBtn("btn--line", T.ui.catalogPdf))}
  <div class="fams">${(B.families||[]).map((f,i)=>{const h=link(f.L); const name=label(f.k); const lines=famLines(f);
    const media = f.swatches
      ? `<span class="fam__sw">${f.swatches.map(s=>img(s,"")).join("")}</span>`
      : img(f.img, "");
    return `<article class="fam rev">
      <a class="fam__media${f.swatches?" fam__media--sw":""}" href="${h}" tabindex="-1" aria-hidden="true">${media}</a>
      <div class="fam__body">
        <span class="fam__n">${n2(i)}</span>
        <h3 class="fam__t"><a href="${h}">${e(name)}</a></h3>
        <p class="fam__d">${e(famDesc(f))}</p>
        ${lines.length ? `<ul class="fam__ls">${lines.map(l=>`<li><a href="${l.h}">${e(l.t)}</a></li>`).join("")}</ul>` : ""}
        <a class="lnk" href="${h}">${e(T.ui.detail)} ${ic("arrow")}</a>
      </div></article>`;}).join("")}</div>
</div></section>`;

/* ---- SİSTEMLER (sekme + katman kesiti) ---- */
const stackHtml = (s) => {
  const L = s.layers || []; if (!L.length) return "";
  const lab = k => ((T.layers||{})[k]) || k;
  const items = L.map((x,i)=>({x,i})).reverse().map(({x,i})=>
    `<li${i===0?' class="stack__base"':""}><b class="stack__n">${i===0?"—":i}</b><i class="stack__sw sw-${x.c}"></i><span>${e(lab(x.k))}</span></li>`).join("");
  return `<div class="stack">
    <div class="stack__hd"><h4>${ic("layers")}${e(T.ui.layersTitle)}</h4></div>
    ${stackSvg("ks-"+s.id, L)}
    <ol class="stack__lg">${items}</ol>
    <p class="stack__note">${e(T.ui.layersNote)}</p>
  </div>`;
};
const sysSec = `<section class="sec sys" id="sistemler"><div class="wrap">
  ${sh(label("systems"), T.ui.secSystems, T.ui.secSystemsSub, "", true)}
  <div class="sys__tabs" role="tablist" aria-label="${e(label("systems"))}">${B.systems.map((s,i)=>
    `<button type="button" role="tab" class="sys__tab${i===0?" on":""}" id="st-${s.id}" aria-controls="sp-${s.id}" aria-selected="${i===0}"${i?' tabindex="-1"':""}><b>${n2(i)}</b><span>${e(T.systems[i].title)}</span></button>`).join("")}</div>
  ${B.systems.map((s,i)=>{const t=T.systems[i]; const all=[s.img].concat(s.gallery||[]);
    return `<div class="sys__p${i===0?" on":""}" role="tabpanel" id="sp-${s.id}" aria-labelledby="st-${s.id}"${i?" hidden":""}>
      <div class="sys__top">
        <div class="sys__media">
          <figure class="sys__fig">${img(s.img, t.title)}</figure>
          ${(s.gallery||[]).length ? `<div class="sys__th">${all.map((g,j)=>`<button type="button" class="sys__tb${j===0?" on":""}" data-src="${g}" aria-label="${e(t.title)} — ${j+1}">${img(g,"")}</button>`).join("")}</div>` : ""}
        </div>
        <div class="sys__info">
          <span class="sys__n">${n2(i)}</span>
          <h3 class="sys__t">${e(t.title)}</h3>
          <p class="sys__d">${e(t.desc)}</p>
          <div class="sys__cta">
            <a class="btn btn--brand" href="#iletisim">${e(T.ui.projectQuote)} ${ic("arrow")}</a>
            <a class="btn btn--ghost" href="${link(s.L)}">${e(T.ui.systemDetails)}</a>
          </div>
        </div>
      </div>
      <div class="sys__bot">
        ${stackHtml(s)}
        <div class="sys__meta">
          <h4>${e(T.ui.applicationAreas)}</h4>
          <ul class="chips chips--dk">${t.areas.map(a=>`<li>${e(a)}</li>`).join("")}</ul>
          <h4>${e(T.ui.systemProducts)}</h4>
          <ul class="checks">${t.props.map(p=>`<li>${ic("check",2.2)}<span>${e(p)}</span></li>`).join("")}</ul>
        </div>
      </div>
    </div>`;}).join("")}
</div></section>`;

/* ---- UYGULAMA ALANLARI ----
   İlk iki kart geniş. Aynı fotoğrafı kullanan kartlar farklı kadrajla
   (odak + yakınlık) ayrıştırılır: SITE_BASE.applications[].pos / zoom */
const apps = `<section class="sec apps" id="uygulamalar"><div class="wrap">
  ${sh(label("applications"), T.ui.secApps, T.ui.secAppsSub)}
  <ul class="appg">${B.applications.map((a,i)=>{const h=link(a.L); const t=T.applications[i];
    const st = [];
    if (a.pos)  st.push(`--o:${a.pos}`);
    if (a.zoom) st.push(`--z:${a.zoom}`);
    return `<li class="appc rev${i<2?" appc--w":""}"${st.length?` style="${st.join(";")}"`:""}><a href="${h}"${ext(h)}>${img(a.img, t)}<span class="appc__cap"><b>${n2(i)}</b><span>${e(t)}</span></span><span class="appc__go">${ic("arrow",2)}</span></a></li>`;}).join("")}</ul>
</div></section>`;

/* ---- KURUMSAL ---- */
const statsHtml = (B.stats||[]).length ? `<section class="stats"><div class="wrap"><dl class="stats__in">
  ${B.stats.map((s,i)=>`<div><dt data-c="${s.v}">${s.v}${s.s}</dt><dd>${e((T.stats||[])[i]||"")}</dd></div>`).join("")}
</dl></div></section>` : "";
const about = `<section class="sec about" id="kurumsal"><div class="wrap about__in">
  <div class="about__media rev"><figure class="about__fig">${img(B.aboutImage, T.about.title)}</figure></div>
  <div class="about__txt">
    <p class="eyebrow">${e(T.ui.corporateKicker)}</p>
    <h2 class="sh__t">${e(T.about.title)}</h2>
    <p class="about__lead">${e(T.about.lead)}</p>
    <div class="about__ps">${T.about.paras.map(p=>`<p>${e(p)}</p>`).join("")}</div>
    <div class="about__cta"><a class="btn btn--brand" href="#iletisim">${e(T.ui.quote)} ${ic("arrow")}</a>${catBtn("btn--line", T.ui.catalogPdf)}</div>
  </div>
</div></section>` + statsHtml;

/* ---- E-KATALOG BANDI (katalog yoksa hiç basılmaz) ---- */
const catBand = has(catFile) ? `<section class="catb"><div class="wrap catb__in">
  <div class="catb__art" aria-hidden="true"><span class="bk bk--3"></span><span class="bk bk--2"></span><span class="bk bk--1">${logo("lw")}<i></i><i></i><i></i></span></div>
  <div class="catb__txt"><p class="eyebrow">${e(T.ui.catalog)}</p><h2 class="catb__t">${e(T.ui.catBandTitle)}</h2><p>${e(T.ui.catBandText)}</p></div>
  <div class="catb__act">${catBtn("btn--dark btn--lg", T.ui.catalogPdf)}</div>
</div></section>` : "";

/* ---- İHRACAT: konteyner ölçüleri + Incoterms 2020 ---- */
const Xp = T.exp;
const party = v => v === "S" ? Xp.seller : Xp.buyer;
/* Arapçada da Latin rakam kullanılır: tablodaki ölçülerle tutarlı kalsın diye */
const num = n => Number(n).toLocaleString(LANG === "ar" ? "en" : LANG);
const contRows = B.containers.map(c=>`<tr>
  <th scope="row">${e(Xp.cNames[c.k])}</th>
  <td class="nw">${c.L} × ${c.W} × ${c.H} m</td>
  <td class="nw">${c.dW} × ${c.dH} m</td>
  <td class="nw">${c.vol} m³</td>
  <td class="nw">${num(c.tare)} kg</td>
  <td class="nw"><b>${num(c.pay)} kg</b></td>
  <td>${c.ibc} × ${e(Xp.loadIbc)}<br><span class="sub">${c.drum} × ${e(Xp.loadDrum)}</span></td>
</tr>`).join("");
const incoRows = B.incoterms.map(t=>{
  const s = Xp.terms[t.code] || {};
  const insTxt = s.ins ? s.ins : (t.ins === "S" ? Xp.seller : Xp.none);
  return `<tr>
    <th scope="row"><span class="code">${t.code}</span></th>
    <td>${e(s.n)}</td>
    <td class="nw"><span class="pill">${e(t.mode === "sea" ? Xp.modeSea : Xp.modeAny)}</span></td>
    <td class="nw"><span class="who who--${t.freight}">${e(party(t.freight))}</span></td>
    <td>${e(insTxt)}</td>
    <td class="risk">${e(s.risk)}</td>
  </tr>`;}).join("");
const exportSec = `<section class="sec exp" id="ihracat"><div class="wrap">
  ${sh(Xp.kicker, Xp.title, Xp.sub)}
  <div class="exp__block" id="konteyner">
    <h3 class="exp__h">${e(Xp.cTitle)}</h3>
    <p class="exp__lead">${e(Xp.cSub)}</p>
    <div class="tblwrap" tabindex="0" role="region" aria-label="${e(Xp.cTitle)}"><table class="tbl">
      <thead><tr>
        <th scope="col">${e(Xp.cCols.type)}</th><th scope="col">${e(Xp.cCols.inner)}</th>
        <th scope="col">${e(Xp.cCols.door)}</th><th scope="col">${e(Xp.cCols.vol)}</th>
        <th scope="col">${e(Xp.cCols.tare)}</th><th scope="col">${e(Xp.cCols.pay)}</th>
        <th scope="col">${e(Xp.cCols.load)}</th>
      </tr></thead><tbody>${contRows}</tbody>
    </table></div>
    <p class="exp__note">${e(Xp.cNote)}</p>
  </div>
  <div class="exp__block" id="incoterms">
    <h3 class="exp__h">${e(Xp.iTitle)}</h3>
    <p class="exp__lead">${e(Xp.iSub)}</p>
    <div class="tblwrap" tabindex="0" role="region" aria-label="${e(Xp.iTitle)}"><table class="tbl tbl--inco">
      <thead><tr>
        <th scope="col">${e(Xp.iCols.code)}</th><th scope="col">${e(Xp.iCols.name)}</th>
        <th scope="col">${e(Xp.iCols.mode)}</th><th scope="col">${e(Xp.iCols.freight)}</th>
        <th scope="col">${e(Xp.iCols.ins)}</th><th scope="col">${e(Xp.iCols.risk)}</th>
      </tr></thead><tbody>${incoRows}</tbody>
    </table></div>
    <p class="exp__note">${e(Xp.iNote)}</p>
  </div>
  <p class="exp__cta"><a class="btn btn--brand btn--lg" href="#iletisim">${e(T.ui.quote)} ${ic("arrow")}</a></p>
</div></section>`;

/* ---- İLETİŞİM ---- */
const AC = { ad:"name", firma:"organization", email:"email", tel:"tel" };
const fField = f => {
  const lab = T.form[f.k];
  if (f.type==="textarea") return `<label class="f f--full"><span>${e(lab)}</span><textarea name="${f.name}" rows="5"></textarea></label>`;
  if (f.type==="select")   return `<label class="f"><span>${e(lab)}</span><select name="${f.name}">${T.form.subjects.map(o=>`<option>${e(o)}</option>`).join("")}</select></label>`;
  return `<label class="f"><span>${e(lab)}</span><input type="${f.type}" name="${f.name}"${AC[f.name]?` autocomplete="${AC[f.name]}"`:""}></label>`;
};
const infoRow = (icon,lbl,val,href,isLtr) => {
  const txt = isLtr ? ltr(val) : e(val);
  const body = has(val)
    ? (has(href) && B.contactReady ? `<a href="${href}"${ext(href)}>${txt}</a>` : txt)
    : `<span class="todo">${e(lbl.todo)}</span>`;
  return `<li><span class="cinfo__ic">${icon==="wa"?WA:ic(icon)}</span><div><b>${e(lbl.t)}</b><span>${body}</span></div></li>`;
};
const waLink = (B.contactReady && has(B.contact.whatsapp)) ? `${B.contact.whatsapp}?text=${encodeURIComponent(T.ui.waPrefill)}` : "";
const contact = `<section class="sec contact" id="iletisim"><div class="wrap">
  ${sh(T.ui.contactKicker, T.form.title, T.form.text)}
  <div class="contact__in">
    <div class="contact__info">
      <h3 class="contact__h">${e(T.ui.contactInfo)}</h3>
      <ul class="cinfo">
        ${infoRow("pin",  {t:T.ui.labelAddress, todo:T.addressTodo}, T.address, B.contact.mapLink)}
        ${infoRow("phone",{t:T.ui.labelPhone,   todo:T.phoneTodo},   B.contact.phone1, "tel:"+B.contact.tel1, true)}
        ${has(B.contact.mobile) ? infoRow("phone",{t:T.ui.labelMobile, todo:T.phoneTodo}, B.contact.mobile, "tel:"+B.contact.telMobile, true) : ""}
        ${infoRow("mail", {t:T.ui.labelEmail,   todo:T.emailTodo},   B.contact.email, "mailto:"+B.contact.email, true)}
        ${has(waLink) ? infoRow("wa", {t:"WhatsApp", todo:""}, T.ui.waLabel, waLink) : ""}
      </ul>
      ${has(B.contact.mapEmbed)
        ? `<div class="map"><iframe title="${e(T.ui.mapTitle)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${B.contact.mapEmbed}"></iframe></div>`
        : `<div class="map map--todo"><span>${e(T.ui.mapTodo)}</span></div>`}
    </div>
    <form class="form" novalidate>
      <div class="fgrid">${B.formFields.map(fField).join("")}
        <label class="f f--full f--check"><input type="checkbox" name="kvkk"><span>${e(T.form.kvkk)}</span></label></div>
      <input type="text" name="_honey" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
      <button class="btn btn--brand btn--lg" type="submit">${e(T.form.submit)} ${ic("arrow")}</button>
      <p class="form__status" role="status" hidden></p>
    </form>
  </div>
</div></section>`;

/* ---- FOOTER ---- */
const fCols = B.footer.map(col=>
  `<div><h4>${e(label(col.k))}</h4><ul>${col.items.map((k,i)=>{const h=link(col.L[i]);
    return `<li><a href="${h}"${ext(h)}>${e(label(k))}</a></li>`;}).join("")}</ul></div>`).join("");
const fContact = [];
if (has(T.address)) fContact.push(`<li>${ic("pin")}<span>${e(T.address)}</span></li>`);
else fContact.push(`<li>${ic("pin")}<span class="todo">${e(T.addressTodo)}</span></li>`);
if (B.contactReady && has(B.contact.phone1)) fContact.push(`<li>${ic("phone")}<a href="tel:${B.contact.tel1}"><b>${ltr(B.contact.phone1)}</b></a></li>`);
else fContact.push(`<li>${ic("phone")}<span class="todo">${e(T.phoneTodo)}</span></li>`);
if (B.contactReady && has(B.contact.mobile)) fContact.push(`<li>${ic("phone")}<a href="tel:${B.contact.telMobile}"><b>${ltr(B.contact.mobile)}</b></a></li>`);
if (B.contactReady && has(B.contact.email)) fContact.push(`<li>${ic("mail")}<a href="mailto:${B.contact.email}"><b>${ltr(B.contact.email)}</b></a></li>`);
else fContact.push(`<li>${ic("mail")}<span class="todo">${e(T.emailTodo)}</span></li>`);

const ftr = `<footer class="ftr"><div class="wrap">
  <div class="ftr__top">
    <div class="ftr__brand">
      ${logo("lw")}
      <p class="ftr__tag">${e(T.tagline)}</p>
      <div class="ftr__btns">${catBtn("btn--ghost btn--sm", T.ui.catalogPdf)}<a class="btn btn--brand btn--sm" href="#iletisim">${e(T.ui.quote)}</a></div>
      ${(B.social||[]).length ? `<div class="ftr__soc">${B.social.map(s=>`<a href="${s.href}"${ext(s.href)} aria-label="${e(s.name)}">${ic("globe")}</a>`).join("")}</div>` : ""}
    </div>
    ${fCols}
    <div><h4>${e(T.ui.contactInfo)}</h4><ul class="fcontact">${fContact.join("")}</ul></div>
  </div>
  <div class="ftr__bar">
    <span>${e(T.copyright)} — ${e(T.ui.allRights)}</span>
    ${langs("ftr__langs")}
  </div>
</div></footer>
<div class="fab">${has(waLink)
  ? `<a class="fab__wa" href="${waLink}" target="_blank" rel="noopener" aria-label="${e(T.ui.waLabel)}" title="${e(T.ui.waLabel)}">${WA}</a>` : ""}<button id="toTop" type="button" aria-label="${e(T.ui.toTop)}" hidden>${ic("arrow",2)}</button></div>`;

  /* Bölüm sırası. İhracat kullanıcı isteğiyle sayfa sonunda (footer öncesi) kalır. */
  return top + hdr + drw + `<main id="main">` + hero + vals + prods + sysSec + apps + about + catBand + contact + exportSec + `</main>` + ftr +
    `<div class="dtl" id="dtl" hidden></div>`;
}

/* Node ise burada biter: build-pages.py yalnizca markup ister */
if (NODE) { module.exports = { buildMarkup }; return; }

/* ================= TARAYICI =================
   Markup prerender edildiyse #app zaten dolu gelir; o zaman uretmeyiz. */
const B = window.SITE_BASE;
const LANG = (document.documentElement.lang || "tr").slice(0,2);
const T = window.STRINGS[LANG] || window.STRINGS.tr;
const RTL = document.documentElement.dir === "rtl";
const X = ctx(B, T, LANG);
const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

const app = document.getElementById("app");
if (!app.firstElementChild) app.innerHTML = buildMarkup(B, T, LANG, RTL);
/* "js" sınıfı yalnızca belirme animasyonunu açar; JS çalışmazsa içerik görünür kalır */
document.documentElement.classList.add("js");

const hdrEl = $("#hdr");

/* ================= MOBİL ÇEKMECE ================= */
const drwEl = $("#drw"), scrimEl = $("#scrim"), burger = $(".burger");
let menuOpen = false;
const setMenu = v => {
  if (!drwEl || v === menuOpen) return;
  menuOpen = v;
  drwEl.classList.toggle("on", v);
  drwEl.setAttribute("aria-hidden", v ? "false" : "true");
  drwEl.inert = !v;                         /* kapalıyken sekme tuşuyla içine girilmesin */
  scrimEl.hidden = !v;
  requestAnimationFrame(()=>scrimEl.classList.toggle("on", v));
  document.body.classList.toggle("lock", v);
  if (burger) { burger.classList.toggle("on", v); burger.setAttribute("aria-expanded", v); }
  if (v) setTimeout(()=>{ const x = $(".drw__x", drwEl); if (x) x.focus(); }, 60);
  else if (burger && drwEl.contains(document.activeElement)) burger.focus();
};
if (burger) burger.addEventListener("click", ()=>setMenu(!menuOpen));
if (drwEl) {
  $(".drw__x", drwEl).addEventListener("click", ()=>setMenu(false));
  scrimEl.addEventListener("click", ()=>setMenu(false));
  $$(".drw__tg", drwEl).forEach(b=>b.addEventListener("click", ()=>{
    const li = b.closest("li"); const open = !li.classList.contains("open");
    li.classList.toggle("open", open); b.setAttribute("aria-expanded", open);
  }));
}

/* ================= ÜRÜN & SİSTEM DETAY KATMANI =================
   Bağlantılar "#detay/<anahtar>" biçimindedir (bkz. SITE_BASE.links).
   İçerik SITE_BASE.details (görseller) + STRINGS.<dil>.details (metin).
   Sağdan açılan panel; odak panel içinde tutulur, kapanınca geri döner. */
let closeDtl = () => {};
(function(){
  const box = $("#dtl"); if (!box) return;
  const D = B.details || {}, DT = T.details || {};
  let lastFocus = null, hideT = null;

  const dtlHtml = key => {
    const d = D[key], t = DT[key];
    if (!d || !t) return "";
    const title = t.title || X.label(d.nav);        /* uygulama kayıtları kendi başlığını taşır */
    const kicker = d.app ? X.label("applications") : T.ui.productFamily;
    const gal = [d.img].concat(d.gallery||[]);
    return `<div class="dtl__panel" role="dialog" aria-modal="true" aria-labelledby="dtl-t">
      <div class="dtl__bar"><span class="dtl__crumb">${e(kicker)}</span>
        <button class="dtl__x" type="button" aria-label="${e(T.ui.close)}">${ic("close",2)}</button></div>
      <figure class="dtl__hero">${img(d.img, title, {eager:true})}</figure>
      ${(d.gallery||[]).length ? `<div class="dtl__th">${gal.map((g,j)=>`<button type="button" class="dtl__tb${j===0?" on":""}" data-src="${g}" aria-label="${e(title)} — ${j+1}">${img(g,"")}</button>`).join("")}</div>` : ""}
      <div class="dtl__body">
        <p class="eyebrow">${e(kicker)}</p>
        <h2 class="dtl__t" id="dtl-t">${e(title)}</h2>
        <p class="dtl__lead">${e(t.lead)}</p>
        ${(t.paras||[]).map(p=>`<p class="dtl__p">${e(p)}</p>`).join("")}
        ${(t.products||[]).length ? `<h3 class="dtl__h">${e(T.ui.productRange)}</h3><div class="dtl__prods">${t.products.map((pr,i)=>{
          const pi = (d.productImgs||[])[i];
          return `<article class="dtl__prod">${pi?`<div class="dtl__pim">${img(pi, pr.t)}</div>`:""}<div class="dtl__pb"><h4>${e(pr.t)}</h4><p>${e(pr.d)}</p></div></article>`;
        }).join("")}</div>` : ""}
        ${(t.areas||[]).length ? `<h3 class="dtl__h">${e(T.ui.applicationAreas)}</h3><ul class="chips">${t.areas.map(a=>`<li>${e(a)}</li>`).join("")}</ul>` : ""}
        ${(t.props||[]).length ? `<h3 class="dtl__h">${e(T.ui.keyFeatures)}</h3><ul class="checks">${t.props.map(p=>`<li>${ic("check",2.2)}<span>${e(p)}</span></li>`).join("")}</ul>` : ""}
        <div class="dtl__cta"><a class="btn btn--brand" href="#iletisim">${e(T.ui.projectQuote)} ${ic("arrow")}</a>${X.catBtn("btn--line", T.ui.catalogPdf)}</div>
      </div></div>`;
  };

  const focusables = () => $$('a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])', box)
    .filter(el => el.offsetParent !== null);

  closeDtl = () => {
    if (box.hidden) return;
    box.classList.remove("on");
    document.body.classList.remove("lock");
    /* kapanış animasyonu bitince boşalt; bu arada yeni detay açılırsa iptal edilir */
    clearTimeout(hideT);
    hideT = setTimeout(()=>{ box.hidden = true; box.innerHTML = ""; }, 260);
    if (location.hash.indexOf("#detay/") === 0)
      history.replaceState(null, "", location.pathname + location.search);
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus({preventScroll:true});
  };

  const openDtl = key => {
    const html = dtlHtml(key);
    if (!html) { closeDtl(); return; }
    clearTimeout(hideT);
    if (box.hidden) lastFocus = document.activeElement;
    box.innerHTML = html;
    box.hidden = false;
    requestAnimationFrame(()=>box.classList.add("on"));
    document.body.classList.add("lock");
    $(".dtl__x", box).addEventListener("click", closeDtl);
    /* galeri: küçük görsele tıklayınca kapak görseli değişir */
    const hero = $(".dtl__hero img", box);
    $$(".dtl__tb", box).forEach(b=>b.addEventListener("click", ()=>{
      hero.src = b.dataset.src;
      $$(".dtl__tb", box).forEach(o=>o.classList.toggle("on", o === b));
    }));
    setTimeout(()=>{ const x = $(".dtl__x", box); if (x) x.focus({preventScroll:true}); }, 40);
  };

  box.addEventListener("click", ev => { if (ev.target === box) closeDtl(); });
  box.addEventListener("keydown", ev => {
    if (ev.key === "Escape") { ev.stopPropagation(); closeDtl(); return; }
    if (ev.key !== "Tab") return;
    const f = focusables(); if (!f.length) return;
    const first = f[0], lastEl = f[f.length-1];
    if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); lastEl.focus(); }
    else if (!ev.shiftKey && document.activeElement === lastEl) { ev.preventDefault(); first.focus(); }
  });
  const onHash = () => {
    if (location.hash.indexOf("#detay/") === 0) openDtl(decodeURIComponent(location.hash.slice(7)));
    else closeDtl();
  };
  addEventListener("hashchange", onHash);
  onHash(); /* sayfa doğrudan #detay/... ile açıldıysa */
})();

/* ================= SAYFA İÇİ BAĞLANTILAR =================
   Tek dinleyici (olay delegasyonu): sonradan üretilen detay paneli de kapsanır.
   Yapışkan başlığın yüksekliği kadar pay bırakarak kaydırır. */
document.addEventListener("click", ev => {
  const a = ev.target.closest && ev.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute("href");
  if (id.length < 2) return;
  if (id.indexOf("#detay/") === 0) { setMenu(false); return; }   /* hash yönlendirmesi açar */
  const t = document.getElementById(id.slice(1));
  if (!t) return;
  ev.preventDefault();
  setMenu(false); closeDtl();
  if (a.closest(".nav")) a.blur();                                   /* açılır menü kapansın */
  const y = t.getBoundingClientRect().top + scrollY - ((hdrEl ? hdrEl.offsetHeight : 0) + 8);
  scrollTo({ top: Math.max(0, y), behavior: reduce ? "auto" : "smooth" });
});
addEventListener("keydown", ev => {
  if (ev.key !== "Escape") return;
  setMenu(false); closeDtl();
  const a = document.activeElement;
  if (a && a.closest && a.closest(".nav")) a.blur();
});

/* ================= HERO SLIDER =================
   Otomatik geçiş; fare üzerindeyken, odak içerideyken ve sekme gizliyken durur.
   "Hareketi azalt" tercihinde otomatik geçiş hiç başlamaz. */
(function(){
  const box = $("#sld"); if (!box) return;
  const sl = $$(".hs", box), caps = $$(".hcap__i", box), bars = $$(".hctl__b", box);
  const N = sl.length; if (N < 2) return;
  const DUR = 7000;
  let i = 0, timer = null, hold = false;
  const bar = () => { const s = bars[i] && bars[i].firstElementChild; if (!s) return;
    s.style.animation = "none"; void s.offsetWidth; s.style.animation = ""; };
  const go = k => {
    i = (k + N) % N;
    sl.forEach((s,x)=>s.classList.toggle("on", x === i));
    caps.forEach((c,x)=>{ const on = x === i; c.classList.toggle("on", on);
      c.setAttribute("aria-hidden", on ? "false" : "true");
      $$("a", c).forEach(a => on ? a.removeAttribute("tabindex") : a.setAttribute("tabindex","-1")); });
    bars.forEach((b,x)=>{ b.classList.toggle("on", x === i);
      if (x === i) b.setAttribute("aria-current","true"); else b.removeAttribute("aria-current"); });
    bar();
  };
  const stop = () => { clearInterval(timer); timer = null; box.classList.remove("is-playing"); };
  const play = () => { stop(); if (reduce || hold || document.hidden) return;
    box.classList.add("is-playing"); bar(); timer = setInterval(()=>go(i+1), DUR); };
  bars.forEach(b=>b.addEventListener("click", ()=>{ go(+b.dataset.g); play(); }));
  $$(".hctl__ar button", box).forEach(b=>b.addEventListener("click", ()=>{ go(i + (+b.dataset.d)); play(); }));
  box.addEventListener("mouseenter", ()=>{ hold = true; stop(); });
  box.addEventListener("mouseleave", ()=>{ hold = false; play(); });
  box.addEventListener("focusin",  ()=>{ hold = true; stop(); });
  box.addEventListener("focusout", ()=>{ hold = false; play(); });
  document.addEventListener("visibilitychange", ()=> document.hidden ? stop() : play());
  box.addEventListener("keydown", ev => {
    if (ev.key === "ArrowRight") { go(i + (RTL ? -1 : 1)); }
    else if (ev.key === "ArrowLeft") { go(i + (RTL ? 1 : -1)); }
  });
  let x0 = null;
  box.addEventListener("touchstart", ev => { x0 = ev.touches[0].clientX; }, {passive:true});
  box.addEventListener("touchend", ev => { if (x0 === null) return;
    const dx = ev.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) go(i + ((dx < 0) !== RTL ? 1 : -1));
    x0 = null; play(); }, {passive:true});
  play();
})();

/* ================= SİSTEM SEKMELERİ (WAI-ARIA tabs) ================= */
(function(){
  const tabs = $$(".sys__tab"); if (!tabs.length) return;
  const select = (b, focus) => {
    tabs.forEach(o=>{ const on = o === b;
      o.classList.toggle("on", on); o.setAttribute("aria-selected", on); o.tabIndex = on ? 0 : -1;
      const p = document.getElementById(o.getAttribute("aria-controls"));
      if (p) { p.hidden = !on; p.classList.toggle("on", on); } });
    if (focus) b.focus();
  };
  tabs.forEach((b,k)=>{
    b.addEventListener("click", ()=>select(b));
    b.addEventListener("keydown", ev => {
      let n = null;
      if (ev.key === "ArrowRight") n = RTL ? k-1 : k+1;
      else if (ev.key === "ArrowLeft") n = RTL ? k+1 : k-1;
      else if (ev.key === "Home") n = 0;
      else if (ev.key === "End") n = tabs.length - 1;
      if (n === null) return;
      ev.preventDefault(); select(tabs[(n + tabs.length) % tabs.length], true);
    });
  });
  /* küçük görseller ana görseli değiştirir */
  $$(".sys__p").forEach(p=>{
    const main = $(".sys__fig img", p); const tbs = $$(".sys__tb", p);
    tbs.forEach(t=>t.addEventListener("click", ()=>{
      main.src = t.dataset.src; tbs.forEach(o=>o.classList.toggle("on", o === t)); }));
  });
})();

/* ================= BAŞLIK GÖLGESİ + SAYFA BAŞINA DÖN =================
   Başlık yüksekliği kaydırınca DEĞİŞMEZ: değişseydi alttaki içerik zıplardı. */
const toTop = $("#toTop");
let tick = false;
const onScroll = () => { const y = scrollY;
  if (hdrEl) hdrEl.classList.toggle("stuck", y > 20);
  if (toTop) toTop.hidden = y < 700;
  tick = false; };
addEventListener("scroll", ()=>{ if (!tick) { tick = true; requestAnimationFrame(onScroll); } }, {passive:true});
onScroll();
if (toTop) toTop.addEventListener("click", ()=>scrollTo({top:0, behavior: reduce ? "auto" : "smooth"}));

/* ================= BELİRME ANİMASYONU =================
   İlk ekrandakiler hemen görünür (yanıp sönme olmasın); gerisi kaydırdıkça. */
(function(){
  const els = $$(".rev");
  if (reduce || !("IntersectionObserver" in window)) { els.forEach(n=>n.classList.add("in")); return; }
  const io = new IntersectionObserver(es=>es.forEach(x=>{
    if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }),
    {threshold:.08, rootMargin:"0px 0px -40px"});
  const vh = innerHeight;
  els.forEach((n,k)=>{
    if (n.getBoundingClientRect().top < vh) n.classList.add("in");
    else { n.style.transitionDelay = (k % 3) * 70 + "ms"; io.observe(n); }
  });
})();

/* istatistik sayaçları (SITE_BASE.stats doluysa) */
if ("IntersectionObserver" in window) {
  const cio = new IntersectionObserver(es=>es.forEach(x=>{
    if (!x.isIntersecting) return; cio.unobserve(x.target);
    const n = x.target, to = parseInt(n.dataset.c,10), suf = n.textContent.replace(/[0-9]/g,"");
    if (isNaN(to) || reduce) return;
    const from = to > 1000 ? to - 40 : 0, t0 = performance.now();
    const step = t => { const k = Math.min(1,(t-t0)/1300), v = Math.round(from+(to-from)*(1-Math.pow(1-k,3)));
      n.textContent = v + suf; if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }), {threshold:.6});
  $$("[data-c]").forEach(n=>cio.observe(n));
}

/* --- iletişim formu: FormSubmit AJAX gönderimi (06.08.2026) ---
   Uç nokta SITE_BASE.formEndpoint'te. İlk gerçek gönderimde FormSubmit
   alıcı adrese aktivasyon e-postası yollar; onaylanana dek iletim yapılmaz. */
const cf = $(".form");
if (cf && has(B.formEndpoint)) {
  const st  = cf.querySelector(".form__status");
  const say = (msg, err) => { st.hidden = false; st.textContent = msg; st.classList.toggle("err", !!err); };
  cf.addEventListener("submit", async ev => {
    ev.preventDefault();
    const fd = new FormData(cf);
    if ((fd.get("_honey") || "").trim() !== "") return;                    // bot tuzağı: dolduran gerçek kullanıcı değil
    if (!cf.querySelector('input[name="kvkk"]').checked) return say(T.form.kvkkWarn, true);
    if (!(fd.get("ad") || "").trim() || !(fd.get("email") || "").trim() || !(fd.get("mesaj") || "").trim())
      return say(T.form.fillWarn, true);
    const btn = cf.querySelector('button[type="submit"]');
    btn.disabled = true; say(T.form.sending, false);
    try {
      const r = await fetch(B.formEndpoint, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("ad"), company: fd.get("firma"), email: fd.get("email"),
          phone: fd.get("tel"), subject: fd.get("konu"), message: fd.get("mesaj"),
          _subject: "Leon Kimya web formu: " + fd.get("konu"),
          _template: "table", _captcha: "false"
        })
      });
      if (!r.ok) throw new Error(r.status);
      /* HTTP 200 tek başına YETMEZ. FormSubmit teslim edemediği durumlarda da
         200 dönüp gövdeye success:"false" yazıyor (ör. alıcı adres henüz
         aktive edilmemişse). Yalnız r.ok'a bakmak, mesaj iletilmediği hâlde
         ziyaretçiye "mesajınız alındı" dedirtiyordu. (yaşanmış hata) */
      const sonuc = await r.json().catch(() => ({}));
      if (String(sonuc.success) !== "true") throw new Error(sonuc.message || "gonderilemedi");
      cf.reset(); say(T.form.success, false);
    } catch (_) { say(T.form.error, true); }
    btn.disabled = false;
  });
}
})();
