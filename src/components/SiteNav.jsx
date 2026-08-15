import { Link } from "react-router-dom"
import { useLang } from "../i18n/LanguageContext.jsx"

const copy = {
  name: { en: "Ilia Okhanashvili", ka: "ილია ოხანაშვილი" },
  work: { en: "Work", ka: "ნამუშევრები" },
  about: { en: "About", ka: "ჩემ შესახებ" },
  contact: { en: "Contact", ka: "კონტაქტი" },
  skip: { en: "Skip to content", ka: "შინაარსზე გადასვლა" },
}

/* `home` is false on a case study, where the section links have to travel back
   to the homepage before they can find their anchor. */
export default function SiteNav({ home = true }) {
  const { lang, toggle, t } = useLang()
  const to = (hash) => (home ? hash : `/${hash}`)

  return (
    <>
      <a className="skip-link" href={home ? "#intro" : "#case"}>
        {t(copy.skip)}
      </a>

      <header className="site-nav">
        <Link className="wordmark" to="/" aria-label="Ilia Okhanashvili — home">
          <span className="wordmark-name">{t(copy.name)}</span>
          <span className="wordmark-dot" aria-hidden="true" />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {home ? (
            <>
              <a href="#work">{t(copy.work)}</a>
              <a href="#about">{t(copy.about)}</a>
              <a href="#contact">{t(copy.contact)}</a>
            </>
          ) : (
            <>
              <Link to={to("#work")}>{t(copy.work)}</Link>
              <Link to={to("#about")}>{t(copy.about)}</Link>
              <Link to={to("#contact")}>{t(copy.contact)}</Link>
            </>
          )}
        </nav>
        <button
          className="lang-toggle"
          type="button"
          onClick={toggle}
          aria-label={
            lang === "en" ? "ენის შეცვლა ქართულად" : "Switch language to English"
          }
        >
          <span className={"lang-opt" + (lang === "en" ? " is-active" : "")}>EN</span>
          <span className="lang-divider" aria-hidden="true">
            /
          </span>
          <span className={"lang-opt" + (lang === "ka" ? " is-active" : "")}>ქა</span>
        </button>
      </header>
    </>
  )
}
