/* رمز الدينار العراقي: سلوك الصفحة. CC0 */
(function () {
  "use strict";

  /* ================= هندسة الرمز ================= */
  var VIEWBOX = "37.25 34.25 110.75 91.5";
  var PATH = "M60.25 125.81L60.25 34.19L68.35 34.27L70.67 34.35L72.95 34.47L75.2 34.64L77.42 34.85L79.59 35.12L81.74 35.42L83.84 35.78L85.91 36.17L87.95 36.61L89.95 37.09L91.91 37.62L93.84 38.19L95.73 38.79L97.58 39.44L99.4 40.13L101.18 40.86L102.92 41.62L104.62 42.42L106.29 43.26L107.92 44.14L109.51 45.04L111.05 45.99L112.56 46.97L114.04 47.98L115.47 49.02L116.86 50.09L118.21 51.19L119.52 52.33L120.79 53.49L122.02 54.68L123.21 55.89L124.35 57.13L125.46 58.4L126.52 59.69L127.54 61L128.52 62.34L129.46 63.7L130.35 65.08L131.21 66.47L132.02 67.89L132.78 69.33L133.51 70.78L134.19 72.24L134.83 73.73L135.42 75.22L135.97 76.73L137.06 80L135.97 83.27L135.42 84.78L134.83 86.27L134.19 87.76L133.51 89.22L132.78 90.67L132.02 92.11L131.21 93.53L130.35 94.92L129.46 96.3L128.52 97.66L127.54 99L126.52 100.31L125.46 101.6L124.35 102.87L123.21 104.11L122.02 105.32L120.79 106.51L119.52 107.67L118.21 108.81L116.86 109.91L115.47 110.98L114.04 112.02L112.56 113.03L111.05 114.01L109.51 114.96L107.92 115.86L106.29 116.74L104.62 117.58L102.92 118.38L101.18 119.14L99.4 119.87L97.58 120.56L95.73 121.21L93.84 121.81L91.91 122.38L89.95 122.91L87.95 123.39L85.91 123.83L83.84 124.22L81.74 124.58L79.59 124.88L77.42 125.15L75.2 125.36L72.95 125.53L70.67 125.65L68.35 125.73ZM68.11 114.23L70.18 114.16L72.22 114.05L74.21 113.9L76.17 113.71L78.09 113.48L79.97 113.21L81.81 112.9L83.62 112.56L85.39 112.18L87.11 111.76L88.8 111.31L90.46 110.82L92.07 110.3L93.65 109.75L95.19 109.17L96.69 108.55L98.16 107.91L99.59 107.24L100.98 106.54L102.34 105.81L103.66 105.05L104.94 104.27L106.19 103.47L107.4 102.63L108.57 101.78L109.71 100.9L110.81 100L111.88 99.08L112.91 98.14L113.91 97.17L114.87 96.19L115.79 95.18L116.69 94.16L117.54 93.12L118.36 92.07L119.15 90.99L119.9 89.9L120.62 88.8L121.3 87.68L121.95 86.54L122.56 85.4L123.14 84.24L123.69 83.06L124.2 81.88L124.67 80.68L125.11 79.47L124.94 80L125.11 80.53L124.67 79.32L124.2 78.12L123.69 76.94L123.14 75.76L122.56 74.6L121.95 73.46L121.3 72.32L120.62 71.2L119.9 70.1L119.15 69.01L118.36 67.93L117.54 66.88L116.69 65.84L115.79 64.82L114.87 63.81L113.91 62.83L112.91 61.86L111.88 60.92L110.81 60L109.71 59.1L108.57 58.22L107.4 57.37L106.19 56.53L104.94 55.73L103.66 54.95L102.34 54.19L100.98 53.46L99.59 52.76L98.16 52.09L96.69 51.45L95.19 50.83L93.65 50.25L92.07 49.7L90.46 49.18L88.8 48.69L87.11 48.24L85.39 47.82L83.62 47.44L81.81 47.1L79.97 46.79L78.09 46.52L76.17 46.29L74.21 46.1L72.22 45.95L70.18 45.84L68.11 45.77L71.75 45.81L71.75 114.19ZM37.25 34.25L48.75 34.25L48.75 125.75L37.25 125.75ZM118.94 100.25L148 100.25L148 111.75L103.41 111.75Z";
  var FONT_TTF = "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";
  var FONT_WOFF = "d09GRgABAAAAAARkAAoAAAAABkwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABZAAAAC4AAABgRsM8vGNtYXAAAAGgAAAAMQAAADzR8RedZ2x5ZgAAAdwAAAETAAABvGLwSdloZWFkAAAA9AAAADYAAAA2MM40tGhoZWEAAAEsAAAAHgAAACQHRwL4aG10eAAAAZQAAAAMAAAADAa5AC1sb2NhAAAB1AAAAAgAAAAIAAAA3m1heHAAAAFMAAAAGAAAACAACADMbmFtZQAAAvAAAAFVAAAChdOVOx1wb3N0AAAESAAAABkAAAAwTLafmwABAAAAAQAA8Asugl8PPPUAAwPoAAAAAOb4DDwAAAAA5v7kyAAtAAADlALQAAAAAwACAAAAAAAAeJxjYGRgYG75zwYkDzLoMugyT2EAiqAAZgBVYgNHAAB4nGNgZGBgYGY4xcDCAAJMDGgAABTIANV4nGNgZnzHtIeBlYGFgTBgFEDi2AMBkFJ4ycDc8p+NAUgy/EJTr8DAAAAsNAb9AAAB9AAAAQQAAAPBAC14nGNgYGBiYGBgBmIRIMkIplkYNIA0G5BmBMoqvGT4/x/IB9P/H4ozgVUBAQCXCAhzAAAAAAAAAAAAAN54nD2PzU0DMRCF/T9rx7vZXQkhRUgIRYhLSJBcANSRXGgiFaQFKqATDhxySw0IcaeARLwZh7zDru15880b5dSjUvbNHNSr+lCfaq9UGcrtcrp8KM8Lul4t5mXQZZjfl6u7r5dxHAeo7/sp1HVdC+U8gVJKMcYmUkOBgg/e+abBB0c8NIRSjDCxN2fuQztTAGMm0ObCbbs2MzfDnqKAISIKkIecc1Zrix/f+BVF9vCQyF2Zp2SALlNuTr/rtdl9n97NQWttjLHWWe8qgCqAYybJKUk56yTPZkyr9ySbJl61RqIayXnALKBAb4QOvPAxIPxHPKesQUUpOicbis7F6pRlAy8rbIaDfvwx2+PTfvMHlnMhXgB4nHVOwU7CQBScQkP0AImJevGy8aSJZcEjFxPgwpmQeC3tBja2XWgLCfyLv+AvePRz/AVn2xVrjLvZ3XnzZuYtgB7e4MEuDxfVbVcLPqsat3GJK4d9XOPe4U6D7+IBTw738IgXujz/nMwtXh1u4QzvDrdxhw+HfXo/He40+C6evRuHe4i9YpaHWzHVWZiL+SFdmmRsktiSFVdTwTf3SygsO5kMxLA/EItM71VehIkIxGa3THQkYpOGOhOxinUUltpk67LcFCMpo1yx3qvIpKnJir7JV7L21BZ5VLmRTJWYIUeILQSm0MiIc+I5DkixhEGCcXXHJ+WPrqkK/uj+TxQn7YR7wHqIfvUuqNfYQ9FT0Gm1Ac8GO3oT9iJWMd0puzbdVorHdkKUfA3ZNVFJV4ERJHfEPOX6Nj2qEtJKW3C2YX9FXXNOc4rEsfqTIar/Kr8ApzZ6cQAAAHicY2BiwA+YQZiRib00L9PV0sAAAAtTAj0AAAA=";
  var S = 11.5, R = 72.8125, CA = 112.8125, CB = 47.1875;

  /* ================= أدوات ================= */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function esc(t) { return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function f2(n) { return String(Math.round(n * 100) / 100); }
  var reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ================= الحالة (تُحفظ في المتصفح وفي الرابط) ================= */
  var state = { color: "#12141C", bg: "paper", size: 180, safe: false, lang: "ar" };
  var png = { size: "512", bg: "none", pad: "0" };
  var mode = "char";
  (function loadState() {
    try { var s = JSON.parse(safeGet("iqd-state") || "{}"); Object.keys(state).forEach(function (k) { if (s[k] !== undefined) state[k] = s[k]; }); } catch (e) {}
    var h = (location.hash || "").replace(/^#/, "");
    if (h.indexOf("=") > -1) {
      var p = {}; h.split("&").forEach(function (kv) { var a = kv.split("="); p[a[0]] = decodeURIComponent(a[1] || ""); });
      if (/^[0-9a-f]{6}$/i.test(p.c || "")) state.color = "#" + p.c.toUpperCase();
      if (/^(paper|ink|gold|grid)$/.test(p.b || "")) state.bg = p.b;
      if (+p.s >= 40 && +p.s <= 320) state.size = +p.s;
      if (p.z === "1") state.safe = true;
      if (p.l === "en" || p.l === "ar") state.lang = p.l;
    }
  })();
  var saveT;
  function hashString() {
    return "#c=" + state.color.slice(1) + "&b=" + state.bg + "&s=" + state.size + (state.safe ? "&z=1" : "") + "&l=" + state.lang;
  }
  function save() {
    clearTimeout(saveT);
    saveT = setTimeout(function () {
      safeSet("iqd-state", JSON.stringify(state));
      try { history.replaceState(null, "", hashString()); } catch (e) {}
    }, 250);
  }

  /* ================= اللغات ================= */
  var AR = { text: {}, html: {}, aria: {}, ph: {} };
  $$("[data-i18n]").forEach(function (e) { AR.text[e.dataset.i18n] = e.textContent; });
  $$("[data-i18n-html]").forEach(function (e) { AR.html[e.dataset.i18nHtml] = e.innerHTML; });
  $$("[data-i18n-aria]").forEach(function (e) { AR.aria[e.dataset.i18nAria] = e.getAttribute("aria-label"); });
  $$("[data-i18n-ph]").forEach(function (e) { AR.ph[e.dataset.i18nPh] = e.getAttribute("placeholder"); });

  var STR_AR = {
    tCopied: "تم النسخ", tSvgCopied: "تم نسخ كود SVG", tCharCopied: "تم نسخ الرمز كنص", tLinkCopied: "تم نسخ الرابط",
    tFail: "تعذّر النسخ، انسخ يدوياً", tImgFail: "تعذّر إنشاء الصورة", tImgCopied: "تم نسخ الصورة",
    tImgUnsupported: "متصفحك لا يدعم نسخ الصور، حمّلها بدلاً من ذلك", tLow: "اللون قريب من الخلفية، قد لا يظهر الرمز",
    tNothing: "اكتب نصاً أولاً", tFontDl: "تم تنزيل الخط", dinar: "دينار عراقي", emptyPrev: "ستظهر النتيجة هنا",
    tSvg: "SVG مباشر", tFont: "كحرف في الخط", tImg: "كصورة", tMask: "قناع CSS", tReact: "مكوّن React", tFav: "أيقونة الموقع",
    dSvg: "يأخذ لون النص وحجمه تلقائياً (currentColor)، وهو الأفضل للأزرار والأسعار. الزر ينسخ الكود كاملاً.",
    dFont: "الرمز حرف على الشيفرة U+E900. حمّل الخط من قسم التحميل وضعه بجانب صفحتك، أو انسخ الكود.",
    dImg: "حمّل ملف SVG بلون يناسب خلفيتك ثم استخدمه كأي صورة. الصورة لا تتبع لون النص.",
    dMask: "يرسم الرمز بلون النص مع أنه صورة، ولا يحتاج ملفات خارجية. الزر ينسخ الكود كاملاً.",
    dReact: "مكوّن جاهز بحجم ولون قابلين للتغيير. الزر ينسخ الكود كاملاً.",
    dFav: "ضع هذا السطر داخل وسم head. لونه هو اللون الذي اخترته أعلاه. الزر ينسخ السطر كاملاً.",
    copy: "نسخ"
  };
  var EN = {
    skip: "Skip to content", brand: "Iraqi Dinar Symbol", navLabel: "Page sections", nShow: "Preview", nGet: "Download", nTools: "Tools", nUse: "Usage", nBuild: "Construction",
    langAria: "Change language", themeAria: "Toggle dark and light mode", eyebrow: "Free and open to everyone",
    lede: 'Two letters made of straight lines and a single arc: a vertical bar and an arc, with a horizontal tail leaving it. Flat ends and sharp corners, so <span class="iqd" aria-hidden="true">&#xE900;</span> sits comfortably next to any text or price.',
    markAria: "Iraqi dinar symbol", color: "Color", cBlack: "Black", cNavy: "Navy", cGold: "Gold", cWhite: "White", cOther: "Other color",
    bg: "Background", bgLight: "Light", bgDark: "Dark", bgGold: "Gold", bgGrid: "Grid", size: "Size", safe: "Show the safe zone around the symbol",
    getH: "Download the symbol", getSub: "In the color you picked above.", vecH: "Vector (SVG)", dlSvg: "Download SVG", cpSvg: "Copy SVG code", cpChar: "Copy as text",
    pngH: "Image (PNG)", oSize: "Size", sS: "Small", sM: "Medium", sL: "Large", oBg: "Image background", bTrans: "Transparent", bWhite: "White", bDark: "Dark",
    oPad: "Margin", pNone: "None", pSafe: "Safe zone", pWide: "Wide", dlPng: "Download PNG", cpPng: "Copy image",
    fontH: "The font (glyph U+E900)", fontNote: "Type the symbol like any character; it follows the text color and size. Install it in Word, Canva or on your phone, or add it to your site.",
    dlTtf: "Download TTF", dlWoff: "Download WOFF", cpLink: "Copy a link with these settings",
    tBlack: "Black, for light backgrounds", tWhite: "White, for dark backgrounds", tNavy: "Navy, the suggested color", tGold: "Gold, for offers and packaging", dl: "Download",
    toolsH: "Convert your text", toolsSub: "Paste any text and IQD or د.ع becomes the symbol.", convIn: "Original text", convPh: "Paste your text here...",
    rIqd: "Replace IQD", rDa: "Replace د.ع", rName: "Replace “دينار عراقي”", convPrev: "Preview", oMode: "Result format", mChar: "Font character", mHtml: "HTML tag", convCopy: "Copy result",
    curH: "Alongside other currencies", curSub: "Same baseline, same height.", cUsd: "Dollar", cEur: "Euro", cGbp: "Pound", cJpy: "Yen", cIqd: "Iraqi dinar",
    useH: "Use it on your site", useSub: "Six ways, pick what suits you.",
    buildH: "How the symbol is built", buildSub: "Only four pieces: two rectangles, an arc from two equal circles, and a horizontal tail. Toggle the layers to see each part.",
    buildAria: "Construction diagram of the symbol", play: "Play the drawing step by step", lParts: "The four pieces", lCircles: "The two dotted circles", lAxes: "Stroke axes", lGrid: "Stroke-width grid",
    gI: "Bar I", gStem: "Stem of D", gBowl: "Bowl of D from two circles", gTail: "Horizontal tail",
    r1: "Every stroke has the same thickness.", r2: "The gap between the bar and the stem equals one stroke.", r3: "The arc tip is where the two circles intersect, so it stays pointed.", r4: "The tail leaves the lower arc toward the right.",
    rulesH: "Usage rules", doH: "Do", doP: "Let it follow the text color, leave clear space of at least one stroke around it, and set it on the baseline beside the figure.",
    dontH: "Don't", dontP: "Don't stretch, flip or round it, and don't add shadows, outlines or gradients.", licH: "License", licP: "CC0, public domain. Any shop or organization may use and modify it commercially without permission or credit.",
    minH: "Smallest readable sizes", minP: "Go down until the gap between the bar and the stem starts to close, and no further.", foot: "The Iraqi dinar symbol, open to everyone.",
    tCopied: "Copied", tSvgCopied: "SVG code copied", tCharCopied: "Symbol copied as text", tLinkCopied: "Link copied", tFail: "Copy failed, copy manually", tImgFail: "Could not create the image",
    tImgCopied: "Image copied", tImgUnsupported: "Your browser can't copy images, download it instead", tLow: "The color is close to the background; the symbol may not show",
    tNothing: "Type some text first", tFontDl: "Font downloaded", dinar: "Iraqi dinar", emptyPrev: "The result appears here",
    tSvg: "Inline SVG", tFont: "As a font glyph", tImg: "As an image", tMask: "CSS mask", tReact: "React component", tFav: "Favicon",
    dSvg: "Takes the text color and size automatically (currentColor). Best for buttons and prices. The button copies the full code.",
    dFont: "The symbol is a glyph at U+E900. Download the font from the Download section and put it beside your page, or copy the code.",
    dImg: "Download an SVG in a color that suits your background, then use it like any image. An image does not follow the text color.",
    dMask: "Draws the symbol in the text color although it is an image, with no external files. The button copies the full code.",
    dReact: "A ready component with adjustable size and color. The button copies the full code.",
    dFav: "Put this line inside the head tag. Its color is the color you picked above. The button copies the full line.",
    copy: "Copy"
  };
  var lang = state.lang;
  function tr(k) {
    if (lang === "en") return EN[k] !== undefined ? EN[k] : (STR_AR[k] || AR.text[k] || k);
    return STR_AR[k] !== undefined ? STR_AR[k] : (AR.text[k] !== undefined ? AR.text[k] : (AR.html[k] !== undefined ? AR.html[k] : (AR.aria[k] || k)));
  }
  function applyLang(l) {
    lang = l; state.lang = l;
    var root = document.documentElement;
    root.lang = l; root.dir = l === "ar" ? "rtl" : "ltr";
    document.title = tr("brand");
    $$("[data-i18n]").forEach(function (e) { e.textContent = tr(e.dataset.i18n); });
    $$("[data-i18n-html]").forEach(function (e) { e.innerHTML = tr(e.dataset.i18nHtml); });
    $$("[data-i18n-aria]").forEach(function (e) { e.setAttribute("aria-label", tr(e.dataset.i18nAria)); });
    $$("[data-i18n-ph]").forEach(function (e) { e.setAttribute("placeholder", tr(e.dataset.i18nPh)); });
    $("#langBtn").textContent = l === "ar" ? "EN" : "عربي";
    $("#convPrev").setAttribute("data-empty", tr("emptyPrev"));
    renderTabs(); convert(); save();
  }

  /* ================= رسائل صغيرة ================= */
  var toastEl = $("#toast"), toastT;
  function toast(k) {
    toastEl.textContent = tr(k);
    toastEl.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(function () { toastEl.classList.remove("show"); }, 1900);
  }
  function copyText(text, okKey) {
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;opacity:0;top:0";
      document.body.appendChild(ta); ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
      toast(ok ? okKey : "tFail");
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { toast(okKey); }, fallback);
    } else { fallback(); }
  }
  function saveBlob(blob, name) {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1500);
  }
  function b64Blob(b64, type) {
    var bin = atob(b64), u = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
    return new Blob([u], { type: type });
  }

  /* ================= SVG جاهز ================= */
  function svgString(color, opts) {
    opts = opts || {};
    var pad = (opts.pad || 0) * S, w = 110.75 + 2 * pad, h = 91.5 + 2 * pad;
    var x = 37.25 - pad, y = 34.25 - pad, size = "";
    if (opts.height) { var k = opts.height / 91.5; size = ' width="' + Math.round(w * k) + '" height="' + Math.round(h * k) + '"'; }
    var bgRect = opts.bg ? '<rect x="' + f2(x) + '" y="' + f2(y) + '" width="' + f2(w) + '" height="' + f2(h) + '" fill="' + opts.bg + '"/>' : "";
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + f2(x) + " " + f2(y) + " " + f2(w) + " " + f2(h) + '"' + size + ">" +
      "<title>" + tr("dinar") + "</title>" + bgRect + '<path fill="' + color + '" d="' + PATH + '"/></svg>';
  }
  function dataUri(svg) {
    return "data:image/svg+xml," + encodeURIComponent(svg).replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29");
  }
  function lum(hex) {
    var c = [1, 3, 5].map(function (i) { var v = parseInt(hex.substr(i, 2), 16) / 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); });
    return .2126 * c[0] + .7152 * c[1] + .0722 * c[2];
  }
  function lowContrast(a, b) {
    var la = lum(a), lb = lum(b), hi = Math.max(la, lb), lo = Math.min(la, lb);
    return (hi + .05) / (lo + .05) < 1.6;
  }

  /* ================= الوضع الليلي ================= */
  var rootEl = document.documentElement, themeBtn = $("#themeBtn");
  var SUN = '<circle cx="12" cy="12" r="4.2" fill="currentColor"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/>';
  var MOON = '<path d="M20 14.5A8 8 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z" fill="currentColor"/>';
  function isDark() {
    var t = rootEl.getAttribute("data-theme");
    return t ? t === "dark" : window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function paintTheme() { $("#themeIco").innerHTML = isDark() ? SUN : MOON; }
  var savedTheme = safeGet("iqd-theme");
  if (savedTheme) rootEl.setAttribute("data-theme", savedTheme);
  paintTheme();
  themeBtn.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    rootEl.setAttribute("data-theme", next); safeSet("iqd-theme", next); paintTheme();
  });
  $("#langBtn").addEventListener("click", function () { applyLang(lang === "ar" ? "en" : "ar"); });

  /* ================= العرض ================= */
  var stage = $("#stage");
  function paintStage() {
    stage.style.setProperty("--mark", state.color);
    stage.style.setProperty("--s", state.size + "px");
    stage.dataset.bg = state.bg;
    stage.classList.toggle("safe", state.safe);
    $$("#colorSwatches .sw[data-color]").forEach(function (b) {
      b.setAttribute("aria-checked", String(b.dataset.color.toLowerCase() === state.color.toLowerCase()));
    });
    $("#colorPick").value = state.color.toLowerCase();
    $$("#bgSeg button").forEach(function (b) { b.setAttribute("aria-checked", String(b.dataset.bg === state.bg)); });
    $("#sizeRange").value = state.size;
    $("#safeChk").checked = state.safe;
    refreshCode();
  }
  function setColor(c) { state.color = c.toUpperCase(); paintStage(); save(); }
  $$("#colorSwatches .sw[data-color]").forEach(function (b) { b.addEventListener("click", function () { setColor(b.dataset.color); }); });
  $("#colorPick").addEventListener("input", function (e) { setColor(e.target.value); });
  $$("#bgSeg button").forEach(function (b) {
    b.addEventListener("click", function () {
      state.bg = b.dataset.bg;
      if (state.bg === "ink" && state.color === "#12141C") state.color = "#FFFFFF";
      else if (state.bg !== "ink" && state.color === "#FFFFFF") state.color = "#12141C";
      paintStage(); save();
    });
  });
  $("#sizeRange").addEventListener("input", function (e) { state.size = +e.target.value; paintStage(); save(); });
  $("#safeChk").addEventListener("change", function (e) { state.safe = e.target.checked; paintStage(); save(); });

  /* ================= مجموعات الخيارات (PNG والمحوّل) ================= */
  function segGroup(sel, getv, setv) {
    var el = $(sel);
    function paint() { $$("button", el).forEach(function (b) { b.setAttribute("aria-checked", String(b.dataset.v === getv())); }); }
    $$("button", el).forEach(function (b) { b.addEventListener("click", function () { setv(b.dataset.v); paint(); }); });
    paint();
  }
  segGroup("#pngSize", function () { return png.size; }, function (v) { png.size = v; });
  segGroup("#pngBg", function () { return png.bg; }, function (v) { png.bg = v; });
  segGroup("#pngPad", function () { return png.pad; }, function (v) { png.pad = v; });
  segGroup("#convMode", function () { return mode; }, function (v) { mode = v; convert(); });

  /* ================= التحميل والنسخ ================= */
  function pngBlob(cb) {
    var px = +png.size, pad = +png.pad, k = px / 91.5;
    var W = Math.round((110.75 + 2 * pad * S) * k), H = Math.round((91.5 + 2 * pad * S) * k);
    var bg = png.bg === "white" ? "#FFFFFF" : png.bg === "dark" ? "#12141C" : null;
    if (bg && lowContrast(state.color, bg)) toast("tLow");
    var img = new Image();
    img.onload = function () {
      var c = document.createElement("canvas"); c.width = W; c.height = H;
      c.getContext("2d").drawImage(img, 0, 0, W, H);
      c.toBlob(function (b) { b ? cb(b) : toast("tImgFail"); }, "image/png");
    };
    img.onerror = function () { toast("tImgFail"); };
    img.src = dataUri(svgString(state.color, { height: px, pad: pad, bg: bg }));
  }
  var ACTIONS = {
    "svg": function () { saveBlob(new Blob([svgString(state.color)], { type: "image/svg+xml" }), "iraqi-dinar-symbol.svg"); },
    "png": function () { pngBlob(function (b) { saveBlob(b, "iraqi-dinar-symbol-" + png.size + ".png"); }); },
    "copy-png": function () {
      if (!(navigator.clipboard && window.ClipboardItem && navigator.clipboard.write)) { toast("tImgUnsupported"); return; }
      pngBlob(function (b) {
        navigator.clipboard.write([new ClipboardItem({ "image/png": b })]).then(function () { toast("tImgCopied"); }, function () { toast("tImgUnsupported"); });
      });
    },
    "copy-svg": function () { copyText(svgString(state.color, { height: 20 }), "tSvgCopied"); },
    "copy-char": function () { copyText("", "tCharCopied"); },
    "copy-link": function () { copyText(location.href.split("#")[0] + hashString(), "tLinkCopied"); },
    "font-ttf": function () { saveBlob(b64Blob(FONT_TTF, "font/ttf"), "IQDSymbol.ttf"); toast("tFontDl"); },
    "font-woff": function () { saveBlob(b64Blob(FONT_WOFF, "font/woff"), "IQDSymbol.woff"); toast("tFontDl"); }
  };
  $$("[data-act]").forEach(function (b) { b.addEventListener("click", function () { ACTIONS[b.dataset.act](); }); });
  $$("[data-dl]").forEach(function (b) {
    b.addEventListener("click", function () {
      saveBlob(new Blob([svgString(b.dataset.dl)], { type: "image/svg+xml" }), "iraqi-dinar-symbol-" + b.dataset.name + ".svg");
    });
  });

  /* ================= صيغ الكود ================= */
  var SHORT = PATH.slice(0, 54) + "…";
  function aria() { return tr("dinar"); }
  var FORMATS = [
    { id: "svg", name: "tSvg", desc: "dSvg", make: function () {
      var head = '<svg viewBox="' + VIEWBOX + '" height="1em" fill="currentColor"\n     role="img" aria-label="' + aria() + '">\n  <path d="';
      return { show: head + SHORT + '"/>\n</svg>',
               copy: head + PATH + '"/>\n</svg>' };
    } },
    { id: "font", name: "tFont", desc: "dFont", make: function () {
      var t = '@font-face{\n  font-family:"IQD Symbol";\n  src:url("IQDSymbol.woff") format("woff");\n  unicode-range:U+E900; font-display:swap;\n}\n' +
        '.iqd{font-family:"IQD Symbol",sans-serif;font-style:normal;line-height:1}\n\n' +
        '<span class="iqd" aria-label="' + aria() + '">&#xE900;</span>';
      return { show: t, copy: t };
    } },
    { id: "img", name: "tImg", desc: "dImg", make: function () {
      var t = '<img src="iraqi-dinar-symbol.svg" alt="' + aria() + '" height="20">\n\n/* ' + (lang === "ar" ? "أو كخلفية" : "or as a background") + ' */\n' +
        '.price::after{content:"";display:inline-block;height:1em;width:1.2em;\n  background:url(iraqi-dinar-symbol.svg) center/contain no-repeat}';
      return { show: t, copy: t };
    } },
    { id: "mask", name: "tMask", desc: "dMask", make: function () {
      var uri = dataUri(svgString("#000"));
      var tpl = function (u) { return ".iqd-mask{display:inline-block;height:1em;width:1.21em;vertical-align:-.12em;\n  background:currentColor;\n  -webkit-mask:url(\"" + u + "\") center/contain no-repeat;\n          mask:url(\"" + u + "\") center/contain no-repeat}\n\n<span class=\"iqd-mask\" role=\"img\" aria-label=\"" + aria() + "\"></span>"; };
      return { show: tpl(uri.slice(0, 56) + "…"), copy: tpl(uri) };
    } },
    { id: "react", name: "tReact", desc: "dReact", make: function () {
      var tpl = function (p) { return 'export const IqdSymbol = ({ size = "1em", color = "currentColor", ...props }) => (\n  <svg viewBox="' + VIEWBOX + '" height={size} fill={color}\n       role="img" aria-label="' + aria() + '" {...props}>\n    <path d="' + p + '"/>\n  </svg>\n);'; };
      return { show: tpl(SHORT), copy: tpl(PATH) };
    } },
    { id: "fav", name: "tFav", desc: "dFav", make: function () {
      var uri = dataUri(svgString(state.color));
      return { show: '<link rel="icon" type="image/svg+xml"\n      href="' + uri.slice(0, 56) + '…">', copy: '<link rel="icon" type="image/svg+xml" href="' + uri + '">' };
    } }
  ];
  var curTab = "svg";
  function renderTabs() {
    var tabs = $("#tabs"), panels = $("#tabPanels");
    tabs.innerHTML = ""; panels.innerHTML = "";
    FORMATS.forEach(function (fm) {
      var b = document.createElement("button");
      b.type = "button"; b.id = "t-" + fm.id; b.setAttribute("role", "tab");
      b.setAttribute("aria-controls", "p-" + fm.id); b.setAttribute("aria-selected", String(fm.id === curTab));
      b.textContent = tr(fm.name);
      b.addEventListener("click", function () { selectTab(fm.id); });
      b.addEventListener("keydown", function (e) {
        var i = FORMATS.indexOf(fm), n = null, rtl = document.documentElement.dir === "rtl";
        if (e.key === "ArrowLeft") n = FORMATS[(i + (rtl ? 1 : -1) + FORMATS.length) % FORMATS.length];
        if (e.key === "ArrowRight") n = FORMATS[(i + (rtl ? -1 : 1) + FORMATS.length) % FORMATS.length];
        if (n) { selectTab(n.id); $("#t-" + n.id).focus(); e.preventDefault(); }
      });
      tabs.appendChild(b);
      var p = document.createElement("div");
      p.className = "panel"; p.id = "p-" + fm.id; p.setAttribute("role", "tabpanel");
      p.setAttribute("aria-labelledby", "t-" + fm.id); p.hidden = fm.id !== curTab;
      p.innerHTML = '<p></p><div class="code"><button type="button" class="cp"></button><pre></pre></div>';
      $("p", p).textContent = tr(fm.desc);
      $(".cp", p).textContent = tr("copy");
      $(".cp", p).addEventListener("click", function () { copyText(fm.make().copy, "tCopied"); });
      panels.appendChild(p);
    });
    refreshCode();
  }
  function selectTab(id) {
    curTab = id;
    FORMATS.forEach(function (fm) {
      $("#t-" + fm.id).setAttribute("aria-selected", String(fm.id === id));
      $("#p-" + fm.id).hidden = fm.id !== id;
    });
  }
  function refreshCode() {
    FORMATS.forEach(function (fm) { var p = $("#p-" + fm.id); if (p) $("pre", p).textContent = fm.make().show; });
  }

  /* ================= محوّل النص ================= */
  var SENT = "\u0001";
  function convert() {
    var src = $("#convIn").value, alts = [];
    if ($("#rIqd").checked) alts.push("IQD");
    if ($("#rDa").checked) alts.push("د\\s*\\.\\s*ع");
    if ($("#rName").checked) alts.push("دينار عراقي");
    var prev = $("#convPrev");
    if (!src || !alts.length) { prev.innerHTML = esc(src); return; }
    var rx = new RegExp("(^|[^\\u0600-\\u06FFA-Za-z])(" + alts.join("|") + ")(?![\\u0600-\\u06FFA-Za-z])", "gi");
    var marked = src.replace(rx, function (m, pre) { return pre + SENT; });
    prev.innerHTML = esc(marked).split(SENT).join('<span class="iqd">&#xE900;</span>');
    convert.result = mode === "char" ? marked.split(SENT).join("") : esc(marked).split(SENT).join('<span class="iqd">&#xE900;</span>');
  }
  convert.result = "";
  ["#convIn", "#rIqd", "#rDa", "#rName"].forEach(function (s) { $(s).addEventListener("input", convert); $(s).addEventListener("change", convert); });
  $("#convCopy").addEventListener("click", function () {
    convert();
    if (!$("#convIn").value) { toast("tNothing"); return; }
    copyText(convert.result || $("#convIn").value, "tCopied");
  });

  /* ================= مخطط البناء ================= */
  var layers = { parts: true, circles: true, axes: false, grid: false };
  function arcD() { return "M66 40A" + f2(R) + " " + f2(R) + " 0 0 1 131 80A" + f2(R) + " " + f2(R) + " 0 0 1 66 120"; }
  function build() {
    var out = [], ro = R + S / 2, ri = R - S / 2;
    if (layers.grid) {
      for (var gx = -20; gx <= 170; gx += S) out.push('<line class="gridline" x1="' + f2(gx) + '" y1="-40" x2="' + f2(gx) + '" y2="210"/>');
      for (var gy = -40; gy <= 210; gy += S) out.push('<line class="gridline" x1="-22" y1="' + f2(gy) + '" x2="170" y2="' + f2(gy) + '"/>');
    }
    var cls = layers.parts ? ["part anim p1", "part anim p2", "part anim arc p3", "part anim p4"] : ["plain", "plain", "plain arc", "plain"];
    out.push('<rect class="' + cls[0] + '" x="37.25" y="34.25" width="' + S + '" height="91.5"/>');
    out.push('<rect class="' + cls[1] + '" x="60.25" y="34.25" width="' + S + '" height="91.5"/>');
    out.push('<path class="' + cls[2] + '" stroke-width="' + S + '" stroke-linejoin="miter" stroke-miterlimit="10" fill="none" d="' + arcD() + '"/>');
    out.push('<rect class="' + cls[3] + '" x="108" y="100.25" width="40" height="' + S + '"/>');
    if (layers.circles) {
      [CA, CB].forEach(function (cy) {
        [ro, R, ri].forEach(function (r) { out.push('<circle class="circ" cx="66" cy="' + f2(cy) + '" r="' + f2(r) + '"/>'); });
        out.push('<path class="ctr" d="M60 ' + f2(cy) + "H72M66 " + f2(cy - 6) + "V" + f2(cy + 6) + '"/>');
      });
      out.push('<text x="82" y="' + f2(CA + 2.5) + '">A</text><text x="82" y="' + f2(CB + 2.5) + '">B</text>');
    }
    if (layers.axes) {
      out.push('<path class="axis" d="M43 40V120M66 40V120"/><path class="axis" d="' + arcD() + '"/><path class="axis" d="M108 106H148"/>');
    }
    $("#buildSvg").innerHTML = out.join("");
  }
  $$("#layers input").forEach(function (c) {
    c.addEventListener("change", function () { layers[c.dataset.layer] = c.checked; build(); });
  });
  var playing = false;
  $("#playBtn").addEventListener("click", function () {
    if (playing) return;
    layers.parts = true; $('#layers input[data-layer="parts"]').checked = true;
    build();
    if (reduceMotion) return;
    playing = true;
    var parts = $$("#buildSvg .part");
    var arc = $("#buildSvg .part.arc");
    parts.forEach(function (p) { p.classList.add("off"); });
    var len = arc.getTotalLength();
    arc.style.strokeDasharray = len; arc.style.strokeDashoffset = len;
    var steps = [[".p1", 250], [".p2", 900], [".p3", 1550], [".p4", 2900]];
    steps.forEach(function (s) {
      setTimeout(function () {
        var el = $("#buildSvg " + s[0]);
        el.classList.remove("off");
        if (s[0] === ".p3") {
          el.style.transition = "stroke-dashoffset 1.1s ease, opacity .2s";
          requestAnimationFrame(function () { el.style.strokeDashoffset = 0; });
        }
      }, s[1]);
    });
    setTimeout(function () { arc.style.strokeDasharray = ""; arc.style.strokeDashoffset = ""; arc.style.transition = ""; playing = false; }, 3500);
  });

  /* ================= تشغيل ================= */
  renderTabs();
  paintStage();
  build();
  convert();
  if (state.lang !== "ar") applyLang(state.lang); else { $("#convPrev").setAttribute("data-empty", tr("emptyPrev")); }
})();
