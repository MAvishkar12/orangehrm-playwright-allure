import { Locator, Page } from '@playwright/test';
import { PersonalData } from '../utils';

export class RegisterPage {
    readonly page: Page;
    readonly name: Locator;
    readonly signupEmail: Locator;
    readonly signupBtn: Locator;
    readonly titleMr: Locator;
    readonly password: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly address: Locator;
    readonly country: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipcode: Locator;
    readonly mobileNumber: Locator;
    readonly createAccountBtn: Locator;

    constructor(page: Page) {
        this.page = page;


        this.name = page.getByRole('textbox', { name: 'Name' });
        this.signupEmail = page.locator("input[data-qa='signup-email']");
        this.signupBtn = page.getByRole('button', { name: 'Signup' });

        this.titleMr = page.getByLabel('Mr.', { exact: true })
        this.password =  page.getByRole('textbox', { name: 'Password *' })

        this.firstName = page.getByRole('textbox', { name: 'First name ' });
        this.lastName = page.getByRole('textbox', { name: 'Last name *' });

        this.address = page.locator('#address1');
        this.country = page.getByLabel('Country ');
        this.state = page.getByLabel('State ');
        this.city = page.getByLabel('City ');
        this.zipcode = page.locator('[name="zipcode"]');
        this.mobileNumber = page.getByLabel('Mobile Number ');

        this.createAccountBtn = page.getByRole('button', { name: 'Create Account' });
    }

    async NewuserLogin(
        userName: string,
        email: string,
        password: string
    ) {


        await this.name.fill(userName);
        await this.signupEmail.fill(email);
        await this.signupBtn.click();

        await this.titleMr.check();
        await this.password.fill(password);

        await this.firstName.fill(PersonalData.firstName);
        await this.lastName.fill(PersonalData.lastName);

        await this.address.fill(PersonalData.address);
        await this.country.selectOption(PersonalData.country);
        await this.state.fill(PersonalData.state);
        await this.city.fill(PersonalData.city);

        await this.zipcode.fill(PersonalData.zipcode);
        await this.mobileNumber.fill(PersonalData.mobileNumber);

        await this.createAccountBtn.click();
    }
}