# Wallflow website

Marketing/download site for [Wallflow](../LIVE%20WALLPAPERS), built with Next.js (App Router) + TypeScript, no CSS framework.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Rebuild icons / OG image

Regenerate `favicon.ico`, `apple-touch-icon.png`, `site.webmanifest`, and the OG/Twitter image from `public/img/icon-source.png`:

```bash
./scripts/generate-icons.sh
```

## Rebuild the download DMG

Builds a drag-to-Applications installer DMG from the Wallflow app bundle and drops it (plus a `.sha256` checksum) into `public/downloads/`:

```bash
./scripts/build-dmg.sh
```

By default it reads the app from `/Users/s3samay/Desktop/LIVE WALLPAPERS/build/Wallflow.app`. Override with `SRC_APP=/path/to/Wallflow.app ./scripts/build-dmg.sh`.

After rebuilding, copy the printed SHA-256 checksum and file size into `app/components/Download.tsx` (`DMG_SIZE` / `DMG_SHA256` constants) — this is a static site, so that text isn't generated automatically.

**Note on notarization:** the current build is only Apple-Development signed, not notarized, so macOS Gatekeeper will show a first-run warning until it's signed with a Developer ID and notarized via `xcrun notarytool` + `xcrun stapler`. Once you have a notarized build, just re-run `build-dmg.sh` against it — no site changes needed.

## Build for production

```bash
npm run build
npm run start
```
