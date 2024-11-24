// scripts/extract-screenshots.ts
import puppeteer from 'npm:puppeteer-core';
import { ensureDir } from "jsr:@std/fs";
import { join } from "jsr:@std/path";

interface Project {
  title: string;
  published: boolean;
  draft: boolean;
  description: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "Commit",
    published: false,
    draft: false,
    description: "Write commit messages powered by AI",
    url: "https://github.com/jupegarnica/commit",
  },
  // Other projects...
];

const screenshotsDir = './screenshots';
await ensureDir(screenshotsDir);

const browser = await puppeteer.launch({
  channel: 'chrome',
});
const page = await browser.newPage();

for (const project of projects) {
  const screenshotPath = join(screenshotsDir, `${project.title}.png`);
  await page.goto(project.url, { waitUntil: 'networkidle2' });
  await page.setViewport({ width: 1280, height: 800 });
  await page.screenshot({ path: screenshotPath });
}

await browser.close();