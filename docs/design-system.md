# Design System & UI Architecture Specification
## Bozo Automobile — "Machined Obsidian & Ethereal Glass"
*Vanguard UI Architecture for the Modern Swiss Automotive Atelier*

---

## 1. Design Philosophy & Aesthetic Manifesto

The visual identity of Bozo Automobile rejects generic "car repair shop" templates in favor of a **Machined Obsidian & Ethereal Glass** aesthetic. Inspired by high-precision Swiss watchmaking, contemporary hypercars, and advanced avionics telemetry, the design system blends:
- **Ultra-Deep Obsidian Canvas:** Dark, noise-free surfaces that evoke an engineered cleanroom or high-end motorsport pit lane.
- **Precision Logo Chromatic Alignment:** Direct harmonic integration with the Bozo Automobile logo's three signature motorsport colors: **Racing Red** (`#f40101`), **Motorsport Blue** (`#1c86ee`), and **Motorsport Violet** (`#9932cc`).
- **Tactile Doppelrand Hardware Architecture:** Nested dual-layer bezels with sub-millimeter inner highlights that feel physical, durable, and crafted.
- **Ethereal Atmospheric Mesh:** Subtle, wide-aperture radial lighting that illuminates cards and typography without introducing visual clutter or artificial gradients.

---

## 2. Color System & Chromatic Tokens

### 2.1 Brand Identity Chromatic Tokens (Logo-Derived)

Directly sampled from the vector paths of the official Bozo Automobile emblem (`BozoLogo.tsx` / `bozo-logo.svg`):

| Token Name | Hex Code | RGB / RGBA | Role & Application |
| :--- | :--- | :--- | :--- |
| `--brand-red` / `--accent` | `#f40101` | `rgb(244, 1, 1)` | Primary action color. Island CTA buttons, urgent breakdown hotline, key pricing highlights, text selection color. |
| `--accent-hover` | `#c90000` | `rgb(201, 0, 0)` | Hover state for primary red actions. |
| `--accent-glow` | — | `rgba(244, 1, 1, 0.28)` | Diffuse ambient glow around primary interactive buttons. |
| `--brand-blue` | `#1c86ee` | `rgb(28, 134, 238)` | Technical precision, telemetry status indicators, active step badges, input focus rings, region selector. |
| `--brand-blue-hover` | `#166ecc` | `rgb(22, 110, 204)` | Hover state for secondary interactive blue elements. |
| `--brand-blue-glow` | — | `rgba(28, 134, 238, 0.28)` | Subtle border glow on active cards and selected radio chips. |
| `--brand-purple` | `#9932cc` | `rgb(153, 50, 204)` | Chromatic harmonic bridge between Blue and Red in atmospheric radial gradients and tri-stripe ribbons. |
| `--brand-purple-glow` | — | `rgba(153, 50, 204, 0.25)` | Ambient mesh accentuation. |

### 2.2 Surface & Canvas Architecture

The interface uses a calibrated dark surface hierarchy to create natural visual depth:

| Token | Hex Value | Semantic Usage |
| :--- | :--- | :--- |
| `--bg` | `#07080a` | Absolute base background across all pages. Deep obsidian. |
| `--surface` | `#0e1117` | Contrast sections and outer shell layers. |
| `--surface-card` | `#0a0c10` | Default card and module core background. |
| `--surface-elevated` | `#141822` | Popovers, language/region dropdown menus, modals. |
| `--surface-highlight`| `#1b202e` | Interactive hover and active focus backgrounds. |

### 2.3 Borders, Highlights & Translucencies

Physicality is reinforced through subtle light refraction rather than heavy drop shadows:

| Token | Value | Visual Function |
| :--- | :--- | :--- |
| `--border-hairline` | `rgba(255, 255, 255, 0.08)` | Standard card, button, and divider boundary. |
| `--border-highlight`| `rgba(255, 255, 255, 0.16)` | Card hover boundaries and active container borders. |
| `--inner-highlight` | `inset 0 1px 1px rgba(255, 255, 255, 0.12)` | Subtle top-edge light catch simulating milled aluminum/glass. |

### 2.4 Text & Ink Hierarchy

| Token | Hex Value | Purpose |
| :--- | :--- | :--- |
| `--ink` | `#f9fbfc` | Primary headings, titles, high-contrast readable body text. |
| `--ink-secondary` | `#9ca3af` | Secondary descriptive text, subheadings, specification labels. |
| `--ink-muted` | `#6b7280` | Tertiary metadata, timestamps, copyright disclaimers. |

---

## 3. Typography & Typesetting Standards

The typographic hierarchy establishes clear contrast between high-impact headlines, functional interface copy, and technical telemetry:

```
Headings & Display  ──►  Space Grotesk / Plus Jakarta Sans (font-display)
UI Copy & Body      ──►  Plus Jakarta Sans / system-ui (font-sans-ui)
Technical Data      ──►  JetBrains Mono / ui-monospace (font-mono-tech)
```

### 3.1 Font Family Declarations
```css
--font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
--font-display: 'Space Grotesk', 'Plus Jakarta Sans', sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;
```

### 3.2 Typographic Hierarchy Scale

| Level | Size | Weight | Line Height | Tracking | Class / Style |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | $48\text{px} – 64\text{px}$ | 700 Bold | `1.05` | `-0.025em` | `font-display text-4xl sm:text-6xl font-bold` |
| **Section H1 / H2**| $30\text{px} – 48\text{px}$ | 700 Bold | `1.1` | `-0.02em` | `font-display text-3xl sm:text-5xl font-bold` |
| **Card H3** | $20\text{px} – 24\text{px}$ | 600 SemiBold| `1.25` | `-0.015em`| `font-display text-xl sm:text-2xl font-semibold` |
| **Body Large** | $18\text{px}$ | 400 Regular | `1.6` | `0` | `font-sans-ui text-lg text-[#9ca3af]` |
| **Body Standard** | $16\text{px}$ | 400 Regular | `1.6` | `0` | `font-sans-ui text-base text-[#9ca3af]` |
| **UI Label / Meta**| $13\text{px} – 14\text{px}$ | 500 Medium | `1.4` | `+0.01em` | `font-sans-ui text-sm font-medium` |
| **Telemetry Badge**| $11\text{px}$ | 600 SemiBold| `1.0` | `+0.15em` | `font-mono-tech text-[11px] uppercase tracking-widest` |

---

## 4. Signature Component Architecture

### 4.1 Doppelrand (Double-Bezel) Hardware Shell

A multi-layered nesting structure that provides physical containment without visual heaviness:
```html
<div class="doppelrand-shell">
  <div class="doppelrand-core">
    <!-- Component Content -->
  </div>
</div>
```
- **Outer Shell (`.doppelrand-shell`):** 
  - Padding: `6px`
  - Border radius: `2rem` (32px)
  - Subtle top-to-bottom white gradient wash (`rgba(255,255,255,0.08)` to `0.02`)
  - Border: 1px hairline (`--border-hairline`)
  - Spring hover elevation with blue glow halo: `box-shadow: 0 0 30px -10px var(--brand-blue-glow)`
- **Core Container (`.doppelrand-core`):**
  - Radius: `calc(2rem - 6px)` (26px)
  - Background: Obsidian surface card (`--surface-card: #0a0c10`)
  - Sub-millimeter inset highlight: `box-shadow: inset 0 1px 1px rgba(255,255,255,0.12)`

---

### 4.2 Button-in-Button Island CTA (`.btn-island`)

The primary call-to-action component designed with automotive tactile feedback:
```html
<a href="/termin-buchen" class="btn-island">
  <span>Termin online buchen</span>
  <span class="btn-island-icon">
    <ArrowUpRight className="w-4 h-4" />
  </span>
</a>
```
- **Pill Geometry:** `rounded-full`, padding `0.875rem 1.75rem` (14px 28px).
- **Racing Red Linear Gradient:** `linear-gradient(135deg, #f40101 0%, #c90000 100%)`.
- **Atmospheric Red Glow:** `box-shadow: 0 0 25px rgba(244, 1, 1, 0.35)`.
- **Nested Floating Icon Disc:** Translucent circle `rgba(0,0,0,0.25)` that shifts dynamically by `+3px, -2px` with a scale of `1.06` on hover.

---

### 4.3 Secondary Ghost Island Button (`.btn-ghost-island`)

Used for secondary actions, phone consultations, and document downloads:
```html
<a href="tel:+41795772547" class="btn-ghost-island">
  <Phone className="w-4 h-4 text-[#f40101]" />
  <span>+41 79 577 25 47</span>
</a>
```
- **Background:** Subtle translucent frosted glass (`rgba(255, 255, 255, 0.03)` with `backdrop-filter: blur(16px)`).
- **Hairline Border:** 1px `var(--border-hairline)`, transitioning to `var(--border-highlight)` on hover.

---

### 4.4 Micro Telemetry Badges (`.telemetry-badge`)

Technical indicator pills displaying status, warranties, and cantonal protocols:
```html
<span class="telemetry-badge">
  <span class="w-1.5 h-1.5 rounded-full bg-[#1c86ee]" />
  MEISTERWERKSTATT // SCHLIEREN
</span>
```
- Monospace uppercase typeface (`font-mono-tech`).
- Tracking: `0.15em` letter-spacing.
- Integrated colored LED beacon dot (`#1c86ee` blue or `#f40101` red).

---

### 4.5 Bozo Motorsport Tri-Stripe

An iconic three-tone linear ribbon matching the brand logo:
```html
<div class="h-[2px] w-full flex">
  <div class="h-full w-1/3 bg-[#f40101]" />
  <div class="h-full w-1/3 bg-[#9932cc]" />
  <div class="h-full w-1/3 bg-[#1c86ee]" />
</div>
```
Applied across the top boundary of critical cards, emergency alerts, and modal dialogs.

---

### 4.6 Radar Beacon (`.radar-beacon`)

Live operational status beacon communicating real-time workshop availability:
```html
<span class="radar-beacon" />
```
- CSS pulse keyframe radiating an expanding halo in emerald green (`#4ade80`).

---

### 4.7 Persistent Mobile Action Bar (`MobileActionBar`)

Fixed thumb-accessible mobile utility dock visible on mobile viewports ($< 768\text{px}$):
- **3-Column Tactical Layout:**
  1. **Direct Call:** Phone icon with instant dialer trigger (`tel:+41795772547`).
  2. **WhatsApp Direct:** Emerald WhatsApp icon initiating formatted inquiry.
  3. **Instant Booking:** Racing Red high-contrast button linking directly to `/termin-buchen`.

---

## 5. Motion, Keyframes & Interactive Timing

Motion is engineered with calibrated cubic bezier curves that simulate physical inertia rather than linear transitions:

### 5.1 Easing Curves
```css
--ease-spring: cubic-bezier(0.32, 0.72, 0, 1);
--ease-cinematic: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
```

### 5.2 Keyframe Definitions
- **`fluid-fade-up`:** Renders content with a subtle upward glide (24px to 0) accompanied by a progressive un-blur ($6\text{px} \rightarrow 0$) over 900ms.
- **`radar-pulse`:** Continuous cyclical pulse animation creating an authentic live telemetry feel on status indicators.

---

## 6. Accessibility & Usability Standards

1. **High Contrast Compliance:** White text on `#07080a` exceeds WCAG AAA standards for body and display text ($> 15:1$ ratio).
2. **Keyboard Focus Rings:** Explicit `:focus-visible` styling using Motorsport Blue (`#1c86ee`) with a 3px offset to ensure clarity without disrupting the aesthetic.
3. **No-Jank Dropdown Menus:** Top navigation dropdowns for Language and Region include click-outside event listeners, scroll locks on mobile drawers, and zero overflow clipping.
4. **Touch Target Sizing:** All buttons and interactive pills meet or exceed the recommended $44\text{px} \times 44\text{px}$ minimum touch target size.
