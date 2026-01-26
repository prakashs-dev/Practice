import { test, expect } from "@playwright/test";

test("Locators", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  await page.locator("//a[normalize-space()='Log in']").click();

  await page.fill("#Email", "admin.user@gmail.com");

  await page.fill("#Password", "adminuser");

  await page.click("//input[@value='Log in']");

  const itemName = await page.$$("//h2[@class='product-title']/a");

  for (const product of itemName) {
    if ((await product.textContent()) === "Simple Computer") {
      await product.click();
      break;
    }
  }

  await page.locator("//input[@value='96']").check();

  //input[@value='Add to cart']
  await page.click("//input[@value='Add to cart']");

  await page
    .getByRole("link", { name: /Shopping cart/i })
    .first()
    .click();

  await page.locator("#termsofservice").check();

  await page.locator("#checkout").click();

  //input[@value='Continue']
  await page.locator("//input[@value='Continue']").click();

  await page.locator("//input[@value='Confirm']").click();

  await page.screenshot({
    path: "test/" + Date.now() + "OrderSuccessfull.png",
  });

  await page.waitForTimeout(3000);
});
