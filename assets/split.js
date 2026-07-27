/* =============================================================
   POLİN KİMYA — "REFERANS SPLIT" render betiği (kazanan varyant 01)
   Tüm palet dosyaları bu tek betiği kullanır. İçerik: assets/data.js
   ============================================================= */
(function(){
const S = window.SITE, $=(s,r)=>(r||document).querySelector(s), $$=(s,r)=>[...(r||document).querySelectorAll(s)];
const e = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const n2 = i => String(i+1).padStart(2,"0");

const P = {
  phone:'<path d="M4 5c0-1 .8-2 1.8-2h2c.8 0 1.5.6 1.7 1.4l.7 2.8c.2.7-.1 1.4-.7 1.8l-1.4.9a12 12 0 0 0 5 5l.9-1.4c.4-.6 1.1-.9 1.8-.7l2.8.7c.8.2 1.4.9 1.4 1.7v2c0 1-1 1.8-2 1.8C10.6 19 4 12.4 4 5z"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5 12 13l8.5-6.5"/>',
  pin:'<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  doc:'<path d="M14 3v5h5"/><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M9 13h6M9 17h6"/>',
  users:'<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 5.5a3.2 3.2 0 0 1 0 6.4"/><path d="M17.5 14.4A6.5 6.5 0 0 1 21.5 20"/>',
  factory:'<path d="M3 21V10l6 4V10l6 4V6l6 3v12z"/><path d="M7 21v-4M12 21v-4M17 21v-4"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
  award:'<circle cx="12" cy="9" r="5.4"/><path d="M8.2 13.4 7 21l5-2.4L17 21l-1.2-7.6"/>',
  shield:'<path d="m12 3 8 3v6c0 5-3.4 8.2-8 9.5C7.4 20.2 4 17 4 12V6z"/><path d="m9 12.5 2 2 4-4"/>'
};
const F = {
  play:'<path d="M8 5.5v13l11-6.5z"/>',
  wa:'<path d="M12.05 2A9.9 9.9 0 0 0 3.6 17.1L2 22l5.05-1.6A9.9 9.9 0 1 0 12.05 2m5.7 14.1c-.25.7-1.45 1.35-2 1.4s-1.05.25-3.5-.75-4-3.5-4.15-3.65-.85-1.15-.85-2.2.55-1.55.75-1.8.45-.25.6-.25h.4c.15 0 .35-.05.55.4s.7 1.75.75 1.85.1.3 0 .45-.15.3-.3.45l-.4.5c-.15.15-.3.3-.15.6s.65 1.1 1.4 1.75c.95.85 1.75 1.1 2 1.25s.4.1.55-.05.65-.75.8-1 .35-.2.55-.15 1.4.65 1.65.8.4.2.45.3.05.6-.2 1.25"/>',
  in:'<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4z"/>',
  yt:'<path d="M21.6 7.2s-.2-1.4-.8-2c-.75-.8-1.6-.8-2-.85C16 4.2 12 4.2 12 4.2h-.02s-4 0-6.8.2c-.4.05-1.25.05-2 .85-.6.6-.8 2-.8 2S2.18 8.85 2.18 10.5v1.5c0 1.65.2 3.3.2 3.3s.2 1.4.8 2c.75.8 1.75.77 2.2.86 1.6.15 6.8.2 6.8.2s4 0 6.8-.21c.4-.05 1.25-.05 2-.85.6-.6.8-2 .8-2s.2-1.65.2-3.3v-1.5c0-1.65-.2-3.3-.2-3.3M9.9 14.4V8.9l5.15 2.76z"/>',
  ig:'<path d="M12 2.2c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.21 15.62 2.2 15.2 2.2 12s.01-3.58.07-4.85C2.42 3.92 3.93 2.38 7.15 2.23 8.42 2.21 8.8 2.2 12 2.2m0 5.6a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4m0 6.93a2.73 2.73 0 1 1 0-5.46 2.73 2.73 0 0 1 0 5.46m4.36-8.11a.98.98 0 1 0 0 1.96.98.98 0 0 0 0-1.96"/>',
  fb:'<path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94"/>'
};
const ic=(k,w)=>`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w||1.7}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[k]||""}</svg>`;
const icf=k=>`<svg class="i" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${F[k]||""}</svg>`;

const DARK = document.body.classList.contains("dark");
const LOGO = DARK ? S.brand.logoWhite : S.brand.logoDark;
const TOPLIGHT = document.documentElement.dataset.topbar === "light";

/* ---- ÜST BAR ---- */
const top = `<div class="top${TOPLIGHT?" top--onLight":""}"><div class="wrap top__in">
  <div class="top__l">
    <a href="tel:+902165933353">${ic("phone")}${S.contact.phone1}</a>
    <a href="${S.contact.whatsapp}" target="_blank" rel="noopener">${ic("phone")}${S.contact.mobile}</a>
    <a href="mailto:${S.contact.email}">${ic("mail")}${S.contact.email}</a>
    <span class="top__addr" style="display:inline-flex;align-items:center;gap:7px;opacity:.9">${ic("pin")}${e(S.contact.addressShort)}</span>
  </div>
  <div class="top__r">
    <div class="top__soc">${S.social.map(s=>`<a href="${s.href}" aria-label="${s.name}">${icf(s.key)}</a>`).join("")}</div>
    <a class="top__lang" href="#">ENGLISH</a>
  </div>
</div></div>`;

/* ---- HEADER ---- */
const subTree = items => `<ul class="sub">${items.map(i=>`<li><a href="${i.href}">${e(i.label)}${i.children&&i.children.length?ic("arrow"):""}</a>${i.children&&i.children.length?subTree(i.children):""}</li>`).join("")}</ul>`;
const flat = it => it.mega ? it.children.map(c=>({label:c.label,href:c.href,children:c.children||[]})) : it.children;
const hdr = `<header class="hdr" id="hdr"><div class="wrap hdr__in">
  <a class="logo" href="#top" aria-label="${S.brand.name}">
    <img class="ld" src="${S.brand.logoDark}" alt="${S.brand.name}"><img class="lw" src="${S.brand.logoWhite}" alt=""></a>
  <nav class="nav" aria-label="Ana menü"><ul>
    <li><a href="#top" class="on">Anasayfa</a></li>
    ${S.nav.map(it=>`<li><a href="${it.href}">${e(it.label)}${it.children?'<i class="caret"></i>':""}</a>${it.children?subTree(flat(it)):""}</li>`).join("")}
  </ul></nav>
  <div class="hdr__act">
    <a class="hdr__tel" href="tel:+902165933353">${ic("phone")}${S.contact.phone1}</a>
    <a class="btn btn--brand btn--sm" href="#iletisim">Teklif Alın</a>
    <button class="burger" aria-label="Menü" aria-expanded="false"><span></span><span></span><span></span></button>
  </div>
</div></header>`;

const drwTree = items=>`<ul>${items.map(i=>`<li>
  <div class="drw__row"><a href="${i.href}">${e(i.label)}</a>${i.children&&i.children.length?'<button class="drw__tg" aria-label="Aç">+</button>':""}</div>
  ${i.children&&i.children.length?`<div class="drw__sub">${drwTree(i.children)}</div>`:""}</li>`).join("")}</ul>`;
const drw = `<div class="drw" id="drw">
  <div class="drw__hd"><img src="${LOGO}" alt=""><button class="drw__x" aria-label="Kapat">&times;</button></div>
  <nav class="drw__nav">${drwTree([{label:"Anasayfa",href:"#top"}].concat(S.nav.map(i=>({label:i.label,href:i.href,children:i.mega?flat(i):i.children}))))}</nav>
  <div class="drw__ft">
    <a class="btn btn--brand" href="#iletisim">Teklif Alın ${ic("arrow")}</a>
    <a href="tel:+902165933353">${ic("phone")} ${S.contact.phone1}</a>
    <a href="mailto:${S.contact.email}">${ic("mail")} ${S.contact.email}</a>
  </div></div><div class="scrim" id="scrim" hidden></div>`;

/* ---- HERO ---- */
const slides = S.categories.map((c,i)=>`<article class="slide${i===0?" on":""}">
  <div class="slide__bg"><img src="${c.img}" alt=""></div>
  <div class="slide__in">
    <span class="slide__k">${n2(i)} — ÜRÜN AİLESİ</span>
    <h2>${e(c.en)}</h2><h3>${e(c.title)}</h3><p>${e(c.desc)}</p>
    <div class="slide__btns">
      <a class="btn btn--w" href="#urunler">Detaylı Bilgi ${ic("arrow")}</a>
      <a class="btn btn--ghostw" href="${S.contact.catalog}" target="_blank" rel="noopener">${ic("doc")} E-Katalog</a>
    </div></div></article>`).join("");

const featIcons=["users","factory","globe","award"];
const featData=[
  {t:"UZMAN VE TECRÜBELİ EKİP",d:"1989'dan beri alanında uzman kadromuzla üretim, AR-GE, ihracat ve uygulama süreçlerinin tamamında eksiksiz destek sağlıyoruz."},
  {t:"ÜRETİM",d:"Ana hammaddeler hariç kullanılan bütün malzemeleri kendi tesisimizde üretiyor, 150'nin üzerinde ürünü tek noktadan sunuyoruz."},
  {t:"İHRACAT",d:"55'in üzerinde ülkeye aktif olarak ihracat gerçekleştiriyor, küresel markalara özel üretimler yapıyoruz."},
  {t:"KALİTELİ ÜRÜN & HİZMET",d:"TÜRKAK, TSE ve UKAS akreditasyonu ile ISO 9001 ve ISO 14001 standartlarında üretim yapıyoruz."}
];
const hero = `<section class="hero" id="top">
  <div class="slider" id="sld">${slides}
    <div class="sld__nav">${S.categories.map((c,i)=>`<button class="sld__dot${i===0?" on":""}" data-g="${i}" aria-label="${e(c.short)}"></button>`).join("")}</div>
    <div class="sld__ar"><button data-d="-1" aria-label="Önceki">${ic("arrow")}</button><button data-d="1" aria-label="Sonraki">${ic("arrow")}</button></div>
  </div>
  <aside class="hpanel">
    <div class="feat">${featData.map((f,i)=>`<div class="feat__i"><span class="feat__ic">${ic(featIcons[i],1.6)}</span><h3>${e(f.t)}</h3><p>${e(f.d)}</p></div>`).join("")}</div>
    <div class="hpanel__cta">
      <a class="btn btn--brand" href="#sistemler">Sistemleri İnceleyin ${ic("arrow")}</a>
      <a class="btn btn--line" href="#iletisim">Teklif Alın</a>
    </div>
  </aside></section>`;

const tiles = `<section class="tiles" id="urunler"><div class="wrap">
  <div class="sechd sechd--onGray"><span class="sechd__t">Ürünler &amp; Sistemler</span>
    <span class="sechd__s">Yapıştırıcıdan bağlayıcıya, zemin kaplamasından su izolasyonuna; altı ana ürün ailesi ve üç sistem başlığı altında 150+ ürün.</span></div>
  <div class="tilegrid">${S.tiles.map(t=>`<a class="tile rev" href="${t.href}">
    <img src="${t.img}" alt=""><h3>${e(t.title)}</h3><span class="tile__go">${ic("arrow")}</span></a>`).join("")}</div>
</div></section>`;

const vids = `<section class="vids"><div class="wrap">
  <div class="sechd"><span class="sechd__t">Video</span><span class="sechd__s">Sistemlerimizin sahadaki uygulamalarını izleyin.</span></div>
  <div class="vidgrid">${S.videos.map(v=>`<figure class="vid rev"><img src="${v.img}" alt="${e(v.title)}" loading="lazy">
    <div class="vid__hd"><b>${e(v.title)}</b><span>${e(v.sub)}</span></div>
    <div class="vid__ov"><span class="vid__play">${icf("play")}</span></div></figure>`).join("")}</div>
</div></section>`;

const sys = `<section class="sys" id="sistemler"><div class="wrap">
  <div class="sechd sechd--onGray"><span class="sechd__t">Sistemler</span>
    <span class="sechd__s">Şartnameye, bütçeye ve alt yapıya göre kurgulanan sistemler. Ürünlerin tamamını üreten Polin Kimya, talep edildiğinde uygulama için iş ortakları vasıtasıyla referans hizmeti sunar.</span></div>
  <div class="systabs">${S.systems.map((s,i)=>`<button class="${i===0?"on":""}" data-t="${s.id}"><b>${n2(i)}</b>${e(s.title)}</button>`).join("")}</div>
  ${S.systems.map((s,i)=>`<div class="syspanel${i===0?" on":""}" data-p="${s.id}">
    <div><figure class="syspanel__fig"><img src="${s.img}" alt="${e(s.title)}" loading="lazy"></figure>
      <div class="syspanel__th">${s.gallery.map(g=>`<img src="${g}" alt="" loading="lazy">`).join("")}</div></div>
    <div><h3>${e(s.title)}</h3><p>${e(s.desc)}</p>
      <h4>Uygulama Alanları</h4><ul class="chips">${s.areas.map(a=>`<li>${e(a)}</li>`).join("")}</ul>
      <h4>Sistem Ürünleri</h4><ul class="dots">${s.products.map(p=>`<li>${e(p)}</li>`).join("")}</ul>
    </div></div>`).join("")}
</div></section>`;

const about = `<section class="about" id="kurumsal"><div class="wrap about__in">
  <figure class="about__fig rev"><img src="${S.about.image}" alt="Polin Kimya üretim tesisi" loading="lazy">
    <figcaption class="about__badge"><b>${S.brand.since}</b><span>yılından beri üretim</span></figcaption></figure>
  <div><p class="about__k">KURUMSAL</p><h2>${e(S.about.title)}</h2>
    <p>${e(S.about.lead)}</p>${S.about.paras.slice(1,4).map(p=>`<p>${e(p)}</p>`).join("")}
    <a class="btn btn--line" href="#kurumsal">Tarihçemizin tamamı ${ic("arrow")}</a></div>
</div></section>
<section class="stats"><div class="wrap"><dl class="stats__in">
  ${S.stats.map(s=>`<div><dt data-c="${s.value}">${s.value}${s.suffix}</dt><dd>${e(s.label)}</dd></div>`).join("")}
</dl></div></section>`;

const apps = `<section class="apps" id="uygulamalar"><div class="wrap">
  <div class="sechd sechd--onGray"><span class="sechd__t">Uygulamalar</span>
    <span class="sechd__s">Poliüretan spor zemininden dekoratif taşa, atletizm parkurundan endüstriyel epoksiye 14 uygulama başlığı.</span></div>
  <div class="appgrid">${S.applications.map((a,i)=>`<figure class="app rev"><img src="${a.img}" alt="${e(a.title)}" loading="lazy">
    <figcaption><b>${n2(i)}</b><span>${e(a.title)}</span></figcaption></figure>`).join("")}</div>
</div></section>`;

const brands = `<section class="brands" id="referanslar"><div class="wrap">
  <div class="sechd"><span class="sechd__t">Markalarımız</span></div>
  <div class="brandrow">
    <button class="brandnav" data-b="-1" aria-label="Geri">${ic("arrow")}</button>
    <div class="brandtrack" id="btrack"><ul>${S.brands.concat(S.brands).map(b=>`<li><img src="${b.img}" alt="${e(b.name)}" loading="lazy"></li>`).join("")}</ul></div>
    <button class="brandnav" data-b="1" aria-label="İleri">${ic("arrow")}</button>
  </div>
  <ul class="certs">${S.certs.map(c=>`<li>${ic("shield")}<span>${e(c)}</span></li>`).join("")}</ul>
</div></section>`;

const blog = `<section class="blog" id="blog"><div class="wrap">
  <div class="blog__hd"><div><span>BLOG &amp; GÜNCEL HABERLER</span><h2>Blog Yazıları</h2></div>
    <a class="btn btn--line btn--sm" href="#blog">Daha Fazlası ${ic("arrow")}</a></div>
  <div class="bloggrid">${S.blog.slice(0,4).map(b=>`<article class="post rev"><figure><img src="${b.img}" alt="" loading="lazy"></figure>
    <div class="post__b"><span class="tag">BLOG</span><h3>${e(b.title)}</h3><em>Yazıyı oku ${ic("arrow")}</em></div></article>`).join("")}</div>
</div></section>`;

const fField = f => f.type==="textarea"
  ? `<label class="f f--full"><span>${f.label}</span><textarea name="${f.name}" rows="5" placeholder="${f.label}"></textarea></label>`
  : f.type==="select"
  ? `<label class="f"><span>${f.label}</span><select name="${f.name}">${f.options.map(o=>`<option>${e(o)}</option>`).join("")}</select></label>`
  : `<label class="f"><span>${f.label}</span><input type="${f.type}" name="${f.name}" placeholder="${f.label}"></label>`;
const contact = `<section class="contact" id="iletisim"><div class="wrap contact__in">
  <div><p class="about__k">İLETİŞİM</p><h2 style="font-size:clamp(24px,3vw,34px);margin-bottom:6px">İletişim Bilgileri</h2>
    <ul class="cinfo">
      <li>${ic("pin")}<div><b>Adres</b><span>${e(S.contact.address)}</span></div></li>
      <li>${ic("phone")}<div><b>Telefon</b><span><a href="tel:+902165933353">${S.contact.phone1}</a> · <a href="tel:+902165933849">${S.contact.phone2}</a></span></div></li>
      <li>${icf("wa")}<div><b>WhatsApp</b><span><a href="${S.contact.whatsapp}" target="_blank" rel="noopener">${S.contact.mobile}</a></span></div></li>
      <li>${ic("mail")}<div><b>E-posta</b><span><a href="mailto:${S.contact.email}">${S.contact.email}</a></span></div></li>
      <li>${ic("globe")}<div><b>Dış Ticaret Departmanı</b><span><a href="mailto:${S.contact.exportEmail}">${S.contact.exportEmail}</a></span></div></li>
    </ul>
    <div class="map"><iframe title="Polin Kimya konum" loading="lazy" src="https://www.google.com/maps?q=Ayd%C4%B1nl%C4%B1%20Birlik%20OSB%20Bat%C4%B1%20Cad%20No%2026%20Tuzla%20%C4%B0stanbul&output=embed"></iframe></div>
  </div>
  <form class="form" onsubmit="return false"><h3>${e(S.form.title)}</h3><p>${e(S.form.text)}</p>
    <div class="fgrid">${S.form.fields.map(fField).join("")}
      <label class="f f--full f--check"><input type="checkbox"><span>Kişisel verilerimin işlenmesine ilişkin aydınlatma metnini okudum, onaylıyorum.</span></label></div>
    <button class="btn btn--brand" type="submit">${e(S.form.submit)} ${ic("arrow")}</button></form>
</div></section>`;

const fCols = Object.entries(S.footerLinks).slice(0,2).map(([k,v])=>
  `<div><h4>${e(k)}</h4><ul>${v.map(i=>`<li><a href="#urunler">${e(i)}</a></li>`).join("")}</ul></div>`).join("");
const socCls={in:"s-in",yt:"s-yt",ig:"s-ig",fb:"s-fb"};
const ftr = `<footer class="ftr"><div class="wrap">
  <div class="ftr__top">
    <div><h4>İletişim Bilgileri</h4>
      <ul class="fcontact">
        <li>${ic("pin")}<span>${e(S.contact.address)}</span></li>
        <li>${ic("phone")}<div><b>${S.contact.phone1}</b><small>Fabrika</small></div></li>
        <li>${ic("phone")}<div><b>${S.contact.phone2}</b><small>Fabrika 2</small></div></li>
        <li>${icf("wa")}<div><b>${S.contact.mobile}</b><small>Mobil / WhatsApp</small></div></li>
        <li>${ic("mail")}<div><b>${S.contact.email}</b><small>Genel</small></div></li>
        <li>${ic("globe")}<div><b>${S.contact.exportEmail}</b><small>Dış Ticaret Departmanı</small></div></li>
      </ul></div>
    ${fCols}
    <div class="ftr__brand">
      <img class="ftr__logo" src="${S.brand.logoWhite}" alt="${S.brand.name}">
      <p class="ftr__tag">${e(S.brand.tagline)}</p>
      <div class="ftr__soc">
        <a class="s-wa" href="${S.contact.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${icf("wa")}</a>
        ${S.social.map(s=>`<a class="${socCls[s.key]}" href="${s.href}" aria-label="${s.name}">${icf(s.key)}</a>`).join("")}
      </div>
      <a class="btn btn--sm ftr__cat" href="${S.contact.catalog}" target="_blank" rel="noopener">${ic("doc")} E-Katalog</a>
    </div>
  </div>
  <div class="ftr__bar">
    <span>${e(S.copyright)} — Tüm hakları saklıdır.</span>
    <div class="ftr__langs">${S.langs.map(l=>`<a href="${l.href}" class="${l.active?"on":""}">${l.code}</a>`).join("")}</div>
    <span>Çözüm Ortağı MBT</span>
  </div>
</div></footer>
<div class="fab">
  <a href="${S.contact.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${icf("wa")}</a>
  <button id="toTop" aria-label="Yukarı" hidden>${ic("arrow")}</button>
</div>`;

document.getElementById("app").innerHTML =
  top + hdr + drw + `<main id="main">` + hero + tiles + vids + sys + about + apps + brands + blog + contact + `</main>` + ftr;

/* ================= DAVRANIŞLAR ================= */
(function(){
  const box=$("#sld"); if(!box) return;
  const sl=$$(".slide",box), dots=$$(".sld__dot",box); let i=0,timer;
  const go=k=>{i=(k+sl.length)%sl.length;sl.forEach((s,x)=>s.classList.toggle("on",x===i));dots.forEach((d,x)=>d.classList.toggle("on",x===i));};
  const play=()=>{clearInterval(timer);timer=setInterval(()=>go(i+1),6500);};
  dots.forEach(d=>d.addEventListener("click",()=>{go(+d.dataset.g);play();}));
  $$(".sld__ar button",box).forEach(b=>b.addEventListener("click",()=>{go(i+ +b.dataset.d);play();}));
  box.addEventListener("mouseenter",()=>clearInterval(timer));
  box.addEventListener("mouseleave",play);
  let x0=null;
  box.addEventListener("touchstart",ev=>x0=ev.touches[0].clientX,{passive:true});
  box.addEventListener("touchend",ev=>{if(x0===null)return;const dx=ev.changedTouches[0].clientX-x0;if(Math.abs(dx)>50)go(i+(dx<0?1:-1));x0=null;play();},{passive:true});
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
    ul.style.transform=`translateX(${-off}px)`;
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
  const id=a.getAttribute("href"); if(id.length<2)return; const t=$(id); if(!t)return;
  ev.preventDefault(); scrollTo({top:t.getBoundingClientRect().top+scrollY-72,behavior:"smooth"});
}));
})();
