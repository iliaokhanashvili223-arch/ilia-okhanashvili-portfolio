---
name: Ilia Okhanashvili Portfolio
description: Bilingual EN/KA designer portfolio — one near-black violet room where a single lilac light family crosses the gap between human and machine.
colors:
  bg: "#0b0a10"
  bg-raise: "#14121d"
  ink: "#f2eff9"
  ink-soft: "#b6abd1"
  ink-faint: "#877ca6"
  lilac: "#c4b0ff"
  lilac-mid: "#a78bfa"
  lilac-deep: "#7c5cd6"
  on-lilac: "#0d0817"
typography:
  display:
    fontFamily: "Clash Display, Noto Sans Georgian, sans-serif"
    fontSize: "clamp(2.5rem, 5.6vw, 4.6rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Satoshi, Noto Sans Georgian, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Satoshi, Noto Sans Georgian, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    letterSpacing: "0.02em"
  action:
    fontFamily: "Satoshi, Noto Sans Georgian, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    letterSpacing: "0.015em"
  # --- Page ramp. Added with the Work / About / Contact sections and the
  # case-study pages; the hero-only build never needed steps below display.
  display-desktop:
    fontFamily: "Clash Display, Noto Sans Georgian, sans-serif"
    fontSize: "clamp(2.75rem, 4.5vw, 4.1rem)"
    fontWeight: 500
    lineHeight: 1.04
  display-mobile:
    fontFamily: "Clash Display, Noto Sans Georgian, sans-serif"
    fontSize: "clamp(1.9rem, 8.2vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.04
  case-title:
    fontFamily: "Clash Display, Noto Sans Georgian, sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 3.9rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  section-title:
    fontFamily: "Clash Display, Noto Sans Georgian, sans-serif"
    fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  contact-mail:
    fontFamily: "Clash Display, Noto Sans Georgian, sans-serif"
    fontSize: "clamp(1.4rem, 4.4vw, 3.2rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  prose-h2:
    fontFamily: "Clash Display, Noto Sans Georgian, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  card-title:
    fontFamily: "Clash Display, Noto Sans Georgian, sans-serif"
    fontSize: "clamp(1.45rem, 2.4vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  prose-h3:
    fontFamily: "Clash Display, Noto Sans Georgian, sans-serif"
    fontSize: "clamp(1.15rem, 1.8vw, 1.375rem)"
    fontWeight: 500
    lineHeight: 1.25
  standfirst:
    fontFamily: "Satoshi, Noto Sans Georgian, sans-serif"
    fontSize: "clamp(1.0625rem, 1.6vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.55
  lede:
    fontFamily: "Satoshi, Noto Sans Georgian, sans-serif"
    fontSize: "clamp(1rem, 1.3vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
  prose:
    fontFamily: "Satoshi, Noto Sans Georgian, sans-serif"
    fontSize: "clamp(1rem, 1.3vw, 1.0938rem)"
    fontWeight: 400
    lineHeight: 1.6
  hero-sub-desktop:
    fontFamily: "Satoshi, Noto Sans Georgian, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: "Satoshi, Noto Sans Georgian, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  micro:
    fontFamily: "Satoshi, Noto Sans Georgian, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.45
  # --- Added with the work gallery: a tier below micro, for letterspaced
  # label caps (deck captions, contact-sheet labels, tags).
  micro-caps:
    fontFamily: "Satoshi, Noto Sans Georgian, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    letterSpacing: "0.3em"
rounded:
  pill: "999px"
  sm: "6px"
  md: "12px"      # cards, framed figures, the facts panel
  lg: "14px"      # work covers and case-study hero images
  phone: "20px"   # phone-screen shots, matching the device corner
spacing:
  gutter: "clamp(1.25rem, 4vw, 3.5rem)"
  hero-bottom: "clamp(4.5rem, 9vh, 6.5rem)"
  action-gap: "0.9rem"
components:
  button-primary:
    backgroundColor: "linear-gradient(135deg, #a78bfa, #7c5cd6)"
    textColor: "{colors.on-lilac}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.7rem"
  button-ghost:
    backgroundColor: "rgba(20, 18, 29, 0.35)"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.7rem"
  lang-toggle:
    backgroundColor: "rgba(20, 18, 29, 0.55)"
    textColor: "{colors.ink-faint}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 0.85rem"
  nav-link:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    padding: "0.25rem 0"
  nav-link-hover:
    textColor: "{colors.ink}"
---

# Design System: Ilia Okhanashvili Portfolio

## Overview

**Creative North Star: "The Almost-Touch"**

The whole system lives inside one charged gap: a human hand and a machine hand a breath apart, with a live spark in between. The world is a near-black violet room (#0b0a10) — not a page with a dark theme, but a room the visitor stands inside. Everything luminous in the room belongs to a single lilac family (#c4b0ff → #7c5cd6), and that family arrives as *light*, not as paint: the spark's halo, a rim on chrome, a text-selection wash, a focus ring, a glowing underline. The only place lilac is allowed to become a solid material is the primary call-to-action, which borrows the spark's own light signature (white core, lilac halo).

The voice is calm confidence. Clash Display (medium, tightly leaded) speaks; Satoshi carries the body; Noto Sans Georgian sits in every stack as a first-class sibling, not a fallback — the site is genuinely bilingual and Georgian copy is held to the same craft bar as English. Density is low: one idea per viewport, generous gutters, copy answering on the diagonal the hands leave free so the photograph keeps the room.

Motion is the comp — and the gap is the motion. The photograph is not a still: it is matted into three plates (room, machine hand, human hand) so the almost-touch can be *performed*. On load the two hands reach in slowly from opposite corners and stop a gap apart; scrolling closes that gap along the line joining their two fingertips until the tips meet, point to point, and the spark ignites. Entrances are orchestrated on a single easing curve (hands → headline lines → byline → sub → actions → nav → cue) and the plates drift toward the cursor at different rates, because they are at different depths. Under `prefers-reduced-motion` the runway disappears and the hands are simply already reaching, one screen tall, spark lit. The build confirms the contract's refusals: no grid-of-projects opener, no split text/illustration hero, no gray-on-dark text.

**Key Characteristics:**
- One room (near-black violet), one light family (lilac), no second hue.
- Accent carried by light — glow, border, selection, focus — almost never by fill.
- Secondary text is tinted lilac (#b6abd1 / #877ca6), never neutral gray.
- Clash Display voice + Satoshi body + Noto Sans Georgian as an equal sibling script.
- Pure white reserved for the cores of light sources; text ink is #f2eff9.
- One easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`) for every movement; opacity-only fallback for reduced motion.

## Colors

A single lilac light family glowing inside a near-black violet neutral ramp; there is no secondary or tertiary accent.

### Primary
- **Lilac** (#c4b0ff): the brightest of the family. Headline emphasis (the third title line), hover underlines, active language option, hover-state text on the scroll cue. The color of light landing on something.
- **Lilac Mid** (#a78bfa): working accent. Focus outlines, the wordmark dot, caret color, top of the primary-button gradient, top of the scroll-cue line.
- **Lilac Deep** (#7c5cd6): the family's shadow end. Text selection background, outer halo of glows, bottom of the primary-button gradient, borders on focused chrome (skip link).

### Neutral
- **The Room** (#0b0a10): page background and the color every veil gradient resolves to. The photograph is graded into it, so image and page share one darkness.
- **Raised Room** (#14121d): the surface tint for translucent chrome — used at 0.35–0.55 alpha with backdrop blur (language toggle, ghost button, skip link), rarely opaque.
- **Ink** (#f2eff9): primary text. A violet-warmed off-white; pure #fff is *not* a text color here.
- **Soft Ink** (#b6abd1): secondary text — byline, sub-copy, resting nav links. Visibly lilac-tinted.
- **Faint Ink** (#877ca6): tertiary/ambient text — resting language toggle, scroll-cue label.
- **On-Lilac** (#0d0817): the only dark ink, used exclusively as text on the lilac gradient (primary button).

### Named Rules
**The Light-Not-Fills Rule.** Lilac reaches the screen as light: glow, rim, border at 0.18–0.7 alpha, selection, focus, gradient on the one primary action. It never becomes a large flat fill or a section background. If a new surface wants lilac, it gets a halo or an edge, not a coat of paint.

**The No-Gray Rule.** There is no neutral gray anywhere on the dark. Every de-emphasized text step (#b6abd1, #877ca6) and every chrome tint (#14121d, scrollbar #2b2440) carries the room's violet.

**The White Core Rule.** Pure white (#fff) appears only as the core of a light source — the spark's center, the falling pulse in the scroll-cue line, the inner ring of the primary button's glow. Text and surfaces never use it; ink is #f2eff9.

## Typography

**Display Font:** Clash Display (with Noto Sans Georgian, sans-serif)
**Body Font:** Satoshi (with Noto Sans Georgian, sans-serif)

**Character:** Clash Display at medium weight gives the voice its slightly technical, contemporary edge without shouting; Satoshi keeps body copy neutral and warm. Noto Sans Georgian rides in both stacks so the Georgian rendering of any element inherits the same hierarchy automatically.

### Hierarchy
- **Display** (500, clamp(2.5rem, 5.6vw, 4.6rem), 1.04, -0.015em): the hero headline only. Set in stacked masked lines that rise on entrance; the final line takes Lilac (#c4b0ff).
- **Body** (400, 1.0625rem base / clamp(1rem, 1.4vw, 1.125rem) in the hero sub, 1.6): running copy in Soft Ink, max-width ~34rem in the hero.
- **Label** (500, 0.9375rem, +0.02em): nav links and the name—role byline, in Soft Ink.
- **Action** (700, 0.9375rem, +0.015em): button labels; also the language toggle at 0.8125rem/700/+0.06em.
- **Micro-cue** (700, 0.75rem, +0.18em, uppercase): exists solely as the scroll cue's label. This is a cue treatment, not a kicker style — see Do's and Don'ts.

### Named Rules
**The Sibling Script Rule.** Georgian is first-class: Noto Sans Georgian appears in every font stack, `:lang(ka)` zeroes letter-spacing (Georgian never takes Latin tracking), and every visible string ships as a `data-en`/`data-ka` pair swapped by the language toggle (which also updates `<html lang>` and its own aria-label in the *other* language). New copy is not done until both languages are written.

**The Formal Register Rule.** Georgian copy uses the formal plural register ("იხილეთ ნამუშევრები", "დამიკავშირდით"), matching the professional tone of the English.

## Layout

Full-bleed, single-idea viewports. The hero is a scroll track — `calc(100svh + var(--hero-drive))`, 130svh of drive on desktop — holding a `position: sticky` stage one screen tall. That extra height is not content; it is the runway the hands need to close their gap. Copy sits inside the same horizontal gutter the fixed nav uses, clamp(1.25rem, 4vw, 3.5rem), so chrome and content share one edge. Copy column caps at 54rem; body measure at 34rem.

The desktop cross composition answers the diagonal the hands cross on: the headline reads first from the empty upper-left, the brief (name, role, actions) closes in the lower-right pocket, right-aligned. Neither block sits on a hand, on the gap, or on the spark.

**The Image-Space Pin Rule.** When an overlay must align with a feature of a photograph (the spark at the fingertip gap), it is not positioned in viewport space. The hands live in `.hero-cast`, a box holding the 16:9 frame the photograph was composed in, and every geometry inside it — layer boxes, travel distances, the contact point (`--spark-x: 46.128%; --spark-y: 52.645%`, the midpoint of the two fingertips) — is a percentage of that box. `--sw` / `--sh` are 1% of it, and are the unit the hands travel in. Resizing and repositioning that one box re-stages the whole performance for a new viewport shape without touching a single coordinate inside it.

**The Two-Frames Rule.** The room is not in the cast. A backdrop must cover the screen at any aspect ratio; a composition must stay composed. So the room plate answers to the viewport (110% of the stage, `object-fit: cover`) while the cast answers to the choreography. On landscape the cast covers too (`max(100vw, 177.78vh)`); on anything portrait it stops covering and becomes a small stage in the upper third (`min(168vw, 92vh)` at `--cast-y: 32%`), with the whole reach inside it and the copy stacked below.

Responsive behavior: the hero switches on aspect, not just width — anything at or below 1:1, plus anything ≤760px, gets the stacked hero. There the nav links wrap to a full-width second row under the wordmark (no hamburger, no drawer — the links keep living), the scroll cue is dropped, the display size steps down to clamp(1.9rem, 8.2vw, 3rem), pointer parallax is disabled, the runway shortens to 95svh, and the hands reach from further out (`--s-entry: -20`) across a tighter gap (`--s-rest: -2.4`). At ≤420px the action buttons go full-width.

## Elevation & Depth

No lifting shadows. Nothing in this world casts a shadow to look raised; `box-shadow` exists only to make things *emit* — the spark, the wordmark dot, the primary button. Depth is conveyed three other ways: the photograph itself (the only deep space), translucent blurred chrome floating over it (rgba(20,18,29,·) + `backdrop-filter: blur(6–8px)`), and the legibility veil — layered gradients of the room color (a 0.55 top fade for the nav, a 0.82→solid bottom ramp for the copy, a soft radial behind the text block) that ground copy without flattening the image.

### Shadow Vocabulary
- **The spark signature** (`0 0 12px 3px rgba(255,255,255,0.9), 0 0 34px 12px rgba(196,176,255,0.55), 0 0 90px 40px rgba(124,92,214,0.28)`): white core, lilac halo, deep-violet ambience. The canonical form of light in this world.
- **Button glow, rest** (`0 0 10px -2px rgba(255,255,255,0.28), 0 4px 24px -6px rgba(124,92,214,0.6)`): the spark signature scaled down onto the primary CTA.
- **Button glow, hover** (`0 0 14px -2px rgba(255,255,255,0.4), 0 8px 32px -6px rgba(167,139,250,0.7)`): the glow brightens and widens with a -2px lift.
- **Dot glow** (`0 0 10px 1px #7c5cd6`): the wordmark's 6px lilac dot.

### Named Rules
**The Emission-Only Rule.** A `box-shadow` may describe light leaving an element (white core + lilac halo), never darkness beneath it. If an element needs separation from the room, it gets translucency and blur, or a veil — not a drop shadow.

## Shapes

The form language is circles and pills — the geometry of the spark. Buttons and the language toggle are full pills (999px); the spark, its ripple ring, and the wordmark dot are circles; the scroll cue is a 1px vertical light line. Rectangular chrome barely exists: the skip link takes a quiet 6px radius, and focus outlines a 2px one. Borders are 1px lilac at low alpha (0.18 resting → 0.45–0.65 on hover) rather than opaque strokes. No cards or hard-cornered containers have been established yet; when containers arrive they should keep corners soft and borders luminous rather than introducing sharp boxes.

## Components

### Buttons
- **Shape:** full pill (999px), padding 0.85rem 1.7rem, Action type (0.9375rem / 700).
- **Primary:** lilac gradient (135deg, #a78bfa → #7c5cd6) with On-Lilac (#0d0817) text and the resting button glow — it reads as a lit object, not a colored rectangle.
- **Hover:** rises 2px and the glow brightens (see Shadow Vocabulary); active presses down 1px. All transitions 0.3s on the house easing.
- **Ghost:** 1px border rgba(196,176,255,0.3), Ink text, rgba(20,18,29,0.35) fill with 6px backdrop blur; hover brightens the border to 0.65 alpha and washes the fill with rgba(124,92,214,0.12).

### Chips (language toggle)
- **Style:** pill, rgba(20,18,29,0.55) + 8px backdrop blur, 1px rgba(196,176,255,0.18) border, 0.8125rem/700/+0.06em labels.
- **State:** active language in Lilac (#c4b0ff), inactive in Faint Ink; divider at rgba(196,176,255,0.25); hover brightens the border only.

### Navigation
- **Style:** fixed, transparent (the top veil supplies legibility), wordmark left (Clash Display 500, 1.05rem + glowing 6px lilac dot), links right in Label type, Soft Ink.
- **Hover:** text warms to Ink while a 1px Lilac underline scales in from the left (0.35s) and exits to the right — the underline is light passing under the word.
- **Mobile ≤760px:** links wrap to a full-width second row; never a hamburger.

### Work (six projects, dealt)
Each project is presented as its own real screens arranged into one object, dealt out of a single pile as it comes into view, with the whole rest of the project underneath as a contact sheet. Sixty-nine real assets across six projects; nothing in this section is a placeholder, a mockup or a stock cover.

**The arrangement is chosen by the material, not by taste.** Solution 86 and CuraTour are each a web surface plus a phone app, so each shows exactly two screens at the largest size the column allows — the desktop view and one screen of the app, standing on one baseline (`.deck--duo`). AutoConnect and Mythera are long web pages — eight and eighteen of them — and a page that is 1500x2100 gains nothing from being one of five small plates: at that size a reader can see there *is* a page but not what is on it. So both show **one large card**, square to the room, and the contact sheet changes that card (`.deck--single`). N&D is five 3840x2160 captures of one page's sections, and they keep their 16:9 through `--card-aspect` — crop a hero composed for that frame to 3:2 and it loses the bottom of its own headline. HyperJump is one page in two colour modes, and the whole point is that neither mode is the real one, so the two stand level and equal with the mark lying across them like chips on a table (`.deck--pair`). Six projects, three arrangements, and that is the right count: two products that are web-plus-app, three that are long web pages, one that is a page in two colour modes. Projects that share a shape share it because they share a material.

**No device frames.** The obvious version of the duo is a drawn laptop and a drawn phone, and it was built and compared side by side before being turned down. The space argument against it turned out to be wrong — a thin bezel costs about 2% of the width, not the 12% first claimed. What decided it is that the bezel, the base and the notch are the one part of that picture that is not the work; the 9:19.5 proportion and the device's own corner radius say "phone" without drawing one. The comparison page is kept at `_mockup/two-up.html`.

**A project only shows what it has.** HyperJump is two hero captures and a mark in five colourways — everything it owns is already in the hand — so it carries no contact sheet and no case-study link rather than a padded one. The section states counts it can prove: "Five of eighteen shown", "Two modes, one mark".

**Positions live only in CSS; the journey is measured.** Every piece is placed as a percentage of its deck, so an arrangement is one object that rescales rather than six things that drift apart. The script never stores a position: it measures an item's distance back to the middle of the deck at deal time and animates that to zero. A composition can be re-authored, reordered or replaced in the stylesheet and the movement follows it with no edit to any JavaScript.

**The deal.** On `inView`, every piece travels from one pile in the centre of the deck to the place it already occupies, on a Motion spring (`stiffness 82, damping 19, mass 1`) at 80ms intervals, rotating the last fifteen percent of the way into its resting angle. It is one movement per project, not an entrance per element.

**The contact sheet answers "how much work is there".** Under each hand, every screen the project has, at one uniform square, whole rather than cropped — cropping a 390×844 phone into a landscape box leaves you looking at its status bar, and the difference between a tall shape and a wide one is itself information. Each is labelled; the ones currently in the hand carry a lilac rule and a lilac label.

**Playing a screen.** Clicking any tile plays it into the slot that fits its shape: `data-orient` on the tile, `data-accepts` on the slot, and the hand answers. If the screen is already elsewhere in the hand the two trade places, so a hand never holds the same card twice. A deck holding one card has room to say which page that is, and a reason to — the card is the only thing that changed — so its caption takes the played screen's name, in both languages, and the toggle still has something to swap to afterwards. The picture animates, never its frame — the frame owns the hover lift, and an inline transform left on it would outrank that permanently.

**The Framed Plate Rule.** Plates and proofs keep the hard corner; a frame with rounded corners is not a frame. Phones keep the 20px corner the device actually has. The pill tags and the round chrome keep the room's soft corners; this exception is the frame, and only the frame.

**Degrades to a finished picture.** Every hand is laid out by CSS alone, so with no script it is already dealt — the only thing missing is the dealing. Under `prefers-reduced-motion` the same is true and the hover lift stops rotating. The contact sheet is plain content either way; its buttons simply stop swapping. Narrow screens re-form each arrangement for the column (plate on top, phones fanned under it; proofs in two rows) inside a square deck, so nothing overflows onto the caption.

### The Spark (signature component)
An 8px white circle wearing the spark signature glow, pinned to the contact point (46.128% / 52.645% of the cast). Both hands travel the same distance in opposite directions, so the midpoint between their fingertips never moves — which is why one fixed pin can serve every frame of the approach. The spark answers the gap rather than decorating it: a soft halo gathers in the space between the fingers from `s = -1` onward, the white core only exists from `s = 0.5`, and it is at full strength exactly when they touch. Only then does it breathe (opacity 0.75→1, 3.4s) and send a 1px lilac ring rippling out to 7× scale — the ripple is gated behind `body.is-contact`, so nothing pulses over an empty gap. It is the world's identity distilled: any future surface that needs the brand's "alive" moment reuses this light signature rather than inventing a new effect.

The photograph shipped with a spark baked into its pixels at the fingertip gap. It was matted out of both hand plates, because a spark riding on a fingertip that is still 13% of the frame away from the other hand is a lie the motion cannot tell.

**The Rebuild Rule.** That flare was not beside the machine's fingertip; it was sitting on it, and cutting one out cuts the other off. So the fingertip was rebuilt rather than trimmed: its two edges were measured off the uncontaminated slices further up the finger, carried to a point read off the photograph, and repainted by carrying a clean cross-section into the new nose so the rim light wraps it. When removing something takes a piece of the subject with it, reconstruct the subject — a blunt-cut finger reads as a mistake at any size, and no amount of glow on top hides it.

### Motion (system-wide)
- **One easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-out`) for every entrance and transform; plain `ease` only for color/opacity micro-transitions (0.25–0.3s).
- **Entrance orchestration:** everything hides until `.is-loaded` lands on `<body>` (set when all three plates have loaded, with a 2.5s fail-safe — a stalled image must never leave the page dark). Then, over 2400ms on the ease-out curve: the hands reach in from `s = -16`, the machine 260ms behind the human because the human reaches and the machine answers; the camera settles from scale 1.06; headline lines rise from a 110% mask stagger at 0.5/0.63/0.76s, byline 0.95s, sub 1.05s, actions 1.2s, nav 1.1s, cue last.
- **The Scroll Contract.** The hero's motion constants live in CSS on `.hero` (`--s-entry`, `--s-rest`, `--touch-at`, `--hero-drive`) and are read by the script, so re-timing the performance for a viewport is a media query, not a code branch. Scroll progress `p` is the fraction of the runway travelled; `p / --touch-at` on a smoothstep closes the gap, contact lands at `p = 0.62`, and the remaining runway is the beat after: copy clears from `p = 0.55`, the room drifts, the camera pushes 4.5% closer.
- **Parallax:** fine pointers only — each plate eases toward the cursor at 0.06 lerp via rAF, multiplied by its own depth (room 0.3, machine 0.8, human 1.15) off a ±16px/±11px base. The rAF loop parks itself the moment nothing is moving and is woken by scroll, pointer or the hero re-entering view.
- **The Quiet Fallback Rule.** Under `prefers-reduced-motion`, the runway collapses to zero (the hero is one screen again), the hands hold at `s = 0.55` — the photograph's own almost-touch, spark lit — all entrances become 0.4s opacity fades with transforms stripped, the ripple ring hides, and parallax never binds. Reduced motion is a first-class rendering of the world, not a broken one.
- **The Script-Optional Rule.** Every entrance here starts from invisible, which is only safe while a script is there to finish the sentence. An inline `<script>` in `<head>` stamps `.js` on `<html>`; every hidden-until-loaded rule hangs off it, and `html:not(.js)` parks the whole hero in the same lit near-touch reduced motion holds. With scripting off the site is not animated — it is simply already here.

## Do's and Don'ts

### Do:
- **Do** deliver lilac as light — glow, 1px low-alpha border, selection, focus ring, underline — and reserve solid lilac for the primary CTA's gradient alone.
- **Do** tint every secondary text and chrome color into the violet family (#b6abd1, #877ca6, #14121d); run the No-Gray audit on any new hex before it ships.
- **Do** keep Noto Sans Georgian in every font stack, ship every string as a `data-en`/`data-ka` pair in formal-register Georgian, and let `:lang(ka)` zero the letter-spacing.
- **Do** use the single house easing `cubic-bezier(0.16, 1, 0.3, 1)` for all movement, gate entrances on `.is-loaded`, and provide the opacity-only reduced-motion path for anything that moves.
- **Do** pin photo-anchored overlays in image space via a 16:9 cover wrapper and percentage coordinates, per the Image-Space Pin Rule.

### Don't:
- **Don't** use neutral gray text or surfaces on the dark room, and don't use pure #fff for text — white belongs only to light-source cores.
- **Don't** introduce a second accent hue; the world has one lilac family, dark to light.
- **Don't** cast drop shadows to lift surfaces; separation comes from translucency, blur, and veils (the Emission-Only Rule).
- **Don't** collapse mobile navigation into a hamburger; links wrap to a second row and stay visible.
- **Don't** add kickers/eyebrows above headlines. The uppercase letterspaced micro-style exists only as the scroll cue's label; it is not a headline-introducer pattern.
- **Don't** open any surface with a grid-of-projects or a split text/illustration composition; each surface opens inside one charged moment.
