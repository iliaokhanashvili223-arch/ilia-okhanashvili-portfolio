/* Every image on this site lives in public/ and is referenced from the site
   root ("/assets/…"). That is correct when the site is served from a domain
   root, and wrong the moment it is served from a sub-path — a GitHub Pages
   project site sits at /<repo>/, and every one of those paths would 404.

   Vite rewrites asset URLs it can see (imports, and attributes in index.html),
   but not strings that only exist inside JS data. So paths go through here:
   BASE_URL is "/" in dev and on a root deploy, and "/<repo>/" on Pages. */

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "")

export function asset(path) {
  if (!path) return path
  return BASE + path
}

/* srcset carries several URLs and their descriptors in one string. */
export function assetSrcSet(srcset) {
  return srcset
    .split(",")
    .map((part) => {
      const [url, ...rest] = part.trim().split(/\s+/)
      return [asset(url), ...rest].join(" ")
    })
    .join(", ")
}
