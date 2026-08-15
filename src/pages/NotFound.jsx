import { Link } from "react-router-dom"
import SiteFooter from "../components/SiteFooter.jsx"

export default function NotFound() {
  return (
    <>
      <main className="section" id="case">
        <div className="section-inner not-found">
          <span className="eyebrow">404</span>
          <h1 className="section-title">This page isn't here.</h1>
          <p className="section-lede">
            The link may be old, or the page may have moved. The work is one
            click away.
          </p>
          <Link className="btn btn-primary" to="/#work">
            Back to work
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
