import { useRef } from "react"
import useHeroChoreography from "../hooks/useHeroChoreography.js"
import { asset, assetSrcSet } from "../lib/asset.js"

export default function Hero() {
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
            src={asset("/assets/hero-room.webp")}
            srcSet={assetSrcSet("/assets/hero-room@half.webp 960w, /assets/hero-room.webp 1920w")}
            sizes="(min-aspect-ratio: 16/9) 110vw, 196vh"
          />
          <div className="hero-cast">
            <img
              className="layer layer-robot"
              alt=""
              width="1006"
              height="701"
              fetchPriority="high"
              src={asset("/assets/hero-hand-robot.webp")}
              srcSet={assetSrcSet("/assets/hero-hand-robot@half.webp 503w, /assets/hero-hand-robot.webp 1006w")}
              sizes="(min-aspect-ratio: 16/9) 53vw, 88vw"
            />
            <img
              className="layer layer-human"
              alt=""
              width="857"
              height="509"
              fetchPriority="high"
              src={asset("/assets/hero-hand-human.webp")}
              srcSet={assetSrcSet("/assets/hero-hand-human@half.webp 428w, /assets/hero-hand-human.webp 857w")}
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
            <span className="line">
              <span className="line-inner">Designing the spark</span>
            </span>
            <span className="line">
              <span className="line-inner">between human</span>
            </span>
            <span className="line">
              <span className="line-inner">and machine.</span>
            </span>
          </h1>
          <div className="hero-brief">
            <p className="hero-intro">
              <span>Ilia Okhanashvili</span>
              <span className="hero-intro-sep" aria-hidden="true">
                —
              </span>
              <span>UI/UX Designer</span>
            </p>
            <p className="hero-sub">
              Interfaces that keep the human touch in a technological world —
              clean, considered, alive.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#work">
                View work
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch
              </a>
            </div>
          </div>
        </div>

        <a className="scroll-cue" href="#work" aria-label="Scroll to work">
          <span className="scroll-cue-label">Scroll</span>
          <span className="scroll-cue-line" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
