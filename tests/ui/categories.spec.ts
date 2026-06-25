import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test("Verify Categories and Navigate through Women and Men Categories", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.pageGoTo();

    await expect( page.locator('h2:has-text("CATEGORY")')).toBeVisible();


    await page.locator('a[href="#Women"]').click();

    await page.locator("a[href='/category_products/2']").click();


    await expect( page.getByRole('heading', { name: 'Women - Tops Products' })).toBeVisible();



    await page.locator('a[href="#Men"]').click();
    await page.locator('//a[@href="/category_products/3"]').click();


    await expect(page.locator('.title.text-center')).toBeVisible();
});
