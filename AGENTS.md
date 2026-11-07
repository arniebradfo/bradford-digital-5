# AGENTS.md

Fast onboarding and architecture guide for AI coding agents and contributors.

---

## 1. Quick Start & Dev Commands

- **Node version:** `24.x` (see `.nvmrc`)
- **Dev Server:** `yarn dev` (runs on `http://localhost:5555`) — leave running for human verification.
- **Verification Workflow:** Do not run `yarn build` for routine validation as it takes too long. Instead, verify changes using `yarn dev` and `playwright-cli --headed` (e.g. `playwright-cli open --headed http://localhost:5555/...`, `playwright-cli screenshot`).
- **Lint:** `yarn lint`
- **Media CodeGen:** `yarn generateImgSrc` (must run after adding/modifying images in `media/`)


---

## 2. Tech Stack & Directory Structure

- **Framework:** Next.js 14 (App Router) + MDX (`@next/mdx`) + React 18 + TypeScript.
- **Styling:** Vanilla CSS Modules (`*.module.css`) + global design tokens in `app/globals.css`.
- **Animation:** `framer-motion` (used in parallax, hero imagery, button interactions).
- **Assets:** Tracked via Git LFS. Images in `media/lfs-media/` (imported, not in `public/`); video/PDF in `public/lfs-media/`. See [docs/MEDIA.md](docs/MEDIA.md).

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
├── docs/MEDIA.md            # Media storage, originals tag, Vercel limits & staging branches
├── media/
│   └── lfs-media/           # Git LFS images (imported via app/media; ≤3200px wide)
└── public/
    └── lfs-media/           # Git LFS video/PDF served by URL
```

---

## 3. Media Pipeline & Layout Skills

### The Media Quirk (`app/media`)
Static image imports are generated automatically by scanning `media/` and `public/`:
1. Run `yarn generateImgSrc` (executes `node ./app/media/generateImgSrc.js ./media ./public`).
2. This creates named exports in `app/media/index.ts` (e.g. `media_lfsmedia_AvyMap_AvyMapMockupMobilepng`).
3. Put new images in `media/lfs-media/<project>/`, **not** `public/` (files in `public/` deploy twice). Keep them ≤ 3200px wide (2× the 1600px max column); full-res originals are archived at git tag `originals-2026-11` — see [docs/MEDIA.md](docs/MEDIA.md).
4. Only `main`, `staging`, and `staging/*` branches deploy on Vercel (`vercel.json`).

### Case Study & Work Page Layouts
For all layout primitives (`<Layouts.Columns>`, `<Layouts.Image>`, `<Layouts.ColumnMax>`, `<Layouts.FigureCaption>`, etc.), responsive column tracks (`equalHeight`), and formatting guidelines for **Archive** vs. **Featured** pages:

> **Layouts Skill:** Follow the guide and component reference in [.agents/skills/work-page-layouts/SKILL.md](.agents/skills/work-page-layouts/SKILL.md).
