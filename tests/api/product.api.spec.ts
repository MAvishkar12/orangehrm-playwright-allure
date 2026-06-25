import { test, expect, request } from "@playwright/test";

test('Fetch-Get All Products List', async ({ request }) => {
    const result = await request.get('productsList');
    expect(result.status()).toBe(200)
    expect(result.ok()).toBeTruthy();

    const body = await result.json();
    expect(body.products[0].id).toBe(1);
    expect(body.products[0].brand).toBe('Polo');
});

test('GET user account detail by email', async ({ request }) => {
    const result = await request.get('getUserDetailByEmail');
    expect(result.status()).toBe(200)
    expect(result.ok()).toBeTruthy();
})