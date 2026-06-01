---
name: Kinetic Pulse
colors:
  surface: '#f9f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f9f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f5'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e4'
  on-surface: '#1a1c1d'
  on-surface-variant: '#5c3f41'
  inverse-surface: '#2f3132'
  inverse-on-surface: '#f0f0f2'
  outline: '#906f70'
  outline-variant: '#e5bdbe'
  surface-tint: '#be0037'
  primary: '#ba0035'
  on-primary: '#ffffff'
  primary-container: '#e12149'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3b6'
  secondary: '#535e7b'
  on-secondary: '#ffffff'
  secondary-container: '#d1dcff'
  on-secondary-container: '#55607e'
  tertiary: '#006a43'
  on-tertiary: '#ffffff'
  tertiary-container: '#008656'
  on-tertiary-container: '#f6fff6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b6'
  on-primary-fixed: '#40000c'
  on-primary-fixed-variant: '#920028'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#bbc6e8'
  on-secondary-fixed: '#0f1b35'
  on-secondary-fixed-variant: '#3b4663'
  tertiary-fixed: '#7ffaba'
  tertiary-fixed-dim: '#62dda0'
  on-tertiary-fixed: '#002112'
  on-tertiary-fixed-variant: '#005233'
  background: '#f9f9fb'
  on-background: '#1a1c1d'
  surface-variant: '#e2e2e4'
  velocity-pink: '#FF3B5C'
  deep-track: '#0F1B35'
  surface-mist: '#F5F5F7'
  pure-white: '#FFFFFF'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  stats-number:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 40px
  stack-sm: 4px
  stack-md: 12px
  stack-lg: 24px
---

## Brand & Style
The design system is built for high-performance social connection. It targets runners who value momentum, reliability, and the "runner’s high." The brand personality is energetic, disciplined, and forward-moving. 

The visual style is **Corporate Modern with a High-Contrast Athletic edge**. It utilizes the precision of SaaS interfaces—clean lines and systematic grids—but injects the "loud" energy of fitness apparel through vibrant accent colors and aggressive typography scales. The interface should feel like a high-end sports watch: functional, legible at a glance, and technologically advanced.

## Colors
The palette is centered on "Velocity Pink," a high-vis color that signals action and urgency. This is balanced by "Deep Track," a near-black navy that provides a professional, grounded foundation and ensures high-contrast readability for data-heavy screens like pace charts or distance trackers.

- **Primary (Velocity Pink):** Used for primary actions, progress indicators, and active states.
- **Secondary (Deep Track):** Used for primary text, navigation backgrounds, and heavy structural elements.
- **Neutral (Surface Mist):** Used as the primary canvas color to reduce eye strain compared to pure white, while keeping the interface feeling fresh.
- **Pure White:** Reserved for card backgrounds and input fields to create a clear "layering" effect against the neutral surface.

## Typography
This design system employs a three-tier typeface strategy to balance athletic energy with technical precision. 

**Hanken Grotesk** is used for headlines; its sharp, contemporary terminals feel fast and modern. **Inter** is the workhorse for body copy, chosen for its exceptional legibility during activity. **JetBrains Mono** is introduced for technical data, labels, and "stats" (like pace, distance, and time), evoking a stopwatch or digital readout aesthetic. 

Headlines should use tight letter-spacing to feel more impactful, while labels should be tracked out for clarity.

## Layout & Spacing
The layout follows a **Fluid Grid** model based on an 8px square system. For mobile, a 4-column grid is used with 20px outside margins. For desktop, a 12-column grid is implemented with a max-width of 1280px.

Spacing is designed to be "airy" but structured. Large vertical stacks (24px+) are used to separate major sections, while tight spacing (4px-8px) is used to group related metrics together. Horizontal gutters are strictly 16px to maintain a compact, high-density feel suitable for data-rich fitness apps.

## Elevation & Depth
Hierarchy is achieved through **Tonal Layers and Low-Contrast Outlines** rather than heavy shadows. This maintains a "flat-plus" look that feels fast and lightweight.

- **Level 0 (Base):** Surface Mist (#F5F5F7).
- **Level 1 (Cards):** Pure White (#FFFFFF) with a 1px solid stroke in #E0E0E5. No shadow.
- **Level 2 (Interactive):** Pure White with a subtle 4px blur, 4% opacity black shadow to indicate "lift" on hover or press.
- **Overlays:** Semi-transparent Deep Track (#0F1B35 at 80%) for modals to keep the focus entirely on the action.

## Shapes
The design system uses a **Rounded** language (8px / 0.5rem base) to feel approachable yet disciplined. 

- **Buttons & Inputs:** Use the 0.5rem base for a modern, "squircle" feel.
- **Avatars & Progress Rings:** Always circular to represent the "loop" of a track.
- **Feature Cards:** Use `rounded-lg` (16px) to create a distinct containerized look.
- **Selection Chips:** Use `rounded-xl` (24px) for a full-pill shape, making them easily tappable targets for runners on the move.

## Components
- **Buttons:** Primary buttons use a solid Velocity Pink background with White text. Secondary buttons use a Deep Track outline. All buttons have a minimum height of 48px to ensure ease of use during physical activity.
- **Stats Chips:** Small, pill-shaped indicators using JetBrains Mono text. Backgrounds should be light tints of the primary color (e.g., Pink at 10% opacity) to categorize run types (e.g., "Sprints," "Trail").
- **Activity Cards:** White background, 16px corner radius, featuring a prominent Hanken Grotesk headline and a JetBrains Mono stat row at the bottom.
- **Inputs:** Clean, white fields with a 2px Deep Track border when focused. Labels must always be visible (not floating) using the `label-caps` style for maximum clarity.
- **Match Indicator:** A distinctive component showing "Match Compatibility" using a circular progress ring in Velocity Pink.
- **Navigation:** A bottom-fixed navigation bar on mobile using Deep Track as the background with high-contrast white icons for "Run," "Matches," "Routes," and "Profile."