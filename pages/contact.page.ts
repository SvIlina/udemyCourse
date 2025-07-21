import {Locator, Page } from '@playwright/test'

class ContactPage {
    private page: Page;
    clickContactButton: Locator;
    firstName: Locator;
    contactEmail: Locator;
    contactPhone: Locator;
    textArea: Locator;
    submitButton: Locator;
    successMessageBaner: Locator;

    constructor(page: Page) {
        this.page = page;
        this.clickContactButton = page.locator('#zak-primary-menu li:nth-child(5)')
        this.firstName = page.locator('.contact-name input');
        this.contactEmail = page.locator('.contact-email input')
        this.contactPhone = page.locator('.contact-phone input')
        this.textArea = page.locator('.contact-message textarea')
        this.submitButton = page.locator('div > [type="submit"]')
        this.successMessageBaner = page.locator('.everest-forms')
    }
    async submitForm (name, email, phone, notes) {
        await (this.firstName).fill(name)
        await (this.contactEmail).fill(email)
        await (this.contactPhone).fill(phone)
        await (this.textArea).fill(notes)
        await this.submitButton.click()
    }
}
export default ContactPage