import {Page, Locator } from '@playwright/test'

class LoginPage {
    private page: Page
    private userNameFieldLocator: Locator
    private passwordFieldLocator: Locator
    private logInButtonLocator: Locator

    constructor(page: Page) {
        this.page = page
        this.userNameFieldLocator = page.locator('#username')
        this.passwordFieldLocator = page.locator('#password') //qjRnmkYXZvzi7V7
        this.logInButtonLocator = page.locator('[name ="login"]')
    }

    private async inputUserName(name: string) {
        await this.userNameFieldLocator.fill(name)
    }

    private async inputUserPassword(userPassword: string){
        await this.passwordFieldLocator.fill(userPassword)
    }

    private async clickLoginButton() {
        await this.logInButtonLocator.click()
    }

    async loginToAccount() {
        await this.inputUserName('TestSv')
        await this.inputUserPassword('qjRnmkYXZvzi7V7')
        await this.clickLoginButton()
    }
}

export default LoginPage