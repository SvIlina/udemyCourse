import {test, expect } from '@playwright/test'
import ContactPage from '../pages/contact.page'

test.describe('Contact', () =>{
    let contactPage: ContactPage
test.beforeEach(async ({page})=> {
    contactPage = new ContactPage(page)
})
test.only('Verify Login to Contact', async ({page}) => {
        await page.goto('https://practice.sdetunicorns.com/')
        contactPage.clickContactButton.click()
        contactPage.submitForm("Svitlana", "test@getMaxListeners.com", "12345", "test")

        //add soft assertion
        //await expect.soft(contactPage.textArea).toHaveText("Fail test message")

        await expect (contactPage.successMessageBaner).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
    })
})