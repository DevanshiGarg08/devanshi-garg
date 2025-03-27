// import puppeteer from "puppeteer";
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const browser = await puppeteer.launch({ headless: "new" });
// const page = await browser.newPage();

// await page.setViewport({ width: 1440, height: 1024 });

// // This renders only the clean resume card without nav/buttons
// await page.goto("http://localhost:3000/resume/pdf", {
//   waitUntil: "networkidle0",
// });

// await page.waitForSelector("#resume-pdf-wrapper");
// await new Promise((resolve) => setTimeout(resolve, 500)); // buffer for fonts/layout

// const element = await page.$("#resume-pdf-wrapper");
// const boundingBox = await element.boundingBox();

// const outputPath = path.join(__dirname, "../public/DevanshiGarg-Resume.pdf");

// await page.pdf({
//   path: outputPath,
//   printBackground: true,
//   format: "A4",
//   margin: {
//     top: "0in",
//     right: "0in",
//     bottom: "0in",
//     left: "0in",
//   },
// });

// await browser.close();
// console.log("✅ Resume PDF generated at:", outputPath);

import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();

await page.setViewport({ width: 1440, height: 1024 });

await page.goto("http://localhost:3000/resume/pdf", {
  waitUntil: "networkidle0",
});

await page.waitForSelector("#resume-pdf-wrapper");
await new Promise((resolve) => setTimeout(resolve, 500)); // wait for layout/fonts

const element = await page.$("#resume-pdf-wrapper");
const boundingBox = await element.boundingBox();

const outputPath = path.join(__dirname, "../public/DevanshiGarg-Resume.pdf");

await page.pdf({
  path: outputPath,
  printBackground: true,
  width: `${boundingBox.width}px`,
  height: `${boundingBox.height}px`,
  margin: {
    top: "0in",
    right: "0in",
    bottom: "0in",
    left: "0in",
  },
  pageRanges: "1",
});

await browser.close();
console.log("✅ Resume PDF generated at:", outputPath);
