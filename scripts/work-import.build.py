# -*- coding: utf-8 -*-
"""Bring Mythera and HyperJump into assets/work/ from the design sources.

The sources live outside the site, in Desktop\\My Portfolio, and are far too
large to ship: HyperJump's two modes are 1920x9743 full-page captures, and
Mythera's mockups are ~1900px PNGs. This is the one place that says how each
one was cut and sized, so the set can be rebuilt or re-cropped without anyone
guessing.

    python assets/work-import.build.py

Writes assets/work/hj-*.webp and assets/work/my-*.webp. Idempotent.
"""

import io
import os
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "work")
SRC = r"C:\Users\OXA\Desktop\My Portfolio"

# HyperJump ships as one enormous scroll capture per colour mode. Only the hero
# is wanted. It ends at 1085px: past the cloud that dips below the statue's
# shoulder, and just short of the marquee band that follows it — a few pixels
# further down and every plate carries a stripe of the next section.
HJ_HERO_H = 1085
HJ_WIDTH = 1600          # the plate is never shown wider than half a column
LOGO_PX = 640

MY_WIDTH = 1500          # web pages, shown as head-cropped proofs


def save(im, name, quality=82):
    path = os.path.join(OUT, name)
    im.save(path, "WEBP", quality=quality, method=6)
    return "%-26s %5dx%-5d %6.1f KB" % (
        name, im.size[0], im.size[1], os.path.getsize(path) / 1024)


def fit(im, width):
    if im.size[0] <= width:
        return im
    h = round(im.size[1] * width / im.size[0])
    return im.resize((width, h), Image.LANCZOS)


def hyperjump():
    lines = []
    for mode in ("Light", "Dark"):
        src = os.path.join(SRC, "HyperJump", "HyperJump %s Mode.png" % mode)
        im = Image.open(src).convert("RGB")
        hero = im.crop((0, 0, im.size[0], HJ_HERO_H))
        lines.append(save(fit(hero, HJ_WIDTH), "hj-%s.webp" % mode.lower()))

    # The mark in its five colourways. Square, so they read as one set.
    for name, f in (("black", "H-Black.png"), ("blue", "H-Blue.jpg"),
                    ("green", "H-Green.jpg"), ("purple", "H-Purple.jpg"),
                    ("red", "H-Red.jpg")):
        im = Image.open(os.path.join(SRC, "HyperJump", "Logo", f)).convert("RGB")
        im = im.resize((LOGO_PX, LOGO_PX), Image.LANCZOS)
        lines.append(save(im, "hj-logo-%s.webp" % name, 86))
    return lines


# The mockup name on disk is not the label on the site; this is the mapping,
# kept here so a rebuild cannot silently rename a screen.
MY_PAGES = [
    ("Landing Page",        "my-landing"),
    ("Server Section",      "my-server"),
    ("Cases Page",          "my-cases"),
    ("Open Case",           "my-open-case"),
    ("Open Case Animation", "my-case-opening"),
    ("Items Page",          "my-items"),
    ("Shop Page",           "my-shop"),
    ("Privileges",          "my-privileges"),
    ("Buy Privileges",      "my-buy-privileges"),
    ("Choose Area Section", "my-choose-server"),
    ("Top Up Balance Page", "my-top-up"),
    ("Exchange coins",      "my-exchange"),
    ("Download Page",       "my-download"),
    ("Sign up Page",        "my-sign-up"),
    ("Log in PAge",         "my-log-in"),
    ("Blog Page",           "my-blog"),
    ("Rules Page",          "my-rules"),
    ("Help Page",           "my-help"),
]


def mythera():
    base = os.path.join(SRC, "Mythera", "Mythera Website", "Mockups For Mythera")
    lines = []
    for src_name, out_name in MY_PAGES:
        im = Image.open(os.path.join(base, src_name + ".png")).convert("RGB")
        lines.append(save(fit(im, MY_WIDTH), out_name + ".webp"))
    return lines


# N&D ships as five 3840x2160 captures of one page's sections. They are 16:9
# and stay 16:9: cropping a composition that was centred for that frame is how
# a hero loses its own headline.
ND_WIDTH = 1600

ND_PAGES = [
    ("Hero Section",        "nd-hero"),
    ("The Team Section",    "nd-team"),
    ("The Team Hover",      "nd-team-hover"),
    ("Work Section",        "nd-work"),
    ("Contact Us Section",  "nd-contact"),
]


def nd():
    base = os.path.join(SRC, "N&D Portfolio Website", "Design")
    lines = []
    for src_name, out_name in ND_PAGES:
        im = Image.open(os.path.join(base, src_name + ".png")).convert("RGB")
        lines.append(save(fit(im, ND_WIDTH), out_name + ".webp"))
    return lines


def main():
    os.makedirs(OUT, exist_ok=True)
    out = hyperjump() + mythera() + nd()
    total = sum(os.path.getsize(os.path.join(OUT, l.split()[0])) for l in out)
    print("\n".join(out))
    print("%d files, %.1f MB" % (len(out), total / 1024 / 1024))


if __name__ == "__main__":
    main()
