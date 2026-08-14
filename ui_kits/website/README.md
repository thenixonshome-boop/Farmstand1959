# Website UI kit

The public Farmstand 1959 site. Five screens, composed entirely from the design-system
components — no primitive is re-implemented here.

| File | Screen | Components exercised |
| --- | --- | --- |
| `Home.jsx` | Landing, above and below the fold | SiteHeader, Badge, Button, Seal, StatBlock, SectionHeading, ProduceRow, Marquee, EventCard, StatementBlock, SiteFooter |
| `Shelf.jsx` | What's on the shelf today | SeedPacket, ProduceRow, Card, QuantityStepper, Badge, Rule, Button |
| `Growers.jsx` | The grower directory | GrowerCard, Rule, Seal, StatBlock, SectionHeading |
| `Events.jsx` | September programming | EventPoster, EventCard, Marquee, Rule |
| `Visit.jsx` | Hours, map, inquiry form | Input, Select, Choice, Button, Card, BrandTag, Badge, Rule |

`index.html` wires them together: the header nav switches screens, the Visit form acknowledges a
send, the shelf stepper holds quantity. Everything else is static by design.

Screens read the bundled components off `window.DS`, resolved once in `index.html`, and register
themselves on `window.FSKit`. They are browser-rendered demos, not modules — no imports.

Known gaps: the map is a placeholder (no mapping provider chosen), and every image is board
artwork rather than photography.
