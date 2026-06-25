import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
test(' Add review on product', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.pageGoTo();
    await page.getByRole('link', { name: ' Products' }).click();
    await page.getByRole('link', { name: ' View Product' }).first().click();
    await page.getByRole('textbox', { name: 'Your Name' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Email Address', exact: true }).fill('admin12@gmail.com');
    await page.getByRole('textbox', { name: 'Add Review Here!' }).fill('Prodcut is good add some colors');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('Thank you for your review.')).toBeVisible()
})