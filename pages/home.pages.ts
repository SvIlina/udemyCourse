import {Page, Locator } from '@playwright/test'

class HomePage {
    page: Page;
    homeText: Locator;
    getStartedButton: Locator;
    navLinksMenu: Locator;

    constructor(page: Page){
        this.page = page;
        this.homeText = page.locator("#zak-primary-menu:has-text=('Home')")
        this.getStartedButton = page.locator('#get-started')
        this.navLinksMenu = page.locator('#zak-primary-menu li[id*=menu]')
    }
    async navigate () {
        await this.page.goto('https://practice.sdetunicorns.com/')
    }

    async getNavLinksText () {
        return this.navLinksMenu.allTextContents();
    }

}

export default HomePage