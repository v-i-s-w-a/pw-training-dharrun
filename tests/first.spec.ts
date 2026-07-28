import { test, expect } from '@playwright/test';

test('Verify SauceDemo title and URL', async ({ page }) => {

  // Navigate to the website
  await page.goto('https://www.saucedemo.com/');

  // Assertion 1: Verify page title
  await expect(page).toHaveTitle('Swag Labs');

  // Assertion 2: Verify URL
  await expect(page).toHaveURL('https://www.saucedemo.com/');

});