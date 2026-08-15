import { useState } from "react"
import { useLang } from "../i18n/LanguageContext.jsx"
import Reveal from "./Reveal.jsx"
import Project from "./Project.jsx"
import { PROJECTS } from "../data/projects.js"

const copy = {
  titleA: { en: "My", ka: "ჩემი" },
  titleB: { en: "Work.", ka: "ნამუშევრები." },
  lede: {
    en: "Client work, not concepts. Every screen below is a real screen; click any of them and it comes to the front.",
    ka: "კლიენტის ნამუშევრები და არა კონცეპტები. ქვემოთ ყოველი ეკრანი ნამდვილია; დააკლიკეთ ნებისმიერს და წინ ამოვა.",
  },
}

export default function Work() {
  const { t } = useLang()
  /* One live region for the whole section: a screen change is announced once,
     not six times over. */
  const [status, setStatus] = useState("")

  return (
    <section className="section work" id="work" aria-labelledby="work-h">
      <Reveal className="work-head">
        <h2 className="work-title" id="work-h">
          <span>{t(copy.titleA)}</span> <em>{t(copy.titleB)}</em>
        </h2>
        <p className="work-lede">{t(copy.lede)}</p>
      </Reveal>

      {PROJECTS.map((p) => (
        <Project key={p.id} project={p} onAnnounce={setStatus} />
      ))}

      <p className="sr-only" aria-live="polite" id="work-status">
        {status}
      </p>
    </section>
  )
}
