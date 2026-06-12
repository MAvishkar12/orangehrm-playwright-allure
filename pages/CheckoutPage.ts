import { expect, Locator, Page } from '@playwright/test';
import { BankDetails } from '../utils';

export class CheckoutPage {
    readonly page: Page;
    readonly proceedToCheckoutBtn: Locator;
    readonly commentBox: Locator;
    readonly placeOrderBtn: Locator;
    readonly nameOnCard: Locator;
    readonly cardNumber: Locator;
    readonly cvc: Locator;
    readonly expiryMonth: Locator;
    readonly expiryYear: Locator;
    readonly payAndConfirmOrderBtn: Locator;
    readonly orderPlacedMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.proceedToCheckoutBtn = page.getByText('Proceed To Checkout');
        this.commentBox = page.locator('textarea.form-control');
        this.placeOrderBtn = page.getByText('Place Order', { exact: true });

        this.nameOnCard = page.locator('[name="name_on_card"]');
        this.cardNumber = page.locator('[name="card_number"]');
        this.cvc = page.locator('[name="cvc"]');
        this.expiryMonth = page.locator('[name="expiry_month"]');
        this.expiryYear = page.locator('[name="expiry_year"]');

        this.payAndConfirmOrderBtn = page.getByText('Pay and Confirm Order');
        this.orderPlacedMessage = page.locator('b:has-text("ORDER PLACED!")');
    }

    async placeOrder() {
        await this.proceedToCheckoutBtn.click();

        await this.commentBox.fill('Hii please send material');

        await this.placeOrderBtn.click();

        await this.nameOnCard.fill(BankDetails.nameOnCard);
        await this.cardNumber.fill(BankDetails.cardNumber);
        await this.cvc.fill(BankDetails.cvc);
        await this.expiryMonth.fill(BankDetails.expiryMonth);
        await this.expiryYear.fill(BankDetails.expiryYear);

        await this.payAndConfirmOrderBtn.click();

        await expect(this.orderPlacedMessage).toBeVisible();
    }
}