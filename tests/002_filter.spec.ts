import { test, expect } from '@playwright/test';


//before each test
test.beforeEach(async({page})=>
{
    await page.goto("https://playwright.dev/docs/locators");

})

//after all test 
test.afterAll(async({page})=>
{
await page.close();
})


//test

test ("verify add to cart for product 2", async({page})=>
{

await page
    .getByRole('listitem')
    .filter({ has: page.getByRole('heading', { name: 'Product 2' }) })
    .getByRole('button', { name: 'Add to cart' })
    .click();

}
)