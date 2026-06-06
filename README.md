# Sunil — Frontend Developer Portfolio

A dark, editorial single-page portfolio built with **Next.js (App Router)**,
**React**, and **GSAP** (ScrollTrigger). Preloader, scroll progress, hero aurora
+ mouse parallax, magnetic buttons, clip-path image reveals, skew-on-scroll,
count-up stats, scroll-reactive marquee, custom cursor with a "View" label.

Uses **`next/image`** for thumbnails and **`next/link`** for navigation.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

> Requires Node.js 18.17+.

## Project structure

```
sunil-portfolio/
├── app/
│   ├── layout.js        # fonts (next/font) + metadata
│   ├── page.js          # client page wiring up all GSAP animations
│   └── globals.css      # design tokens + all styles
├── components/
│   ├── Loader.jsx       # preloader + scroll-progress bar
│   ├── Cursor.jsx       # custom cursor (client)
│   ├── Nav.jsx          # next/link nav
│   ├── Hero.jsx         # aurora blobs + headline
│   ├── Marquee.jsx
│   ├── About.jsx        # 120+ projects stats
│   ├── Work.jsx         # next/image + next/link project cards
│   ├── Stack.jsx
│   └── Contact.jsx
├── lib/
│   └── data.js          # PROJECTS + SKILLS + MARQUEE_ITEMS  ← edit content here
├── public/screenshots/  # drop your own project images here (optional)
└── next.config.mjs      # image remotePatterns
```

## Project screenshots

Each card shows a **live thumbnail** of the site, captured by `thum.io`. The
`wait` value (in `lib/data.js`) tells the service how many seconds to wait so
the site's **loader / intro animation finishes before the capture** — that's why
sites like Zona, Starworks, Elite and Empire use a longer wait.

### Best quality → use your own screenshots

Live captures are convenient but a hand-taken screenshot always looks best:

1. Save an image into `public/screenshots/` — suggested names:
   `contractor-plus.jpg`, `starworks.jpg`, `elite.jpg`, `zona.jpg`,
   `certifymed.jpg`, `nrh.jpg`, `empire-render.jpg`, `bill-fairies.jpg`,
   `baridekho.jpg`
2. In `lib/data.js`, uncomment the `shot` line on that project:
   ```js
   shot: "/screenshots/zona.jpg",
   ```
   Local images are served (and optimised) through `next/image`.

## Styling — Tailwind CSS v4.1 + custom CSS

This project uses **Tailwind CSS v4.1** (CSS-first config — no `tailwind.config.js`).

- Tailwind is imported at the top of `app/globals.css` via `@import "tailwindcss";`
  and configured in the `@theme { … }` block.
- **All the shared / repeated component styles live in `app/globals.css`** as
  normal CSS classes (`.hero`, `.project`, `.cursor-ring`, …) — exactly as before.
- For everything else you can use **Tailwind utilities normally** in JSX.

Brand tokens are wired into Tailwind, so these utilities work out of the box:

| Utility examples | Token |
| --- | --- |
| `bg-ink` `bg-ink-2` | background colors |
| `text-cream` `text-accent` `text-muted` | text colors |
| `border-accent` | borders |
| `font-display` `font-body` `font-mono` | font families |

**Pattern used in this project:**

- **Common / repeated** styles → `@apply` classes in `globals.css`
  (e.g. `.eyebrow`, `.tag`, `.social-link`, `.visit`, `.brand`, `nav.links a`,
  `.project-info .row`).
- **One-off / layout** styles → Tailwind utilities **inline in the component**.

```jsx
// Work.jsx — container styled inline, repeated chip via @apply class
<div className="flex flex-wrap gap-2 mb-7">
  {tags.map((t) => <span className="tag" key={t}>{t}</span>)}
</div>

// About.jsx — inline color utility on a highlight
<strong className="text-accent font-semibold">120+ projects</strong>
```

```css
/* globals.css — the repeated chip, built from utilities with @apply */
.tag {
  @apply font-mono rounded-full border border-line text-cream-dim;
  font-size: 0.7rem;
  padding: 0.34rem 0.7rem;
}
```

Complex styles that don't map cleanly to utilities (clamp() type scales, grid
templates, pseudo-elements, the cursor, animations) intentionally stay as plain
CSS.

## Smooth scroll — Lenis

`lenis` provides the smooth scrolling, wired up in `app/page.js`:

- Driven by GSAP's ticker and synced with ScrollTrigger
  (`lenis.on('scroll', ScrollTrigger.update)`), so every scroll animation stays
  in step with the smooth scroll.
- Scroll is **locked during the preloader** and released when it finishes.
- In-page anchor links (`#work`, `#about`, …) scroll smoothly via `lenis.scrollTo`.
- Disabled automatically when the user prefers reduced motion.

Tune the feel with the `duration` / `easing` options in `app/page.js`.

## Customising

- Name `SUNIL.DEV` (Nav) and footer → your name
- `hello@sunil.dev` in `components/Contact.jsx` → your email
- Social links (`href="#"`) in `components/Contact.jsx`
- Skills / marquee tech → `lib/data.js`
- Stats (120+ projects, etc.) → `components/About.jsx`

## Deploy

Push to GitHub → import into [Vercel](https://vercel.com). Zero config.
# Sunil
