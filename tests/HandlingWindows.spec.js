const {test, expect} = require('@playwright/test')

test('Handling windows',async ({browser})=>{
    const context =await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const document = page.locator("[href*='documents-request']")
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        document.click(),
    ])

    let text = await newPage.locator("div h1").textContent()
    await page.pause()
    const dropDown = page.locator("select.form-control");
    await dropDown.selectOption("consult");
    console.log(text)
})