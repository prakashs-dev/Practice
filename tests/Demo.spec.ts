import { test, expect, chromium } from "@playwright/test";

test("Demo", async ({}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://demowebshop.tricentis.com/books");

  await page.locator("//a[normalize-space()='Log in']").click();

  await page.fill("#Email", "admin.user@gmail.com");

  await page.fill("#Password", "adminuser");

  await page.click("//input[@value='Log in']");

  const page1 = await context.newPage();
  await page1.goto("https://demowebshop.tricentis.com/books");

  await page.waitForTimeout(3000);
});
