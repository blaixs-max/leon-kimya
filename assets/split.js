/* =============================================================
   LEON KİMYA — render betiği
   İçerik: assets/i18n.js (SITE_BASE + STRINGS)  |  Stil: assets/split.css
   Dil: <html lang="..."> değerinden okunur. Arapça için dir="rtl".
   -------------------------------------------------------------
   GÜVENLİK KURALI
   Boş bırakılmış iletişim bilgileri ASLA bağlantı olarak render
   edilmez. WhatsApp / telefon / e-posta / harita / katalog alanları
   boşsa ilgili buton veya bölüm hiç basılmaz.
   ============================================================= */
(function(){
const B = window.SITE_BASE;
const LANG = (document.documentElement.lang || "tr").slice(0,2);
const T = window.STRINGS[LANG] || window.STRINGS.tr;
const RTL = document.documentElement.dir === "rtl";

const $=(s,r)=>(r||document).querySelector(s), $$=(s,r)=>[...(r||document).querySelectorAll(s)];
const e = s => String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const n2 = i => String(i+1).padStart(2,"0");
const has = v => !!(v && String(v).trim());

const isExt = h => /^https?:\/\//i.test(h||"");
const ext   = h => isExt(h) ? ' target="_blank" rel="noopener"' : "";
const link  = (h) => B.links[h] || "#";
/* boş href verilirse bağlantı üretmez */
const cover = (h,label) => has(h) ? `<a class="lnk-cover" href="${h}"${ext(h)}><span>${e(label)}</span></a>` : "";

const P = {
  phone:'<path d="M4 5c0-1 .8-2 1.8-2h2c.8 0 1.5.6 1.7 1.4l.7 2.8c.2.7-.1 1.4-.7 1.8l-1.4.9a12 12 0 0 0 5 5l.9-1.4c.4-.6 1.1-.9 1.8-.7l2.8.7c.8.2 1.4.9 1.4 1.7v2c0 1-1 1.8-2 1.8C10.6 19 4 12.4 4 5z"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5 12 13l8.5-6.5"/>',
  pin:'<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  users:'<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 5.5a3.2 3.2 0 0 1 0 6.4"/><path d="M17.5 14.4A6.5 6.5 0 0 1 21.5 20"/>',
  factory:'<path d="M3 21V10l6 4V10l6 4V6l6 3v12z"/><path d="M7 21v-4M12 21v-4M17 21v-4"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
  award:'<circle cx="12" cy="9" r="5.4"/><path d="M8.2 13.4 7 21l5-2.4L17 21l-1.2-7.6"/>',
  star:'<path d="m12 3 2.6 5.6 6.1.8-4.5 4.2 1.2 6.1L12 16.8 6.6 19.7l1.2-6.1L3.3 9.4l6.1-.8z"/>',
  chip:'<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M8 3v2M12 3v2M16 3v2M8 19v2M12 19v2M16 19v2M3 8h2M3 12h2M3 16h2M19 8h2M19 12h2M19 16h2"/>',
  truck:'<path d="M2 7h11v10H2z"/><path d="M13 10h4l4 3.5V17h-8z"/><circle cx="6.5" cy="18.5" r="2"/><circle cx="17" cy="18.5" r="2"/>',
  shield:'<path d="m12 3 8 3v6c0 5-3.4 8.2-8 9.5C7.4 20.2 4 17 4 12V6z"/><path d="m9 12.5 2 2 4-4"/>'
};
const ic=(k,w)=>`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w||1.7}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[k]||""}</svg>`;

/* --- metin logo: gerçek logo dosyası yoksa kullanılır --- */
const wordmark = (cls) => has(B.brand.logoDark)
  ? `<img class="${cls}" src="${cls==="lw"?B.brand.logoWhite:B.brand.logoDark}" alt="${e(B.brand.name)}">`
  : `<span class="wordmark ${cls}"><b>LEON</b><i>KİMYA</i></span>`;

/* ---- ÜST BAR — yalnızca gösterilecek bir şey varsa ---- */
const topItems = [];
if (B.contactReady && has(B.contact.phone1))
  topItems.push(`<a href="tel:${B.contact.tel1}">${ic("phone")}${e(B.contact.phone1)}</a>`);
if (B.contactReady && has(B.contact.email))
  topItems.push(`<a href="mailto:${B.contact.email}">${ic("mail")}${e(B.contact.email)}</a>`);
if (has(T.addressShort))
  topItems.push(`<span class="top__addr">${ic("pin")}${e(T.addressShort)}</span>`);
const socHtml = (B.social||[]).length
  ? `<div class="top__soc">${B.social.map(s=>`<a href="${s.href}"${ext(s.href)} aria-label="${e(s.name)}">${ic("globe")}</a>`).join("")}</div>` : "";
const langHtml = `<div class="top__langs">${B.langs.map(l=>
  `<a href="${l.href}" class="${l.lang===LANG?"on":""}" hreflang="${l.lang}">${l.code}</a>`).join("")}</div>`;
const top = (topItems.length||socHtml)
  ? `<div class="top"><div class="wrap top__in">
      <div class="top__l">${topItems.join("")}</div>
      <div class="top__r">${socHtml}${langHtml}</div></div></div>`
  : `<div class="top"><div class="wrap top__in"><div class="top__l"></div><div class="top__r">${langHtml}</div></div></div>`;

/* ---- HEADER ---- */
const label = k => (T.nav && T.nav[k]) || k;
const subTree = items => `<ul class="sub">${items.map(i=>{
  const h = i.L ? link(i.L) : (i.href||"#");
  const kids = i.children && i.children.length;
  return `<li><a href="${h}"${ext(h)}>${e(label(i.k))}${kids?ic("arrow"):""}</a>${kids?subTree(i.children):""}</li>`;
}).join("")}</ul>`;
const flat = it => it.mega ? it.children.map(c=>({k:c.k,L:c.L,children:c.children||[]})) : it.children;

const hdr = `<header class="hdr" id="hdr"><div class="wrap hdr__in">
  <a class="logo" href="#top" aria-label="${e(B.brand.name)}">${wordmark("ld")}</a>
  <nav class="nav" aria-label="${e(T.ui.menu)}"><ul>
    <li><a href="#top" class="on">${e(T.ui.home)}</a></li>
    ${B.nav.map(it=>`<li><a href="${it.href}">${e(label(it.k))}${it.children?'<i class="caret"></i>':""}</a>${it.children?subTree(flat(it)):""}</li>`).join("")}
  </ul></nav>
  <div class="hdr__act">
    <a class="btn btn--brand btn--sm" href="#iletisim">${e(T.ui.quote)}</a>
    <button class="burger" aria-label="${e(T.ui.menu)}" aria-expanded="false"><span></span><span></span><span></span></button>
  </div>
</div></header>`;

const drwTree = items=>`<ul>${items.map(i=>{
  const h = i.L ? link(i.L) : (i.href||"#");
  const kids = i.children && i.children.length;
  return `<li><div class="drw__row"><a href="${h}"${ext(h)}>${e(label(i.k))}</a>${kids?`<button class="drw__tg" aria-label="${e(T.ui.openSub)}">+</button>`:""}</div>
  ${kids?`<div class="drw__sub">${drwTree(i.children)}</div>`:""}</li>`;}).join("")}</ul>`;
const drw = `<div class="drw" id="drw">
  <div class="drw__hd">${wordmark("ld")}<button class="drw__x" aria-label="${e(T.ui.closeMenu)}">&times;</button></div>
  <nav class="drw__nav">${drwTree([{k:"__home",href:"#top"}].concat(B.nav.map(i=>({k:i.k,href:i.href,children:i.mega?flat(i):i.children}))))}</nav>
  <div class="drw__ft">
    <a class="btn btn--brand" href="#iletisim">${e(T.ui.quote)} ${ic("arrow")}</a>
    <div class="drw__langs">${B.langs.map(l=>`<a href="${l.href}" class="${l.lang===LANG?"on":""}">${l.code}</a>`).join("")}</div>
  </div></div><div class="scrim" id="scrim" hidden></div>`;

/* ---- HERO ---- */
const catBtn = c => {
  const h = link(c.L);
  return `<a class="btn btn--w" href="${h}"${ext(h)}>${e(T.ui.detail)} ${ic("arrow")}</a>`;
};
const slides = B.categories.map((c,i)=>{
  const s = T.categories[i]||{};
  return `<article class="slide${i===0?" on":""}">
  <div class="slide__bg"><img src="${c.img}" alt=""></div>
  <div class="slide__in">
    <span class="slide__k">${n2(i)} — ${e(T.ui.productFamily)}</span>
    <h2>${e(s.title)}</h2><h3>${e(s.sub)}</h3><p>${e(s.desc)}</p>
    <div class="slide__btns">${catBtn(c)}</div>
  </div></article>`;}).join("");

const featIcons=["users","factory","globe","award"];
const hero = `<section class="hero" id="top">
  <div class="slider" id="sld">${slides}
    <div class="sld__nav">${B.categories.map((c,i)=>`<button class="sld__dot${i===0?" on":""}" data-g="${i}" aria-label="${e((T.categories[i]||{}).sub||"")}"></button>`).join("")}</div>
    <div class="sld__ar"><button data-d="-1" aria-label="${e(T.ui.prev)}">${ic("arrow")}</button><button data-d="1" aria-label="${e(T.ui.next)}">${ic("arrow")}</button></div>
  </div>
  <aside class="hpanel">
    <div class="feat">${T.feat.map((f,i)=>{
      const h = link(B.featLinks[i]);
      return `<a class="feat__i" href="${h}"${ext(h)}><span class="feat__ic">${ic(featIcons[i],1.6)}</span><h3>${e(f.t)}</h3><p>${e(f.d)}</p></a>`;}).join("")}</div>
    <div class="hpanel__cta">
      <a class="btn btn--brand" href="#sistemler">${e(T.ui.viewSystems)} ${ic("arrow")}</a>
      <a class="btn btn--line" href="#iletisim">${e(T.ui.quote)}</a>
    </div>
  </aside></section>`;

const tiles = `<section class="tiles" id="urunler"><div class="wrap">
  <div class="sechd sechd--onGray"><span class="sechd__t">${e(T.ui.secProducts)}</span>
    <span class="sechd__s">${e(T.ui.secProductsSub)}</span></div>
  <div class="tilegrid">${B.tiles.map((t,i)=>{const h=link(t.L);
    return `<a class="tile rev" href="${h}"${ext(h)}><img src="${t.img}" alt="">
      <h3>${e(T.tiles[i])}</h3><span class="tile__go">${ic("arrow")}</span></a>`;}).join("")}</div>
</div></section>`;

/* video değil, saha görselleri — oynatma ikonu kaldırıldı */
const vids = `<section class="vids"><div class="wrap">
  <div class="sechd"><span class="sechd__t">${e(T.ui.secVideo)}</span><span class="sechd__s">${e(T.ui.secVideoSub)}</span></div>
  <div class="vidgrid">${B.videos.map((v,i)=>{const s=T.videos[i]||{};const h=link(v.L);
    return `<figure class="vid rev"><img src="${v.img}" alt="${e(s.title)}" loading="lazy">
    <div class="vid__hd"><b>${e(s.title)}</b><span>${e(s.sub)}</span></div>
    ${cover(h,s.title)}</figure>`;}).join("")}</div>
</div></section>`;

const sys = `<section class="sys" id="sistemler"><div class="wrap">
  <div class="sechd sechd--onGray"><span class="sechd__t">${e(T.ui.secSystems)}</span>
    <span class="sechd__s">${e(T.ui.secSystemsSub)}</span></div>
  <div class="systabs">${B.systems.map((s,i)=>`<button class="${i===0?"on":""}" data-t="${s.id}"><b>${n2(i)}</b>${e(T.systems[i].title)}</button>`).join("")}</div>
  ${B.systems.map((s,i)=>{const t=T.systems[i];
    return `<div class="syspanel${i===0?" on":""}" data-p="${s.id}">
    <div><figure class="syspanel__fig"><img src="${s.img}" alt="${e(t.title)}" loading="lazy"></figure>
      <div class="syspanel__th">${s.gallery.map(g=>`<img src="${g}" alt="" loading="lazy">`).join("")}</div></div>
    <div><h3>${e(t.title)}</h3><p>${e(t.desc)}</p>
      <h4>${e(T.ui.applicationAreas)}</h4><ul class="chips">${t.areas.map(a=>`<li>${e(a)}</li>`).join("")}</ul>
      <h4>${e(T.ui.systemProducts)}</h4><ul class="dots">${t.props.map(p=>`<li>${e(p)}</li>`).join("")}</ul>
      <div class="sysbtns"><a class="btn btn--brand btn--sm" href="#iletisim">${e(T.ui.projectQuote)} ${ic("arrow")}</a></div>
    </div></div>`;}).join("")}
</div></section>`;

const statsHtml = (B.stats||[]).length ? `<section class="stats"><div class="wrap"><dl class="stats__in">
  ${B.stats.map((s,i)=>`<div><dt data-c="${s.v}">${s.v}${s.s}</dt><dd>${e((T.stats||[])[i]||"")}</dd></div>`).join("")}
</dl></div></section>` : "";

/* ---- İHRACAT: konteyner ölçüleri + Incoterms 2020 ---- */
const X = T.exp;
const party = v => v === "S" ? X.seller : X.buyer;
/* Arapçada da Latin rakam kullanılır: tablodaki ölçülerle tutarlı kalsın diye */
const num = n => Number(n).toLocaleString(LANG === "ar" ? "en" : LANG);

const contRows = B.containers.map(c=>`<tr>
  <th scope="row">${e(X.cNames[c.k])}</th>
  <td class="nw">${c.L} × ${c.W} × ${c.H} m</td>
  <td class="nw">${c.dW} × ${c.dH} m</td>
  <td class="nw">${c.vol} m³</td>
  <td class="nw">${num(c.tare)} kg</td>
  <td class="nw"><b>${num(c.pay)} kg</b></td>
  <td>${c.ibc} × ${e(X.loadIbc)}<br><span class="sub">${c.drum} × ${e(X.loadDrum)}</span></td>
</tr>`).join("");

const incoRows = B.incoterms.map(t=>{
  const s = X.terms[t.code] || {};
  const insTxt = s.ins ? s.ins : (t.ins === "S" ? X.seller : X.none);
  return `<tr>
    <th scope="row"><span class="code">${t.code}</span></th>
    <td>${e(s.n)}</td>
    <td class="nw"><span class="pill">${e(t.mode === "sea" ? X.modeSea : X.modeAny)}</span></td>
    <td class="nw"><span class="who who--${t.freight}">${e(party(t.freight))}</span></td>
    <td>${e(insTxt)}</td>
    <td class="risk">${e(s.risk)}</td>
  </tr>`;}).join("");

const exportSec = `<section class="exp" id="ihracat"><div class="wrap">
  <div class="sechd sechd--onGray"><span class="sechd__t">${e(X.title)}</span>
    <span class="sechd__s">${e(X.sub)}</span></div>

  <div class="exp__block" id="konteyner">
    <h3 class="exp__h">${e(X.cTitle)}</h3>
    <p class="exp__lead">${e(X.cSub)}</p>
    <div class="tblwrap"><table class="tbl">
      <thead><tr>
        <th scope="col">${e(X.cCols.type)}</th><th scope="col">${e(X.cCols.inner)}</th>
        <th scope="col">${e(X.cCols.door)}</th><th scope="col">${e(X.cCols.vol)}</th>
        <th scope="col">${e(X.cCols.tare)}</th><th scope="col">${e(X.cCols.pay)}</th>
        <th scope="col">${e(X.cCols.load)}</th>
      </tr></thead><tbody>${contRows}</tbody>
    </table></div>
    <p class="exp__note">${e(X.cNote)}</p>
  </div>

  <div class="exp__block" id="incoterms">
    <h3 class="exp__h">${e(X.iTitle)}</h3>
    <p class="exp__lead">${e(X.iSub)}</p>
    <div class="tblwrap"><table class="tbl">
      <thead><tr>
        <th scope="col">${e(X.iCols.code)}</th><th scope="col">${e(X.iCols.name)}</th>
        <th scope="col">${e(X.iCols.mode)}</th><th scope="col">${e(X.iCols.freight)}</th>
        <th scope="col">${e(X.iCols.ins)}</th><th scope="col">${e(X.iCols.risk)}</th>
      </tr></thead><tbody>${incoRows}</tbody>
    </table></div>
    <p class="exp__note">${e(X.iNote)}</p>
  </div>

  <p class="exp__cta"><a class="btn btn--brand" href="#iletisim">${e(T.ui.quote)} ${ic("arrow")}</a></p>
</div></section>`;

const about = `<section class="about" id="kurumsal"><div class="wrap about__in">
  <figure class="about__fig rev"><img src="${B.aboutImage}" alt="${e(T.about.title)}" loading="lazy"></figure>
  <div><p class="about__k">${e(T.ui.corporateKicker)}</p><h2>${e(T.about.title)}</h2>
    <p>${e(T.about.lead)}</p>${T.about.paras.map(p=>`<p>${e(p)}</p>`).join("")}</div>
</div></section>` + statsHtml;

const apps = `<section class="apps" id="uygulamalar"><div class="wrap">
  <div class="sechd sechd--onGray"><span class="sechd__t">${e(T.ui.secApps)}</span>
    <span class="sechd__s">${e(T.ui.secAppsSub)}</span></div>
  <div class="appgrid">${B.applications.map((a,i)=>{const h=link(a.L);
    return `<figure class="app rev"><img src="${a.img}" alt="${e(T.applications[i])}" loading="lazy">
    <figcaption><b>${n2(i)}</b><span>${e(T.applications[i])}</span></figcaption>${cover(h,T.applications[i])}</figure>`;}).join("")}</div>
</div></section>`;

/* markalar bölümü — kendi markalarımız girilene kadar görünmez */
const brands = (B.brands||[]).length ? `<section class="brands" id="referanslar"><div class="wrap">
  <div class="sechd"><span class="sechd__t">${e(T.ui.refProjects)}</span></div>
  <div class="brandrow">
    <button class="brandnav" data-b="-1" aria-label="${e(T.ui.prev)}">${ic("arrow")}</button>
    <div class="brandtrack" id="btrack"><ul>${B.brands.concat(B.brands).map(b=>{const h=link(b.L);
      return `<li><a href="${h}"${ext(h)}><img src="${b.img}" alt="${e(b.name)}" loading="lazy"></a></li>`;}).join("")}</ul></div>
    <button class="brandnav" data-b="1" aria-label="${e(T.ui.next)}">${ic("arrow")}</button>
  </div>
</div></section>` : "";

/* Blog bölümü kullanıcı isteğiyle kaldırıldı (05.08.2026).
   Geri eklemek gerekirse git geçmişindeki blog bloğuna bakın. */

/* ---- İLETİŞİM ---- */
const fField = f => {
  const lab = T.form[f.k];
  if (f.type==="textarea") return `<label class="f f--full"><span>${e(lab)}</span><textarea name="${f.name}" rows="5" placeholder="${e(lab)}"></textarea></label>`;
  if (f.type==="select")   return `<label class="f"><span>${e(lab)}</span><select name="${f.name}">${T.form.subjects.map(o=>`<option>${e(o)}</option>`).join("")}</select></label>`;
  return `<label class="f"><span>${e(lab)}</span><input type="${f.type}" name="${f.name}" placeholder="${e(lab)}"></label>`;
};
const infoRow = (icon,lbl,val,href) => {
  const body = has(val)
    ? (has(href) && B.contactReady ? `<a href="${href}"${ext(href)}>${e(val)}</a>` : e(val))
    : `<span class="todo">${e(lbl.todo)}</span>`;
  return `<li>${ic(icon)}<div><b>${e(lbl.t)}</b><span>${body}</span></div></li>`;
};
const contact = `<section class="contact" id="iletisim"><div class="wrap contact__in">
  <div><p class="about__k">${e(T.ui.contactKicker)}</p>
    <h2 style="font-size:clamp(24px,3vw,34px);margin-bottom:6px">${e(T.ui.contactInfo)}</h2>
    <ul class="cinfo">
      ${infoRow("pin",  {t:T.ui.labelAddress, todo:T.addressTodo}, T.address, B.contact.mapLink)}
      ${infoRow("phone",{t:T.ui.labelPhone,   todo:T.phoneTodo},   B.contact.phone1, "tel:"+B.contact.tel1)}
      ${infoRow("mail", {t:T.ui.labelEmail,   todo:T.emailTodo},   B.contact.email, "mailto:"+B.contact.email)}
    </ul>
    ${has(B.contact.mapEmbed)
      ? `<div class="map"><iframe title="${e(T.ui.mapTitle)}" loading="lazy" src="${B.contact.mapEmbed}"></iframe></div>`
      : `<div class="map map--todo"><span>${e(T.ui.mapTodo)}</span></div>`}
  </div>
  <form class="form" onsubmit="return false"><h3>${e(T.form.title)}</h3><p>${e(T.form.text)}</p>
    <div class="fgrid">${B.formFields.map(fField).join("")}
      <label class="f f--full f--check"><input type="checkbox"><span>${e(T.form.kvkk)}</span></label></div>
    <button class="btn btn--brand" type="submit">${e(T.form.submit)} ${ic("arrow")}</button>
    <p class="form__note">${e(T.form.notWired)}</p></form>
</div></section>`;

/* ---- FOOTER ---- */
const fCols = B.footer.map(col=>
  `<div><h4>${e(label(col.k))}</h4><ul>${col.items.map((k,i)=>{const h=link(col.L[i]);
    return `<li><a href="${h}"${ext(h)}>${e(label(k))}</a></li>`;}).join("")}</ul></div>`).join("");
const fContact = [];
if (has(T.address)) fContact.push(`<li>${ic("pin")}<span>${e(T.address)}</span></li>`);
else fContact.push(`<li>${ic("pin")}<span class="todo">${e(T.addressTodo)}</span></li>`);
if (B.contactReady && has(B.contact.phone1)) fContact.push(`<li>${ic("phone")}<a href="tel:${B.contact.tel1}"><b>${e(B.contact.phone1)}</b></a></li>`);
else fContact.push(`<li>${ic("phone")}<span class="todo">${e(T.phoneTodo)}</span></li>`);
if (B.contactReady && has(B.contact.email)) fContact.push(`<li>${ic("mail")}<a href="mailto:${B.contact.email}"><b>${e(B.contact.email)}</b></a></li>`);
else fContact.push(`<li>${ic("mail")}<span class="todo">${e(T.emailTodo)}</span></li>`);

const ftr = `<footer class="ftr"><div class="wrap">
  <div class="ftr__top">
    <div><h4>${e(T.ui.contactInfo)}</h4><ul class="fcontact">${fContact.join("")}</ul></div>
    ${fCols}
    <div class="ftr__brand">
      ${wordmark("lw")}
      <p class="ftr__tag">${e(T.tagline)}</p>
      ${(B.social||[]).length ? `<div class="ftr__soc">${B.social.map(s=>`<a href="${s.href}"${ext(s.href)} aria-label="${e(s.name)}">${ic("globe")}</a>`).join("")}</div>` : ""}
    </div>
  </div>
  <div class="ftr__bar">
    <span>${e(T.copyright)} — ${e(T.ui.allRights)}</span>
    <div class="ftr__langs">${B.langs.map(l=>`<a href="${l.href}" class="${l.lang===LANG?"on":""}">${l.code}</a>`).join("")}</div>
  </div>
</div></footer>
<div class="fab">${has(B.contact.whatsapp)
  ? `<a class="fab__wa" href="${B.contact.whatsapp}?text=${encodeURIComponent(T.ui.waPrefill)}" target="_blank" rel="noopener" aria-label="${e(T.ui.waLabel)}" title="${e(T.ui.waLabel)}">
      <svg class="i" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a9.9 9.9 0 0 0-8.55 14.9L2.1 21.9l5.14-1.32A9.94 9.94 0 1 0 12 2Zm0 1.67a8.27 8.27 0 1 1-4.2 15.4l-.3-.18-3.05.78.81-2.96-.2-.31A8.27 8.27 0 0 1 12 3.67Zm-3.1 4.35c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.6.12.17 1.74 2.79 4.3 3.8 2.13.84 2.56.67 3.02.63.46-.04 1.49-.61 1.7-1.2.21-.59.21-1.09.15-1.2-.06-.1-.23-.17-.48-.29-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.12-.17.25-.65.82-.8.99-.15.17-.29.19-.54.06a6.8 6.8 0 0 1-2-1.23 7.5 7.5 0 0 1-1.39-1.72c-.14-.25-.01-.39.11-.51.11-.11.25-.29.38-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.55-1.39-.77-1.9-.2-.49-.4-.42-.55-.43l-.55-.01Z"/></svg>
    </a>` : ""}<button id="toTop" aria-label="${e(T.ui.toTop)}" hidden>${ic("arrow")}</button></div>`;

document.title = T.meta.title;
const md = $('meta[name="description"]'); if (md) md.setAttribute("content", T.meta.desc);

document.getElementById("app").innerHTML =
  /* İhracat bölümü kullanıcı isteğiyle sayfanın en altına (footer öncesine) taşındı — 05.08.2026 */
  top + hdr + drw + `<main id="main">` + hero + tiles + vids + sys + about + apps + brands + contact + exportSec + `</main>` + ftr +
  `<div class="dtl" id="dtl" hidden></div>`;

/* ================= ÜRÜN & SİSTEM DETAY KATMANI =================
   Bağlantılar "#detay/<anahtar>" biçimindedir (bkz. SITE_BASE.links).
   İçerik SITE_BASE.details (görseller) + STRINGS.<dil>.details (metin). */
(function(){
  const box = $("#dtl");
  const D = B.details || {};
  const DT = T.details || {};

  const dtlHtml = key => {
    const d = D[key], t = DT[key];
    if (!d || !t) return "";
    const title = t.title || label(d.nav);          /* uygulama kayıtları kendi başlığını taşır */
    const kicker = d.app ? label("applications") : T.ui.productFamily;
    return `<div class="dtl__panel" role="dialog" aria-modal="true" aria-label="${e(title)}">
      <button class="dtl__x" aria-label="${e(T.ui.close)}">&times;</button>
      <figure class="dtl__hero"><img src="${d.img}" alt="${e(title)}"></figure>
      <div class="dtl__body">
        <p class="about__k">${e(kicker)}</p>
        <h2>${e(title)}</h2>
        <p class="dtl__lead">${e(t.lead)}</p>
        ${(t.paras||[]).map(p=>`<p class="dtl__p">${e(p)}</p>`).join("")}
        ${(t.products||[]).length?`<h4>${e(T.ui.productRange)}</h4><div class="dtl__prods">${t.products.map((pr,i)=>{
          const pi=(d.productImgs||[])[i];
          return `<article class="dtl__prod">${pi?`<img src="${pi}" alt="${e(pr.t)}" loading="lazy">`:""}<div><h3>${e(pr.t)}</h3><p>${e(pr.d)}</p></div></article>`;
        }).join("")}</div>`:""}
        ${(t.areas||[]).length?`<h4>${e(T.ui.applicationAreas)}</h4><ul class="chips">${t.areas.map(a=>`<li>${e(a)}</li>`).join("")}</ul>`:""}
        ${(t.props||[]).length?`<h4>${e(T.ui.keyFeatures)}</h4><ul class="dots">${t.props.map(p=>`<li>${e(p)}</li>`).join("")}</ul>`:""}
        ${(d.gallery||[]).length?`<div class="dtl__gal">${d.gallery.map(g=>`<img src="${g}" alt="" loading="lazy">`).join("")}</div>`:""}
        <div class="sysbtns"><a class="btn btn--brand" href="#iletisim">${e(T.ui.projectQuote)} ${ic("arrow")}</a></div>
      </div></div>`;
  };

  const closeDtl = () => {
    if (box.hidden) return;
    box.classList.remove("on");
    document.body.classList.remove("lock");
    setTimeout(()=>{ box.hidden = true; box.innerHTML = ""; }, 180);
    if (location.hash.indexOf("#detay/") === 0)
      history.replaceState(null, "", location.pathname + location.search);
  };

  const openDtl = key => {
    const html = dtlHtml(key);
    if (!html) { closeDtl(); return; }
    box.innerHTML = html;
    box.hidden = false;
    box.scrollTop = 0;
    requestAnimationFrame(()=>box.classList.add("on"));
    document.body.classList.add("lock");
    $(".dtl__x", box).addEventListener("click", closeDtl);
    /* panel içindeki sayfa-içi bağlantılar (teklif al) katmanı kapatır */
    $$(".dtl__body a", box).forEach(a=>a.addEventListener("click", closeDtl));
    /* galeri görseline tıklayınca kapak ile yer değiştirir */
    const heroImg = $(".dtl__hero img", box);
    $$(".dtl__gal img", box).forEach(g=>g.addEventListener("click", ()=>{
      const sw = heroImg.src; heroImg.src = g.src; g.src = sw;
    }));
  };

  const onHash = () => {
    if (location.hash.indexOf("#detay/") === 0)
      openDtl(decodeURIComponent(location.hash.slice(7)));
    else closeDtl();
  };
  addEventListener("hashchange", onHash);
  box.addEventListener("click", ev=>{ if (ev.target === box) closeDtl(); });
  addEventListener("keydown", ev=>{ if (ev.key === "Escape") closeDtl(); });
  onHash(); /* sayfa doğrudan #detay/... ile açıldıysa */
})();

/* ================= DAVRANIŞLAR ================= */
(function(){
  const box=$("#sld"); if(!box) return;
  const sl=$$(".slide",box), dots=$$(".sld__dot",box); let i=0,timer;
  const go=k=>{i=(k+sl.length)%sl.length;sl.forEach((s,x)=>s.classList.toggle("on",x===i));dots.forEach((d,x)=>d.classList.toggle("on",x===i));};
  const play=()=>{clearInterval(timer);timer=setInterval(()=>go(i+1),6500);};
  dots.forEach(d=>d.addEventListener("click",()=>{go(+d.dataset.g);play();}));
  $$(".sld__ar button",box).forEach(b=>b.addEventListener("click",()=>{go(i+ (RTL? -(+b.dataset.d) : +b.dataset.d));play();}));
  box.addEventListener("mouseenter",()=>clearInterval(timer));
  box.addEventListener("mouseleave",play);
  let x0=null;
  box.addEventListener("touchstart",ev=>x0=ev.touches[0].clientX,{passive:true});
  box.addEventListener("touchend",ev=>{if(x0===null)return;const dx=ev.changedTouches[0].clientX-x0;
    if(Math.abs(dx)>50) go(i+((dx<0)!==RTL?1:-1)); x0=null; play();},{passive:true});
  play();
})();

$$(".systabs button").forEach(b=>b.addEventListener("click",()=>{
  $$(".systabs button").forEach(o=>o.classList.remove("on"));
  $$(".syspanel").forEach(o=>o.classList.remove("on"));
  b.classList.add("on"); const p=$(`[data-p="${b.dataset.t}"]`); if(p)p.classList.add("on");
}));
$$(".syspanel").forEach(p=>{
  const main=$(".syspanel__fig img",p);
  $$(".syspanel__th img",p).forEach(t=>t.addEventListener("click",()=>{const s=main.src;main.src=t.src;t.src=s;}));
});
(function(){
  const tr=$("#btrack"); if(!tr) return; const ul=tr.firstElementChild; let off=0;
  $$(".brandnav").forEach(b=>b.addEventListener("click",()=>{
    const step=tr.clientWidth*.6,max=ul.scrollWidth-tr.clientWidth;
    off=Math.max(0,Math.min(max,off+(+b.dataset.b)*step));
    ul.style.transform=`translateX(${RTL?off:-off}px)`;
  }));
})();

const hdrEl=$("#hdr"), toTop=$("#toTop");
const onScroll=()=>{const y=scrollY;hdrEl.classList.toggle("stuck",y>30);if(toTop)toTop.hidden=y<600;};
addEventListener("scroll",onScroll,{passive:true}); onScroll();
if(toTop) toTop.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));

const drwEl=$("#drw"), scrimEl=$("#scrim");
const setMenu=v=>{drwEl.classList.toggle("on",v);scrimEl.hidden=!v;requestAnimationFrame(()=>scrimEl.classList.toggle("on",v));
  document.body.classList.toggle("lock",v);$$(".burger").forEach(b=>{b.classList.toggle("on",v);b.setAttribute("aria-expanded",v)});};
$$(".burger").forEach(b=>b.addEventListener("click",()=>setMenu(!drwEl.classList.contains("on"))));
$(".drw__x").addEventListener("click",()=>setMenu(false));
scrimEl.addEventListener("click",()=>setMenu(false));
addEventListener("keydown",ev=>{if(ev.key==="Escape")setMenu(false)});
$$(".drw a").forEach(a=>a.addEventListener("click",()=>setMenu(false)));
$$(".drw__tg").forEach(b=>b.addEventListener("click",()=>{const li=b.closest("li");li.classList.toggle("open");b.textContent=li.classList.contains("open")?"–":"+";}));

const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.1,rootMargin:"0px 0px -50px"});
$$(".rev").forEach((n,i)=>{n.style.transitionDelay=(i%4)*70+"ms";io.observe(n)});
const cio=new IntersectionObserver(es=>es.forEach(x=>{
  if(!x.isIntersecting)return; cio.unobserve(x.target);
  const n=x.target,to=parseInt(n.dataset.c,10),suf=n.textContent.replace(/[0-9]/g,"");
  if(isNaN(to))return; const from=to>1000?to-40:0,t0=performance.now();
  const step=t=>{const k=Math.min(1,(t-t0)/1300),v=Math.round(from+(to-from)*(1-Math.pow(1-k,3)));n.textContent=v+suf;if(k<1)requestAnimationFrame(step)};
  requestAnimationFrame(step);
}),{threshold:.6});
$$("[data-c]").forEach(n=>cio.observe(n));

$$('a[href^="#"]').forEach(a=>a.addEventListener("click",ev=>{
  const id=a.getAttribute("href"); if(id.length<2)return;
  if(id.indexOf("#detay/")===0)return; /* detay bağlantıları hash yönlendirmesiyle açılır */
  const t=$(id); if(!t)return;
  ev.preventDefault(); scrollTo({top:t.getBoundingClientRect().top+scrollY-72,behavior:"smooth"});
}));

/* menüdeki "Anasayfa" etiketi */
const homeLink = $('.drw__nav a[href="#top"]'); if (homeLink) homeLink.textContent = T.ui.home;
})();
