import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { animate, inView } from "motion"
import { useLang } from "../i18n/LanguageContext.jsx"

/* ============================================================
   THE HAND, DEALT

   Each project's real screens are arranged into one object and dealt from a
   pile when the deck comes into view, with a contact sheet of every screen
   under it. Clicking a sheet tile plays that screen into the slot that fits:
   the tile knows its own shape (`orient`), the slot says what it accepts.
   Already-in-hand screens trade places rather than being held twice.

   Nothing here knows any of the arrangements. An item's journey back to the
   pile is *measured* — its own centre against the deck's — so a composition
   can be re-authored in the stylesheet and the movement follows with no
   change to this file.
   ============================================================ */

export default function Project({ project, onAnnounce }) {
  const { t, lang } = useLang()
  const deckRef = useRef(null)
  const itemRefs = useRef([])

  /* The hand is state: which screen each slot currently holds. */
  const [hand, setHand] = useState(() =>
    project.deck.items.map((it) => ({ src: it.src, alt: it.alt }))
  )
  /* A deck holding one card has room to say which page that is, and a reason
     to: the card is the only thing that changed. */
  const single = project.deck.variant.includes("deck--single")
  const [caption, setCaption] = useState(project.deck.cap)

  const dealt = useMemo(() => new Set(hand.map((h) => h.src)), [hand])

  /* ---------- The deal ---------- */
  useEffect(() => {
    const deck = deckRef.current
    if (!deck) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const items = itemRefs.current.filter(Boolean)
    if (reduce || !items.length) return

    items.forEach((el) => (el.style.opacity = "0"))

    const stop = inView(
      deck,
      () => {
        const d = deck.getBoundingClientRect()
        const ox = d.left + d.width / 2
        const oy = d.top + d.height * 0.48

        items.forEach((el, i) => {
          const r = el.getBoundingClientRect()
          const rot =
            parseFloat(getComputedStyle(el).getPropertyValue("--rot")) || 0
          animate(
            el,
            {
              x: [(ox - (r.left + r.width / 2)) * 0.9, 0],
              y: [(oy - (r.top + r.height / 2)) * 0.9 + 24, 0],
              rotate: [rot * 0.15, rot],
              scale: [0.9, 1],
              opacity: [0, 1],
            },
            { type: "spring", stiffness: 82, damping: 19, mass: 1, delay: i * 0.08 }
          )
        })
      },
      { amount: 0.2 }
    )
    return () => stop()
  }, [])

  /* ---------- Playing a screen off the sheet ---------- */
  const play = useCallback(
    (tile) => {
      const slotIndex = project.deck.items.findIndex(
        (it) => it.accepts && it.accepts.split(" ").includes(tile.orient)
      )
      /* A single-card deck has one slot and accepts anything. */
      const idx = slotIndex === -1 ? (single ? 0 : -1) : slotIndex
      if (idx === -1) return
      if (hand[idx].src === tile.src) return

      const name = t(tile.name)
      const nextAlt = `${project.title}, ${name}`
      const outgoing = hand[idx]

      const land = () => {
        setHand((prev) => {
          const next = prev.slice()
          /* If the screen played is already elsewhere in the hand, the two
             trade places rather than the hand holding the same card twice. */
          const twin = prev.findIndex((h, i) => i !== idx && h.src === tile.src)
          next[idx] = { src: tile.src, alt: nextAlt }
          if (twin !== -1) next[twin] = outgoing
          return next
        })
        if (single) setCaption(tile.name)
        onAnnounce?.(nextAlt)
      }

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      const img = itemRefs.current[idx]?.querySelector(".deck-shot img")
      if (reduce || !img) {
        land()
        return
      }

      /* The picture animates, not its frame: the frame owns the hover lift,
         and an inline transform left on it would outrank that for good. */
      animate(img, { opacity: [1, 0], scale: [1, 1.06] }, { duration: 0.2, ease: [0.4, 0, 1, 1] })
        .finished.then(
          () => {
            land()
            animate(
              img,
              { opacity: [0, 1], scale: [0.94, 1] },
              { type: "spring", stiffness: 190, damping: 21 }
            )
          },
          () => {
            /* interrupted */
          }
        )
    },
    [hand, project, single, t, onAnnounce]
  )

  const titleId = `t-${project.id}`
  const ctaId = `c-${project.id}`

  return (
    <article className="project" id={`p-${project.id}`}>
      <div className="project-rule">
        <span className="project-no" aria-hidden="true">
          {project.no}
        </span>
      </div>

      <div className="project-head">
        <div>
          <h3 className="project-title" id={titleId}>
            {project.title}
          </h3>
          <span className="project-kind">{t(project.kind)}</span>
        </div>
        <p className="project-sub">{t(project.sub)}</p>
      </div>

      <div className={["deck", ...project.deck.variant].join(" ")} ref={deckRef}>
        {project.deck.items.map((item, i) => (
          <div
            key={i}
            className={`deck-item ${item.cls}`}
            data-accepts={item.accepts || undefined}
            ref={(el) => (itemRefs.current[i] = el)}
          >
            <span className="deck-shot">
              <img
                src={hand[i].src}
                width={item.w}
                height={item.h}
                loading="lazy"
                decoding="async"
                alt={hand[i].alt}
              />
            </span>
          </div>
        ))}
        {caption && <p className="deck-cap">{t(caption)}</p>}
      </div>

      {project.sheet && (
        <div className="sheet">
          <div className="sheet-head">
            <span className="sheet-count">{project.sheet.count}</span>
            <span className="sheet-note">{t(project.sheet.note)}</span>
          </div>
          <div className="sheet-grid">
            {project.sheet.tiles.map((tile) => (
              <button
                key={tile.src}
                className={"tile" + (dealt.has(tile.src) ? " is-dealt" : "")}
                type="button"
                onClick={() => play(tile)}
                lang={lang}
              >
                <span className="tile-box">
                  <img
                    src={tile.src}
                    width={tile.w}
                    height={tile.h}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="tile-name">{t(tile.name)}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="project-foot">
        <ul className="tags">
          {project.tags.map((tag, i) => (
            <li key={i}>{t(tag)}</li>
          ))}
        </ul>
        {project.case && (
          <Link
            className="case-cta"
            to={`/work/${project.case}`}
            aria-labelledby={`${titleId} ${ctaId}`}
          >
            <span className="label" id={ctaId}>
              {t({ en: "Read case study", ka: "იხილეთ ქეისი" })}
            </span>
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        )}
      </div>
    </article>
  )
}
