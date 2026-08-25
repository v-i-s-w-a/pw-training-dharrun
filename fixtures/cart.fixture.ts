import { test as base, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

type Fixtures = {
  inventoryPage: InventoryPage;
  cartPage: CartPage;
};

export const test = base.extend<Fixtures>({
  inventoryPage: async ({ page }, use) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    const inventoryPage = new InventoryPage(page);

    await use(inventoryPage);
  },

  cartPage: async ({ inventoryPage }, use) => {
    await inventoryPage.addItem('Sauce Labs Backpack');
    await inventoryPage.addItem('Sauce Labs Bike Light');

    const cartPage = new CartPage(inventoryPage['page']);

    await cartPage.open();

    await use(cartPage);
  },
});

export { expect };