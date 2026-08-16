---
name: work-page-layouts
description: >-
  Guide and technical reference for Layouts components (app/work/Layouts.tsx) and MDX page formatting.
  Explains how Layout primitives work (Columns, equalHeight, ColumnMax, ColumnFull, ColumnText, Image, FigureCaption, Graphic, Note),
  how responsive image grids and column tracks are structured, and how to format layouts for Archive galleries versus Featured case studies.
---

# Layout Components & MDX Formatting Guide

This guide details how components in `app/work/Layouts.tsx` work, how CSS column grids and responsive sizing are configured, and how components should be combined when formatting project pages in `app/work/*/page.mdx`.

---

## 1. Page Archetypes: Archive vs. Featured

The repository contains two distinct types of project pages:

| Aspect | **Archive Pages** (e.g. `asi-branding-and-marketing`) | **Featured Pages** (e.g. `RedEye`, `Hydropower-eLibrary`) |
| :--- | :--- | :--- |
| **Purpose** | Visual showcase of legacy/portfolio deliverables (print, branding, renders, logos). | Deep-dive UX/UI case studies detailing research, iteration, architecture, and code. |
| **Structure** | Linear image gallery grouped by category headings (`## Print Media`, `## Infographics`). | Multi-phase narrative (`Phase 1 Research`, `Phase 2 Design`, `Phase 3 Development`, `Phase 4 Feedback`). |
| **Layout Model** | Centered around `<Layouts.ColumnMax>` with standard `<Layouts.Columns equalHeight>` rows and single `<Layouts.Columns count={1}>` images. | Mixed column widths: `<Layouts.ColumnText>` for reading copy, `<Layouts.ColumnFull>` / `<Layouts.ColumnMax>` for diagrams & mockups. |
| **Components** | `PageHeader`, `PageDetails`, `Layouts.ColumnMax`, `Layouts.Columns`, `Layouts.Image`. | `PageHeader`, `PageDetails`, `Layouts.FigureCaption`, `Layouts.Note`, `Layouts.Graphic`, custom interactive demos/modules. |

---

## 2. Layout Container Widths & CSS Contexts

Global column tokens defined in `app/globals.css`:
- `--column-max: 1600px` (Maximum breakout width for gallery grids & high-fi mockups)
- `--column-full: 1080px` (Default content container width for article layouts & diagrams)
- `--column-text: 720px` (Reading column width for body text, personas, and figure images)
- `--gap: 8px` (Standard grid gap and adjacent sibling spacing)

### Container Primitives (`app/work/Layouts.tsx`)

#### `<Layouts.ArticleWrapper>`
- **Role**: Outermost section wrapper for the entire case study body below `<PageHeader>`.
- **Layout Behavior**:
  - Sets theme background (`--background-color-1`) and top/bottom borders (`--border-1`).
  - Constrains the page layout to `max-width: var(--column-full)` (1080px) with responsive padding.
  - Automatically constrains direct child headings and text to `max-width: var(--column-text)` (720px) via `.ColumnTextChildren`.

#### `<Layouts.ColumnText>`
- **Role**: Narrow reading-width container (`max-width: var(--column-text)` = 720px).
- **Layout Behavior**: Establishes a container query context (`@container LayoutColumn`). Used for persona card grids, narrow lists, and reading copy.

#### `<Layouts.ColumnFull>`
- **Role**: Standard content-width container (`max-width: var(--column-full)` = 1080px).
- **Layout Behavior**: Expands to span the full 1080px width of `ArticleLayout`. Establishes `@container LayoutColumn`. Used for workflow diagrams, feature card grids, and wireframe rows.

#### `<Layouts.ColumnMax>`
- **Role**: Full-bleed maximum width container (`max-width: var(--column-max)` = 1600px).
- **Layout Behavior**: Breaks out of the 1080px article container by spanning viewport width (`width: var(--clientWidth, 100vw)`) and centering with `left: 50%; transform: translateX(-50%)`. Establishes `@container LayoutColumn`. Used for complete archive image galleries and high-fidelity screen showcases.

---

## 3. Grid Rows: `<Layouts.Columns>`

`<Layouts.Columns>` is the core responsive grid component for images, cards, and content blocks.

```tsx
<Layouts.Columns count={3} equalHeight wrap>
  {/* children */}
</Layouts.Columns>
```

### Key Props & Behavior:
1. **`count` (1 to 8, default 1)**:
   - Sets standard CSS grid columns (`repeat(count, 1fr)`).
2. **`equalHeight` (boolean, default false)**:
   - When `true`, automatically computes the aspect ratio of each child image and assigns proportional `fr` tracks:
     `gridTemplateColumns: "${r1}fr ${r2}fr ..."`
   - Sets `aspectRatio: "${r}"`, `width: 100%`, `height: auto` on children.
   - **Result**: All images in the row render at the **exact same pixel height** and automatically scaled proportional widths, eliminating jagged row heights.
3. **`wrap` (boolean, default true)**:
   - Enables responsive container-query breakpoints under `@container LayoutColumn`:
     - `<= 800px`: 4-col → 2-col, 6-col → 3-col, 8-col → 4-col
     - `<= 700px`: 3-col → 1-col
     - `<= 600px`: 1 to 4-col (and `equalHeight`) → 1-col full width, 5 to 8-col → 2-col
4. **Adjacent Sibling Spacing (`&+&`)**:
   - The CSS rule `.Columns + .Columns` automatically applies `margin-top: 8px` between consecutive column rows.
   - **Rule**: Always wrap single standalone images in `<Layouts.Columns count={1}>` so that spacing between single images and multi-image rows is uniformly 8px.

---

## 4. Visual & Media Primitives

### `<Layouts.Image imageProps={{ src, sizes, alt }} screenshot={boolean}>`
- Optimized Next.js `<Image>` component with automatic blur placeholder handling.
- **`screenshot={true}` (default)**: Applies subtle rounded corners (`border-radius: 4px`) and elevation drop shadow (`box-shadow-2`).
- **`screenshot={false}`**: Renders flat without drop shadow (ideal for transparent graphics or logos).
- **`sizes`**: Must match responsive utils in `app/utils/imgSizes.ts` (e.g. `imgSizes.column1Max`, `imgSizes.column2Max`, `imgSizes.column3Max`, etc.).

### `<Layouts.FigureCaption imageProps={{ ... }} screenshot={boolean}>Caption</Layouts.FigureCaption>`
- Semantic `<figure>` container that places an image alongside an italicized caption.
- **Layout Behavior**: Flex row (`display: flex; gap: 8px 16px; flex-wrap: wrap`) inside `ColumnFull`. The image is constrained to 720px, and the `<figcaption>` flexes alongside (`flex: 1 1 0; min-width: 160px`), wrapping beneath on narrow screens.

### `<Layouts.Graphic imageProps={{ ... }}>`
- Presentation card for isolated icons, UI glyphs, or technical diagram assets.
- **Layout Behavior**: Renders a centered CSS grid card with background tint (`--background-color-3`), border radius, and internal padding (`padding: 24px`, responsive `8px` on `<= 600px`).

### `<Layouts.Note>`
- Aside callout container for key findings, takeaways, or methodology commentary.
- **Layout Behavior**: Semantic `<aside>` element with background tint (`--background-color-3`), border, rounded corners, and padding (`margin: 32px 0; padding: 24px`).

---

## 5. Composition Patterns

### Pattern A: Archive Gallery Rows (e.g. `asi-branding-and-marketing`)
Archive pages consist of clean visual grids grouped by section headings inside `<Layouts.ColumnMax>`:

```tsx
<Layouts.ArticleWrapper>

<PageDetails details={[
  { label: "Date", text: "YYYY-MM-DD" },
  { label: "Type", text: "Archive Project" }
]} />

## Section Heading

<Layouts.ColumnMax>
  {/* Single Image: Always wrap in Columns count={1} */}
  <Layouts.Columns count={1}>
    <Layouts.Image imageProps={{ src: Src.public_lfsmedia_project_1jpg, sizes: imgSizes.column1Max, alt: "Overview" }} />
  </Layouts.Columns>

  {/* Multi-Image Rows: Use equalHeight for matching heights */}
  <Layouts.Columns count={3} equalHeight>
    <Layouts.Image imageProps={{ src: Src.public_lfsmedia_project_2jpg, sizes: imgSizes.column3Max, alt: "Item A" }} />
    <Layouts.Image imageProps={{ src: Src.public_lfsmedia_project_3jpg, sizes: imgSizes.column3Max, alt: "Item B" }} />
    <Layouts.Image imageProps={{ src: Src.public_lfsmedia_project_4jpg, sizes: imgSizes.column3Max, alt: "Item C" }} />
  </Layouts.Columns>

  <Layouts.Columns count={2} equalHeight>
    <Layouts.Image imageProps={{ src: Src.public_lfsmedia_project_5jpg, sizes: imgSizes.column2Max, alt: "Item D" }} />
    <Layouts.Image imageProps={{ src: Src.public_lfsmedia_project_6jpg, sizes: imgSizes.column2Max, alt: "Item E" }} />
  </Layouts.Columns>
</Layouts.ColumnMax>

</Layouts.ArticleWrapper>
```

---

### Pattern B: Featured Narrative Sections (e.g. `RedEye`)
Featured case studies combine reading text with varied layout widths, graphic cards, figures, and callouts:

```tsx
<Layouts.ArticleWrapper>

## `Background & Context `The Core Problem

Standard body paragraphs automatically constrained to 720px text width.

{/* Figure with Side Caption */}
<Layouts.FigureCaption imageProps={{ src: Src.public_lfsmedia_RedEye_CobaltStrikeLogFilespng, alt: "Log files" }}>
  Even a small Cobalt Strike dataset could comprise thousands of raw log files.
</Layouts.FigureCaption>

{/* Editorial Callout */}
<Layouts.Note>
  ### Key Finding
  The primary challenge was transforming raw log records into an intuitive visual graph.
</Layouts.Note>

## `Phase 1 `Research

### `User Types `Personas

{/* 2-Column Persona Cards inside ColumnText */}
<Layouts.ColumnText>
  <Layouts.Columns count={2}>
    <div>
      <Layouts.Graphic imageProps={{ alt: "Operator", src: Src.public_lfsmedia_RedEye_PersonasRedTeamsvg }} />
      #### Red Team Operator
      Primary user analyzing intrusion logs and generating security assessment reports.
    </div>
    <div>
      <Layouts.Graphic imageProps={{ alt: "Specialist", src: Src.public_lfsmedia_RedEye_PersonasBlueTeamsvg }} />
      #### Blue Team Specialist
      Investigates alerts and validates remediation steps for identified vulnerabilities.
    </div>
  </Layouts.Columns>
</Layouts.ColumnText>

## `Phase 2 `Design

{/* Full-Width Diagram + 2-Column Entity Breakdown */}
<Layouts.ColumnFull>
  <Layouts.Graphic imageProps={{ src: Src.public_lfsmedia_RedEye_NetworkOntologypng, sizes: imgSizes.column1Full, alt: "Ontology" }} />
  
  <Layouts.Columns count={2}>
    <div>
      #### Primary Entities
      - **Team Server** - Central command server.
      - **Host** - Target system running compromised processes.
    </div>
    <div>
      #### Additional Concepts
      - **Context** - Execution privileges (e.g. SYSTEM*).
      - **Lifecycle** - Active vs Exited beacon states.
    </div>
  </Layouts.Columns>
</Layouts.ColumnFull>

{/* High-Fidelity UI Showcase in ColumnMax */}
<Layouts.ColumnMax>
  <Layouts.Columns count={2} equalHeight>
    <Layouts.Image imageProps={{ src: Src.public_lfsmedia_RedEye_HighFi01png, sizes: imgSizes.column2Max, alt: "Dashboard" }} />
    <Layouts.Image imageProps={{ src: Src.public_lfsmedia_RedEye_HighFi02png, sizes: imgSizes.column2Max, alt: "Timeline" }} />
  </Layouts.Columns>
</Layouts.ColumnMax>

</Layouts.ArticleWrapper>
```

---

## 6. Verification Checklist

When authoring or modifying work pages:
1. Run `yarn generateImgSrc` if any assets were added or renamed in `public/lfs-media/`.
2. Wrap every single image in `<Layouts.Columns count={1}>` for consistent vertical spacing.
3. Use `equalHeight` on multi-image `<Layouts.Columns>` whenever images have differing aspect ratios.
4. Verify responsive scaling in Playwright (`playwright-cli open --headed http://localhost:5555/work/<slug>`) across desktop (`1440px`), tablet (`768px`), and mobile (`390px`).
5. Run `yarn lint` to ensure code quality.
