import { useEffect, useMemo, useState } from "react"
import { Link, useParams } from "react-router-dom"
import SiteNav from "../components/SiteNav.jsx"
import SiteFooter from "../components/SiteFooter.jsx"
import Reveal from "../components/Reveal.jsx"
import NotFound from "./NotFound.jsx"
import { useLang } from "../i18n/LanguageContext.jsx"
import { CASES } from "../data/cases.js"

const ui = {
  back: { en: "All work", ka: "ყველა ნამუშევარი" },
  contents: { en: "Contents", ka: "სარჩევი" },
  next: { en: "Next case", ka: "შემდეგი ქეისი" },
  talk: { en: "Let's talk", ka: "დაველაპარაკოთ" },
  talkNote: {
    en: "Open to remote roles and contracts.",
    ka: "ღია ვარ დისტანციური პოზიციებისა და კონტრაქტებისთვის.",
  },
}

/* The chapters are the h2s. They become the sticky rail on the left, and the
   rail tracks which one is currently under the reader. */
function useChapters(blocks, lang) {
  return useMemo(() => {
    let n = 0
    return blocks.flatMap((b) =>
      b.type === "h2" ? [{ id: `ch-${n++}`, text: b.text }] : []
    )
  }, [blocks, lang])
}

function useActiveChapter(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    if (!ids.length) return
    const io = new IntersectionObserver(
      (entries) => {
        const onscreen = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (onscreen[0]) setActive(onscreen[0].target.id)
      },
      /* A band across the upper third: whatever heading sits in it is the one
         the reader is actually in. */
      { rootMargin: "-12% 0px -72% 0px" }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids.join("|")])
  return active
}

function Block({ block, t, headingId }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="case-h2" id={headingId}>
          {t(block.text)}
        </h2>
      )

    case "decision":
      return (
        <Reveal as="h3" className="case-decision">
          <span className="case-decision-num">{t(block.num)}</span>
          <span className="case-decision-text">{t(block.text)}</span>
        </Reveal>
      )

    case "p":
      return <p>{t(block.text)}</p>

    case "ul":
      return (
        <ul className="case-list">
          {block.items.map((li, i) => (
            <li key={i}>{t(li)}</li>
          ))}
        </ul>
      )

    case "aside":
      return (
        <Reveal as="aside" className="case-aside">
          {block.items.map((p, i) => (
            <p key={i}>{t(p)}</p>
          ))}
        </Reveal>
      )

    case "figure":
      return (
        <Reveal as="figure" className={"case-figure" + (block.wide ? " is-wide" : "")}>
          <div className="case-frame">
            <img
              src={block.src}
              alt={block.alt}
              width={block.w}
              height={block.h}
              loading="lazy"
              decoding="async"
            />
          </div>
          {block.caption && <figcaption>{t(block.caption)}</figcaption>}
        </Reveal>
      )

    case "shots":
      return (
        <Reveal className="case-shots">
          {block.figures.map((f, i) => (
            <figure key={i}>
              <div className="case-frame">
                <img
                  src={f.src}
                  alt={f.alt}
                  width={f.w}
                  height={f.h}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption>
                <b>{t(f.title)}</b>
                <span>{t(f.note)}</span>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      )

    default:
      return null
  }
}

export default function CaseStudy() {
  const { slug } = useParams()
  const { t, lang } = useLang()
  const study = CASES.find((c) => c.slug === slug)

  const chapters = useChapters(study?.blocks ?? [], lang)
  const active = useActiveChapter(chapters.map((c) => c.id))

  useEffect(() => {
    if (!study) return
    const prev = document.title
    document.title = study.docTitle
    return () => {
      document.title = prev
    }
  }, [study])

  if (!study) return <NotFound />

  /* Chapter ids are assigned in the same order they were counted. */
  let h2Seen = 0

  return (
    <>
      <SiteNav home={false} />

      <main className="case" id="case">
        {/* ---------- Masthead ---------- */}
        <header className="case-masthead">
          <Link className="back-link" to="/#work">
            <span className="arrow" aria-hidden="true">
              ←
            </span>
            <span>{t(ui.back)}</span>
          </Link>

          <p className="eyebrow">{t(study.eyebrow)}</p>
          <h1 className="case-title">{study.title}</h1>
          <p className="case-standfirst">{t(study.standfirst)}</p>

          <dl className="case-facts">
            {study.facts.map((f, i) => (
              <div key={i}>
                <dt className="fact-label">{t(f.label)}</dt>
                <dd className="fact-value">{t(f.value)}</dd>
              </div>
            ))}
          </dl>
        </header>

        {study.cover && (
          <Reveal className="case-cover">
            <img
              src={study.cover.src}
              alt={study.cover.alt}
              width={study.cover.w}
              height={study.cover.h}
            />
          </Reveal>
        )}

        {/* ---------- Body: sticky chapter rail + one measure of prose ------- */}
        <div className="case-layout">
          <aside className="case-rail" aria-label={t(ui.contents)}>
            <div className="case-rail-inner">
              <p className="case-rail-label">{t(ui.contents)}</p>
              <ol>
                {chapters.map((c) => (
                  <li key={c.id}>
                    <a
                      href={`#${c.id}`}
                      className={active === c.id ? "is-here" : undefined}
                      aria-current={active === c.id ? "true" : undefined}
                    >
                      {t(c.text)}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <article className="case-prose">
            {study.blocks.map((block, i) => (
              <Block
                key={i}
                block={block}
                t={t}
                headingId={block.type === "h2" ? chapters[h2Seen++]?.id : undefined}
              />
            ))}
          </article>
        </div>

        {/* ---------- The hand-off ---------- */}
        <section className="case-end">
          {study.next && (
            <Link className="case-next" to={`/work/${study.next.slug}`}>
              <span className="eyebrow">{t(ui.next)}</span>
              <span className="case-next-title">
                {study.next.title}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
          )}
          <Link className="case-talk" to="/#contact">
            <span className="case-talk-title">{t(ui.talk)}</span>
            <span className="case-talk-note">{t(ui.talkNote)}</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
