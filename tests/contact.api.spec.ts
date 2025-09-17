import {test, expect, APIResponse } from '@playwright/test'
import ContactPage from '../pages/contact.page'
import apiController from '../controller/api.controller'

test.describe('Contact', () =>{
    let contactPage: ContactPage

// eslint-disable-next-line require-await
test.beforeAll(async () => {
    await apiController.init()
    await apiController.createUserToDo()
})

test('Fill contact and verify success message', async ({page}) => {
    contactPage = new ContactPage(page)
    await contactPage.navigateToContactPage()
    const user = await apiController.getUsers()
    await contactPage.submitForm(user.name, user.email, user.phone, user.website)

    //add soft assertion
    //await expect.soft(contactPage.textArea).toHaveText("Fail test message")
    await expect (contactPage.successMessageBaner).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
    })
})