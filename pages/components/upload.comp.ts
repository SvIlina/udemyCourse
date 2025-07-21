import {Page, Locator } from '@playwright/test'

class UploadComponent {
    private page: Page
    successMessage: Locator;
    uploadInput: string;
    uploadSubmitButton: Locator;


constructor (page: Page) {
    this.page = page;
    this.uploadSubmitButton = page.locator('input#upload_1')
    this.successMessage = page.locator('#wfu_messageblock_1_1 label')
    this.uploadInput = 'input#upfile_1'
    }

    async uploadFile(filePath: string) {
        await this.page.setInputFiles(this.uploadInput, filePath)
        await this.uploadSubmitButton.click()
    }
}

export default UploadComponent