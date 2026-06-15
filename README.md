# Fulgor Milano — Landing Page

> Italian elegance in every pixel. A landing page for a premium home appliance brand.

---

## About

Fulgor Milano is one of those projects where the goal wasn't just to "build a website" — it was to capture the personality of a brand. Italians have been making refrigerators and ovens for over a century, and there's a certain character in their aesthetic that sloppy markup simply can't do justice to.

The result is a multi-section landing page: an atmospheric hero with full-bleed photography, product cards with responsive images (`1x / 2x / 3x`), a custom video player, a reviews call-to-action, and a multi-column footer. No frameworks, no build tools — just clean HTML, CSS, and a touch of JavaScript.

---

## Stack

- **HTML5** — semantic markup, `<picture>` with srcset for retina displays
- **CSS3** — custom properties, flexbox, responsive from 576px to 1451px
- **Vanilla JS** — dynamic header search, video controls, mobile menu

---

## What's interesting inside

**Burger menu without JS** — open/close is handled entirely via `:has(input:checked)` in pure CSS. Zero extra code.

**Smart search** — the input field appears dynamically on icon click and immediately receives focus. Click again and it disappears. Works independently in both desktop and mobile layouts.

**Custom video player** — a bespoke interface layered over a native `<video>` element. The play/pause button swaps icons without touching the DOM.

**Retina-ready images** — all photos are connected via `<picture>` with three resolution variants, keeping visuals crisp on every screen.

---

## Structure

```
Fulgor_Milano/
├── index.html        # Main page
├── style.css         # Project styles
├── reset.css         # Browser default reset
├── main.js           # Interactive elements logic
└── assets/
    ├── hero/         # Hero section photos (1x, 2x, 3x)
    ├── details/      # Product images (fridge, large variants)
    ├── video/        # Video file and player icons
    ├── header/       # Search, wishlist, arrow icons
    └── media/        # Social media icons (Facebook, Instagram, Pinterest)
```

---

## Getting started

No dependencies, no build step. Just open `index.html` in a browser — that's it.

Or use Live Server in VS Code for a smoother dev experience.

---

## Breakpoints

| Breakpoint | Device |
|---|---|
| 576px | Mobile |
| 768px | Tablet |
| 1024px | Laptop |
| 1451px | Desktop |

---

*Built with the same attention to detail that goes into Italian appliances.*
