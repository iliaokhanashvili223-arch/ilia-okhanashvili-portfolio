import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/* A route change should land at the top of the new page, but an in-page hash
   (#work, #contact) must still be honoured — otherwise the nav stops working
   the moment it becomes a router link. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
