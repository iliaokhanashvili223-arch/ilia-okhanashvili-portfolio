import { useEffect } from "react"

/* Skills beam — a hand port of Magic UI's <AnimatedBeam> (React/framer-motion)
   to plain SVG. Geometry is the same quadratic bézier the original computes
   from element rects; the traveling gradient is the same four-stop window the
   original sweeps with framer-motion, here driven by SMIL so it needs no
   animation library at all. Paths are recomputed on resize, like the
   original's ResizeObserver. */

const NS = "http://www.w3.org/2000/svg"

/* Three beams flow in from the left column, three flow out to the right
   (`reverse`), and Claude drops in from the top. Durations differ per beam so
   the sweeps drift apart instead of marching in step. */
const LINKS = [
  { from: "figma", curvature: -75, endYOffset: -10, reverse: false, dur: 4.4 },
  { from: "claude", curvature: 0, endYOffset: -10, reverse: false, dur: 5.0 },
  { from: "react", curvature: 0, endYOffset: 0, reverse: false, dur: 5.2 },
  { from: "js", curvature: 75, endYOffset: 10, reverse: false, dur: 4.8 },
  { from: "photoshop", curvature: -75, endYOffset: -10, reverse: true, dur: 5.6 },
  { from: "next", curvature: 0, endYOffset: 0, reverse: true, dur: 4.6 },
  { from: "ai", curvature: 75, endYOffset: 10, reverse: true, dur: 5.9 },
]

export default function useSkillBeam(containerRef) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const svg = container.querySelector(".beam-svg")
    const me = container.querySelector('[data-node="me"]')
    if (!svg || !me) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const el = (name) => document.createElementNS(NS, name)

    function stop(offset, opacity) {
      const s = el("stop")
      s.setAttribute("offset", offset)
      s.setAttribute(
        "stop-color",
        offset === "0%" || offset === "20%" ? "#c4b0ff" : "#7c5cd6"
      )
      s.setAttribute("stop-opacity", opacity)
      return s
    }

    function sweep(attr, fromVal, toVal, dur, begin) {
      const a = el("animate")
      a.setAttribute("attributeName", attr)
      a.setAttribute("values", fromVal + ";" + toVal)
      a.setAttribute("dur", dur + "s")
      a.setAttribute("begin", begin + "s")
      a.setAttribute("repeatCount", "indefinite")
      a.setAttribute("calcMode", "spline")
      a.setAttribute("keySplines", "0.16 1 0.3 1") /* same ease as the original */
      return a
    }

    /* Re-mounting under StrictMode must not stack a second set of paths. */
    svg.replaceChildren()

    const defs = el("defs")
    svg.appendChild(defs)

    const links = LINKS.map((link, i) => {
      const fromEl = container.querySelector(`[data-node="${link.from}"]`)

      const grad = el("linearGradient")
      grad.setAttribute("id", "beam-grad-" + i)
      grad.setAttribute("gradientUnits", "userSpaceOnUse")
      grad.setAttribute("y1", "0")
      grad.setAttribute("y2", "0")
      grad.appendChild(stop("0%", "0"))
      grad.appendChild(stop("20%", "1"))
      grad.appendChild(stop("60%", "1"))
      grad.appendChild(stop("100%", "0"))

      if (reduceMotion) {
        /* No sweep — a static soft gradient across the whole panel. */
        grad.setAttribute("x1", "0%")
        grad.setAttribute("x2", "100%")
      } else {
        grad.setAttribute("x1", link.reverse ? "90%" : "10%")
        grad.setAttribute("x2", link.reverse ? "100%" : "0%")
        const begin = -(i * 0.9) /* negative offsets desync the loops from load */
        if (link.reverse) {
          grad.appendChild(sweep("x1", "90%", "-10%", link.dur, begin))
          grad.appendChild(sweep("x2", "100%", "0%", link.dur, begin))
        } else {
          grad.appendChild(sweep("x1", "10%", "110%", link.dur, begin))
          grad.appendChild(sweep("x2", "0%", "100%", link.dur, begin))
        }
      }
      defs.appendChild(grad)

      const base = el("path")
      base.setAttribute("fill", "none")
      base.setAttribute("stroke", "rgba(196, 176, 255, 0.16)")
      base.setAttribute("stroke-width", "2")
      base.setAttribute("stroke-linecap", "round")
      svg.appendChild(base)

      const beam = el("path")
      beam.setAttribute("fill", "none")
      beam.setAttribute("stroke", `url(#beam-grad-${i})`)
      beam.setAttribute("stroke-width", "2")
      beam.setAttribute("stroke-linecap", "round")
      if (reduceMotion) beam.setAttribute("opacity", "0.5")
      svg.appendChild(beam)

      return { ...link, fromEl, paths: [base, beam] }
    })

    function draw() {
      const box = container.getBoundingClientRect()
      if (!box.width || !box.height) return
      svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`)

      const meRect = me.getBoundingClientRect()
      links.forEach((link) => {
        if (!link.fromEl) return
        const a = link.fromEl.getBoundingClientRect()
        const startX = a.left - box.left + a.width / 2
        const startY = a.top - box.top + a.height / 2
        const endX = meRect.left - box.left + meRect.width / 2
        const endY = meRect.top - box.top + meRect.height / 2 + link.endYOffset
        const d =
          `M ${startX},${startY}` +
          ` Q ${(startX + endX) / 2},${startY - link.curvature}` +
          ` ${endX},${endY}`
        link.paths.forEach((p) => p.setAttribute("d", d))
      })
    }

    draw()

    let ro = null
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(draw)
      ro.observe(container)
    } else {
      window.addEventListener("resize", draw)
    }
    /* Font swap can nudge node sizes after load; one late redraw covers it. */
    if (document.fonts?.ready) document.fonts.ready.then(draw)

    return () => {
      if (ro) ro.disconnect()
      else window.removeEventListener("resize", draw)
      svg.replaceChildren()
    }
  }, [containerRef])
}
