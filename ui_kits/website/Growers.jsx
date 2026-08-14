/* Farmstand 1959 — the grower directory. The sourcing promise, made visible. */
function Growers({ go }) {
  const { SiteHeader, SiteFooter, SectionHeading, GrowerCard, Rule, Seal, Button, StatBlock } = window.DS;
  const wrap = { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--sp-7)' };

  return (
    <div>
      <SiteHeader items={['Howdy y’all', 'The stand', 'Shelf', 'Growers', 'Events', { label: 'Yeehaw', accent: true }, 'Visit']} active="Growers" status="Open today · 9 to 4" onNavigate={go} />

      <section style={{ ...wrap, paddingTop: 'var(--sp-8)' }}>
        <SectionHeading eyebrow="Growers" title="Eighteen farms, all of them named" lede="No distributors, no exceptions, no mystery produce. Every grower is named on the shelf card, on the bag, and here." />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--sp-4)', marginTop: 'var(--sp-6)' }}>
          <GrowerCard name="Salt Branch Orchard" town="Celina" miles={14} products={['Peaches', 'Blackberries']} note="Third generation. Picks the morning of market day." />
          <GrowerCard name="Wolf Creek" town="Blue Ridge" miles={3} products={['Eggs', 'Pullets']} note="Two hundred hens on pasture behind the house." />
          <GrowerCard name="Pilot Grove Apiary" town="Van Alstyne" miles={19} products={['Honey', 'Beeswax']} note="Forty hives along the creek. Sells out most Saturdays." />
          <GrowerCard name="Kelly Creek Grove" town="Farmersville" miles={11} products={['Pecans', 'Pecan oil']} note="Native trees, no irrigation. Harvest starts in November." />
          <GrowerCard name="TXM Ranch" town="Blue Ridge" miles={0} products={['Tomatoes', 'Chili peppers', 'Beef']} note="The home place. Two hundred forty acres, the stand out front." />
          <GrowerCard name="Bois d'Arc Dairy" town="Leonard" miles={16} products={['Butter', 'Buttermilk']} note="Sixty Jerseys. Churns Thursday, delivers Friday." />
        </div>

        <div style={{ marginTop: 'var(--sp-7)' }}><Rule ornament label="Since 1959" /></div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 'var(--sp-7)', alignItems: 'center', marginTop: 'var(--sp-7)' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-md)', fontWeight: 'var(--fw-display-bold)', letterSpacing: 'var(--track-caps)', textTransform: 'uppercase', color: 'var(--denim-500)' }}>Place product at the stand</div>
            <div style={{ fontSize: 'var(--fs-body-lg)', lineHeight: 'var(--lh-body)', color: 'var(--text-muted)', maxWidth: 'var(--measure)', margin: '10px 0 20px' }}>If you grow, raise or make something within an hour of Blue Ridge, write to us. Your name goes on the card — that is part of the deal, not a favour.</div>
            <Button variant="secondary" onClick={() => go('Visit')}>Write to us</Button>
          </div>
          <Seal name="stamp-round" width={150} basePath="../../assets/" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--sp-6)', marginTop: 'var(--sp-8)', paddingTop: 'var(--sp-6)', borderTop: 'var(--border-hair) solid var(--border-hairline)' }}>
          <StatBlock figure="18" label="North Texas growers" />
          <StatBlock figure="19" label="Miles, farthest farm" />
          <StatBlock figure="0" label="Distributors" />
        </div>
      </section>

      <div style={{ marginTop: 'var(--sp-9)' }}>
        <SiteFooter columns={[
          { title: 'Visit', items: ['CR 669, Blue Ridge TX', 'Sat 9–4', 'Free parking on the grass'] },
          { title: 'Growers', items: ['Place product at the stand', 'What we look for', 'How we price'] }
        ]} />
      </div>
    </div>
  );
}
window.FSKit = Object.assign(window.FSKit || {}, { Growers });
