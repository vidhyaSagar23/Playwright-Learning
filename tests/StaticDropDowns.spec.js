const {test, expect} = require('@playwright/test')

test('Static Dropdowns', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const dropDown = page.locator("select.form-control");
    await dropDown.selectOption("consult");
    const document = page.locator("[href*='documents-request']")
    await page.locator("span.radiotextsty").nth(1).click();
    // is checked will return boolean value
    console.log(await page.locator("span.radiotextsty").nth(1).isChecked())
    // toBeChecked is for assertion
    await expect(page.locator("span.radiotextsty").nth(1)).toBeChecked()
    await page.locator("#okayBtn").waitFor();
    await page.locator("#okayBtn").click();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy()
    await expect(document).toHaveAttribute("class", "blinkingText")
    // await page.pause();
})
