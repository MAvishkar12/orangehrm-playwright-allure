import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Verify All Products and product detail page", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.pageGoTo();
    await page.getByRole('link', { name: ' Products' }).click();

    await page.getByRole('link', { name: ' View Product' }).first().click();
    await expect(page).toHaveURL(/product_details/)
    await expect(page.getByText('Blue Top')).toBeVisible()
    await expect(page.getByText('Rs. 500')).toBeVisible()
})


test(' Verify Subscription in home page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.pageGoTo();
    await page.getByRole('textbox', { name: 'Your email address' }).fill('Admin123456@gmail.com');
    await page.locator('#subscribe').click();
    await expect(page.getByText('You have been successfully')).toBeVisible()

})



test('Verify Subscription in Cart page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.pageGoTo();
    await page.getByRole('link', { name: ' Cart' }).click();
    await page.getByRole('textbox', { name: 'Your email address' }).fill('Admin123456@gmail.com');
    await page.locator('#subscribe').click();
    await expect(page.getByText('You have been successfully')).toBeVisible()
});


test(' Search Product', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.pageGoTo();
    await page.getByRole('link', { name: ' Products' }).click();
    await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible()
    const searchText = "blue"
    await page.getByRole('textbox', { name: 'Search Product' }).fill(searchText)
    await page.locator('#submit_search').click()
    const products = page.locator('.productinfo p');
    const count = await products.count();

    console.log("Count of products:", count);

    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
        const productName = await products.nth(i).innerText();

        console.log("Items name:", productName);

        expect(productName.toLowerCase())
            .toContain(searchText.toLowerCase());
    }

})

// test('Count Product Items', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.pageGoTo();
//     await page.getByRole('link', { name: ' Products' }).click();
//     // first item
//     await page.locator('a').filter({ hasText: 'Add to cart' }).nth(0).click()
//     const womenShirtCard = page.locator('.productinfo').filter({ hasText: 'Blue Top' })
//     await womenShirtCard.locator('.add-to-cart').first().click();
//     const priceofItem1 = Number(
//         (await page.locator('.productinfo')
//             .filter({ hasText: 'Blue Top' })
//             .locator('h2')
//             .textContent())?.replace('Rs. ', '').trim()
//     );

//     await page.getByRole('button', { name: 'Continue Shopping' }).click()
//     //second item
//     const menTshirtCard = page.locator('.productinfo').filter({
//         hasText: 'Men Tshirt'
//     });
//     const priceofItem2 = Number(
//         (await page.locator('.productinfo')
//             .filter({ hasText: 'Men Tshirt' })
//             .locator('h2')
//             .textContent())?.replace('Rs. ', '').trim()
//     );
//     await menTshirtCard.locator('.add-to-cart').first().click();
//     const TotalSum = priceofItem1 + priceofItem2
   
//     await page.getByRole('button', { name: 'Continue Shopping' }).click()
//     await page.getByText('Cart', { exact: true }).click()
//     await expect(page).toHaveURL(/view_cart/)
//     const cartRows = page.locator('#cart_info_table tbody tr')
//     await expect(cartRows).toHaveCount(2)
//     let totalBill: number = 0

//     for (let i = 0; i < await cartRows.count(); i++) {

//         const price = await page.locator('#cart_info_table tbody tr  .cart_total .cart_total_price').nth(i).textContent()
//         const OrignalPrice: number = Number(price?.replace('Rs. ', '').trim());
//         console.log(OrignalPrice)
//         totalBill += OrignalPrice;
//     }
//     expect(totalBill).toEqual(TotalSum)
//     await page.waitForTimeout(1000)

// });