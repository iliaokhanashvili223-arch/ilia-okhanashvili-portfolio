import { useRef } from "react"
import { useLang } from "../i18n/LanguageContext.jsx"
import useHeroChoreography from "../hooks/useHeroChoreography.js"

const copy = {
  title: [
    { en: "Designing the spark", ka: "ვქმნი ნაპერწკალს" },
    { en: "between human", ka: "ადამიანსა და" },
    { en: "and machine.", ka: "მანქანას შორის." },
  ],
  name: { en: "Ilia Okhanashvili", ka: "ილია ოხანაშვილი" },
  role: { en: "UI/UX Designer", ka: "UI/UX დიზაინერი" },
  sub: {
    en: "Interfaces that keep the human touch in a technological world — clean, considered, alive.",
    ka: "ინტერფეისები, რომლებიც ტექნოლოგიურ სამყაროში ადამიანურ შეხებას ინარჩუნებს — სუფთა, გააზრებული, ცოცხალი.",
  },
  viewWork: { en: "View work", ka: "იხილეთ ნამუშევრები" },
  getInTouch: { en: "Get in touch", ka: "დამიკავშირდით" },
  scroll: { en: "Scroll", ka: "ქვემოთ" },
}

export default function Hero() {
  const { t } = useLang()
  const heroRef = useRef(null)
  const stageRef = useRef(null)
  useHeroChoreography(heroRef, stageRef)

  return (
    <section className="hero" id="intro" aria-label="Introduction" ref={heroRef}>
      <div className="hero-stage" ref={stageRef}>
        <div className="hero-scene" aria-hidden="true">
          <img
            className="layer layer-room"
            alt=""
            width="1920"
            height="1080"
            fetchPriority="high"
            src="/assets/hero-room.webp"
            srcSet="/assets/hero-room@half.webp 960w, /assets/hero-room.webp 1920w"
            sizes="(min-aspect-ratio: 16/9) 110vw, 196vh"
          />
          <div className="hero-cast">
            <img
              className="layer layer-robot"
              alt=""
              width="1006"
              height="701"
              fetchPriority="high"
              src="/assets/hero-hand-robot.webp"
              srcSet="/assets/hero-hand-robot@half.webp 503w, /assets/hero-hand-robot.webp 1006w"
              sizes="(min-aspect-ratio: 16/9) 53vw, 88vw"
            />
            <img
              className="layer layer-human"
              alt=""
              width="857"
              height="509"
              fetchPriority="high"
              src="/assets/hero-hand-human.webp"
              srcSet="/assets/hero-hand-human@half.webp 428w, /assets/hero-hand-human.webp 857w"
              sizes="(min-aspect-ratio: 16/9) 45vw, 74vw"
            />

            <div className="contact-point">
              <span className="spark-halo" />
              <span className="spark" />
              <span className="spark-ring" />
            </div>
          </div>
        </div>

        <div className="hero-veil" aria-hidden="true" />

        <div className="hero-copy">
          <h1 className="hero-title">
            {copy.title.map((line, i) => (
              <span className="line" key={i}>
                <span className="line-inner">{t(line)}</span>
              </span>
            ))}
          </h1>
          <div className="hero-brief">
            <p className="hero-intro">
              <span>{t(copy.name)}</span>
              <span className="hero-intro-sep" aria-hidden="true">
                —
              </span>
              <span>{t(copy.role)}</span>
            </p>
            <p className="hero-sub">{t(copy.sub)}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#work">
                {t(copy.viewWork)}
              </a>
              <a className="btn btn-ghost" href="#contact">
                {t(copy.getInTouch)}
              </a>
            </div>
          </div>
        </div>

        <a className="scroll-cue" href="#work" aria-label="Scroll to work">
          <span className="scroll-cue-label">{t(copy.scroll)}</span>
          <span className="scroll-cue-line" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
