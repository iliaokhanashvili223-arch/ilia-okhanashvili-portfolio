import { useEffect } from "react"

/* ============================================================
   HERO — two hands, one gap, closed by scroll.

   The photograph was matted into three plates: the room, the machine hand
   and the human hand. A single scalar `s` places both hands on the line
   joining their two fingertips, measured off the 2048×1152 source — the
   human's at (908, 620), the machine's rebuilt one at (977, 596):

       s = 1     fingertips touching
       s = 0     the gap the photograph was shot with
       s < 0     reaching from further away

   Each hand travels half the distance in opposite directions, which is why
   the point they meet at never moves and the spark can stay pinned to it.

   At contact the whole composition freezes — no drift, no zoom, no room
   pull. Only light and the copy fade keep answering past that point.
   ============================================================ */

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v)
const mix = (a, b, t) => a + (b - a) * t
const easeOut = (t) => 1 - Math.pow(1 - t, 5)
const smooth = (t) => t * t * (3 - 2 * t)

export default function useHeroChoreography(heroRef, stageRef) {
  useEffect(() => {
    const hero = heroRef.current
    const stage = stageRef.current
    if (!hero || !stage) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const finePointer = window.matchMedia("(pointer: fine)")

    const AX = 3.369 /* closure vector, % of the cast's width */
    const AY = -1.562 /* …and of its height */
    const ENTER_MS = 2400
    const ROBOT_DELAY = 260 /* the human reaches; the machine answers */

    let sEntry = -16
    let sRest = -2.8
    let touchAt = 0.62
    let stageH = stage.offsetHeight

    function readConf() {
      const cs = getComputedStyle(hero)
      const num = (name, fallback) => {
        const v = parseFloat(cs.getPropertyValue(name))
        return isNaN(v) ? fallback : v
      }
      sEntry = num("--s-entry", -16)
      sRest = num("--s-rest", -2.8)
      touchAt = num("--touch-at", 0.62)
      stageH = stage.offsetHeight
    }
    readConf()

    let startedAt = 0
    let running = false
    let visible = true
    let contacting = false
    let lastP = -1
    let targetX = 0
    let targetY = 0
    let curX = 0
    let curY = 0
    let raf = 0

    const set = (name, value) => hero.style.setProperty(name, value)

    function draw(now) {
      const still = reduceMotion.matches

      /* Entrance ------------------------------------------------------- */
      const e = startedAt ? clamp01((now - startedAt) / ENTER_MS) : 0
      const eH = still ? 1 : easeOut(e)
      const eR = still
        ? 1
        : easeOut(startedAt ? clamp01((now - startedAt - ROBOT_DELAY) / ENTER_MS) : 0)

      /* How far through the hero's runway we have scrolled --------------- */
      let p = 0
      if (!still) {
        const rect = hero.getBoundingClientRect()
        const drive = rect.height - stageH
        if (drive > 0) p = clamp01(-rect.top / drive)
      }
      const close = smooth(clamp01(p / touchAt))
      const after = clamp01((p - touchAt) / (1 - touchAt))

      const sH = still ? 0.55 : mix(mix(sEntry, sRest, eH), 1, close)
      const sR = still ? 0.55 : mix(mix(sEntry, sRest, eR), 1, close)

      /* Once they touch, the composition holds exactly where the fingers
         met — the old post-touch drift read as the spark sliding off. */
      set("--hx", (0.5 * sH * AX).toFixed(3))
      set("--hy", (0.5 * sH * AY).toFixed(3))
      set("--rx", (-0.5 * sR * AX).toFixed(3))
      set("--ry", (-0.5 * sR * AY).toFixed(3))

      /* The room drifts against the hands — in viewport units, since it is the
         one plate sized to the screen rather than to the cast — and freezes
         with them at the moment of contact. */
      const pHold = Math.min(p, touchAt)
      set("--room-x", (pHold * 0.5).toFixed(3))
      set("--room-y", (pHold * -2.4).toFixed(3))
      set("--scene-s", mix(1.06, 1, eH).toFixed(4))

      /* The gap answers with light before it answers with a spark. */
      const s = (sH + sR) / 2
      const halo = clamp01((s + 1) / 2) * 0.9 + after * 0.3
      /* Held still, the hero is the photograph again: all but touching, lit. */
      const ignite = still ? 0.85 : clamp01((s - 0.5) / 0.5)
      set("--halo", Math.min(halo, 1.2).toFixed(3))
      set("--ignite", ignite.toFixed(3))

      const touching = ignite > 0.995
      if (touching !== contacting) {
        contacting = touching
        document.body.classList.toggle("is-contact", touching)
      }

      set("--copy-out", clamp01((p - 0.55) / 0.3).toFixed(3))
      set("--cue-in", (still ? 1 : clamp01((e - 0.72) / 0.28)).toFixed(3))
      set("--cue-out", clamp01(p / 0.1).toFixed(3))

      /* Pointer depth — the plates lag behind the cursor at their own rate. */
      curX += (targetX - curX) * 0.06
      curY += (targetY - curY) * 0.06
      set("--par-x", curX.toFixed(2) + "px")
      set("--par-y", curY.toFixed(2) + "px")

      /* Keep the loop alive only while something is actually moving. */
      const settling =
        Math.abs(targetX - curX) > 0.05 || Math.abs(targetY - curY) > 0.05
      const moved = Math.abs(p - lastP) > 0.0001
      lastP = p
      return !still && (e < 1 || settling || moved)
    }

    function frame(now) {
      running = draw(now)
      if (running) raf = requestAnimationFrame(frame)
    }

    function kick() {
      if (running) return
      running = true
      raf = requestAnimationFrame(frame)
    }

    /* Only listen while the hero is on screen. */
    let io = null
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          visible = entries[0].isIntersecting
          if (visible) kick()
        },
        { rootMargin: "15% 0px" }
      )
      io.observe(hero)
    }

    const onScroll = () => {
      if (visible) kick()
    }
    window.addEventListener("scroll", onScroll, { passive: true })

    const onPointerMove = (ev) => {
      targetX = (ev.clientX / window.innerWidth - 0.5) * -16
      targetY = (ev.clientY / window.innerHeight - 0.5) * -10
      kick()
    }
    const usePointer = finePointer.matches && !reduceMotion.matches
    if (usePointer) window.addEventListener("pointermove", onPointerMove)

    const onResize = () => {
      readConf()
      kick()
    }
    window.addEventListener("resize", onResize)

    function begin() {
      startedAt = performance.now()
      document.body.classList.add("is-loaded")
      kick()
    }
    /* One frame's grace so the plates are laid out before they start moving. */
    const startTimer = setTimeout(begin, 60)

    const onMotionChange = () => {
      startedAt = 0
      begin()
      kick()
    }
    reduceMotion.addEventListener("change", onMotionChange)

    return () => {
      clearTimeout(startTimer)
      cancelAnimationFrame(raf)
      if (io) io.disconnect()
      window.removeEventListener("scroll", onScroll)
      if (usePointer) window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("resize", onResize)
      reduceMotion.removeEventListener("change", onMotionChange)
      document.body.classList.remove("is-contact")
    }
  }, [heroRef, stageRef])
}
