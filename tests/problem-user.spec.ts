import { test, expect } from '@playwright/test';

test('problem user displays the same image six times', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');

  const imageSources = await page
    .locator('.inventory_item_img img')
    .evaluateAll(images =>
      images.map(image => image.getAttribute('src'))
    );

  expect(imageSources).toHaveLength(7);
  expect(new Set(imageSources).size).toBe(1);
});