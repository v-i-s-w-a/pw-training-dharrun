import { test, expect } from '../fixtures/cart.fixture';

test('cart contains Backpack and Bike Light', async ({ cartPage }) => {
  const items = await cartPage.itemNames();

  expect(items).toContain('Sauce Labs Backpack');
  expect(items).toContain('Sauce Labs Bike Light');
});