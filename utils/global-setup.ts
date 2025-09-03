import { chromium, FullConfig } from "@playwright/test";
import LoginPage from '../pages/login.page'

let loginPage: LoginPage

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch();
    
    const page = await browser.newPage()
    loginPage = new LoginPage(page)
    await page.context().storageState({path: "notLoggedInState.json"})

    await page.goto('https://practice.sdetunicorns.com/my-account/')
    await loginPage.loginToAccount()
    await page.context().storageState({path: "loggedInState.json"})
    await browser.close()
}

export default globalSetup