const {test} = require('@playwright/test')

test('Explicit wait',async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/")
    const emailInput = page.locator("//input[@id='userEmail']");
    const passInput = page.locator("//input[@id='userPassword']");
    const loginBtn = page.locator("//input[@id='login']")
    const email = "sagar13@gmail.com";
    const pass = "Sagarvp13!";
    await emailInput.fill(email);
    await passInput.fill(pass);
    await loginBtn.click()
    await page.waitForLoadState('networkidle')
    const title = await page.locator("//h5/b").allTextContents();
    console.log(title)
})