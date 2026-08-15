# AGENTS.md

Fast onboarding and architecture guide for AI coding agents and contributors.

---

## 1. Quick Start & Dev Commands

- **Node version:** `24.x` (see `.nvmrc`)
- **Dev Server:** `yarn dev` (runs on `http://localhost:5555`) — leave running for human verification.
- **Verification Workflow:** Do not run `yarn build` for routine validation as it takes too long. Instead, verify changes using `yarn dev` and `playwright-cli --headed` (e.g. `playwright-cli open --headed http://localhost:5555/...`, `playwright-cli screenshot`).
- **Lint:** `yarn lint`
- **Media CodeGen:** `yarn generateImgSrc` (must run after adding/modifying files in `public/`)


---

## 2. Tech Stack & Directory Structure

- **Framework:** Next.js 14 (App Router) + MDX (`@next/mdx`) + React 18 + TypeScript.
- **Styling:** Vanilla CSS Modules (`*.module.css`) + global design tokens in `app/globals.css`.
- **Animation:** `framer-motion` (used in parallax, hero imagery, button interactions).
- **Assets:** Tracked via Git LFS in `public/lfs-media/`.

```
├── app/
│   ├── [tag]/page.tsx       # Dynamic tag/category pages (/PNNL, /ASI, etc.)
│   ├── components/          # Reusable UI (HeroImage, LinkButton, ProjectGallery, TagNav, Text, etc.)
│   ├── data/
│   │   └── projects.ts      # Central project catalog (ALL_PROJECTS) and tag configs
│   ├── media/
│   │   ├── generateImgSrc.js # Generator script for static media imports
│   │   ├── index.ts         # Generated TypeScript static image exports
│   │   └── examples.mdx     # Generated MDX image snippet reference
│   ├── utils/               # Parallax hooks, mouse tracking, responsive imgSizes, theme utils
│   ├── views/               # Page sections (Header, Footer, HomeHeader, ProjectFeatureSections, etc.)
│   ├── work/
│   │   ├── page.tsx         # All Work gallery (/work)
│   │   ├── Layouts.tsx      # MDX Layout primitives (<Layouts.Image>, <Layouts.Columns>, etc.)
│   │   └── [project-slug]/  # Case studies (page.mdx + optional custom components)
├── mdx-components.tsx       # Next.js MDX custom component map
└── public/
    └── lfs-media/           # Git LFS binary images & media assets
```

---

## 3. Media Pipeline & Case Study Image Pattern

### The Media Quirk (`app/media`)
Static image imports are generated automatically by scanning `public/`:
1. Run `yarn generateImgSrc` (executes `node ./app/media/generateImgSrc.js ./public`).
2. This creates named exports in `app/media/index.ts` (e.g. `public_lfsmedia_AvyMap_AvyMapMockupMobilepng`).

### Image Component Pattern in MDX
When authoring or updating project MDX pages in `app/work/*/page.mdx`:

```tsx
import { Layouts } from "../Layouts";
import { imgSizes } from "../../utils/imgSizes";
import * as Src from "../../media";

{/* Full width */}
<Layouts.ColumnFull>
  <Layouts.Image imageProps={{ src: Src.public_lfsmedia_HydroELibrary_LowFiLayoutOptionspng, sizes: imgSizes.column1Full, alt: "Mockup" }} />
</Layouts.ColumnFull>

{/* Multi-column grid */}
<Layouts.Columns count={2}>
  <Layouts.Image imageProps={{ src: Src.public_lfsmedia_AvyMap_AvyMapMockupMobilepng, sizes: imgSizes.column2Max, alt: "Mobile view" }} />
  <Layouts.Image imageProps={{ src: Src.public_lfsmedia_AvyMap_AvyMapMockupDesktoppng, sizes: imgSizes.column2Max, alt: "Desktop view" }} />
</Layouts.Columns>

{/* With caption */}
<Layouts.FigureCaption imageProps={{ src: Src.public_lfsmedia_AvyMap_AvyMapSlopeExamplepng, alt: "Slope diagram" }}>
  Caption text goes here.
</Layouts.FigureCaption>
```

> **Note on Archive Pages:** Many migrated archive pages in `app/work/` still use raw `<img src="/lfs-media/..." />` tags. These should eventually be migrated to `<Layouts.Image imageProps={{ src: Src.... }}>` for Next.js image optimization and blur-up placeholder support.
