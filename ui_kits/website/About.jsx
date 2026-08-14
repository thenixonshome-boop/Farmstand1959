/* Farmstand 1959 — about. The stand sits on TXM Ranch; this page says so
   plainly and puts the ecosystem it belongs to in one place. */
function About({ go }) {
  const { SiteHeader, SiteFooter, Button, Seal, SectionHeading, PhotoSlot,
          StatementBlock, Rule, BrandTag } = window.DS;
  const wrap = { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--sp-7)' };
  const paper = { backgroundColor: 'var(--paper-100)', backgroundImage: 'var(--texture-paper)', backgroundSize: 'var(--texture-paper-size)' };
  const canvas = { backgroundColor: 'var(--paper-200)', backgroundImage: 'var(--texture-canvas)', backgroundSize: 'var(--texture-canvas-size)' };
  const hand = { fontFamily: 'var(--font-hand)', fontSize: 'var(--fs-hand-md)', lineHeight: 1.3, color: 'var(--tin-700)' };
  const caps = { fontFamily: 'var(--font-label)', fontSize: 'var(--fs-label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' };
  const body = { fontSize: 'var(--fs-body-lg)', fontWeight: 300, lineHeight: 'var(--lh-body)', color: 'var(--text-body)' };

  const NAV = ['Howdy y’all', 'The stand', 'Shelf', 'Growers', 'Events', { label: 'Yeehaw', accent: true }, 'Visit'];

  return (
    <div>
      <SiteHeader items={NAV} active="Howdy y’all" status="Open today · 9 to 4" onNavigate={go} />

      {/* The land it stands on. */}
      <PhotoSlot ratio="16 / 6" strong note="TXM RANCH FROM THE GATE — wide, fence line and sky, the stand small in frame">
        <div style={{ position: 'absolute', inset: 0, background: 'var(--overlay-protect)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end' }}>
          <div style={{ ...wrap, width: '100%', paddingBottom: 'var(--sp-8)' }}>
            <div style={{ ...caps, color: 'var(--chili-300)' }}>Blue Ridge, Texas</div>
            <div style={{ fontFamily: 'var(--font-script)', fontSize: 'var(--fs-script-xl)', lineHeight: 1, color: 'var(--paper-100)', margin: '14px 0 4px' }}>Howdy y’all</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-sm)', fontWeight: 'var(--fw-display)', letterSpacing: 'var(--track-caps)', textTransform: 'uppercase', color: 'var(--paper-300)' }}>We are on TXM Ranch</div>
          </div>
        </div>
      </PhotoSlot>

      {/* Our story — the supplied copy, set as written. */}
      <section style={{ ...paper, paddingTop: 'var(--sp-9)', paddingBottom: 'var(--sp-9)' }}>
        <div style={wrap}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 300px', gap: 'var(--sp-8)', alignItems: 'start' }}>
            <div>
              <div style={{ ...caps, color: 'var(--chili-500)' }}>Our story</div>
              <p style={{ ...body, fontSize: 'var(--fs-display-sm)', fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-display)', color: 'var(--denim-500)', lineHeight: 'var(--lh-display)', letterSpacing: 'var(--track-display)', margin: 'var(--sp-4) 0 var(--sp-5)', maxWidth: '30ch' }}>
                A gathering place on a working ranch
              </p>
              <p style={{ ...body, margin: 0, maxWidth: 'var(--measure)' }}>
                Farmstand 1959 is a Texas Made Texas Modern gathering place rooted in ranch life, fresh food, and good company.
              </p>
              <p style={{ ...body, margin: 'var(--sp-5) 0 0', maxWidth: 'var(--measure)' }}>
                We bring together locally grown produce, homemade goods, Texas makers, music, and seasonal traditions—creating a place where people can slow down, connect, and enjoy the simple things.
              </p>
              <Rule />
              <p style={{ ...body, margin: 'var(--sp-5) 0 0', maxWidth: 'var(--measure)' }}>
                The stand is not a shop that happens to sit near a farm. It is on the ranch. The tomatoes on the table were grown a few hundred yards from where you pay for them, the hall behind it was built to be used, and the people who run both live here.
              </p>
              <span style={{ ...hand, display: 'block', marginTop: 'var(--sp-5)', color: 'var(--denim-500)', fontSize: 'var(--fs-hand-lg)' }}>Come as you are. Stay a while.</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)', alignItems: 'center' }}>
              <img src="../../assets/brand/lockup-endorsed-alpha.png" alt="Farmstand 1959, a Texas Made Texas Modern establishment from TXM Ranch" style={{ width: '100%', display: 'block' }} />
              <PhotoSlot ratio="4 / 5" note="THE FAMILY — on the porch of the stand, no posing, morning" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: '14px', backgroundImage: 'var(--pattern-ticking)' }} />

      {/* What the place is for. */}
      <section style={{ ...canvas, paddingTop: 'var(--sp-9)', paddingBottom: 'var(--sp-9)' }}>
        <div style={wrap}>
          <SectionHeading eyebrow="Used with intention" title="A farm stand, a dance hall, a place to hold things" lede="The same room does several jobs across a week. That is the point of building it this way." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 'var(--sp-6)', marginTop: 'var(--sp-7)' }}>
            {[['The stand', 'Produce, eggs, dairy, honey and pantry goods from this ranch and from growers within about twenty miles. Named on every card.', 'THE TABLES AT OPENING — crates full, nobody in shot yet'],
              ['The hall', 'Open mic nights while people shop, dances, suppers at one long table, and private bookings.', 'THE FLOOR MID-DANCE — from the corner, string lights in frame'],
              ['The yard', 'Markets, tastings, maker days, and partner events under the trees.', 'THE YARD ON A MARKET DAY — trucks, tents, people walking through']].map(([t, d, note]) => (
              <div key={t}>
                <PhotoSlot ratio="4 / 3" note={note} />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-sm)', fontWeight: 'var(--fw-display-bold)', letterSpacing: 'var(--track-caps)', textTransform: 'uppercase', color: 'var(--denim-500)', marginTop: 'var(--sp-4)' }}>{t}</div>
                <p style={{ fontSize: 'var(--fs-body)', fontWeight: 300, lineHeight: 'var(--lh-body)', color: 'var(--text-muted)', margin: 'var(--sp-3) 0 0' }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The ecosystem, on denim. */}
      <div style={{ background: 'var(--denim-700)', paddingTop: 'var(--sp-9)', paddingBottom: 'var(--sp-9)' }}>
        <div style={wrap}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--sp-8)', alignItems: 'start' }}>
            <div>
              <div style={{ ...caps, color: 'var(--chili-300)' }}>Who we belong to</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-lg)', fontWeight: 'var(--fw-display-bold)', letterSpacing: 'var(--track-display)', color: 'var(--paper-100)', margin: 'var(--sp-3) 0 var(--sp-5)', lineHeight: 'var(--lh-display)' }}>Part of Texas Made Texas Modern</div>
              <p style={{ fontSize: 'var(--fs-body-lg)', fontWeight: 300, lineHeight: 'var(--lh-body)', color: 'var(--paper-300)', margin: 0, maxWidth: '46ch' }}>
                Farmstand 1959 is one of several things the Texas Made Texas Modern people run. The stand hosts events for the others, and they send makers and music our way.
              </p>
              <span style={{ ...hand, color: 'var(--paper-300)', display: 'block', marginTop: 'var(--sp-5)' }}>Different names, same porch.</span>
            </div>
            <div>
              {[['TXM Ranch', 'The working ranch this all sits on. Where the tomatoes and eggs come from.'],
                ['Texas Made Texas Modern', 'The parent. Farmstand 1959 is a Texas Made Texas Modern establishment.'],
                ['The Gold Star Collective', 'Events and gatherings held here.'],
                ['Barn 314', 'Events and gatherings held here.']].map(([n, d], i, a) => (
                <div key={n} style={{ padding: 'var(--sp-4) 0', borderBottom: i === a.length - 1 ? 'none' : 'var(--border-hair) solid rgba(240,235,220,.18)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-body-lg)', fontWeight: 'var(--fw-display)', color: 'var(--paper-100)' }}>{n}</div>
                  <div style={{ fontSize: 'var(--fs-body-sm)', fontWeight: 300, lineHeight: 'var(--lh-body)', color: 'var(--paper-300)', marginTop: '5px' }}>{d}</div>
                </div>
              ))}
              <div style={{ marginTop: 'var(--sp-5)', display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
                <Button variant="primary" onClick={() => go('Events')}>What's on</Button>
                <Button variant="inverse" onClick={() => go('Vendors')}>Sell at the stand</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: '20px', backgroundImage: 'var(--pattern-checker)', backgroundSize: 'var(--pattern-checker-size)' }} />

      {/* Sign-off. */}
      <section style={{ ...paper, paddingTop: 'var(--sp-9)', paddingBottom: 'var(--sp-9)' }}>
        <div style={{ ...wrap, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Seal name="stamp-round" width={130} basePath="../../assets/" />
          <div style={{ marginTop: 'var(--sp-6)', width: '100%' }}>
            <StatementBlock lines={['A PLACE TO GATHER. GOOD FOOD.', 'GOOD PEOPLE. REAL TEXAS.', 'GROWN WITH PURPOSE.', 'MADE TO BE REMEMBERED.']} />
          </div>
          <div style={{ fontFamily: 'var(--font-script)', fontSize: 'var(--fs-script-lg)', color: 'var(--chili-500)', marginTop: 'var(--sp-6)', lineHeight: 1 }}>With love from Texas</div>
          <div style={{ display: 'flex', gap: 'var(--sp-4)', justifyContent: 'center', marginTop: 'var(--sp-7)', flexWrap: 'wrap' }}>
            <BrandTag lines={['Grown', 'on', 'TXM Ranch']} />
            <BrandTag tone="denim" lines={['Thank you', 'for supporting', 'REAL TEXANS']} />
          </div>
        </div>
      </section>

      <SiteFooter columns={[
        { title: 'Visit', items: ['CR 669, Blue Ridge TX', 'Sat 9–4', 'Free parking on the grass'] },
        { title: 'The stand', items: ['Shelf', 'Growers', 'Events'] },
        { title: 'The ecosystem', items: ['TXM Ranch', 'Texas Made Texas Modern', 'The Gold Star Collective', 'Barn 314'] },
        { title: 'Write to us', items: ['hello@farmstand1959.com', '(903) 555-0159'] }
      ]} />
    </div>
  );
}
window.FSKit = Object.assign(window.FSKit || {}, { About });
