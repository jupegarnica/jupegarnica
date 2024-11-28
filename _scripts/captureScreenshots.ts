// scripts/extract-screenshots.ts
import puppeteer from "npm:puppeteer-core";
import { ensureDir } from "jsr:@std/fs";
import { join } from "jsr:@std/path";
import projects from "../_data/repos.json" with { type: "json" };

const screenshotsDir = "./screenshots";
await ensureDir(screenshotsDir);

const browser = await puppeteer.launch({
  channel: "chrome",
  headless: false,

});


// Create an array of promises
const promises = projects.map(async (project) => {
  if (project.title !== "noop") return Promise.resolve();

  let page = await browser.newPage();
  try {
    setTimeout(() => page.close(), 30_000);

    console.log(`%cCapturing screenshot for ${project.title}`, "color: green");
    const screenshotPath = join(screenshotsDir, `${project.title}.png`);
    let res = await page.goto(project.url, { waitUntil: "networkidle2" });
    console.log(
      `%cLoaded ${project.url} response: ${res?.status()}`,
      "color: blue",
    );

    if (!res || !res.ok) {
      throw new Error(`Failed to load ${project.url}`);
    }

    await page.setViewport({ width: 1280, height: 1200 });

    // Wait 2 seconds if title starts with 'jupegarnica'
    if (project.title.startsWith("jupegarnica")) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
    // Dismiss cookies if the button exists
    const dismissButton = await page.$$eval('#docker-announcement-bar div', elements => elements.filter(el => el.innerText.includes('x')));
    if (dismissButton) {
      console.log("%cDismissing cookies for", "color: yellow", project.title);
    }

    await page.screenshot({ path: screenshotPath });
    console.log(`%cScreenshot saved to ${screenshotPath}`, "color: green");
  } catch (error) {
    console.error(
      `%cError capturing screenshot for ${project.title}: ${
        (error as Error).message
      }`,
      "color: red",
    );
  } finally {
    console.log(`%cClosing page for ${project.title}`, "color: yellow");
    await page.close();
    console.log(`%cPage closed for ${project.title}`, "color: yellow");
  }
});

// Wait for all screenshots to finish

await Promise.all(promises);
console.log("%cAll screenshots captured", "color: green");

await browser.close();
console.log("%cBrowser closed", "color: yellow");
