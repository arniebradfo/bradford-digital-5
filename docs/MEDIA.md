# Media: storage, originals & deploy limits

How images and video are stored in this repo, where the full-resolution originals live, and why — so the site stays inside the **Vercel Hobby (free)** and **GitHub free** tiers.

## TL;DR

| What | Where | Deployed? |
|---|---|---|
| Images used on the site (jpg/png/gif/svg) | `media/lfs-media/**` (Git LFS) | Only the ones imported, via the Next.js build (`/_next/static/media/…`) |
| Video, PDFs, files linked by URL | `public/lfs-media/**` (Git LFS) | Yes, everything in `public/` ships as-is |
| Full-resolution originals | Git tag **`originals-2026-11`** | No |
| Import index (`Src.*`) | `app/media/index.ts` (generated) | — |

**Adding an image:** drop it in `media/lfs-media/<project>/`, keep it ≤ 3200px wide (2× the 1600px max column), run `yarn generateImgSrc`, then use `Src.media_lfsmedia_<project>_<FileName>` in MDX.

## Full-resolution originals: tag `originals-2026-11`

In Nov 2026 every web image was downsized (≤ 3200px wide — 2× the widest 1600px layout column; height unconstrained so tall boards keep full width; JPG mozjpeg q82, PNG lossless re-compress) and three screen-recording MP4s were re-encoded (H.264 CRF 26, SSIM ≥ 0.989). The untouched originals are preserved in git history at tag `originals-2026-11` (commit `8078da8`), when they still lived in `public/lfs-media/`.

Vercel only clones the commit it builds, so the originals are never downloaded or deployed — but they stay on GitHub (Git LFS) and are recoverable at any time:

```bash
# one file
git checkout originals-2026-11 -- public/lfs-media/illustration/James-Bradford-Illustration_Flower-2.jpg

# a whole folder
git checkout originals-2026-11 -- public/lfs-media/illustration/

# browse without touching your working tree
git show originals-2026-11:public/lfs-media/illustration/James-Bradford-Illustration_Flower-2.jpg > /tmp/flower.jpg   # needs `git lfs` smudge: prefer the checkout form
```

> Don't delete this tag. Deleting it (and later pruning LFS) is the only way the originals would be lost.

Size at the time: ~2.0 GB of images + ~130 MB of video in originals, vs ~420 MB images + ~50 MB video after.

## Why images live in `media/` instead of `public/`

`app/media/index.ts` statically imports every image (`export { default as … } from "../../media/lfs-media/…"`). A static import makes Next.js copy the file into the build as `/_next/static/media/<name>.<hash>.<ext>` and gives `next/image` the width/height/blur placeholder automatically.

Everything in `public/` is **also** deployed verbatim. When the images lived in `public/`, each one shipped twice. Keeping them outside `public/` means:

- each used image ships once (hashed, immutable-cached);
- images that are no longer referenced don't ship at all.

Only files that must be reachable by a fixed URL (video `src="/lfs-media/…mp4"`, the résumé PDF, logos/favicons) belong in `public/`.

## Why: the Aug–Nov 2026 Vercel limit

The `migrate-gatsby-posts` branch brought in the full archive of older projects (≈ 820 images, 2.1 GB, mostly full-resolution scans and exports — e.g. 5550×3450 illustration JPGs at 18–24 MB each). Each Vercel deployment of that branch stored ~4 GB (2 GB in `public/` + 2 GB again via the static-import copies). Three preview deployments pushed the Hobby **Deployment Storage (10 GB)** quota to 100% (Vercel emails on 2026-09-08 and 09-22). It was not the image-transformation quota.

Fix (Nov 2026): deleted the three previews, tagged the originals, moved images to `media/`, downsized, and restricted which branches auto-deploy (below).

## Which branches deploy (`vercel.json`)

Vercel builds a preview for every pushed branch by default; each preview counts against Deployment Storage. `vercel.json` has an `ignoreCommand` so only these build:

- `main` → production (bradford.digital)
- `staging` and `staging/*` → preview deployments

Every other branch is skipped (shows as "Canceled" in Vercel, uses no storage). To test a branch live:

```bash
git push origin my-branch:staging/my-branch      # creates/updates a preview
git push origin --delete staging/my-branch       # when done
```

Delete old previews you no longer need: `vercel ls` then `vercel remove <deployment-url>`.

## Free-tier budgets to keep in mind

| Service | Limit (Hobby/free) | Notes |
|---|---|---|
| Vercel Deployment Storage | 10 GB | Sum of all retained deployments. ~0.5 GB per deploy now. |
| Vercel Image Optimization | 5K transformations, 300K cache reads, 100K cache writes / month | Each unique image × width × format on a cache miss is one transformation. Over the limit, *new* images return 402 (show alt text); cached ones keep working. Not charged on Hobby. |
| GitHub Git LFS | free storage/bandwidth quota (check github.com/settings/billing) | Every Vercel build downloads all LFS files from GitHub, and the originals tag keeps ~2 GB in LFS storage. |

If transformations become a problem: reduce `images.deviceSizes` / `imageSizes` in `next.config.js` or raise `images.minimumCacheTTL`.

## Possible follow-ups

- Convert the 8 in-use GIFs (~37 MB, e.g. `AvyMap_prototype-low-qual.gif`, the WordPress plugin demos) to MP4 — `next/image` doesn't optimize animated GIFs, so they're served at full size.
- `media/lfs-media/AvyMap/` holds duplicates/unused files (incl. 43 MB of GIFs, a duplicate MP4); they don't deploy, but could be removed from the working tree.
