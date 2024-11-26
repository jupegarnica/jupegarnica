// scripts/extract-screenshots.ts
import puppeteer from 'npm:puppeteer-core';
import { ensureDir } from "jsr:@std/fs";
import { join } from "jsr:@std/path";
import projects from '../_data/repos.json' with { type: "json" };

const screenshotsDir = './screenshots';
await ensureDir(screenshotsDir);

const browser = await puppeteer.launch({
  channel: 'chrome',
});

// Create an array of promises
const promises = projects.map(async (project) => {
  const page = await browser.newPage();
  console.log(`Capturing screenshot for ${project.title}`);
  const screenshotPath = join(screenshotsDir, `${project.title}.png`);
  await page.goto(project.url, { waitUntil: 'networkidle2' });
  await page.setViewport({ width: 1280, height: 1200 });

  // Wait 2 seconds if title starts with 'jupegarnica'
  if (project.title.startsWith('jupegarnica')) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  await page.screenshot({ path: screenshotPath });
  await page.close();
});

// Wait for all screenshots to finish
await Promise.all(promises);

await browser.close();