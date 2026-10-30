# AssetShelf website

Feature tour and App Store availability for AssetShelf, a native Mac library for images and audio.

**Live site:** https://jasonlotito.github.io/assetshelf-website/

## Site structure

The homepage links to eight workflow pages: Organize, Find, Images, Audio, Sprite Sheets, Convert, AI & Agents, and Library Care. The feature index searches 144 feature details. Screenshots open in an accessible enlarged viewer.

This repository contains the static website, sample-library screenshots, and an App Store availability page. Direct DMG/ZIP downloads are not distributed on this website. It does not contain the native app source or personal media.

## Preview

```sh
python3 -m http.server 4187 --bind 127.0.0.1
```

Open http://127.0.0.1:4187/. There are no build or runtime dependencies.

## Publish

Merge website changes into `main`. GitHub Pages serves the repository root; `.nojekyll` preserves the static files. Use relative URLs so assets and downloads work under the project-site path.

The initial site was generated from the AssetShelf workspace's `scripts/website/build.py` and `content.json`. That workspace retains the generator and offscreen screenshot harness; this repository holds the deployable output. Update the generator first when working from that workspace, then copy only publishing files here.

Distribution is planned through the Mac App Store. Keep the availability page honest: until a live listing exists, display “Coming to the Mac App Store” and no purchase/download badge. Add the verified App Store URL when available. Never add signing keys, credentials, native build directories, or personal libraries.

## Screenshot credits

Screenshots show real native app views with an isolated sample library. Playing-card artwork is Kenney's CC0 Boardgame Pack. Coin animation and sound examples are synthetic demonstration assets. See `credits.html` and `assets/screenshots/provenance.json`.
