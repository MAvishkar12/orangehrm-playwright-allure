import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.skip('Login User through userName and password', async ({ page }) => {
    const loginUser = new LoginPage(page)
    await loginUser.gotoWebsite()
    await loginUser.addUserCredentials()
});

test.only("Forget password test", async ({ page }) => {
    const loginUser = new LoginPage(page)
    await loginUser.gotoWebsite()
    await page.getByText('Forgot your password?').click()
    await expect(page).toHaveURL(/requestPasswordResetCode/)
    await expect(page.getByRole('heading')).toHaveText('Reset Password')

})