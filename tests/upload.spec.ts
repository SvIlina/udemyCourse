import {test, expect } from "@playwright/test";
import CartPage from "../pages/cart.page";
// eslint-disable-next-line @typescript-eslint/no-require-imports
import path from 'path'

test.describe('Upload file', () => {
    let cartPage: CartPage

    const fileName = ['photo.jpg', 'IDL_header.png', 'Lection2.pdf' ]
    for (const name of fileName) {
        test(`Verify file ${name} is uploaded`, async () => {
        const filePath = path.join(__dirname, `../data/${name}`);
        await cartPage.uploadComponent().uploadFile(filePath)
        await expect(cartPage.uploadComponent().successMessage).toContainText('uploaded successfully')
    
    })
    }

    // eslint-disable-next-line require-await
    test.beforeEach(async ({page}) => {
        cartPage = new CartPage(page)
        await cartPage.navigateToCartPage()
    })
    

    test.skip("Upload file with hidden field", async ({page}) => {
        const filePath = path.join(__dirname,'..', 'data', 'photo.jpg');
       // DOM manipulation
        await page.evaluate(()=> {
            const selector = document.querySelector("input#upfile_1") 
            if (selector) {
                selector.className = ''
            }
        })

        await cartPage.uploadComponent().uploadFile(filePath)
        await expect(cartPage.uploadComponent().successMessage).toContainText("uploaded successfully")
    
    })
    test.skip("Verify big file is uploaded", async () => {
        const filePath = path.join(__dirname, '../data/Lection2.pdf');
        cartPage.uploadComponent().uploadFile(filePath)
        await expect(cartPage.uploadComponent().successMessage).toContainText("uploaded successfully", {timeout: 20000});
    
    })
})