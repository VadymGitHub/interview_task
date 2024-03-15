/**
 * Represents a login page with authentication functionality.
 * This class extends the BasePage class and provides methods for logging in, entering credentials,
 * and navigating to forgot password page.
 */
import { BasePage } from '../index'
import { IBasePageProps } from '../../interfaces'

export default class LoginPage extends BasePage {

    /**
     * Creates an instance of LoginPage.
     */
    constructor(props?: IBasePageProps) {
        super({ path: '', ...props })
    }

    /**
     * Navigates to the login page.
     */
    async navigateToLogin() {
        return this.page.locator('//a[contains(@href, \'accounts\')]')
    }

    /**
     * Enters the username into the username input field.
     */
    async enterUsername(username: string) {
        await this.page.locator("#identifierId").click()
        return this.page.fill("#identifierId", username)
    }

    /**
     * Submits the entered username.
     */
    async submitUsername() {
        await this.page.click("#identifierNext")
    }

    /**
     * Enters the password into the password input field.
     */
    async enterPassword(password: string) {
        await this.page.fill("#password", password)
    }

    /**
     * Submits the entered password..
     */
    async submitPassword() {
        await this.page.click("#passwordNext")
    }

    /**
     * Retrieves the error message displayed on the login page.
     */
    async getErrorMessage(): Promise<string | null> {
        const error = await this.page.locator(".heading")
        return error.textContent() || null
    }

    /**
     * Navigates to the forgot password page.
     */
    async navigateToForgotPassword() {
        await this.page.click("#accountChooser form a")
    }
}
