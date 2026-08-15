# TODOs

## Site Interaction
- intro animation
- color
- dark theme / light theme
- Image Carousel

## Page Layout
- Images sizes attribute?
- Image Rows of different aspect ratios?

## Content
- Blueprint Section
- AvyMap Hero with Mobile...
- more consistent content const organization?
- About section
- look at other notes from portfolio review

## HeroImage Parallax
- Parallax amount should depend on ratio of item size, not px amount
- Review render performance?
- Parallax should start on hover entire row - with bg?
- Hover Shadow

## Bugs & Code Quality
- [ ] Fix `I` component in `app/components/Text.tsx` applying `bold` instead of `italic` (`export const I = (p: TxtProps) => <Txt tag="em" bold fg={1} {...p} />;`)
- [ ] Add empty dependency array `[]` to `useLayoutEffect` in `app/utils/SetClientWidthCss.ts` so resize listener isn't rebound on every render
- [ ] Fix `mdx-components.tsx` image path resolution (`path.join(process.cwd(), fileName)`) when looking up `/lfs-media/...` without `public/` prefix
- [ ] Replace raw `<img>` in `app/components/ProjectGallery.tsx` with Next.js `<Image />` to fix ESLint warning and optimize LCP
- [ ] Migrate 32 archive case study MDX pages from raw `<img>` tags to `<Layouts.Image imageProps={{ src: Src...., sizes: ... }}>` using `yarn generateImgSrc` and `app/media`