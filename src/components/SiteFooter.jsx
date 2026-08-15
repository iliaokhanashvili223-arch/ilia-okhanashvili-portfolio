import { useLang } from "../i18n/LanguageContext.jsx"

const copy = {
  rights: { en: "© 2026 Ilia Okhanashvili", ka: "© 2026 ილია ოხანაშვილი" },
  credit: {
    en: "Designed & built by Ilia Okhanashvili",
    ka: "დიზაინი და აწყობა — ილია ოხანაშვილი",
  },
}

export default function SiteFooter() {
  const { t } = useLang()
  return (
    <footer className="site-foot">
      <span>{t(copy.rights)}</span>
      <span>{t(copy.credit)}</span>
    </footer>
  )
}
