/* Farmstand 1959 — the shelf. Seed packets double as the produce card. */
function Shelf({ go }) {
  const { SiteHeader, SiteFooter, SectionHeading, SeedPacket, ProduceRow, Card,
          QuantityStepper, Badge, Button, Rule } = window.DS;
  const wrap = { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--sp-7)' };
  const [qty, setQty] = React.useState(2);

  return (
    <div>
      <SiteHeader items={['Howdy y’all', 'The stand', 'Shelf', 'Growers', 'Events', { label: 'Yeehaw', accent: true }, 'Visit']} active="Shelf" status="Open today · 9 to 4" onNavigate={go} />

      <section style={{ ...wrap, paddingTop: 'var(--sp-8)' }}>
        <SectionHeading eyebrow="Today" title="What's on the shelf" lede="Everything here was grown or raised on TXM Ranch, or came in this morning from a named grower down the road." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 'var(--sp-4)', marginTop: 'var(--sp-6)' }}>
          <SeedPacket name="Texas tomato" illustration="../../assets/ill/basket.png" price="$3.25" />
          <SeedPacket name="Cowboy chili pepper" illustration="../../assets/ill/chili.png" price="$2.00" accent="chili" />
          <SeedPacket name="Texas bluebonnet" illustration="../../assets/ill/bluebonnet.png" price="$4.00" />
          <SeedPacket name="Peaches" illustration="../../assets/ill/basket.png" price="$4.50" />
          <SeedPacket name="Wolf Creek eggs" illustration="../../assets/ill/rooster.png" price="$7.00" />
        </div>
      </section>

      <section style={{ ...wrap, paddingTop: 'var(--sp-8)', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 'var(--sp-7)', alignItems: 'start' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--fs-label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 'var(--sp-4)' }}>Everything on the shelf</div>
          <ProduceRow item="Peaches" grower="Salt Branch Orchard" town="Celina" miles={14} price="$4.50" unit="lb" />
          <ProduceRow item="Blackberries" grower="Salt Branch Orchard" town="Celina" miles={14} price="$6.00" unit="pint" />
          <ProduceRow item="Eggs" grower="Wolf Creek" town="Blue Ridge" miles={3} price="$7.00" unit="dozen" />
          <ProduceRow item="Tomatoes" grower="TXM Ranch" town="Blue Ridge" miles={0} price="$3.25" unit="lb" />
          <ProduceRow item="Chili peppers" grower="TXM Ranch" town="Blue Ridge" miles={0} price="$2.00" unit="bunch" />
          <ProduceRow item="Honey" grower="Pilot Grove Apiary" town="Van Alstyne" miles={19} soldOut />
          <ProduceRow item="Pecans" grower="Kelly Creek Grove" town="Farmersville" miles={11} soldOut last />
          <div style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)', marginTop: 'var(--sp-4)', maxWidth: 'var(--measure)' }}>Sold-out lines stay on the page. Gone when it's gone only means something if you can see what went.</div>
        </div>

        <Card>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-sm)', fontWeight: 'var(--fw-display-bold)', letterSpacing: 'var(--track-caps)', textTransform: 'uppercase', color: 'var(--denim-500)' }}>Peaches</div>
          <div style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-faint)', margin: '6px 0 14px' }}>Salt Branch Orchard · Celina · 14 miles</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-md)', fontWeight: 'var(--fw-display-bold)', color: 'var(--chili-500)' }}>$4.50 <span style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--fs-label)', letterSpacing: 'var(--track-label)', color: 'var(--text-faint)' }}>/ lb</span></div>
          <Rule />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--sp-4)', margin: '14px 0 16px' }}>
            <QuantityStepper value={qty} max={12} unit="lb" onChange={setQty} />
            <Badge status="open">12 left</Badge>
          </div>
          <Button variant="primary" style={{ width: '100%' }}>Hold at the counter</Button>
          <div style={{ fontSize: 'var(--fs-body-sm)', color: 'var(--text-muted)', marginTop: 'var(--sp-3)' }}>Held until 4pm Saturday. Pay at the stand.</div>
        </Card>
      </section>

      <div style={{ marginTop: 'var(--sp-9)' }}>
        <SiteFooter columns={[
          { title: 'Visit', items: ['CR 669, Blue Ridge TX', 'Sat 9–4', 'Free parking on the grass'] },
          { title: 'The stand', items: ['Shelf', 'Growers', 'Events'] }
        ]} />
      </div>
    </div>
  );
}
window.FSKit = Object.assign(window.FSKit || {}, { Shelf });
