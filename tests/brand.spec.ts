import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("View & Cart Brand Products - Complete End-to-End Workflow", async ({ page }) => {
    const loginPage = new LoginPage(page);

    // ========== STEP 1 & 2: LAUNCH BROWSER & NAVIGATE TO URL ==========
    // pageGoTo() navigates to https://automationexercise.com/ with domcontentloaded wait
    await loginPage.pageGoTo();
    await expect(page).toHaveURL(/automationexercise/);

    // ========== STEP 3: CLICK ON PRODUCTS BUTTON ==========
    // Navigate to Products page
    await page.getByRole('link', { name: 'Products' }).click();
    await expect(page).toHaveURL(/\/products/);
    await page.waitForLoadState('domcontentloaded');

    // ========== STEP 4: VERIFY BRANDS ARE VISIBLE ON LEFT SIDEBAR ==========
    // Verify Brands header is visible
    const brandsHeading = page.getByText('Brands');
    await expect(brandsHeading).toBeVisible();

    // Get all brand links from the sidebar
    const brandLinks = page.locator('a[href*="/brand_products/"]');
    const brandCount = await brandLinks.count();
    console.log(`Total brands available: ${brandCount}`);

    // ========== STEP 5: CLICK ON FIRST BRAND & VERIFY NAVIGATION ==========
    // Get the first brand name
    const firstBrandLink = page.locator('a[href*="/brand_products/"]').first();
    const firstBrandName = await firstBrandLink.textContent();
    console.log(`Clicking on brand: ${firstBrandName?.trim()}`);

    // Click on the first brand
    await firstBrandLink.click();
    await page.waitForLoadState('domcontentloaded');

    // Verify user is navigated to brand page
    await expect(page).toHaveURL(/\/brand_products\//);

    // Verify brand products are displayed
    await expect(page.locator('.title.text-center')).toBeVisible();
    const brandProductsTitle = page.locator('.title.text-center');
    await expect(brandProductsTitle).toContainText(firstBrandName?.trim() || '');

    // Verify products container is visible
    await expect(page.locator('.products, .product-image')).first().toBeVisible();
    console.log(`Successfully navigated to ${firstBrandName?.trim()} brand page with products displayed`);

    // ========== STEP 6: CLICK ON ANOTHER BRAND FROM SIDEBAR ==========
    // Navigate back to Products page to access the brands sidebar again
    await page.getByRole('link', { name: 'Products' }).click();
    await expect(page).toHaveURL(/\/products/);
    await page.waitForLoadState('domcontentloaded');

    // Select a different brand (second brand if available)
    const secondBrandLink = page.locator('a[href*="/brand_products/"]').nth(1);
    const secondBrandName = await secondBrandLink.textContent();
    console.log(`Clicking on different brand: ${secondBrandName?.trim()}`);

    // Click on the second brand
    await secondBrandLink.click();
    await page.waitForLoadState('domcontentloaded');

    // ========== STEP 7: VERIFY NAVIGATION TO DIFFERENT BRAND PAGE & PRODUCTS DISPLAYED ==========
    // Verify user is navigated to the new brand page
    await expect(page).toHaveURL(/\/brand_products\//);

    // Verify the brand page title matches the selected brand
    const newBrandProductsTitle = page.locator('.title.text-center');
    await expect(newBrandProductsTitle).toBeVisible();
    await expect(newBrandProductsTitle).toContainText(secondBrandName?.trim() || '');

    // Verify products are displayed on the new brand page
    await expect(page.locator('.products, .product-image')).first().toBeVisible();

    console.log(`Successfully navigated to ${secondBrandName?.trim()} brand page with products displayed`);
    console.log("✓ Complete Brand Products Test Workflow Passed!");
});
