
## Figma Sizes
- Zoom 115% for 8.5”x11”
- 96px = 1” = 72pt
- 8.5”x11” = 816px x 1056px

## Resume Scanners
- [Affinda Document Extractor Free Demo](https://www.affinda.com/solutions/recruitment)
- [Instant Resume Review (indeed.com)](https://www.indeed.com/career-services/resume-help/instant-report/?collectorID=rescan)

## Process
- Save using “Figma to Code” plugin 
  - Select the inner layout, not the whole page
  - Settings: HTML, Optimize Layout
- Override in code
  - convert link divs to a links with href=””
  - replace logo with proper svg logo
    - select the jb-vector path, right click > Copy as SVG
    - paste svg over placeholder div
    - add negative margin to svg: style="margin-left:-14px"
  - keep the font @import css
  - keep the centering wrapper element
- Export from browser
  - Open file directly in a web browser
  - Print > Save as PDF > no margins, no scaling