import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.goto('/cart.html');
  }

  async itemNames(): Promise<string[]> {
    return await this.page
      .locator('.cart_item .inventory_item_name')
      .allTextContents();
  }
}