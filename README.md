# Ilia Okhanashvili — Portfolio

React + Vite + Tailwind v4.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve the build
```

## Layout

```
index.html          Vite entry (fonts, preloads, meta)
public/assets/      every image, served from /assets/…
src/
  main.jsx          routes: / · /work/:slug · *
  pages/            Home · CaseStudy · NotFound
  components/       Hero · Work · Project · About · Contact · footer
  hooks/            useHeroChoreography · useSkillBeam
  data/             projects.js · cases.js · skills.js — all content lives here
  styles/
    index.css       Tailwind @theme: the design tokens, as utilities too
    world.css       hand-authored system (hero, deck, beam, components)
    case.css        case-study layout
```

**Content is data.** Adding a project or editing case-study prose means editing
`src/data/*.js` — no component changes.

**No header.** The page carries no nav bar: the first screen is the hero
photograph and nothing else. Sections are reached by scrolling, by the hero's
two buttons, and from a case study by its "All work" link.

**Two CSS halves, on purpose.** Tailwind owns layout, spacing, type scale and
colour as tokens; anything whose geometry is *measured* — the hero's
scroll-driven hand choreography, the dealt card decks, the skills beam — stays
hand-authored in `world.css`, because utility classes cannot express it.

## Deploying

Static build, any host. SPA rewrites are already configured for Netlify
(`public/_redirects`) and Vercel (`vercel.json`). Publish directory: `dist`.

## Notes

- `_backup/pre-react/` holds the previous vanilla build.
- The About portrait frame is intentionally empty: drop an `<img>` into
  `.photo-frame` in `src/components/About.jsx` and the placeholder hides itself.
- `TODO.md` lists claims to verify before the site goes public.
