import {test, expect } from '@playwright/test'
import ContactPage from '../pages/contact.page'
import { faker } from '@faker-js/faker';

test.describe('Contact', () =>{
    let contactPage: ContactPage
// eslint-disable-next-line require-await
test.beforeEach(async ({page}) => {
    contactPage = new ContactPage(page)
    await contactPage.navigateToContactPage()
})
test('Verify Login to Contact', async () => {
    contactPage.submitForm("Svitlana", faker.internet.email(), faker.phone.number(), faker.lorem.paragraphs(2))
        
    //add soft assertion
    //await expect.soft(contactPage.textArea).toHaveText("Fail test message")
    await expect (contactPage.successMessageBaner).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
    })
})