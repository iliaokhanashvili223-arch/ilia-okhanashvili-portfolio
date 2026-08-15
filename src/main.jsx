import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./styles/index.css"
import { LanguageProvider } from "./i18n/LanguageContext.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"
import Home from "./pages/Home.jsx"
import CaseStudy from "./pages/CaseStudy.jsx"
import NotFound from "./pages/NotFound.jsx"

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
)
