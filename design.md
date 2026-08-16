# Ventriloc — Style Reference
> Editorial data observatory on warm paper — a single orange ember punctuating monochrome precision.

**Theme:** light

Ventriloc speaks in a quiet, editorial voice: warm paper-white canvas, monospaced-precision data cards, and a single orange ember that punctuates the monochrome like a highlighter on a printed report. The system pairs a custom neo-grotesque (PolySans) at weight 400 for headings — unusual restraint that trades authority-through-volume for authority-through-precision — against Inter for body and UI chrome. Surfaces are warm grays and ivory rather than cool tech-blue, cards wear asymmetric corner radii (sharp top-right, soft elsewhere), and interactive elements split into two clear dialects: sharp-cornered text-style buttons and pill-shaped navigation containers. Color is rationed: pages should read 95% achromatic with orange appearing only as functional punctuation for highlights, link underlines, and decorative data accents.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Graphite | `#202020` | `--color-graphite` | Primary text, headings, nav links, icon strokes — the typographic anchor of every surface |
| Canvas White | `#ffffff` | `--color-canvas-white` | Page background, card elevation, icon fills — the brightest surface in the system |
| Ash | `#efefef` | `--color-ash` | Primary card and section background, nav pill container — the dominant warm-gray surface |
| Fog | `#f5f5f5` | `--color-fog` | Subtle background tone for nested surfaces and secondary containers |
| Ivory | `#ebe6dd` | `--color-ivory` | Warm accent background wash for featured blocks — the paper-stock feel |
| Steel | `#4d4d4d` | `--color-steel` | Secondary body text, long-form paragraph copy |
| Slate | `#828282` | `--color-slate` | Muted helper text, tertiary nav items, inactive controls |
| Mist | `#e8e8e8` | `--color-mist` | Hairline dividers, nav background fills |
| Ember Orange | `#ff682c` | `--color-ember-orange` | Orange text accent for links, tags, and emphasized short phrases. Do not promote it to the primary CTA color |
| Brass | `#816729` | `--color-brass` | Secondary accent for chart strokes, decorative SVG lines, and tag text — a muted warm counterpoint to Ember |

## Tokens — Typography

### PolySans — Headings and display text
- **Substitute:** Inter Tight or Space Grotesk at weight 400
- **Weights:** 400
- **Sizes:** 12px, 13px, 16px, 32px, 40px, 66px
- **Line height:** 0.91–1.38
- **Letter spacing:** -0.0200em
- **Role:** Custom neo-grotesque used exclusively at weight 400 with -0.02em tracking — a whisper-weight editorial authority that no bold headline could replicate

### Inter — Body copy, UI labels, button text, captions, metadata
- **Substitute:** system-ui or Roboto
- **Weights:** 400, 500, 600
- **Sizes:** 12px, 13px, 14px, 15px, 16px, 18px
- **Line height:** 1.15–1.50

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 14px | 1.43 | — | `--text-caption` |
| subheading | 18px | 1.25 | — | `--text-subheading` |
| heading | 32px | 1.19 | -0.64px | `--text-heading` |
| heading-lg | 40px | 1.2 | -0.8px | `--text-heading-lg` |
| display | 66px | 0.91 | -1.32px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px · **Density:** comfortable

Spacing scale: 8, 12, 16, 20, 36, 40, 60, 140 px.

### Border Radius

| Element | Value |
|---------|-------|
| tags | 20px |
| cards | 8px |
| buttons | 0px |
| nav-pills | 200px |
| asymmetric-card | 6px 0px 0px |

### Layout

- **Page max-width:** 1200px · **Section gap:** 80px · **Card padding:** 40px · **Element gap:** 20px

## Components

### Primary CTA Button
Dark filled (Graphite `#202020` background, white text), sharp 0px corners, PolySans 16px weight 400, padding 10px 20px, letter-spacing -0.02em. No shadow, no border-radius — the square edge is deliberate contrast to the rounded cards.

### Ghost Outlined Button
Transparent background, 1px Graphite border, Graphite text, 0px radius, padding 10px 20px, PolySans 16px weight 400.

### Navigation Pill Container
Ash (`#efefef`) background, 200px border-radius, 8px vertical / 18px horizontal padding. PolySans 16px for items inside.

### Asymmetric Radius Card
Ash background, border-radius `6px 0px 0px` (soft top-left, sharp everywhere else), generous internal padding. This asymmetric radius is the signature card shape — no shadow, surface color does the lifting.

### Data Dashboard Card
White surface, 20px border-radius, thin border or none, Ember Orange and Brass accent strokes. No shadow.

### Hero Headline Block
PolySans 66px weight 400, line-height 0.91, letter-spacing -1.32px, Graphite. Followed by 18px Inter body text in Steel (`#4d4d4d`).

### Link with Orange Underline
Text in base color with a 1px Ember Orange underline offset 2–3px below baseline. Used sparingly for the one or two most important links per page.

### Section Divider
No visible line — sections are separated purely by 80px vertical whitespace and alternating surface colors (white → ash → white).

## Do's and Don'ts

### Do
- Use PolySans exclusively at weight 400 for all headings — never bold the display type; the whisper-weight is the signature
- Apply the asymmetric border-radius `6px 0px 0px` to featured content cards; reserve 20px for data widgets and 0px for buttons
- Keep pages 95% achromatic; let Ember Orange appear only as link underlines, chart highlights, and small icon accents
- Use 20px for element gaps and 80px between sections — the generous whitespace is what makes the editorial voice work
- Pair Inter for all body and UI text; PolySans for headings, nav items, and button labels only
- Separate sections by alternating white canvas and Ash surface bands rather than dividers or shadows
- Use letter-spacing -0.02em on every PolySans text element

### Don't
- Do not bold PolySans headings — weight 400 at large size is the whole point
- Do not use Ember Orange as a filled button background — it is an accent for highlights and links, not a CTA fill
- Do not add box-shadows to cards or buttons — depth comes from surface color contrast
- Do not use symmetric border-radius on all elements; the asymmetric `6px 0px 0px` and the 0px button radius are deliberate contrast
- Do not introduce blue, green, or other chromatic colors — Ember + Brass is the limit
- Do not set line-height above 1.25 on display headings
- Do not crowd the layout — if you need decoration, increase whitespace instead

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Page Canvas | `#ffffff` | Primary page background |
| 1 | Ash Surface | `#efefef` | Card and section panels |
| 2 | Fog Surface | `#f5f5f5` | Nested containers and secondary backgrounds |
| 3 | Ivory Surface | `#ebe6dd` | Warm accent wash for featured or editorial blocks |

## Elevation

No elevation system — cards and buttons rely on surface color contrast and hairline borders, never `box-shadow`.

## Typography Philosophy

PolySans is the voice; Inter is the grammar. Every heading, nav item, and button label uses PolySans at weight 400 — never 500 or 600. This is counterintuitive (most sites bold their headlines) but it's what makes the system feel editorial rather than corporate. The tight letter-spacing (-0.02em) compensates for the light weight at display sizes.

## Asymmetric Radius System

The asymmetric `6px 0px 0px` on featured cards signals: this is not a standard card grid, this is editorial layout. Paired with 0px on buttons and 200px on nav pills, it creates a three-radius rhythm — sharp (buttons) → asymmetric (cards) → fully round (navigation).

## Quick Start

```css
:root {
  --color-graphite: #202020;
  --color-canvas-white: #ffffff;
  --color-ash: #efefef;
  --color-fog: #f5f5f5;
  --color-ivory: #ebe6dd;
  --color-steel: #4d4d4d;
  --color-slate: #828282;
  --color-mist: #e8e8e8;
  --color-ember-orange: #ff682c;
  --color-brass: #816729;

  --font-polysans: 'PolySans', ui-sans-serif, system-ui, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, sans-serif;

  --text-caption: 14px;   --leading-caption: 1.43;
  --text-subheading: 18px; --leading-subheading: 1.25;
  --text-heading: 32px;   --leading-heading: 1.19;  --tracking-heading: -0.64px;
  --text-heading-lg: 40px; --leading-heading-lg: 1.2; --tracking-heading-lg: -0.8px;
  --text-display: 66px;   --leading-display: 0.91;  --tracking-display: -1.32px;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 40px;
  --element-gap: 20px;

  --radius-tags: 20px;
  --radius-cards: 8px;
  --radius-buttons: 0px;
  --radius-nav-pills: 200px;
  --radius-asymmetric-card: 6px 0px 0px;
}
```

---

## Adaptations made for this site

Deviations from the reference, recorded so they're deliberate rather than drift.

### Typography

- **Heading face:** PolySans is a commercial licence. Using **Space Grotesk at weight 400**, one of the reference's own listed substitutes. Chosen over Inter Tight because the system's premise — "PolySans is the voice, Inter is the grammar" — needs two genuinely distinct faces, and Inter Tight is near-indistinguishable from the Inter already used for body.
- **⚠ The masked-heading line-height floor is a property of the heading font.** The line-reveal masks use `overflow: hidden`, so any `line-height` below the font's ink height (ascender + descender) silently slices descenders off. Measured: **Inter 1.21em, Space Grotesk 1.27em.** `--display-leading` is set to **1.3** to clear Space Grotesk. **Re-measure and update it whenever the heading font changes** — this has already caused one visible bug. The tight display rhythm is restored with negative margins between mask lines (`1.3 − 0.4 = 0.9`), never by lowering `line-height`.
- **Captions are 15px, not 14px.** The site's body is 18px; 14px captions read as too small a jump against it.

### Colour

- **Two Graphite `#202020` dark bands** in an otherwise all-light system: the About section and the footer. The footer is a curtain reveal (the page slides up to uncover it) and that moment needs the tonal jump; the About band was kept dark by preference. Text on these bands is white or tinted white — Slate would only reach 4.24:1 on Graphite. Band rhythm reads white → graphite → white → fog → graphite.
- **Ember Orange is never used as a text colour.** Measured, `#ff682c` on white is **2.89:1** — below the WCAG AA 4.5:1 minimum. It appears only as the 1px underline in the reference's own "Link with Orange Underline" component, and on `.work__more`. The award tag uses **Brass `#816729`** instead, which measures 5.38:1.
- **Slate `#828282` is restricted to short labels** (3.84:1). Reading copy uses **Steel `#4d4d4d`** at 8.45:1; primary text is Graphite at 16.29:1.

### Layout

- **No 1200px max-width container.** The site is full-bleed by design — the pinned project wheel and the horizontal gallery both depend on it — and the brief for this restyle was explicitly "without changing any structure".
- **The Projects and Experience headers are centred and full-width**, against the reference's single-column content gravity. Requested directly from a supplied layout. The Gallery header keeps flush-left.
- **Hero keeps a full-bleed portrait** rather than the reference's data-card composition — this is a personal portfolio, so the subject leads. White hero type over the photo at the 35% graphite veil measures 8.97:1 median behind the name and 11.95:1 behind the tagline.
- **Project cards use a symmetric 16px radius, not the system's asymmetric `6px 0 0`.** Requested to match the carousel reference the wheel is modelled on, which uses 32px. This drops the "asymmetric radius is the signature" rule for these cards; the three-radius rhythm elsewhere (0px buttons, 200px nav pill, 20px tags) is intact.
- **Hero type is centred**, over the subject rather than beside him. A left-aligned variant was tried and rejected: clearing the subject requires capping the text block at ~48% of viewport width (his left edge drifts between 51% and 55% as `object-fit: cover` crops harder on narrower windows), which forces the name to wrap and shrinks the type's presence. Centred reads better.

### Components

- **The short/long bio toggle is a port, not an integration.** It was specified via a React/Tailwind/shadcn `InteractiveHoverButton`. This site has no React, Tailwind, shadcn or lucide-react — only `gsap` and `lenis` — so the interaction was rebuilt in plain CSS rather than dragging in a framework and a utility-class reset for one control. What carried over: the pill geometry, the filled/unfilled state pair, and the hover gesture (label slides aside, arrow arrives). `ArrowRight` became the `→` glyph already used by `.row__arrow`.
- **Its selected/unselected pair is inverted from the brief.** The brief said selected = black, unselected = white; the About band is Graphite `#202020`, where a black fill would disappear. Inverted so the *selected* side is the white fill (graphite label) and the unselected side is open (white label) inside a hairline `rgba(255,255,255,0.28)` capsule. Both states measure **16.30:1**.
- **It reuses `--radius-nav` (200px)** rather than introducing a fourth radius, so the 0px / 200px / 20px rhythm survives — this is the second 200px pill in the system, after the nav.
- **The toggle is `hidden` in the markup and revealed by JS.** With no JS the short bio renders on its own, so the section never depends on a control that cannot work.
