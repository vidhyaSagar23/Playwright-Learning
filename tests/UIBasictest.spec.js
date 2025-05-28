const {test, expect} = require('@playwright/test')

// creating browser context using browser fixture
test('first playwright test', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title())
});


// using default browser context given by playwright using the page fixture
test('second playwright test', async ({page})=>{
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
})