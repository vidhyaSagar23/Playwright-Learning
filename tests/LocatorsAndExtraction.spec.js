const {test, expect} = require('@playwright/test');

test('Types of Locators', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("[id='username']").fill("rahulshetty");
    await page.locator("input[name='password']").fill("learning")
    await page.locator("//input[@id='signInBtn']").click()
    let errorMessage = await page.locator("form [style='display: block;']").textContent()
    console.log(errorMessage)
    await expect(page.locator("form [style='display: block;']")).toContainText("correct")
    let userName = await page.locator("p[class='text-center text-white'] b:nth-child(1)").textContent()
    await page.locator("[id='username']").fill(userName)
    await page.locator("//input[@id='signInBtn']").click()
})