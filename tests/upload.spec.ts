import {test, expect } from "@playwright/test";
import CartPage from "../pages/cart.page";
const path = require('path');

test.describe('Upload file', () => {
    let cartPage: CartPage

    test.beforeEach(async ({page})=> {
        cartPage = new CartPage(page)
    })
    test("Verify file is uploaded", async ({page}) => {
        await page.goto("https://practice.sdetunicorns.com/cart/");
        const filePath = path.join(__dirname, '../data/IDL_header.png');
        cartPage.uploadComponent().uploadFile(filePath)
        await expect(cartPage.uploadComponent().successMessage).toContainText('uploaded successfully')
    
    })

    test("Upload file with hidden field", async ({page}) => {
        await page.goto("https://practice.sdetunicorns.com/cart/")
        const filePath = path.join(__dirname, '../data/IDL_header.png');
        //DOM manipulation
        await page.evaluate(()=> {
            const selector = document.querySelector('input#upfile_1')
            if (selector) {
                selector.className = ''
            }
        })

        cartPage.uploadComponent().uploadFile(filePath)
        await expect(cartPage.uploadComponent().successMessage).toContainText('uploaded successfully')
    
    })
    test("Verify big file is uploaded", async ({page}) => {
        await page.goto("https://practice.sdetunicorns.com/cart/");
        const filePath = path.join(__dirname, '../data/Lection2.pdf');
        cartPage.uploadComponent().uploadFile(filePath)
        await expect(cartPage.uploadComponent().successMessage).toContainText("uploaded successfully", {timeout: 10000});
    
    })
})