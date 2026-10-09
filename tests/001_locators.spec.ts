import { test, expect } from '@playwright/test';

test ("playwright locators", async({page})=>
{

   // await page.goto("https://sdetqa.vercel.app/pw-locators.demo.app.html");

 await page.goto("https://dd-demo-tau.vercel.app/playwright-practice.html");

 //page.getByRole() to locate by explicit and implicit accessibility attributes.

 const submitbutton=page .getByRole("button", {name:'Submit Recommended'});
 await expect(submitbutton).toBeVisible;
 await submitbutton.click();

//  /page.getByText() to locate by text content.

const text=page.getByText('Welcome to Playwright Training!');
await expect(text).toBeVisible;

await expect(text).t


//page.getByLabel() to locate a form control by associated label's text.

const label=await page.getByLabel('Username');

await expect(label).toBeVisible;

await label.fill("abcd");

//page.getByPlaceholder() to locate an input by placeholder.

const ph=page.getByPlaceholder('Enter your email');
await expect(ph).toBeVisible;
await ph.fill('abc@gmail.com');




//page.getByAltText() to locate an element, usually image, by its text alternative.

const alttext=page.getByAltText('Company Logo');

await expect(alttext).toBeVisible;


//page.getByTitle() to locate an element by its title attribute.
const title=page.getByTitle('User Title');

await expect(title).toBeVisible;

//await expect(title).toHaveText('Title');
 await title.fill('abcd');


//page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).


const testid=page.getByTestId('login-testid');
await expect(testid).toBeVisible;



});





