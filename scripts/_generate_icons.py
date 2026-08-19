#!/usr/bin/env python3
"""Generate favicons, apple-touch-icon, site.webmanifest, and OG image
for the Wallflow website from the master icon PNG.

Invoked by generate-icons.sh — not meant to be run standalone with the
wrong argument order.
"""
import sys
import os
import json
from PIL import Image, ImageDraw, ImageFont

BG_NAVY = (11, 13, 20, 255)  # matches --color-bg-base


def flatten(img: Image.Image, bg=BG_NAVY) -> Image.Image:
    """Composite an RGBA image onto a solid background (no transparency)."""
    base = Image.new("RGBA", img.size, bg)
    base.alpha_composite(img)
    return base.convert("RGB")


def load_system_font(size: int) -> ImageFont.FreeTypeFont:
    candidates = [
        "/System/Library/Fonts/SFNS.ttf",
        "/System/Library/Fonts/SFNSDisplay.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    ]
    for path in candidates:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()


def main():
    src_path, public_dir = sys.argv[1], sys.argv[2]
    icon = Image.open(src_path).convert("RGBA")

    favicons_dir = os.path.join(public_dir, "img", "favicons")
    og_dir = os.path.join(public_dir, "img", "og")
    os.makedirs(favicons_dir, exist_ok=True)
    os.makedirs(og_dir, exist_ok=True)

    # -- raw PNG set (keeps transparency) ---------------------------------
    for size, name in [(16, "favicon-16.png"), (32, "favicon-32.png"), (48, "favicon-48.png")]:
        icon.resize((size, size), Image.LANCZOS).save(os.path.join(favicons_dir, name))

    icon.resize((192, 192), Image.LANCZOS).save(os.path.join(favicons_dir, "icon-192.png"))
    icon.resize((512, 512), Image.LANCZOS).save(os.path.join(favicons_dir, "icon-512.png"))

    # -- apple-touch-icon (flattened — iOS shows transparent corners as black otherwise)
    flat = flatten(icon)
    flat.resize((180, 180), Image.LANCZOS).save(os.path.join(public_dir, "apple-touch-icon.png"))

    # -- favicon.ico (multi-size, flattened; sips can't write true multi-res ICO) --
    ico_sizes = [(16, 16), (32, 32), (48, 48)]
    flat.save(
        os.path.join(public_dir, "favicon.ico"),
        sizes=ico_sizes,
    )

    # -- site.webmanifest ---------------------------------------------------
    manifest = {
        "name": "Wallflow",
        "short_name": "Wallflow",
        "icons": [
            {"src": "/img/favicons/icon-192.png", "sizes": "192x192", "type": "image/png"},
            {"src": "/img/favicons/icon-512.png", "sizes": "512x512", "type": "image/png"},
        ],
        "theme_color": "#0b0d14",
        "background_color": "#0b0d14",
        "display": "standalone",
    }
    with open(os.path.join(public_dir, "site.webmanifest"), "w") as f:
        json.dump(manifest, f, indent=2)

    # -- OG / Twitter image (1200x630) --------------------------------------
    W, H = 1200, 630
    og = Image.new("RGB", (W, H), BG_NAVY[:3])
    draw = ImageDraw.Draw(og, "RGBA")

    # Aurora gradient glow blobs (approximate the CSS ambient-glow).
    # Canvas is padded well beyond the ellipse so the blur fades to fully
    # transparent before the edge, instead of leaving a visible rectangle.
    from PIL import ImageFilter

    def blob(cx, cy, r, color):
        canvas = r * 3
        ellipse_d = int(r * 1.3)
        offset = (canvas - ellipse_d) // 2
        glow = Image.new("RGBA", (canvas, canvas), (0, 0, 0, 0))
        gdraw = ImageDraw.Draw(glow)
        gdraw.ellipse((offset, offset, offset + ellipse_d, offset + ellipse_d), fill=color)
        glow = glow.filter(ImageFilter.GaussianBlur(r * 0.35))
        og.paste(glow, (cx - canvas // 2, cy - canvas // 2), glow)

    blob(180, 120, 320, (46, 92, 255, 110))
    blob(1050, 520, 340, (255, 138, 61, 100))
    blob(650, 300, 260, (139, 79, 232, 70))

    # Icon
    icon_size = 200
    icon_thumb = icon.resize((icon_size, icon_size), Image.LANCZOS)
    icon_pos = (90, (H - icon_size) // 2)
    og.paste(icon_thumb, icon_pos, icon_thumb)

    # Headline
    text_x = 90 + icon_size + 60
    title_font = load_system_font(64)
    sub_font = load_system_font(30)

    draw.text((text_x, 250), "Wallflow", font=title_font, fill=(244, 245, 247, 255))
    draw.text(
        (text_x, 330),
        "Live wallpapers for your Mac",
        font=sub_font,
        fill=(244, 245, 247, 190),
    )

    og.save(os.path.join(og_dir, "og-image.png"), quality=92)

    print("Generated favicon set, apple-touch-icon, favicon.ico, site.webmanifest, og-image.png")


if __name__ == "__main__":
    main()
