import { test, expect } from '../fixtures/cart.fixture';

test('cart contains two products and removing one keeps the other', async ({ cartPage }) => {

  const items = await cartPage.itemNames();

  // Assert both products are present
  expect(items).toContain('Sauce Labs Backpack');
  expect(items).toContain('Sauce Labs Bolt T-Shirt');

  // Remove one product
  await cartPage.removeItem('Sauce Labs Backpack');

  // Get remaining products
  const remainingItems = await cartPage.itemNames();

  // Re-assert
  expect(remainingItems).not.toContain('Sauce Labs Backpack');
  expect(remainingItems).toContain('Sauce Labs Bolt T-Shirt');
});