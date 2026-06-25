import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test('Verify Scroll Up and Scroll Down functionality', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.pageGoTo();
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible()
    await page.getByRole('heading', { name: 'Subscription' }).scrollIntoViewIfNeeded()
    await expect(page.getByRole('heading', { name: 'Subscription' })).toBeVisible()
    await page.locator('#scrollUp').click()
    await expect(page.locator('h2').filter({ hasText: 'Full-Fledged practice website for Automation Engineers' }).first()).toBeVisible()
});


test('Verify Scroll Up without Arrow button and Scroll Down functionality', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.pageGoTo();
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible()
    await page.getByRole('heading', { name: 'Subscription' }).scrollIntoViewIfNeeded()
    await expect(page.getByRole('heading', { name: 'Subscription' })).toBeVisible()
    await page.evaluate(()=>{
        window.scrollTo(0,0)
    })
     await expect(page.locator('h2').filter({ hasText: 'Full-Fledged practice website for Automation Engineers' }).first()).toBeVisible()

})
