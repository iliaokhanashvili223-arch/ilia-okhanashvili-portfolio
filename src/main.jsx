import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./styles/index.css"
import ScrollToTop from "./components/ScrollToTop.jsx"
import Home from "./pages/Home.jsx"
import CaseStudy from "./pages/CaseStudy.jsx"
import NotFound from "./pages/NotFound.jsx"

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Served from a sub-path on GitHub Pages, from the root everywhere else;
        BASE_URL carries whichever it is, so the routes match either way. */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
