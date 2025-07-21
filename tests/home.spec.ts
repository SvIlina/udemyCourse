import { test, expect, defineConfig, devices } from '@playwright/test';
import HomePage from '../pages/home.pages';


test.describe('Home', () => {
    let homePage: HomePage;

    test.beforeEach(async ({page})=>{
        homePage = new HomePage(page);
    })
    test('Open Home page and verify title', async ({ page }) => {
        //open url
        await homePage.navigate()
        //verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    })

    test('Verify Home button is enabled', async ({page}) => {
        await homePage.navigate();
        const homeText = await homePage.homeText
        await expect(homeText).toBeEnabled
    })

    test('Verify Title of About page', async ({page}) => {
        await page.goto('https://practice.sdetunicorns.com/about/')
        await expect(page).toHaveTitle('About – Practice E-Commerce Site')
    })
    
    test('Verify Get started button', async ({page}) => {
        await homePage.navigate()
        await homePage.getStartedButton.click();
        await expect(page).toHaveURL(/.*#get-started/)
    })

     test('Verify nav links', async ({page}) => {
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];
        await homePage.navigate()
        expect(await homePage.getNavLinksText()).toEqual(expectedLinks)
    })
    test('Verify nav link Blog', async ({page}) => {
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];
        await homePage.navigate()
        const navLinksMenu = homePage.navLinksMenu.nth(3)
        expect(await navLinksMenu.textContent()).toEqual(expectedLinks[3])
    })

    test('Verify Print out all nav links', async ({page}) => {
        await page.goto('https://practice.sdetunicorns.com/')
        const navLinksMenu = homePage.navLinksMenu
        for (const menuLink of await navLinksMenu.elementHandles()) {
            console.log(await menuLink.textContent())
        }
    })
    
}) 


