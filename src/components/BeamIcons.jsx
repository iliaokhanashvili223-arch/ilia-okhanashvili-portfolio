/* The tool marks that ride the beam. Each keeps its own viewBox so the brand
   geometry is untouched; the circle around them is the beam's, not theirs. */

export const Figma = () => (
  <svg viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg">
    <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
    <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
    <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
    <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
    <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
  </svg>
)

/* Claude's sunburst, twelve tapered rays alternating long and short. */
export const Claude = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#d97757" strokeWidth="2.1" strokeLinecap="round">
      <line x1="12.00" y1="8.60" x2="12.00" y2="1.40" />
      <line x1="13.70" y1="9.06" x2="16.10" y2="4.90" />
      <line x1="14.94" y1="10.30" x2="21.18" y2="6.70" />
      <line x1="15.40" y1="12.00" x2="20.20" y2="12.00" />
      <line x1="14.94" y1="13.70" x2="21.18" y2="17.30" />
      <line x1="13.70" y1="14.94" x2="16.10" y2="19.10" />
      <line x1="12.00" y1="15.40" x2="12.00" y2="22.60" />
      <line x1="10.30" y1="14.94" x2="7.90" y2="19.10" />
      <line x1="9.06" y1="13.70" x2="2.82" y2="17.30" />
      <line x1="8.60" y1="12.00" x2="3.80" y2="12.00" />
      <line x1="9.06" y1="10.30" x2="2.82" y2="6.70" />
      <line x1="10.30" y1="9.06" x2="7.90" y2="4.90" />
    </g>
  </svg>
)

export const Photoshop = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#001e36" />
    <text
      x="12"
      y="16.4"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="700"
      fontSize="10.5"
      fill="#31a8ff"
    >
      Ps
    </text>
  </svg>
)

export const React_ = () => (
  <svg viewBox="-11.5 -11 23 22" xmlns="http://www.w3.org/2000/svg">
    <circle r="2.05" fill="#61dafb" />
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="10.5" ry="4.5" />
      <ellipse rx="10.5" ry="4.5" transform="rotate(60)" />
      <ellipse rx="10.5" ry="4.5" transform="rotate(120)" />
    </g>
  </svg>
)

export const Next = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#0b0a10" />
    <text
      x="12.2"
      y="16.3"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="700"
      fontSize="12"
      fill="#ffffff"
    >
      N
    </text>
  </svg>
)

export const Js = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#f7df1e" />
    <text
      x="12.2"
      y="16.6"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="700"
      fontSize="10.5"
      fill="#0b0a10"
    >
      JS
    </text>
  </svg>
)

export const OpenAI = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#0b0a10">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
  </svg>
)
