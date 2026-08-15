import { useRef } from "react"
import useSkillBeam from "../hooks/useSkillBeam.js"
import Reveal from "./Reveal.jsx"
import * as Icons from "./BeamIcons.jsx"
import { SKILLS } from "../data/skills.js"

const POINTS = [
  {
    title: "Complex flows, not landing pages.",
    text: "Multi-step ordering, approval chains, supplier catalogs, onboarding — the screens where a wrong decision costs the business money.",
  },
  {
    title: "Design systems that survive handoff.",
    text: "Tokens, components, states, documentation — Figma Variables and Auto Layout, structured so a developer can build from it without asking me questions.",
  },
  {
    title: "I design and I build.",
    text: "React, Next.js, HTML/CSS/JS. I've shipped my own designs to production — so I know what's cheap to build and what isn't, and my handoffs don't bounce back.",
  },
]

const FACTS = [
  { label: "Based in", value: "Tbilisi, Georgia · UTC+4" },
  { label: "Open to", value: "Remote roles & contracts · EU & US timezones" },
  { label: "Languages", value: "Georgian (native) · English (fluent)" },
]

const CERT_ALT =
  "Certificate of achievement in UI & UX Course, awarded to Ilia Okhanashvili by the Academy of Digital Industries on 24 November 2025."

function Node({ id, title, children, className = "" }) {
  return (
    <div className={`beam-node ${className}`} data-node={id} title={title}>
      {children}
    </div>
  )
}

export default function About() {
  const beamRef = useRef(null)
  useSkillBeam(beamRef)

  return (
    <section className="section" id="about" aria-labelledby="about-h">
      <div className="section-inner">
        <Reveal className="section-head">
          <span className="eyebrow">About</span>
          <h2 className="section-title" id="about-h">
            I design the screens where a wrong decision costs money.
          </h2>
        </Reveal>

        {/* 2×2: portrait ↔ copy on the first row, beam ↔ facts on the second,
            so the bare beam spans exactly the facts card's height. Drop an
            <img> inside .photo-frame when the photo is ready — :has() hides
            the placeholder. */}
        <div className="about-grid">
          <Reveal as="figure" className="photo-frame">
            <span className="frame-tick frame-tick--tl" aria-hidden="true" />
            <span className="frame-tick frame-tick--tr" aria-hidden="true" />
            <span className="frame-tick frame-tick--bl" aria-hidden="true" />
            <span className="frame-tick frame-tick--br" aria-hidden="true" />
            <div className="photo-frame-inner">
              <span className="photo-frame-monogram" aria-hidden="true">
                IO
              </span>
              <span className="photo-frame-note">Portrait — coming soon</span>
            </div>
          </Reveal>

          <Reveal
            className="skills-beam"
            delay={1}
            role="img"
            aria-label="Diagram: Figma, Claude, Photoshop, React, Next.js, JavaScript and ChatGPT, all connected to me."
            innerRef={beamRef}
          >
            <svg className="beam-svg" aria-hidden="true" />
            <div className="beam-col" aria-hidden="true">
              <div className="beam-row">
                <Node id="figma" title="Figma">
                  <Icons.Figma />
                </Node>
                <Node id="claude" title="Claude">
                  <Icons.Claude />
                </Node>
                <Node id="photoshop" title="Adobe Photoshop">
                  <Icons.Photoshop />
                </Node>
              </div>
              <div className="beam-row">
                <Node id="react" title="React">
                  <Icons.React_ />
                </Node>
                <Node id="me" className="beam-node--me">
                  ME
                </Node>
                <Node id="next" title="Next.js">
                  <Icons.Next />
                </Node>
              </div>
              <div className="beam-row">
                <Node id="js" title="HTML / CSS / JavaScript">
                  <Icons.Js />
                </Node>
                <Node id="ai" title="ChatGPT">
                  <Icons.OpenAI />
                </Node>
              </div>
            </div>
          </Reveal>

          <Reveal className="about-copy" delay={1}>
            <p className="about-lead">
              I design B2B and AI-driven products that people actually use at
              work — not screens that only look good in a portfolio.
            </p>
            <p>
              I've shipped products end-to-end for real clients: a
              restaurant-supply platform where managers place orders by voice, an
              AI hotel-concierge app for travelers, and a car marketplace I
              designed and then built in React.
            </p>
            <ul className="about-points">
              {POINTS.map((p) => (
                <li key={p.title}>
                  <span className="point-title">{p.title}</span>
                  <span className="point-text">{p.text}</span>
                </li>
              ))}
            </ul>
            <p>
              I use AI deliberately and I say where: illustration and asset
              production, rapid concept exploration, copy drafts. It does not
              decide the information architecture, the flow, or the trade-offs.
              Those are mine, and I can walk you through every one of them.
            </p>
          </Reveal>

          <Reveal className="facts" delay={2}>
            {FACTS.map((f) => (
              <div key={f.label}>
                <div className="fact-label">{f.label}</div>
                <div className="fact-value">{f.value}</div>
              </div>
            ))}

            {/* The certificate itself, not a line of text about it. */}
            <div className="cert">
              <div className="fact-label">Certificate</div>
              <a
                className="cert-card"
                href="/assets/certificate-adi.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="cert-thumb"
                  src="/assets/certificate-adi.webp"
                  alt={CERT_ALT}
                  width="1078"
                  height="775"
                  loading="lazy"
                />
                <div className="cert-body">
                  <div className="cert-name">UI &amp; UX Course</div>
                  <div className="cert-issuer">Academy of Digital Industries</div>
                  <div className="cert-meta">
                    Issued 24 November 2025 · Credential 406244390
                  </div>
                  <span className="cert-cta">
                    View certificate
                    <span className="arrow" aria-hidden="true">
                      ↗
                    </span>
                  </span>
                </div>
              </a>
            </div>
          </Reveal>
        </div>

        {/* The full skill inventory. */}
        <Reveal className="skills-cloud">
          <div className="skills-cloud-label">Skills</div>
          <ul className="skills-chips">
            {SKILLS.map((s) => (
              <li key={s.name} className={s.core ? "is-core" : undefined}>
                {s.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
