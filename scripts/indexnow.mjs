#!/usr/bin/env node
// Tells Bing (and the other IndexNow search engines) that pages on shubhambhatt.me changed,
// so they re-crawl them within minutes instead of days. Bing results also feed ChatGPT and Copilot.
// Google does not use IndexNow; it reads the sitemap from Search Console instead.
//
// It sends every <loc> URL in public/sitemap.xml, and proves the site is ours with the
// key file public/<32-hex-key>.txt (served at https://shubhambhatt.me/<key>.txt).
//
// Run: node scripts/indexnow.mjs   (GitHub Actions runs it after the site is published)

import { readdirSync, readFileSync } from "node:fs";

const HOST = "shubhambhatt.me";
const keyFile = readdirSync("public").find(f => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) { console.error("indexnow: no key file found in public/"); process.exit(1); }
const key = readFileSync(`public/${keyFile}`, "utf8").trim();

const urls = [...readFileSync("public/sitemap.xml", "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map(m => m[1].trim())
  .filter(u => u.startsWith(`https://${HOST}/`));
if (!urls.length) { console.error("indexnow: no URLs found in public/sitemap.xml"); process.exit(1); }

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList: urls }),
});
// 200 = accepted, 202 = accepted while the key is being checked (normal the first time)
console.log(`IndexNow answered ${res.status} for ${urls.length} URLs: ${urls.join(", ")}`);
if (res.status !== 200 && res.status !== 202) process.exit(1);
