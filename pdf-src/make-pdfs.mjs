// Rebuilds the two downloadable PDFs from the HTML files in this folder.
// Run from the repo root:  npx -y -p playwright node pdf-src/make-pdfs.mjs
// (first time only: npx playwright install chromium)
import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(here, "..", "src", "assets", "pdf");
const docs = ["farm-website-self-check", "working-with-cultivate"];

const browser = await chromium.launch();
for (const name of docs) {
  const page = await browser.newPage();
  await page.goto(pathToFileURL(path.join(here, `${name}.html`)).href, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: path.join(out, `${name}.pdf`), format: "Letter", printBackground: true, preferCSSPageSize: true });
  console.log("wrote", name);
}
await browser.close();
