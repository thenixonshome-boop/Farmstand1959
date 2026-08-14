/* Farmstand 1959 — events. The posters are photographs of real hand-painted
   boards; until those are made and shot, they are slots at the right size. */
function Events({ go }) {
  const { SiteHeader, SiteFooter, SectionHeading, EventCard, Marquee, PhotoSlot, Button } = window.DS;
  const wrap = { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--sp-7)' };
  const paper = { backgroundColor: 'var(--paper-100)', backgroundImage: 'var(--texture-paper)', backgroundSize: 'var(--texture-paper-size)' };
  const hand = { fontFamily: 'var(--font-hand)', fontSize: 'var(--fs-hand-md)', lineHeight: 1.3, color: 'var(--tin-700)' };
  const caps = { fontFamily: 'var(--font-label)', fontSize: 'var(--fs-label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' };

  const POSTERS = [
    { title: 'Market day', date: 'Saturday Sep 20', time: '10am–4pm', note: 'PAINTED POSTER — Market day. Photograph the board flat, daylight, slight shadow at the edge' },
    { title: 'Dance under the stars', date: 'Saturday Sep 20', time: '6–10pm', note: 'PAINTED POSTER — Dance under the stars. Same board size, photographed the same way' },
    { title: 'Fall harvest supper', date: 'Friday Sep 26', time: '6pm', note: 'PAINTED POSTER — Fall harvest supper. Same board size, photographed the same way' }
  ];

  return (
    <div>
      <SiteHeader items={['Howdy y’all', 'The stand', 'Shelf', 'Growers', 'Events', { label: 'Yeehaw', accent: true }, 'Visit']} active="Events" status="Open today · 9 to 4" onNavigate={go} />

      {/* Full-bleed photograph of the floor. */}
      <PhotoSlot ratio="21 / 8" strong note="THE DANCE FLOOR — full, evening, from head height at the back of the hall">
        <div style={{ position: 'absolute', inset: 0, background: 'var(--overlay-protect)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end' }}>
          <div style={{ ...wrap, width: '100%', paddingBottom: 'var(--sp-8)' }}>
            <div style={{ ...caps, color: 'var(--chili-300)' }}>September</div>
            <div style={{ fontFamily: 'var(--font-script)', fontSize: 'var(--fs-script-xl)', lineHeight: 1, color: 'var(--paper-100)', margin: '14px 0 4px' }}>Gather. Eat. Dance.</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-sm)', fontWeight: 'var(--fw-display)', letterSpacing: 'var(--track-caps)', textTransform: 'uppercase', color: 'var(--paper-300)' }}>Three nights on the place this month</div>
          </div>
        </div>
      </PhotoSlot>

      <div style={{ height: '14px', backgroundImage: 'var(--pattern-ticking)' }} />

      {/* The three posters. Photographs of painted boards, not cards. */}
      <section style={{ ...paper, paddingTop: 'var(--sp-9)', paddingBottom: 'var(--sp-9)' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--sp-5)', flexWrap: 'wrap' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-lg)', fontWeight: 'var(--fw-display-bold)', letterSpacing: 'var(--track-display)', color: 'var(--denim-500)' }}>On the boards</div>
            <span style={hand}>Painted by hand. One board per night.</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 'var(--sp-6)', marginTop: 'var(--sp-6)' }}>
            {POSTERS.map((p) => (
              <div key={p.title}>
                <PhotoSlot ratio="2 / 3" note={p.note} style={{ boxShadow: 'var(--shadow-lift)' }} />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-md)', fontWeight: 'var(--fw-display-bold)', letterSpacing: 'var(--track-display)', color: 'var(--denim-500)', marginTop: 'var(--sp-4)', lineHeight: 'var(--lh-display)' }}>{p.title}</div>
                <div style={{ ...caps, color: 'var(--chili-500)', marginTop: '7px' }}>{p.date} · {p.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark field for the rest of the season. */}
      <div style={{ background: 'var(--denim-700)', paddingTop: 'var(--sp-9)', paddingBottom: 'var(--sp-9)' }}>
        <div style={wrap}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 340px', gap: 'var(--sp-7)', alignItems: 'start' }}>
            <div>
              <div style={{ ...caps, color: 'var(--chili-300)' }}>The rest of the season</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-lg)', fontWeight: 'var(--fw-display-bold)', letterSpacing: 'var(--track-display)', color: 'var(--paper-100)', margin: 'var(--sp-3) 0 var(--sp-5)' }}>October and November</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
                <EventCard month="OCT" day="04" name="Pecan day" time="9am–2pm" blurb="First of the Kelly Creek harvest, cracked on the spot." />
                <EventCard month="OCT" day="18" name="Chili cook-off" time="12–5pm" blurb="Twelve pots, one long table, no trophies." status="news" statusLabel="Entries open" />
                <EventCard month="NOV" day="01" name="Bluebonnet seed sale" time="9am–1pm" blurb="Packets from this year's saved seed." status="delay" statusLabel="Weather dependent" />
                <EventCard month="NOV" day="27" name="Thanksgiving pickup" time="8–11am" blurb="Pre-ordered birds and pies only." status="soldout" statusLabel="Full" />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
              <Marquee heading="Tonight" lines={['Dance under the stars', 'Gates at six', 'Bring a chair']} />
              <PhotoSlot ratio="1 / 1" note="THE BAND — mid-song, from the side of the stage" />
              <span style={{ ...hand, color: 'var(--paper-300)' }}>Gates at six. Music by seven.</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: '20px', backgroundImage: 'var(--pattern-checker)', backgroundSize: 'var(--pattern-checker-size)' }} />

      {/* Host something. Canvas ground. */}
      <section style={{ backgroundColor: 'var(--paper-200)', backgroundImage: 'var(--texture-canvas)', backgroundSize: 'var(--texture-canvas-size)', paddingTop: 'var(--sp-9)', paddingBottom: 'var(--sp-9)' }}>
        <div style={wrap}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--sp-7)', alignItems: 'center' }}>
            <PhotoSlot ratio="4 / 3" note="ONE LONG TABLE — set for a supper, before anyone sits down" />
            <div>
              <SectionHeading eyebrow="Your night" title="Host something here" lede="Suppers, dances, launches, weddings. The hall holds a hundred and twenty at one long table." />
              <div style={{ marginTop: 'var(--sp-6)', display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
                <Button variant="primary" onClick={() => go('Visit')}>Event inquiries</Button>
                <Button variant="ghost" onClick={() => go('Vendors')}>Sell here instead</Button>
              </div>
              <span style={{ ...hand, display: 'block', marginTop: 'var(--sp-5)' }}>We answer on Mondays.</span>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter columns={[
        { title: 'Visit', items: ['CR 669, Blue Ridge TX', 'Sat 9–4', 'Free parking on the grass'] },
        { title: 'Events', items: ['September', 'October', 'Host something here'] }
      ]} />
    </div>
  );
}
window.FSKit = Object.assign(window.FSKit || {}, { Events });
