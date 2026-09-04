import { Page } from '@playwright/test';

export class BasePage {
  constructor(
    protected page: Page,
    protected path: string
  ) {}

  getPage(): Page {
    return this.page;
  }

  async goto(): Promise<void> {
    await this.page.goto(`https://www.saucedemo.com${this.path}`);
  }
}