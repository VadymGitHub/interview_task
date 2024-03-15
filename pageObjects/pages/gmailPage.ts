/**
 * Represents the Gmail page of the application with network idle waiting functionality and navigation.
 */
import { BasePage } from '../index'
import { IBasePageProps } from '../../interfaces'

export default class GmailPage extends BasePage {

    /**
     * Creates an instance of GmailPage.
     */
    constructor(props?: IBasePageProps) {
        super({ path: '', ...props })
    }

    /**
     * Waits for the network to be idle.
     */
    async waitForNetworkIdle(){
        await this.page.waitForLoadState('networkidle')
    }

    /**
     * Retrieves the navigation link to the sign out button.
     */
    get navigateToSignOutButton() {
        return this.page.locator('//a[contains(@href, \'SignOutOptions\')]')
    }
}
