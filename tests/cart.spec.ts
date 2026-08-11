import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

test('add two products, verify cart, and remove one', async ({ page }) => {

  // Login
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Add two products
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await page.getByRole('button', { name: 'Add to cart' }).nth(1).click();

  // Open cart
  const cart = new CartPage(page);
  await cart.open();

  // Get cart items
  const items = await cart.itemNames();

  console.log('Cart items:', items);

  // Assert both products are present
  expect(items).toContain('Sauce Labs Backpack');
  expect(items).toContain('Sauce Labs Bolt T-Shirt');

  // Remove Backpack
  await cart.removeItem('Sauce Labs Backpack');

  // Get remaining items
  const remainingItems = await cart.itemNames();

  console.log('Remaining items:', remainingItems);

  // Assert Backpack is removed
  expect(remainingItems).not.toContain('Sauce Labs Backpack');

  // Assert Bike Light remains
  expect(remainingItems).toContain('Sauce Labs Bolt T-Shirt');
});