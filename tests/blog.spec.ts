import { test, expect } from '@playwright/test';
import BlogPage from '../pages/blog.page';

test.describe('Blog', () => {
  let blogPage: BlogPage
  
  test.beforeEach(async ({page}) => {
    blogPage = new BlogPage(page)
    await blogPage.navigateToBlogPage();
    
})
  test('Verify Recent Posts count and verify the length of each list item', async () => {
    //here it want me to add ? mark - this is when 
    // loop through the list and assert the char length > 10
    for (const el of await blogPage.recentPostsList.elementHandles()) {
    await expect(((await el.textContent())?.trim())?.length).toBeGreaterThan(10)
    }

    // assert the total length = 5
    await expect(await blogPage.recentPostsList.count()).toEqual(5)
  })

})