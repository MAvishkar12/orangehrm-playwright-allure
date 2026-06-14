import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
test(' Remove Products From Cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.pageGoTo();
    await expect(page.getByText('Home')).toBeVisible()
    await page.getByText(' Products').click()
    await expect(page).toHaveURL(/products/)
    // first product
    await page.locator('a').filter({ hasText: 'Add to cart' }).first().click()
    await page.getByRole('button', { name: 'Continue Shopping' }).click()
    // second product
    await page.locator('.productinfo').filter({
        hasText: 'Men Tshirt'
    }).locator('.add-to-cart').first().click();
    await page.getByRole('button', { name: 'Continue Shopping' }).click()
    // card page
    await page.getByText('Cart', { exact: true }).click()
    const cartRows = page.locator('#cart_info tbody tr');

    await expect(cartRows).toHaveCount(2);

    await page.locator('a.cart_quantity_delete').first().click();

    await expect(cartRows).toHaveCount(1);


})