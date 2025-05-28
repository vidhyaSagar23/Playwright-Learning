const {test, expect} = require('@playwright/test')

test("Special Locators", async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel('Student').click();
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await page.getByLabel('Gender').selectOption('Female');
    await page.getByPlaceholder("Password").fill("sagarvp");
    await page.getByRole("button",{name:"Submit"}).click();
    let successMsg =  await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    expect(successMsg).toBeTruthy();
    await page.getByRole("link", {name:"Shop"}).click();
    await page.locator("app-card").filter({hasText:'Samsung Note 8'}).getByRole("button").click();
    await page.locator("//a[contains(text(),'Checkout')]").click();
});