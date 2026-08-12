import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  getPage(): Page {
    return this.page;
  }

  async goto(path: string) {
    await this.page.goto(`https://www.saucedemo.com${path}`);
  }
}