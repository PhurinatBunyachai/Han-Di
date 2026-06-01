---
name: HanDi
colors:
  surface: '#fcf8ff'
  surface-dim: '#dcd8e5'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2ff'
  surface-container: '#f0ecf9'
  surface-container-high: '#eae6f4'
  surface-container-highest: '#e4e1ee'
  on-surface: '#1b1b24'
  on-surface-variant: '#464555'
  inverse-surface: '#302f39'
  inverse-on-surface: '#f3effc'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#7d3100'
  on-tertiary: '#ffffff'
  tertiary-container: '#a34200'
  on-tertiary-container: '#ffd2be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb693'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7a3000'
  background: '#fcf8ff'
  on-background: '#1b1b24'
  surface-variant: '#e4e1ee'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
The brand personality is transparent, efficient, and frictionless. It aims to remove the social awkwardness of debt through a professional yet accessible interface. The design style is **Modern Minimalism**, leaning heavily on typographic hierarchy and generous negative space to reduce cognitive load during financial calculations. 

The aesthetic is characterized by a "clinical-chic" look: high-quality sans-serif type, a restricted color palette, and subtle depth through soft shadows. It avoids unnecessary decoration, ensuring that the user's focus remains entirely on the transaction data and settlement actions.

## Colors
The palette is rooted in a high-brightness environment to maintain a sense of clarity and "clean slates." 

- **Primary (Deep Indigo):** Used for primary actions, active states, and brand-heavy elements. It provides a serious, trustworthy anchor for the UI.
- **Success (Emerald Green):** Specifically reserved for positive balances ("You are owed") and completed payment confirmations.
- **Destructive (Burnt Orange):** Utilized for negative balances ("You owe") and high-priority alerts. This distinct warmth provides clear differentiation from the primary and secondary actions without being as aggressive as a standard red.
- **Neutrals:** A range of off-whites and cool grays are used to create subtle layering without the harshness of pure black or white.

## Typography
This design system uses **Inter** exclusively to leverage its exceptional legibility and systematic feel. 

Hierarchy is established through weight and scale rather than color. Large, bold headlines are used for totals and balances to provide immediate context. Body copy remains airy with a slightly increased line height (1.5x) to ensure readability in list-heavy views. Label styles use a subtle uppercase treatment and increased tracking to differentiate "metadata" from interactive content.

## Layout & Spacing
The layout follows a **Fluid-to-Fixed Grid** model. On mobile, the system uses a single-column layout with 16px side margins. On desktop, the content is centered within a 1200px container using a 12-column grid.

Spacing follows an 8pt rhythm to maintain mathematical harmony. "Whitespace as a separator" is a core principle—using padding rather than lines to group related items. Groupings of debt and people should use the `md` (24px) spacing unit to ensure the UI doesn't feel cramped during complex bill entries.

## Elevation & Depth
Depth is communicated through **Tonal Layering** and **Ambient Shadows**. Instead of traditional heavy drop shadows, this design system utilizes:

1.  **Level 0 (Base):** The high-brightness surface background.
2.  **Level 1 (Cards):** Pure white (#FFFFFF) surfaces with a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.03)).
3.  **Level 2 (Interactive):** Elements like active input fields or hovered buttons gain a slightly more defined shadow to suggest "pressability."

Avoid using borders where possible; use the contrast between the background and white cards to define edges.

## Shapes
The shape language is friendly and extremely modern. Following the request for **pill-shaped** roundedness, the system uses a base radius of 1rem (16px), but scales up significantly for major containers.

- **Standard Buttons/Inputs:** 1rem (rounded-base)
- **Cards & Modals:** 3rem (rounded-2xl)
- **Avatars & Status Pills:** Full circle (pill-shaped)

The generous rounding softens the "financial" nature of the app, making the interface feel more like a lifestyle tool and less like a spreadsheet.

## Components

- **Elegant Cards:** The primary container for bills and groups. Use a white background, no border, and a 3rem corner radius. Padding should be consistent at `md` (24px).
- **Action Buttons:**
    - *Primary:* Solid Deep Indigo with white text. High-waisted (vertical padding 12-16px).
    - *Secondary:* Ghost style with Indigo text and no background.
- **Input Fields:** Use a subtle surface-variant background with no border and a 1rem corner radius. On focus, transition to a white background with a 1px Indigo border and subtle glow.
- **Status Indicators:** 
    - Use pill-shaped badges for "Settled," "Pending," or "Overdue." 
    - Text within badges should be `label-md` for maximum clarity.
- **List Items:** Use a 72px fixed height for list rows with 16px spacing between them. Include a circular avatar (40px) on the left to represent participants.
- **Currency Display:** The decimal points should be slightly smaller or lower opacity than the whole numbers to emphasize the primary value.