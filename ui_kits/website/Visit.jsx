/* Farmstand 1959 — visit and event inquiry. The system's only long form. */
function Visit({ go }) {
  const { SiteHeader, SiteFooter, SectionHeading, Input, Select, Choice, Button,
          Card, BrandTag, Rule, Badge } = window.DS;
  const wrap = { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--sp-7)' };
  const [sent, setSent] = React.useState(false);
  const [booth, setBooth] = React.useState(false);
  const [list, setList] = React.useState(true);

  return (
    <div>
      <SiteHeader items={['Howdy y’all', 'The stand', 'Shelf', 'Growers', 'Events', { label: 'Yeehaw', accent: true }, 'Visit']} active="Visit" status="Open today · 9 to 4" onNavigate={go} />

      <section style={{ ...wrap, paddingTop: 'var(--sp-8)', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 'var(--sp-7)', alignItems: 'start' }}>
        <div>
          <SectionHeading eyebrow="Visit" title="Come out to the place" lede="CR 669, Blue Ridge, Texas. Saturdays 9 to 4, or until the shelf is empty. Free parking on the grass." />

          <div style={{ marginTop: 'var(--sp-6)', height: '260px', border: 'var(--border-hair) solid var(--border-hairline)', borderRadius: 'var(--radius-card)', background: 'repeating-linear-gradient(135deg, var(--paper-200) 0 10px, var(--paper-100) 10px 20px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--fs-label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-faint)' }}>Map — CR 669, Blue Ridge TX</span>
          </div>

          <div style={{ marginTop: 'var(--sp-7)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-md)', fontWeight: 'var(--fw-display-bold)', letterSpacing: 'var(--track-caps)', textTransform: 'uppercase', color: 'var(--denim-500)', marginBottom: 'var(--sp-4)' }}>Tell us what you have in mind</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
              <Input label="Your name" placeholder="Taylor Nixon" />
              <Input label="Email" hint="We answer on Mondays." />
              <Input label="Farm, ranch or company" hint="As you'd like it printed on the card" style={{ gridColumn: '1 / -1' }} />
              <Select label="What did you have in mind" options={['A supper', 'A market booth', 'Placing product at the stand', 'Something else']} style={{ gridColumn: '1 / -1' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)', margin: 'var(--sp-5) 0' }}>
              <Choice label="Market day booth" description="Saturdays, 9 to 4. Your name larger than ours." checked={booth} onChange={() => setBooth(!booth)} />
              <Choice label="Send me the week's shelf list" description="One email, Thursday evening. Nothing else." checked={list} onChange={() => setList(!list)} />
            </div>
            <div style={{ display: 'flex', gap: 'var(--sp-3)', alignItems: 'center' }}>
              <Button variant="primary" onClick={() => setSent(true)}>Send it</Button>
              {sent ? <span style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--sage-700)' }}>Sent — we answer on Mondays</span> : null}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
          <Card>
            <div style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--fs-label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 'var(--sp-3)' }}>Hours</div>
            {[['Saturday', '9 to 4'], ['Sunday', '10 to 2'], ['Monday–Friday', 'Closed'], ['Sep 20', 'Open late for the dance']].map(([d, h], i, a) => (
              <div key={d} style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--sp-4)', padding: '10px 0', borderBottom: i === a.length - 1 ? 'none' : 'var(--border-hair) solid var(--border-hairline)' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-display)', color: 'var(--denim-500)' }}>{d}</span>
                <span style={{ fontSize: 'var(--fs-body)', color: h === 'Closed' ? 'var(--tin-700)' : 'var(--text-body)' }}>{h}</span>
              </div>
            ))}
            <Rule />
            <div style={{ marginTop: 'var(--sp-4)' }}><Badge status="open">Open today · 9 to sold out</Badge></div>
          </Card>

          <div style={{ display: 'flex', gap: 'var(--sp-4)', justifyContent: 'center', padding: 'var(--sp-5) 0' }}>
            <BrandTag lines={['Grown', 'in', 'Texas']} />
            <BrandTag tone="denim" lines={['Thank you', 'for supporting', 'real Texas']} />
          </div>
        </div>
      </section>

      <div style={{ marginTop: 'var(--sp-9)' }}>
        <SiteFooter columns={[
          { title: 'Visit', items: ['CR 669, Blue Ridge TX', 'Sat 9–4', 'Sun 10–2', 'Free parking on the grass'] },
          { title: 'Write to us', items: ['hello@farmstand1959.com', '(903) 555-0159'] }
        ]} />
      </div>
    </div>
  );
}
window.FSKit = Object.assign(window.FSKit || {}, { Visit });
