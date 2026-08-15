import SiteNav from "../components/SiteNav.jsx"
import Hero from "../components/Hero.jsx"
import Work from "../components/Work.jsx"
import About from "../components/About.jsx"
import Contact from "../components/Contact.jsx"
import SiteFooter from "../components/SiteFooter.jsx"

/* THESIS: The portfolio opens inside the symbol, not beside it — one
   full-bleed charged moment (human hand and machine hand a breath apart) that
   the visitor is placed into; it refuses the grid-of-projects opener and the
   split text/illustration hero.
   OWN-WORLD: Near-black violet dark (#0B0A10) as the room; one lilac family
   (#C4B0FF→#7C5CD6) carried by light, not fills — rim light, spark, selection,
   focus. Clash Display for voice, Satoshi for body, Noto Sans Georgian as a
   first-class sibling. No gray on dark: all secondary text is tinted lilac.
   STORY: Visitor lands inside the almost-touch, reads "the spark between human
   and machine", understands Ilia designs that meeting point, and moves to work
   or contact. */
export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
