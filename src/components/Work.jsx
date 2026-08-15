import { useState } from "react"
import Reveal from "./Reveal.jsx"
import Project from "./Project.jsx"
import { PROJECTS } from "../data/projects.js"

export default function Work() {
  /* One live region for the whole section: a screen change is announced once,
     not six times over. */
  const [status, setStatus] = useState("")

  return (
    <section className="section work" id="work" aria-labelledby="work-h">
      <Reveal className="work-head">
        <h2 className="work-title" id="work-h">
          <span>My</span> <em>Work.</em>
        </h2>
        <p className="work-lede">
          Client work, not concepts. Every screen below is a real screen; click
          any of them and it comes to the front.
        </p>
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
