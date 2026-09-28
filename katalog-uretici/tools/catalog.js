// Leon Kimya kataloğu — sayfalama.
// #src içindeki akışları (flow) A4 sayfalara dizer; taşan blok yeni sayfaya geçer,
// tablolar satır satır bölünür. Bittiğinde window.__done = true ve window.__report.
(async function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const book = $('#book'), src = $('#src');
  const RUNLOGO = src.dataset.logo, SITE = src.dataset.site;
  const report = { overflow: [], pages: 0 };

  // görseller ve fontlar yüklenmeden ölçüm yapılmaz
  await document.fonts.ready;
  await Promise.all($$('img').map(i => i.complete ? Promise.resolve() : new Promise(r => { i.onload = i.onerror = r; })));

  function stdPage(flow, first, next) {
    const pg = document.createElement('div');
    pg.className = 'page std';
    const band = first && flow.dataset.band === '1';
    if (band) pg.classList.add('pg-band');
    pg.dataset.run = flow.dataset.run || '';
    pg.dataset.tab = flow.dataset.tab || '';
    pg.dataset.band = band ? '1' : '';
    const area = document.createElement('div');
    area.className = 'area' + (flow.dataset.cols === '2' ? ' mc' : '');
    pg.appendChild(area);
    book.appendChild(pg);
    if (!first && !(next && next.classList.contains('sech'))) {
      const ch = $('.conthead', flow);
      if (ch) { const c = ch.cloneNode(true); c.classList.remove('conthead'); c.classList.add('blk'); area.appendChild(c); }
    }
    return area;
  }
  const over = a => a.classList.contains('mc') ? a.scrollWidth > a.clientWidth + 1 : a.scrollHeight > a.clientHeight + 1;

  // tablo bölme: sığmayan satırları yeni tabloya taşı (başlık tekrarlanır)
  function splitTable(blk, area) {
    const tb = $('tbody', blk); if (!tb) return null;
    const rows = $$('tr', tb); if (rows.length < 2) return null;
    const rest = [];
    while (over(area) && tb.rows.length > 1) { rest.unshift(tb.rows[tb.rows.length - 1]); tb.removeChild(tb.rows[tb.rows.length - 1]); }
    if (over(area) || !rest.length) return null;
    const clone = blk.cloneNode(true);
    $$('.nosplit-dup', clone).forEach(n => n.remove());
    const ctb = $('tbody', clone); ctb.innerHTML = ''; rest.forEach(r => ctb.appendChild(r));
    clone.removeAttribute('id');
    return clone;
  }

  for (const flow of $$('.flow', src)) {
    if (flow.dataset.kind === 'full') {
      const pg = $('.page', flow);
      pg.dataset.tab = flow.dataset.tab || '';
      book.appendChild(pg);
      continue;
    }
    let area = stdPage(flow, true);
    const blocks = $$(':scope > .blk', flow);
    for (let i = 0; i < blocks.length; i++) {
      const b = blocks[i];
      if (b.classList.contains('pb')) { if (area.children.length) area = stdPage(flow, false, blocks[i + 1]); continue; }
      area.appendChild(b);
      if (!over(area)) continue;
      // tablo ise böl
      if (b.classList.contains('split')) {
        const rest = splitTable(b, area);
        if (rest) { area = stdPage(flow, false); area.appendChild(rest); blocks.splice(i + 1, 0); if (over(area)) { const r2 = splitTable(rest, area); if (r2) { area = stdPage(flow, false); area.appendChild(r2); } } continue; }
      }
      area.removeChild(b);
      // bir önceki blok "sonrakiyle birlikte" ise onu da taşı
      const moved = [];
      let prev = area.lastElementChild;
      while (prev && prev.classList.contains('kwn') && area.children.length > 1) { moved.unshift(prev); area.removeChild(prev); prev = area.lastElementChild; }
      // yeni sayfa bir bölüm başlığıyla başlıyorsa devam başlığı eklenmez
      area = stdPage(flow, false, moved[0] || b);
      moved.forEach(m => area.appendChild(m));
      area.appendChild(b);
      if (over(area)) report.overflow.push({ flow: flow.dataset.run, block: (b.id || b.className).slice(0, 60), page: $$('.page', book).length });
    }
  }

  // başlık, alt bilgi, bölüm sekmesi, sayfa numarası
  const pages = $$('.page', book);
  pages.forEach((pg, i) => {
    pg.id = 'p' + (i + 1);
    const n = i + 1;
    if (pg.classList.contains('std')) {
      const hd = document.createElement('div'); hd.className = 'hd';
      hd.innerHTML = `<img class="lg" src="${pg.dataset.band ? 'img/logo-white.png' : RUNLOGO}" alt="Leon Kimya"><span class="run">${pg.dataset.run}</span>`;
      pg.appendChild(hd);
      const ft = document.createElement('div'); ft.className = 'ft';
      ft.innerHTML = `<span>${SITE}</span><span class="pn">${String(n).padStart(2, '0')}</span>`;
      pg.appendChild(ft);
    }
    if (pg.dataset.tab) {
      const t = document.createElement('div'); t.className = 'tab';
      const k = parseInt(pg.dataset.tab, 10) || 1;
      t.style.top = (38 + (k - 1) * 24) + 'mm';
      t.innerHTML = `<span>${pg.dataset.tab}</span>`;
      pg.appendChild(t);
    }
    // kalan taşma kontrolü (tam sayfalar dahil)
    const a = $('.area', pg);
    if (a && over(a)) report.overflow.push({ page: n, run: pg.dataset.run, final: true });
  });

  // içindekiler / sayfa referansları
  const pageOf = id => { const el = document.getElementById(id); if (!el) return null; const pg = el.closest('.page'); return pg ? pages.indexOf(pg) + 1 : null; };
  $$('[data-ref]').forEach(s => { const p = pageOf(s.dataset.ref); s.textContent = p ? String(p).padStart(2, '0') : '—'; if (!p) report.overflow.push({ missingRef: s.dataset.ref }); });
  $$('a[data-href]').forEach(a => { a.setAttribute('href', '#' + a.dataset.href); });

  report.pages = pages.length;
  window.__report = report;
  window.__done = true;
})();
