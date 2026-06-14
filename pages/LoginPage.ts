import { Page, Locator } from "@playwright/test";
//https://reqres.in/
//Admin123
//Admin123456@gmail.com
// pass : Admin@123
export class LoginPage {
    readonly page: Page;
    readonly loginText: Locator;
    readonly emailId: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;

    constructor(page: Page) {
        this.page = page;

        this.loginText = page.getByRole('link', { name: 'Signup / Login' });
        this.emailId = page.getByPlaceholder('Email Address').first();
        this.password = page.getByPlaceholder('Password');
        this.loginBtn = page.getByRole('button', { name: 'Login' });
    }

    async pageGoTo() {
        await this.page.goto('https://automationexercise.com/',{
            waitUntil:'domcontentloaded'
        });
    } 

    async login(email: string, password: string) {
        await this.loginText.click();
        await this.emailId.fill(email);
        await this.password.fill(password);
        await this.loginBtn.click();
    }
}