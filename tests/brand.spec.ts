import { test, expect } from '@playwright/test';
import { LoginPage } from "../pages/LoginPage";
test(' View & Cart Brand Products ', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.pageGoTo();
  await page.getByRole('link', { name: ' Products' }).click();
  await expect(page.getByRole('heading', { name: 'Brands' })).toBeVisible()
  await page.getByRole('link', { name: '(6) Polo' }).click();
  await expect(page).toHaveURL(/brand_products\/Polo/);
  await page.getByRole('link', { name: '(5) H&M' }).click();
   await expect(page).toHaveURL(/brand_products\/H&M/)

});