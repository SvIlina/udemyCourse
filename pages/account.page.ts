import { Page, Locator } from "@playwright/test"
 
class AccountPage {
    private page: Page
    ordersTab: Locator
    downloadTab: Locator

    constructor (page: Page) {
        this.page = page
        this.ordersTab = page.locator("li a[href*='orders']")
        this.downloadTab = page.locator("li a[href*='downloads']")
    }
    async navigateToAccountPage () {
        await this.page.goto('/my-account/')
    }
}
export default AccountPage