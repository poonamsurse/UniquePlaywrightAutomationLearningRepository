import {test, expect} from '@playwright/test'

const pageurl="https://practice-automation.com/form-fields/";
test.describe("verify input box", ()=>
{

    test.beforeEach(async({page})=>
    {
await page.goto(pageurl);
    });

    //page load validation
test("1. page loa dvalidation ", async({page})=>
{
    await expect(page).toHaveURL("https://practice-automation.com/form-fields/");

    await expect(page.getByRole("heading", {name:'Form Fields'})).toBeVisible;
});


//input filed validtaion
test("2. input filed dvalidation ", async({page})=>
{
    await expect(page.getByTestId('name-input')).toBeEditable;
    await page.getByTestId('name-input').fill('abcd');
    await expect(page.getByTestId('name-input')).toBeEditable;


    await expect(page.getByLabel('Password ')).toBeVisible;
    await page.getByLabel('Password ').fill('abc');
});

//

test.only("3. checkboxes validation ", async({page})=>
{
    const watercheckbox=page.getByTestId('drink1');
await watercheckbox.check;
//select all checkbox
const allcb=['Water',  'Milk','Coffee','Wine', 'Ctrl-Alt-Delight'];

//with map
/*
const allcheckbox=allcb.map((day)=>
{
return page.getByLabel(day)
});

for(const checkbox of allcheckbox)
{
await checkbox.check;
await expect(checkbox).toBeChecked;
}*/

//without map
for(const day of allcb)
{
const cc=page.getByLabel(day);
cc.check;
await expect(cc).toBeChecked;
}

});
});