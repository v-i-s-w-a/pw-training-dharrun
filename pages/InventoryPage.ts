import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async addItem(productName: string): Promise<void> {
    const product = this.page.locator('.inventory_item').filter({
      hasText: productName,
    });

    await product.getByRole('button', { name: 'Add to cart' }).click();
  }
}