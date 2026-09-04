import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test('cart contains added products and can remove one', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await inventoryPage.goto();

  await inventoryPage.addItem('Sauce Labs Backpack');
  await inventoryPage.addItem('Sauce Labs Bike Light');

  const cartPage = new CartPage(page);

  await cartPage.goto();

  const items = await cartPage.itemNames();

  expect(items).toContain('Sauce Labs Backpack');
  expect(items).toContain('Sauce Labs Bike Light');

  await cartPage.removeItem('Sauce Labs Backpack');

  const remainingItems = await cartPage.itemNames();

  expect(remainingItems).not.toContain('Sauce Labs Backpack');
  expect(remainingItems).toContain('Sauce Labs Bike Light');
});