import {test, expect, APIResponse } from '@playwright/test'
import ContactPage from '../pages/contact.page'
import apiController from '../controller/api.controller'
import { json } from 'stream/consumers'

test.describe('Contact', () =>{
    let contactPage: ContactPage
    let user1: APIResponse

// eslint-disable-next-line require-await
test.beforeAll(async () => {
    await apiController.init()
    await apiController.getUsers()
    await apiController.createUserToDo()
})

test('Fill contact and verify success message', async ({page}) => {
    contactPage = new ContactPage(page)
    await contactPage.navigateToContactPage()
    await contactPage.submitForm(
        apiController.getUsers(),
        apiController.getUsers(),
        apiController.getUsers['phone'],
        apiController.getUsers['website']
        
    )
        
    //add soft assertion
    //await expect.soft(contactPage.textArea).toHaveText("Fail test message")
    await expect (contactPage.successMessageBaner).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
    })
})