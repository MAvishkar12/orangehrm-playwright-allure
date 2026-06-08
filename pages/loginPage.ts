import { Page, Locator } from "@playwright/test";

import { UserData } from "../utils";
export class LoginPage {
    page: Page;
    userName: Locator;
    passWord: Locator;
    loginBtn: Locator;
    constructor(page: Page) {
        this.page = page
        this.userName = page.getByPlaceholder('Username')
        this.passWord = page.getByPlaceholder('Password')
        this.loginBtn = page.getByRole('button', { name: 'Login' });

    }

    async gotoWebsite() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/");
    }

    async addUserCredentials() {
        await this.userName.fill(UserData.Username)
        await this.passWord.fill(UserData.Password)
        await this.loginBtn.click()
    }
}

