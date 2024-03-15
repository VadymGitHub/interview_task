import { Page } from '@playwright/test'

export default {
  page: null as Page,
  posts: [] as string[],

  setPage(page: Page): void {
    this.page = page
  }
}
