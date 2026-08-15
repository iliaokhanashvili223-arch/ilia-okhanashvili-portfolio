"""Real project plates for the Work slider.

Replaces the abstract placeholders from work-placeholders.build.py with the
actual screens, without leaving the room the rest of the site is lit in:
near-black violet (#0B0A10) with one lilac family (#C4B0FF -> #7C5CD6) arriving
as light. The screens are objects standing in that dark room, not a flat
screenshot grid pasted over it.

Two constraints from the slider decide every measurement here:

  .slide-image is object-fit: cover AND scale(1.22), then drifts +-4.5% of its
  own size with the cursor. So the outer ~13.5% per side can be off screen at
  any moment -- nothing that must be seen may sit there. SAFE below is that
  guaranteed-visible box.

  A slide that is not the current one renders at brightness(0.68)
  saturate(0.72). Every plate has to still read when dimmed a third, which is
  why the screens are lit hard and the background stays near-black.

    python assets/work-covers.build.py

Writes assets/work/slide-1..N.webp and slide-1..N@bg.webp.
"""

import os

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

W, H = 900, 1350          # 2:3, the card's aspect -- fixed in index.html
BG_W, BG_H = 240, 360     # the blurred ambient copy behind the stage

# Guaranteed-visible box: 1.22x overscale (73.8px/side here) plus 4.5% drift.
SAFE = (122, 182, 778, 1168)

BG = np.array([0x0B, 0x0A, 0x10], dtype=np.float64)
LILAC = np.array([0xC4, 0xB0, 0xFF], dtype=np.float64)
DEEP = np.array([0x7C, 0x5C, 0xD6], dtype=np.float64)

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "work")

yy, xx = np.mgrid[0:H, 0:W].astype(np.float64)
u = xx / (W - 1)
v = yy / (H - 1)
ar = W / H


def blob(cx, cy, rx, ry, power=2.0):
    """A soft elliptical light, 1 at the centre, 0 at the rim."""
    d = ((u - cx) / rx) ** 2 + (((v - cy) * (1 / ar)) / (ry / ar)) ** 2
    return np.clip(1.0 - d, 0.0, 1.0) ** power


def room(fields):
    """The dark room, lit only by the fields handed in."""
    img = np.repeat(BG[None, None, :], H, 0).repeat(W, 1)
    for mask, colour, strength in fields:
        img = img + mask[..., None] * (colour - BG)[None, None, :] * strength
    return Image.fromarray(np.clip(img, 0, 255).astype(np.uint8), "RGB")


def finish(im, seed):
    """Vignette and grain, applied over the screens so they sit in the room."""
    a = np.asarray(im).astype(np.float64)

    vig = 1.0 - 0.55 * np.clip(
        ((u - 0.5) * 2.0) ** 2 * 0.55 + ((v - 0.5) * 2.0) ** 2 * 0.5, 0.0, 1.0
    )
    a *= vig[..., None]

    rng = np.random.default_rng(seed + 991)
    a += rng.normal(0.0, 3.1, (H, W, 1))
    return Image.fromarray(np.clip(a, 0, 255).astype(np.uint8), "RGB")


def rounded(size, radius):
    m = Image.new("L", size, 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, size[0] - 1, size[1] - 1], radius, fill=255)
    return m


def crop_to(im, ratio):
    """Crop from the top to a given w/h ratio -- a page becomes a screen."""
    w, h = im.size
    target = int(w / ratio)
    return im.crop((0, 0, w, min(h, target)))


def place(canvas, path, cx, cy, width, angle=0.0, dim=1.0, radius=18,
          glow=0.0, ratio=None):
    """Drop one screen into the room as a lit panel.

    cx, cy are the panel centre in canvas pixels; width is its width before
    rotation. dim darkens the panel so back layers fall away; glow adds a lilac
    halo behind it.
    """
    im = Image.open(os.path.join(OUT, path)).convert("RGB")
    if ratio:
        im = crop_to(im, ratio)
    h = max(1, round(im.size[1] * width / im.size[0]))
    im = im.resize((width, h), Image.LANCZOS)

    if dim != 1.0:
        im = Image.fromarray(
            np.clip(np.asarray(im).astype(np.float64) * dim, 0, 255).astype(np.uint8))

    panel = im.convert("RGBA")
    panel.putalpha(rounded(im.size, radius))

    # A hairline of lilac on the edge -- the same light the frame border uses.
    edge = Image.new("RGBA", im.size, (0, 0, 0, 0))
    ImageDraw.Draw(edge).rounded_rectangle(
        [0, 0, im.size[0] - 1, im.size[1] - 1], radius,
        outline=(196, 176, 255, int(90 * dim)), width=2)
    panel.alpha_composite(edge)

    pad = 170
    layer = Image.new("RGBA", (im.size[0] + pad * 2, im.size[1] + pad * 2), (0, 0, 0, 0))

    if glow > 0:
        halo = Image.new("RGBA", layer.size, (0, 0, 0, 0))
        ImageDraw.Draw(halo).rounded_rectangle(
            [pad, pad, pad + im.size[0], pad + im.size[1]], radius,
            fill=(124, 92, 214, int(210 * glow)))
        layer.alpha_composite(halo.filter(ImageFilter.GaussianBlur(70)))

    shadow = Image.new("RGBA", layer.size, (0, 0, 0, 0))
    shadow.paste((0, 0, 0, 190), (pad, pad + 26), panel.split()[3])
    layer.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(34)))

    layer.alpha_composite(panel, (pad, pad))
    layer = layer.rotate(angle, resample=Image.BICUBIC, expand=True)

    canvas.alpha_composite(layer, (cx - layer.size[0] // 2, cy - layer.size[1] // 2))


# ---------------------------------------------------------------------------
# One entry per slide, in slider order. Coordinates are hand-placed inside
# SAFE; each cover leads with the screen that says what the project is.
# ---------------------------------------------------------------------------

def cover_solution86(canvas):
    place(canvas, "s86-dash.webp", 470, 470, 690, angle=-7, dim=0.42, radius=12)
    place(canvas, "s86-approvals-web.webp", 560, 930, 640, angle=5, dim=0.34, radius=12)
    place(canvas, "s86-brand-3.webp", 232, 800, 400, angle=8, dim=0.5, radius=10)
    place(canvas, "s86-voice.webp", 500, 690, 330, angle=-3, glow=0.9, radius=30)


def cover_curatour(canvas):
    place(canvas, "ct-landing.webp", 430, 430, 700, angle=-7, dim=0.44, radius=12)
    place(canvas, "ct-map1.webp", 250, 830, 300, angle=9, dim=0.42, radius=26)
    place(canvas, "ct-mascot.webp", 640, 1000, 260, angle=-6, dim=0.5, radius=16)
    place(canvas, "ct-pick.webp", 480, 700, 335, angle=-2, glow=0.9, radius=30)


def cover_autoconnect(canvas):
    place(canvas, "ac-landing.webp", 470, 470, 700, angle=-7, dim=0.42,
          radius=12, ratio=16 / 10)
    place(canvas, "ac-product.webp", 300, 900, 460, angle=7, dim=0.36,
          radius=12, ratio=16 / 10)
    place(canvas, "ac-inventory.webp", 500, 800, 560, angle=-3, glow=0.85,
          radius=14, ratio=16 / 10)


COVERS = [
    ("solution86", cover_solution86,
     [(blob(0.50, 0.50, 0.95, 0.95, 2.2), DEEP, 0.14),
      (blob(0.52, 0.52, 0.42, 0.42, 2.0), LILAC, 0.10)]),
    ("curatour", cover_curatour,
     [(blob(0.48, 0.48, 1.00, 1.00, 2.2), DEEP, 0.13),
      (blob(0.52, 0.54, 0.40, 0.40, 2.0), LILAC, 0.11)]),
    ("autoconnect", cover_autoconnect,
     [(blob(0.52, 0.52, 0.95, 0.95, 2.2), DEEP, 0.14),
      (blob(0.55, 0.58, 0.40, 0.40, 2.0), LILAC, 0.10)]),
]


def main(dest=None):
    """Write the plates. Pass a directory to render somewhere else first --
    the slider's current files are only replaced when dest is omitted."""
    dest = dest or OUT
    os.makedirs(dest, exist_ok=True)
    for i, (name, draw, fields) in enumerate(COVERS, start=1):
        canvas = room(fields).convert("RGBA")
        draw(canvas)
        plate = finish(canvas.convert("RGB"), seed=i)

        card = os.path.join(dest, "slide-%d.webp" % i)
        plate.save(card, "WEBP", quality=86, method=6)

        bg = plate.resize((BG_W, BG_H), Image.LANCZOS).filter(ImageFilter.GaussianBlur(6))
        bgp = os.path.join(dest, "slide-%d@bg.webp" % i)
        bg.save(bgp, "WEBP", quality=72, method=6)

        print("%-14s %-16s %6.1f KB   %-18s %5.1f KB" % (
            name, os.path.basename(card), os.path.getsize(card) / 1024,
            os.path.basename(bgp), os.path.getsize(bgp) / 1024))


if __name__ == "__main__":
    import sys
    main(sys.argv[1] if len(sys.argv) > 1 else None)
