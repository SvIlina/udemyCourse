import { Page, Locator } from "@playwright/test"
 
class BlogPage {
    private page: Page
    recentPostsList: Locator

    constructor (page: Page) {
        this.page = page
        this.recentPostsList = page.locator('#recent-posts-3 ul li')
    }
    async navigateToBlogPage () {
        await this.page.goto('https://practice.sdetunicorns.com/blog/')
    }
}
export default BlogPage