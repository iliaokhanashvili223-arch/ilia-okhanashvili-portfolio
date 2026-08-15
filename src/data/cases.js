/* The three case studies, lifted verbatim from the vanilla build.

   The prose was written and reviewed already; this migration redesigned the
   presentation around it, not the argument. Blocks are a typed stream —
   h2 / p / ul / decision / aside / shots — so a case page is laid out by one
   renderer and a new section never needs new markup. */

export const CASES = [
  {
    "slug": "solution-86",
    "title": "Solution 86",
    "docTitle": "Solution 86 — B2B supply ordering · Ilia Okhanashvili",
    "description": "Case study: replacing a restaurant's daily supply phone call with two ordering paths — voice for speed, four steps for control — plus the dashboard the owner watches spend from.",
    "eyebrow": "Client project · 2026",
    "standfirst": "A restaurant's produce order used to be a phone call at 10:40 in the morning. We replaced it with two ways to order — one built for speed, one for control — and a dashboard for the person actually paying.",
    "facts": [
      {
        "label": "Role",
        "value": "Product design (UI/UX), brand"
      },
      {
        "label": "Scope",
        "value": "Mobile app, web dashboard, brand book"
      },
      {
        "label": "Surfaces",
        "value": "iOS & Android, responsive web"
      },
      {
        "label": "Tools",
        "value": "Figma · HTML/CSS/JS"
      }
    ],
    "cover": {
      "src": "/assets/work/cover-solution86.webp",
      "alt": "The Solution 86 procurement dashboard beside the mobile voice-ordering screen",
      "w": 1440,
      "h": 900
    },
    "blocks": [
      {
        "type": "h2",
        "text": "The problem"
      },
      {
        "type": "p",
        "text": "Restaurant supply ordering runs on phone calls and messaging apps. A manager rings three suppliers before lunch service, reads a list out loud, and hopes it was written down correctly. There is no record until the invoice arrives, no approval step before money is committed, and no way for the owner to see what the kitchen is spending until the month closes."
      },
      {
        "type": "p",
        "text": "So the brief was not «make an ordering app». It was: make placing the order faster than the phone call, without losing the two things the phone call already gave you — speed, and the certainty that you know exactly what you just ordered."
      },
      {
        "type": "h2",
        "text": "Constraints that shaped everything"
      },
      {
        "type": "ul",
        "items": [
          "The user is standing in a prep area, usually with one hand free and a noisy room around them.",
          "The order is time-boxed. Produce has a cutoff — in this client's case 11:00 — and missing it pushes delivery to the next day.",
          "The person placing the order is often not the person authorised to spend.",
          "Two audiences with opposite needs: a floor manager on a phone who wants out of the app fast, and an owner on a desktop who wants to stay in it and read."
        ]
      },
      {
        "type": "h2",
        "text": "Decisions"
      },
      {
        "type": "decision",
        "num": "Decision 01",
        "text": "Two ordering paths, kept deliberately separate"
      },
      {
        "type": "p",
        "text": "The obvious move with a voice feature is to make it the primary path and bury the manual one. I did the opposite: voice and manual sit on the home screen as equal entry points."
      },
      {
        "type": "p",
        "text": "Voice wins on speed — saying «four boxes of tomatoes from GreenField» beats four taps. But a supply order can run into four figures, and speech recognition in a loud kitchen fails in ways the user cannot predict. So the voice path never submits what it heard. It surfaces a Detected order panel first: parsed items, editable, shown before anything is committed."
      },
      {
        "type": "p",
        "text": "The manual path exists for the opposite case — a large or unfamiliar order where the manager wants to see the catalog. It is four explicit steps (supplier → products → quantities → review) rather than one long form, because each step boundary is a place to stop and check."
      },
      {
        "type": "aside",
        "items": [
          "Alternative I rejected: a single hybrid flow where voice pre-fills the manual form. It turns the fast path into a shortcut into paperwork, which removes the reason to use voice at all."
        ]
      },
      {
        "type": "shots",
        "figures": [
          {
            "src": "/assets/work/s86-voice.webp",
            "alt": "Voice order screen with a large tap-to-start target",
            "w": 390,
            "h": 843,
            "title": "Voice — resting",
            "note": "One target, thumb-height, with an example phrasing so the user knows how to speak to it."
          },
          {
            "src": "/assets/work/s86-voice-listening.webp",
            "alt": "Voice order screen while listening, showing detected items",
            "w": 390,
            "h": 843,
            "title": "Voice — listening",
            "note": "Items appear as they are parsed. Nothing is submitted from this screen."
          },
          {
            "src": "/assets/work/s86-step2.webp",
            "alt": "Manual order step two — product selection",
            "w": 390,
            "h": 844,
            "title": "Manual — step 2 of 4",
            "note": "The slow path, for orders worth looking at properly."
          },
          {
            "src": "/assets/work/s86-review.webp",
            "alt": "Order review screen before submission",
            "w": 390,
            "h": 843,
            "title": "Review — shared by both paths",
            "note": "Voice and manual converge here. This is the only screen that can place an order."
          },
          {
            "src": "/assets/work/s86-placed.webp",
            "alt": "Order placed confirmation screen",
            "w": 390,
            "h": 844,
            "title": "Placed",
            "note": "Deliberately plain. The reward for ordering is being finished, not a celebration."
          }
        ]
      },
      {
        "type": "decision",
        "num": "Decision 02",
        "text": "The deadline sits above the numbers"
      },
      {
        "type": "p",
        "text": "The home screen opens with a reminder — place today's produce order before 11:00 AM — above the stats, above the quick actions, above everything."
      },
      {
        "type": "p",
        "text": "This was argued about. Dashboards conventionally open with counts. But the counts describe the past, and the deadline is the only thing on that screen the user can still act on. Every other element is context for a decision that has to happen in the next twenty minutes."
      },
      {
        "type": "decision",
        "num": "Decision 03",
        "text": "Approvals are a tab, not a setting"
      },
      {
        "type": "p",
        "text": "In most restaurants the person who knows what the kitchen needs and the person allowed to commit the money are different people. Treating approval as a background rule would have made it invisible until it blocked someone."
      },
      {
        "type": "p",
        "text": "So it became a first-class destination with a live count in the navigation, on both surfaces. The manager sees what is waiting on someone else; the approver sees a queue they can clear in one sitting."
      },
      {
        "type": "decision",
        "num": "Decision 04",
        "text": "Two densities, one system"
      },
      {
        "type": "p",
        "text": "The phone and the dashboard share tokens, type and components, but not density. On the phone, one job per screen and a bottom bar reachable with a thumb. On the desktop, four KPIs, a spend curve and a reorder gauge in a single view, because that user came to compare, not to act."
      },
      {
        "type": "figure",
        "wide": true,
        "src": "/assets/work/s86-dash.webp",
        "alt": "Solution 86 web dashboard showing spend, order volume and reorder rate",
        "w": 1800,
        "h": 1125,
        "caption": "The owner's view. Spend is the headline number because it is the only one that changes behaviour — order counts do not tell you whether the kitchen is over-ordering."
      },
      {
        "type": "figure",
        "wide": true,
        "src": "/assets/work/s86-approvals-web.webp",
        "alt": "Approvals queue on the web dashboard",
        "w": 1800,
        "h": 1125,
        "caption": "The same approvals queue as the phone, at desktop density — designed to be cleared in one sitting rather than checked between tasks."
      },
      {
        "type": "h2",
        "text": "Brand"
      },
      {
        "type": "p",
        "text": "The identity had to survive being tiny. A supplier logo in an order list is 24 pixels tall, so the mark was built from a single bold letterform that stays readable at that size and still holds a header at full width."
      },
      {
        "type": "figure",
        "wide": true,
        "src": "/assets/work/s86-brand-1.webp",
        "alt": "Page from the Solution 86 brand book",
        "w": 1400,
        "h": 788,
        "caption": "From the brand book delivered alongside the product."
      },
      {
        "type": "h2",
        "text": "What I would do differently"
      },
      {
        "type": "p",
        "text": "I designed the confident voice state first and the broken one last. That is backwards. In a kitchen, partial recognition is not an edge case — it is the normal case, and the screen that says «I heard three of your five items» is the screen that decides whether anyone trusts the feature. Designing it first would have changed the whole flow, not just one state."
      },
      {
        "type": "p",
        "text": "I would also push harder on reorder. Roughly the same basket goes out every week, and the fastest order is the one that is already filled in. Today that lives in the dashboard as a statistic; it should be an action on the home screen."
      }
    ],
    "next": {
      "slug": "curatour",
      "title": "CuraTour",
      "label": "Next case study"
    }
  },
  {
    "slug": "curatour",
    "title": "CuraTour",
    "docTitle": "CuraTour — AI hotel concierge · Ilia Okhanashvili",
    "description": "Case study: turning a hotel concierge's recommendations into a guided audio walk. Eighteen screens designed against a market assessment of Georgian inbound tourism.",
    "eyebrow": "Client project · 2026",
    "standfirst": "A hotel already holds the best recommendations in the city — inside a concierge's head, given away forty times a week and forgotten by lunchtime. CuraTour turns them into a guided audio walk the guest can take alone.",
    "facts": [
      {
        "label": "Role",
        "value": "Product design (UI/UX), brand, mascot"
      },
      {
        "label": "Scope",
        "value": "18-screen mobile app, landing page, identity"
      },
      {
        "label": "Grounded in",
        "value": "A market assessment of Georgian inbound tourism (Geostat / GNTA data)"
      },
      {
        "label": "Tools",
        "value": "Figma"
      }
    ],
    "cover": {
      "src": "/assets/work/cover-curatour.webp",
      "alt": "CuraTour tour selection, live walking map with the fox guide, and location permission onboarding",
      "w": 1440,
      "h": 900
    },
    "blocks": [
      {
        "type": "h2",
        "text": "The problem"
      },
      {
        "type": "p",
        "text": "A guest asks the front desk what to see. They get five good answers, write two of them on a napkin, open a map app, and walk to a pin with no idea why that street matters. The hotel's knowledge evaporates the moment the guest leaves the lobby."
      },
      {
        "type": "p",
        "text": "General travel apps have the opposite problem. They know every restaurant in the city and cannot tell you which one the concierge would actually send you to. The value is not more places — it is fewer, chosen by someone the guest already has a reason to trust."
      },
      {
        "type": "h2",
        "text": "It started with numbers, not a moodboard"
      },
      {
        "type": "p",
        "text": "Before any screen existed, the project was scoped against a market assessment of Georgian inbound tourism built on official Geostat and GNTA series. Three findings did more to shape the interface than any reference I could have collected:"
      },
      {
        "type": "ul",
        "items": [
          "In 2024, 94.3% of international visits used no tourist package. Almost nobody arrives with a guide — which is precisely the gap the product fills.",
          "89.8% of foreign hotel guests were in the country for holiday and recreation, and 63.5% of hotel guests were foreigners. The hotel is a real distribution channel, not a convenient assumption.",
          "The first-wave language set is English, Russian and Hebrew, then Turkish and Armenian — Russia was the largest source market at 23.2% of visitors, and Israel alone accounted for 14.9% of foreign hotel guests."
        ]
      },
      {
        "type": "h2",
        "text": "Decisions"
      },
      {
        "type": "decision",
        "num": "Decision 01",
        "text": "Language is the first question, not a settings item"
      },
      {
        "type": "p",
        "text": "The app is distributed by a QR code in a hotel room, so the user meets it ten seconds after first hearing of it, in a country whose alphabet they cannot read. Every subsequent screen — tour titles, audio narration, stop descriptions — depends on the answer."
      },
      {
        "type": "p",
        "text": "So language selection sits immediately after the intro, before any account, permission or preference. It is also the only onboarding screen with no skip: skipping it would mean guessing, and a guess here breaks everything after it."
      },
      {
        "type": "decision",
        "num": "Decision 02",
        "text": "Borrow the concierge's authority, do not replace it"
      },
      {
        "type": "p",
        "text": "The tour list says «Curated by your hotel's concierge team», and that line is load-bearing. The guest has no reason to trust an app they met a minute ago, but they have already decided to trust the hotel — they are sleeping in it."
      },
      {
        "type": "p",
        "text": "The same logic drove the tour cards. Each carries duration, walking distance and a stop count rather than a star rating. A rating invites comparison against the internet; duration and distance answer the only question a guest with an afternoon free is actually asking."
      },
      {
        "type": "shots",
        "figures": [
          {
            "src": "/assets/work/ct-language.webp",
            "alt": "Language selection screen",
            "w": 390,
            "h": 844,
            "title": "Language — first, unskippable",
            "note": "Every screen after this one depends on the answer."
          },
          {
            "src": "/assets/work/ct-travel.webp",
            "alt": "How will you travel — walking or driving",
            "w": 390,
            "h": 844,
            "title": "Mode of travel",
            "note": "Changes which tours are even offered — a 3 km walk is not a 3 km drive."
          },
          {
            "src": "/assets/work/ct-pick.webp",
            "alt": "Pick a tour screen with curated tour cards",
            "w": 390,
            "h": 844,
            "title": "Pick a tour",
            "note": "Duration, distance, stops — no star ratings, on purpose."
          },
          {
            "src": "/assets/work/ct-map1.webp",
            "alt": "Live walking map with the fox guide on the route",
            "w": 390,
            "h": 844,
            "title": "On the walk",
            "note": "The guide stands on the route, not a blue dot. See decision 03."
          },
          {
            "src": "/assets/work/ct-voice2.webp",
            "alt": "AI guide answering a question about the current stop",
            "w": 390,
            "h": 844,
            "title": "Ask anything",
            "note": "The AI answers about the stop you are standing at — context it already has."
          },
          {
            "src": "/assets/work/ct-feedback.webp",
            "alt": "Post-tour feedback screen",
            "w": 390,
            "h": 844,
            "title": "After the tour",
            "note": "Feedback goes back to the hotel that recommended the route."
          }
        ]
      },
      {
        "type": "decision",
        "num": "Decision 03",
        "text": "A guide on the map, not a blue dot"
      },
      {
        "type": "p",
        "text": "Navigation apps show you as a dot because their job is to get you somewhere. CuraTour's job is the opposite: the walk is the product, and arriving is incidental. So the user is represented by the guide character standing on the route, and the map is a soft dimensional model rather than a road map."
      },
      {
        "type": "p",
        "text": "That is also why the mascot exists at all. It is not decoration — it is the thing that makes the difference between a map and a tour legible in a single glance."
      },
      {
        "type": "aside",
        "items": [
          "Where AI did the work: the mascot, the dimensional map style and the illustrated onboarding art are AI-generated, then art-directed and composited. The flows, the screen structure and the decisions on this page are mine."
        ]
      },
      {
        "type": "decision",
        "num": "Decision 04",
        "text": "The AI answers about where you are standing"
      },
      {
        "type": "p",
        "text": "An open chat box in a travel app is a trap — it promises everything and disappoints immediately. The guide is scoped instead: it is attached to the current stop, so it already knows what you are looking at, and the question you are most likely to ask is the one it is best at."
      },
      {
        "type": "figure",
        "wide": true,
        "src": "/assets/work/ct-landing.webp",
        "alt": "CuraTour landing page",
        "w": 1600,
        "h": 1000,
        "caption": "The landing page sells to hotels, not to travellers — the guest never visits a website, they scan a code in their room."
      },
      {
        "type": "h2",
        "text": "What I would do differently"
      },
      {
        "type": "p",
        "text": "The screen where the AI is thinking is the weakest in the set. Today it is an empty page with a pulsing orb — which is exactly the pattern every other AI product uses, and exactly the wrong one here. The user is standing on a street corner in a foreign city waiting for a sentence. That wait should have been part of the narration, not a spinner."
      },
      {
        "type": "p",
        "text": "I would also design the offline case properly. The research says these are independent foreign travellers, which means many of them are on an expensive roaming plan or none at all — and an audio tour that needs a live connection at every stop is a tour that stops."
      }
    ],
    "next": {
      "slug": "autoconnect",
      "title": "AutoConnect",
      "label": "Next case study"
    }
  },
  {
    "slug": "autoconnect",
    "title": "AutoConnect",
    "docTitle": "AutoConnect — car marketplace, designed and built · Ilia Okhanashvili",
    "description": "Case study: a car marketplace serving buyers and sellers at once — designed in Figma, shipped in React, and kept in sync by a Figma plugin that runs backwards.",
    "eyebrow": "Client project · 2026",
    "standfirst": "A marketplace with two users who want opposite things: a buyer with nothing but a budget, and a seller who already knows exactly what they have. I designed it in Figma, then shipped it in React — and wrote a plugin that keeps the design file honest.",
    "facts": [
      {
        "label": "Role",
        "value": "Product design + front-end"
      },
      {
        "label": "Scope",
        "value": "10 page types, 17 components, Figma plugin"
      },
      {
        "label": "Built with",
        "value": "React · Vite"
      },
      {
        "label": "Tools",
        "value": "Figma · Figma Plugin API"
      }
    ],
    "cover": {
      "src": "/assets/work/cover-autoconnect.webp",
      "alt": "AutoConnect landing page with the search bar overlapping the hero",
      "w": 1440,
      "h": 900
    },
    "blocks": [
      {
        "type": "h2",
        "text": "The problem"
      },
      {
        "type": "p",
        "text": "A car marketplace has to serve two people who share nothing. The buyer arrives with a budget and a vague shape in mind and needs to be given a way to narrow. The seller arrives with one specific car and needs to be out of the flow in five minutes. Design for one and the other bounces."
      },
      {
        "type": "h2",
        "text": "Decisions"
      },
      {
        "type": "decision",
        "num": "Decision 01",
        "text": "One hero, two exits, unequal weight"
      },
      {
        "type": "p",
        "text": "The homepage gives buyers and sellers different kinds of space rather than equal space. Buyers get the search bar — four filters, oversized, straddling the fold, because a buyer who does not narrow in the first ten seconds leaves. Sellers get a permanent button in the header instead."
      },
      {
        "type": "p",
        "text": "That asymmetry is deliberate, and it follows from intent rather than from traffic. A seller has already decided to sell before they open the site; they need to find the door, not be persuaded through it. A buyer has decided nothing, so the page has to hand them a first move."
      },
      {
        "type": "decision",
        "num": "Decision 02",
        "text": "Buying a car is a comparison, not a purchase"
      },
      {
        "type": "p",
        "text": "Nobody buys the first car they open. So compare is a destination in the product, not a checkbox bolted onto a card — you can hold candidates side by side and read the differences that actually decide it. Favourites exists for the same reason: it is the shortlist that feeds the comparison."
      },
      {
        "type": "figure",
        "wide": true,
        "src": "/assets/work/ac-inventory.webp",
        "alt": "AutoConnect inventory page with filters and listing grid",
        "w": 1500,
        "h": 1683,
        "caption": "Inventory. Filters stay pinned on the left because narrowing is iterative — you change one thing and re-read the grid, over and over."
      },
      {
        "type": "figure",
        "wide": true,
        "src": "/assets/work/ac-sell.webp",
        "alt": "Sell your car listing flow",
        "w": 1500,
        "h": 2098,
        "caption": "The seller's side. One long form rather than a wizard — the seller has all the answers already, and paging them across five steps only adds friction."
      },
      {
        "type": "decision",
        "num": "Decision 03",
        "text": "I built it, and building it changed it"
      },
      {
        "type": "p",
        "text": "I implemented the marketplace in React — ten page types across seventeen components. Building your own design is an unforgiving review: every piece of decoration you cannot justify becomes a piece of code you have to maintain, and the parts of a layout that only worked at one viewport width announce themselves immediately."
      },
      {
        "type": "decision",
        "num": "Decision 04",
        "text": "A Figma plugin that runs backwards"
      },
      {
        "type": "p",
        "text": "Design-to-code tools all push one way, and the design file starts rotting the day the build begins. So I wrote the plugin in the other direction: it reads the shipped homepage structure and rebuilds it as Figma layers — frames, type, fills, spacing — from the code that is actually live."
      },
      {
        "type": "p",
        "text": "It means the Figma file can always be regenerated to match reality, so a conversation about a change starts from what exists rather than from what was drawn six weeks ago."
      },
      {
        "type": "aside",
        "items": [
          "It is one plugin for one page, not a general tool — the mapping from components to layers is written by hand. It solved the specific problem it was built for, which was this project's homepage drifting out of sync."
        ]
      },
      {
        "type": "h2",
        "text": "What I would do differently"
      },
      {
        "type": "p",
        "text": "I designed the desktop layouts first and adapted them down, which is the wrong order for a marketplace — people browse cars on a phone, in a queue, on a sofa. The filter panel is the tell: pinned to the left it is excellent on a wide screen and awkward on a narrow one, and no amount of adapting fixes a structure that was decided at the wrong width."
      }
    ],
    "next": {
      "slug": "solution-86",
      "title": "Solution 86",
      "label": "Next case study"
    }
  }
]
