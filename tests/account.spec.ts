import { test, expect } from '@playwright/test'
import AccountPage from '../pages/account.page'

test.describe('Access orders', () => {
let accountPage: AccountPage

    test.beforeEach(async ({page}) => {
        accountPage = new AccountPage(page)
        await accountPage.navigateToAccountPage();
    })

    test('Navigate to Orders', async ({page}) => {
        await accountPage.ordersTab.click()
        await expect(page).toHaveURL(/.*orders/)
    })
    test('Navigate to Downloads', async ({page}) => {
        await accountPage.downloadTab.click()
        await expect(page).toHaveURL(/.*downloads/)
    })
    
})
test.describe('Access account page without Login', ()=> {
    test.use({storageState: "notLoggedInState.json"})
    let accountPage: AccountPage
    test.beforeEach(async({page})=> {
        accountPage = new AccountPage(page)
        await accountPage.navigateToAccountPage()
    })

    test("Verify Login page is opened", async ({page})=>{
        await expect(page.locator('form[class*="login"]')).toBeVisible()
        await expect(page.locator('form[class*="register"]')).toBeVisible()
    })
})
