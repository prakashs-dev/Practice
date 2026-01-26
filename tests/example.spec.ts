import { test, expect } from "@playwright/test";


// test("has title", async ({ page }) => {
//   await page.goto("https://letcode.in/home");

//   const cardTitle = await page.$$("//p[@class='card-header-title']");
//   const selectProduct = [
//     // "Mens Cotton Jacket...",
//     "Solid Gold Petite Micropave ...",
//   ];

//   for (let i = 0; i < cardTitle.length; i++) {
//     const title = (await cardTitle[i].textContent())?.trim();
//     if (title && selectProduct.includes(title)) {
//       await Promise.all([
//         page.waitForLoadState("domcontentloaded"),
//         cardTitle[i].click(),
//       ]);
//       await page.locator("//span[normalize-space()='Add to Cart']").click();
//       await page.goBack({ waitUntil: "domcontentloaded" });
//     }
//   }

//   await page.locator("//button[@class='button is-pulled-right']").click();

//   await page.waitForTimeout(3000);
//   await page.locator("//button[normalize-space()='Checkout']").click();

//   page.on("dialog", async (dialog) => {
//     console.log(dialog.message());
//     dialog.accept();
//   });
// });

test("test with hooks 1", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  await page.click("id=login2");
  await page.fill("#loginusername", "jiouser");
  await page.fill("input[id='loginpassword']", "jiouser");
  await page.click("//button[text()='Log in']");
  await page.click("//a[@id='logout2']");
});
