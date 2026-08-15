import { useEffect, useRef } from "react"

/* Scroll reveal. Same contract as the vanilla build — .reveal goes to
   .is-in once, and reduced motion (or a missing observer) means everything
   is simply already in. `innerRef` lets a caller keep its own handle on the
   node, which the skills beam needs for measuring. */
export default function Reveal({
  as: Tag = "div",
  className = "",
  delay,
  children,
  innerRef,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (innerRef) innerRef.current = el

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!("IntersectionObserver" in window) || reduce) {
      el.classList.add("is-in")
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in")
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "0px 0px -12% 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [innerRef])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      data-delay={delay}
      {...rest}
    >
      {children}
    </Tag>
  )
}
