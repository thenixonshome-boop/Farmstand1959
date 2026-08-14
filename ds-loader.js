/* Farmstand 1959 — preview loader.
   Prefers the generated _ds_bundle.js. If it is not there yet (local preview),
   compiles the component sources in the browser instead, so every card and UI
   kit still renders. Exposes window.DS and window.DSReady (a promise). */
(function () {
  var ROOT = new URL('.', document.currentScript.src).href;
  var GROUPS = {
    core: ['Button', 'Badge', 'Card', 'Rule', 'Seal'],
    forms: ['Input', 'Select', 'Choice', 'QuantityStepper'],
    navigation: ['SiteHeader', 'SiteFooter', 'TabBar'],
    patterns: ['SectionHeading', 'ProduceRow', 'GrowerCard', 'EventCard', 'StatBlock'],
    brand: ['Marquee', 'SeedPacket', 'BrandTag', 'EventPoster', 'StatementBlock']
  };
  if (window.Babel && Babel.registerPreset && !Babel.availablePresets['react-classic']) {
    Babel.registerPreset('react-classic', { presets: [[Babel.availablePresets.react, { runtime: 'classic' }]] });
  }
  window.DS = window.DS || {};
  function fromBundle() {
    for (var i = 0, ks = Object.keys(window); i < ks.length; i++) {
      try { var v = window[ks[i]]; if (v && typeof v === 'object' && v.Seal && v.Button) return v; } catch (e) {}
    }
    return null;
  }
  function loadBundle() {
    return new Promise(function (res) {
      var s = document.createElement('script');
      s.src = ROOT + '_ds_bundle.js';
      s.onload = function () { res(true); };
      s.onerror = function () { res(false); };
      document.head.appendChild(s);
    });
  }
  window.DSReady = (async function () {
    if (!fromBundle()) await loadBundle();
    var ns = fromBundle();
    if (ns) { Object.assign(window.DS, ns); return window.DS; }
    for (var g of Object.keys(GROUPS)) {
      for (var n of GROUPS[g]) {
        try {
          var src = await (await fetch(ROOT + 'components/' + g + '/' + n + '.jsx')).text();
          var deps = [];
          var body = src
            .replace(/^import\s*\{([^}]*)\}\s*from\s*['"][^'"]*['"];?\s*$/gm, function (m, list) {
              list.split(',').forEach(function (s) { var t = s.trim(); if (t) deps.push(t); });
              return '';
            })
            .replace(/^import[^\n]*$/gm, '')
            .replace(/export\s+function/g, 'function');
          var pre = deps.length ? 'const {' + deps.join(',') + '} = DS;\n' : '';
          var code = Babel.transform(pre + body, { presets: [['react', { runtime: 'classic' }]] }).code;
          window.DS[n] = new Function('React', 'DS', code + '\nreturn ' + n + ';')(window.React, window.DS);
        } catch (e) { console.warn('[ds-loader] could not compile ' + n, e); }
      }
    }
    return window.DS;
  })();

  /* Compiles every <script type="text/x-jsx"> on the page, in document order,
     once the components are ready. Inline or src, both work. */
  window.DSReady.then(async function () {
    var tags = Array.prototype.slice.call(document.querySelectorAll('script[type="text/x-jsx"]'));
    for (var i = 0; i < tags.length; i++) {
      var t = tags[i];
      try {
        var raw = t.src ? await (await fetch(t.src)).text() : t.textContent;
        var out = Babel.transform(raw, { presets: [['react', { runtime: 'classic' }]] }).code;
        (0, eval)(out);
      } catch (e) { console.error('[ds-loader] ' + (t.src || 'inline script'), e); }
    }
  });
})();
