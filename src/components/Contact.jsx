import { useEffect, useRef, useState } from "react"
import Reveal from "./Reveal.jsx"

const EMAIL = "iliaokhanashvili223@gmail.com"

export const SOCIALS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ilia-okhanashvili-3100b9421/",
    path: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z",
    box: "0 0 16 16",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/iliaokhanashvili223-arch",
    path: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8",
    box: "0 0 16 16",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/oxaaaaaaaaaaaaaaa/",
    path: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334",
    box: "0 0 16 16",
  },
  {
    id: "behance",
    label: "Behance",
    href: "https://www.behance.net/iliaokhanashvili",
    /* Behance's mark is wider than it is tall, so it keeps its own frame. */
    path: "M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v336h172.4c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-65.3-71.3M75.9 133.6h71.5c27.5 0 52.2 7.7 52.2 39.6 0 29.4-19.2 41.2-46.5 41.2H75.9zm78.2 249.9H75.9V288h79.7c33.5 0 54.7 14 54.7 49.4 0 34.9-25.3 46.1-56.2 46.1m347.7-136.1c-8.6-46.4-50.8-77.1-97.7-75.9-70.9 0-119 44.5-119 116.4 0 74.4 45.6 116 119 116 55.6 0 91.5-25.1 108.6-78.4h-58.8c-6 19.6-30.6 29.9-49.8 29.9-37 0-56.4-21.6-56.4-58.4h169c.5-16.5-.3-33-3.9-49.6m-165 20.9c2.1-30.3 22.3-49.3 52.6-49.3 31.8 0 47.9 18.7 50.5 49.3zM356 96h141.3v34.2H356z",
    box: "0 0 576 512",
  },
]

const COPY = {
  eyebrow: "Contact",
  available: "Available now",
  giant: "Let's talk",
  lede: "Open to remote roles and contracts.",
  copyBtn: "Copy",
  copied: "Copied ✓",
  meta: "Tbilisi · UTC+4 · usually replies within a day",
}

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      /* Older engines, or a denied permission: a hidden field still works. */
      const ta = document.createElement("textarea")
      ta.value = EMAIL
      ta.setAttribute("readonly", "")
      ta.style.cssText = "position:absolute;left:-9999px"
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand("copy")
      } catch {
        document.body.removeChild(ta)
        return
      }
      document.body.removeChild(ta)
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-h">
      <Reveal className="section-inner">
        <div className="contact-eyebrow-row">
          <span className="eyebrow">{COPY.eyebrow}</span>
          <span className="avail-chip">
            <span className="avail-dot" aria-hidden="true" />
            <span>{COPY.available}</span>
          </span>
        </div>

        {/* The finale: one display-size invitation, carrying the hero's spark
            into the last frame. */}
        <h2 className="contact-giant" id="contact-h">
          <span>{COPY.giant}</span>
          <span className="contact-spark" aria-hidden="true">
            ✦
          </span>
        </h2>
        <p className="contact-lede">{COPY.lede}</p>

        <div className="contact-mail-row">
          <a className="contact-mail" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <button
            className={"copy-mail" + (copied ? " is-copied" : "")}
            type="button"
            onClick={copyEmail}
          >
            <svg
              viewBox="0 0 16 16"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
              <path d="M10.5 5.5v-2a1.5 1.5 0 0 0-1.5-1.5H4a1.5 1.5 0 0 0-1.5 1.5v5A1.5 1.5 0 0 0 4 10h1.5" />
            </svg>
            <span className="copy-label">{copied ? COPY.copied : COPY.copyBtn}</span>
          </button>
        </div>

        <p className="contact-meta">{COPY.meta}</p>

        {/* Social row — Uiverse.io component by Zameerahmad01 (icon disc, fill
            rising from the bottom edge, tooltip above), dressed for this room.
            `data-social` is what carries each network's colour to all parts. */}
        <ul className="example-2">
          {SOCIALS.map((s) => (
            <li className="icon-content" data-social={s.id} key={s.id}>
              <a
                data-social={s.id}
                aria-label={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="filled" />
                <svg
                  viewBox={s.box}
                  className={`bi bi-${s.id}`}
                  fill="currentColor"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="currentColor" d={s.path} />
                </svg>
              </a>
              <div className="tooltip" aria-hidden="true">
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
