import { useRef } from "react"
import { useLang } from "../i18n/LanguageContext.jsx"
import useSkillBeam from "../hooks/useSkillBeam.js"
import Reveal from "./Reveal.jsx"
import * as Icons from "./BeamIcons.jsx"
import { SKILLS } from "../data/skills.js"

const copy = {
  eyebrow: { en: "About", ka: "ჩემ შესახებ" },
  title: {
    en: "I design the screens where a wrong decision costs money.",
    ka: "ვქმნი იმ ეკრანებს, სადაც არასწორი გადაწყვეტილება ფულად ჯდება.",
  },
  portraitNote: { en: "Portrait — coming soon", ka: "პორტრეტი — მალე" },
  lead: {
    en: "I design B2B and AI-driven products that people actually use at work — not screens that only look good in a portfolio.",
    ka: "ვქმნი B2B და AI პროდუქტებს, რომლებსაც ხალხი სამსახურში ნამდვილად იყენებს — და არა ეკრანებს, რომლებიც მხოლოდ პორტფოლიოში გამოიყურება კარგად.",
  },
  clients: {
    en: "I've shipped products end-to-end for real clients: a restaurant-supply platform where managers place orders by voice, an AI hotel-concierge app for travelers, and a car marketplace I designed and then built in React.",
    ka: "რეალური კლიენტებისთვის პროდუქტები თავიდან ბოლომდე მაქვს ჩაბარებული: სარესტორნო მომარაგების პლატფორმა, სადაც მენეჯერები შეკვეთას ხმით აკეთებენ; AI კონსიერჟ-აპლიკაცია მოგზაურებისთვის; და ავტომობილების მარკეტპლეისი, რომელიც ჯერ დავაპროექტე და მერე React-ზე ავაწყვე.",
  },
  points: [
    {
      title: {
        en: "Complex flows, not landing pages.",
        ka: "რთული ფლოუები, არა სალენდინგო გვერდები.",
      },
      text: {
        en: "Multi-step ordering, approval chains, supplier catalogs, onboarding — the screens where a wrong decision costs the business money.",
        ka: "მრავალსაფეხურიანი შეკვეთები, დამტკიცების ჯაჭვები, მომწოდებელთა კატალოგები, ონბორდინგი — ის ეკრანები, სადაც არასწორი გადაწყვეტილება ბიზნესს ფულად უჯდება.",
      },
    },
    {
      title: {
        en: "Design systems that survive handoff.",
        ka: "დიზაინ-სისტემები, რომლებიც გადაცემას უძლებს.",
      },
      text: {
        en: "Tokens, components, states, documentation — Figma Variables and Auto Layout, structured so a developer can build from it without asking me questions.",
        ka: "ტოკენები, კომპონენტები, მდგომარეობები, დოკუმენტაცია — Figma Variables და Auto Layout, ისე აწყობილი, რომ დეველოპერმა ზედმეტი კითხვების გარეშე ააწყოს.",
      },
    },
    {
      title: { en: "I design and I build.", ka: "ვაპროექტებ და ვაწყობ კიდეც." },
      text: {
        en: "React, Next.js, HTML/CSS/JS. I've shipped my own designs to production — so I know what's cheap to build and what isn't, and my handoffs don't bounce back.",
        ka: "React, Next.js, HTML/CSS/JS. ჩემი დიზაინები პროდაქშენამდე თვითონ მიმიყვანია — ამიტომ ვიცი, რის აწყობა რად ჯდება, და ჩემი გადაცემა უკან აღარ ბრუნდება.",
      },
    },
  ],
  ai: {
    en: "I use AI deliberately and I say where: illustration and asset production, rapid concept exploration, copy drafts. It does not decide the information architecture, the flow, or the trade-offs. Those are mine, and I can walk you through every one of them.",
    ka: "AI-ს გააზრებულად ვიყენებ და ვამბობ კიდეც სად: ილუსტრაციისა და ასეტების წარმოებაში, კონცეფციის სწრაფ ძიებაში, ტექსტის მონახაზებში. ის არ წყვეტს არც ინფორმაციულ არქიტექტურას, არც მომხმარებლის გზას, არც კომპრომისებს. ეს ჩემია და თითოეულის ახსნა შემიძლია.",
  },
  facts: [
    {
      label: { en: "Based in", ka: "მდებარეობა" },
      value: { en: "Tbilisi, Georgia · UTC+4", ka: "თბილისი, საქართველო · UTC+4" },
    },
    {
      label: { en: "Open to", ka: "ღია ვარ" },
      value: {
        en: "Remote roles & contracts · EU & US timezones",
        ka: "დისტანციური როლები და კონტრაქტები · EU/US დროის სარტყლები",
      },
    },
    {
      label: { en: "Languages", ka: "ენები" },
      value: {
        en: "Georgian (native) · English (fluent)",
        ka: "ქართული (მშობლიური) · ინგლისური (თავისუფლად)",
      },
    },
  ],
  certLabel: { en: "Certificate", ka: "სერტიფიკატი" },
  certName: { en: "UI & UX Course", ka: "UI & UX კურსი" },
  certIssuer: {
    en: "Academy of Digital Industries",
    ka: "Academy of Digital Industries",
  },
  certDate: { en: "Issued 24 November 2025", ka: "გაცემულია 2025 წლის 24 ნოემბერს" },
  certId: { en: "Credential 406244390", ka: "სერტიფიკატის № 406244390" },
  certView: { en: "View certificate", ka: "სერტიფიკატის ნახვა" },
  certAlt: {
    en: "Certificate of achievement in UI & UX Course, awarded to Ilia Okhanashvili by the Academy of Digital Industries on 24 November 2025.",
    ka: "UI & UX კურსის დამადასტურებელი სერტიფიკატი, გაცემული ილია ოხანაშვილზე Academy of Digital Industries-ის მიერ, 2025 წლის 24 ნოემბერს.",
  },
  skillsLabel: { en: "Skills", ka: "უნარები" },
  me: { en: "ME", ka: "მე" },
}

function Node({ id, title, children, className = "" }) {
  return (
    <div className={`beam-node ${className}`} data-node={id} title={title}>
      {children}
    </div>
  )
}

export default function About() {
  const { t } = useLang()
  const beamRef = useRef(null)
  useSkillBeam(beamRef)

  return (
    <section className="section" id="about" aria-labelledby="about-h">
      <div className="section-inner">
        <Reveal className="section-head">
          <span className="eyebrow">{t(copy.eyebrow)}</span>
          <h2 className="section-title" id="about-h">
            {t(copy.title)}
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
              <span className="photo-frame-note">{t(copy.portraitNote)}</span>
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
                  {t(copy.me)}
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
            <p className="about-lead">{t(copy.lead)}</p>
            <p>{t(copy.clients)}</p>
            <ul className="about-points">
              {copy.points.map((p, i) => (
                <li key={i}>
                  <span className="point-title">{t(p.title)}</span>
                  <span className="point-text">{t(p.text)}</span>
                </li>
              ))}
            </ul>
            <p>{t(copy.ai)}</p>
          </Reveal>

          <Reveal className="facts" delay={2}>
            {copy.facts.map((f, i) => (
              <div key={i}>
                <div className="fact-label">{t(f.label)}</div>
                <div className="fact-value">{t(f.value)}</div>
              </div>
            ))}

            {/* The certificate itself, not a line of text about it. */}
            <div className="cert">
              <div className="fact-label">{t(copy.certLabel)}</div>
              <a
                className="cert-card"
                href="/assets/certificate-adi.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="cert-thumb"
                  src="/assets/certificate-adi.webp"
                  alt={t(copy.certAlt)}
                  width="1078"
                  height="775"
                  loading="lazy"
                />
                <div className="cert-body">
                  <div className="cert-name">{t(copy.certName)}</div>
                  <div className="cert-issuer">{t(copy.certIssuer)}</div>
                  <div className="cert-meta">
                    {t(copy.certDate)} · {t(copy.certId)}
                  </div>
                  <span className="cert-cta">
                    {t(copy.certView)}
                    <span className="arrow" aria-hidden="true">
                      ↗
                    </span>
                  </span>
                </div>
              </a>
            </div>
          </Reveal>
        </div>

        {/* The full skill inventory. Skill names stay in English on both
            languages: recruiters search for them verbatim. */}
        <Reveal className="skills-cloud">
          <div className="skills-cloud-label">{t(copy.skillsLabel)}</div>
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
