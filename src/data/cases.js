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
    "eyebrow": {
      "en": "Client project · 2026",
      "ka": "კლიენტის პროექტი · 2026"
    },
    "standfirst": {
      "en": "A restaurant's produce order used to be a phone call at 10:40 in the morning. We replaced it with two ways to order — one built for speed, one for control — and a dashboard for the person actually paying.",
      "ka": "რესტორნის შეკვეთა აქამდე დილის 10:40-ზე დარეკილი ზარი იყო. ჩვენ ის ჩავანაცვლეთ შეკვეთის ორი გზით — ერთი სისწრაფისთვის, მეორე კონტროლისთვის — და დაშბორდით იმ ადამიანისთვის, ვინც რეალურად იხდის."
    },
    "facts": [
      {
        "label": {
          "en": "Role",
          "ka": "როლი"
        },
        "value": {
          "en": "Product design (UI/UX), brand",
          "ka": "პროდუქტის დიზაინი (UI/UX), ბრენდი"
        }
      },
      {
        "label": {
          "en": "Scope",
          "ka": "მოცულობა"
        },
        "value": {
          "en": "Mobile app, web dashboard, brand book",
          "ka": "მობილური აპლიკაცია, ვებდაშბორდი, ბრენდბუქი"
        }
      },
      {
        "label": {
          "en": "Surfaces",
          "ka": "პლატფორმები"
        },
        "value": {
          "en": "iOS & Android, responsive web",
          "ka": "iOS და Android, ადაპტური ვები"
        }
      },
      {
        "label": {
          "en": "Tools",
          "ka": "ინსტრუმენტები"
        },
        "value": {
          "en": "Figma · HTML/CSS/JS",
          "ka": "Figma · HTML/CSS/JS"
        }
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
        "text": {
          "en": "The problem",
          "ka": "პრობლემა"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "Restaurant supply ordering runs on phone calls and messaging apps. A manager rings three suppliers before lunch service, reads a list out loud, and hopes it was written down correctly. There is no record until the invoice arrives, no approval step before money is committed, and no way for the owner to see what the kitchen is spending until the month closes.",
          "ka": "რესტორნის მომარაგება სატელეფონო ზარებსა და მესენჯერებზე დგას. მენეჯერი სადილის სერვისამდე სამ მომწოდებელს რეკავს, სიას ხმამაღლა კითხულობს და იმედოვნებს, რომ სწორად ჩაიწერეს. ჩანაწერი ინვოისის მოსვლამდე არ არსებობს, ფულის დახარჯვამდე დამტკიცების საფეხური არ არის, და მფლობელი სამზარეულოს ხარჯს თვის დახურვამდე ვერ ხედავს."
        }
      },
      {
        "type": "p",
        "text": {
          "en": "So the brief was not «make an ordering app». It was: make placing the order faster than the phone call, without losing the two things the phone call already gave you — speed, and the certainty that you know exactly what you just ordered.",
          "ka": "ამიტომ დავალება არ ყოფილა „გააკეთე შეკვეთის აპლიკაცია“. ის ასე ჟღერდა: შეკვეთის განთავსება ზარზე სწრაფი გახადე ისე, რომ არ დაკარგო ის ორი რამ, რასაც ზარი უკვე გაძლევდა — სისწრაფე და დარწმუნებულობა, რომ ზუსტად იცი, რა შეუკვეთე."
        }
      },
      {
        "type": "h2",
        "text": {
          "en": "Constraints that shaped everything",
          "ka": "შეზღუდვები, რომლებმაც ყველაფერი განსაზღვრა"
        }
      },
      {
        "type": "ul",
        "items": [
          {
            "en": "The user is standing in a prep area, usually with one hand free and a noisy room around them.",
            "ka": "მომხმარებელი სამზადისში დგას, ჩვეულებრივ ერთი ხელი აქვს თავისუფალი და ირგვლივ ხმაურია."
          },
          {
            "en": "The order is time-boxed. Produce has a cutoff — in this client's case 11:00 — and missing it pushes delivery to the next day.",
            "ka": "შეკვეთა დროში ჩარჩოშია. პროდუქტს დედლაინი აქვს — ამ კლიენტთან 11:00 — და მისი გაცდენა მიწოდებას მეორე დღეზე გადაწევს."
          },
          {
            "en": "The person placing the order is often not the person authorised to spend.",
            "ka": "ის, ვინც შეკვეთას დებს, ხშირად არ არის ის, ვისაც ხარჯვის უფლება აქვს."
          },
          {
            "en": "Two audiences with opposite needs: a floor manager on a phone who wants out of the app fast, and an owner on a desktop who wants to stay in it and read.",
            "ka": "ორი აუდიტორია საპირისპირო საჭიროებით: მენეჯერი ტელეფონით, რომელსაც აპლიკაციიდან სწრაფად გასვლა უნდა, და მფლობელი კომპიუტერით, რომელსაც შიგნით დარჩენა და კითხვა სურს."
          }
        ]
      },
      {
        "type": "h2",
        "text": {
          "en": "Decisions",
          "ka": "გადაწყვეტილებები"
        }
      },
      {
        "type": "decision",
        "num": {
          "en": "Decision 01",
          "ka": "გადაწყვეტილება 01"
        },
        "text": {
          "en": "Two ordering paths, kept deliberately separate",
          "ka": "შეკვეთის ორი გზა, განზრახ გაყოფილი"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "The obvious move with a voice feature is to make it the primary path and bury the manual one. I did the opposite: voice and manual sit on the home screen as equal entry points.",
          "ka": "ხმოვანი ფუნქციის თვალსაჩინო გადაწყვეტა ისაა, რომ ის მთავარ გზად აქციო და ხელით შეკვეთა დამალო. მე პირიქით მოვიქეცი: ხმოვანი და ხელით შეკვეთა მთავარ ეკრანზე თანაბარ შესასვლელებად დგას."
        }
      },
      {
        "type": "p",
        "text": {
          "en": "Voice wins on speed — saying «four boxes of tomatoes from GreenField» beats four taps. But a supply order can run into four figures, and speech recognition in a loud kitchen fails in ways the user cannot predict. So the voice path never submits what it heard. It surfaces a Detected order panel first: parsed items, editable, shown before anything is committed.",
          "ka": "ხმა სისწრაფით იგებს — „ოთხი ყუთი პომიდორი GreenField-იდან“ ოთხ დაჭერას სჯობს. მაგრამ შეკვეთა ოთხნიშნა თანხას აღწევს, ხმის ამოცნობა კი ხმაურიან სამზარეულოში ისე იშლება, რომ მომხმარებელი ამას ვერ განჭვრეტს. ამიტომ ხმოვანი გზა ნასმენს პირდაპირ არასდროს აგზავნის. ჯერ „ამოცნობილი შეკვეთის“ პანელს აჩვენებს: გარჩეულ პოზიციებს, რედაქტირებადს, ვალდებულების აღებამდე."
        }
      },
      {
        "type": "p",
        "text": {
          "en": "The manual path exists for the opposite case — a large or unfamiliar order where the manager wants to see the catalog. It is four explicit steps (supplier → products → quantities → review) rather than one long form, because each step boundary is a place to stop and check.",
          "ka": "ხელით შეკვეთა საპირისპირო შემთხვევისთვისაა — დიდი ან უჩვეულო შეკვეთისთვის, როცა მენეჯერს კატალოგის ნახვა უნდა. ის ერთი გრძელი ფორმის ნაცვლად ოთხი ცხადი საფეხურია (მომწოდებელი → პროდუქტები → რაოდენობა → გადამოწმება), რადგან ყოველი საფეხურის ზღვარი შეჩერებისა და შემოწმების ადგილია."
        }
      },
      {
        "type": "aside",
        "items": [
          {
            "en": "Alternative I rejected: a single hybrid flow where voice pre-fills the manual form. It turns the fast path into a shortcut into paperwork, which removes the reason to use voice at all.",
            "ka": "ალტერნატივა, რომელიც უარვყავი: ერთი ჰიბრიდული ნაკადი, სადაც ხმა ხელით ფორმას ავსებს. ის სწრაფ გზას ქაღალდბაზობის მალსახმობად აქცევს, რაც ხმის გამოყენების აზრს საერთოდ აცლის."
          }
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
            "title": {
              "en": "Voice — resting",
              "ka": "ხმა — მოსვენებული"
            },
            "note": {
              "en": "One target, thumb-height, with an example phrasing so the user knows how to speak to it.",
              "ka": "ერთი სამიზნე ცერის სიმაღლეზე, ნიმუშფრაზით, რომ მომხმარებელმა იცოდეს, როგორ დაელაპარაკოს."
            }
          },
          {
            "src": "/assets/work/s86-voice-listening.webp",
            "alt": "Voice order screen while listening, showing detected items",
            "w": 390,
            "h": 843,
            "title": {
              "en": "Voice — listening",
              "ka": "ხმა — მოსმენისას"
            },
            "note": {
              "en": "Items appear as they are parsed. Nothing is submitted from this screen.",
              "ka": "პოზიციები გარჩევისთანავე ჩნდება. ამ ეკრანიდან არაფერი იგზავნება."
            }
          },
          {
            "src": "/assets/work/s86-step2.webp",
            "alt": "Manual order step two — product selection",
            "w": 390,
            "h": 844,
            "title": {
              "en": "Manual — step 2 of 4",
              "ka": "ხელით — მე-2 საფეხური 4-იდან"
            },
            "note": {
              "en": "The slow path, for orders worth looking at properly.",
              "ka": "ნელი გზა, იმ შეკვეთებისთვის, რომლებსაც სერიოზული ნახვა სჭირდება."
            }
          },
          {
            "src": "/assets/work/s86-review.webp",
            "alt": "Order review screen before submission",
            "w": 390,
            "h": 843,
            "title": {
              "en": "Review — shared by both paths",
              "ka": "გადამოწმება — ორივე გზისთვის საერთო"
            },
            "note": {
              "en": "Voice and manual converge here. This is the only screen that can place an order.",
              "ka": "ხმოვანი და ხელით გზა აქ ერთდება. ეს ერთადერთი ეკრანია, საიდანაც შეკვეთა იდება."
            }
          },
          {
            "src": "/assets/work/s86-placed.webp",
            "alt": "Order placed confirmation screen",
            "w": 390,
            "h": 844,
            "title": {
              "en": "Placed",
              "ka": "განთავსდა"
            },
            "note": {
              "en": "Deliberately plain. The reward for ordering is being finished, not a celebration.",
              "ka": "განზრახ მარტივი. შეკვეთის ჯილდო დასრულებაა და არა ზეიმი."
            }
          }
        ]
      },
      {
        "type": "decision",
        "num": {
          "en": "Decision 02",
          "ka": "გადაწყვეტილება 02"
        },
        "text": {
          "en": "The deadline sits above the numbers",
          "ka": "დედლაინი ციფრებზე მაღლა დგას"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "The home screen opens with a reminder — place today's produce order before 11:00 AM — above the stats, above the quick actions, above everything.",
          "ka": "მთავარი ეკრანი შეხსენებით იხსნება — დღევანდელი შეკვეთა 11:00-მდე განათავსეთ — სტატისტიკაზე, სწრაფ მოქმედებებზე, ყველაფერზე მაღლა."
        }
      },
      {
        "type": "p",
        "text": {
          "en": "This was argued about. Dashboards conventionally open with counts. But the counts describe the past, and the deadline is the only thing on that screen the user can still act on. Every other element is context for a decision that has to happen in the next twenty minutes.",
          "ka": "ამაზე კამათი იყო. დაშბორდები ჩვეულებრივ ციფრებით იხსნება. მაგრამ ციფრები წარსულს აღწერს, დედლაინი კი ერთადერთია ამ ეკრანზე, რაზეც მომხმარებელს კიდევ შეუძლია რეაგირება. დანარჩენი ყველა ელემენტი კონტექსტია იმ გადაწყვეტილებისთვის, რომელიც მომდევნო ოც წუთში უნდა მოხდეს."
        }
      },
      {
        "type": "decision",
        "num": {
          "en": "Decision 03",
          "ka": "გადაწყვეტილება 03"
        },
        "text": {
          "en": "Approvals are a tab, not a setting",
          "ka": "დამტკიცება ცალკე ტაბია და არა პარამეტრი"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "In most restaurants the person who knows what the kitchen needs and the person allowed to commit the money are different people. Treating approval as a background rule would have made it invisible until it blocked someone.",
          "ka": "რესტორნების უმეტესობაში ის, ვინც იცის, რა სჭირდება სამზარეულოს, და ის, ვისაც ფულის დახარჯვის უფლება აქვს, სხვადასხვა ადამიანია. დამტკიცების ფონურ წესად აღქმა მას უხილავს გახდიდა მანამ, სანამ ვინმეს არ შეაფერხებდა."
        }
      },
      {
        "type": "p",
        "text": {
          "en": "So it became a first-class destination with a live count in the navigation, on both surfaces. The manager sees what is waiting on someone else; the approver sees a queue they can clear in one sitting.",
          "ka": "ამიტომ ის სრულუფლებიან განყოფილებად იქცა, ნავიგაციაში ცოცხალი მრიცხველით, ორივე პლატფორმაზე. მენეჯერი ხედავს, რა ელოდება სხვას; დამმტკიცებელი კი — რიგს, რომელსაც ერთ ჯდომაზე ხურავს."
        }
      },
      {
        "type": "decision",
        "num": {
          "en": "Decision 04",
          "ka": "გადაწყვეტილება 04"
        },
        "text": {
          "en": "Two densities, one system",
          "ka": "ორი სიმკვრივე, ერთი სისტემა"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "The phone and the dashboard share tokens, type and components, but not density. On the phone, one job per screen and a bottom bar reachable with a thumb. On the desktop, four KPIs, a spend curve and a reorder gauge in a single view, because that user came to compare, not to act.",
          "ka": "ტელეფონსა და დაშბორდს საერთო ტოკენები, შრიფტი და კომპონენტები აქვს, სიმკვრივე კი — არა. ტელეფონზე ერთი ამოცანა ერთ ეკრანზე და ქვედა პანელი ცერით მისაწვდომად. კომპიუტერზე ოთხი მაჩვენებელი, ხარჯის მრუდი და გადაშეკვეთის ინდიკატორი ერთ ხედში, რადგან ეს მომხმარებელი შესადარებლად მოვიდა და არა სამოქმედოდ."
        }
      },
      {
        "type": "figure",
        "wide": true,
        "src": "/assets/work/s86-dash.webp",
        "alt": "Solution 86 web dashboard showing spend, order volume and reorder rate",
        "w": 1800,
        "h": 1125,
        "caption": {
          "en": "The owner's view. Spend is the headline number because it is the only one that changes behaviour — order counts do not tell you whether the kitchen is over-ordering.",
          "ka": "მფლობელის ხედი. ხარჯი მთავარი ციფრია, რადგან ერთადერთია, რომელიც ქცევას ცვლის — შეკვეთების რაოდენობა არ გეუბნება, ზედმეტს ხომ არ უკვეთავს სამზარეულო."
        }
      },
      {
        "type": "figure",
        "wide": true,
        "src": "/assets/work/s86-approvals-web.webp",
        "alt": "Approvals queue on the web dashboard",
        "w": 1800,
        "h": 1125,
        "caption": {
          "en": "The same approvals queue as the phone, at desktop density — designed to be cleared in one sitting rather than checked between tasks.",
          "ka": "იგივე დამტკიცების რიგი, რაც ტელეფონზე, კომპიუტერის სიმკვრივით — შექმნილია ერთ ჯდომაზე დასახურად და არა სამუშაოს შუალედებში სანახავად."
        }
      },
      {
        "type": "h2",
        "text": {
          "en": "Brand",
          "ka": "ბრენდი"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "The identity had to survive being tiny. A supplier logo in an order list is 24 pixels tall, so the mark was built from a single bold letterform that stays readable at that size and still holds a header at full width.",
          "ka": "იდენტობას პატარა ზომაში გადარჩენა უნდა შესძლებოდა. მომწოდებლის ლოგო შეკვეთების სიაში 24 პიქსელია, ამიტომ ნიშანი ერთი მკვეთრი ასოსგან აიგო, რომელიც ამ ზომაშიც იკითხება და სრულ სიგანეზეც უძლებს."
        }
      },
      {
        "type": "figure",
        "wide": true,
        "src": "/assets/work/s86-brand-1.webp",
        "alt": "Page from the Solution 86 brand book",
        "w": 1400,
        "h": 788,
        "caption": {
          "en": "From the brand book delivered alongside the product.",
          "ka": "ბრენდბუქიდან, რომელიც პროდუქტთან ერთად ჩაბარდა."
        }
      },
      {
        "type": "h2",
        "text": {
          "en": "What I would do differently",
          "ka": "რას გავაკეთებდი სხვაგვარად"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "I designed the confident voice state first and the broken one last. That is backwards. In a kitchen, partial recognition is not an edge case — it is the normal case, and the screen that says «I heard three of your five items» is the screen that decides whether anyone trusts the feature. Designing it first would have changed the whole flow, not just one state.",
          "ka": "ჯერ ხმის „დარწმუნებული“ მდგომარეობა დავხატე და გატეხილი — ბოლოს. ეს უკუღმაა. სამზარეულოში ნაწილობრივი ამოცნობა გამონაკლისი არაა — ის ნორმაა, და სწორედ ის ეკრანი, რომელიც ამბობს „ხუთიდან სამი პოზიცია გავიგე“, წყვეტს, ენდობა თუ არა ვინმე ამ ფუნქციას. მისი პირველად დაპროექტება მთელ ნაკადს შეცვლიდა და არა ერთ მდგომარეობას."
        }
      },
      {
        "type": "p",
        "text": {
          "en": "I would also push harder on reorder. Roughly the same basket goes out every week, and the fastest order is the one that is already filled in. Today that lives in the dashboard as a statistic; it should be an action on the home screen.",
          "ka": "ასევე უფრო დავჟინებდი გადაშეკვეთაზე. ყოველ კვირას დაახლოებით ერთი და იგივე კალათა მიდის, და ყველაზე სწრაფი შეკვეთა ის არის, რომელიც უკვე შევსებულია. დღეს ეს დაშბორდში სტატისტიკად ცხოვრობს; მას მთავარ ეკრანზე მოქმედებად ადგილი უნდა ჰქონდეს."
        }
      }
    ],
    "next": {
      "slug": "curatour",
      "title": "CuraTour",
      "label": {
        "en": "Next case study",
        "ka": "შემდეგი ქეისი"
      }
    }
  },
  {
    "slug": "curatour",
    "title": "CuraTour",
    "docTitle": "CuraTour — AI hotel concierge · Ilia Okhanashvili",
    "description": "Case study: turning a hotel concierge's recommendations into a guided audio walk. Eighteen screens designed against a market assessment of Georgian inbound tourism.",
    "eyebrow": {
      "en": "Client project · 2026",
      "ka": "კლიენტის პროექტი · 2026"
    },
    "standfirst": {
      "en": "A hotel already holds the best recommendations in the city — inside a concierge's head, given away forty times a week and forgotten by lunchtime. CuraTour turns them into a guided audio walk the guest can take alone.",
      "ka": "სასტუმროს უკვე აქვს ქალაქის საუკეთესო რეკომენდაციები — კონსიერჟის თავში, კვირაში ორმოცჯერ გაცემული და შუადღისთვის დავიწყებული. CuraTour მათ გიდიან აუდიოსეირნობად აქცევს, რომელსაც სტუმარი მარტო გადის."
    },
    "facts": [
      {
        "label": {
          "en": "Role",
          "ka": "როლი"
        },
        "value": {
          "en": "Product design (UI/UX), brand, mascot",
          "ka": "პროდუქტის დიზაინი (UI/UX), ბრენდი, მასკოტი"
        }
      },
      {
        "label": {
          "en": "Scope",
          "ka": "მოცულობა"
        },
        "value": {
          "en": "18-screen mobile app, landing page, identity",
          "ka": "18-ეკრანიანი მობილური აპლიკაცია, სალენდინგო გვერდი, იდენტობა"
        }
      },
      {
        "label": {
          "en": "Grounded in",
          "ka": "ეყრდნობა"
        },
        "value": {
          "en": "A market assessment of Georgian inbound tourism (Geostat / GNTA data)",
          "ka": "საქართველოს შემომავალი ტურიზმის ბაზრის კვლევას (Geostat / GNTA)"
        }
      },
      {
        "label": {
          "en": "Tools",
          "ka": "ინსტრუმენტები"
        },
        "value": {
          "en": "Figma",
          "ka": "Figma"
        }
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
        "text": {
          "en": "The problem",
          "ka": "პრობლემა"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "A guest asks the front desk what to see. They get five good answers, write two of them on a napkin, open a map app, and walk to a pin with no idea why that street matters. The hotel's knowledge evaporates the moment the guest leaves the lobby.",
          "ka": "სტუმარი რეცეფციას ეკითხება, რა ნახოს. იღებს ხუთ კარგ პასუხს, ორს ხელსახოცზე იწერს, ხსნის რუკის აპლიკაციას და მიდის წერტილთან, სადაც წარმოდგენა არ აქვს, რატომ არის ეს ქუჩა მნიშვნელოვანი. სასტუმროს ცოდნა ქრება მაშინვე, როგორც კი სტუმარი ჰოლიდან გავა."
        }
      },
      {
        "type": "p",
        "text": {
          "en": "General travel apps have the opposite problem. They know every restaurant in the city and cannot tell you which one the concierge would actually send you to. The value is not more places — it is fewer, chosen by someone the guest already has a reason to trust.",
          "ka": "ზოგადი სამოგზაურო აპლიკაციებს საპირისპირო პრობლემა აქვთ. მათ ქალაქის ყველა რესტორანი იციან და ვერ გეუბნებიან, რომელში გაგზავნიდა კონსიერჟი. ღირებულება მეტ ადგილში არაა — ის ნაკლებ ადგილშია, რომელიც შეარჩია ადამიანმა, რომლის ნდობის საფუძველიც სტუმარს უკვე აქვს."
        }
      },
      {
        "type": "h2",
        "text": {
          "en": "It started with numbers, not a moodboard",
          "ka": "დაიწყო ციფრებით და არა მუდბორდით"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "Before any screen existed, the project was scoped against a market assessment of Georgian inbound tourism built on official Geostat and GNTA series. Three findings did more to shape the interface than any reference I could have collected:",
          "ka": "სანამ ერთი ეკრანიც შეიქმნებოდა, პროექტი შეფასდა საქართველოს შემომავალი ტურიზმის ბაზრის კვლევით, რომელიც Geostat-ისა და GNTA-ის ოფიციალურ მონაცემებზე დგას. სამმა დასკვნამ ინტერფეისზე იმაზე მეტი იმოქმედა, ვიდრე ნებისმიერი რეფერენსი მოახდენდა:"
        }
      },
      {
        "type": "ul",
        "items": [
          {
            "en": "In 2024, 94.3% of international visits used no tourist package. Almost nobody arrives with a guide — which is precisely the gap the product fills.",
            "ka": "2024 წელს საერთაშორისო ვიზიტების 94.3% ტურისტული პაკეტის გარეშე შედგა. თითქმის არავინ ჩამოდის გიდით — სწორედ ეს სიცარიელეა, რომელსაც პროდუქტი ავსებს."
          },
          {
            "en": "89.8% of foreign hotel guests were in the country for holiday and recreation, and 63.5% of hotel guests were foreigners. The hotel is a real distribution channel, not a convenient assumption.",
            "ka": "უცხოელი სასტუმროს სტუმრების 89.8% ქვეყანაში დასვენებისთვის იმყოფებოდა, ხოლო სასტუმროს სტუმრების 63.5% უცხოელი იყო. სასტუმრო რეალური სადისტრიბუციო არხია და არა მოსახერხებელი დაშვება."
          },
          {
            "en": "The first-wave language set is English, Russian and Hebrew, then Turkish and Armenian — Russia was the largest source market at 23.2% of visitors, and Israel alone accounted for 14.9% of foreign hotel guests.",
            "ka": "ენების პირველი ტალღაა ინგლისური, რუსული და ებრაული, შემდეგ თურქული და სომხური — რუსეთი უდიდესი წყარო ბაზარი იყო ვიზიტორთა 23.2%-ით, ისრაელზე კი მარტო უცხოელი სასტუმროს სტუმრების 14.9% მოდიოდა."
          }
        ]
      },
      {
        "type": "h2",
        "text": {
          "en": "Decisions",
          "ka": "გადაწყვეტილებები"
        }
      },
      {
        "type": "decision",
        "num": {
          "en": "Decision 01",
          "ka": "გადაწყვეტილება 01"
        },
        "text": {
          "en": "Language is the first question, not a settings item",
          "ka": "ენა პირველი კითხვაა და არა პარამეტრი"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "The app is distributed by a QR code in a hotel room, so the user meets it ten seconds after first hearing of it, in a country whose alphabet they cannot read. Every subsequent screen — tour titles, audio narration, stop descriptions — depends on the answer.",
          "ka": "აპლიკაცია სასტუმროს ნომერში QR-კოდით ვრცელდება, ამიტომ მომხმარებელი მას პირველი გაგონებიდან ათ წამში ხვდება, ქვეყანაში, რომლის ანბანსაც ვერ კითხულობს. ყოველი შემდეგი ეკრანი — ტურის სათაურები, აუდიოთხრობა, გაჩერებების აღწერა — ამ პასუხზეა დამოკიდებული."
        }
      },
      {
        "type": "p",
        "text": {
          "en": "So language selection sits immediately after the intro, before any account, permission or preference. It is also the only onboarding screen with no skip: skipping it would mean guessing, and a guess here breaks everything after it.",
          "ka": "ამიტომ ენის არჩევა ინტროს მაშინვე მოსდევს — ანგარიშამდე, ნებართვამდე და პრეფერენციამდე. ეს ერთადერთი ონბორდინგის ეკრანია გამოტოვების გარეშე: გამოტოვება ხომ გამოცნობას ნიშნავს, გამოცნობა კი აქ ყველაფერს შემდეგ ანგრევს."
        }
      },
      {
        "type": "decision",
        "num": {
          "en": "Decision 02",
          "ka": "გადაწყვეტილება 02"
        },
        "text": {
          "en": "Borrow the concierge's authority, do not replace it",
          "ka": "ისესხე კონსიერჟის ავტორიტეტი და არ ჩაანაცვლო"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "The tour list says «Curated by your hotel's concierge team», and that line is load-bearing. The guest has no reason to trust an app they met a minute ago, but they have already decided to trust the hotel — they are sleeping in it.",
          "ka": "ტურების სია ამბობს: „შერჩეულია თქვენი სასტუმროს კონსიერჟის გუნდის მიერ“ — და ეს სტრიქონი მზიდი კონსტრუქციაა. სტუმარს წუთის წინ ნანახი აპლიკაციის ნდობის საფუძველი არ აქვს, სასტუმროს ნდობა კი უკვე გადაწყვეტილი აქვს — ხომ იქ იძინებს."
        }
      },
      {
        "type": "p",
        "text": {
          "en": "The same logic drove the tour cards. Each carries duration, walking distance and a stop count rather than a star rating. A rating invites comparison against the internet; duration and distance answer the only question a guest with an afternoon free is actually asking.",
          "ka": "იმავე ლოგიკამ განსაზღვრა ტურის ბარათებიც. თითოეულს აქვს ხანგრძლივობა, სავალი მანძილი და გაჩერებების რაოდენობა — და არა ვარსკვლავები. რეიტინგი ინტერნეტთან შედარებას იწვევს; ხანგრძლივობა და მანძილი კი პასუხობს იმ ერთადერთ კითხვას, რომელსაც თავისუფალი შუადღის მქონე სტუმარი სვამს."
        }
      },
      {
        "type": "shots",
        "figures": [
          {
            "src": "/assets/work/ct-language.webp",
            "alt": "Language selection screen",
            "w": 390,
            "h": 844,
            "title": {
              "en": "Language — first, unskippable",
              "ka": "ენა — პირველი, გამოუტოვებელი"
            },
            "note": {
              "en": "Every screen after this one depends on the answer.",
              "ka": "ამის შემდეგ ყოველი ეკრანი ამ პასუხზეა დამოკიდებული."
            }
          },
          {
            "src": "/assets/work/ct-travel.webp",
            "alt": "How will you travel — walking or driving",
            "w": 390,
            "h": 844,
            "title": {
              "en": "Mode of travel",
              "ka": "გადაადგილების ტიპი"
            },
            "note": {
              "en": "Changes which tours are even offered — a 3 km walk is not a 3 km drive.",
              "ka": "ცვლის, რომელი ტურები შესთავაზება საერთოდ — 3 კმ ფეხით 3 კმ მანქანით არაა."
            }
          },
          {
            "src": "/assets/work/ct-pick.webp",
            "alt": "Pick a tour screen with curated tour cards",
            "w": 390,
            "h": 844,
            "title": {
              "en": "Pick a tour",
              "ka": "აირჩიე ტური"
            },
            "note": {
              "en": "Duration, distance, stops — no star ratings, on purpose.",
              "ka": "ხანგრძლივობა, მანძილი, გაჩერებები — ვარსკვლავების გარეშე, განზრახ."
            }
          },
          {
            "src": "/assets/work/ct-map1.webp",
            "alt": "Live walking map with the fox guide on the route",
            "w": 390,
            "h": 844,
            "title": {
              "en": "On the walk",
              "ka": "სეირნობისას"
            },
            "note": {
              "en": "The guide stands on the route, not a blue dot. See decision 03.",
              "ka": "მარშრუტზე გიდი დგას და არა ლურჯი წერტილი. იხ. გადაწყვეტილება 03."
            }
          },
          {
            "src": "/assets/work/ct-voice2.webp",
            "alt": "AI guide answering a question about the current stop",
            "w": 390,
            "h": 844,
            "title": {
              "en": "Ask anything",
              "ka": "ჰკითხე ნებისმიერი"
            },
            "note": {
              "en": "The AI answers about the stop you are standing at — context it already has.",
              "ka": "AI პასუხობს იმ გაჩერებაზე, სადაც დგახარ — კონტექსტი მას უკვე აქვს."
            }
          },
          {
            "src": "/assets/work/ct-feedback.webp",
            "alt": "Post-tour feedback screen",
            "w": 390,
            "h": 844,
            "title": {
              "en": "After the tour",
              "ka": "ტურის შემდეგ"
            },
            "note": {
              "en": "Feedback goes back to the hotel that recommended the route.",
              "ka": "შეფასება უბრუნდება სასტუმროს, რომელმაც მარშრუტი შემოგვთავაზა."
            }
          }
        ]
      },
      {
        "type": "decision",
        "num": {
          "en": "Decision 03",
          "ka": "გადაწყვეტილება 03"
        },
        "text": {
          "en": "A guide on the map, not a blue dot",
          "ka": "გიდი რუკაზე და არა ლურჯი წერტილი"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "Navigation apps show you as a dot because their job is to get you somewhere. CuraTour's job is the opposite: the walk is the product, and arriving is incidental. So the user is represented by the guide character standing on the route, and the map is a soft dimensional model rather than a road map.",
          "ka": "სანავიგაციო აპლიკაციები შენ წერტილად გაჩვენებენ, რადგან მათი საქმე შენი მიყვანაა. CuraTour-ის საქმე საპირისპიროა: სეირნობა თავად არის პროდუქტი, მისვლა კი თანმდევი. ამიტომ მომხმარებელს გიდის პერსონაჟი წარმოადგენს მარშრუტზე, რუკა კი საგზაო რუკის ნაცვლად რბილი მოცულობითი მოდელია."
        }
      },
      {
        "type": "p",
        "text": {
          "en": "That is also why the mascot exists at all. It is not decoration — it is the thing that makes the difference between a map and a tour legible in a single glance.",
          "ka": "სწორედ ამიტომ არსებობს მასკოტი. ის დეკორაცია არაა — ის ის რამაა, რაც რუკასა და ტურს შორის სხვაობას ერთი შეხედვით გასაგებს ხდის."
        }
      },
      {
        "type": "aside",
        "items": [
          {
            "en": "Where AI did the work: the mascot, the dimensional map style and the illustrated onboarding art are AI-generated, then art-directed and composited. The flows, the screen structure and the decisions on this page are mine.",
            "ka": "სად იმუშავა AI-მ: მასკოტი, რუკის მოცულობითი სტილი და ონბორდინგის ილუსტრაციები AI-თია დაგენერირებული, შემდეგ კი არტდირექცირებული და აწყობილი. ნაკადები, ეკრანების სტრუქტურა და ამ გვერდზე აღწერილი გადაწყვეტილებები ჩემია."
          }
        ]
      },
      {
        "type": "decision",
        "num": {
          "en": "Decision 04",
          "ka": "გადაწყვეტილება 04"
        },
        "text": {
          "en": "The AI answers about where you are standing",
          "ka": "AI პასუხობს იმაზე, სად დგახარ"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "An open chat box in a travel app is a trap — it promises everything and disappoints immediately. The guide is scoped instead: it is attached to the current stop, so it already knows what you are looking at, and the question you are most likely to ask is the one it is best at.",
          "ka": "ღია ჩატის ველი სამოგზაურო აპლიკაციაში ხაფანგია — ის ყველაფერს გპირდება და მაშინვე გაცრუებს. გიდი ამის ნაცვლად შემოსაზღვრულია: ის მიბმულია მიმდინარე გაჩერებაზე, ე.ი. უკვე იცის, რას უყურებ, და ის კითხვა, რომელსაც სავარაუდოდ დასვამ, სწორედ მისი ძლიერი მხარეა."
        }
      },
      {
        "type": "figure",
        "wide": true,
        "src": "/assets/work/ct-landing.webp",
        "alt": "CuraTour landing page",
        "w": 1600,
        "h": 1000,
        "caption": {
          "en": "The landing page sells to hotels, not to travellers — the guest never visits a website, they scan a code in their room.",
          "ka": "სალენდინგო გვერდი სასტუმროებს მიმართავს და არა მოგზაურებს — სტუმარი ვებგვერდზე არასდროს შედის, ის ნომერში კოდს სკანირებს."
        }
      },
      {
        "type": "h2",
        "text": {
          "en": "What I would do differently",
          "ka": "რას გავაკეთებდი სხვაგვარად"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "The screen where the AI is thinking is the weakest in the set. Today it is an empty page with a pulsing orb — which is exactly the pattern every other AI product uses, and exactly the wrong one here. The user is standing on a street corner in a foreign city waiting for a sentence. That wait should have been part of the narration, not a spinner.",
          "ka": "ეკრანი, სადაც AI ფიქრობს, ნაკრებში ყველაზე სუსტია. დღეს ის ცარიელი გვერდია მოციმციმე სფეროთი — ზუსტად ის შაბლონი, რომელსაც ყველა სხვა AI-პროდუქტი იყენებს, და ზუსტად არასწორი აქ. მომხმარებელი უცხო ქალაქის კუთხეში დგას და წინადადებას ელოდება. ეს ლოდინი თხრობის ნაწილი უნდა ყოფილიყო და არა ჩამტვირთავი."
        }
      },
      {
        "type": "p",
        "text": {
          "en": "I would also design the offline case properly. The research says these are independent foreign travellers, which means many of them are on an expensive roaming plan or none at all — and an audio tour that needs a live connection at every stop is a tour that stops.",
          "ka": "ასევე სათანადოდ დავაპროექტებდი ოფლაინ რეჟიმს. კვლევა ამბობს, რომ ესენი დამოუკიდებელი უცხოელი მოგზაურები არიან, ე.ი. ბევრი მათგანი ძვირიან როუმინგზეა ან საერთოდ კავშირის გარეშე — და აუდიოტური, რომელსაც ყოველ გაჩერებაზე ცოცხალი კავშირი სჭირდება, ტურია, რომელიც ჩერდება."
        }
      }
    ],
    "next": {
      "slug": "autoconnect",
      "title": "AutoConnect",
      "label": {
        "en": "Next case study",
        "ka": "შემდეგი ქეისი"
      }
    }
  },
  {
    "slug": "autoconnect",
    "title": "AutoConnect",
    "docTitle": "AutoConnect — car marketplace, designed and built · Ilia Okhanashvili",
    "description": "Case study: a car marketplace serving buyers and sellers at once — designed in Figma, shipped in React, and kept in sync by a Figma plugin that runs backwards.",
    "eyebrow": {
      "en": "Client project · 2026",
      "ka": "კლიენტის პროექტი · 2026"
    },
    "standfirst": {
      "en": "A marketplace with two users who want opposite things: a buyer with nothing but a budget, and a seller who already knows exactly what they have. I designed it in Figma, then shipped it in React — and wrote a plugin that keeps the design file honest.",
      "ka": "პლატფორმა ორი მომხმარებლით, რომლებსაც საპირისპირო რამ სურთ: მყიდველი, რომელსაც ბიუჯეტის გარდა არაფერი აქვს, და გამყიდველი, რომელმაც უკვე ზუსტად იცის, რა აქვს. დავაპროექტე Figma-ში, შემდეგ ავაწყვე React-ზე — და დავწერე დანამატი, რომელიც დიზაინის ფაილს პატიოსნად ინახავს."
    },
    "facts": [
      {
        "label": {
          "en": "Role",
          "ka": "როლი"
        },
        "value": {
          "en": "Product design + front-end",
          "ka": "პროდუქტის დიზაინი + ფრონტენდი"
        }
      },
      {
        "label": {
          "en": "Scope",
          "ka": "მოცულობა"
        },
        "value": {
          "en": "10 page types, 17 components, Figma plugin",
          "ka": "10 ტიპის გვერდი, 17 კომპონენტი, Figma-ს დანამატი"
        }
      },
      {
        "label": {
          "en": "Built with",
          "ka": "აწყობილია"
        },
        "value": {
          "en": "React · Vite",
          "ka": "React · Vite"
        }
      },
      {
        "label": {
          "en": "Tools",
          "ka": "ინსტრუმენტები"
        },
        "value": {
          "en": "Figma · Figma Plugin API",
          "ka": "Figma · Figma Plugin API"
        }
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
        "text": {
          "en": "The problem",
          "ka": "პრობლემა"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "A car marketplace has to serve two people who share nothing. The buyer arrives with a budget and a vague shape in mind and needs to be given a way to narrow. The seller arrives with one specific car and needs to be out of the flow in five minutes. Design for one and the other bounces.",
          "ka": "ავტომობილების პლატფორმამ ორ ადამიანს უნდა მოემსახუროს, რომლებსაც საერთო არაფერი აქვთ. მყიდველი მოდის ბიუჯეტითა და ბუნდოვანი წარმოდგენით და გზა სჭირდება, რომ შეავიწროოს. გამყიდველი მოდის ერთი კონკრეტული მანქანით და ხუთ წუთში გასვლა სჭირდება. ერთისთვის დააპროექტე და მეორე წავა."
        }
      },
      {
        "type": "h2",
        "text": {
          "en": "Decisions",
          "ka": "გადაწყვეტილებები"
        }
      },
      {
        "type": "decision",
        "num": {
          "en": "Decision 01",
          "ka": "გადაწყვეტილება 01"
        },
        "text": {
          "en": "One hero, two exits, unequal weight",
          "ka": "ერთი ჰერო, ორი გასასვლელი, არათანაბარი წონით"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "The homepage gives buyers and sellers different kinds of space rather than equal space. Buyers get the search bar — four filters, oversized, straddling the fold, because a buyer who does not narrow in the first ten seconds leaves. Sellers get a permanent button in the header instead.",
          "ka": "მთავარი გვერდი მყიდველსა და გამყიდველს თანაბარი ადგილის ნაცვლად სხვადასხვა ტიპის ადგილს აძლევს. მყიდველი იღებს საძიებო ველს — ოთხი ფილტრი, დიდი ზომის, ნაკეცის გადამკვეთი, რადგან მყიდველი, რომელიც პირველ ათ წამში არ ავიწროებს, მიდის. გამყიდველი კი ჰედერში მუდმივ ღილაკს იღებს."
        }
      },
      {
        "type": "p",
        "text": {
          "en": "That asymmetry is deliberate, and it follows from intent rather than from traffic. A seller has already decided to sell before they open the site; they need to find the door, not be persuaded through it. A buyer has decided nothing, so the page has to hand them a first move.",
          "ka": "ეს ასიმეტრია განზრახია და ტრაფიკიდან კი არა, განზრახვიდან გამომდინარეობს. გამყიდველს გაყიდვა საიტის გახსნამდე აქვს გადაწყვეტილი; მას კარის პოვნა სჭირდება და არა დარწმუნება. მყიდველს არაფერი აქვს გადაწყვეტილი, ამიტომ გვერდმა პირველი ნაბიჯი უნდა შესთავაზოს."
        }
      },
      {
        "type": "decision",
        "num": {
          "en": "Decision 02",
          "ka": "გადაწყვეტილება 02"
        },
        "text": {
          "en": "Buying a car is a comparison, not a purchase",
          "ka": "მანქანის ყიდვა შედარებაა და არა შესყიდვა"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "Nobody buys the first car they open. So compare is a destination in the product, not a checkbox bolted onto a card — you can hold candidates side by side and read the differences that actually decide it. Favourites exists for the same reason: it is the shortlist that feeds the comparison.",
          "ka": "პირველივე გახსნილ მანქანას არავინ ყიდულობს. ამიტომ შედარება პროდუქტში ცალკე განყოფილებაა და არა ბარათზე მიმაგრებული ჩექბოქსი — კანდიდატები გვერდიგვერდ დგება და სხვაობები, რომლებიც რეალურად წყვეტს, იკითხება. რჩეულებიც იმავე მიზეზით არსებობს: ეს ის მოკლე სიაა, რომელიც შედარებას კვებავს."
        }
      },
      {
        "type": "figure",
        "wide": true,
        "src": "/assets/work/ac-inventory.webp",
        "alt": "AutoConnect inventory page with filters and listing grid",
        "w": 1500,
        "h": 1683,
        "caption": {
          "en": "Inventory. Filters stay pinned on the left because narrowing is iterative — you change one thing and re-read the grid, over and over.",
          "ka": "კატალოგი. ფილტრები მარცხნივ მიმაგრებული რჩება, რადგან შევიწროება იტერაციულია — ცვლი ერთ პარამეტრს და ისევ კითხულობ ბადეს, ისევ და ისევ."
        }
      },
      {
        "type": "figure",
        "wide": true,
        "src": "/assets/work/ac-sell.webp",
        "alt": "Sell your car listing flow",
        "w": 1500,
        "h": 2098,
        "caption": {
          "en": "The seller's side. One long form rather than a wizard — the seller has all the answers already, and paging them across five steps only adds friction.",
          "ka": "გამყიდველის მხარე. ერთი გრძელი ფორმა ოსტატის ნაცვლად — გამყიდველს ყველა პასუხი უკვე აქვს, და მისი ხუთ საფეხურად დაშლა მხოლოდ ხახუნს მატებს."
        }
      },
      {
        "type": "decision",
        "num": {
          "en": "Decision 03",
          "ka": "გადაწყვეტილება 03"
        },
        "text": {
          "en": "I built it, and building it changed it",
          "ka": "ავაწყვე, და აწყობამ შეცვალა"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "I implemented the marketplace in React — ten page types across seventeen components. Building your own design is an unforgiving review: every piece of decoration you cannot justify becomes a piece of code you have to maintain, and the parts of a layout that only worked at one viewport width announce themselves immediately.",
          "ka": "პლატფორმა React-ზე ავაწყვე — ათი ტიპის გვერდი ჩვიდმეტ კომპონენტში. საკუთარი დიზაინის აწყობა შეუბრალებელი განხილვაა: ყოველი დეკორაცია, რომელსაც ვერ ამართლებ, კოდად იქცევა, რომელსაც უნდა უვლიდე, ხოლო განლაგების ის ნაწილები, რომლებიც მხოლოდ ერთ სიგანეზე მუშაობდა, თავად იძახებენ თავს."
        }
      },
      {
        "type": "decision",
        "num": {
          "en": "Decision 04",
          "ka": "გადაწყვეტილება 04"
        },
        "text": {
          "en": "A Figma plugin that runs backwards",
          "ka": "Figma-ს დანამატი, რომელიც უკუღმა მუშაობს"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "Design-to-code tools all push one way, and the design file starts rotting the day the build begins. So I wrote the plugin in the other direction: it reads the shipped homepage structure and rebuilds it as Figma layers — frames, type, fills, spacing — from the code that is actually live.",
          "ka": "დიზაინიდან კოდში გადამყვანი ინსტრუმენტები ყველა ერთი მიმართულებით მუშაობს, დიზაინის ფაილი კი აწყობის დაწყების დღიდან ლპება. ამიტომ დანამატი საპირისპირო მიმართულებით დავწერე: ის კითხულობს გამოშვებული მთავარი გვერდის სტრუქტურას და თავიდან აწყობს მას Figma-ს ფენებად — ფრეიმები, შრიფტი, შევსებები, დაშორებები — იმ კოდიდან, რომელიც რეალურად მუშაობს."
        }
      },
      {
        "type": "p",
        "text": {
          "en": "It means the Figma file can always be regenerated to match reality, so a conversation about a change starts from what exists rather than from what was drawn six weeks ago.",
          "ka": "ეს ნიშნავს, რომ Figma-ს ფაილი ყოველთვის შეიძლება რეალობის შესაბამისად თავიდან შეიქმნას, ე.ი. ცვლილებაზე საუბარი იმას ეყრდნობა, რაც არსებობს, და არა იმას, რაც ექვსი კვირის წინ დაიხატა."
        }
      },
      {
        "type": "aside",
        "items": [
          {
            "en": "It is one plugin for one page, not a general tool — the mapping from components to layers is written by hand. It solved the specific problem it was built for, which was this project's homepage drifting out of sync.",
            "ka": "ეს ერთი დანამატია ერთი გვერდისთვის და არა უნივერსალური ინსტრუმენტი — კომპონენტებიდან ფენებზე გადასვლა ხელითაა დაწერილი. მან გადაწყვიტა ის კონკრეტული პრობლემა, რისთვისაც შეიქმნა: ამ პროექტის მთავარი გვერდის სინქრონიდან გასვლა."
          }
        ]
      },
      {
        "type": "h2",
        "text": {
          "en": "What I would do differently",
          "ka": "რას გავაკეთებდი სხვაგვარად"
        }
      },
      {
        "type": "p",
        "text": {
          "en": "I designed the desktop layouts first and adapted them down, which is the wrong order for a marketplace — people browse cars on a phone, in a queue, on a sofa. The filter panel is the tell: pinned to the left it is excellent on a wide screen and awkward on a narrow one, and no amount of adapting fixes a structure that was decided at the wrong width.",
          "ka": "ჯერ დესკტოპის განლაგება დავხატე და შემდეგ დავამცირე, რაც პლატფორმისთვის არასწორი თანმიმდევრობაა — მანქანებს ხალხი ტელეფონით ათვალიერებს, რიგში, დივანზე. ფილტრების პანელი ამას ამხელს: მარცხნივ მიმაგრებული ის შესანიშნავია განიერ ეკრანზე და უხერხული ვიწროზე, და ვერანაირი ადაპტაცია ვერ შეასწორებს სტრუქტურას, რომელიც არასწორ სიგანეზე გადაწყდა."
        }
      }
    ],
    "next": {
      "slug": "solution-86",
      "title": "Solution 86",
      "label": {
        "en": "Next case study",
        "ka": "შემდეგი ქეისი"
      }
    }
  }
]
