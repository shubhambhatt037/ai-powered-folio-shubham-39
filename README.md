# shubhambhatt.me

Personal site of Shubham Bhatt ([@BhattBuilds](https://x.com/BhattBuilds)).

A single static page. No build step, no dependencies.

## Files

- `public/index.html`: the whole site (HTML, CSS and JS in one file)
- `public/llms.txt`: plain summary for AI assistants
- `public/robots.txt`, `public/sitemap.xml`: for search engines
- `public/assets/`: images
- `vercel.json`: tells Vercel to serve `public/` as is

## Update revenue numbers

Edit the `REVENUE` list near the bottom of `public/index.html`. The total, the chart and the "this month" badge all update from it. Numbers come from https://trustmrr.com/startup/ideafast

## Preview locally

```bash
python3 -m http.server 4321 --directory public
```

Then open http://localhost:4321

## Deploy

Push to `main`. Vercel deploys it to https://shubhambhatt.me
