import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.pages';


test.describe('Home', () => {
    let homePage: HomePage;

    // eslint-disable-next-line require-await
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.navigate()
    })
    test('Open Home page and verify title', async ({ page }) => {
        //verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    })

    test('Verify Home button is enabled', async () => {
        const homeText = await homePage.homeText
        await expect(homeText).toBeEnabled
    })

    test('Verify Title of About page', async ({page}) => {
        await page.goto('/about/')
        await expect(page).toHaveTitle('About – Practice E-Commerce Site')
    })
    
    test('Verify Get started button', async ({page}) => {
        await homePage.getStartedButton.click();
        await expect(page).toHaveURL(/.*#get-started/)
    })

     test('Verify nav links', async () => {
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];
        expect(await homePage.getNavLinksText()).toEqual(expectedLinks)
    })
    test('Verify nav link Blog', async () => {
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];
        const navLinksMenu = homePage.navLinksMenu.nth(3)
        expect(await navLinksMenu.textContent()).toEqual(expectedLinks[3])
    })

    test('Verify Print out all nav links', async () => {
        const navLinksMenu = homePage.navLinksMenu
        for (const menuLink of await navLinksMenu.elementHandles()) {
            console.log(await menuLink.textContent())
        }
    })
    
}) 


