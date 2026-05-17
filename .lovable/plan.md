# Optimize largest image assets

Goal: shrink the largest images in `src/assets/` to the 150–250 KB range, replace originals, and update all imports.

## Findings before we start

- **`galileo-logo.png` (609 KB)** has **zero references** in the codebase — propose deleting outright.
- **`lagos-skyline.png` (2.4 MB)** has a sibling **`lagos-skyline.jpg` (381 KB)** that already exists. Need to confirm which is actually used and drop the other.
- **5 of the large "SVGs" are true vector files** (`tool-payments-web.svg`, `tool-trips-web.svg`, `tool-insights-web.svg`, `tool-packages-web.svg`, `tool-workspace-web.svg`). Converting them to raster WebP would lose crispness AND likely produce larger files. **Better treatment: run `svgo` to minify in place** (often 50–80% reduction on Figma exports).
- **2 "SVGs" are raster-in-SVG wrappers** (`features-hero.svg`, `tool-team-web.svg`, both contain base64 PNG data). These genuinely should become WebP.

## What I'll do

### 1. PNG → WebP (convert + replace + rewire imports)

Convert at quality 82, max width 1600px. Target ≤250 KB each.

```text
src/assets/lagos-skyline.png            2415 KB  →  .webp
src/assets/v3/audience-agents.png       1587 KB  →  .webp
src/assets/independent-hero.png         1545 KB  →  .webp
src/assets/nav/nav-solutions-portrait.png 1336 KB →  .webp
src/assets/tool-packages-web.png         572 KB  →  .webp
src/assets/tool-trips-web.png            527 KB  →  .webp
src/assets/tool-itineraries-web.png      527 KB  →  .webp
src/assets/tool-payments-web.png         519 KB  →  .webp
src/assets/tool-trips.png                502 KB  →  .webp
src/assets/tool-links-web.png            494 KB  →  .webp
src/assets/tool-itineraries-desktop.png  450 KB  →  .webp
src/assets/home-trust-storefront.png     434 KB  →  .webp
src/assets/home-trust-share-itinerary.png 391 KB →  .webp
src/assets/home-trust-phone.png          321 KB  →  .webp
src/assets/home-trust-backoffice.png     321 KB  →  .webp
public/og-default.png                    1051 KB → keep as PNG (OG image, social crawlers prefer PNG/JPG)
```

### 2. Raster-in-SVG → WebP

```text
src/assets/features-hero.svg            2072 KB  →  features-hero.webp
src/assets/tool-team-web.svg             748 KB  →  tool-team-web.webp
```

### 3. True vector SVGs — minify with svgo (NOT convert)

```text
src/assets/tool-payments-web.svg         494 KB  →  svgo
src/assets/tool-trips-web.svg            482 KB  →  svgo
src/assets/tool-insights-web.svg         437 KB  →  svgo
src/assets/tool-packages-web.svg         406 KB  →  svgo
src/assets/tool-workspace-web.svg        401 KB  →  svgo
```

### 4. Cleanup

- Delete `src/assets/galileo-logo.png` (unused).
- Resolve `lagos-skyline.png` vs `lagos-skyline.jpg` duplication (keep the one actually imported, drop the other).

### 5. Update imports

For every renamed file, update the import statement in its consumer (mostly 1 reference each, all in `src/`).

## Questions for you

1. **OG image**: I'd keep `public/og-default.png` as PNG since some social crawlers don't render WebP previews well. OK?
2. **Vector SVGs**: confirm svgo-minify (preserves quality, stays crisp on retina) instead of forcing them to raster WebP?

If both are fine I'll execute immediately.
