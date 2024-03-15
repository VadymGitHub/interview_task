/**
 * Represents the home page of the application with navigation and loading functionality.
 */
import { BasePage } from '../index'
import { IBasePageProps } from '../../interfaces'
import { expect } from "@playwright/test"

export default class HomePage extends BasePage {

  /**
   * Creates an instance of HomePage.
   */
  constructor(props?: IBasePageProps) {
    super({ path: '/', ...props })
  }

  /**
   * Retrieves the logo element on the home page.
   */
  get logo() {
    return this.page.getByRole('img', { name: 'Google' })
  }

  /**
   * Verifies that the home page is loaded.
   */
  async expectLoaded(message = 'Expected Home page to be opened') {
    await expect(this.logo, message).toBeVisible()
  }

  /**
   * Retrieves the navigation link to the login page.
   */
  get navigateToLogin() {
    return this.page.locator('//a[contains(@href, \'accounts\')]')
  }
}
