import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Brand Products Navigation - Verify Brand Selection and Products Display", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.pageGoTo();


    await page.getByRole('link', { name: 'Products' }).click();
    await expect(page).toHaveURL(/\/products/);
  


    const brandsHeading = page.getByText('Brands');
    await expect(brandsHeading).toBeVisible();


    const firstBrandLink = page.locator('a[href*="/brand_products/"]').first();
      await firstBrandLink.click();
    

  
    await expect(page).toHaveURL(/\/brand_products\//);
    

   
    const secondBrandLink = page.locator('a[href*="/brand_products/"]').nth(1);
   await secondBrandLink.click();
  

    await expect(page).toHaveURL(/\/brand_products\//);
   
});
