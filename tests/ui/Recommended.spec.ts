import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test("Add to cart from Recommended items", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.pageGoTo();
  await page.locator('a').filter({ hasText: 'Add to cart' }).first().click()
  //await page.locator('.item > div > .product-image-wrapper > .single-products > .productinfo > .btn').first().click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('link', { name: ' Cart' }).click();
  await expect(page.locator('#cart_info_table tbody tr')).toHaveCount(1);
  
});
