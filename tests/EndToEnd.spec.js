const {test, expect} = require('@playwright/test')

test('End to end testing',async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage()
    const productName = 'ZARA COAT 3'
    const countryName = "India"
    const email = 'sagar13@gmail.com';
    const password = 'Sagarvp13!'
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder('email@example.com').click();
    await page.getByPlaceholder('email@example.com').fill(email);
    await page.getByPlaceholder('enter your passsword').click();
    await page.getByPlaceholder('enter your passsword').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    console.log(await page.locator("b:has-text('"+productName+"')").textContent())
    const titles = await page.locator(".card-body").locator("b").allTextContents()
    console.log(titles)
    const count = await products.count()
    console.log(count)
    for(let i = 0; i < count; i++){
        if(await products.nth(i).locator("b").textContent() === productName){
            await products.nth(i).locator("button:has-text('Add To Cart')").click();
            break;
        }
    }
    expect(await page.locator("li button:has-text('Cart')").isVisible()).toBeTruthy()
    await page.locator("li button:has-text('Cart')").click()

    const cartSection = page.locator(".cartSection")
    console.log(await cartSection.locator("h3:has-text('"+productName+"')").textContent())
    const expectedName = await cartSection.locator("h3:has-text('"+productName+"')").textContent()
    expect(productName.trim()).toBe(expectedName)

    await page.locator("button:has-text('Checkout')").click()
    await page.locator("//input[@placeholder='Select Country']").click();
    await page.locator("//input[@placeholder='Select Country']").pressSequentially(countryName,{delay:100});
    const countries = page.locator("span[class='ng-star-inserted']")
    await page.locator("span[class='ng-star-inserted']").last().waitFor()
    for(let i=0; i<await countries.count();i++){
        console.log(await countries.nth(i).textContent())
        const country = await countries.nth(i).textContent()
        if(country.trim() === countryName){
            await countries.nth(i).click();
            break;
        }
    }
    await page.locator("a:has-text('Place Order')").click();
    let orderId = await page.locator("//label[@class='ng-star-inserted']").textContent();
    orderId = orderId.trim().split(" ")[1];
    await page.locator("label:has-text(' Orders History Page ')").click();
    await page.locator(".ng-star-inserted th[scope='row']").first().waitFor()
    const ids = await page.locator(".ng-star-inserted th[scope='row']").allTextContents()
    for(let i = 0; i< ids.length; i++){
        if(orderId.includes(ids[i])){
            console.log('actual '+ids[i]);
            console.log('expected '+ orderId)
            break;
        }
    }
})