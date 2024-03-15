/**
 * Represents a base page with common functionalities.
 * This class provides methods for interacting with Playwright pages and handling common tasks.
 */
import { Page } from '@playwright/test'
import { ContextHelper } from '../helpers'
import { IBasePageProps } from '../interfaces'

export default class BasePage {

  /**
   * Creates an instance of BasePage.
   */
  constructor(public props: IBasePageProps) {
    this.props = props
  }

  /**
   * Gets the Playwright page associated with the base page.
   */
  get page(): Page {
    return ContextHelper.page
  }

  /**
   * Opens the base page.
   */
  async open() {
    await this.page.goto(this.props.path)
    return  this.waitForOpen()
  }

  /**
   * Waits for the page to open.
   */
  async waitForOpen(){
    return this.page.waitForURL(this.props.path)
  }

  /**
   * Waits for the network to be idle.
   */
  async waitForNetworkIdle(){
    await this.page.waitForLoadState('networkidle')
  }
}
