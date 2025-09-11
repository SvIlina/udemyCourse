import {test, expect, APIResponse } from '@playwright/test'
import ContactPage from '../pages/contact.page'
import apiController from '../controller/api.controller'

test.describe('Contact', () =>{
    let contactPage: ContactPage
    let user1: APIResponse

// eslint-disable-next-line require-await
test.beforeAll(async ({playwright}) => {
    fakerApi = await playwright.request.newContext({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    })
    const response = await fakerApi.get('users');
    const responseBody = await response.json();
    user1 = responseBody[0]

    const postResponse = await fakerApi.post('/users/1/todos', {
        data: {
            "title": "Learn Playwright",
            "completed": "false"
        }
    })
    const postResponseBody = await postResponse.json()
    console.log(postResponseBody)
})

test('Fill contact and verify success message', async ({page}) => {
    contactPage = new ContactPage(page)
    await contactPage.navigateToContactPage()
    await contactPage.submitForm(
        user1['name'],
        user1['email'],
        user1['phone'],
        user1['website']
        
    )
        
    //add soft assertion
    //await expect.soft(contactPage.textArea).toHaveText("Fail test message")
    await expect (contactPage.successMessageBaner).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
    })
})