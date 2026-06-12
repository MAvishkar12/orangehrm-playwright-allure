import { test, expect } from "@playwright/test";
import { LoginPage } from '../pages/LoginPage';
import { UserData ,IncorrectNewUser } from "../utils";

test("Login User with correct email and password", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.pageGoTo();

    await loginPage.login(
        UserData.email,
        UserData.password
    );
    await expect(page.getByRole('link', { name: 'Logout' }))
        .toBeVisible()
})

test('Login User with incorrect email and password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.pageGoTo();

    await loginPage.login(
        IncorrectNewUser.email,
        IncorrectNewUser.password
    );
    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible()
    await page.waitForTimeout(3000)

})

test('Register User with existing email', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.pageGoTo();
    await page.getByRole('link', { name: 'Signup / Login' }).click()
    await expect(page).toHaveURL(/login/)
    await page.getByPlaceholder('Name').fill('Admin@123')
    await page.getByPlaceholder('Email Address').nth(1).fill('Admin123456@gmail.com')
    await page.getByRole('button', { name: 'Signup' }).click()
    await expect(page.getByText('Email Address already exist!')).toBeVisible()

})

test("Contact Us Form", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.pageGoTo();
    await page.getByText('Contact us').click()
    await expect(page).toHaveURL(/contact_us/)
    await page.getByRole('textbox', { name: 'Name' }).fill('abc')
    await page.getByPlaceholder('Email').first().fill('Admin123456@gmail.com')
    await page.getByPlaceholder('Subject').fill("Replace product and refund amount")
    await page.getByPlaceholder('Your Message Here').fill('replace product and get refund money on give account details')
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles('./files/dumy.png');

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.locator('[name="submit"]').click();
})

test(' Logout User', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.pageGoTo();

    await loginPage.login(
        UserData.email,
        UserData.password
    );
    await expect(page.getByRole('link', { name: 'Logout' }))
        .toBeVisible()
    await page.locator('li:has-text("Logout")').click()
    await expect(page).toHaveURL(/login/)
})

