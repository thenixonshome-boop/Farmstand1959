/* @ds-bundle: {"format":4,"namespace":"Farmstand1959DesignSystem_972c5a","components":[{"name":"BrandTag","sourcePath":"components/brand/BrandTag.jsx"},{"name":"EventPoster","sourcePath":"components/brand/EventPoster.jsx"},{"name":"Marquee","sourcePath":"components/brand/Marquee.jsx"},{"name":"SeedPacket","sourcePath":"components/brand/SeedPacket.jsx"},{"name":"StatementBlock","sourcePath":"components/brand/StatementBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"Seal","sourcePath":"components/core/Seal.jsx"},{"name":"Choice","sourcePath":"components/forms/Choice.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"EventCard","sourcePath":"components/patterns/EventCard.jsx"},{"name":"GrowerCard","sourcePath":"components/patterns/GrowerCard.jsx"},{"name":"PhotoSlot","sourcePath":"components/patterns/PhotoSlot.jsx"},{"name":"ProduceRow","sourcePath":"components/patterns/ProduceRow.jsx"},{"name":"SectionHeading","sourcePath":"components/patterns/SectionHeading.jsx"},{"name":"StatBlock","sourcePath":"components/patterns/StatBlock.jsx"}],"sourceHashes":{"components/brand/BrandTag.jsx":"19570ffe9b95","components/brand/EventPoster.jsx":"3d108fd71e2f","components/brand/Marquee.jsx":"b3c601ece35e","components/brand/SeedPacket.jsx":"fee0a2f5b47b","components/brand/StatementBlock.jsx":"c4f16e2d21fa","components/core/Badge.jsx":"e8c51b12dae3","components/core/Button.jsx":"56bcdc496b6b","components/core/Card.jsx":"1e042d5eb7b0","components/core/Rule.jsx":"ce44f65b5fda","components/core/Seal.jsx":"e3b792325a26","components/forms/Choice.jsx":"605c984cccc3","components/forms/Input.jsx":"12e32c504cb2","components/forms/QuantityStepper.jsx":"ae113f7f44ed","components/forms/Select.jsx":"bc831bbe07ae","components/navigation/SiteFooter.jsx":"ef139644fdbf","components/navigation/SiteHeader.jsx":"4bddebeef507","components/navigation/TabBar.jsx":"17e2a4e94f83","components/patterns/EventCard.jsx":"b93adf01e5d8","components/patterns/GrowerCard.jsx":"779b9afd0dc8","components/patterns/PhotoSlot.jsx":"a02d9b6f7a84","components/patterns/ProduceRow.jsx":"9d07878e9ce2","components/patterns/SectionHeading.jsx":"8d96aba27cee","components/patterns/StatBlock.jsx":"4f2cb91b81da","ds-loader.js":"e38b5dfbae86","ui_kits/phone/Phone.jsx":"20fa31acc8a9","ui_kits/portal/Login.jsx":"357a72f59772","ui_kits/portal/Portal.jsx":"8a41e882db45","ui_kits/portal/PortalPanels.jsx":"077ccd7464d4","ui_kits/portal/portal-store.js":"1ec45058bfa2","ui_kits/website/About.jsx":"5596d36b9be4","ui_kits/website/Events.jsx":"a87ba6050cae","ui_kits/website/Growers.jsx":"5ac53851237a","ui_kits/website/Home.jsx":"95df94ef4629","ui_kits/website/Shelf.jsx":"06d6cc418e3d","ui_kits/website/Vendors.jsx":"147d89c2566a","ui_kits/website/Visit.jsx":"b77f76129d93","ui_kits/website/vendor-store.js":"6e99c1faba7f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Farmstand1959DesignSystem_972c5a = window.Farmstand1959DesignSystem_972c5a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/BrandTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The hang tag. Buttermilk for provenance, denim for thanks. Strung on
   jute at the counter, never printed onto the bag. */
function BrandTag({
  tone = 'paper',
  lines = [],
  star = true,
  style,
  ...rest
}) {
  const dark = tone === 'denim';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: '132px',
      background: dark ? 'var(--denim-500)' : 'var(--paper-200)',
      border: 'var(--border-hair) solid ' + (dark ? 'var(--denim-700)' : 'var(--paper-400)'),
      borderRadius: 'var(--radius-card)',
      padding: '38px 16px 22px',
      position: 'relative',
      textAlign: 'center',
      boxShadow: 'var(--shadow-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '14px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '13px',
      height: '13px',
      borderRadius: 'var(--radius-pill)',
      border: '2px solid ' + (dark ? 'var(--denim-200)' : 'var(--paper-500)'),
      background: 'transparent'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px'
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label-lg)',
      fontWeight: 'var(--fw-label)',
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      lineHeight: 1.25,
      color: dark ? 'var(--paper-100)' : 'var(--denim-500)'
    }
  }, l))), star ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '12px',
      color: dark ? 'var(--chili-300)' : 'var(--chili-500)',
      fontSize: '13px',
      lineHeight: 1
    }
  }, "\u2605") : null);
}
Object.assign(__ds_scope, { BrandTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BrandTag.jsx", error: String((e && e.message) || e) }); }

// components/brand/EventPoster.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Same skeleton every time: chili head, denim event name, date block,
   illustration filling the lower two-thirds, three benefits on a rule. */
function EventPoster({
  title,
  date,
  time,
  illustration,
  illustrationAlt = '',
  benefits = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: '260px',
      background: 'var(--paper-100)',
      border: 'var(--border-hair) solid var(--paper-400)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--shadow-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-label)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--chili-500)'
    }
  }, "Farmstand 1959")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 16px 12px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '25px',
      fontWeight: 'var(--fw-display-bold)',
      letterSpacing: 'var(--track-caps)',
      textTransform: 'uppercase',
      lineHeight: 1.15,
      color: 'var(--denim-500)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '10px',
      padding: '0 16px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-label)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--chili-600)',
      lineHeight: 1.4
    }
  }, date, time ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--denim-500)'
    }
  }, time)) : null), /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: '120px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      padding: '8px 12px 0'
    }
  }, illustration ? /*#__PURE__*/React.createElement("img", {
    src: illustration,
    alt: illustrationAlt,
    style: {
      maxWidth: '100%',
      maxHeight: '140px',
      height: 'auto'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--tin-500)',
      paddingBottom: '30px'
    }
  }, "Illustration")), benefits.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--border-hair) solid var(--paper-400)',
      padding: '9px 12px',
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      flexWrap: 'wrap'
    }
  }, benefits.map((b, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, b, i < benefits.length - 1 ? ' \u00b7' : ''))) : null);
}
Object.assign(__ds_scope, { EventPoster });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/EventPoster.jsx", error: String((e && e.message) || e) }); }

// components/brand/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The roadside board, rebuilt so today's status can be typed rather than
   re-photographed. Denim frame, tin inner rule, cream board. */
function Marquee({
  heading = 'Farmstand 1959',
  lines = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--denim-900)',
      border: '6px solid var(--denim-700)',
      borderRadius: 'var(--radius-control)',
      padding: '10px',
      boxShadow: 'var(--shadow-lift)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      border: 'var(--border-rule) solid var(--tin-500)',
      background: 'var(--paper-000)',
      padding: '16px 18px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '5px'
    }
  }, heading ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '19px',
      fontWeight: 'var(--fw-body-bold)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--chili-500)'
    }
  }, heading) : null, heading && lines.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: '1px',
      background: 'var(--paper-300)',
      margin: '3px 0'
    }
  }) : null, lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '17px',
      fontWeight: 'var(--fw-body-bold)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--denim-800)',
      lineHeight: 1.4
    }
  }, l))));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/brand/SeedPacket.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The produce card format: subject name in Playfair caps, illustration
   centred, the stamp at the foot. Doubles as the shelf price card and the
   product thumbnail online. */
function SeedPacket({
  name,
  illustration,
  illustrationAlt = '',
  price,
  accent = 'paper',
  style,
  ...rest
}) {
  const chili = accent === 'chili';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: '190px',
      background: 'var(--paper-000)',
      border: 'var(--border-rule) solid ' + (chili ? 'var(--chili-500)' : 'var(--paper-400)'),
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--shadow-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 14px 10px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-sm)',
      fontWeight: 'var(--fw-display-bold)',
      letterSpacing: 'var(--track-caps)',
      textTransform: 'uppercase',
      lineHeight: 1.2,
      color: chili ? 'var(--chili-500)' : 'var(--denim-500)'
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: '128px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4px 14px',
      background: 'var(--paper-100)'
    }
  }, illustration ? /*#__PURE__*/React.createElement("img", {
    src: illustration,
    alt: illustrationAlt,
    style: {
      maxWidth: '100%',
      maxHeight: '128px',
      height: 'auto'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--tin-500)'
    }
  }, "Illustration")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px 14px',
      textAlign: 'center',
      borderTop: 'var(--border-hair) solid var(--paper-300)',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '19px',
      lineHeight: 1,
      color: 'var(--chili-500)'
    }
  }, "Farmstand"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-display)',
      letterSpacing: '.1em',
      color: 'var(--denim-500)'
    }
  }, "1959"), price ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 'var(--fw-display-bold)',
      color: 'var(--chili-500)',
      marginTop: '4px'
    }
  }, price) : null));
}
Object.assign(__ds_scope, { SeedPacket });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SeedPacket.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatementBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The four-line brand statement from the board. Centred tracked caps,
   one rule above. Use once per surface at most. */
function StatementBlock({
  lines = ['A place to gather. Good food.', 'Good people. Real Texas.', 'Grown with purpose.', 'Made to be remembered.'],
  tone = 'default',
  style,
  ...rest
}) {
  const dark = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '64px',
      height: 'var(--border-hair)',
      background: dark ? 'var(--denim-300)' : 'var(--paper-400)',
      margin: '0 auto var(--sp-5)'
    }
  }), lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-lg)',
      fontWeight: 'var(--fw-display)',
      letterSpacing: 'var(--track-caps)',
      textTransform: 'uppercase',
      lineHeight: 1.85,
      color: dark ? 'var(--denim-100)' : 'var(--denim-600)'
    }
  }, l)));
}
Object.assign(__ds_scope, { StatementBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatementBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Operating status. Sage for open, chili for sold out, tin for closed,
   dashed tin for anything provisional, denim for news. */
const SKINS = {
  open: {
    background: 'var(--status-open)',
    color: 'var(--paper-100)',
    border: 'transparent'
  },
  soldout: {
    background: 'var(--status-soldout)',
    color: 'var(--paper-100)',
    border: 'transparent'
  },
  closed: {
    background: 'var(--status-closed)',
    color: 'var(--paper-000)',
    border: 'transparent'
  },
  delay: {
    background: 'transparent',
    color: 'var(--tin-900)',
    border: 'var(--tin-500)',
    dashed: true
  },
  news: {
    background: 'var(--denim-500)',
    color: 'var(--paper-100)',
    border: 'transparent'
  },
  quiet: {
    background: 'var(--paper-200)',
    color: 'var(--denim-600)',
    border: 'transparent'
  }
};
function Badge({
  status = 'open',
  style,
  children,
  ...rest
}) {
  const s = SKINS[status] || SKINS.open;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-label)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      padding: s.dashed ? '6px 12px' : '7px 13px',
      background: s.background,
      color: s.color,
      border: s.dashed ? 'var(--border-hair) dashed ' + s.border : 'none',
      borderRadius: 'var(--radius-control)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Chili fill is the only primary and appears once per view.
   Everything else is a denim outline or a quiet wash. */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  href,
  onClick,
  type = 'button',
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const pads = size === 'sm' ? '9px 15px' : '13px 22px';
  const fs = size === 'sm' ? 'var(--fs-label-sm)' : 'var(--fs-label)';
  const skins = {
    primary: {
      background: hover ? 'var(--chili-600)' : 'var(--chili-500)',
      color: 'var(--text-on-accent)',
      borderColor: hover ? 'var(--chili-600)' : 'var(--chili-500)'
    },
    secondary: {
      background: hover ? 'var(--denim-50)' : 'transparent',
      color: 'var(--denim-500)',
      borderColor: 'var(--denim-500)'
    },
    quiet: {
      background: hover ? 'var(--denim-50)' : 'transparent',
      color: 'var(--denim-500)',
      borderColor: 'transparent'
    },
    inverse: {
      background: hover ? 'rgba(241,233,212,.14)' : 'transparent',
      color: 'var(--paper-100)',
      borderColor: 'var(--paper-100)'
    }
  };
  const skin = disabled ? {
    background: 'transparent',
    color: 'var(--tin-700)',
    borderColor: 'var(--tin-300)'
  } : skins[variant] || skins.primary;
  const css = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--sp-2)',
    fontFamily: 'var(--font-label)',
    fontSize: fs,
    fontWeight: 'var(--fw-label)',
    letterSpacing: 'var(--track-label)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: pads,
    border: 'var(--border-hair) solid',
    borderRadius: 'var(--radius-control)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    boxShadow: down && !disabled ? 'var(--shadow-press)' : 'none',
    transition: 'background var(--dur-hover) var(--ease)',
    ...skin,
    ...style
  };
  const handlers = disabled ? {} : {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    onClick
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: css
  }, handlers, rest), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: css
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Buttermilk fill, 4px radius, hairline border, 24px padding.
   Never a coloured left border, never nested. */
function Card({
  media,
  mediaAlt = '',
  featured = false,
  padding,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: featured ? 'var(--border-rule) solid var(--border-strong)' : 'var(--border-hair) solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), media ? typeof media === 'string' ? /*#__PURE__*/React.createElement("img", {
    src: media,
    alt: mediaAlt,
    style: {
      display: 'block',
      width: '100%',
      height: 'auto'
    }
  }) : media : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: padding || 'var(--pad-card)'
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A horizontal divider. With a label or star it becomes a section break. */
function Rule({
  weight = 'hair',
  ornament,
  label,
  style,
  ...rest
}) {
  const line = {
    flex: 1,
    height: weight === 'rule' ? 'var(--border-rule)' : 'var(--border-hair)',
    background: weight === 'rule' ? 'var(--border-strong)' : 'var(--border-hairline)'
  };
  if (!ornament && !label) return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...line,
      width: '100%',
      flex: 'none',
      ...style
    }
  }, rest));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: line
  }), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      whiteSpace: 'nowrap'
    }
  }, label) : null, ornament ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--chili-500)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1
    }
  }, "\u2605") : null, /*#__PURE__*/React.createElement("div", {
    style: line
  }));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/Seal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The only sanctioned way to place a brand mark. Marks are images and are
   never redrawn, traced or approximated. */
const MARKS = {
  /* The 2026 board's own "PRIMARY LOGO" page: the FARMSTAND·59 stamp, the TXM
     script and the Appaloosa carrying a rooster with a carton of eggs. */
  'primary': {
    file: 'brand/lockup-primary-alpha.png',
    alt: 'Farmstand 59 — Texas Made Texas Modern, from TXM Ranch'
  },
  'primary-kraft': {
    file: 'brand/primary-logo-kraft.png',
    alt: 'Farmstand 59 — Texas Made Texas Modern, from TXM Ranch'
  },
  'seal-colour': {
    file: 'brand/seal-colour.png',
    alt: 'Farmstand 1959, a Texas Made Texas Modern establishment from TXM Ranch'
  },
  'stamp-59': {
    file: 'brand/stamp-farmstand-59.png',
    alt: 'Farmstand 59 — Texas Made Texas Modern'
  },
  'txm-ranch': {
    file: 'brand/lockup-txm-ranch.png',
    alt: 'Farmstand 59 — TXM Ranch'
  },
  'lockup-59-basket': {
    file: 'brand/lockup-59-basket.png',
    alt: 'Farmstand 59 — Appaloosa carrying a basket of greens'
  },
  'numerals': {
    file: 'brand/numerals-1959.png',
    alt: '1959'
  },
  'stamp-round': {
    file: 'brand/stamp-round-alpha.png',
    alt: 'Farmstand 1959'
  },
  'stamp-product': {
    file: 'brand/stamp-product-alpha.png',
    alt: 'Farmstand 1959 — Texas Made Texas Modern'
  },
  'lockup-script': {
    file: 'brand/lockup-script-alpha.png',
    alt: 'Farmstand 1959'
  },
  'lockup-script-wide': {
    file: 'brand/lockup-script-wide-alpha.png',
    alt: 'Farmstand 1959'
  },
  'lockup-endorsed': {
    file: 'brand/lockup-endorsed-alpha.png',
    alt: 'Farmstand 1959, a Texas Made Texas Modern establishment'
  },
  'marks': {
    file: 'marks/row-alpha.png',
    alt: 'Farmstand 1959 brand marks'
  },
  /* The horse alone, without the stamp or the TXM script. */
  'horse': {
    file: 'brand/mark-horse-alpha.png',
    alt: 'Appaloosa carrying a rooster in a cowboy hat'
  },
  'horse-eggs': {
    file: 'ill/horse-eggs.png',
    alt: 'Appaloosa carrying a rooster with a carton of eggs'
  },
  'lockup-txm': {
    file: 'brand/lockup-txm-alpha.png',
    alt: 'TXM — Appaloosa carrying a rooster in a cowboy hat'
  },
  'stamp-texas': {
    file: 'brand/stamp-made-in-texas.png',
    alt: 'Made in Texas'
  },
  'stamp-1959': {
    file: 'brand/stamp-farmstand-1959.png',
    alt: 'Farmstand 1959'
  },
  'stamp-tx': {
    file: 'brand/stamp-made-in-tx.png',
    alt: 'Made in TX'
  },
  'txm': {
    file: 'marks/txm-monogram.png',
    alt: 'TXM'
  },
  'star': {
    file: 'marks/star.png',
    alt: ''
  }
};
function Seal({
  name = 'stamp-round',
  width = 160,
  basePath = 'assets/',
  alt,
  style,
  ...rest
}) {
  const m = MARKS[name] || MARKS['stamp-round'];
  return /*#__PURE__*/React.createElement("img", _extends({
    src: basePath + m.file,
    alt: alt !== undefined ? alt : m.alt,
    style: {
      display: 'block',
      width: typeof width === 'number' ? width + 'px' : width,
      height: 'auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Seal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Seal.jsx", error: String((e && e.message) || e) }); }

// components/forms/Choice.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Radio and checkbox. Near-square, denim, no fill animation. */
function Choice({
  type = 'checkbox',
  label,
  description,
  checked,
  onChange,
  name,
  value,
  disabled,
  style,
  ...rest
}) {
  const uid = React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'grid',
      gridTemplateColumns: '18px 1fr',
      gap: 'var(--sp-3)',
      alignItems: 'start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: type,
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      appearance: 'none',
      width: '18px',
      height: '18px',
      margin: '2px 0 0',
      border: 'var(--border-hair) solid ' + (checked ? 'var(--denim-500)' : 'var(--border-muted)'),
      borderRadius: type === 'radio' ? 'var(--radius-pill)' : 'var(--radius-control)',
      background: checked ? 'var(--denim-500)' : 'var(--paper-100)',
      boxShadow: checked ? 'inset 0 0 0 3px var(--paper-100)' : 'none',
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)'
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-faint)',
      marginTop: '2px'
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Choice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Choice.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      minWidth: 0,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      background: 'var(--paper-100)',
      border: 'var(--border-hair) solid ' + (error ? 'var(--danger)' : focus ? 'var(--denim-500)' : 'var(--border-muted)'),
      borderRadius: 'var(--radius-control)',
      padding: '11px 13px',
      outline: 'none',
      minWidth: 0,
      width: '100%',
      boxSizing: 'border-box',
      boxShadow: focus ? '0 0 0 3px var(--denim-100)' : 'none',
      transition: 'border-color var(--dur-hover) var(--ease)'
    }
  }, rest)), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      color: error ? 'var(--danger)' : 'var(--text-faint)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The en-dash and plus are the system's second sanctioned unicode icon pair. */
function QuantityStepper({
  value = 1,
  min = 0,
  max = 99,
  unit,
  onChange,
  style,
  ...rest
}) {
  const [n, setN] = React.useState(value);
  React.useEffect(() => setN(value), [value]);
  const set = next => {
    const clamped = Math.max(min, Math.min(max, next));
    setN(clamped);
    if (onChange) onChange(clamped);
  };
  const btn = disabled => ({
    width: '38px',
    height: '38px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-body)',
    fontSize: '18px',
    lineHeight: 1,
    color: disabled ? 'var(--tin-500)' : 'var(--denim-500)',
    background: 'transparent',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer'
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: 'var(--border-hair) solid var(--border-muted)',
      borderRadius: 'var(--radius-control)',
      background: 'var(--paper-100)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "One fewer",
    disabled: n <= min,
    onClick: () => set(n - 1),
    style: btn(n <= min)
  }, "\u2013"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: '54px',
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 'var(--fw-display)',
      color: 'var(--text-body)',
      borderLeft: 'var(--border-hair) solid var(--border-hairline)',
      borderRight: 'var(--border-hair) solid var(--border-hairline)',
      padding: '8px 6px'
    }
  }, n, unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginLeft: '4px'
    }
  }, unit) : null), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "One more",
    disabled: n >= max,
    onClick: () => set(n + 1),
    style: btn(n >= max)
  }, "+"));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The chevron is one of only two unicode glyphs sanctioned as an icon. */
function Select({
  label,
  hint,
  options = [],
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      background: 'var(--paper-100)',
      border: 'var(--border-hair) solid ' + (focus ? 'var(--denim-500)' : 'var(--border-muted)'),
      borderRadius: 'var(--radius-control)',
      padding: '11px 34px 11px 13px',
      outline: 'none',
      appearance: 'none',
      boxShadow: focus ? '0 0 0 3px var(--denim-100)' : 'none'
    }
  }, rest), options.map((o, i) => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: i,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '13px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--denim-400)',
      fontSize: '11px'
    }
  }, "\u25BC")), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-faint)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The endorsed signature. "With love from Texas" belongs here and on
   thank-you tags — not under every logo. */
function SiteFooter({
  columns = [],
  signature = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--paper-100)',
      padding: 'var(--sp-8) var(--sp-7) var(--sp-7)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, columns.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
      gap: 'var(--sp-6)',
      paddingBottom: 'var(--sp-7)',
      borderBottom: 'var(--border-hair) solid var(--denim-400)'
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--denim-300)',
      marginBottom: 'var(--sp-3)'
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px'
    }
  }, (c.items || []).map((it, j) => /*#__PURE__*/React.createElement("span", {
    key: j,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--denim-100)'
    }
  }, it)))))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: columns.length ? 'var(--sp-7)' : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'var(--fs-script-lg)',
      lineHeight: 1
    }
  }, "Farmstand 1959"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-label-lg)',
      fontWeight: 'var(--fw-display)',
      letterSpacing: 'var(--track-caps)',
      textTransform: 'uppercase',
      color: 'var(--denim-200)',
      marginTop: 'var(--sp-3)'
    }
  }, "A Texas Made Texas Modern establishment"), signature ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'var(--fs-script-sm)',
      color: 'var(--chili-300)',
      marginTop: '14px'
    }
  }, "With love from Texas.") : null)));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Denim bar, script lockup left, tracked caps nav right. Static by
   default; sticky is allowed where it helps someone check today's status
   on a phone. */
function SiteHeader({
  items = [],
  active,
  status,
  onNavigate,
  sticky = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: sticky ? 'sticky' : 'static',
      top: 0,
      zIndex: 20,
      background: 'var(--surface-inverse)',
      color: 'var(--paper-100)',
      padding: '14px var(--sp-7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sp-5)',
      flexWrap: 'wrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "/",
    style: {
      textDecoration: 'none',
      color: 'inherit',
      display: 'flex',
      alignItems: 'baseline',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '13px',
      color: 'var(--chili-400)',
      lineHeight: 1
    }
  }, "\u2605"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '30px',
      lineHeight: 1
    }
  }, "Farmstand"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '20px',
      fontWeight: 'var(--fw-display)',
      letterSpacing: '.05em'
    }
  }, "1959"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '13px',
      color: 'var(--chili-400)',
      lineHeight: 1
    }
  }, "\u2605")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-6)',
      flexWrap: 'wrap'
    }
  }, items.map((it, i) => {
    const label = typeof it === 'string' ? it : it.label;
    const href = typeof it === 'string' ? '#' : it.href;
    const accent = typeof it === 'string' ? false : !!it.accent;
    const on = label === active;
    if (accent) {
      return /*#__PURE__*/React.createElement("a", {
        key: i,
        href: href,
        onClick: onNavigate ? e => {
          e.preventDefault();
          onNavigate(label);
        } : undefined,
        style: {
          fontFamily: 'var(--font-label)',
          fontSize: 'var(--fs-label)',
          fontWeight: 'var(--fw-label)',
          letterSpacing: 'var(--track-label)',
          textTransform: 'uppercase',
          background: on ? 'var(--chili-700)' : 'var(--chili-500)',
          color: 'var(--paper-100)',
          textDecoration: 'none',
          padding: '7px 13px',
          borderRadius: 'var(--radius-control)',
          cursor: 'pointer',
          transition: 'background var(--dur-hover) var(--ease)'
        }
      }, label);
    }
    return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: href,
      onClick: onNavigate ? e => {
        e.preventDefault();
        onNavigate(label);
      } : undefined,
      style: {
        fontFamily: 'var(--font-label)',
        fontSize: 'var(--fs-label)',
        letterSpacing: 'var(--track-label)',
        textTransform: 'uppercase',
        color: on ? 'var(--paper-100)' : 'var(--denim-200)',
        textDecoration: 'none',
        borderBottom: on ? 'var(--border-rule) solid var(--chili-400)' : 'var(--border-rule) solid transparent',
        paddingBottom: '3px',
        cursor: 'pointer',
        transition: 'color var(--dur-hover) var(--ease)'
      }
    }, label);
  }), status ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label-sm)',
      fontWeight: 'var(--fw-label)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      background: 'var(--sage-500)',
      color: 'var(--paper-100)',
      padding: '6px 11px',
      borderRadius: 'var(--radius-control)'
    }
  }, status) : null));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Phone-width bottom navigation. Hit targets never below 44px. */
function TabBar({
  items = [],
  active,
  onSelect,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: '1fr',
      background: 'var(--surface-card)',
      borderTop: 'var(--border-hair) solid var(--border-hairline)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const label = typeof it === 'string' ? it : it.label;
    const on = label === active;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: onSelect ? () => onSelect(label) : undefined,
      style: {
        minHeight: '52px',
        padding: '10px 6px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        borderTop: on ? 'var(--border-rule) solid var(--chili-500)' : 'var(--border-rule) solid transparent',
        marginTop: '-1px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-label)',
        fontSize: 'var(--fs-label-sm)',
        fontWeight: 'var(--fw-label)',
        letterSpacing: 'var(--track-label)',
        textTransform: 'uppercase',
        color: on ? 'var(--chili-500)' : 'var(--text-faint)'
      }
    }, label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/patterns/EventCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A calendar entry. Date block left, name and time right, status if the
   event is anything other than simply happening. */
function EventCard({
  month,
  day,
  name,
  time,
  blurb,
  status,
  statusLabel,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gridTemplateColumns: '84px 1fr',
      gap: 'var(--sp-5)',
      alignItems: 'start',
      textDecoration: 'none',
      background: hover && href ? 'var(--paper-100)' : 'var(--surface-card)',
      border: 'var(--border-hair) solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--pad-card)',
      transition: 'background var(--dur-hover) var(--ease)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      borderRight: 'var(--border-hair) solid var(--border-hairline)',
      paddingRight: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--chili-500)'
    }
  }, month), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-lg)',
      fontWeight: 'var(--fw-display-bold)',
      lineHeight: 1,
      color: 'var(--denim-500)'
    }
  }, day)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      alignItems: 'baseline',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-sm)',
      fontWeight: 'var(--fw-display-bold)',
      letterSpacing: 'var(--track-caps)',
      textTransform: 'uppercase',
      color: 'var(--denim-500)',
      margin: 0
    }
  }, name), status ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    status: status
  }, statusLabel || status) : null), time ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginTop: '5px'
    }
  }, time) : null, blurb ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      margin: '10px 0 0',
      textWrap: 'pretty'
    }
  }, blurb) : null));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/GrowerCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The directory row that carries the sourcing promise. Every grower is
   named, and the town and distance are part of the claim. Never publish
   an anonymous row. */
function GrowerCard({
  name,
  town,
  miles,
  products = [],
  note,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-hair) solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--pad-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-sm)',
      fontWeight: 'var(--fw-display-bold)',
      letterSpacing: 'var(--track-caps)',
      textTransform: 'uppercase',
      color: 'var(--denim-500)',
      margin: 0
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--chili-500)',
      marginTop: '6px'
    }
  }, town, miles != null ? ' \u00b7 ' + miles + ' miles' : ''), products.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--sp-2)',
      marginTop: 'var(--sp-4)'
    }
  }, products.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      background: 'var(--sage-100)',
      color: 'var(--sage-800)',
      padding: '5px 10px',
      borderRadius: 'var(--radius-control)'
    }
  }, p))) : null, note ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      margin: 'var(--sp-4) 0 0',
      textWrap: 'pretty'
    }
  }, note) : null);
}
Object.assign(__ds_scope, { GrowerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/GrowerCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/PhotoSlot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Every photograph on the site goes through this. With no src it is a labelled
   slot — crop marks, the hand telling you what belongs there. With one it is
   the real photograph, faded to 1959 and grained. Same box either way, so a
   layout designed against slots does not move when the photos arrive. */
function PhotoSlot({
  note,
  ratio = '4 / 3',
  src,
  alt = '',
  position = '50% 50%',
  strong,
  children,
  style,
  ...rest
}) {
  const grain = {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    backgroundImage: 'var(--texture-grain)',
    backgroundSize: 'var(--texture-grain-size)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden',
      background: 'var(--paper-300)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: position,
      filter: strong ? 'var(--photo-faded-strong)' : 'var(--photo-faded)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'var(--paper-300)',
      backgroundImage: 'var(--texture-canvas)',
      backgroundSize: 'var(--texture-canvas-size)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-hand)',
      fontSize: 'var(--fs-hand-md)',
      lineHeight: 1.25,
      color: 'var(--tin-700)',
      textAlign: 'center',
      maxWidth: '26ch'
    }
  }, note)), !src ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Corner, {
    top: true,
    left: true
  }), /*#__PURE__*/React.createElement(Corner, {
    top: true
  }), /*#__PURE__*/React.createElement(Corner, {
    left: true
  }), /*#__PURE__*/React.createElement(Corner, null)) : null, /*#__PURE__*/React.createElement("div", {
    style: grain
  }), children);
}
function Corner({
  top,
  left
}) {
  const s = {
    position: 'absolute',
    width: '15px',
    height: '15px',
    pointerEvents: 'none',
    borderColor: 'var(--tin-500)',
    borderStyle: 'solid',
    borderWidth: 0
  };
  s[top ? 'top' : 'bottom'] = '9px';
  s[left ? 'left' : 'right'] = '9px';
  s[top ? 'borderTopWidth' : 'borderBottomWidth'] = '2px';
  s[left ? 'borderLeftWidth' : 'borderRightWidth'] = '2px';
  return /*#__PURE__*/React.createElement("div", {
    style: s
  });
}
Object.assign(__ds_scope, { PhotoSlot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/PhotoSlot.jsx", error: String((e && e.message) || e) }); }

// components/patterns/ProduceRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The stand's inventory line. Item, grower, price — or SOLD OUT, said
   plainly. */
function ProduceRow({
  item,
  grower,
  town,
  miles,
  price,
  unit,
  soldOut = false,
  last = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 'var(--sp-4)',
      alignItems: 'baseline',
      padding: '14px 0',
      borderBottom: last ? 'none' : 'var(--border-hair) solid var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 'var(--fw-display)',
      color: soldOut ? 'var(--tin-700)' : 'var(--denim-500)'
    }
  }, item), grower ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginTop: '3px'
    }
  }, grower, town ? ' \u00b7 ' + town : '', miles != null ? ' \u00b7 ' + miles + ' miles' : '') : null), soldOut ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label)',
      fontWeight: 'var(--fw-label)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--chili-500)'
    }
  }, "Sold out") : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 'var(--fw-display)',
      color: 'var(--chili-500)',
      whiteSpace: 'nowrap'
    }
  }, price, unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginLeft: '5px'
    }
  }, unit) : null));
}
Object.assign(__ds_scope, { ProduceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/ProduceRow.jsx", error: String((e && e.message) || e) }); }

// components/patterns/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Script eyebrow, tracked caps title, optional lede. The script word is
   the only place a script appears on a page besides the mark. */
function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  tone = 'default',
  style,
  ...rest
}) {
  const onDark = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'var(--fs-script-md)',
      lineHeight: 1,
      color: onDark ? 'var(--chili-300)' : 'var(--chili-500)'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-md)',
      fontWeight: 'var(--fw-display-bold)',
      letterSpacing: 'var(--track-caps)',
      textTransform: 'uppercase',
      lineHeight: 'var(--lh-display)',
      color: onDark ? 'var(--paper-100)' : 'var(--denim-500)',
      margin: eyebrow ? '8px 0 0' : 0
    }
  }, title) : null, lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: onDark ? 'var(--denim-100)' : 'var(--text-muted)',
      maxWidth: 'var(--measure)',
      margin: '12px 0 0',
      marginLeft: align === 'center' ? 'auto' : undefined,
      marginRight: align === 'center' ? 'auto' : undefined,
      textWrap: 'pretty'
    }
  }, lede) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/patterns/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A figure and what it counts. Numerals, unpunctuated where possible. */
function StatBlock({
  figure,
  label,
  tone = 'default',
  style,
  ...rest
}) {
  const onDark = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-lg)',
      fontWeight: 'var(--fw-display-bold)',
      lineHeight: 1,
      color: onDark ? 'var(--paper-100)' : 'var(--chili-500)'
    }
  }, figure), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--denim-200)' : 'var(--text-muted)',
      marginTop: '6px'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/StatBlock.jsx", error: String((e && e.message) || e) }); }

// ds-loader.js
try { (() => {
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
    Babel.registerPreset('react-classic', {
      presets: [[Babel.availablePresets.react, {
        runtime: 'classic'
      }]]
    });
  }
  window.DS = window.DS || {};
  function fromBundle() {
    for (var i = 0, ks = Object.keys(window); i < ks.length; i++) {
      try {
        var v = window[ks[i]];
        if (v && typeof v === 'object' && v.Seal && v.Button) return v;
      } catch (e) {}
    }
    return null;
  }
  function loadBundle() {
    return new Promise(function (res) {
      var s = document.createElement('script');
      s.src = ROOT + '_ds_bundle.js';
      s.onload = function () {
        res(true);
      };
      s.onerror = function () {
        res(false);
      };
      document.head.appendChild(s);
    });
  }
  window.DSReady = async function () {
    if (!fromBundle()) await loadBundle();
    var ns = fromBundle();
    if (ns) {
      Object.assign(window.DS, ns);
      return window.DS;
    }
    for (var g of Object.keys(GROUPS)) {
      for (var n of GROUPS[g]) {
        try {
          var src = await (await fetch(ROOT + 'components/' + g + '/' + n + '.jsx')).text();
          var deps = [];
          var body = src.replace(/^import\s*\{([^}]*)\}\s*from\s*['"][^'"]*['"];?\s*$/gm, function (m, list) {
            list.split(',').forEach(function (s) {
              var t = s.trim();
              if (t) deps.push(t);
            });
            return '';
          }).replace(/^import[^\n]*$/gm, '').replace(/export\s+function/g, 'function');
          var pre = deps.length ? 'const {' + deps.join(',') + '} = DS;\n' : '';
          var code = Babel.transform(pre + body, {
            presets: [['react', {
              runtime: 'classic'
            }]]
          }).code;
          window.DS[n] = new Function('React', 'DS', code + '\nreturn ' + n + ';')(window.React, window.DS);
        } catch (e) {
          console.warn('[ds-loader] could not compile ' + n, e);
        }
      }
    }
    return window.DS;
  }();

  /* Compiles every <script type="text/x-jsx"> on the page, in document order,
     once the components are ready. Inline or src, both work. */
  window.DSReady.then(async function () {
    var tags = Array.prototype.slice.call(document.querySelectorAll('script[type="text/x-jsx"]'));
    for (var i = 0; i < tags.length; i++) {
      var t = tags[i];
      try {
        var raw = t.src ? await (await fetch(t.src)).text() : t.textContent;
        var out = Babel.transform(raw, {
          presets: [['react', {
            runtime: 'classic'
          }]]
        }).code;
        (0, eval)(out);
      } catch (e) {
        console.error('[ds-loader] ' + (t.src || 'inline script'), e);
      }
    }
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ds-loader.js", error: String((e && e.message) || e) }); }

// ui_kits/phone/Phone.jsx
try { (() => {
/* Farmstand 1959 — the phone surface. Four tabs, same components as the site. */
function Phone() {
  const {
    SiteHeader,
    TabBar,
    Badge,
    Button,
    SectionHeading,
    ProduceRow,
    Marquee,
    EventCard,
    SeedPacket,
    GrowerCard,
    Card,
    QuantityStepper,
    Input,
    Select,
    Choice,
    BrandTag,
    Rule,
    StatBlock
  } = window.DS;
  const [tab, setTab] = React.useState('Today');
  const [qty, setQty] = React.useState(2);
  const [list, setList] = React.useState(true);
  const pad = {
    padding: 'var(--sp-5) var(--sp-4) var(--sp-6)'
  };
  const views = {
    Today: /*#__PURE__*/React.createElement("div", {
      style: pad
    }, /*#__PURE__*/React.createElement(Badge, {
      status: "open"
    }, "Open today \xB7 9 to sold out"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-script)',
        fontSize: 'var(--fs-script-lg)',
        lineHeight: 1,
        color: 'var(--chili-500)',
        margin: '14px 0 4px'
      }
    }, "Peaches are in"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-label-lg)',
        fontWeight: 'var(--fw-display)',
        letterSpacing: 'var(--track-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "Picked this morning"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--sp-2)',
        margin: 'var(--sp-5) 0'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      onClick: () => setTab('Shelf')
    }, "What's on the shelf"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => setTab('Visit')
    }, "Directions")), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: 'var(--sp-4) 0 var(--sp-2)'
      }
    }, /*#__PURE__*/React.createElement(ProduceRow, {
      item: "Peaches",
      grower: "Salt Branch Orchard",
      town: "Celina",
      miles: 14,
      price: "$4.50",
      unit: "lb"
    }), /*#__PURE__*/React.createElement(ProduceRow, {
      item: "Eggs",
      grower: "Wolf Creek",
      town: "Blue Ridge",
      miles: 3,
      price: "$7.00",
      unit: "dozen"
    }), /*#__PURE__*/React.createElement(ProduceRow, {
      item: "Honey",
      grower: "Pilot Grove Apiary",
      town: "Van Alstyne",
      miles: 19,
      soldOut: true,
      last: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: 'var(--sp-5) 0'
      }
    }, /*#__PURE__*/React.createElement(Marquee, {
      heading: "Tonight",
      lines: ['Dance under the stars', 'Gates at six']
    })), /*#__PURE__*/React.createElement(EventCard, {
      month: "SEP",
      day: "26",
      name: "Fall harvest supper",
      time: "6pm",
      blurb: "One long table.",
      status: "soldout",
      statusLabel: "Sold out"
    })),
    Shelf: /*#__PURE__*/React.createElement("div", {
      style: pad
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Today",
      title: "On the shelf"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
        gap: 'var(--sp-3)',
        margin: 'var(--sp-4) 0'
      }
    }, /*#__PURE__*/React.createElement(SeedPacket, {
      name: "Texas tomato",
      illustration: "../../assets/ill/basket.png",
      price: "$3.25"
    }), /*#__PURE__*/React.createElement(SeedPacket, {
      name: "Cowboy chili pepper",
      illustration: "../../assets/ill/chili.png",
      price: "$2.00",
      accent: "chili"
    })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-display-sm)',
        fontWeight: 'var(--fw-display-bold)',
        letterSpacing: 'var(--track-caps)',
        textTransform: 'uppercase',
        color: 'var(--denim-500)'
      }
    }, "Peaches"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-label)',
        fontSize: 'var(--fs-label-sm)',
        letterSpacing: 'var(--track-label)',
        textTransform: 'uppercase',
        color: 'var(--text-faint)',
        margin: '5px 0 12px'
      }
    }, "Salt Branch Orchard \xB7 14 miles"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--sp-3)'
      }
    }, /*#__PURE__*/React.createElement(QuantityStepper, {
      value: qty,
      max: 12,
      unit: "lb",
      onChange: setQty
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-display-sm)',
        fontWeight: 'var(--fw-display-bold)',
        color: 'var(--chili-500)'
      }
    }, "$4.50")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--sp-4)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      style: {
        width: '100%'
      }
    }, "Hold at the counter")))),
    Growers: /*#__PURE__*/React.createElement("div", {
      style: pad
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Growers",
      title: "All of them named"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--sp-3)',
        margin: 'var(--sp-4) 0'
      }
    }, /*#__PURE__*/React.createElement(GrowerCard, {
      name: "Salt Branch Orchard",
      town: "Celina",
      miles: 14,
      products: ['Peaches', 'Blackberries']
    }), /*#__PURE__*/React.createElement(GrowerCard, {
      name: "Wolf Creek",
      town: "Blue Ridge",
      miles: 3,
      products: ['Eggs']
    }), /*#__PURE__*/React.createElement(GrowerCard, {
      name: "Pilot Grove Apiary",
      town: "Van Alstyne",
      miles: 19,
      products: ['Honey', 'Beeswax']
    })), /*#__PURE__*/React.createElement(StatBlock, {
      figure: "18",
      label: "North Texas growers"
    })),
    Visit: /*#__PURE__*/React.createElement("div", {
      style: pad
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Visit",
      title: "Come out to the place"
    }), /*#__PURE__*/React.createElement(Card, {
      style: {
        margin: 'var(--sp-4) 0'
      }
    }, [['Saturday', '9 to 4'], ['Sunday', '10 to 2'], ['Mon–Fri', 'Closed']].map(([d, h], i, a) => /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '9px 0',
        borderBottom: i === a.length - 1 ? 'none' : 'var(--border-hair) solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-body)',
        fontWeight: 'var(--fw-display)',
        color: 'var(--denim-500)'
      }
    }, d), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--fs-body)',
        color: h === 'Closed' ? 'var(--tin-700)' : 'var(--text-body)'
      }
    }, h)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--sp-3)'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Your name",
      placeholder: "Taylor Nixon"
    }), /*#__PURE__*/React.createElement(Select, {
      label: "What did you have in mind",
      options: ['A supper', 'A market booth', 'Something else']
    }), /*#__PURE__*/React.createElement(Choice, {
      label: "Send me the week's shelf list",
      description: "One email, Thursday evening.",
      checked: list,
      onChange: () => setList(!list)
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm"
    }, "Send it")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 'var(--sp-6)'
      }
    }, /*#__PURE__*/React.createElement(BrandTag, {
      tone: "denim",
      lines: ['Thank you', 'for supporting', 'real Texas']
    })))
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '390px',
      height: '844px',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-page)',
      border: 'var(--border-hair) solid var(--border-hairline)',
      boxShadow: 'var(--shadow-lift)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    items: [],
    status: "Open \xB7 9 to 4",
    sticky: true,
    style: {
      padding: '12px var(--sp-4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, views[tab]), /*#__PURE__*/React.createElement(TabBar, {
    items: ['Today', 'Shelf', 'Growers', 'Visit'],
    active: tab,
    onSelect: setTab
  }));
}
window.FSKit = Object.assign(window.FSKit || {}, {
  Phone
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/phone/Phone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Login.jsx
try { (() => {
/* Farmstand 1959 — vendor sign-in. A six-digit code to the address on the
   application. Two steps, one field each, painted-board register. */
function Login({
  onIn
}) {
  const {
    Button,
    Input,
    Seal
  } = window.DS;
  const [step, setStep] = React.useState('email');
  const [email, setEmail] = React.useState('');
  const [code, setCode] = React.useState('');
  const [expected, setExpected] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [busy, setBusy] = React.useState(false);
  const caps = {
    fontFamily: 'var(--font-label)',
    fontSize: 'var(--fs-label-sm)',
    letterSpacing: 'var(--track-label)',
    textTransform: 'uppercase'
  };
  const hand = {
    fontFamily: 'var(--font-hand)',
    fontSize: 'var(--fs-hand-md)',
    lineHeight: 1.3,
    color: 'var(--tin-700)'
  };
  const sendCode = () => {
    if (!email || email.indexOf('@') < 0) {
      setError('Use the email on your application.');
      return;
    }
    setError(null);
    setBusy(true);
    window.PortalStore.requestCode(email).then(r => {
      setExpected(r.code || null);
      setStep('code');
      setBusy(false);
    });
  };
  const signIn = () => {
    setError(null);
    setBusy(true);
    window.PortalStore.verify(email, code, expected).then(s => {
      setBusy(false);
      onIn(s);
    }).catch(e => {
      setError(e.message);
      setBusy(false);
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 480px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--denim-700)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'var(--denim-700)',
      backgroundImage: 'var(--texture-canvas)',
      backgroundSize: 'var(--texture-canvas-size)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/stamp-round-alpha.png",
    alt: "",
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: '420px',
      opacity: 0.14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: 'var(--sp-8)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '34px',
      lineHeight: 1,
      color: 'var(--paper-100)'
    }
  }, "Farmstand"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      fontWeight: 'var(--fw-display)',
      letterSpacing: '.05em',
      color: 'var(--paper-100)'
    }
  }, "1959")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...caps,
      color: 'var(--chili-300)'
    }
  }, "Vendor portal"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-lg)',
      fontWeight: 'var(--fw-display-bold)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--paper-100)',
      margin: 'var(--sp-3) 0 var(--sp-4)',
      maxWidth: '22ch',
      lineHeight: 'var(--lh-display)'
    }
  }, "Your corner of the stand"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body)',
      fontWeight: 300,
      lineHeight: 'var(--lh-body)',
      color: 'var(--paper-300)',
      maxWidth: '38ch'
    }
  }, "Restock requests, what we owe you, and every event before it goes public."), /*#__PURE__*/React.createElement("span", {
    style: {
      ...hand,
      color: 'var(--paper-300)',
      display: 'block',
      marginTop: 'var(--sp-5)'
    }
  }, "You hear first. That is the point of it.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: 'var(--paper-100)',
      backgroundImage: 'var(--texture-paper)',
      backgroundSize: 'var(--texture-paper-size)',
      padding: 'var(--sp-8) var(--sp-7)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '340px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Seal, {
    name: "stamp-round",
    width: 82,
    basePath: "../../assets/"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-md)',
      fontWeight: 'var(--fw-display-bold)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--denim-500)',
      margin: 'var(--sp-5) 0 var(--sp-2)'
    }
  }, step === 'email' ? 'Sign in' : 'Check your email'), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--sp-6)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 300,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, step === 'email' ? 'We send a six-digit code to the address on your application. No password to remember.' : 'Six digits, sent to ' + email + '. It is good for fifteen minutes.'), step === 'email' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "dale@crookedcreekhoney.com",
    onKeyDown: e => e.key === 'Enter' && sendCode()
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: sendCode,
    disabled: busy
  }, busy ? 'Sending…' : 'Send my code'))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
    label: "Six-digit code",
    value: code,
    inputMode: "numeric",
    maxLength: 6,
    onChange: e => setCode(e.target.value.replace(/\D/g, '')),
    onKeyDown: e => e.key === 'Enter' && signIn(),
    style: {
      letterSpacing: '.3em'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-5)',
      display: 'flex',
      gap: 'var(--sp-3)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: signIn,
    disabled: busy || code.length < 6
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => {
      setStep('email');
      setCode('');
      setError(null);
    }
  }, "Different email")), expected ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-6)',
      padding: 'var(--sp-4)',
      border: 'var(--border-hair) dashed var(--border-muted)',
      borderRadius: 'var(--radius-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...caps,
      color: 'var(--chili-500)'
    }
  }, "No email is sent yet"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '7px 0 0',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 300,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, "Your code is ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-lg)',
      letterSpacing: '.12em'
    }
  }, expected))) : null), error ? /*#__PURE__*/React.createElement("div", {
    style: {
      ...caps,
      color: 'var(--chili-500)',
      marginTop: 'var(--sp-4)'
    }
  }, error) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-8)',
      paddingTop: 'var(--sp-5)',
      borderTop: 'var(--border-hair) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...caps,
      color: 'var(--text-faint)'
    }
  }, "Not a vendor yet?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "../website/index.html",
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, "Apply to sell at the stand"))))));
}
window.FSPortal = Object.assign(window.FSPortal || {}, {
  Login
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Portal.jsx
try { (() => {
/* Farmstand 1959 — portal shell. Header, the three panels, sign-out. */
function Portal({
  session,
  onOut,
  refresh
}) {
  const {
    Inbox,
    Invitations,
    Shelf
  } = window.FSPortal;
  const {
    Button,
    Badge
  } = window.DS;
  const [tab, setTab] = React.useState('Inbox');
  const wrap = {
    maxWidth: '980px',
    margin: '0 auto',
    padding: '0 var(--sp-7)'
  };
  const caps = {
    fontFamily: 'var(--font-label)',
    fontSize: 'var(--fs-label-sm)',
    letterSpacing: 'var(--track-label)',
    textTransform: 'uppercase'
  };
  const v = session.vendor;
  const waiting = session.messages.filter(m => m.needsReply && m.status !== 'Replied').length;
  const invites = session.invitations.filter(i => i.rsvp === 'Awaiting reply').length;
  const TABS = [{
    name: 'Inbox',
    count: waiting,
    sub: 'Updates and requests'
  }, {
    name: 'Invitations',
    count: invites,
    sub: 'Events before they go public'
  }, {
    name: 'Your shelf',
    count: 0,
    sub: 'Products, pricing, your record'
  }];
  const Panel = tab === 'Inbox' ? Inbox : tab === 'Invitations' ? Invitations : Shelf;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      backgroundColor: 'var(--paper-100)',
      backgroundImage: 'var(--texture-paper)',
      backgroundSize: 'var(--texture-paper-size)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--denim-700)',
      color: 'var(--paper-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sp-5)',
      padding: 'var(--sp-4) var(--sp-7)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '28px',
      lineHeight: 1
    }
  }, "Farmstand"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '19px',
      fontWeight: 'var(--fw-display)',
      letterSpacing: '.05em'
    }
  }, "1959"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...caps,
      color: 'var(--chili-300)',
      marginLeft: 'var(--sp-4)'
    }
  }, "Vendor portal")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...caps,
      color: 'var(--paper-300)'
    }
  }, v.brand), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOut();
    },
    style: {
      ...caps,
      color: 'var(--paper-300)'
    }
  }, "Sign out")))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '10px',
      backgroundImage: 'var(--pattern-ticking)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper-000)',
      borderBottom: 'var(--border-hair) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: 'var(--sp-7) var(--sp-7) var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--sp-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...caps,
      color: 'var(--chili-500)'
    }
  }, v.town, ", Texas \xB7 ", v.id), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-lg)',
      fontWeight: 'var(--fw-display-bold)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--denim-500)',
      margin: 'var(--sp-3) 0 var(--sp-3)',
      lineHeight: 'var(--lh-display)'
    }
  }, v.brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: "open"
  }, v.stage), /*#__PURE__*/React.createElement("span", {
    style: {
      ...caps,
      color: 'var(--text-faint)'
    }
  }, "On the shelf since ", v.since))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-hand)',
      fontSize: 'var(--fs-hand-md)',
      color: 'var(--tin-700)',
      maxWidth: '26ch',
      textAlign: 'right'
    }
  }, waiting || invites ? 'A couple of things need you.' : 'Nothing needs you today.')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-6)',
      marginTop: 'var(--sp-7)',
      flexWrap: 'wrap'
    }
  }, TABS.map(t => {
    const on = tab === t.name;
    return /*#__PURE__*/React.createElement("div", {
      key: t.name,
      onClick: () => setTab(t.name),
      style: {
        cursor: 'pointer',
        paddingBottom: 'var(--sp-3)',
        borderBottom: '3px solid ' + (on ? 'var(--chili-500)' : 'transparent')
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: '8px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-display-sm)',
        fontWeight: 'var(--fw-display-bold)',
        letterSpacing: 'var(--track-caps)',
        textTransform: 'uppercase',
        color: on ? 'var(--denim-500)' : 'var(--tin-700)'
      }
    }, t.name), t.count ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-label)',
        fontSize: '10px',
        fontWeight: 700,
        letterSpacing: '.04em',
        background: 'var(--chili-500)',
        color: 'var(--paper-100)',
        borderRadius: '999px',
        minWidth: '17px',
        height: '17px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 5px'
      }
    }, t.count) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        ...caps,
        color: 'var(--text-faint)',
        marginTop: '4px'
      }
    }, t.sub));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 'var(--sp-7)',
      paddingBottom: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    session: session,
    refresh: refresh
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--denim-700)',
      color: 'var(--paper-300)',
      padding: 'var(--sp-6) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--sp-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...caps
    }
  }, "Farmstand 1959 \xB7 CR 669, Blue Ridge TX"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...caps
    }
  }, "vendors@farmstand1959.com \xB7 We answer on Mondays"))));
}
window.FSPortal = Object.assign(window.FSPortal || {}, {
  Portal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Portal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/PortalPanels.jsx
try { (() => {
/* Farmstand 1959 — portal panels. Inbox, invitations, the shelf. */

function KindTag({
  kind
}) {
  const tone = {
    Restock: ['var(--sage-100)', 'var(--sage-700)'],
    Request: ['var(--wheat-100)', 'var(--wheat-700)'],
    Payment: ['var(--denim-100)', 'var(--denim-700)'],
    Update: ['var(--paper-200)', 'var(--denim-500)'],
    Notice: ['var(--paper-200)', 'var(--tin-700)']
  }[kind] || ['var(--paper-200)', 'var(--tin-700)'];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      background: tone[0],
      color: tone[1],
      padding: '4px 8px',
      borderRadius: 'var(--radius-control)'
    }
  }, kind);
}
function Inbox({
  session,
  refresh
}) {
  const {
    Button,
    Card,
    Rule
  } = window.DS;
  const [open, setOpen] = React.useState(null);
  const [draft, setDraft] = React.useState('');
  const caps = {
    fontFamily: 'var(--font-label)',
    fontSize: 'var(--fs-label-sm)',
    letterSpacing: 'var(--track-label)',
    textTransform: 'uppercase'
  };
  const hand = {
    fontFamily: 'var(--font-hand)',
    fontSize: 'var(--fs-hand-sm)',
    color: 'var(--tin-700)'
  };
  const msgs = session.messages;
  const needs = msgs.filter(m => m.needsReply && m.status !== 'Replied');
  return /*#__PURE__*/React.createElement("div", null, needs.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--chili-500)',
      color: 'var(--paper-100)',
      padding: 'var(--sp-4) var(--sp-5)',
      borderRadius: 'var(--radius-card)',
      marginBottom: 'var(--sp-5)',
      display: 'flex',
      gap: 'var(--sp-4)',
      alignItems: 'baseline',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...caps,
      fontSize: 'var(--fs-label)'
    }
  }, needs.length, " waiting on you"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 300,
      opacity: 0.9
    }
  }, needs.map(m => m.subject).join(' · '))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)'
    }
  }, msgs.map(m => {
    const isOpen = open === m.id;
    const answered = m.status === 'Replied';
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      style: {
        background: 'var(--paper-000)',
        border: 'var(--border-hair) solid ' + (m.needsReply && !answered ? 'var(--chili-300)' : 'var(--border-hairline)'),
        borderRadius: 'var(--radius-card)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => {
        setOpen(isOpen ? null : m.id);
        setDraft(m.reply || '');
        if (!isOpen && m.status === 'Sent' && !m.needsReply) {
          window.PortalStore.markRead(m.id);
          refresh();
        }
      },
      style: {
        padding: 'var(--sp-4) var(--sp-5)',
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: '92px minmax(0,1fr) auto',
        gap: 'var(--sp-4)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(KindTag, {
      kind: m.kind
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-body-lg)',
        fontWeight: 'var(--fw-display)',
        color: 'var(--denim-500)'
      }
    }, m.subject), !isOpen ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 300,
        color: 'var(--text-faint)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        marginTop: '3px'
      }
    }, m.body) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...caps,
        color: answered ? 'var(--sage-700)' : m.needsReply ? 'var(--chili-500)' : 'var(--text-faint)'
      }
    }, answered ? 'Replied' : m.needsReply ? 'Reply by ' + m.replyBy.slice(5) : m.status), /*#__PURE__*/React.createElement("div", {
      style: {
        ...caps,
        color: 'var(--text-faint)',
        marginTop: '3px'
      }
    }, m.sent.slice(5)))), isOpen ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 var(--sp-5) var(--sp-5)'
      }
    }, /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 'var(--sp-4) 0 0',
        fontSize: 'var(--fs-body)',
        fontWeight: 300,
        lineHeight: 'var(--lh-body)',
        maxWidth: '62ch'
      }
    }, m.body), answered ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--sp-5)',
        paddingLeft: 'var(--sp-4)',
        borderLeft: '2px solid var(--sage-500)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...caps,
        color: 'var(--sage-700)'
      }
    }, "You replied"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '7px 0 0',
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 300,
        lineHeight: 'var(--lh-body)'
      }
    }, m.reply)) : m.needsReply ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--sp-5)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...caps,
        color: 'var(--text-faint)',
        marginBottom: 'var(--sp-3)'
      }
    }, "Your reply"), /*#__PURE__*/React.createElement("textarea", {
      value: draft,
      onChange: e => setDraft(e.target.value),
      rows: 3,
      placeholder: "Thirty-six is fine. I will bring them Friday.",
      style: {
        width: '100%',
        boxSizing: 'border-box',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-body)',
        color: 'var(--text-body)',
        background: 'var(--paper-100)',
        border: 'var(--border-hair) solid var(--border-muted)',
        borderRadius: 'var(--radius-control)',
        padding: '11px 13px',
        outline: 'none',
        resize: 'vertical'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--sp-4)',
        display: 'flex',
        gap: 'var(--sp-3)',
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      disabled: !draft.trim(),
      onClick: () => {
        window.PortalStore.reply(m.id, draft.trim());
        refresh();
        setOpen(null);
      }
    }, "Send reply"), /*#__PURE__*/React.createElement("span", {
      style: hand
    }, "Goes straight to whoever asked."))) : null) : null);
  })));
}
function Invitations({
  session,
  refresh
}) {
  const {
    Button,
    Rule,
    Badge
  } = window.DS;
  const caps = {
    fontFamily: 'var(--font-label)',
    fontSize: 'var(--fs-label-sm)',
    letterSpacing: 'var(--track-label)',
    textTransform: 'uppercase'
  };
  const hand = {
    fontFamily: 'var(--font-hand)',
    fontSize: 'var(--fs-hand-sm)',
    color: 'var(--tin-700)'
  };
  const [note, setNote] = React.useState({});
  const open = session.invitations.filter(i => i.rsvp === 'Awaiting reply');
  const answered = session.invitations.filter(i => i.rsvp !== 'Awaiting reply');
  const answer = (i, a) => {
    window.PortalStore.rsvp(i.id, a, (note[i.id] || '').trim() || undefined);
    refresh();
  };
  const Row = ({
    i,
    done
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: done ? 'var(--paper-200)' : 'var(--paper-000)',
      border: 'var(--border-hair) solid ' + (done ? 'var(--border-hairline)' : 'var(--denim-300)'),
      borderRadius: 'var(--radius-card)',
      padding: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--sp-4)',
      alignItems: 'baseline',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...caps,
      color: 'var(--chili-500)'
    }
  }, i.involvement), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-md)',
      fontWeight: 'var(--fw-display-bold)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--denim-500)',
      marginTop: '5px',
      lineHeight: 'var(--lh-display)'
    }
  }, i.event), /*#__PURE__*/React.createElement("div", {
    style: {
      ...caps,
      color: 'var(--text-faint)',
      marginTop: '6px'
    }
  }, i.date)), done ? /*#__PURE__*/React.createElement(Badge, {
    status: i.rsvp === 'In' ? 'open' : i.rsvp === 'Maybe' ? 'delay' : 'closed'
  }, i.rsvp === 'In' ? "You're in" : i.rsvp === 'Maybe' ? 'Maybe' : 'Passed') : /*#__PURE__*/React.createElement("div", {
    style: {
      ...caps,
      color: 'var(--denim-500)',
      textAlign: 'right'
    }
  }, "Public ", i.publicOn.slice(5), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--chili-500)'
    }
  }, "You have until ", i.respondBy.slice(5)))), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--sp-4) 0 0',
      fontSize: 'var(--fs-body)',
      fontWeight: 300,
      lineHeight: 'var(--lh-body)',
      maxWidth: '64ch'
    }
  }, i.ask), done ? i.note ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--sp-4) 0 0',
      ...hand
    }
  }, "You said: ", i.note) : null : /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: note[i.id] || '',
    onChange: e => setNote(Object.assign({}, note, {
      [i.id]: e.target.value
    })),
    placeholder: "Anything we should know? (optional)",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-body)',
      background: 'var(--paper-100)',
      border: 'var(--border-hair) solid var(--border-muted)',
      borderRadius: 'var(--radius-control)',
      padding: '10px 12px',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-4)',
      display: 'flex',
      gap: 'var(--sp-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => answer(i, 'In')
  }, "Count me in"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => answer(i, 'Maybe')
  }, "Maybe"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => answer(i, 'Out')
  }, "Not this one"))));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--denim-700)',
      color: 'var(--paper-100)',
      padding: 'var(--sp-5)',
      borderRadius: 'var(--radius-card)',
      marginBottom: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...caps,
      color: 'var(--chili-300)'
    }
  }, "Before anyone else"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '7px 0 0',
      fontSize: 'var(--fs-body)',
      fontWeight: 300,
      lineHeight: 'var(--lh-body)',
      maxWidth: '58ch',
      color: 'var(--paper-300)'
    }
  }, "Vendors see every event here before it is announced. Once it goes public the booths fill up in a week.")), open.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...caps,
      color: 'var(--chili-500)',
      marginBottom: 'var(--sp-4)'
    }
  }, open.length, " waiting on your answer"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)'
    }
  }, open.map(i => /*#__PURE__*/React.createElement(Row, {
    key: i.id,
    i: i
  })))) : null, answered.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...caps,
      color: 'var(--text-faint)',
      margin: 'var(--sp-7) 0 var(--sp-4)'
    }
  }, "Already answered"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)'
    }
  }, answered.map(i => /*#__PURE__*/React.createElement(Row, {
    key: i.id,
    i: i,
    done: true
  })))) : null);
}
function Shelf({
  session
}) {
  const {
    Button,
    Rule,
    Badge
  } = window.DS;
  const v = session.vendor;
  const caps = {
    fontFamily: 'var(--font-label)',
    fontSize: 'var(--fs-label-sm)',
    letterSpacing: 'var(--track-label)',
    textTransform: 'uppercase'
  };
  const hand = {
    fontFamily: 'var(--font-hand)',
    fontSize: 'var(--fs-hand-sm)',
    color: 'var(--tin-700)'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper-000)',
      border: 'var(--border-hair) solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 110px 110px 130px',
      gap: 'var(--sp-4)',
      padding: 'var(--sp-4) var(--sp-5)',
      borderBottom: '2px solid var(--denim-500)'
    }
  }, ['Product', 'Wholesale', 'Retail', 'On the shelf'].map(h => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      ...caps,
      color: 'var(--text-faint)'
    }
  }, h))), v.products.map((p, i, a) => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 110px 110px 130px',
      gap: 'var(--sp-4)',
      padding: 'var(--sp-4) var(--sp-5)',
      alignItems: 'center',
      borderBottom: i === a.length - 1 ? 'none' : 'var(--border-hair) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-display)',
      color: 'var(--denim-500)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-sm)'
    }
  }, p.wholesale), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-sm)'
    }
  }, p.msrp), /*#__PURE__*/React.createElement(Badge, {
    status: p.status === 'On the shelf' ? 'open' : p.status === 'Sold out' ? 'soldout' : 'delay'
  }, p.status)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-5)',
      display: 'flex',
      gap: 'var(--sp-4)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Submit a new product"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Update pricing"), /*#__PURE__*/React.createElement("span", {
    style: hand
  }, "Price changes need two weeks so the cards can be repainted.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-8)',
      background: 'var(--paper-200)',
      backgroundImage: 'var(--texture-canvas)',
      backgroundSize: 'var(--texture-canvas-size)',
      border: 'var(--border-hair) solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...caps,
      color: 'var(--text-faint)'
    }
  }, "Your record"), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0,1fr))',
      gap: 'var(--sp-4) var(--sp-7)',
      marginTop: 'var(--sp-4)'
    }
  }, [['Application', v.id], ['Stage', v.stage], ['On the shelf since', v.since], ['Town', v.town], ['Contact', v.contact], ['Email', v.email], ['Category', v.categories.join(', ')], ['How we work', v.models.join(', ')]].map(([k, val]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--sp-4)',
      paddingBottom: '9px',
      borderBottom: 'var(--border-hair) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...caps,
      color: 'var(--text-faint)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      textAlign: 'right'
    }
  }, val))))));
}
Object.assign(window, {
  KindTag
});
window.FSPortal = Object.assign(window.FSPortal || {}, {
  Inbox,
  Invitations,
  Shelf
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/PortalPanels.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/portal-store.js
try { (() => {
/* Farmstand 1959 — vendor portal store.
 *
 * Sign-in is a six-digit code emailed to the address on the vendor's
 * application. No passwords: vendors sign in a few times a season and a
 * password is one more thing to lose.
 *
 * PRODUCTION: point ENDPOINT at the same serverless function the application
 * form uses. It needs three routes — request a code, verify it, and read/write
 * that vendor's rows. The Notion token stays server-side. See NOTION.md.
 *
 * UNTIL THEN: seeded from the demo vendor below and persisted to localStorage,
 * so replies and RSVPs survive a reload and the flow is genuinely reviewable.
 */
window.PortalStore = function () {
  var ENDPOINT = null;
  var DS = {
    vendors: '79d5bb90-edd5-4d94-b235-cda24f82d57e',
    messages: 'dec5b832-e0bc-4184-8975-cb7df264f589',
    invitations: '114c92fe-5047-4bc2-9695-58fb40aaa9a6'
  };
  var KEY = 'fs1959.portal.session';
  var SEED = {
    vendor: {
      id: 'VEN-004',
      brand: 'Crooked Creek Honey Farm',
      contact: 'Dale Whitaker',
      email: 'dale@crookedcreekhoney.com',
      town: 'Anna',
      stage: 'On the shelf',
      since: 'March 2026',
      categories: ['Pantry + Table'],
      models: ['Wholesale', 'Market + pop-up'],
      products: [{
        name: 'Wildflower honey, 12oz',
        wholesale: '$6.50',
        msrp: '$12.00',
        status: 'On the shelf'
      }, {
        name: 'Wildflower honey, 24oz',
        wholesale: '$11.00',
        msrp: '$19.00',
        status: 'On the shelf'
      }, {
        name: 'Comb honey, boxed',
        wholesale: '$9.00',
        msrp: '$16.00',
        status: 'Sold out'
      }, {
        name: 'Creamed honey, 8oz',
        wholesale: '$5.50',
        msrp: '$10.00',
        status: 'Seasonal'
      }]
    },
    messages: [{
      id: 'm1',
      kind: 'Restock',
      subject: 'The 12oz went before ten again',
      sent: '2026-08-11',
      body: 'Saturday cleared every 12oz jar by ten in the morning. If you can bring thirty-six next week instead of twenty-four we will take them. Same wholesale.',
      needsReply: true,
      replyBy: '2026-08-15',
      status: 'Sent'
    }, {
      id: 'm2',
      kind: 'Request',
      subject: 'Photograph for the grower wall',
      sent: '2026-08-07',
      body: 'We are shooting portraits of every grower for the wall by the register and the website. Twenty minutes, at your place, any morning that suits. Hands in frame, at work.',
      needsReply: true,
      replyBy: '2026-08-20',
      status: 'Sent'
    }, {
      id: 'm3',
      kind: 'Payment',
      subject: 'July settled',
      sent: '2026-08-03',
      body: 'July paid out Friday — $418.50 for 63 jars. Statement is attached to this record in our books; ask if you want a copy.',
      needsReply: false,
      status: 'Read'
    }, {
      id: 'm4',
      kind: 'Update',
      subject: 'New price cards on the shelf',
      sent: '2026-07-28',
      body: 'Every price card is hand-painted now and carries the grower name and the town. Yours reads "Crooked Creek Honey Farm, Anna, 11 miles". Tell us if you would rather it read something else.',
      needsReply: false,
      status: 'Read'
    }, {
      id: 'm5',
      kind: 'Notice',
      subject: 'Closed the first Sunday in September',
      sent: '2026-07-19',
      body: 'We are closed Sunday Sep 7 for the hall floor. No delivery needed that weekend.',
      needsReply: false,
      status: 'Read'
    }],
    invitations: [{
      id: 'i1',
      event: 'Sub-Zero Wolf supper',
      date: 'Friday Sep 19',
      involvement: 'Tasting or demo',
      ask: 'A honey tasting alongside the dessert course. Six jars, a board, and you talking for five minutes about the wildflower season. We cover the jars.',
      respondBy: '2026-08-22',
      publicOn: '2026-08-29',
      rsvp: 'Awaiting reply'
    }, {
      id: 'i2',
      event: 'Chili cook-off',
      date: 'Saturday Oct 18',
      involvement: 'Booth',
      ask: 'A booth on the south side, next to the bread. Twelve pots means a lot of people looking for something sweet afterwards.',
      respondBy: '2026-09-15',
      publicOn: '2026-09-20',
      rsvp: 'Awaiting reply'
    }, {
      id: 'i3',
      event: 'Pecan day',
      date: 'Saturday Oct 4',
      involvement: 'Product on the shelf',
      ask: 'Comb honey next to the cracked pecans. No booth needed, we just want the stock.',
      respondBy: '2026-09-08',
      publicOn: '2026-09-12',
      rsvp: 'In',
      note: 'Bringing 24 boxes of comb.'
    }, {
      id: 'i4',
      event: 'Bluebonnet seed sale',
      date: 'Saturday Nov 1',
      involvement: 'Just come along',
      ask: 'No ask at all — the bees and the bluebonnets belong in the same room. Come and stand near the seed table.',
      respondBy: '2026-10-10',
      publicOn: '2026-10-18',
      rsvp: 'Out',
      note: 'Away that weekend, sorry.'
    }]
  };
  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY));
      if (s && s.vendor) return s;
    } catch (e) {}
    return null;
  }
  function save(s) {
    try {
      localStorage.setItem(KEY, JSON.stringify(s));
    } catch (e) {}
    return s;
  }
  function fresh() {
    return {
      vendor: SEED.vendor,
      messages: SEED.messages.map(clone),
      invitations: SEED.invitations.map(clone)
    };
  }
  function clone(o) {
    return JSON.parse(JSON.stringify(o));
  }

  /* A code is six digits. In the demo it is shown on screen instead of emailed. */
  function requestCode(email) {
    var code = String(Math.floor(100000 + Math.random() * 900000));
    if (!ENDPOINT) return Promise.resolve({
      code: code,
      demo: true
    });
    return fetch(ENDPOINT + '/code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
    }).then(function (r) {
      return r.json();
    });
  }
  function verify(email, entered, expected) {
    if (!ENDPOINT) {
      if (entered !== expected) return Promise.reject(new Error('That code does not match. Check the six digits.'));
      var s = load() || fresh();
      s.vendor = Object.assign({}, s.vendor, {
        email: email
      });
      return Promise.resolve(save(s));
    }
    return fetch(ENDPOINT + '/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        code: entered
      })
    }).then(function (r) {
      if (!r.ok) throw new Error('That code does not match. Check the six digits.');
      return r.json();
    }).then(save);
  }
  function session() {
    return load();
  }
  function signOut() {
    var s = load();
    if (s) {
      s.signedOut = true;
      save(s);
    }
  }
  function update(kind, id, patch) {
    var s = load();
    if (!s) return null;
    s[kind] = s[kind].map(function (r) {
      return r.id === id ? Object.assign({}, r, patch) : r;
    });
    save(s);
    if (ENDPOINT) {
      fetch(ENDPOINT + '/' + kind + '/' + id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(patch)
      }).catch(function () {});
    }
    return s;
  }
  return {
    requestCode: requestCode,
    verify: verify,
    session: session,
    signOut: signOut,
    reply: function (id, text) {
      return update('messages', id, {
        status: 'Replied',
        reply: text,
        repliedAt: new Date().toISOString()
      });
    },
    markRead: function (id) {
      return update('messages', id, {
        status: 'Read'
      });
    },
    rsvp: function (id, answer, note) {
      return update('invitations', id, {
        rsvp: answer,
        note: note,
        respondedAt: new Date().toISOString()
      });
    },
    dataSources: DS,
    live: function () {
      return !!ENDPOINT;
    }
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/portal-store.js", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
/* Farmstand 1959 — about. The stand sits on TXM Ranch; this page says so
   plainly and puts the ecosystem it belongs to in one place. */
function About({
  go
}) {
  const {
    SiteHeader,
    SiteFooter,
    Button,
    Seal,
    SectionHeading,
    PhotoSlot,
    StatementBlock,
    Rule,
    BrandTag
  } = window.DS;
  const wrap = {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 var(--sp-7)'
  };
  const paper = {
    backgroundColor: 'var(--paper-100)',
    backgroundImage: 'var(--texture-paper)',
    backgroundSize: 'var(--texture-paper-size)'
  };
  const canvas = {
    backgroundColor: 'var(--paper-200)',
    backgroundImage: 'var(--texture-canvas)',
    backgroundSize: 'var(--texture-canvas-size)'
  };
  const hand = {
    fontFamily: 'var(--font-hand)',
    fontSize: 'var(--fs-hand-md)',
    lineHeight: 1.3,
    color: 'var(--tin-700)'
  };
  const caps = {
    fontFamily: 'var(--font-label)',
    fontSize: 'var(--fs-label-sm)',
    letterSpacing: 'var(--track-label)',
    textTransform: 'uppercase'
  };
  const body = {
    fontSize: 'var(--fs-body-lg)',
    fontWeight: 300,
    lineHeight: 'var(--lh-body)',
    color: 'var(--text-body)'
  };
  const NAV = ['Howdy y\u2019all', 'The stand', 'Shelf', 'Growers', 'Events', {
    label: 'Yeehaw',
    accent: true
  }, 'Visit'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    items: NAV,
    active: "Howdy y\u2019all",
    status: "Open today \xB7 9 to 4",
    onNavigate: go
  }), /*#__PURE__*/React.createElement(PhotoSlot, {
    ratio: "16 / 6",
    strong: true,
    note: "TXM RANCH FROM THE GATE \u2014 wide, fence line and sky, the stand small in frame"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-protect)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      width: '100%',
      paddingBottom: 'var(--sp-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...caps,
      color: 'var(--chili-300)'
    }
  }, "Blue Ridge, Texas"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'var(--fs-script-xl)',
      lineHeight: 1,
      color: 'var(--paper-100)',
      margin: '14px 0 4px'
    }
  }, "Howdy y\u2019all"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-sm)',
      fontWeight: 'var(--fw-display)',
      letterSpacing: 'var(--track-caps)',
      textTransform: 'uppercase',
      color: 'var(--paper-300)'
    }
  }, "We are on TXM Ranch")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...paper,
      paddingTop: 'var(--sp-9)',
      paddingBottom: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 300px',
      gap: 'var(--sp-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...caps,
      color: 'var(--chili-500)'
    }
  }, "Our story"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...body,
      fontSize: 'var(--fs-display-sm)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-display)',
      color: 'var(--denim-500)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--track-display)',
      margin: 'var(--sp-4) 0 var(--sp-5)',
      maxWidth: '30ch'
    }
  }, "A gathering place on a working ranch"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...body,
      margin: 0,
      maxWidth: 'var(--measure)'
    }
  }, "Farmstand 1959 is a Texas Made Texas Modern gathering place rooted in ranch life, fresh food, and good company."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...body,
      margin: 'var(--sp-5) 0 0',
      maxWidth: 'var(--measure)'
    }
  }, "We bring together locally grown produce, homemade goods, Texas makers, music, and seasonal traditions\u2014creating a place where people can slow down, connect, and enjoy the simple things."), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("p", {
    style: {
      ...body,
      margin: 'var(--sp-5) 0 0',
      maxWidth: 'var(--measure)'
    }
  }, "The stand is not a shop that happens to sit near a farm. It is on the ranch. The tomatoes on the table were grown a few hundred yards from where you pay for them, the hall behind it was built to be used, and the people who run both live here."), /*#__PURE__*/React.createElement("span", {
    style: {
      ...hand,
      display: 'block',
      marginTop: 'var(--sp-5)',
      color: 'var(--denim-500)',
      fontSize: 'var(--fs-hand-lg)'
    }
  }, "Come as you are. Stay a while.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/lockup-endorsed-alpha.png",
    alt: "Farmstand 1959, a Texas Made Texas Modern establishment from TXM Ranch",
    style: {
      width: '100%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement(PhotoSlot, {
    ratio: "4 / 5",
    note: "THE FAMILY \u2014 on the porch of the stand, no posing, morning",
    style: {
      width: '100%'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '14px',
      backgroundImage: 'var(--pattern-ticking)'
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...canvas,
      paddingTop: 'var(--sp-9)',
      paddingBottom: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Used with intention",
    title: "A farm stand, a dance hall, a place to hold things",
    lede: "The same room does several jobs across a week. That is the point of building it this way."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--sp-6)',
      marginTop: 'var(--sp-7)'
    }
  }, [['The stand', 'Produce, eggs, dairy, honey and pantry goods from this ranch and from growers within about twenty miles. Named on every card.', 'THE TABLES AT OPENING — crates full, nobody in shot yet'], ['The hall', 'Open mic nights while people shop, dances, suppers at one long table, and private bookings.', 'THE FLOOR MID-DANCE — from the corner, string lights in frame'], ['The yard', 'Markets, tastings, maker days, and partner events under the trees.', 'THE YARD ON A MARKET DAY — trucks, tents, people walking through']].map(([t, d, note]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    ratio: "4 / 3",
    note: note
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-sm)',
      fontWeight: 'var(--fw-display-bold)',
      letterSpacing: 'var(--track-caps)',
      textTransform: 'uppercase',
      color: 'var(--denim-500)',
      marginTop: 'var(--sp-4)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)',
      fontWeight: 300,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)',
      margin: 'var(--sp-3) 0 0'
    }
  }, d)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--denim-700)',
      paddingTop: 'var(--sp-9)',
      paddingBottom: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--sp-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...caps,
      color: 'var(--chili-300)'
    }
  }, "Who we belong to"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-lg)',
      fontWeight: 'var(--fw-display-bold)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--paper-100)',
      margin: 'var(--sp-3) 0 var(--sp-5)',
      lineHeight: 'var(--lh-display)'
    }
  }, "Part of Texas Made Texas Modern"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 300,
      lineHeight: 'var(--lh-body)',
      color: 'var(--paper-300)',
      margin: 0,
      maxWidth: '46ch'
    }
  }, "Farmstand 1959 is one of several things the Texas Made Texas Modern people run. The stand hosts events for the others, and they send makers and music our way."), /*#__PURE__*/React.createElement("span", {
    style: {
      ...hand,
      color: 'var(--paper-300)',
      display: 'block',
      marginTop: 'var(--sp-5)'
    }
  }, "Different names, same porch.")), /*#__PURE__*/React.createElement("div", null, [['TXM Ranch', 'The working ranch this all sits on. Where the tomatoes and eggs come from.'], ['Texas Made Texas Modern', 'The parent. Farmstand 1959 is a Texas Made Texas Modern establishment.'], ['The Gold Star Collective', 'Events and gatherings held here.'], ['Barn 314', 'Events and gatherings held here.']].map(([n, d], i, a) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      padding: 'var(--sp-4) 0',
      borderBottom: i === a.length - 1 ? 'none' : 'var(--border-hair) solid rgba(240,235,220,.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 'var(--fw-display)',
      color: 'var(--paper-100)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 300,
      lineHeight: 'var(--lh-body)',
      color: 'var(--paper-300)',
      marginTop: '5px'
    }
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-5)',
      display: 'flex',
      gap: 'var(--sp-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go('Events')
  }, "What's on"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    onClick: () => go('Vendors')
  }, "Sell at the stand")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '20px',
      backgroundImage: 'var(--pattern-checker)',
      backgroundSize: 'var(--pattern-checker-size)'
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...paper,
      paddingTop: 'var(--sp-9)',
      paddingBottom: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Seal, {
    name: "stamp-round",
    width: 130,
    basePath: "../../assets/"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-6)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(StatementBlock, {
    lines: ['A PLACE TO GATHER. GOOD FOOD.', 'GOOD PEOPLE. REAL TEXAS.', 'GROWN WITH PURPOSE.', 'MADE TO BE REMEMBERED.']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'var(--fs-script-lg)',
      color: 'var(--chili-500)',
      marginTop: 'var(--sp-6)',
      lineHeight: 1
    }
  }, "With love from Texas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-4)',
      justifyContent: 'center',
      marginTop: 'var(--sp-7)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(BrandTag, {
    lines: ['Grown', 'on', 'TXM Ranch']
  }), /*#__PURE__*/React.createElement(BrandTag, {
    tone: "denim",
    lines: ['Thank you', 'for supporting', 'REAL TEXANS']
  })))), /*#__PURE__*/React.createElement(SiteFooter, {
    columns: [{
      title: 'Visit',
      items: ['CR 669, Blue Ridge TX', 'Sat 9–4', 'Free parking on the grass']
    }, {
      title: 'The stand',
      items: ['Shelf', 'Growers', 'Events']
    }, {
      title: 'The ecosystem',
      items: ['TXM Ranch', 'Texas Made Texas Modern', 'The Gold Star Collective', 'Barn 314']
    }, {
      title: 'Write to us',
      items: ['hello@farmstand1959.com', '(903) 555-0159']
    }]
  }));
}
window.FSKit = Object.assign(window.FSKit || {}, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Events.jsx
try { (() => {
/* Farmstand 1959 — events. The posters are photographs of real hand-painted
   boards; until those are made and shot, they are slots at the right size. */
function Events({
  go
}) {
  const {
    SiteHeader,
    SiteFooter,
    SectionHeading,
    EventCard,
    Marquee,
    PhotoSlot,
    Button
  } = window.DS;
  const wrap = {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 var(--sp-7)'
  };
  const paper = {
    backgroundColor: 'var(--paper-100)',
    backgroundImage: 'var(--texture-paper)',
    backgroundSize: 'var(--texture-paper-size)'
  };
  const hand = {
    fontFamily: 'var(--font-hand)',
    fontSize: 'var(--fs-hand-md)',
    lineHeight: 1.3,
    color: 'var(--tin-700)'
  };
  const caps = {
    fontFamily: 'var(--font-label)',
    fontSize: 'var(--fs-label-sm)',
    letterSpacing: 'var(--track-label)',
    textTransform: 'uppercase'
  };
  const POSTERS = [{
    title: 'Market day',
    date: 'Saturday Sep 20',
    time: '10am–4pm',
    note: 'PAINTED POSTER — Market day. Photograph the board flat, daylight, slight shadow at the edge'
  }, {
    title: 'Dance under the stars',
    date: 'Saturday Sep 20',
    time: '6–10pm',
    note: 'PAINTED POSTER — Dance under the stars. Same board size, photographed the same way'
  }, {
    title: 'Fall harvest supper',
    date: 'Friday Sep 26',
    time: '6pm',
    note: 'PAINTED POSTER — Fall harvest supper. Same board size, photographed the same way'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    items: ['Howdy y\u2019all', 'The stand', 'Shelf', 'Growers', 'Events', {
      label: 'Yeehaw',
      accent: true
    }, 'Visit'],
    active: "Events",
    status: "Open today \xB7 9 to 4",
    onNavigate: go
  }), /*#__PURE__*/React.createElement(PhotoSlot, {
    ratio: "21 / 8",
    strong: true,
    note: "THE DANCE FLOOR \u2014 full, evening, from head height at the back of the hall"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-protect)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      width: '100%',
      paddingBottom: 'var(--sp-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...caps,
      color: 'var(--chili-300)'
    }
  }, "September"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'var(--fs-script-xl)',
      lineHeight: 1,
      color: 'var(--paper-100)',
      margin: '14px 0 4px'
    }
  }, "Gather. Eat. Dance."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-sm)',
      fontWeight: 'var(--fw-display)',
      letterSpacing: 'var(--track-caps)',
      textTransform: 'uppercase',
      color: 'var(--paper-300)'
    }
  }, "Three nights on the place this month")))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '14px',
      backgroundImage: 'var(--pattern-ticking)'
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...paper,
      paddingTop: 'var(--sp-9)',
      paddingBottom: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--sp-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-lg)',
      fontWeight: 'var(--fw-display-bold)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--denim-500)'
    }
  }, "On the boards"), /*#__PURE__*/React.createElement("span", {
    style: hand
  }, "Painted by hand. One board per night.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--sp-6)',
      marginTop: 'var(--sp-6)'
    }
  }, POSTERS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.title
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    ratio: "2 / 3",
    note: p.note,
    style: {
      boxShadow: 'var(--shadow-lift)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-md)',
      fontWeight: 'var(--fw-display-bold)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--denim-500)',
      marginTop: 'var(--sp-4)',
      lineHeight: 'var(--lh-display)'
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      ...caps,
      color: 'var(--chili-500)',
      marginTop: '7px'
    }
  }, p.date, " \xB7 ", p.time)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--denim-700)',
      paddingTop: 'var(--sp-9)',
      paddingBottom: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 340px',
      gap: 'var(--sp-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...caps,
      color: 'var(--chili-300)'
    }
  }, "The rest of the season"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-lg)',
      fontWeight: 'var(--fw-display-bold)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--paper-100)',
      margin: 'var(--sp-3) 0 var(--sp-5)'
    }
  }, "October and November"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(EventCard, {
    month: "OCT",
    day: "04",
    name: "Pecan day",
    time: "9am\u20132pm",
    blurb: "First of the Kelly Creek harvest, cracked on the spot."
  }), /*#__PURE__*/React.createElement(EventCard, {
    month: "OCT",
    day: "18",
    name: "Chili cook-off",
    time: "12\u20135pm",
    blurb: "Twelve pots, one long table, no trophies.",
    status: "news",
    statusLabel: "Entries open"
  }), /*#__PURE__*/React.createElement(EventCard, {
    month: "NOV",
    day: "01",
    name: "Bluebonnet seed sale",
    time: "9am\u20131pm",
    blurb: "Packets from this year's saved seed.",
    status: "delay",
    statusLabel: "Weather dependent"
  }), /*#__PURE__*/React.createElement(EventCard, {
    month: "NOV",
    day: "27",
    name: "Thanksgiving pickup",
    time: "8\u201311am",
    blurb: "Pre-ordered birds and pies only.",
    status: "soldout",
    statusLabel: "Full"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    heading: "Tonight",
    lines: ['Dance under the stars', 'Gates at six', 'Bring a chair']
  }), /*#__PURE__*/React.createElement(PhotoSlot, {
    ratio: "1 / 1",
    note: "THE BAND \u2014 mid-song, from the side of the stage"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...hand,
      color: 'var(--paper-300)'
    }
  }, "Gates at six. Music by seven."))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '20px',
      backgroundImage: 'var(--pattern-checker)',
      backgroundSize: 'var(--pattern-checker-size)'
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      backgroundColor: 'var(--paper-200)',
      backgroundImage: 'var(--texture-canvas)',
      backgroundSize: 'var(--texture-canvas-size)',
      paddingTop: 'var(--sp-9)',
      paddingBottom: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--sp-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    ratio: "4 / 3",
    note: "ONE LONG TABLE \u2014 set for a supper, before anyone sits down"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Your night",
    title: "Host something here",
    lede: "Suppers, dances, launches, weddings. The hall holds a hundred and twenty at one long table."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-6)',
      display: 'flex',
      gap: 'var(--sp-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go('Visit')
  }, "Event inquiries"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go('Vendors')
  }, "Sell here instead")), /*#__PURE__*/React.createElement("span", {
    style: {
      ...hand,
      display: 'block',
      marginTop: 'var(--sp-5)'
    }
  }, "We answer on Mondays."))))), /*#__PURE__*/React.createElement(SiteFooter, {
    columns: [{
      title: 'Visit',
      items: ['CR 669, Blue Ridge TX', 'Sat 9–4', 'Free parking on the grass']
    }, {
      title: 'Events',
      items: ['September', 'October', 'Host something here']
    }]
  }));
}
window.FSKit = Object.assign(window.FSKit || {}, {
  Events
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Events.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Growers.jsx
try { (() => {
/* Farmstand 1959 — the grower directory. The sourcing promise, made visible. */
function Growers({
  go
}) {
  const {
    SiteHeader,
    SiteFooter,
    SectionHeading,
    GrowerCard,
    Rule,
    Seal,
    Button,
    StatBlock
  } = window.DS;
  const wrap = {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 var(--sp-7)'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    items: ['Howdy y\u2019all', 'The stand', 'Shelf', 'Growers', 'Events', {
      label: 'Yeehaw',
      accent: true
    }, 'Visit'],
    active: "Growers",
    status: "Open today \xB7 9 to 4",
    onNavigate: go
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: 'var(--sp-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Growers",
    title: "Eighteen farms, all of them named",
    lede: "No distributors, no exceptions, no mystery produce. Every grower is named on the shelf card, on the bag, and here."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--sp-4)',
      marginTop: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement(GrowerCard, {
    name: "Salt Branch Orchard",
    town: "Celina",
    miles: 14,
    products: ['Peaches', 'Blackberries'],
    note: "Third generation. Picks the morning of market day."
  }), /*#__PURE__*/React.createElement(GrowerCard, {
    name: "Wolf Creek",
    town: "Blue Ridge",
    miles: 3,
    products: ['Eggs', 'Pullets'],
    note: "Two hundred hens on pasture behind the house."
  }), /*#__PURE__*/React.createElement(GrowerCard, {
    name: "Pilot Grove Apiary",
    town: "Van Alstyne",
    miles: 19,
    products: ['Honey', 'Beeswax'],
    note: "Forty hives along the creek. Sells out most Saturdays."
  }), /*#__PURE__*/React.createElement(GrowerCard, {
    name: "Kelly Creek Grove",
    town: "Farmersville",
    miles: 11,
    products: ['Pecans', 'Pecan oil'],
    note: "Native trees, no irrigation. Harvest starts in November."
  }), /*#__PURE__*/React.createElement(GrowerCard, {
    name: "TXM Ranch",
    town: "Blue Ridge",
    miles: 0,
    products: ['Tomatoes', 'Chili peppers', 'Beef'],
    note: "The home place. Two hundred forty acres, the stand out front."
  }), /*#__PURE__*/React.createElement(GrowerCard, {
    name: "Bois d'Arc Dairy",
    town: "Leonard",
    miles: 16,
    products: ['Butter', 'Buttermilk'],
    note: "Sixty Jerseys. Churns Thursday, delivers Friday."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    ornament: true,
    label: "Since 1959"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 'var(--sp-7)',
      alignItems: 'center',
      marginTop: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-md)',
      fontWeight: 'var(--fw-display-bold)',
      letterSpacing: 'var(--track-caps)',
      textTransform: 'uppercase',
      color: 'var(--denim-500)'
    }
  }, "Place product at the stand"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure)',
      margin: '10px 0 20px'
    }
  }, "If you grow, raise or make something within an hour of Blue Ridge, write to us. Your name goes on the card \u2014 that is part of the deal, not a favour."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('Visit')
  }, "Write to us")), /*#__PURE__*/React.createElement(Seal, {
    name: "stamp-round",
    width: 150,
    basePath: "../../assets/"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--sp-6)',
      marginTop: 'var(--sp-8)',
      paddingTop: 'var(--sp-6)',
      borderTop: 'var(--border-hair) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    figure: "18",
    label: "North Texas growers"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    figure: "19",
    label: "Miles, farthest farm"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    figure: "0",
    label: "Distributors"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement(SiteFooter, {
    columns: [{
      title: 'Visit',
      items: ['CR 669, Blue Ridge TX', 'Sat 9–4', 'Free parking on the grass']
    }, {
      title: 'Growers',
      items: ['Place product at the stand', 'What we look for', 'How we price']
    }]
  })));
}
window.FSKit = Object.assign(window.FSKit || {}, {
  Growers
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Growers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
/* Farmstand 1959 — home. Field-notes mode: full-bleed photography, paper and
   canvas grounds, alternating light and dark fields, the hand in the margins. */
function Home({
  go
}) {
  const {
    SiteHeader,
    SiteFooter,
    Badge,
    Button,
    Seal,
    SectionHeading,
    PhotoSlot,
    ProduceRow,
    EventCard,
    StatementBlock
  } = window.DS;
  const wrap = {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 var(--sp-7)'
  };
  const paper = {
    backgroundColor: 'var(--paper-100)',
    backgroundImage: 'var(--texture-paper)',
    backgroundSize: 'var(--texture-paper-size)'
  };
  const hand = {
    fontFamily: 'var(--font-hand)',
    fontSize: 'var(--fs-hand-md)',
    lineHeight: 1.3,
    color: 'var(--tin-700)'
  };
  const caps = {
    fontFamily: 'var(--font-label)',
    fontSize: 'var(--fs-label-sm)',
    letterSpacing: 'var(--track-label)',
    textTransform: 'uppercase'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    items: ['Howdy y\u2019all', 'The stand', 'Shelf', 'Growers', 'Events', {
      label: 'Yeehaw',
      accent: true
    }, 'Visit'],
    active: "The stand",
    status: "Open today \xB7 9 to 4",
    onNavigate: go
  }), /*#__PURE__*/React.createElement(PhotoSlot, {
    ratio: "16 / 7",
    strong: true,
    position: "50% 44%",
    src: "../../assets/photo/stand-tin-wall.png",
    alt: "The tin wall of the stand against a blue Texas sky, prickly pear along the base"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top,rgba(13,23,39,.92) 0%,rgba(13,23,39,.60) 42%,rgba(13,23,39,.14) 100%)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/stamp-round-alpha.png",
    alt: "",
    style: {
      position: 'absolute',
      right: 'var(--sp-7)',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '300px',
      opacity: 0.16,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      left: '7px',
      top: '-14px',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      width: '100%',
      paddingBottom: 'var(--sp-8)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: "open"
  }, "Open today \xB7 9 to sold out"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'var(--fs-script-xl)',
      lineHeight: 1,
      color: 'var(--paper-100)',
      margin: '18px 0 4px'
    }
  }, "With love from Texas..."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-sm)',
      fontWeight: 'var(--fw-display)',
      letterSpacing: 'var(--track-caps)',
      textTransform: 'uppercase',
      color: 'var(--paper-300)'
    }
  }, "A Texas Made Texas Modern establishment"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      marginTop: 'var(--sp-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go('Shelf')
  }, "What's on the shelf"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    onClick: () => go('Visit')
  }, "Directions"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...paper,
      borderBottom: 'var(--border-hair) solid var(--border-hairline)',
      padding: 'var(--sp-6) var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: 0,
      display: 'flex',
      gap: 'var(--sp-6)',
      alignItems: 'baseline',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...hand,
      fontSize: 'var(--fs-hand-lg)',
      color: 'var(--denim-500)'
    }
  }, "Everything here was grown or raised within twenty miles."), /*#__PURE__*/React.createElement("span", {
    style: {
      ...caps,
      color: 'var(--chili-500)'
    }
  }, "No distributors \xB7 No exceptions"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '14px',
      backgroundImage: 'var(--pattern-ticking)'
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...paper,
      paddingTop: 'var(--sp-9)',
      paddingBottom: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 260px',
      gap: 'var(--sp-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The stand",
    title: "What's on the shelf today",
    lede: "Picked this morning. Gone when it's gone."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement(ProduceRow, {
    item: "Peaches",
    grower: "Salt Branch Orchard",
    town: "Celina",
    miles: 14,
    price: "$4.50",
    unit: "lb"
  }), /*#__PURE__*/React.createElement(ProduceRow, {
    item: "Eggs",
    grower: "Wolf Creek",
    town: "Blue Ridge",
    miles: 3,
    price: "$7.00",
    unit: "dozen"
  }), /*#__PURE__*/React.createElement(ProduceRow, {
    item: "Blackberries",
    grower: "Salt Branch Orchard",
    town: "Celina",
    miles: 14,
    price: "$6.00",
    unit: "pint"
  }), /*#__PURE__*/React.createElement(ProduceRow, {
    item: "Honey",
    grower: "Crooked Creek Honey Farm",
    town: "Anna",
    miles: 11,
    soldOut: true
  }), /*#__PURE__*/React.createElement(ProduceRow, {
    item: "Tomatoes",
    grower: "TXM Ranch",
    town: "Blue Ridge",
    miles: 0,
    price: "$3.25",
    unit: "lb",
    last: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('Shelf')
  }, "See the whole shelf"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    ratio: "4 / 5",
    note: "PRODUCE ON THE TABLE \u2014 close, top-down, in the crate it arrived in"
  }), /*#__PURE__*/React.createElement("span", {
    style: hand
  }, "The honey went before ten. It usually does."))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--denim-700)',
      paddingTop: 'var(--sp-9)',
      paddingBottom: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--sp-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...caps,
      color: 'var(--chili-300)'
    }
  }, "September"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-lg)',
      fontWeight: 'var(--fw-display-bold)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--paper-100)',
      margin: 'var(--sp-3) 0 var(--sp-5)'
    }
  }, "Coming up at the stand"), /*#__PURE__*/React.createElement(PhotoSlot, {
    ratio: "3 / 2",
    note: "THE HALL AT NIGHT \u2014 string lights, the floor full, from the back corner"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...hand,
      color: 'var(--paper-300)',
      display: 'block',
      marginTop: 'var(--sp-4)'
    }
  }, "Bring a chair if you want one.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(EventCard, {
    month: "SEP",
    day: "20",
    name: "Market day",
    time: "10am\u20134pm",
    blurb: "Local goods, fresh food, live music."
  }), /*#__PURE__*/React.createElement(EventCard, {
    month: "SEP",
    day: "20",
    name: "Dance under the stars",
    time: "6\u201310pm",
    blurb: "Live music, cold drinks, good people.",
    status: "news",
    statusLabel: "Tickets open"
  }), /*#__PURE__*/React.createElement(EventCard, {
    month: "SEP",
    day: "26",
    name: "Fall harvest supper",
    time: "6pm",
    blurb: "Farm to table, good company. One long table.",
    status: "soldout",
    statusLabel: "Sold out"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    onClick: () => go('Events')
  }, "All of September")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '20px',
      backgroundImage: 'var(--pattern-checker)',
      backgroundSize: 'var(--pattern-checker-size)'
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      backgroundColor: 'var(--paper-200)',
      backgroundImage: 'var(--texture-canvas)',
      backgroundSize: 'var(--texture-canvas-size)',
      paddingTop: 'var(--sp-9)',
      paddingBottom: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Who grows it",
    title: "Named on every card",
    lede: "Nothing on the shelf is anonymous. If we cannot tell you who grew it, we do not sell it."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--sp-5)',
      marginTop: 'var(--sp-6)'
    }
  }, [['Crooked Creek Honey Farm', 'Honey', 'Anna'], ['N&P Farm & Dairy', 'Goat and cow dairy', 'Farmersville'], ['White House Kitchen', 'Honey, remedies, kitchen goods', 'McKinney']].map(([n, w, t]) => /*#__PURE__*/React.createElement("div", {
    key: n
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    ratio: "1 / 1",
    note: 'PORTRAIT — ' + n + ', at work, hands in frame'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-sm)',
      fontWeight: 'var(--fw-display)',
      color: 'var(--denim-500)',
      marginTop: 'var(--sp-4)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      ...caps,
      color: 'var(--text-faint)',
      marginTop: '5px'
    }
  }, w, " \xB7 ", t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-6)',
      display: 'flex',
      gap: 'var(--sp-4)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('Growers')
  }, "Every grower"), /*#__PURE__*/React.createElement("span", {
    style: hand
  }, "Four so far. More every season.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: 'var(--sp-9) var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement(StatementBlock, {
    lines: ['GATHER WITH GOOD PEOPLE IN NORTH TEXAS.', '', '', '']
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    columns: [{
      title: 'Visit',
      items: ['CR 669, Blue Ridge TX', 'Sat 9–4', 'Free parking on the grass']
    }, {
      title: 'The stand',
      items: ['Shelf', 'Growers', 'Events']
    }, {
      title: 'Growers',
      items: ['Place product at the stand', 'Named on every card', 'No distributors']
    }, {
      title: 'Write to us',
      items: ['hello@farmstand1959.com', '(903) 555-0159']
    }]
  }));
}
window.FSKit = Object.assign(window.FSKit || {}, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shelf.jsx
try { (() => {
/* Farmstand 1959 — the shelf. Seed packets double as the produce card. */
function Shelf({
  go
}) {
  const {
    SiteHeader,
    SiteFooter,
    SectionHeading,
    SeedPacket,
    ProduceRow,
    Card,
    QuantityStepper,
    Badge,
    Button,
    Rule
  } = window.DS;
  const wrap = {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 var(--sp-7)'
  };
  const [qty, setQty] = React.useState(2);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    items: ['Howdy y\u2019all', 'The stand', 'Shelf', 'Growers', 'Events', {
      label: 'Yeehaw',
      accent: true
    }, 'Visit'],
    active: "Shelf",
    status: "Open today \xB7 9 to 4",
    onNavigate: go
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: 'var(--sp-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Today",
    title: "What's on the shelf",
    lede: "Everything here was grown or raised on TXM Ranch, or came in this morning from a named grower down the road."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 'var(--sp-4)',
      marginTop: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement(SeedPacket, {
    name: "Texas tomato",
    illustration: "../../assets/ill/basket.png",
    price: "$3.25"
  }), /*#__PURE__*/React.createElement(SeedPacket, {
    name: "Cowboy chili pepper",
    illustration: "../../assets/ill/chili.png",
    price: "$2.00",
    accent: "chili"
  }), /*#__PURE__*/React.createElement(SeedPacket, {
    name: "Texas bluebonnet",
    illustration: "../../assets/ill/bluebonnet.png",
    price: "$4.00"
  }), /*#__PURE__*/React.createElement(SeedPacket, {
    name: "Peaches",
    illustration: "../../assets/ill/basket.png",
    price: "$4.50"
  }), /*#__PURE__*/React.createElement(SeedPacket, {
    name: "Wolf Creek eggs",
    illustration: "../../assets/ill/rooster.png",
    price: "$7.00"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: 'var(--sp-8)',
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: 'var(--sp-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginBottom: 'var(--sp-4)'
    }
  }, "Everything on the shelf"), /*#__PURE__*/React.createElement(ProduceRow, {
    item: "Peaches",
    grower: "Salt Branch Orchard",
    town: "Celina",
    miles: 14,
    price: "$4.50",
    unit: "lb"
  }), /*#__PURE__*/React.createElement(ProduceRow, {
    item: "Blackberries",
    grower: "Salt Branch Orchard",
    town: "Celina",
    miles: 14,
    price: "$6.00",
    unit: "pint"
  }), /*#__PURE__*/React.createElement(ProduceRow, {
    item: "Eggs",
    grower: "Wolf Creek",
    town: "Blue Ridge",
    miles: 3,
    price: "$7.00",
    unit: "dozen"
  }), /*#__PURE__*/React.createElement(ProduceRow, {
    item: "Tomatoes",
    grower: "TXM Ranch",
    town: "Blue Ridge",
    miles: 0,
    price: "$3.25",
    unit: "lb"
  }), /*#__PURE__*/React.createElement(ProduceRow, {
    item: "Chili peppers",
    grower: "TXM Ranch",
    town: "Blue Ridge",
    miles: 0,
    price: "$2.00",
    unit: "bunch"
  }), /*#__PURE__*/React.createElement(ProduceRow, {
    item: "Honey",
    grower: "Pilot Grove Apiary",
    town: "Van Alstyne",
    miles: 19,
    soldOut: true
  }), /*#__PURE__*/React.createElement(ProduceRow, {
    item: "Pecans",
    grower: "Kelly Creek Grove",
    town: "Farmersville",
    miles: 11,
    soldOut: true,
    last: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 'var(--sp-4)',
      maxWidth: 'var(--measure)'
    }
  }, "Sold-out lines stay on the page. Gone when it's gone only means something if you can see what went.")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-sm)',
      fontWeight: 'var(--fw-display-bold)',
      letterSpacing: 'var(--track-caps)',
      textTransform: 'uppercase',
      color: 'var(--denim-500)'
    }
  }, "Peaches"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      margin: '6px 0 14px'
    }
  }, "Salt Branch Orchard \xB7 Celina \xB7 14 miles"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-md)',
      fontWeight: 'var(--fw-display-bold)',
      color: 'var(--chili-500)'
    }
  }, "$4.50 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--track-label)',
      color: 'var(--text-faint)'
    }
  }, "/ lb")), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sp-4)',
      margin: '14px 0 16px'
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    max: 12,
    unit: "lb",
    onChange: setQty
  }), /*#__PURE__*/React.createElement(Badge, {
    status: "open"
  }, "12 left")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      width: '100%'
    }
  }, "Hold at the counter"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 'var(--sp-3)'
    }
  }, "Held until 4pm Saturday. Pay at the stand."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement(SiteFooter, {
    columns: [{
      title: 'Visit',
      items: ['CR 669, Blue Ridge TX', 'Sat 9–4', 'Free parking on the grass']
    }, {
      title: 'The stand',
      items: ['Shelf', 'Growers', 'Events']
    }]
  })));
}
window.FSKit = Object.assign(window.FSKit || {}, {
  Shelf
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shelf.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Vendors.jsx
try { (() => {
/* Farmstand 1959 — become a vendor. The sign-up sheet is a database:
   every submission becomes a row in the Notion "Vendor Applications" table. */
function Vendors({
  go
}) {
  const {
    SiteHeader,
    SiteFooter,
    SectionHeading,
    Input,
    Choice,
    Button,
    Card,
    Rule,
    Badge,
    BrandTag
  } = window.DS;
  const wrap = {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 var(--sp-7)'
  };
  const label = {
    fontFamily: 'var(--font-label)',
    fontSize: 'var(--fs-label-sm)',
    letterSpacing: 'var(--track-label)',
    textTransform: 'uppercase'
  };
  const heading = {
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--fs-display-md)',
    fontWeight: 'var(--fw-display-bold)',
    letterSpacing: 'var(--track-caps)',
    textTransform: 'uppercase',
    color: 'var(--denim-500)'
  };
  const CATEGORIES = ['Pantry + Table', 'Farm + Garden', 'Home + Daily Life', 'Paper + Story', 'Ranch + Outdoors', 'Small Joys'];
  const MODELS = ['Wholesale', 'Consignment', 'Seasonal feature', 'Limited drop', 'Market + pop-up', 'Story + collaboration'];
  const ATTACHMENTS = [['lineSheet', 'Current line sheet'], ['pricing', 'Wholesale pricing'], ['photos', 'Product photos'], ['samples', 'Samples available if requested'], ['compliance', 'Category compliance docs'], ['insurance', 'Insurance information']];
  const [form, setForm] = React.useState({
    categories: [],
    models: []
  });
  const [sent, setSent] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [rows, setRows] = React.useState(() => window.VendorStore.list());
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e && e.target ? e.target.value : e
  }));
  const toggle = (k, v) => setForm(f => {
    const cur = f[k] || [];
    return {
      ...f,
      [k]: cur.includes(v) ? cur.filter(x => x !== v) : cur.concat(v)
    };
  });
  const send = () => {
    if (!form.brand || !form.email) {
      setError('Brand name and email are required.');
      return;
    }
    setError(null);
    window.VendorStore.submit(form).then(row => {
      setSent(row);
      setRows(window.VendorStore.list());
      window.scrollTo(0, 0);
    }).catch(e => setError(e.message));
  };
  if (sent) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
      items: ['Howdy y\u2019all', 'The stand', 'Shelf', 'Growers', 'Events', {
        label: 'Yeehaw',
        accent: true
      }, 'Visit'],
      active: "Yeehaw",
      status: "Open today \xB7 9 to 4",
      onNavigate: go
    }), /*#__PURE__*/React.createElement("section", {
      style: {
        ...wrap,
        paddingTop: 'var(--sp-9)',
        paddingBottom: 'var(--sp-9)',
        maxWidth: '720px'
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: 'var(--sp-6) var(--sp-5)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/brand/stamp-round-alpha.png",
      alt: "Farmstand 59",
      style: {
        width: '110px',
        display: 'block',
        margin: '0 auto var(--sp-5)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...heading,
        fontSize: 'var(--fs-display-lg)'
      }
    }, "Got it"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 'var(--sp-4) 0 0',
        fontSize: 'var(--fs-body-lg)',
        fontWeight: 300,
        lineHeight: 'var(--lh-body)',
        color: 'var(--text-body)'
      }
    }, form.brand, " is in the book as ", /*#__PURE__*/React.createElement("strong", null, sent.id), ". We read every one. If it is a fit we will write, and if it is not yet we will tell you that too."), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
      style: {
        ...label,
        color: 'var(--text-faint)',
        marginTop: 'var(--sp-4)'
      }
    }, sent.synced ? 'Written to the vendor database' : 'Held in this browser — see the note below'))), !sent.synced ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--sp-5)',
        border: 'var(--border-hair) solid var(--border-hairline)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--sp-5)',
        background: 'var(--paper-000)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...label,
        color: 'var(--chili-500)'
      }
    }, "Not yet live"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 'var(--sp-3) 0 0',
        fontSize: 'var(--fs-body-sm)',
        fontWeight: 300,
        lineHeight: 'var(--lh-body)',
        color: 'var(--text-muted)'
      }
    }, "No submission endpoint is configured, so this row is held in this browser instead of the Notion database. The exact payload it would send:"), /*#__PURE__*/React.createElement("pre", {
      style: {
        margin: 'var(--sp-4) 0 0',
        padding: 'var(--sp-4)',
        background: 'var(--paper-200)',
        borderRadius: 'var(--radius-control)',
        fontSize: '11px',
        lineHeight: 1.55,
        overflowX: 'auto',
        fontFamily: 'ui-monospace, monospace',
        color: 'var(--denim-700)'
      }
    }, JSON.stringify(sent.payload, null, 2))) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'var(--sp-5)',
        display: 'flex',
        gap: 'var(--sp-3)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => {
        setSent(null);
        setForm({
          categories: [],
          models: []
        });
      }
    }, "Submit another"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('Home')
    }, "Back to the stand"))), /*#__PURE__*/React.createElement(SiteFooter, {
      columns: [{
        title: 'Vendors',
        items: ['Apply any time', 'We answer on Mondays', 'vendors@farmstand1959.com']
      }, {
        title: 'Visit',
        items: ['CR 669, Blue Ridge TX', 'Sat 9–4', 'Sun 10–2']
      }]
    }), "      ");
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    items: ['Howdy y\u2019all', 'The stand', 'Shelf', 'Growers', 'Events', {
      label: 'Yeehaw',
      accent: true
    }, 'Visit'],
    active: "Yeehaw",
    status: "Open today \xB7 9 to 4",
    onNavigate: go
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: 'var(--sp-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 'var(--sp-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Become a vendor",
    title: "We want the things you tell a friend about",
    lede: "Farmstand 1959 is a curated assortment, not a shelf-rental program. If you grow it, make it, bake it, bottle it or build it in Texas, put it in front of us."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--sp-5) 0 0',
      fontSize: 'var(--fs-body)',
      fontWeight: 300,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      maxWidth: '62ch'
    }
  }, "The test is simple: would we buy it, use it, gift it, serve it, or proudly tell someone who made it? Fill this out and it lands in our book the moment you send it.")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...label,
      color: 'var(--text-faint)',
      marginBottom: 'var(--sp-3)'
    }
  }, "What we look for"), [['Local first', 'Texas-founded, grown, made, or meaningfully rooted here.'], ['Real story', 'Made by people with a point of view and a reason for doing it differently.'], ['Good on the shelf', 'Retail-ready goods that hold up in real life.']].map(([t, d], i, a) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      padding: '12px 0',
      borderBottom: i === a.length - 1 ? 'none' : 'var(--border-hair) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-display)',
      color: 'var(--denim-500)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '4px',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 300,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: 'var(--sp-8)',
      maxWidth: '860px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: heading
  }, "Who you are"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
      gap: 'var(--sp-4)',
      marginTop: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Brand / company name",
    value: form.brand || '',
    onChange: set('brand'),
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Primary contact",
    value: form.contact || '',
    onChange: set('contact')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Title / role",
    value: form.role || '',
    onChange: set('role')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    value: form.email || '',
    onChange: set('email'),
    hint: "We answer on Mondays."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    value: form.phone || '',
    onChange: set('phone')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Website",
    value: form.website || '',
    onChange: set('website')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Instagram / social",
    value: form.social || '',
    onChange: set('social')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "City, Texas",
    value: form.city || '',
    onChange: set('city')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Year founded",
    value: form.founded || '',
    onChange: set('founded')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Team size",
    value: form.team || '',
    onChange: set('team')
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Your Texas connection",
    value: form.texas || '',
    onChange: set('texas'),
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tell us the story behind the brand",
    value: form.story || '',
    onChange: set('story'),
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Where are you currently sold?",
    value: form.soldAt || '',
    onChange: set('soldAt'),
    style: {
      gridColumn: '1 / -1'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...heading,
      marginTop: 'var(--sp-8)'
    }
  }, "Where you fit"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...label,
      color: 'var(--text-faint)',
      marginTop: 'var(--sp-5)',
      marginBottom: 'var(--sp-3)'
    }
  }, "Category"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
      gap: 'var(--sp-3)'
    }
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement(Choice, {
    key: c,
    label: c,
    checked: (form.categories || []).includes(c),
    onChange: () => toggle('categories', c)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...label,
      color: 'var(--text-faint)',
      marginTop: 'var(--sp-6)',
      marginBottom: 'var(--sp-3)'
    }
  }, "How you would like to work together"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
      gap: 'var(--sp-3)'
    }
  }, MODELS.map(m => /*#__PURE__*/React.createElement(Choice, {
    key: m,
    label: m,
    checked: (form.models || []).includes(m),
    onChange: () => toggle('models', m)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...heading,
      marginTop: 'var(--sp-8)'
    }
  }, "What you are submitting"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
      gap: 'var(--sp-4)',
      marginTop: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Products / SKUs",
    value: form.products || '',
    onChange: set('products'),
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Wholesale price",
    value: form.wholesale || '',
    onChange: set('wholesale')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "MSRP",
    value: form.msrp || '',
    onChange: set('msrp')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Case pack",
    value: form.casePack || '',
    onChange: set('casePack')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "MOQ",
    value: form.moq || '',
    onChange: set('moq')
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Lead time + production capacity",
    value: form.capacity || '',
    onChange: set('capacity'),
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Shelf life / storage / special handling",
    value: form.shelfLife || '',
    onChange: set('shelfLife'),
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Why is this a fit for Farmstand 1959?",
    value: form.fit || '',
    onChange: set('fit'),
    style: {
      gridColumn: '1 / -1'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...label,
      color: 'var(--text-faint)',
      marginTop: 'var(--sp-6)',
      marginBottom: 'var(--sp-3)'
    }
  }, "What you have ready"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
      gap: 'var(--sp-3)'
    }
  }, ATTACHMENTS.map(([k, t]) => /*#__PURE__*/React.createElement(Choice, {
    key: k,
    label: t,
    checked: !!form[k],
    onChange: () => setForm(f => ({
      ...f,
      [k]: !f[k]
    }))
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-6)',
      padding: 'var(--sp-5)',
      border: '2px solid var(--chili-500)',
      borderRadius: 'var(--radius-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 'var(--fw-display-bold)',
      letterSpacing: 'var(--track-caps)',
      textTransform: 'uppercase',
      color: 'var(--chili-500)'
    }
  }, "If your product is still early, send it anyway"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--sp-3) 0 0',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 300,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, "We care about small businesses and good ideas. Tell us where you are. A \u201Cnot yet\u201D can still become a future relationship.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-6)',
      display: 'flex',
      gap: 'var(--sp-4)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: send
  }, "Send the application"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...label,
      color: 'var(--text-faint)'
    }
  }, window.VendorStore.live() ? 'Writes to the vendor database' : 'Held locally until the endpoint is wired'), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      ...label,
      color: 'var(--chili-500)'
    }
  }, error) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-6)',
      paddingTop: 'var(--sp-5)',
      borderTop: 'var(--border-hair) solid var(--border-hairline)',
      display: 'flex',
      gap: 'var(--sp-4)',
      alignItems: 'baseline',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...label,
      color: 'var(--text-faint)'
    }
  }, "Already sell here?"), /*#__PURE__*/React.createElement("a", {
    href: "../portal/index.html",
    style: {
      ...label
    }
  }, "Sign in to your vendor portal")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--sp-5) 0 0',
      fontSize: '11px',
      fontWeight: 300,
      lineHeight: 1.65,
      color: 'var(--text-faint)',
      maxWidth: '74ch'
    }
  }, "Submitting is an invitation to be considered and is not a purchase order, vendor agreement, guarantee of placement, or promise of promotion. Final assortment, quantities, buying model, pricing, delivery, payment, returns, insurance, compliance requirements, and any marketing expectations are confirmed separately in writing before product is accepted.")), rows.length ? /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: 'var(--sp-9)',
      maxWidth: '860px'
    }
  }, /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: heading
  }, "The book"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...label,
      color: 'var(--text-faint)'
    }
  }, rows.length, " application", rows.length === 1 ? '' : 's')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-4)',
      border: 'var(--border-hair) solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      background: 'var(--paper-000)'
    }
  }, rows.slice().reverse().map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '84px 1fr 150px 140px',
      gap: 'var(--sp-4)',
      alignItems: 'center',
      padding: '13px var(--sp-4)',
      borderTop: i === 0 ? 'none' : 'var(--border-hair) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...label,
      color: 'var(--text-faint)'
    }
  }, r.id), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-display)',
      color: 'var(--denim-500)'
    }
  }, r.form.brand), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)'
    }
  }, (r.form.categories || []).length ? r.form.categories[0] : '—'), /*#__PURE__*/React.createElement(Badge, {
    status: r.synced ? 'open' : 'closed'
  }, r.synced ? 'In Notion' : 'Local only')))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--sp-4) 0 0',
      fontSize: '11px',
      fontWeight: 300,
      lineHeight: 1.65,
      color: 'var(--text-faint)'
    }
  }, "Shown here so the flow is reviewable end to end. In production this list is the Notion database and does not appear on the public site.")) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 'var(--sp-8)',
      paddingBottom: 'var(--sp-8)',
      display: 'flex',
      gap: 'var(--sp-4)',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(BrandTag, {
    lines: ['Made', 'in', 'Texas']
  }), /*#__PURE__*/React.createElement(BrandTag, {
    tone: "denim",
    lines: ['Thank you', 'for supporting', 'REAL TEXANS']
  }), /*#__PURE__*/React.createElement(BrandTag, {
    lines: ['WITH', /*#__PURE__*/React.createElement(React.Fragment, {
      key: "l"
    }, "love", /*#__PURE__*/React.createElement("br", null), "from"), 'Texas']
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    columns: [{
      title: 'Vendors',
      items: ['Apply any time', 'We answer on Mondays', 'vendors@farmstand1959.com']
    }, {
      title: 'Visit',
      items: ['CR 669, Blue Ridge TX', 'Sat 9–4', 'Sun 10–2']
    }]
  }));
}
window.FSKit = Object.assign(window.FSKit || {}, {
  Vendors
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Vendors.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Visit.jsx
try { (() => {
/* Farmstand 1959 — visit and event inquiry. The system's only long form. */
function Visit({
  go
}) {
  const {
    SiteHeader,
    SiteFooter,
    SectionHeading,
    Input,
    Select,
    Choice,
    Button,
    Card,
    BrandTag,
    Rule,
    Badge
  } = window.DS;
  const wrap = {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 var(--sp-7)'
  };
  const [sent, setSent] = React.useState(false);
  const [booth, setBooth] = React.useState(false);
  const [list, setList] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    items: ['Howdy y\u2019all', 'The stand', 'Shelf', 'Growers', 'Events', {
      label: 'Yeehaw',
      accent: true
    }, 'Visit'],
    active: "Visit",
    status: "Open today \xB7 9 to 4",
    onNavigate: go
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: 'var(--sp-8)',
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      gap: 'var(--sp-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Visit",
    title: "Come out to the place",
    lede: "CR 669, Blue Ridge, Texas. Saturdays 9 to 4, or until the shelf is empty. Free parking on the grass."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-6)',
      height: '260px',
      border: 'var(--border-hair) solid var(--border-hairline)',
      borderRadius: 'var(--radius-card)',
      background: 'repeating-linear-gradient(135deg, var(--paper-200) 0 10px, var(--paper-100) 10px 20px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "Map \u2014 CR 669, Blue Ridge TX")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-md)',
      fontWeight: 'var(--fw-display-bold)',
      letterSpacing: 'var(--track-caps)',
      textTransform: 'uppercase',
      color: 'var(--denim-500)',
      marginBottom: 'var(--sp-4)'
    }
  }, "Tell us what you have in mind"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "Taylor Nixon"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    hint: "We answer on Mondays."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Farm, ranch or company",
    hint: "As you'd like it printed on the card",
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(Select, {
    label: "What did you have in mind",
    options: ['A supper', 'A market booth', 'Placing product at the stand', 'Something else'],
    style: {
      gridColumn: '1 / -1'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)',
      margin: 'var(--sp-5) 0'
    }
  }, /*#__PURE__*/React.createElement(Choice, {
    label: "Market day booth",
    description: "Saturdays, 9 to 4. Your name larger than ours.",
    checked: booth,
    onChange: () => setBooth(!booth)
  }), /*#__PURE__*/React.createElement(Choice, {
    label: "Send me the week's shelf list",
    description: "One email, Thursday evening. Nothing else.",
    checked: list,
    onChange: () => setList(!list)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setSent(true)
  }, "Send it"), sent ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--sage-700)'
    }
  }, "Sent \u2014 we answer on Mondays") : null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      marginBottom: 'var(--sp-3)'
    }
  }, "Hours"), [['Saturday', '9 to 4'], ['Sunday', '10 to 2'], ['Monday–Friday', 'Closed'], ['Sep 20', 'Open late for the dance']].map(([d, h], i, a) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--sp-4)',
      padding: '10px 0',
      borderBottom: i === a.length - 1 ? 'none' : 'var(--border-hair) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-display)',
      color: 'var(--denim-500)'
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)',
      color: h === 'Closed' ? 'var(--tin-700)' : 'var(--text-body)'
    }
  }, h))), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: "open"
  }, "Open today \xB7 9 to sold out"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-4)',
      justifyContent: 'center',
      padding: 'var(--sp-5) 0'
    }
  }, /*#__PURE__*/React.createElement(BrandTag, {
    lines: ['Grown', 'in', 'Texas']
  }), /*#__PURE__*/React.createElement(BrandTag, {
    tone: "denim",
    lines: ['Thank you', 'for supporting', 'real Texas']
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement(SiteFooter, {
    columns: [{
      title: 'Visit',
      items: ['CR 669, Blue Ridge TX', 'Sat 9–4', 'Sun 10–2', 'Free parking on the grass']
    }, {
      title: 'Write to us',
      items: ['hello@farmstand1959.com', '(903) 555-0159']
    }]
  })));
}
window.FSKit = Object.assign(window.FSKit || {}, {
  Visit
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Visit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/vendor-store.js
try { (() => {
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
window.VendorStore = function () {
  var ENDPOINT = null;
  var DATABASE = 'https://app.notion.com/p/55463b12643a4f3f876981362ad44042';
  var DATA_SOURCE = '79d5bb90-edd5-4d94-b235-cda24f82d57e';
  var NOTION_FORM = DATABASE;
  var KEY = 'fs1959.vendor.applications';

  /* Form field -> Notion property. These names must match the database exactly. */
  var PROPS = {
    brand: 'Brand / company name',
    contact: 'Primary contact',
    role: 'Title / role',
    email: 'Email',
    phone: 'Phone',
    website: 'Website',
    social: 'Instagram / social',
    city: 'City, Texas',
    founded: 'Year founded',
    team: 'Team size',
    categories: 'Category',
    texas: 'Texas connection',
    story: 'Brand story',
    soldAt: 'Currently sold at',
    products: 'Products submitted',
    wholesale: 'Wholesale price',
    msrp: 'MSRP',
    casePack: 'Case pack',
    moq: 'MOQ',
    capacity: 'Lead time + capacity',
    shelfLife: 'Shelf life / storage / handling',
    fit: 'Why a fit for Farmstand',
    models: 'Preferred model',
    lineSheet: 'Line sheet attached',
    pricing: 'Wholesale pricing attached',
    photos: 'Product photos attached',
    samples: 'Samples available',
    compliance: 'Compliance docs attached',
    insurance: 'Insurance on file'
  };
  function read() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch (e) {
      return [];
    }
  }
  function toNotion(form) {
    var p = {
      Stage: 'New submission'
    };
    Object.keys(PROPS).forEach(function (k) {
      var v = form[k];
      if (v === undefined || v === null || v === '' || Array.isArray(v) && !v.length) return;
      if (typeof v === 'boolean') p[PROPS[k]] = v ? '__YES__' : '__NO__';else if (k === 'founded' || k === 'wholesale' || k === 'msrp') p[PROPS[k]] = Number(v);else p[PROPS[k]] = v;
    });
    return {
      parent: {
        data_source_id: DATA_SOURCE
      },
      properties: p
    };
  }
  function submit(form) {
    var payload = toNotion(form);
    var row = {
      id: 'VEN-' + String(read().length + 1).padStart(3, '0'),
      submitted: new Date().toISOString(),
      stage: 'New submission',
      form: form,
      payload: payload,
      synced: false
    };
    if (!ENDPOINT) {
      var all = read();
      all.push(row);
      try {
        localStorage.setItem(KEY, JSON.stringify(all));
      } catch (e) {}
      return Promise.resolve(row);
    }
    return fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(function (r) {
      if (!r.ok) throw new Error('Submission failed (' + r.status + ')');
      row.synced = true;
      var all = read();
      all.push(row);
      try {
        localStorage.setItem(KEY, JSON.stringify(all));
      } catch (e) {}
      return row;
    });
  }
  return {
    submit: submit,
    list: read,
    toNotion: toNotion,
    endpoint: ENDPOINT,
    database: DATABASE,
    dataSource: DATA_SOURCE,
    form: NOTION_FORM,
    live: function () {
      return !!ENDPOINT;
    }
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/vendor-store.js", error: String((e && e.message) || e) }); }

__ds_ns.BrandTag = __ds_scope.BrandTag;

__ds_ns.EventPoster = __ds_scope.EventPoster;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.SeedPacket = __ds_scope.SeedPacket;

__ds_ns.StatementBlock = __ds_scope.StatementBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Seal = __ds_scope.Seal;

__ds_ns.Choice = __ds_scope.Choice;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.GrowerCard = __ds_scope.GrowerCard;

__ds_ns.PhotoSlot = __ds_scope.PhotoSlot;

__ds_ns.ProduceRow = __ds_scope.ProduceRow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatBlock = __ds_scope.StatBlock;

})();
