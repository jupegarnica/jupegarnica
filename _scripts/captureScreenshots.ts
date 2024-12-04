import puppeteer from "npm:puppeteer-core";
import { ensureDir, exists } from "jsr:@std/fs";
import { join } from "jsr:@std/path";
import projects from "../_data/repos.json" with { type: "json" };

const screenshotsDir = "./screenshots";
await ensureDir(screenshotsDir);

const browser = await puppeteer.launch({
  channel: "chrome",
  // headless: Deno.env.get("CI") === "true",
});

for (const project of projects) {
  const screenshotPath = join(screenshotsDir, `${project.title}.png`);
  if (Deno.env.get("CI") === "true") {
    if (await exists(screenshotPath)) {
      console.log(`%cScreenshot already exists for ${project.title}`, "color: green");
      continue;
    }
  }
  let page = await browser.newPage();
  let id = setTimeout(() => page.close(), 20_000); // Increased timeout duration
  try {



    await page.setViewport({ width: 1280, height: 600 });
    let res = await page.goto(project.url, { waitUntil: "networkidle2" });
    console.log(
      `%cLoaded ${project.url} response: ${res?.status()}`,
      "color: blue",
    );

    if (!res || !res.ok) {
      throw new Error(`Failed to load ${project.url}`);
    }

    // Wait 2 seconds if title starts with 'jupegarnica'
    if (project.title.startsWith("jupegarnica")) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
    // Dismiss cookies if the button exists

    let dismisses = await clickElementWithText(page, "#docker-announcement-bar div", "✕");
    dismisses.push(...(await clickElementWithText(page, '[aria-label="Close"]')));
    dismisses.push(...(await clickElementWithText(page, 'button', "Dismiss")));

    if (dismisses.length) {
      await new Promise((resolve) => setTimeout(resolve, 1_000));
      console.log(`%cDismissing ${dismisses.length} for ${project.title}`, "color: orange");
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
    clearTimeout(id);
    await page.close();
    console.log(`%cPage closed for ${project.title}`, "color: yellow");
  }
}

console.log("%cAll screenshots captured", "color: green");

await browser.close();
console.log("%cBrowser closed", "color: yellow");

async function clickElementWithText(page: puppeteer.Page, query: string, text: string = '') {
  return await page.$$eval(query, (elements, _text) =>
    [...elements]
      .filter((el) => (el as HTMLElement).innerText?.toLowerCase().includes(_text.toLowerCase()))
      .map(el => ((el as HTMLElement).click())),
    text
  );
}