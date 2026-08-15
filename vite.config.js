import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

/* Root-relative by default — which is right for local dev, Netlify and Vercel.
   The GitHub Pages workflow sets VITE_BASE=/<repo>/ because a project site is
   served from a sub-path. */
export default defineConfig({
  base: process.env.VITE_BASE || "/",
  plugins: [react(), tailwindcss()],
  build: { outDir: "dist", assetsDir: "assets-build" },
})
