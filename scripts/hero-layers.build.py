"""Split the hero photograph into three independently animatable layers:

    hero-room   — the empty room (subject inpainted away, gradient + dust kept)
    hero-human  — the human hand, alpha-matted, cropped to its own box
    hero-robot  — the machine hand, alpha-matted, cropped to its own box

The matte comes from Higgsfield's background remover; everything else is local.

The photograph has a spark baked into its pixels at the fingertip gap, and it
sits right on the machine's fingertip. Cutting it out takes the fingertip with
it, so the tip is rebuilt instead: its silhouette is measured off the clean part
of the finger, extended to a rounded cap, and repainted by carrying a clean
cross-section forward along the finger's own axis.
"""
import json
import math
import os

import numpy as np
from PIL import Image, ImageFilter

SRC = r"C:\Users\OXA\Desktop\Ilia Okhanashvili Portfolio\assets\hero-v2.png"
CUT = "cutout.png"
OUT = r"C:\Users\OXA\Desktop\Ilia Okhanashvili Portfolio\assets"

SPLIT_X = 930          # columns 911..946 are empty — any of them separates the hands
STAR = (965.0, 607.0)  # centre of the baked flare

# --- machine index finger, measured off the uncontaminated columns x >= 1000 ---
# The finger is a rod at a shallow angle; the nose it ends in is not symmetric.
# Its upper edge runs almost straight to the point while the lower edge sweeps
# up to meet it, so the tip sits high on the section — a bevel, not a bullet.
# Both edges are therefore modelled separately, each anchored to the silhouette
# actually measured at A_S so the rebuilt stretch joins without a step.
FINGER_O = np.array([1010.0, 587.0])          # a point on the centreline
FINGER_U = np.array([-0.8639, 0.5037])        # unit vector, pointing at the tip
FINGER_N = np.array([0.5037, 0.8639])         # unit normal
A_S = 10.0            # where the flare's reach starts, and the nose is modelled
A_TIP = 33.0          # the point itself, read off the photograph
RHO_TIP = -8.8        # …which sits this far above the section's centre
BLEND_A = (-10.0, 2.0)   # axial band over which the repaint takes over
SAMPLE_A = -20.0         # the clean cross-section carried into the nose
STAR_R = 60              # everything of the flare lives inside this

rgb = np.asarray(Image.open(SRC).convert("RGB"), dtype=np.float32)
alpha = np.asarray(Image.open(CUT).convert("RGBA").getchannel("A"), dtype=np.float32) / 255.0
H, W = alpha.shape
yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)


# ------------------------------------------------------- finger rebuild ----
# Axial / radial coordinates of every pixel, in the finger's own frame.
dx, dy = xx - FINGER_O[0], yy - FINGER_O[1]
axial = dx * FINGER_U[0] + dy * FINGER_U[1]
radial = dx * FINGER_N[0] + dy * FINGER_N[1]


def measure_edges(a, span=1.5):
    """Where the matte's two edges sit across the finger at this axial spot."""
    hit = []
    for aa in np.arange(a - span, a + span + 0.01, 0.5):
        rs = np.arange(-45.0, 45.0, 0.25)
        p = FINGER_O + aa * FINGER_U + rs[:, None] * FINGER_N
        px, py = p[:, 0], p[:, 1]
        ix, iy = px.astype(int), py.astype(int)
        fx_, fy_ = px - ix, py - iy
        v = (alpha[iy, ix] * (1 - fx_) * (1 - fy_) + alpha[iy, ix + 1] * fx_ * (1 - fy_)
             + alpha[iy + 1, ix] * (1 - fx_) * fy_ + alpha[iy + 1, ix + 1] * fx_ * fy_)
        on = rs[v >= 0.5]
        if len(on):
            hit.append((on.min(), on.max()))
    ups, los = zip(*hit)
    return float(np.mean(ups)), float(np.mean(los))


up_s, lo_s = measure_edges(A_S)
up_src, lo_src = measure_edges(SAMPLE_A)

# The nose: both edges sweep to the same point on a circular closure, each from
# wherever the matte says it was at A_S.
t = np.clip((axial - A_S) / (A_TIP - A_S), 0.0, 1.0)
k = np.sqrt(np.maximum(1.0 - t * t, 0.0))
edge_up = RHO_TIP + (up_s - RHO_TIP) * k
edge_lo = RHO_TIP + (lo_s - RHO_TIP) * k

inside = np.minimum(radial - edge_up, edge_lo - radial)
model_a = np.clip(inside + 0.5, 0.0, 1.0) * np.clip((A_TIP + 0.6 - axial) * 2.0, 0.0, 1.0)

# Past A_S the model is the whole truth — which is also what clears the flare
# and its spikes out of the gap, since the band reaches well beyond the tip.
# Before A_S the matte is clean and stays untouched.
on_robot = xx >= SPLIT_X   # the axial frame runs on past the gap; the rebuild must not
band = on_robot & (axial >= A_S) & (axial < A_TIP + STAR_R) & (np.abs(radial) < 80)
alpha = np.where(band, model_a, alpha)

# Repaint by carrying a clean cross-section into the nose: same relative
# position between the two edges, so the rim highlights wrap the tip.
frac = (radial - edge_up) / np.maximum(edge_lo - edge_up, 1e-3)
src_r = up_src + np.clip(frac, -0.05, 1.05) * (lo_src - up_src)
sx = np.clip(FINGER_O[0] + SAMPLE_A * FINGER_U[0] + src_r * FINGER_N[0], 0, W - 2)
sy = np.clip(FINGER_O[1] + SAMPLE_A * FINGER_U[1] + src_r * FINGER_N[1], 0, H - 2)

x0, y0 = np.floor(sx).astype(int), np.floor(sy).astype(int)
fx, fy = (sx - x0)[..., None], (sy - y0)[..., None]
carried = (rgb[y0, x0] * (1 - fx) * (1 - fy) + rgb[y0, x0 + 1] * fx * (1 - fy)
           + rgb[y0 + 1, x0] * (1 - fx) * fy + rgb[y0 + 1, x0 + 1] * fx * fy)

paint = np.clip((axial - BLEND_A[0]) / (BLEND_A[1] - BLEND_A[0]), 0.0, 1.0)
paint = (paint * (on_robot & (axial > BLEND_A[0]) & (axial < A_TIP + STAR_R)
                  & (np.abs(radial) < 80)))[..., None]
rgb = rgb * (1 - paint) + carried * paint


# ------------------------------------------------------- connected parts ----
def largest_component(mask):
    """Flood fill from the biggest seed; returns the component's boolean mask."""
    lbl = np.zeros(mask.shape, dtype=np.int32)
    cur, best = 0, (0, 0)
    ys, xs = np.nonzero(mask)
    seen = np.zeros(mask.shape, dtype=bool)
    for y0_, x0_ in zip(ys, xs):
        if seen[y0_, x0_]:
            continue
        cur += 1
        stack, size = [(y0_, x0_)], 0
        seen[y0_, x0_] = True
        while stack:
            y, x = stack.pop()
            lbl[y, x] = cur
            size += 1
            for ddy in (-1, 0, 1):
                for ddx in (-1, 0, 1):
                    ny, nx = y + ddy, x + ddx
                    if 0 <= ny < mask.shape[0] and 0 <= nx < mask.shape[1] \
                            and mask[ny, nx] and not seen[ny, nx]:
                        seen[ny, nx] = True
                        stack.append((ny, nx))
        if size > best[1]:
            best = (cur, size)
    return lbl == best[0]


def clean(mask_alpha):
    """Keep only the dominant blob — kills anything the flare left behind."""
    small = np.asarray(
        Image.fromarray((mask_alpha * 255).astype(np.uint8)).resize((W // 4, H // 4), Image.BOX)
    ) > 60
    big = largest_component(small)
    grown = np.asarray(
        Image.fromarray(big.astype(np.uint8) * 255)
        .resize((W, H), Image.BILINEAR)
        .filter(ImageFilter.MaxFilter(5)),
        dtype=np.float32,
    ) / 255.0
    return mask_alpha * np.clip(grown * 3.0, 0.0, 1.0)


human_a = clean(np.where(xx < SPLIT_X, alpha, 0.0))
robot_a = clean(np.where(xx >= SPLIT_X, alpha, 0.0))


# ----------------------------------------------------------------- room ----
def _down(a):
    h, w = a.shape[:2]
    a = a[: h - h % 2, : w - w % 2]
    return a.reshape(h // 2, 2, w // 2, 2, *a.shape[2:]).mean(axis=(1, 3))


def _up(a, shape):
    im = a.astype(np.float32)
    if im.ndim == 2:
        return np.asarray(Image.fromarray(im, "F").resize((shape[1], shape[0]), Image.BILINEAR))
    return np.dstack([
        np.asarray(Image.fromarray(im[..., c], "F").resize((shape[1], shape[0]), Image.BILINEAR))
        for c in range(im.shape[2])
    ])


def push_pull(img, w, levels=10):
    """Pyramid hole-filling: coarse levels extrapolate the room behind the hands."""
    pi, pw = [img * w[..., None]], [w]
    for _ in range(levels):
        pi.append(_down(pi[-1]))
        pw.append(_down(pw[-1]))
    out = pi[-1] / np.maximum(pw[-1], 1e-5)[..., None]
    for l in range(levels - 1, -1, -1):
        up = _up(out, pw[l].shape)
        conf = np.clip(pw[l] * 4.0, 0.0, 1.0)[..., None]
        here = pi[l] / np.maximum(pw[l], 1e-5)[..., None]
        out = here * conf + up * (1.0 - conf)
    return out


# The hands throw a tight rim glow onto the wall behind them, and the flare
# throws a wide one; grow the hole so both are rebuilt rather than left as
# ghosts for the hands to walk away from.
subject = np.clip(human_a + robot_a, 0.0, 1.0)
subject = np.maximum(subject, (np.hypot(xx - STAR[0], yy - STAR[1]) < STAR_R + 45).astype(np.float32))
grown = np.asarray(
    Image.fromarray((subject * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(9))
    .resize((W // 8, H // 8), Image.BOX).filter(ImageFilter.MaxFilter(7))
    .resize((W, H), Image.BILINEAR).filter(ImageFilter.GaussianBlur(18)),
    dtype=np.float32,
) / 255.0
known = np.clip(1.0 - grown * 2.2, 0.0, 1.0)

room = push_pull(np.asarray(Image.open(SRC).convert("RGB"), dtype=np.float32), known)
feather = np.asarray(
    Image.fromarray((known * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(26)),
    dtype=np.float32,
) / 255.0
feather = np.clip((feather - 0.55) / 0.4, 0.0, 1.0)[..., None]
room = np.asarray(Image.open(SRC).convert("RGB"), dtype=np.float32) * feather + room * (1.0 - feather)


# ------------------------------------------------- where they finally meet ----
# The hands close along the line joining the two fingertips, so they meet point
# to point rather than one poking the other's side. How far they can travel
# before the silhouettes overlap is measured, not assumed: slide the human hand
# up that line a pixel at a time and stop on the frame before they intersect.
DIR = np.array([71.0, -19.0])
DIR = DIR / np.hypot(*DIR)
Hm, Rm = human_a > 0.5, robot_a > 0.5


def shift(m, ox, oy):
    out = np.zeros_like(m)
    out[max(0, oy):H + min(0, oy), max(0, ox):W + min(0, ox)] = \
        m[max(0, -oy):H - max(0, oy), max(0, -ox):W - max(0, ox)]
    return out


OX = OY = 0
for t in range(1, 400):
    ox, oy = int(round(t * DIR[0])), int(round(t * DIR[1]))
    if np.any(shift(Hm, ox, oy) & Rm):
        break
    OX, OY = ox, oy

# Where they meet: the first pixels to overlap, carried back into the frame the
# page composes in, where each hand has travelled half the distance.
ox, oy = int(round((t + 3) * DIR[0])), int(round((t + 3) * DIR[1]))
cys, cxs = np.nonzero(shift(Hm, ox, oy) & Rm)
contact = (float(cxs.mean()) - OX / 2.0, float(cys.mean()) - OY / 2.0)


# --------------------------------------------------------------- export ----
def save(img_rgb, a, name, box=None, widths=(1920, 960)):
    arr = np.dstack([img_rgb, (a * 255.0)[..., None]]) if a is not None else img_rgb
    im = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGBA" if a is not None else "RGB")
    if box:
        im = im.crop(box)
    meta = {}
    for i, target in enumerate(widths):
        scale = target / W
        size = (max(1, round(im.width * scale)), max(1, round(im.height * scale)))
        path = os.path.join(OUT, name if i == 0 else name.replace(".webp", "@half.webp"))
        im.resize(size, Image.LANCZOS).save(path, "WEBP", quality=88, method=6)
        meta[target] = [list(size), round(os.path.getsize(path) / 1024, 1)]
    return meta


def bbox(a, pad=2):
    ys, xs = np.nonzero(a > 0.004)
    return (int(max(0, xs.min() - pad)), int(max(0, ys.min() - pad)),
            int(min(W, xs.max() + 1 + pad)), int(min(H, ys.max() + 1 + pad)))


hb, rb = bbox(human_a), bbox(robot_a)
report = {
    "source": [W, H],
    "room": save(room, None, "hero-room.webp"),
    "human": {"box": hb, "files": save(rgb, human_a, "hero-hand-human.webp", hb)},
    "robot": {"box": rb, "files": save(rgb, robot_a, "hero-hand-robot.webp", rb)},
    "edges_at_A_S": [round(up_s, 2), round(lo_s, 2)],
    "rebuilt_tip": [round(float(FINGER_O[0] + A_TIP * FINGER_U[0] + RHO_TIP * FINGER_N[0]), 1),
                    round(float(FINGER_O[1] + A_TIP * FINGER_U[1] + RHO_TIP * FINGER_N[1]), 1)],
    "closure_px": [OX, OY],
    "contact_px": [round(contact[0], 1), round(contact[1], 1)],
}

# Everything the stylesheet and the script need, in their own units.
report["css"] = {
    "layer-human": {"left": 0.0, "top": round(hb[1] / H * 100, 3),
                    "width": round((hb[2] - hb[0]) / W * 100, 3),
                    "height": round((hb[3] - hb[1]) / H * 100, 3)},
    "layer-robot": {"left": round(rb[0] / W * 100, 3), "top": round(rb[1] / H * 100, 3),
                    "width": round((rb[2] - rb[0]) / W * 100, 3),
                    "height": round((rb[3] - rb[1]) / H * 100, 3)},
    "spark-x": round(contact[0] / W * 100, 3),
    "spark-y": round(contact[1] / H * 100, 3),
    "AX": round(OX / W * 100, 3),
    "AY": round(OY / H * 100, 3),
}
print(json.dumps(report, indent=2))
