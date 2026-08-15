import { createContext, useCallback, useContext, useEffect, useState } from "react"

/* EN/KA, one level up from the vanilla build.
   There, every bilingual node carried data-en/data-ka and a script rewrote
   textContent on toggle. Here the pair travels as data — `t({en, ka})` — so a
   string can never fall out of sync with its own element, and Georgian stays a
   first-class sibling rather than an attribute bolted onto English. */

const STORAGE_KEY = "io-lang"
const LanguageContext = createContext(null)

function readSaved() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === "ka" || saved === "en" ? saved : "en"
  } catch {
    return "en" /* private mode */
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readSaved)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* private mode — the toggle still works for this visit */
    }
  }, [lang])

  const t = useCallback(
    (pair) => (pair && typeof pair === "object" ? pair[lang] ?? pair.en : pair),
    [lang]
  )

  const toggle = useCallback(() => setLang((l) => (l === "en" ? "ka" : "en")), [])

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>")
  return ctx
}
