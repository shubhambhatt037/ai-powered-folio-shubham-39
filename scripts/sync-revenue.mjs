#!/usr/bin/env node
// Pulls IdeaFast's verified monthly revenue from TrustMRR and writes it into the site.
//
// Source: TrustMRR's public Markdown profile (no API key needed):
//   https://trustmrr.com/startup/ideafast.md
// It updates:
//   public/index.html   the REVENUE block between the AUTO-SYNC markers, plus the
//                       numbers that are written straight into the HTML (total, months,
//                       "this month", "updated" date, dateModified) so Google and AI
//                       tools read the same numbers people see
//   public/llms.txt     the "$X all-time as of <date>" line
//   public/sitemap.xml  lastmod dates
//
// It only writes files when the numbers changed. If TrustMRR's page looks wrong,
// it stops with an error and changes nothing (GitHub then emails a failed-run notice).
//
// Run locally:  node scripts/sync-revenue.mjs

import { readFileSync, writeFileSync } from "node:fs";

const SOURCE = "https://trustmrr.com/startup/ideafast.md";
const FILES = { html: "public/index.html", llms: "public/llms.txt", sitemap: "public/sitemap.xml" };
const SHORT = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const fail = msg => { console.error(`sync-revenue: ${msg}. Nothing was changed.`); process.exit(1); };
const money = s => Math.round(parseFloat(s.replace(/,/g, "")));
const monthKey = d => `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
const nextMonth = key => { const [y, m] = key.split("-").map(Number); return monthKey(new Date(Date.UTC(y, m, 1))); };

// 1. Download TrustMRR's profile
const res = await fetch(SOURCE, { headers: { "user-agent": "shubhambhatt.me revenue sync (daily)" } });
if (!res.ok) fail(`TrustMRR answered ${res.status}`);
const md = await res.text();

// 2. Read the monthly table
const section = md.split("### Monthly revenue timeline")[1];
if (!section) fail("could not find the monthly revenue table");
const table = section.split(/\n#{1,3} /)[0];
const found = [...table.matchAll(/^\|\s*(\d{4}-\d{2})\s*\|\s*\$([\d,]+(?:\.\d+)?)\s*\|/gm)]
  .map(m => ({ month: m[1], v: money(m[2]) }));
if (!found.length) fail("the monthly revenue table is empty");
const byMonth = new Map(found.map(r => [r.month, r.v]));

// 3. Fill gaps up to the current month with $0, so "this month" is always right
const now = process.env.SYNC_NOW ? new Date(process.env.SYNC_NOW) : new Date(); // SYNC_NOW: for testing only
const current = monthKey(now);
const months = [];
for (let k = found.map(r => r.month).sort()[0]; k <= current; k = nextMonth(k)) months.push(k);
const rows = months.map(month => ({ month, v: byMonth.get(month) ?? 0 }));

// 4. Sanity check against the all-time total
const total = rows.reduce((s, r) => s + r.v, 0);
const allTime = md.match(/\|\s*All time\s*\|\s*\$([\d,]+(?:\.\d+)?)\s*\|/);
if (allTime && Math.abs(money(allTime[1]) - total) > rows.length) {
  fail(`monthly rows add up to $${total} but TrustMRR's all-time total is $${money(allTime[1])}`);
}

// 5. When TrustMRR last refreshed the data
const syncedRaw = md.match(/Revenue (?:data )?last synced:\s*(\S+)/)?.[1];
const synced = syncedRaw && !isNaN(Date.parse(syncedRaw)) ? new Date(syncedRaw) : now;
const syncedShort = `${SHORT[synced.getUTCMonth()]} ${synced.getUTCDate()}, ${synced.getUTCFullYear()}`;
const syncedLong = `${LONG[synced.getUTCMonth()]} ${synced.getUTCDate()}, ${synced.getUTCFullYear()}`;
const today = now.toISOString().slice(0, 10);

// 6. Build the new REVENUE block and compare with the page
let html = readFileSync(FILES.html, "utf8");
const BLOCK = /\/\/ AUTO-SYNC:START[\s\S]*?\/\/ AUTO-SYNC:END/;
const oldBlock = html.match(BLOCK)?.[0];
if (!oldBlock) fail("the AUTO-SYNC markers are missing from public/index.html");
const lines = rows.map(r => `      { month: "${r.month}", v: ${r.v}${r.month === current ? ", partial: true" : ""} },`);
const newBlock = `// AUTO-SYNC:START\n    const REVENUE = [\n${lines.join("\n")}\n    ];\n    // AUTO-SYNC:END`;

if (newBlock === oldBlock) {
  console.log(`No change: $${total} across ${rows.length} months (TrustMRR synced ${syncedShort}).`);
  process.exit(0);
}
const oldMonths = (oldBlock.match(/month:/g) || []).length;
if (rows.length < oldMonths) fail(`TrustMRR returned ${rows.length} months but the page already has ${oldMonths}`);

// 7. Write everything
const last = rows[rows.length - 1];
const set = (text, re, value) => text.replace(re, (_, a, b) => a + value + b);
html = html.replace(BLOCK, () => newBlock);
html = set(html, /(<span data-total>)[^<]*(<\/span>)/g, total.toLocaleString("en-US"));
html = set(html, /(<span data-months>)[^<]*(<\/span>)/g, String(rows.length));
html = set(html, /(data-thismonth>)[^<]*(<\/span>)/, `$${last.v.toLocaleString("en-US")} this month`);
html = set(html, /(<span data-updated>)[^<]*(<\/span>)/, syncedShort);
html = set(html, /("dateModified": ")[^"]*(")/, today);
writeFileSync(FILES.html, html);

let llms = readFileSync(FILES.llms, "utf8");
llms = llms.replace(/\$[\d,]+ all-time as of [A-Z][a-z]+ \d{1,2}, \d{4}/, () => `$${total.toLocaleString("en-US")} all-time as of ${syncedLong}`);
writeFileSync(FILES.llms, llms);

let sitemap = readFileSync(FILES.sitemap, "utf8");
sitemap = sitemap.replace(/<lastmod>[^<]*<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
writeFileSync(FILES.sitemap, sitemap);

console.log(`Updated: $${total} across ${rows.length} months, ${last.month} so far $${last.v} (TrustMRR synced ${syncedShort}).`);
