# shubhambhatt.me

Personal site of Shubham Bhatt ([@BhattBuilds](https://x.com/BhattBuilds)).

A single static page. No build step, no dependencies.

## Files

- `public/index.html`: the whole site (HTML, CSS and JS in one file)
- `public/llms.txt`: plain summary for AI assistants
- `public/robots.txt`, `public/sitemap.xml`: for search engines
- `public/og.jpg`: the 1200x630 preview image shown when the link is shared
- `public/favicon.ico`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `site.webmanifest`: browser and phone icons
- `public/assets/`: images
- `vercel.json`: tells Vercel to serve `public/` as is
- `scripts/sync-revenue.mjs` and `.github/workflows/sync-revenue.yml`: daily revenue sync from TrustMRR

## Revenue numbers (automatic)

A GitHub Action (`.github/workflows/sync-revenue.yml`) runs `scripts/sync-revenue.mjs` every day. It reads IdeaFast's verified monthly revenue from TrustMRR's public profile (https://trustmrr.com/startup/ideafast.md, no API key needed) and rewrites the `REVENUE` block between the `AUTO-SYNC` markers in `public/index.html`, plus the total, "this month", the "updated" date, `llms.txt` and `sitemap.xml`. It only commits when a number changed, and Vercel then deploys it. If TrustMRR's page ever looks wrong, the run fails and changes nothing.

- Don't edit the `AUTO-SYNC` block by hand.
- To add a milestone note on a bar, edit `NOTES` (key = `"YYYY-MM"`) in `public/index.html`.
- To run it now: GitHub, Actions, "Sync IdeaFast revenue", Run workflow. Or locally: `node scripts/sync-revenue.mjs`.
- The chart shows the last 12 months. The total counts all months.

## Preview locally

```bash
python3 -m http.server 4321 --directory public
```

Then open http://localhost:4321

## Deploy

Push to `main`. Vercel deploys it to https://shubhambhatt.me
