const { test } = require('@playwright/test');

// Reusable login function
async function login(page) {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    
    const userName_P = page.locator("(//div/p/b/i)[1]");
    const password_P = page.locator("(//div/p/b/i)[2]");
    const usernameInput = page.locator("[id='username']");
    const passwordInput = page.locator("input[name='password']");
    const signInBtn = page.locator("//input[@id='signInBtn']");

    const name = await userName_P.textContent();
    const pass = await password_P.textContent();
    
    await usernameInput.fill(name);
    await passwordInput.fill(pass);
    await signInBtn.click();

    console.log(`hello ${name} ${pass}`);
}

test('Extract first and last product name', async ({ page }) => {
    await login(page);

    const products = page.locator("[class='card-body'] a");
    const product1 = await products.first().textContent();
    const product2 = await products.last().textContent();

    console.log(product1 + " " + product2);
});

test("Using for each loop", async ({page})=>{
    await login(page);
    await page.waitForSelector("[class='card-body'] a")
    const products = page.locator("[class='card-body'] a");
    // console.log(await products.first().textContent())
    const names =await products.allTextContents()
    names.forEach(name=>{
    console.log(name)
    })
})

test('using for loop', async ({page})=>{
    await login(page)
    await page.waitForSelector("[class='card-body'] a")
    const products = await page.locator("[class='card-body'] a").allTextContents()
    for(let i =0;i < products.length; i++){
        console.log(products[i])
    }
})

test('using for loop type 2', async ({page})=>{
    await login(page)
    await page.waitForSelector("[class='card-body'] a")
    const products = page.locator("[class='card-body'] a")
    const count =await products.count()
    console.log(count)
    for(let i =0;i < count; i++){
        console.log(await products.nth(i).textContent())
    }
})