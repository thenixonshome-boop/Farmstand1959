/* Farmstand 1959 — home. Field-notes mode: full-bleed photography, paper and
   canvas grounds, alternating light and dark fields, the hand in the margins. */
function Home({ go }) {
  const { SiteHeader, SiteFooter, Badge, Button, Seal, SectionHeading, PhotoSlot,
          ProduceRow, EventCard, StatementBlock } = window.DS;
  const wrap = { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--sp-7)' };
  const paper = { backgroundColor: 'var(--paper-100)', backgroundImage: 'var(--texture-paper)', backgroundSize: 'var(--texture-paper-size)' };
  const hand = { fontFamily: 'var(--font-hand)', fontSize: 'var(--fs-hand-md)', lineHeight: 1.3, color: 'var(--tin-700)' };
  const caps = { fontFamily: 'var(--font-label)', fontSize: 'var(--fs-label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' };

  return (
    <div>
      <SiteHeader items={['Howdy y’all', 'The stand', 'Shelf', 'Growers', 'Events', { label: 'Yeehaw', accent: true }, 'Visit']} active="The stand" status="Open today · 9 to 4" onNavigate={go} />

      {/* Full-bleed photograph, type over it. The seal sits large and faint behind. */}
      <PhotoSlot ratio="16 / 7" strong position="50% 44%"
                 src="../../assets/photo/stand-tin-wall.png"
                 alt="The tin wall of the stand against a blue Texas sky, prickly pear along the base">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(13,23,39,.92) 0%,rgba(13,23,39,.60) 42%,rgba(13,23,39,.14) 100%)' }} />
        <img src="../../assets/brand/stamp-round-alpha.png" alt="" style={{ position: 'absolute', right: 'var(--sp-7)', top: '50%', transform: 'translateY(-50%)', width: '300px', opacity: 0.16, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, left: '7px', top: '-14px', display: 'flex', alignItems: 'flex-end' }}>
          <div style={{ ...wrap, width: '100%', paddingBottom: 'var(--sp-8)' }}>
            <Badge status="open">Open today · 9 to sold out</Badge>
            <div style={{ fontFamily: 'var(--font-script)', fontSize: 'var(--fs-script-xl)', lineHeight: 1, color: 'var(--paper-100)', margin: '18px 0 4px' }}>With love from Texas...</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-sm)', fontWeight: 'var(--fw-display)', letterSpacing: 'var(--track-caps)', textTransform: 'uppercase', color: 'var(--paper-300)' }}>A Texas Made Texas Modern establishment</div>
            <div style={{ display: 'flex', gap: 'var(--sp-3)', marginTop: 'var(--sp-6)', flexWrap: 'wrap' }}>
              <Button variant="primary" onClick={() => go('Shelf')}>What's on the shelf</Button>
              <Button variant="inverse" onClick={() => go('Visit')}>Directions</Button>
            </div>
          </div>
        </div>
      </PhotoSlot>

      {/* The chalked line. What someone wrote on the board this morning. */}
      <div style={{ ...paper, borderBottom: 'var(--border-hair) solid var(--border-hairline)', padding: 'var(--sp-6) var(--sp-7)' }}>
        <div style={{ ...wrap, padding: 0, display: 'flex', gap: 'var(--sp-6)', alignItems: 'baseline', flexWrap: 'wrap' }}>
          <span style={{ ...hand, fontSize: 'var(--fs-hand-lg)', color: 'var(--denim-500)' }}>Everything here was grown or raised within twenty miles.</span>
          <span style={{ ...caps, color: 'var(--chili-500)' }}>No distributors · No exceptions</span>
        </div>
      </div>

      <div style={{ height: '14px', backgroundImage: 'var(--pattern-ticking)' }} />

      {/* Shelf, on paper, with the hand in the margin. */}
      <section style={{ ...paper, paddingTop: 'var(--sp-9)', paddingBottom: 'var(--sp-9)' }}>
        <div style={wrap}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 260px', gap: 'var(--sp-7)', alignItems: 'start' }}>
            <div>
              <SectionHeading eyebrow="The stand" title="What's on the shelf today" lede="Picked this morning. Gone when it's gone." />
              <div style={{ marginTop: 'var(--sp-5)' }}>
                <ProduceRow item="Peaches" grower="Salt Branch Orchard" town="Celina" miles={14} price="$4.50" unit="lb" />
                <ProduceRow item="Eggs" grower="Wolf Creek" town="Blue Ridge" miles={3} price="$7.00" unit="dozen" />
                <ProduceRow item="Blackberries" grower="Salt Branch Orchard" town="Celina" miles={14} price="$6.00" unit="pint" />
                <ProduceRow item="Honey" grower="Crooked Creek Honey Farm" town="Anna" miles={11} soldOut />
                <ProduceRow item="Tomatoes" grower="TXM Ranch" town="Blue Ridge" miles={0} price="$3.25" unit="lb" last />
              </div>
              <div style={{ marginTop: 'var(--sp-5)' }}>
                <Button variant="secondary" onClick={() => go('Shelf')}>See the whole shelf</Button>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
              <PhotoSlot ratio="4 / 5" note="PRODUCE ON THE TABLE — close, top-down, in the crate it arrived in" />
              <span style={hand}>The honey went before ten. It usually does.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dark field. Events against a photograph of the hall. */}
      <div style={{ background: 'var(--denim-700)', paddingTop: 'var(--sp-9)', paddingBottom: 'var(--sp-9)' }}>
        <div style={wrap}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--sp-7)', alignItems: 'start' }}>
            <div>
              <div style={{ ...caps, color: 'var(--chili-300)' }}>September</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-lg)', fontWeight: 'var(--fw-display-bold)', letterSpacing: 'var(--track-display)', color: 'var(--paper-100)', margin: 'var(--sp-3) 0 var(--sp-5)' }}>Coming up at the stand</div>
              <PhotoSlot ratio="3 / 2" note="THE HALL AT NIGHT — string lights, the floor full, from the back corner" />
              <span style={{ ...hand, color: 'var(--paper-300)', display: 'block', marginTop: 'var(--sp-4)' }}>Bring a chair if you want one.</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
              <EventCard month="SEP" day="20" name="Market day" time="10am–4pm" blurb="Local goods, fresh food, live music." />
              <EventCard month="SEP" day="20" name="Dance under the stars" time="6–10pm" blurb="Live music, cold drinks, good people." status="news" statusLabel="Tickets open" />
              <EventCard month="SEP" day="26" name="Fall harvest supper" time="6pm" blurb="Farm to table, good company. One long table." status="soldout" statusLabel="Sold out" />
              <div style={{ marginTop: 'var(--sp-4)' }}>
                <Button variant="inverse" onClick={() => go('Events')}>All of September</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: '20px', backgroundImage: 'var(--pattern-checker)', backgroundSize: 'var(--pattern-checker-size)' }} />

      {/* Growers, on canvas. */}
      <section style={{ backgroundColor: 'var(--paper-200)', backgroundImage: 'var(--texture-canvas)', backgroundSize: 'var(--texture-canvas-size)', paddingTop: 'var(--sp-9)', paddingBottom: 'var(--sp-9)' }}>
        <div style={wrap}>
          <SectionHeading eyebrow="Who grows it" title="Named on every card" lede="Nothing on the shelf is anonymous. If we cannot tell you who grew it, we do not sell it." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 'var(--sp-5)', marginTop: 'var(--sp-6)' }}>
            {[['Crooked Creek Honey Farm', 'Honey', 'Anna'],
              ['N&P Farm & Dairy', 'Goat and cow dairy', 'Farmersville'],
              ['White House Kitchen', 'Honey, remedies, kitchen goods', 'McKinney']].map(([n, w, t]) => (
              <div key={n}>
                <PhotoSlot ratio="1 / 1" note={'PORTRAIT — ' + n + ', at work, hands in frame'} />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-sm)', fontWeight: 'var(--fw-display)', color: 'var(--denim-500)', marginTop: 'var(--sp-4)' }}>{n}</div>
                <div style={{ ...caps, color: 'var(--text-faint)', marginTop: '5px' }}>{w} · {t}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 'var(--sp-6)', display: 'flex', gap: 'var(--sp-4)', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button variant="secondary" onClick={() => go('Growers')}>Every grower</Button>
            <span style={hand}>Four so far. More every season.</span>
          </div>
        </div>
      </section>

      <section style={{ ...wrap, padding: 'var(--sp-9) var(--sp-7)' }}>
        <StatementBlock lines={['GATHER WITH GOOD PEOPLE IN NORTH TEXAS.', '', '', '']} />
      </section>

      <SiteFooter columns={[
        { title: 'Visit', items: ['CR 669, Blue Ridge TX', 'Sat 9–4', 'Free parking on the grass'] },
        { title: 'The stand', items: ['Shelf', 'Growers', 'Events'] },
        { title: 'Growers', items: ['Place product at the stand', 'Named on every card', 'No distributors'] },
        { title: 'Write to us', items: ['hello@farmstand1959.com', '(903) 555-0159'] }
      ]} />
    </div>
  );
}
window.FSKit = Object.assign(window.FSKit || {}, { Home });
