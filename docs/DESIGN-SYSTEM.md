# Goonzerflow Design System — "Olympus Protocol"

## Brand Position

Goonzerflow is a structured intelligence platform for gambling content. Not a casino. Not a blog. An analytical authority that happens to cover gambling. The aesthetic communicates: **"We know more than the other sites, and we built the systems to prove it."**

The Greek mythology visual language serves a specific purpose: it elevates gambling content from "SEO affiliate site" to "authoritative reference." Gold connotes value. Marble connotes permanence. Columns connote structure. Lightning connotes power and clarity. Every visual choice reinforces the brand's intelligence positioning.

---

## 1. Color System

### Primary Palette

```css
:root {
  /* Core */
  --olympus-navy:        #0B1120;     /* Deep background — night sky over Olympus */
  --olympus-navy-light:  #141E33;     /* Card backgrounds, elevated surfaces */
  --olympus-navy-mid:    #1C2A45;     /* Hover states, secondary surfaces */
  
  /* Marble */
  --marble-white:        #F2EDE8;     /* Primary text on dark, hero sections */
  --marble-warm:         #E8E0D6;     /* Secondary text, subtle borders */
  --marble-cool:         #D4CCC2;     /* Muted text, disabled states */
  --marble-deep:         #B8AFA5;     /* Tertiary text, timestamps */
  
  /* Gold */
  --gold-primary:        #C9A84C;     /* Primary CTAs, ratings, highlights */
  --gold-light:          #E2C97E;     /* Hover state, active elements */
  --gold-dark:           #9A7B2E;     /* Pressed state, borders */
  --gold-muted:          #7A6530;     /* Subtle accents, dividers */
  --gold-glow:           rgba(201, 168, 76, 0.15);  /* Ambient glow effects */
  
  /* Semantic */
  --risk-high:           #D94F4F;     /* High volatility, warnings */
  --risk-medium:         #D9A34F;     /* Medium volatility */
  --risk-low:            #4FAD6B;     /* Low volatility, positive indicators */
  --info-blue:           #4F8FD9;     /* Informational, links in body text */
  
  /* Lightning (accent moments only) */
  --lightning-core:      #E8D5A0;     /* Flash/highlight moments */
  --lightning-edge:      #F5EED4;     /* Glow edge on hover */
  --lightning-ambient:   rgba(232, 213, 160, 0.08);  /* Subtle background pulse */
}
```

### Usage Rules

- **Navy** is the dominant surface (80%+ of any page). Never use pure black.
- **Gold** is reserved for: CTAs, ratings, scores, and active state indicators. Do not use gold for body text or large surface areas. Gold loses power through overuse.
- **Marble** tones handle all text hierarchy. White for primary, warm for secondary, cool for muted.
- **Lightning** effects appear only on: hero sections, major hover states, page transitions. Max 2 lightning elements visible at any time.
- **Semantic colors** appear only in data contexts: volatility ratings, RTP indicators, risk badges.

---

## 2. Typography

### Font Pairing

```css
/* Display — headers, hero text, page titles */
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap');

/* Body — readable, modern, clean */
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');

/* Data — tables, scores, stats, code-like elements */
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');

:root {
  --font-display:  'Cinzel', 'Times New Roman', serif;
  --font-body:     'Raleway', 'Helvetica Neue', sans-serif;
  --font-data:     'DM Mono', 'Courier New', monospace;
}
```

**Why these fonts:**
- **Cinzel** — designed after classical Roman inscriptions. Regal without being decorative. Reads as authority. Works at large sizes for headers and hero text.
- **Raleway** — geometric sans-serif with enough character to avoid feeling generic. Clean at body sizes. Good weight range for hierarchy.
- **DM Mono** — for data tables, RTP percentages, scores. Monospace communicates precision and analytical rigor.

### Type Scale

```css
:root {
  /* Display */
  --text-hero:       clamp(2.5rem, 5vw, 4.5rem);    /* Homepage hero only */
  --text-page-title: clamp(2rem, 3.5vw, 3rem);       /* Page titles */
  --text-section:    clamp(1.5rem, 2.5vw, 2rem);      /* Section headers */
  --text-subsection: clamp(1.2rem, 2vw, 1.5rem);      /* H3 equivalent */
  
  /* Body */
  --text-body:       1rem;                              /* 16px base */
  --text-body-lg:    1.125rem;                          /* Lead paragraphs */
  --text-small:      0.875rem;                          /* Captions, meta */
  --text-tiny:       0.75rem;                           /* Badges, labels */
  
  /* Data */
  --text-stat:       clamp(1.5rem, 3vw, 2.5rem);      /* Big stat numbers */
  --text-table:      0.875rem;                          /* Table cells */
  
  /* Line Heights */
  --leading-display: 1.15;
  --leading-body:    1.65;
  --leading-data:    1.4;
  
  /* Letter Spacing */
  --tracking-display: 0.04em;    /* Cinzel needs breathing room */
  --tracking-caps:    0.08em;    /* ALL-CAPS labels */
  --tracking-body:    0.01em;    /* Raleway is naturally spaced */
}
```

### Hierarchy Rules

- **Cinzel** used ONLY for: h1, h2, hero text, page titles, section headers, nav brand. Never for body text. Never for buttons.
- **Raleway** used for: body text, button labels, navigation links, card descriptions, meta text.
- **DM Mono** used for: RTP percentages, volatility ratings, score numbers, comparison data, table cells with numeric data.
- **ALL-CAPS** Cinzel with `--tracking-caps` for: section labels, category tags, "REVIEWED" badges. Use sparingly — max 2-3 words.

---

## 3. Spacing System

```css
:root {
  --space-xs:   0.25rem;   /* 4px  — tight internal padding */
  --space-sm:   0.5rem;    /* 8px  — badge padding, tight gaps */
  --space-md:   1rem;      /* 16px — standard element spacing */
  --space-lg:   1.5rem;    /* 24px — card padding, section gaps */
  --space-xl:   2.5rem;    /* 40px — major section spacing */
  --space-2xl:  4rem;      /* 64px — page section dividers */
  --space-3xl:  6rem;      /* 96px — hero vertical padding */
  
  /* Layout */
  --content-max:    1200px;
  --content-narrow: 800px;   /* Article/guide reading width */
  --sidebar-width:  320px;
  --card-radius:    8px;
  --card-radius-lg: 12px;
}
```

---

## 4. Visual Textures & Effects

### Marble Texture

Not a literal marble photo. A subtle noise pattern overlaid on surfaces to give depth:

```css
.marble-texture {
  background-image: 
    radial-gradient(ellipse at 20% 50%, rgba(242, 237, 232, 0.03) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(242, 237, 232, 0.02) 0%, transparent 50%);
}
```

Use on: hero sections, featured card backgrounds, section dividers. Never tile a real marble image.

### Gold Gradient

```css
.gold-gradient {
  background: linear-gradient(135deg, var(--gold-dark) 0%, var(--gold-primary) 45%, var(--gold-light) 100%);
}

.gold-text {
  background: linear-gradient(135deg, var(--gold-primary) 0%, var(--gold-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

Use for: hero headings, rating stars, featured badge text. Not for blocks of body text.

### Lightning Separator

```css
.lightning-divider {
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--gold-muted) 15%,
    var(--lightning-core) 50%,
    var(--gold-muted) 85%,
    transparent 100%
  );
  opacity: 0.6;
}
```

Use between major sections. Max 3 per page. Not between every element.

### Cloud Gradient Overlay

```css
.olympus-sky {
  background: linear-gradient(
    180deg,
    var(--olympus-navy) 0%,
    #0F1828 30%,
    #141E33 60%,
    var(--olympus-navy-mid) 100%
  );
}
```

Use for: page backgrounds, hero sections. Creates depth without images.

### Column Motif Border

```css
.column-border {
  border-left: 3px solid var(--gold-muted);
  padding-left: var(--space-lg);
  position: relative;
}

.column-border::before,
.column-border::after {
  content: '';
  position: absolute;
  left: -5px;
  width: 7px;
  height: 7px;
  background: var(--gold-primary);
  border-radius: 1px;
}

.column-border::before { top: 0; }
.column-border::after { bottom: 0; }
```

Use for: pull quotes, key stat callouts, important notices. The gold dots at top and bottom suggest column capitals and bases.

---

## 5. Component System

### 5a. Buttons

```
[Primary]     Gold gradient background, navy text, Raleway 600
              Hover: gold-light, subtle glow shadow
              Size: 48px height, 24px horizontal padding

[Secondary]   Transparent, gold border, gold text
              Hover: gold-glow background fill
              Size: 44px height, 20px horizontal padding

[Ghost]       Transparent, marble text, no border
              Hover: marble-warm text, underline fade-in
              Size: auto height, 16px horizontal padding

[CTA]         Larger primary: 56px height, 32px padding
              Gold gradient + subtle lightning shimmer on hover
              Used max 2x per page
```

### 5b. Cards

```
[Standard Card]
  Background: --olympus-navy-light
  Border: 1px solid rgba(201, 168, 76, 0.1)
  Border-radius: --card-radius
  Padding: --space-lg
  Hover: border shifts to rgba(201, 168, 76, 0.3), subtle translateY(-2px)
  Shadow: 0 4px 24px rgba(0, 0, 0, 0.3)

[Featured Card]
  Same as standard +
  Top border: 2px solid --gold-primary
  Gold-glow ambient background
  Used for: top-rated casino, editor's pick

[Stat Card]
  Compact: 120px wide
  Center-aligned
  Large DM Mono number
  Small Raleway label below
  Gold accent on the number
  Used for: RTP, volatility, max win multiplier

[Review Card]
  Horizontal layout on desktop (image left, content right)
  Vertical stack on mobile
  Rating badge in top-right corner (gold circle, DM Mono number)
  Pros/cons section at bottom with green/red semantic colors
```

### 5c. Rating System

```
[Score Badge]
  Circle: 56px diameter
  Background: --gold-primary
  Text: --olympus-navy, DM Mono 700
  Format: "8.5" (one decimal, no "/10" — implied)
  
  Score tiers:
    9.0+ → gold-light background, "LEGENDARY" label
    8.0+ → gold-primary, "EXCELLENT"
    7.0+ → gold-muted, "GOOD"
    6.0+ → marble-cool, "FAIR"
    <6.0 → marble-deep, "BELOW AVERAGE"

[Star Rating]
  5 stars, filled proportionally
  Filled: --gold-primary
  Empty: --olympus-navy-mid
  Half-star support via CSS clip-path
  
[RTP Badge]
  Inline pill shape
  Background: transparent
  Border: 1px solid (semantic color based on value)
    96%+ → --risk-low border + text
    94-96% → --risk-medium
    <94% → --risk-high
  Font: DM Mono
  Format: "96.50% RTP"
```

### 5d. Tables

```
[Comparison Table]
  Header row: --olympus-navy-mid background, Cinzel small-caps
  Body rows: alternating --olympus-navy / --olympus-navy-light
  Border: 1px solid rgba(201, 168, 76, 0.08) between rows
  Hover row: rgba(201, 168, 76, 0.05) background
  Numbers: DM Mono, right-aligned
  Text: Raleway, left-aligned
  
  First column (name): Raleway 600, marble-white
  Data columns: DM Mono 400, marble-warm
  
  Winner highlight: gold-glow background on best-value cell
  
[Slot Comparison Grid]
  Cards in 2-3 column grid
  Each card: game image top, stats below
  Stats layout: 3-column mini-grid (RTP | Volatility | Max Win)
  DM Mono for all numbers
  Compare button at bottom of each card
```

### 5e. Navigation

```
[Header]
  Fixed top, 72px height
  Background: --olympus-navy with backdrop-blur(12px)
  Border-bottom: 1px solid rgba(201, 168, 76, 0.1)
  
  Logo: "GOONZERFLOW" in Cinzel 600, --tracking-caps
  Nav links: Raleway 500, marble-warm
  Active link: marble-white + gold underline (2px, animated)
  
  CTA button: gold secondary style, right-aligned
  
  Mobile: hamburger menu, full-screen overlay with olympus-sky background
  
[Mega Menu] (for categories)
  Dropdown: olympus-navy-light background
  Grid layout: 3 columns
  Category headers: Cinzel small-caps, gold text
  Links: Raleway 400, marble-warm
  Hover: marble-white + gold arrow indicator

[Breadcrumb]
  Raleway --text-small, marble-deep
  Separator: "›" in gold-muted
  Current page: marble-white
```

### 5f. Footer

```
[Footer]
  Background: #080D18 (darker than navy)
  Top border: lightning-divider
  
  Layout: 4-column grid
    Column 1: Logo + tagline + social icons
    Column 2: Casino Reviews links
    Column 3: Slot Guides links  
    Column 4: Tools + Resources links
  
  Bottom bar: 
    Copyright text (Raleway tiny, marble-deep)
    Affiliate disclosure link
    Privacy / Terms links
    
  All links: marble-cool, hover → marble-white
```

---

## 6. Page Layouts

### 6a. Homepage

```
[Hero Section]
  Full-width, 80vh height
  Olympus-sky gradient background
  Subtle marble-texture overlay
  
  Content (centered):
    Eyebrow: "STRUCTURED INTELLIGENCE FOR GAMING" — Cinzel caps, gold-text, --text-small
    Headline: "Find the Slots\nWorth Playing" — Cinzel 700, --text-hero, marble-white
    Subhead: "RTP-verified reviews. Data-driven guides.\nNo hype." — Raleway 400, --text-body-lg, marble-warm
    CTA: [Explore Top Slots] — Primary CTA button
    Secondary: [How We Rate →] — Ghost button
  
  Lightning-divider at bottom edge

[Featured Section — "Olympus Picks"]
  Section label: "OLYMPUS PICKS" — Cinzel caps, gold, tracked
  3-column featured card grid
  Each card: casino/slot with score badge, RTP pill, one-line verdict
  
[Category Grid]
  "EXPLORE BY CATEGORY"
  4-column grid of category cards:
    - Casino Reviews
    - Slot Reviews  
    - RTP Guides
    - Comparison Tools
  Each: icon (simple SVG) + Cinzel title + Raleway description
  Hover: gold border fade-in

[Latest Content]
  "LATEST GUIDES"
  3-column blog card grid
  Each: date, title (Cinzel), excerpt (Raleway), read-time
  
[Trust Bar]
  Horizontal strip, olympus-navy-mid background
  4 stat cards in row:
    "500+ Slots Reviewed" | "Verified RTP Data" | "Independent Analysis" | "Updated Weekly"
  DM Mono numbers, Raleway labels
  
[CTA Section]
  "READY TO FIND YOUR EDGE?"
  Gold gradient text on navy
  Email signup or primary CTA
  Lightning-divider above
```

### 6b. Slot Review Template

```
[Hero]
  Game title: Cinzel --text-page-title
  Provider name: Raleway --text-small, marble-cool
  Score badge: top-right
  
[Quick Stats Bar]
  Horizontal row below hero:
  | RTP: 96.50% | Volatility: High | Max Win: 5000x | Min Bet: $0.20 |
  All DM Mono, semantic color badges
  
[Review Body]
  --content-narrow max-width
  Raleway body text, --leading-body
  H2s in Cinzel
  Column-border for key callouts
  
  Sections:
  1. Overview
  2. Gameplay & Features
  3. RTP & Volatility Analysis
  4. Bonus Features
  5. Where to Play (affiliate CTA cards)
  6. Verdict
  
[Pros/Cons Box]
  Two-column: green-bordered left (pros), red-bordered right (cons)
  Checkmarks / X marks
  Raleway text
  
[Similar Slots]
  3-column card grid at bottom
  "YOU MIGHT ALSO LIKE"

[Affiliate Disclosure]
  Bottom of page, marble-deep text, --text-small
```

### 6c. Casino Review Template

```
[Hero]
  Casino name + logo placeholder
  Score badge
  "VISIT CASINO" primary CTA
  
[Key Facts Grid]
  2-row × 4-column grid:
  | License | Year Est. | Min Deposit | Withdrawal Time |
  | Game Count | Live Casino | Mobile App | Support |
  
[Review Body]
  Same structure as slot review
  Sections:
  1. Overview
  2. Game Selection
  3. Bonuses & Promotions
  4. Banking & Withdrawals  
  5. Mobile Experience
  6. Trust & Security
  7. Verdict
  
[Bonus Box]
  Featured card with gold border
  Bonus headline (Cinzel)
  Terms summary (Raleway small)
  Wagering requirement (DM Mono, highlighted)
  [CLAIM BONUS] CTA
  
[Comparison CTA]
  "Compare with other casinos →"
```

### 6d. Guide Page Template

```
[Hero]
  Title + excerpt
  Table of contents sidebar (desktop) / accordion (mobile)
  Read time + last updated date
  
[Body]
  --content-narrow
  Long-form Raleway with Cinzel section headers
  Pull-quote blocks with column-border
  Inline stat cards for key numbers
  
[Key Takeaways Box]
  Gold-bordered card at top
  Numbered list of main points
  Cinzel "KEY TAKEAWAYS" header
```

### 6e. Comparison Page Template

```
[Hero]
  "X vs Y" or "Top N [Category]"
  Filter bar below hero: dropdowns for RTP range, volatility, provider
  
[Comparison Table]
  Full comparison table component
  Sticky header on scroll
  Sort by any column
  Winner highlight on best values
  
[Individual Cards]
  Below table: expandable cards for each item
  Click to reveal mini-review
```

### 6f. Tools Page Template

```
[Hero]
  Tool name + description
  
[Tool UI]
  Dark card surface
  Input controls: styled selects, sliders, number inputs
  All following the navy + gold palette
  Results area with DM Mono data display
  
[How It Works]
  3-step explanation below tool
  Numbered with gold circles
```

### 6g. About Page

```
Simple editorial layout:
  - "WHO WE ARE" — Cinzel hero
  - Mission statement — Raleway body-lg
  - Methodology explanation (how we rate, what "structured intelligence" means)
  - Team section (if applicable)
  - Column-border pull quotes throughout
```

### 6h. Affiliate Disclosure

```
Simple text page:
  - Clear, honest language
  - Raleway body
  - No gold, no flash — just transparency
  - Explains affiliate relationships plainly
```

---

## 7. Micro-Animations

```
[Hover — Cards]
  transform: translateY(-2px)
  border-color transition: 0.3s ease
  box-shadow expansion: 0.3s ease

[Hover — Buttons]
  Primary: background lightens, subtle box-shadow glow
  Secondary: gold-glow background fill, 0.2s ease
  Ghost: underline slides in from left, 0.3s ease

[Scroll — Section Reveals]
  Fade-up on scroll into view
  Stagger: 0.1s delay between adjacent elements
  Duration: 0.6s ease-out
  
[Lightning Shimmer]
  CSS keyframe: horizontal light sweep across gold elements
  Duration: 3s, infinite, ease-in-out
  Applied to: hero CTA only, featured card borders on hover
  Subtle — 5% opacity shift, not a flash

[Page Transitions]
  Fade: 0.2s opacity transition between routes
  No sliding, no complex choreography
  
[Score Badge Load]
  Counter animation from 0 to final score
  Duration: 1.2s, ease-out
  DM Mono numbers ticking up
```

### Animation Rules

- Max 3 animated elements visible simultaneously
- No animation on content the user is reading
- All animations respect `prefers-reduced-motion`
- Lightning effects: max 2 per page, never on mobile
- Score counter: triggers once on scroll-into-view, doesn't repeat

---

## 8. Responsive Breakpoints

```css
:root {
  --bp-mobile:   480px;
  --bp-tablet:   768px;
  --bp-desktop:  1024px;
  --bp-wide:     1440px;
}
```

### Mobile-Specific Rules

- Hero text: clamp handles sizing
- Card grids: single column
- Tables: horizontal scroll with sticky first column
- Navigation: full-screen overlay
- Lightning effects: disabled
- Score badges: smaller (44px)
- Comparison tables: swipeable card view instead of table

---

## 9. Implementation Notes for BTWM Reskin

The existing BTWM codebase provides: Next.js routing, markdown content system (`src/data/`), component structure (`src/components/`), page templates (`src/pages/`).

### Reskin Strategy (Not Rebuild)

1. **Replace CSS variables** — swap BTWM's existing design tokens with Olympus palette
2. **Replace fonts** — add Cinzel + Raleway + DM Mono imports
3. **Restyle components** — update existing card, button, nav components with new styles
4. **Add new components** — rating badge, RTP pill, comparison table, stat card, lightning divider
5. **Update layouts** — modify page templates to match section structures above
6. **Add textures** — marble overlay, gold gradients, olympus-sky backgrounds as CSS utilities

### New Components Needed

```
components/
  ui/
    RatingBadge.jsx        — circular score display
    RTPPill.jsx            — inline RTP with semantic color
    VolatilityBadge.jsx    — low/med/high with icon
    StarRating.jsx         — 5-star proportional fill
    LightningDivider.jsx   — gold gradient separator
    StatCard.jsx           — number + label compact display
    ColumnQuote.jsx        — pull-quote with column border
    GoldCTA.jsx            — primary call-to-action with shimmer
  
  review/
    QuickStatsBar.jsx      — horizontal stat row for reviews
    ProsCons.jsx           — two-column pros/cons display
    BonusBox.jsx           — featured bonus card with terms
    ComparisonTable.jsx    — sortable data table
    SimilarItems.jsx       — 3-column related content grid
  
  layout/
    OlympusHero.jsx        — hero section with sky gradient
    SectionHeader.jsx      — "CATEGORY" label with gold accent
    TrustBar.jsx           — 4-stat horizontal strip
    MegaMenu.jsx           — category dropdown navigation
```

### CSS Architecture

```
styles/
  globals.css              — reset, variables, font imports
  olympus-tokens.css       — all design token variables
  olympus-utilities.css    — utility classes for textures, gradients, dividers
  components/              — component-specific styles or CSS modules
```

---

## 10. Content Tone Reference

### Headlines (Cinzel)
- "The Slots Worth Your Time"
- "Casino Intelligence, Not Casino Hype"
- "Data-Driven. Player-Focused."
- "Find Your Edge"

### Body (Raleway)
- Analytical but accessible
- Short paragraphs (3-4 sentences max)
- Data cited with specific numbers ("96.50% RTP, verified")
- No exclamation marks in body text
- No "AMAZING BONUS!!!" language
- Confident without being aggressive

### Labels
- ALL-CAPS Cinzel for category labels
- Title Case Raleway for navigation
- Sentence case for body and descriptions
- DM Mono for any number that matters

---

## 11. What This Does NOT Include

- Actual game screenshots or casino logos (legal/IP — use placeholders)
- Real affiliate tracking code (future phase)
- User accounts or login
- Comment system
- Dark/light mode toggle (always dark — that's the brand)
- Search functionality (add later if content volume demands it)
- Animation libraries beyond CSS

---

## 12. Site Information Architecture

### Navigation + Routes

```
GOONZERFLOW
├── Home                    /                    (restyle index.js)
├── Slots                   /posts/              (rename nav label: "Slots")
│   └── [slot-review]       /posts/[slug]        (slot review template)
├── Casinos                 /reviews/            (rename nav label: "Casinos")
│   └── [casino-review]     /reviews/[slug]      (casino review template)
├── Guides                  /blog/               (rename nav label: "Guides")
│   └── [guide]             /blog/[slug]         (guide template)
├── Tools                   /projects/           (repurpose projects → tools)
│   └── [tool]              /projects/[slug]     (tool template)
├── About                   /about               (restyle)
└── Affiliate Disclosure    /policies            (restyle, rename label)
```

**Drop from nav:** contact, demo, login, post-one/two/three/four (delete pages or leave unlinked)

**Keep in routing but hide from nav:** category/[slug], tag/[slug] (useful for SEO taxonomy)

### Content Data Mapping

```
src/data/posts/       → Slot reviews (markdown with RTP/volatility frontmatter)
src/data/reviews/     → Casino reviews (markdown with bonus/trust frontmatter)
src/data/blog/        → Guides (markdown, long-form)
src/data/projects/    → Tools (repurpose for tool pages)
src/data/heros/       → Homepage hero content
src/data/features/    → Category grid content
src/data/services/    → Can repurpose or ignore
```

---

## 13. BTWM Component Map: Modify vs. Add

### MODIFY (restyle with Olympus tokens)

```
header/header-1.js           → Olympus nav
                               "GOONZERFLOW" in Cinzel 600, --tracking-caps
                               Raleway 500 nav links (Slots | Casinos | Guides | Tools | About)
                               Gold secondary CTA button right-aligned
                               backdrop-blur(12px), gold border-bottom
                               Mobile: hamburger → full-screen overlay with olympus-sky

layout/footer.js             → Olympus footer
                               4-column grid, lightning-divider top border
                               Background: #080D18
                               Columns: Logo+tagline | Slots links | Casino links | Tools+Resources
                               Bottom bar: copyright, disclosure link, privacy/terms

layout/layout.js             → Add olympus-sky body background, wrap content in max-width

home-page/hero.js            → Olympus hero
                               80vh, olympus-sky gradient, marble-texture overlay
                               Eyebrow + headline + subhead + dual CTAs
                               Lightning-divider at bottom

home-page/featured-posts.js  → "OLYMPUS PICKS" section
                               3-column featured card grid with score badges + RTP pills

home-page/services.js        → Category grid
                               4 cards: Slots, Casinos, Guides, Tools
                               Cinzel titles, Raleway descriptions, gold hover borders

posts/post-item.js           → Slot review card
                               Add RatingBadge, RTPPill, one-line verdict
                               Gold border on hover, translateY(-2px)

posts/post-detail/           → Slot review template layout
                               Hero + QuickStatsBar + body + ProsCons + SimilarItems
                               --content-narrow max-width for body

posts/all-items.js           → Slot listing grid (3-column)

seo/seo-head.js              → Keep, update default meta description + OG tags
seo/schema-markup.js         → Keep, extend for Review + Article structured data

banners/                     → Simplify: delete most, keep one Olympus-styled page banner
                               Cinzel title, marble-warm breadcrumb, olympus-sky background
```

### ADD (new components)

```
components/ui/
  RatingBadge.jsx            — Circular 56px score display, DM Mono, gold tiers
  RTPPill.jsx                — Inline pill, DM Mono, semantic color border by value
  VolatilityBadge.jsx        — Low/Med/High label with semantic color
  StarRating.jsx             — 5-star proportional fill, gold/navy
  LightningDivider.jsx       — Gold gradient separator, 2px height
  StatCard.jsx               — Number (DM Mono) + label (Raleway), compact
  ColumnQuote.jsx            — Pull-quote with gold column border + capital dots
  GoldCTA.jsx                — Primary CTA: gold gradient, shimmer on hover
                               Secondary CTA: gold border, transparent fill

components/review/
  QuickStatsBar.jsx          — Horizontal row: RTP | Volatility | Max Win | Min Bet
  ProsCons.jsx               — Two-column: green-bordered pros, red-bordered cons
  BonusBox.jsx               — Gold-bordered card: headline, terms, wagering, CTA
  ComparisonTable.jsx        — Sortable table, sticky header, winner highlight
  SimilarItems.jsx           — 3-column "YOU MIGHT ALSO LIKE" grid
  TrustBar.jsx               — 4-stat horizontal strip (DM Mono numbers, Raleway labels)

components/layout/
  OlympusHero.jsx            — Reusable hero section with sky gradient + marble texture
  SectionHeader.jsx          — "CATEGORY LABEL" in Cinzel caps, gold, tracked
  MegaMenu.jsx               — Category dropdown (future, placeholder for now)

styles/
  olympus-tokens.css         — All CSS variables from Section 1-3
  olympus-utilities.css      — .gold-text, .marble-texture, .lightning-divider,
                               .olympus-sky, .column-border utility classes
```

### IGNORE / DELETE LATER

```
home-page/pricing-tab.js    — Not needed
home-page/testimonial.js    — Not needed
home-page/brand.js          — Not needed
contact/                    — Not needed (no contact form)
demo/                       — Not needed
team/                       — Not needed
header/header-2.js          — Keep only header-1
header/header-3.js          — Keep only header-1
```

---

## 14. Build Sequence (3-Day Sprint)

### DAY 1 — Foundation (Tokens + Layout Shell)

```
☐ Create styles/olympus-tokens.css
    All CSS variables from Sections 1-3 of this document
    
☐ Create styles/olympus-utilities.css
    .gold-text, .gold-gradient, .marble-texture, .olympus-sky,
    .column-border, .lightning-divider utility classes
    
☐ Update styles/globals.css
    Import olympus-tokens.css and olympus-utilities.css
    Add Cinzel + Raleway + DM Mono font imports from Google Fonts
    Reset body to olympus-sky background, marble-white default text
    Set font-family defaults: --font-body for body, --font-display for headings

☐ Build components/ui/LightningDivider.jsx
    Gold gradient separator per Section 4 spec

☐ Build components/ui/GoldCTA.jsx
    Primary (gold gradient bg, navy text) + Secondary (gold border, transparent)
    Per Section 5a button spec

☐ Restyle header/header-1.js → Olympus nav
    "GOONZERFLOW" Cinzel logo
    Nav links: Slots | Casinos | Guides | Tools | About
    Gold secondary CTA right-aligned
    Fixed, 72px, backdrop-blur, gold border-bottom
    Mobile hamburger → full-screen overlay

☐ Restyle layout/footer.js → Olympus footer
    4-column grid, #080D18 background
    Lightning-divider top border
    Column 1: logo + tagline
    Columns 2-4: Slots / Casinos / Tools+Resources links
    Bottom bar: copyright, disclosure, privacy

☐ Restyle layout/layout.js
    olympus-sky body background
    Content max-width wrapper

☐ VERIFY: Run dev server, homepage loads with Olympus nav + footer + background
```

### DAY 2 — Components + Homepage

```
☐ Build components/ui/RatingBadge.jsx
    56px circle, DM Mono score, gold tier backgrounds
    Score tiers: 9+ LEGENDARY, 8+ EXCELLENT, 7+ GOOD, 6+ FAIR, <6 BELOW AVERAGE

☐ Build components/ui/RTPPill.jsx
    Inline pill, DM Mono, semantic color:
    96%+ green, 94-96% amber, <94% red

☐ Build components/ui/VolatilityBadge.jsx
    Low/Medium/High with semantic color

☐ Build components/ui/StatCard.jsx
    Large DM Mono number + small Raleway label, compact

☐ Build components/ui/StarRating.jsx
    5-star proportional fill, gold/navy, half-star support

☐ Build components/review/TrustBar.jsx
    4 stat cards in horizontal row
    "500+ Slots Reviewed" | "Verified RTP Data" | "Independent" | "Updated Weekly"

☐ Restyle home-page/hero.js → Olympus hero
    80vh, olympus-sky + marble-texture overlay
    Eyebrow: "STRUCTURED INTELLIGENCE FOR GAMING" Cinzel caps gold
    Headline: "Find the Slots Worth Playing" Cinzel hero marble-white
    Subhead: Raleway body-lg marble-warm
    Primary CTA + Ghost secondary CTA
    Lightning-divider bottom

☐ Build SectionHeader.jsx
    "OLYMPUS PICKS" / "EXPLORE BY CATEGORY" / "LATEST GUIDES"
    Cinzel caps, gold, tracked

☐ Restyle home-page/featured-posts.js → Olympus Picks
    3-column featured cards with RatingBadge + RTPPill

☐ Restyle home-page/services.js → Category Grid
    4 cards: Slots, Casinos, Guides, Tools
    Icon + Cinzel title + Raleway desc + gold hover border

☐ Restyle posts/post-item.js → Slot card
    RatingBadge top-right, RTPPill inline, one-line verdict

☐ Add latest guides section to homepage

☐ Add TrustBar section to homepage

☐ Add CTA section ("READY TO FIND YOUR EDGE?") to homepage

☐ VERIFY: Homepage fully themed with all sections, placeholder content
```

### DAY 3 — Templates + Polish

```
☐ Build components/review/QuickStatsBar.jsx
    Horizontal: RTP | Volatility | Max Win | Min Bet
    DM Mono values, semantic color badges

☐ Build components/review/ProsCons.jsx
    Two-column, green-bordered pros, red-bordered cons
    Checkmarks / X marks

☐ Build components/review/BonusBox.jsx
    Gold-bordered card, Cinzel headline, terms, wagering (DM Mono), CTA

☐ Build components/ui/ColumnQuote.jsx
    Gold column border with capital dots top/bottom

☐ Restyle posts/post-detail/ → Slot review template
    Hero (game title Cinzel + provider Raleway + score badge)
    QuickStatsBar below hero
    Review body (--content-narrow, Raleway, Cinzel h2s)
    ProsCons box
    "Where to Play" CTA section
    SimilarItems grid ("YOU MIGHT ALSO LIKE")
    Affiliate disclosure footer

☐ Restyle reviews/[slug] → Casino review template
    Hero (casino name + score badge + "VISIT CASINO" CTA)
    Key facts 2×4 grid
    Review body (same style as slot)
    BonusBox
    "Compare with other casinos →" link

☐ Restyle blog/[slug] → Guide template
    Hero (title + excerpt + read time + last updated)
    TOC sidebar on desktop / accordion on mobile
    Body (--content-narrow, long-form Raleway)
    Key Takeaways box (gold border, numbered list)
    ColumnQuote for pull-quotes

☐ Restyle projects/ → Tools listing
    Grid of tool cards with descriptions
    Placeholder tool page template (dark card surface, input controls)

☐ Restyle about.js → Olympus About
    "WHO WE ARE" Cinzel hero
    Methodology explanation
    ColumnQuote pull-quotes

☐ Restyle policies.js → Affiliate Disclosure
    Clean text, Raleway body, no gold/flash, honest language

☐ Add placeholder content to EVERY template
    Realistic structure: proper headings, fake RTP numbers,
    placeholder review text, dummy stat values
    Must look like a real page, not lorem ipsum

☐ Add micro-animations
    Card hover: translateY(-2px) + border-color transition
    Button hover: glow / fill transitions
    Section reveal: fade-up on scroll, 0.1s stagger
    Lightning shimmer: hero CTA only, 3s cycle
    Score badge: counter animation on scroll-into-view
    All respect prefers-reduced-motion

☐ Responsive pass
    Mobile nav: full-screen overlay
    Cards: single column on mobile
    Tables: horizontal scroll, sticky first column
    Hero text: clamp sizing (already in tokens)
    Lightning effects: disabled on mobile
    Score badges: 44px on mobile

☐ VERIFY: All routes render, all templates themed,
    mobile works, animations smooth, no broken layouts
```

---

## 15. Post-Shell: Wiring Real Content

After the 3-day shell sprint is complete:

1. Use the existing pipeline to generate 5-10 real pages:
   ```
   research_query.py → serp_analyzer.py → research_to_spec.py → generate_page.py
   ```

2. Frontmatter for slot reviews should include:
   ```yaml
   rtp: 96.50
   volatility: "High"
   max_win: "5000x"
   min_bet: 0.20
   provider: "NetEnt"
   rating: 8.5
   pros: ["High RTP", "Great features"]
   cons: ["High volatility", "Slow base game"]
   ```

3. Templates read these frontmatter fields and render via the new components
   (RatingBadge reads `rating`, RTPPill reads `rtp`, QuickStatsBar reads all stats)

4. Deploy and run `post_deploy_verify.py` on each page

This connects the AutomationOS content pipeline directly to the themed site.
