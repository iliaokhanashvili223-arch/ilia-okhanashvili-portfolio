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
    "kind": {
      "en": "Studio site · Light and dark",
      "ka": "სტუდიის საიტი · ღია და მუქი"
    },
    "sub": {
      "en": "A studio landing page in two colour modes: the same statue under a summer sky and under a winter moon, plus the mark that goes with it in five colourways.",
      "ka": "სტუდიის სალენდინგო გვერდი ორ ფერად რეჟიმში: ერთი და იგივე ქანდაკება ზაფხულის ცისა და ზამთრის მთვარის ქვეშ, და მისი ნიშანი ხუთ ფერში."
    },
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
      "cap": {
        "en": "Two modes, one mark",
        "ka": "ორი რეჟიმი, ერთი ნიშანი"
      }
    },
    "sheet": null,
    "tags": [
      {
        "en": "Web design",
        "ka": "ვებდიზაინი"
      },
      {
        "en": "Art direction",
        "ka": "არტ-დირექცია"
      },
      {
        "en": "Logo",
        "ka": "ლოგო"
      },
      {
        "en": "Light & dark",
        "ka": "ღია და მუქი"
      }
    ],
    "case": null
  },
  {
    "id": "solution-86",
    "no": "02",
    "title": "Solution 86",
    "kind": {
      "en": "B2B ordering platform · Client project 2026",
      "ka": "B2B შეკვეთის პლატფორმა · კლიენტის პროექტი 2026"
    },
    "sub": {
      "en": "A restaurant's daily supply order, from a phone call to under a minute — a mobile app with a voice path and an approval chain, and the web dashboard the owner watches the spend from.",
      "ka": "რესტორნის ყოველდღიური შეკვეთა სატელეფონო ზარიდან წუთზე ნაკლებამდე — მობილური აპლიკაცია ხმოვანი გზითა და დამტკიცების ჯაჭვით, და ვებდაშბორდი, საიდანაც მფლობელი ხარჯს აკვირდება."
    },
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
      "cap": {
        "en": "Two of seventeen shown",
        "ka": "ჩვიდმეტიდან ორი ჩანს"
      }
    },
    "sheet": {
      "count": "17",
      "note": {
        "en": "screens in this project. Click one to bring it to the front.",
        "ka": "ეკრანი ამ პროექტში. დააკლიკეთ და წინ ამოვა."
      },
      "tiles": [
        {
          "orient": "l",
          "src": "/assets/work/s86-dash.webp",
          "w": 1800,
          "h": 1125,
          "name": {
            "en": "Dashboard",
            "ka": "დაშბორდი"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/s86-analytics.webp",
          "w": 1800,
          "h": 1125,
          "name": {
            "en": "Analytics",
            "ka": "ანალიტიკა"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/s86-approvals-web.webp",
          "w": 1800,
          "h": 1125,
          "name": {
            "en": "Approvals · web",
            "ka": "დამტკიცებები · ვები"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-home.webp",
          "w": 390,
          "h": 844,
          "name": {
            "en": "App home",
            "ka": "აპლიკაციის მთავარი"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-voice.webp",
          "w": 390,
          "h": 843,
          "name": {
            "en": "Voice order · start",
            "ka": "ხმოვანი შეკვეთა · დაწყება"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-voice-listening.webp",
          "w": 390,
          "h": 843,
          "name": {
            "en": "Voice order · listening",
            "ka": "ხმოვანი შეკვეთა · მოსმენა"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-products.webp",
          "w": 390,
          "h": 843,
          "name": {
            "en": "Products",
            "ka": "პროდუქტები"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-suppliers.webp",
          "w": 390,
          "h": 843,
          "name": {
            "en": "Suppliers",
            "ka": "მომწოდებლები"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-step1.webp",
          "w": 390,
          "h": 844,
          "name": {
            "en": "Order 1 · supplier",
            "ka": "შეკვეთა 1 · მომწოდებელი"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-step2.webp",
          "w": 390,
          "h": 844,
          "name": {
            "en": "Order 2 · items",
            "ka": "შეკვეთა 2 · პოზიციები"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-step3.webp",
          "w": 390,
          "h": 844,
          "name": {
            "en": "Order 3 · confirm",
            "ka": "შეკვეთა 3 · დადასტურება"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-step4.webp",
          "w": 390,
          "h": 844,
          "name": {
            "en": "Order 4 · delivery",
            "ka": "შეკვეთა 4 · მიწოდება"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-review.webp",
          "w": 390,
          "h": 843,
          "name": {
            "en": "Order review",
            "ka": "შეკვეთის განხილვა"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-placed.webp",
          "w": 390,
          "h": 844,
          "name": {
            "en": "Order placed",
            "ka": "შეკვეთა განთავსდა"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/s86-approvals-app.webp",
          "w": 390,
          "h": 843,
          "name": {
            "en": "Approvals · mobile",
            "ka": "დამტკიცებები · მობილური"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/s86-brand-1.webp",
          "w": 1400,
          "h": 788,
          "name": {
            "en": "Brand book",
            "ka": "ბრენდბუქი"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/s86-brand-3.webp",
          "w": 1400,
          "h": 788,
          "name": {
            "en": "Logo system",
            "ka": "ლოგოს სისტემა"
          }
        }
      ]
    },
    "tags": [
      {
        "en": "Product design",
        "ka": "პროდუქტის დიზაინი"
      },
      {
        "en": "Design system",
        "ka": "დიზაინ-სისტემა"
      },
      {
        "en": "Mobile + Web",
        "ka": "მობილური + ვები"
      },
      {
        "en": "Voice UX",
        "ka": "ხმოვანი UX"
      }
    ],
    "case": "solution-86"
  },
  {
    "id": "curatour",
    "no": "03",
    "title": "CuraTour",
    "kind": {
      "en": "AI hotel concierge · Client project 2026",
      "ka": "AI-კონსიერჟი სასტუმროსთვის · კლიენტის პროექტი 2026"
    },
    "sub": {
      "en": "An AI concierge that turns a hotel's own recommendations into a guided audio walk. Fourteen screens, designed on top of a market assessment rather than a moodboard.",
      "ka": "AI-კონსიერჟი, რომელიც სასტუმროს რეკომენდაციებს გიდიან აუდიოსეირნობად აქცევს. თოთხმეტი ეკრანი, რომელიც მუდბორდზე კი არა, ბაზრის კვლევაზე დაშენდა."
    },
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
      "cap": {
        "en": "Two of fourteen shown",
        "ka": "თოთხმეტიდან ორი ჩანს"
      }
    },
    "sheet": {
      "count": "14",
      "note": {
        "en": "screens in this project. Click one to bring it to the front.",
        "ka": "ეკრანი ამ პროექტში. დააკლიკეთ და წინ ამოვა."
      },
      "tiles": [
        {
          "orient": "l",
          "src": "/assets/work/ct-landing.webp",
          "w": 1600,
          "h": 1000,
          "name": {
            "en": "Landing page",
            "ka": "სალენდინგო გვერდი"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-language.webp",
          "w": 390,
          "h": 844,
          "name": {
            "en": "Choose language",
            "ka": "ენის არჩევა"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-intro.webp",
          "w": 390,
          "h": 844,
          "name": {
            "en": "Intro",
            "ka": "შესავალი"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-step1.webp",
          "w": 390,
          "h": 844,
          "name": {
            "en": "Meet the guide",
            "ka": "გაიცანით გიდი"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-step3.webp",
          "w": 390,
          "h": 844,
          "name": {
            "en": "Location",
            "ka": "მდებარეობა"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-travel.webp",
          "w": 390,
          "h": 844,
          "name": {
            "en": "How will you travel",
            "ka": "როგორ იმოგზაურებთ"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-pick.webp",
          "w": 390,
          "h": 844,
          "name": {
            "en": "Pick a tour",
            "ka": "აირჩიეთ ტური"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-map1.webp",
          "w": 390,
          "h": 844,
          "name": {
            "en": "Live map",
            "ka": "ცოცხალი რუკა"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-map2.webp",
          "w": 390,
          "h": 844,
          "name": {
            "en": "Live map · closer",
            "ka": "ცოცხალი რუკა · ახლოდან"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-map3.webp",
          "w": 390,
          "h": 844,
          "name": {
            "en": "Stop controls",
            "ka": "გაჩერების მართვა"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-voice1.webp",
          "w": 390,
          "h": 844,
          "name": {
            "en": "Narration · this stop",
            "ka": "თხრობა · ეს გაჩერება"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-voice2.webp",
          "w": 390,
          "h": 844,
          "name": {
            "en": "Narration · text",
            "ka": "თხრობა · ტექსტი"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-feedback.webp",
          "w": 390,
          "h": 844,
          "name": {
            "en": "Feedback",
            "ka": "შეფასება"
          }
        },
        {
          "orient": "p",
          "src": "/assets/work/ct-profile.webp",
          "w": 390,
          "h": 844,
          "name": {
            "en": "Profile",
            "ka": "პროფილი"
          }
        }
      ]
    },
    "tags": [
      {
        "en": "Product design",
        "ka": "პროდუქტის დიზაინი"
      },
      {
        "en": "Mobile app",
        "ka": "მობილური აპლიკაცია"
      },
      {
        "en": "Voice & AI UX",
        "ka": "ხმოვანი და AI UX"
      },
      {
        "en": "Brand & mascot",
        "ka": "ბრენდი და მასკოტი"
      }
    ],
    "case": "curatour"
  },
  {
    "id": "mythera",
    "no": "04",
    "title": "Mythera",
    "kind": {
      "en": "Game server platform · 2026",
      "ka": "სათამაშო სერვერის პლატფორმა · 2026"
    },
    "sub": {
      "en": "A Minecraft server platform designed end to end: the worlds and the servers behind them, case openings, the item shop, balances and accounts. Eighteen screens in one dark, high-contrast system.",
      "ka": "Minecraft-სერვერის პლატფორმა, თავიდან ბოლომდე დაპროექტებული: სამყაროები და მათ უკან მდგარი სერვერები, ქეისების გახსნა, ნივთების მაღაზია, ბალანსი და ანგარიშები. თვრამეტი ეკრანი ერთ მუქ, მაღალკონტრასტულ სისტემაში."
    },
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
      "cap": {
        "en": "Landing",
        "ka": "მთავარი"
      }
    },
    "sheet": {
      "count": "18",
      "note": {
        "en": "screens in this project. Click one to bring it to the front.",
        "ka": "ეკრანი ამ პროექტში. დააკლიკეთ და წინ ამოვა."
      },
      "tiles": [
        {
          "orient": "l",
          "src": "/assets/work/my-landing.webp",
          "w": 1500,
          "h": 1199,
          "name": {
            "en": "Landing",
            "ka": "მთავარი"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/my-server.webp",
          "w": 1500,
          "h": 1809,
          "name": {
            "en": "Server page",
            "ka": "სერვერის გვერდი"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/my-choose-server.webp",
          "w": 1500,
          "h": 1213,
          "name": {
            "en": "Choose a server",
            "ka": "აირჩიე სერვერი"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/my-cases.webp",
          "w": 1500,
          "h": 1100,
          "name": {
            "en": "Cases",
            "ka": "ქეისები"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/my-open-case.webp",
          "w": 1500,
          "h": 1725,
          "name": {
            "en": "Open case",
            "ka": "ქეისის გახსნა"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/my-case-opening.webp",
          "w": 1500,
          "h": 1630,
          "name": {
            "en": "Case opening",
            "ka": "გახსნის ანიმაცია"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/my-items.webp",
          "w": 1500,
          "h": 2055,
          "name": {
            "en": "Items",
            "ka": "ნივთები"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/my-shop.webp",
          "w": 1500,
          "h": 1029,
          "name": {
            "en": "Shop",
            "ka": "მაღაზია"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/my-privileges.webp",
          "w": 1500,
          "h": 1014,
          "name": {
            "en": "Privileges",
            "ka": "პრივილეგიები"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/my-buy-privileges.webp",
          "w": 1500,
          "h": 1014,
          "name": {
            "en": "Buy a privilege",
            "ka": "პრივილეგიის ყიდვა"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/my-top-up.webp",
          "w": 1500,
          "h": 1072,
          "name": {
            "en": "Top up balance",
            "ka": "ბალანსის შევსება"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/my-exchange.webp",
          "w": 1500,
          "h": 1094,
          "name": {
            "en": "Exchange coins",
            "ka": "მონეტების გაცვლა"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/my-download.webp",
          "w": 1500,
          "h": 1004,
          "name": {
            "en": "Download launcher",
            "ka": "ლაუნჩერის ჩამოტვირთვა"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/my-sign-up.webp",
          "w": 1500,
          "h": 1004,
          "name": {
            "en": "Create account",
            "ka": "ანგარიშის შექმნა"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/my-log-in.webp",
          "w": 1500,
          "h": 1004,
          "name": {
            "en": "Log in",
            "ka": "შესვლა"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/my-blog.webp",
          "w": 1500,
          "h": 1004,
          "name": {
            "en": "Blog",
            "ka": "ბლოგი"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/my-rules.webp",
          "w": 1500,
          "h": 1301,
          "name": {
            "en": "Rules",
            "ka": "წესები"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/my-help.webp",
          "w": 1500,
          "h": 1004,
          "name": {
            "en": "Help",
            "ka": "დახმარება"
          }
        }
      ]
    },
    "tags": [
      {
        "en": "Product design",
        "ka": "პროდუქტის დიზაინი"
      },
      {
        "en": "Web app",
        "ka": "ვებაპლიკაცია"
      },
      {
        "en": "Design system",
        "ka": "დიზაინ-სისტემა"
      },
      {
        "en": "Game UI",
        "ka": "სათამაშო UI"
      }
    ],
    "case": null
  },
  {
    "id": "nd",
    "no": "05",
    "title": "N&D",
    "kind": {
      "en": "Founders’ portfolio · Black and gold",
      "ka": "დამფუძნებლების პორტფოლიო · შავი და ოქრო"
    },
    "sub": {
      "en": "A portfolio site for two startup founders. Arched portraits with dossiers that open on hover, a work carousel and a contact desk, held together by one black-and-gold system across five sections.",
      "ka": "პორტფოლიოს საიტი ორი სტარტაპის დამფუძნებლისთვის. თაღოვანი პორტრეტები, რომლებზეც კურსორზე დოსიე იშლება, ნამუშევრების კარუსელი და საკონტაქტო სექცია — ერთ შავ-ოქროსფერ სისტემაში, ხუთ სექციად."
    },
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
      "cap": {
        "en": "Hero",
        "ka": "ჰერო"
      }
    },
    "sheet": {
      "count": "5",
      "note": {
        "en": "sections in this project. Click one to bring it to the front.",
        "ka": "სექცია ამ პროექტში. დააკლიკეთ და წინ ამოვა."
      },
      "tiles": [
        {
          "orient": "l",
          "src": "/assets/work/nd-hero.webp",
          "w": 1600,
          "h": 900,
          "name": {
            "en": "Hero",
            "ka": "ჰერო"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/nd-team.webp",
          "w": 1600,
          "h": 900,
          "name": {
            "en": "The founders",
            "ka": "დამფუძნებლები"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/nd-team-hover.webp",
          "w": 1600,
          "h": 900,
          "name": {
            "en": "Dossier open",
            "ka": "დოსიე გახსნილი"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/nd-work.webp",
          "w": 1600,
          "h": 900,
          "name": {
            "en": "Work",
            "ka": "ნამუშევრები"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/nd-contact.webp",
          "w": 1600,
          "h": 900,
          "name": {
            "en": "Contact",
            "ka": "კონტაქტი"
          }
        }
      ]
    },
    "tags": [
      {
        "en": "Web design",
        "ka": "ვებდიზაინი"
      },
      {
        "en": "Art direction",
        "ka": "არტ-დირექცია"
      },
      {
        "en": "Editorial layout",
        "ka": "რედაქციული განლაგება"
      },
      {
        "en": "Interaction",
        "ka": "ინტერაქცია"
      }
    ],
    "case": null
  },
  {
    "id": "autoconnect",
    "no": "06",
    "title": "AutoConnect",
    "kind": {
      "en": "Car marketplace · Client project 2026",
      "ka": "ავტომობილების პლატფორმა · კლიენტის პროექტი 2026"
    },
    "sub": {
      "en": "A car marketplace serving two opposite users — buyers who browse and sellers who list. Designed in Figma, then built in React, with a Figma plugin to shorten the loop between the two.",
      "ka": "ავტომობილების პლატფორმა ორი საპირისპირო მომხმარებლისთვის — მყიდველისთვის, რომელიც ათვალიერებს, და გამყიდველისთვის, რომელიც განცხადებას დებს. დაპროექტდა Figma-ში, შემდეგ აეწყო React-ზე, Figma-ს დანამატით, რომელმაც ორ ეტაპს შორის მანძილი შეამოკლა."
    },
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
      "cap": {
        "en": "Landing page",
        "ka": "მთავარი გვერდი"
      }
    },
    "sheet": {
      "count": "8",
      "note": {
        "en": "screens in this project. Click one to bring it to the front.",
        "ka": "ეკრანი ამ პროექტში. დააკლიკეთ და წინ ამოვა."
      },
      "tiles": [
        {
          "orient": "l",
          "src": "/assets/work/ac-landing.webp",
          "w": 1500,
          "h": 1662,
          "name": {
            "en": "Landing page",
            "ka": "სალენდინგო გვერდი"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/ac-inventory.webp",
          "w": 1500,
          "h": 1683,
          "name": {
            "en": "Inventory",
            "ka": "ავტოპარკი"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/ac-product.webp",
          "w": 1500,
          "h": 2027,
          "name": {
            "en": "Car page",
            "ka": "ავტომობილის გვერდი"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/ac-sell.webp",
          "w": 1500,
          "h": 2098,
          "name": {
            "en": "Sell your car",
            "ka": "გაყიდე ავტომობილი"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/ac-services.webp",
          "w": 1500,
          "h": 1719,
          "name": {
            "en": "Services",
            "ka": "სერვისები"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/ac-favourites.webp",
          "w": 1500,
          "h": 1602,
          "name": {
            "en": "Favourites",
            "ka": "რჩეულები"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/ac-login.webp",
          "w": 1500,
          "h": 1026,
          "name": {
            "en": "Log in",
            "ka": "შესვლა"
          }
        },
        {
          "orient": "l",
          "src": "/assets/work/ac-contact.webp",
          "w": 1500,
          "h": 1852,
          "name": {
            "en": "Contact",
            "ka": "კონტაქტი"
          }
        }
      ]
    },
    "tags": [
      {
        "en": "Product design",
        "ka": "პროდუქტის დიზაინი"
      },
      {
        "en": "Web app",
        "ka": "ვებაპლიკაცია"
      },
      {
        "en": "Front-end (React)",
        "ka": "ფრონტენდი (React)"
      },
      {
        "en": "Figma plugin",
        "ka": "Figma-ს დანამატი"
      }
    ],
    "case": "autoconnect"
  }
]
