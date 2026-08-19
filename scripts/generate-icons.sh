#!/bin/bash
# Regenerate favicon.ico, apple-touch-icon.png, favicon PNG set, site.webmanifest,
# and the OG/Twitter share image from public/img/icon-source.png.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$ROOT_DIR/public/img/icon-source.png"
PUBLIC="$ROOT_DIR/public"

if [[ ! -f "$SRC" ]]; then
  echo "error: source icon not found at $SRC" >&2
  exit 1
fi

command -v python3 >/dev/null || { echo "error: python3 is required" >&2; exit 1; }
python3 -c "import PIL" 2>/dev/null || { echo "error: Pillow (PIL) is required — pip install Pillow" >&2; exit 1; }

python3 "$ROOT_DIR/scripts/_generate_icons.py" "$SRC" "$PUBLIC"

echo "Icons and OG image regenerated in $PUBLIC"
