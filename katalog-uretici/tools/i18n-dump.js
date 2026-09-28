// Sitenin i18n.js dosyasını JSON'a döker (window. atamaları için sahte global)
const fs = require('fs'), vm = require('vm');
const src = fs.readFileSync(process.argv[2], 'utf8');
const ctx = { window: {} }; ctx.window.window = ctx.window; vm.createContext(ctx);
vm.runInContext(src + '\n;this.__S = (typeof STRINGS!=="undefined")?STRINGS:window.STRINGS; this.__B=(typeof SITE_BASE!=="undefined")?SITE_BASE:window.SITE_BASE;', ctx);
fs.writeFileSync(process.argv[3], JSON.stringify({ STRINGS: ctx.__S, SITE_BASE: ctx.__B }, null, 1));
