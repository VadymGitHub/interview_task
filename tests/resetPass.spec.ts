import { expect, test } from '@playwright/test'
import { ContextHelper } from '../helpers'
import { LoginPage, HomePage, GmailPage } from '../pageObjects/'
import * as dotenv from 'dotenv'

dotenv.config()

const loginPage = new LoginPage()
const homePage = new HomePage()
const gmailPage = new GmailPage()

/**
 * Sets up the test environment before each test.
 */
test.beforeEach(async ({ page }) => {
    ContextHelper.setPage(page)
})

test.describe('Google', () => {
    /**
     * Tests the login workflow with password reset.
     */
    test('Login workflow with password reset', {
        tag: ['@e2e'],
        annotation: [
            { type: 'test', description: 'id-001' },
        ],
    }, async ({ page }) => {
        await homePage.open()
        await homePage.expectLoaded()
        await homePage.navigateToLogin.click()
        await loginPage.waitForNetworkIdle()
        await loginPage.enterUsername(`${process.env.EMAIL}`)
        await loginPage.submitUsername()
        await loginPage.waitForNetworkIdle()
        await loginPage.navigateToForgotPassword()
        await loginPage.enterPassword(`${process.env.NEWPASS}`)
        await loginPage.submitPassword()
        await gmailPage.waitForNetworkIdle()
        await expect.soft(gmailPage.navigateToSignOutButton).toBeVisible()
    })
})
