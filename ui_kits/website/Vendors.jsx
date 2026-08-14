/* Farmstand 1959 — become a vendor. The sign-up sheet is a database:
   every submission becomes a row in the Notion "Vendor Applications" table. */
function Vendors({ go }) {
  const { SiteHeader, SiteFooter, SectionHeading, Input, Choice, Button,
          Card, Rule, Badge, BrandTag } = window.DS;
  const wrap = { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--sp-7)' };
  const label = { fontFamily: 'var(--font-label)', fontSize: 'var(--fs-label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' };
  const heading = { fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-md)', fontWeight: 'var(--fw-display-bold)', letterSpacing: 'var(--track-caps)', textTransform: 'uppercase', color: 'var(--denim-500)' };

  const CATEGORIES = ['Pantry + Table', 'Farm + Garden', 'Home + Daily Life', 'Paper + Story', 'Ranch + Outdoors', 'Small Joys'];
  const MODELS = ['Wholesale', 'Consignment', 'Seasonal feature', 'Limited drop', 'Market + pop-up', 'Story + collaboration'];
  const ATTACHMENTS = [
    ['lineSheet', 'Current line sheet'], ['pricing', 'Wholesale pricing'],
    ['photos', 'Product photos'], ['samples', 'Samples available if requested'],
    ['compliance', 'Category compliance docs'], ['insurance', 'Insurance information']
  ];

  const [form, setForm] = React.useState({ categories: [], models: [] });
  const [sent, setSent] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [rows, setRows] = React.useState(() => window.VendorStore.list());
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e && e.target ? e.target.value : e }));
  const toggle = (k, v) => setForm((f) => {
    const cur = f[k] || [];
    return { ...f, [k]: cur.includes(v) ? cur.filter((x) => x !== v) : cur.concat(v) };
  });

  const send = () => {
    if (!form.brand || !form.email) { setError('Brand name and email are required.'); return; }
    setError(null);
    window.VendorStore.submit(form).then((row) => {
      setSent(row);
      setRows(window.VendorStore.list());
      window.scrollTo(0, 0);
    }).catch((e) => setError(e.message));
  };

  if (sent) {
    return (
      <div>
        <SiteHeader items={['Howdy y’all', 'The stand', 'Shelf', 'Growers', 'Events', { label: 'Yeehaw', accent: true }, 'Visit']} active="Yeehaw" status="Open today · 9 to 4" onNavigate={go} />
        <section style={{ ...wrap, paddingTop: 'var(--sp-9)', paddingBottom: 'var(--sp-9)', maxWidth: '720px' }}>
          <Card>
            <div style={{ textAlign: 'center', padding: 'var(--sp-6) var(--sp-5)' }}>
              <img src="../../assets/brand/stamp-round-alpha.png" alt="Farmstand 59" style={{ width: '110px', display: 'block', margin: '0 auto var(--sp-5)' }} />
              <div style={{ ...heading, fontSize: 'var(--fs-display-lg)' }}>Got it</div>
              <p style={{ margin: 'var(--sp-4) 0 0', fontSize: 'var(--fs-body-lg)', fontWeight: 300, lineHeight: 'var(--lh-body)', color: 'var(--text-body)' }}>
                {form.brand} is in the book as <strong>{sent.id}</strong>. We read every one. If it is a fit we will write, and if it is not yet we will tell you that too.
              </p>
              <Rule />
              <div style={{ ...label, color: 'var(--text-faint)', marginTop: 'var(--sp-4)' }}>
                {sent.synced ? 'Written to the vendor database' : 'Held in this browser — see the note below'}
              </div>
            </div>
          </Card>
          {!sent.synced ? (
            <div style={{ marginTop: 'var(--sp-5)', border: 'var(--border-hair) solid var(--border-hairline)', borderRadius: 'var(--radius-card)', padding: 'var(--sp-5)', background: 'var(--paper-000)' }}>
              <div style={{ ...label, color: 'var(--chili-500)' }}>Not yet live</div>
              <p style={{ margin: 'var(--sp-3) 0 0', fontSize: 'var(--fs-body-sm)', fontWeight: 300, lineHeight: 'var(--lh-body)', color: 'var(--text-muted)' }}>
                No submission endpoint is configured, so this row is held in this browser instead of the Notion database. The exact payload it would send:
              </p>
              <pre style={{ margin: 'var(--sp-4) 0 0', padding: 'var(--sp-4)', background: 'var(--paper-200)', borderRadius: 'var(--radius-control)', fontSize: '11px', lineHeight: 1.55, overflowX: 'auto', fontFamily: 'ui-monospace, monospace', color: 'var(--denim-700)' }}>{JSON.stringify(sent.payload, null, 2)}</pre>
            </div>
          ) : null}
          <div style={{ marginTop: 'var(--sp-5)', display: 'flex', gap: 'var(--sp-3)' }}>
            <Button variant="secondary" onClick={() => { setSent(null); setForm({ categories: [], models: [] }); }}>Submit another</Button>
            <Button variant="ghost" onClick={() => go('Home')}>Back to the stand</Button>
          </div>
        </section>
        <SiteFooter columns={[
          { title: 'Vendors', items: ['Apply any time', 'We answer on Mondays', 'vendors@farmstand1959.com'] },
          { title: 'Visit', items: ['CR 669, Blue Ridge TX', 'Sat 9–4', 'Sun 10–2'] }
        ]} />      </div>
    );
  }

  return (
    <div>
      <SiteHeader items={['Howdy y’all', 'The stand', 'Shelf', 'Growers', 'Events', { label: 'Yeehaw', accent: true }, 'Visit']} active="Yeehaw" status="Open today · 9 to 4" onNavigate={go} />

      <section style={{ ...wrap, paddingTop: 'var(--sp-8)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 'var(--sp-7)', alignItems: 'start' }}>
          <div>
            <SectionHeading eyebrow="Become a vendor" title="We want the things you tell a friend about" lede="Farmstand 1959 is a curated assortment, not a shelf-rental program. If you grow it, make it, bake it, bottle it or build it in Texas, put it in front of us." />
            <p style={{ margin: 'var(--sp-5) 0 0', fontSize: 'var(--fs-body)', fontWeight: 300, lineHeight: 'var(--lh-body)', color: 'var(--text-body)', maxWidth: '62ch' }}>
              The test is simple: would we buy it, use it, gift it, serve it, or proudly tell someone who made it? Fill this out and it lands in our book the moment you send it.
            </p>
          </div>
          <Card>
            <div style={{ ...label, color: 'var(--text-faint)', marginBottom: 'var(--sp-3)' }}>What we look for</div>
            {[['Local first', 'Texas-founded, grown, made, or meaningfully rooted here.'],
              ['Real story', 'Made by people with a point of view and a reason for doing it differently.'],
              ['Good on the shelf', 'Retail-ready goods that hold up in real life.']].map(([t, d], i, a) => (
              <div key={t} style={{ padding: '12px 0', borderBottom: i === a.length - 1 ? 'none' : 'var(--border-hair) solid var(--border-hairline)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-display)', color: 'var(--denim-500)' }}>{t}</div>
                <div style={{ marginTop: '4px', fontSize: 'var(--fs-body-sm)', fontWeight: 300, lineHeight: 'var(--lh-body)', color: 'var(--text-muted)' }}>{d}</div>
              </div>
            ))}
          </Card>
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: 'var(--sp-8)', maxWidth: '860px' }}>
        <div style={heading}>Who you are</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'var(--sp-4)', marginTop: 'var(--sp-4)' }}>
          <Input label="Brand / company name" value={form.brand || ''} onChange={set('brand')} style={{ gridColumn: '1 / -1' }} />
          <Input label="Primary contact" value={form.contact || ''} onChange={set('contact')} />
          <Input label="Title / role" value={form.role || ''} onChange={set('role')} />
          <Input label="Email" value={form.email || ''} onChange={set('email')} hint="We answer on Mondays." />
          <Input label="Phone" value={form.phone || ''} onChange={set('phone')} />
          <Input label="Website" value={form.website || ''} onChange={set('website')} />
          <Input label="Instagram / social" value={form.social || ''} onChange={set('social')} />
          <Input label="City, Texas" value={form.city || ''} onChange={set('city')} />
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'var(--sp-4)' }}>
            <Input label="Year founded" value={form.founded || ''} onChange={set('founded')} />
            <Input label="Team size" value={form.team || ''} onChange={set('team')} />
          </div>
          <Input label="Your Texas connection" value={form.texas || ''} onChange={set('texas')} style={{ gridColumn: '1 / -1' }} />
          <Input label="Tell us the story behind the brand" value={form.story || ''} onChange={set('story')} style={{ gridColumn: '1 / -1' }} />
          <Input label="Where are you currently sold?" value={form.soldAt || ''} onChange={set('soldAt')} style={{ gridColumn: '1 / -1' }} />
        </div>

        <div style={{ ...heading, marginTop: 'var(--sp-8)' }}>Where you fit</div>
        <div style={{ ...label, color: 'var(--text-faint)', marginTop: 'var(--sp-5)', marginBottom: 'var(--sp-3)' }}>Category</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'var(--sp-3)' }}>
          {CATEGORIES.map((c) => (
            <Choice key={c} label={c} checked={(form.categories || []).includes(c)} onChange={() => toggle('categories', c)} />
          ))}
        </div>
        <div style={{ ...label, color: 'var(--text-faint)', marginTop: 'var(--sp-6)', marginBottom: 'var(--sp-3)' }}>How you would like to work together</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'var(--sp-3)' }}>
          {MODELS.map((m) => (
            <Choice key={m} label={m} checked={(form.models || []).includes(m)} onChange={() => toggle('models', m)} />
          ))}
        </div>

        <div style={{ ...heading, marginTop: 'var(--sp-8)' }}>What you are submitting</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'var(--sp-4)', marginTop: 'var(--sp-4)' }}>
          <Input label="Products / SKUs" value={form.products || ''} onChange={set('products')} style={{ gridColumn: '1 / -1' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'var(--sp-4)' }}>
            <Input label="Wholesale price" value={form.wholesale || ''} onChange={set('wholesale')} />
            <Input label="MSRP" value={form.msrp || ''} onChange={set('msrp')} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'var(--sp-4)' }}>
            <Input label="Case pack" value={form.casePack || ''} onChange={set('casePack')} />
            <Input label="MOQ" value={form.moq || ''} onChange={set('moq')} />
          </div>
          <Input label="Lead time + production capacity" value={form.capacity || ''} onChange={set('capacity')} style={{ gridColumn: '1 / -1' }} />
          <Input label="Shelf life / storage / special handling" value={form.shelfLife || ''} onChange={set('shelfLife')} style={{ gridColumn: '1 / -1' }} />
          <Input label="Why is this a fit for Farmstand 1959?" value={form.fit || ''} onChange={set('fit')} style={{ gridColumn: '1 / -1' }} />
        </div>

        <div style={{ ...label, color: 'var(--text-faint)', marginTop: 'var(--sp-6)', marginBottom: 'var(--sp-3)' }}>What you have ready</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'var(--sp-3)' }}>
          {ATTACHMENTS.map(([k, t]) => (
            <Choice key={k} label={t} checked={!!form[k]} onChange={() => setForm((f) => ({ ...f, [k]: !f[k] }))} />
          ))}
        </div>

        <div style={{ marginTop: 'var(--sp-6)', padding: 'var(--sp-5)', border: '2px solid var(--chili-500)', borderRadius: 'var(--radius-card)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-body-lg)', fontWeight: 'var(--fw-display-bold)', letterSpacing: 'var(--track-caps)', textTransform: 'uppercase', color: 'var(--chili-500)' }}>If your product is still early, send it anyway</div>
          <p style={{ margin: 'var(--sp-3) 0 0', fontSize: 'var(--fs-body-sm)', fontWeight: 300, lineHeight: 'var(--lh-body)', color: 'var(--text-body)' }}>
            We care about small businesses and good ideas. Tell us where you are. A “not yet” can still become a future relationship.
          </p>
        </div>

        <div style={{ marginTop: 'var(--sp-6)', display: 'flex', gap: 'var(--sp-4)', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={send}>Send the application</Button>
          <span style={{ ...label, color: 'var(--text-faint)' }}>{window.VendorStore.live() ? 'Writes to the vendor database' : 'Held locally until the endpoint is wired'}</span>
          {error ? <span style={{ ...label, color: 'var(--chili-500)' }}>{error}</span> : null}
        </div>
        <div style={{ marginTop: 'var(--sp-6)', paddingTop: 'var(--sp-5)', borderTop: 'var(--border-hair) solid var(--border-hairline)', display: 'flex', gap: 'var(--sp-4)', alignItems: 'baseline', flexWrap: 'wrap' }}>
          <span style={{ ...label, color: 'var(--text-faint)' }}>Already sell here?</span>
          <a href="../portal/index.html" style={{ ...label }}>Sign in to your vendor portal</a>
        </div>
        <p style={{ margin: 'var(--sp-5) 0 0', fontSize: '11px', fontWeight: 300, lineHeight: 1.65, color: 'var(--text-faint)', maxWidth: '74ch' }}>
          Submitting is an invitation to be considered and is not a purchase order, vendor agreement, guarantee of placement, or promise of promotion. Final assortment, quantities, buying model, pricing, delivery, payment, returns, insurance, compliance requirements, and any marketing expectations are confirmed separately in writing before product is accepted.
        </p>
      </section>

      {rows.length ? (
        <section style={{ ...wrap, paddingTop: 'var(--sp-9)', maxWidth: '860px' }}>
          <Rule />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 'var(--sp-5)' }}>
            <div style={heading}>The book</div>
            <span style={{ ...label, color: 'var(--text-faint)' }}>{rows.length} application{rows.length === 1 ? '' : 's'}</span>
          </div>
          <div style={{ marginTop: 'var(--sp-4)', border: 'var(--border-hair) solid var(--border-hairline)', borderRadius: 'var(--radius-card)', overflow: 'hidden', background: 'var(--paper-000)' }}>
            {rows.slice().reverse().map((r, i) => (
              <div key={r.id} style={{ display: 'grid', gridTemplateColumns: '84px 1fr 150px 140px', gap: 'var(--sp-4)', alignItems: 'center', padding: '13px var(--sp-4)', borderTop: i === 0 ? 'none' : 'var(--border-hair) solid var(--border-hairline)' }}>
                <span style={{ ...label, color: 'var(--text-faint)' }}>{r.id}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-display)', color: 'var(--denim-500)' }}>{r.form.brand}</span>
                <span style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)' }}>{(r.form.categories || []).length ? r.form.categories[0] : '—'}</span>
                <Badge status={r.synced ? 'open' : 'closed'}>{r.synced ? 'In Notion' : 'Local only'}</Badge>
              </div>
            ))}
          </div>
          <p style={{ margin: 'var(--sp-4) 0 0', fontSize: '11px', fontWeight: 300, lineHeight: 1.65, color: 'var(--text-faint)' }}>
            Shown here so the flow is reviewable end to end. In production this list is the Notion database and does not appear on the public site.
          </p>
        </section>
      ) : null}

      <div style={{ ...wrap, paddingTop: 'var(--sp-8)', paddingBottom: 'var(--sp-8)', display: 'flex', gap: 'var(--sp-4)', justifyContent: 'center' }}>
        <BrandTag lines={['Made', 'in', 'Texas']} />
        <BrandTag tone="denim" lines={['Thank you', 'for supporting', 'REAL TEXANS']} />
        <BrandTag lines={['WITH', <React.Fragment key="l">love<br />from</React.Fragment>, 'Texas']} />
      </div>

      <SiteFooter columns={[
        { title: 'Vendors', items: ['Apply any time', 'We answer on Mondays', 'vendors@farmstand1959.com'] },
        { title: 'Visit', items: ['CR 669, Blue Ridge TX', 'Sat 9–4', 'Sun 10–2'] }
      ]} />
    </div>
  );
}
window.FSKit = Object.assign(window.FSKit || {}, { Vendors });
