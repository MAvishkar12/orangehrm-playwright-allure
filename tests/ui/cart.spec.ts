import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { UserData } from "../../utils";
test(' Search Products and Verify Cart After Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.pageGoTo();
    await page.getByRole('link', { name: ' Products' }).click()
    await page.getByPlaceholder('Search Product', { exact: true }).fill('Blue')
    await page.locator('button.btn.btn-default.btn-lg').click()
    await expect(page.locator(".title.text-center")).toBeVisible()
    const products = page.locator('.single-products');
    const count = await products.count();
    for (let i = 0; i < count; i++) {
        const productName = await page.locator('.productinfo p').nth(i).innerText();
        expect(productName.toLowerCase()).toContain('blue');
    }
    for (let i = 0; i < count; i++) {
        const product = products.nth(i);
        await product.hover();
        await product
            .locator('a.add-to-cart')
            .first()
            .click();
        await page.waitForLoadState("domcontentloaded")
        await page.getByText('Continue Shopping').click();
    }
    await page.getByText('Cart', { exact: true }).click()
    const table = await page.locator('#cart_info_table')
    const tableRowCount = await table.locator('tbody tr').count()
    await expect(tableRowCount).toEqual(count)
    await page.getByRole('link', { name: 'Signup / Login' }).click()
    await loginPage.login(UserData.email, UserData.password)
    await page.getByText('Cart', { exact: true }).click()
    await expect(tableRowCount).toEqual(count)
}) 