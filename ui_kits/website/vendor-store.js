/* Farmstand 1959 — vendor application store.
 *
 * The website's sign-up sheet is a real database. This file is the single seam
 * between the form and where the rows land.
 *
 * PRODUCTION: set ENDPOINT to a serverless function (Vercel / Netlify / Cloudflare
 * Worker) that holds the Notion integration token as a server-side secret and
 * POSTs to https://api.notion.com/v1/pages with parent.data_source_id = DATA_SOURCE.
 * The token must never sit in this file — it is public.
 *
 * UNTIL THEN: submissions are held in this browser (localStorage) so the flow is
 * genuinely working and reviewable, and NOTION_FORM is the live path that writes
 * straight into the Notion database with no server at all.
 */
window.VendorStore = (function () {
  var ENDPOINT = null;
  var DATABASE = 'https://app.notion.com/p/55463b12643a4f3f876981362ad44042';
  var DATA_SOURCE = '79d5bb90-edd5-4d94-b235-cda24f82d57e';
  var NOTION_FORM = DATABASE;
  var KEY = 'fs1959.vendor.applications';

  /* Form field -> Notion property. These names must match the database exactly. */
  var PROPS = {
    brand: 'Brand / company name', contact: 'Primary contact', role: 'Title / role',
    email: 'Email', phone: 'Phone', website: 'Website', social: 'Instagram / social',
    city: 'City, Texas', founded: 'Year founded', team: 'Team size',
    categories: 'Category', texas: 'Texas connection', story: 'Brand story',
    soldAt: 'Currently sold at', products: 'Products submitted',
    wholesale: 'Wholesale price', msrp: 'MSRP', casePack: 'Case pack', moq: 'MOQ',
    capacity: 'Lead time + capacity', shelfLife: 'Shelf life / storage / handling',
    fit: 'Why a fit for Farmstand', models: 'Preferred model',
    lineSheet: 'Line sheet attached', pricing: 'Wholesale pricing attached',
    photos: 'Product photos attached', samples: 'Samples available',
    compliance: 'Compliance docs attached', insurance: 'Insurance on file'
  };

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
  }

  function toNotion(form) {
    var p = { Stage: 'New submission' };
    Object.keys(PROPS).forEach(function (k) {
      var v = form[k];
      if (v === undefined || v === null || v === '' || (Array.isArray(v) && !v.length)) return;
      if (typeof v === 'boolean') p[PROPS[k]] = v ? '__YES__' : '__NO__';
      else if (k === 'founded' || k === 'wholesale' || k === 'msrp') p[PROPS[k]] = Number(v);
      else p[PROPS[k]] = v;
    });
    return { parent: { data_source_id: DATA_SOURCE }, properties: p };
  }

  function submit(form) {
    var payload = toNotion(form);
    var row = {
      id: 'VEN-' + String(read().length + 1).padStart(3, '0'),
      submitted: new Date().toISOString(), stage: 'New submission',
      form: form, payload: payload, synced: false
    };
    if (!ENDPOINT) {
      var all = read(); all.push(row);
      try { localStorage.setItem(KEY, JSON.stringify(all)); } catch (e) {}
      return Promise.resolve(row);
    }
    return fetch(ENDPOINT, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (r) {
      if (!r.ok) throw new Error('Submission failed (' + r.status + ')');
      row.synced = true;
      var all = read(); all.push(row);
      try { localStorage.setItem(KEY, JSON.stringify(all)); } catch (e) {}
      return row;
    });
  }

  return {
    submit: submit, list: read, toNotion: toNotion,
    endpoint: ENDPOINT, database: DATABASE, dataSource: DATA_SOURCE, form: NOTION_FORM,
    live: function () { return !!ENDPOINT; }
  };
})();
