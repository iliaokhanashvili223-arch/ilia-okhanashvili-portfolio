import { Link } from "react-router-dom"
import SiteNav from "../components/SiteNav.jsx"
import SiteFooter from "../components/SiteFooter.jsx"
import { useLang } from "../i18n/LanguageContext.jsx"

const copy = {
  code: { en: "404", ka: "404" },
  title: { en: "This page isn't here.", ka: "ეს გვერდი აქ არ არის." },
  lede: {
    en: "The link may be old, or the page may have moved. The work is one click away.",
    ka: "ბმული შესაძლოა ძველია, ან გვერდი გადავიდა. ნამუშევრები ერთ კლიკშია.",
  },
  cta: { en: "Back to work", ka: "ნამუშევრებზე დაბრუნება" },
}

export default function NotFound() {
  const { t } = useLang()
  return (
    <>
      <SiteNav home={false} />
      <main className="section" id="case">
        <div className="section-inner not-found">
          <span className="eyebrow">{t(copy.code)}</span>
          <h1 className="section-title">{t(copy.title)}</h1>
          <p className="section-lede">{t(copy.lede)}</p>
          <Link className="btn btn-primary" to="/#work">
            {t(copy.cta)}
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
