/* The six projects, lifted verbatim from the vanilla build.

   Each carries its own arrangement (`deck.variant`) because the material
   chose it, not taste: `deck--duo` for a web surface plus a phone app,
   `deck--single` for long web pages that are illegible at a fifth of the
   width, `deck--pair` for one page in two colour modes. Positions live only
   in CSS as percentages — nothing here stores one.

   Generated once from _backup/pre-react/index.html; edit this file directly
   from now on. */

export const PROJECTS = [
  {
    "id": "hyperjump",
    "no": "01",
    "title": "HyperJump",
    "kind": "Studio site · Light and dark",
    "sub": "A studio landing page in two colour modes: the same statue under a summer sky and under a winter moon, plus the mark that goes with it in five colourways.",
    "deck": {
      "variant": [
        "deck--pair"
      ],
      "items": [
        {
          "cls": "plate mode-light",
          "accepts": null,
          "src": "/assets/work/hj-light.webp",
          "w": 1600,
          "h": 904,
          "alt": "HyperJump, Light mode"
        },
        {
          "cls": "plate mode-dark",
          "accepts": null,
          "src": "/assets/work/hj-dark.webp",
          "w": 1600,
          "h": 904,
          "alt": "HyperJump, Dark mode"
        },
        {
          "cls": "mark mark-a",
          "accepts": null,
          "src": "/assets/work/hj-logo-black.webp",
          "w": 640,
          "h": 640,
          "alt": "HyperJump, Mark, black"
        },
        {
          "cls": "mark mark-b",
          "accepts": null,
          "src": "/assets/work/hj-logo-blue.webp",
          "w": 640,
          "h": 640,
          "alt": "HyperJump, Mark, blue"
        },
        {
          "cls": "mark mark-c",
          "accepts": null,
          "src": "/assets/work/hj-logo-green.webp",
          "w": 640,
          "h": 640,
          "alt": "HyperJump, Mark, green"
        },
        {
          "cls": "mark mark-d",
          "accepts": null,
          "src": "/assets/work/hj-logo-purple.webp",
          "w": 640,
          "h": 640,
          "alt": "HyperJump, Mark, purple"
        },
        {
          "cls": "mark mark-e",
          "accepts": null,
          "src": "/assets/work/hj-logo-red.webp",
          "w": 640,
          "h": 640,
          "alt": "HyperJump, Mark, red"
        }
      ],
      "cap": "Two modes, one mark"
    },
    "sheet": null,
    "tags": [
      "Web design",
      "Art direction",
      "Logo",
      "Light & dark"
    ],
    "case": null
  },
  {
    "id": "solution-86",
    "no": "02",
    "title": "Solution 86",
    "kind": "B2B ordering platform · Client project 2026",
    "sub": "A restaurant's daily supply order, from a phone call to under a minute — a mobile app with a voice path and an approval chain, and the web dashboard the owner watches the spend from.",
    "deck": {
      "variant": [
        "deck--duo"
      ],
      "items": [
        {
          "cls": "plate duo-wide",
          "accepts": "l",
          "src": "/assets/work/s86-dash.webp",
          "w": 1800,
          "h": 1125,
          "alt": "Solution 86, Dashboard"
        },
        {
          "cls": "phone duo-tall",
          "accepts": "p",
          "src": "/assets/work/s86-voice.webp",
          "w": 390,
          "h": 843,
          "alt": "Solution 86, Voice order · start"
        }
      ],
      "cap": "Two of seventeen shown"
    },
    "sheet": {
      "count": "17",
      "note": "screens in this project. Click one to bring it to the front.",
      "tiles": [
        {
          "orient": "l",
          "src": "/assets/work/s86-dash.webp",
          "w": 1800,
          "h": 1125,
          "name": "Dashboard"
        },
        {
          "orient": "l",
          "src": "/assets/work/s86-analytics.webp",
          "w": 1800,
          "h": 1125,
          "name": "Analytics"
        },
        {
          "orient": "l",
          "src": "/assets/work/s86-approvals-web.webp",
          "w": 1800,
          "h": 1125,
          "name": "Approvals · web"
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-home.webp",
          "w": 390,
          "h": 844,
          "name": "App home"
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-voice.webp",
          "w": 390,
          "h": 843,
          "name": "Voice order · start"
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-voice-listening.webp",
          "w": 390,
          "h": 843,
          "name": "Voice order · listening"
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-products.webp",
          "w": 390,
          "h": 843,
          "name": "Products"
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-suppliers.webp",
          "w": 390,
          "h": 843,
          "name": "Suppliers"
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-step1.webp",
          "w": 390,
          "h": 844,
          "name": "Order 1 · supplier"
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-step2.webp",
          "w": 390,
          "h": 844,
          "name": "Order 2 · items"
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-step3.webp",
          "w": 390,
          "h": 844,
          "name": "Order 3 · confirm"
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-step4.webp",
          "w": 390,
          "h": 844,
          "name": "Order 4 · delivery"
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-review.webp",
          "w": 390,
          "h": 843,
          "name": "Order review"
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-placed.webp",
          "w": 390,
          "h": 844,
          "name": "Order placed"
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-approvals-app.webp",
          "w": 390,
          "h": 843,
          "name": "Approvals · mobile"
        },
        {
          "orient": "l",
          "src": "/assets/work/s86-brand-1.webp",
          "w": 1400,
          "h": 788,
          "name": "Brand book"
        },
        {
          "orient": "l",
          "src": "/assets/work/s86-brand-3.webp",
          "w": 1400,
          "h": 788,
          "name": "Logo system"
        }
      ]
    },
    "tags": [
      "Product design",
      "Design system",
      "Mobile + Web",
      "Voice UX"
    ],
    "case": "solution-86"
  },
  {
    "id": "curatour",
    "no": "03",
    "title": "CuraTour",
    "kind": "AI hotel concierge · Client project 2026",
    "sub": "An AI concierge that turns a hotel's own recommendations into a guided audio walk. Fourteen screens, designed on top of a market assessment rather than a moodboard.",
    "deck": {
      "variant": [
        "deck--duo"
      ],
      "items": [
        {
          "cls": "plate duo-wide",
          "accepts": "l",
          "src": "/assets/work/ct-landing.webp",
          "w": 1600,
          "h": 1000,
          "alt": "CuraTour, Landing page"
        },
        {
          "cls": "phone duo-tall",
          "accepts": "p",
          "src": "/assets/work/ct-map3.webp",
          "w": 390,
          "h": 844,
          "alt": "CuraTour, Stop controls"
        }
      ],
      "cap": "Two of fourteen shown"
    },
    "sheet": {
      "count": "14",
      "note": "screens in this project. Click one to bring it to the front.",
      "tiles": [
        {
          "orient": "l",
          "src": "/assets/work/ct-landing.webp",
          "w": 1600,
          "h": 1000,
          "name": "Landing page"
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-language.webp",
          "w": 390,
          "h": 844,
          "name": "Choose language"
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-intro.webp",
          "w": 390,
          "h": 844,
          "name": "Intro"
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-step1.webp",
          "w": 390,
          "h": 844,
          "name": "Meet the guide"
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-step3.webp",
          "w": 390,
          "h": 844,
          "name": "Location"
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-travel.webp",
          "w": 390,
          "h": 844,
          "name": "How will you travel"
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-pick.webp",
          "w": 390,
          "h": 844,
          "name": "Pick a tour"
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-map1.webp",
          "w": 390,
          "h": 844,
          "name": "Live map"
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-map2.webp",
          "w": 390,
          "h": 844,
          "name": "Live map · closer"
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-map3.webp",
          "w": 390,
          "h": 844,
          "name": "Stop controls"
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-voice1.webp",
          "w": 390,
          "h": 844,
          "name": "Narration · this stop"
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-voice2.webp",
          "w": 390,
          "h": 844,
          "name": "Narration · text"
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-feedback.webp",
          "w": 390,
          "h": 844,
          "name": "Feedback"
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-profile.webp",
          "w": 390,
          "h": 844,
          "name": "Profile"
        }
      ]
    },
    "tags": [
      "Product design",
      "Mobile app",
      "Voice & AI UX",
      "Brand & mascot"
    ],
    "case": "curatour"
  },
  {
    "id": "mythera",
    "no": "04",
    "title": "Mythera",
    "kind": "Game server platform · 2026",
    "sub": "A Minecraft server platform designed end to end: the worlds and the servers behind them, case openings, the item shop, balances and accounts. Eighteen screens in one dark, high-contrast system.",
    "deck": {
      "variant": [
        "deck--single"
      ],
      "items": [
        {
          "cls": "plate",
          "accepts": "l p",
          "src": "/assets/work/my-landing.webp",
          "w": 1500,
          "h": 1199,
          "alt": "Mythera, Landing"
        }
      ],
      "cap": "Landing"
    },
    "sheet": {
      "count": "18",
      "note": "screens in this project. Click one to bring it to the front.",
      "tiles": [
        {
          "orient": "l",
          "src": "/assets/work/my-landing.webp",
          "w": 1500,
          "h": 1199,
          "name": "Landing"
        },
        {
          "orient": "l",
          "src": "/assets/work/my-server.webp",
          "w": 1500,
          "h": 1809,
          "name": "Server page"
        },
        {
          "orient": "l",
          "src": "/assets/work/my-choose-server.webp",
          "w": 1500,
          "h": 1213,
          "name": "Choose a server"
        },
        {
          "orient": "l",
          "src": "/assets/work/my-cases.webp",
          "w": 1500,
          "h": 1100,
          "name": "Cases"
        },
        {
          "orient": "l",
          "src": "/assets/work/my-open-case.webp",
          "w": 1500,
          "h": 1725,
          "name": "Open case"
        },
        {
          "orient": "l",
          "src": "/assets/work/my-case-opening.webp",
          "w": 1500,
          "h": 1630,
          "name": "Case opening"
        },
        {
          "orient": "l",
          "src": "/assets/work/my-items.webp",
          "w": 1500,
          "h": 2055,
          "name": "Items"
        },
        {
          "orient": "l",
          "src": "/assets/work/my-shop.webp",
          "w": 1500,
          "h": 1029,
          "name": "Shop"
        },
        {
          "orient": "l",
          "src": "/assets/work/my-privileges.webp",
          "w": 1500,
          "h": 1014,
          "name": "Privileges"
        },
        {
          "orient": "l",
          "src": "/assets/work/my-buy-privileges.webp",
          "w": 1500,
          "h": 1014,
          "name": "Buy a privilege"
        },
        {
          "orient": "l",
          "src": "/assets/work/my-top-up.webp",
          "w": 1500,
          "h": 1072,
          "name": "Top up balance"
        },
        {
          "orient": "l",
          "src": "/assets/work/my-exchange.webp",
          "w": 1500,
          "h": 1094,
          "name": "Exchange coins"
        },
        {
          "orient": "l",
          "src": "/assets/work/my-download.webp",
          "w": 1500,
          "h": 1004,
          "name": "Download launcher"
        },
        {
          "orient": "l",
          "src": "/assets/work/my-sign-up.webp",
          "w": 1500,
          "h": 1004,
          "name": "Create account"
        },
        {
          "orient": "l",
          "src": "/assets/work/my-log-in.webp",
          "w": 1500,
          "h": 1004,
          "name": "Log in"
        },
        {
          "orient": "l",
          "src": "/assets/work/my-blog.webp",
          "w": 1500,
          "h": 1004,
          "name": "Blog"
        },
        {
          "orient": "l",
          "src": "/assets/work/my-rules.webp",
          "w": 1500,
          "h": 1301,
          "name": "Rules"
        },
        {
          "orient": "l",
          "src": "/assets/work/my-help.webp",
          "w": 1500,
          "h": 1004,
          "name": "Help"
        }
      ]
    },
    "tags": [
      "Product design",
      "Web app",
      "Design system",
      "Game UI"
    ],
    "case": null
  },
  {
    "id": "nd",
    "no": "05",
    "title": "N&D",
    "kind": "Founders’ portfolio · Black and gold",
    "sub": "A portfolio site for two startup founders. Arched portraits with dossiers that open on hover, a work carousel and a contact desk, held together by one black-and-gold system across five sections.",
    "deck": {
      "variant": [
        "deck--single",
        "deck--wide"
      ],
      "items": [
        {
          "cls": "plate",
          "accepts": "l p",
          "src": "/assets/work/nd-hero.webp",
          "w": 1600,
          "h": 900,
          "alt": "N&D, Hero"
        }
      ],
      "cap": "Hero"
    },
    "sheet": {
      "count": "5",
      "note": "sections in this project. Click one to bring it to the front.",
      "tiles": [
        {
          "orient": "l",
          "src": "/assets/work/nd-hero.webp",
          "w": 1600,
          "h": 900,
          "name": "Hero"
        },
        {
          "orient": "l",
          "src": "/assets/work/nd-team.webp",
          "w": 1600,
          "h": 900,
          "name": "The founders"
        },
        {
          "orient": "l",
          "src": "/assets/work/nd-team-hover.webp",
          "w": 1600,
          "h": 900,
          "name": "Dossier open"
        },
        {
          "orient": "l",
          "src": "/assets/work/nd-work.webp",
          "w": 1600,
          "h": 900,
          "name": "Work"
        },
        {
          "orient": "l",
          "src": "/assets/work/nd-contact.webp",
          "w": 1600,
          "h": 900,
          "name": "Contact"
        }
      ]
    },
    "tags": [
      "Web design",
      "Art direction",
      "Editorial layout",
      "Interaction"
    ],
    "case": null
  },
  {
    "id": "autoconnect",
    "no": "06",
    "title": "AutoConnect",
    "kind": "Car marketplace · Client project 2026",
    "sub": "A car marketplace serving two opposite users — buyers who browse and sellers who list. Designed in Figma, then built in React, with a Figma plugin to shorten the loop between the two.",
    "deck": {
      "variant": [
        "deck--single"
      ],
      "items": [
        {
          "cls": "plate",
          "accepts": "l p",
          "src": "/assets/work/ac-landing.webp",
          "w": 1500,
          "h": 1662,
          "alt": "AutoConnect, Landing page"
        }
      ],
      "cap": "Landing page"
    },
    "sheet": {
      "count": "8",
      "note": "screens in this project. Click one to bring it to the front.",
      "tiles": [
        {
          "orient": "l",
          "src": "/assets/work/ac-landing.webp",
          "w": 1500,
          "h": 1662,
          "name": "Landing page"
        },
        {
          "orient": "l",
          "src": "/assets/work/ac-inventory.webp",
          "w": 1500,
          "h": 1683,
          "name": "Inventory"
        },
        {
          "orient": "l",
          "src": "/assets/work/ac-product.webp",
          "w": 1500,
          "h": 2027,
          "name": "Car page"
        },
        {
          "orient": "l",
          "src": "/assets/work/ac-sell.webp",
          "w": 1500,
          "h": 2098,
          "name": "Sell your car"
        },
        {
          "orient": "l",
          "src": "/assets/work/ac-services.webp",
          "w": 1500,
          "h": 1719,
          "name": "Services"
        },
        {
          "orient": "l",
          "src": "/assets/work/ac-favourites.webp",
          "w": 1500,
          "h": 1602,
          "name": "Favourites"
        },
        {
          "orient": "l",
          "src": "/assets/work/ac-login.webp",
          "w": 1500,
          "h": 1026,
          "name": "Log in"
        },
        {
          "orient": "l",
          "src": "/assets/work/ac-contact.webp",
          "w": 1500,
          "h": 1852,
          "name": "Contact"
        }
      ]
    },
    "tags": [
      "Product design",
      "Web app",
      "Front-end (React)",
      "Figma plugin"
    ],
    "case": "autoconnect"
  }
]
