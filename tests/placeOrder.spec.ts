import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { NewUser } from "../utils";

test('Place Order: Register before Checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const registerPage = new RegisterPage(page)
    const checkOutPage = new CheckoutPage(page)
    await loginPage.pageGoTo();

    await page.getByRole('link', { name: ' Products' }).click()
    await page.locator('a').filter({ hasText: 'Add to cart' }).first().click()
    await page.getByRole('button', { name: 'Continue Shopping' }).click()
    await page.getByText('Cart', { exact: true }).click()
    await page.getByText('Proceed To Checkout', { exact: true }).click()
    await page.getByText('Register / Login', { exact: true }).click()
    await registerPage.NewuserLogin(NewUser.username, NewUser.email, NewUser.password)
    
    await expect(page.getByRole('heading', { name: 'Account Created!' })).toBeVisible()
    await page.getByRole('link', { name: 'Continue' }).click()
    await page.getByText('Cart', { exact: true }).click()

    await checkOutPage.placeOrder()

    await page.getByText('Delete Account').click()
    await expect(page.locator('b:has-text("ACCOUNT DELETED!")')).toBeVisible()
})

test(' Place Order: Register after Checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const registerPage = new RegisterPage(page)
    const checkOutPage = new CheckoutPage(page)

    await loginPage.pageGoTo();
    await page.getByText('Signup / Login', { exact: true }).click()
    await registerPage.NewuserLogin(NewUser.username, NewUser.email, NewUser.password)
    await expect(page.getByRole('heading', { name: 'Account Created!' })).toBeVisible()
    await page.getByRole('link', { name: 'Continue' }).click()

    //buy product 
    await page.getByRole('link', { name: ' Products' }).click()
    await page.locator('a').filter({ hasText: 'Add to cart' }).first().click()
    await page.getByRole('button', { name: 'Continue Shopping' }).click()
    await page.getByText('Cart', { exact: true }).click()

    await checkOutPage.placeOrder()

    await page.getByText('Delete Account').click()
    await expect(page.locator('b:has-text("ACCOUNT DELETED!")')).toBeVisible()
})
