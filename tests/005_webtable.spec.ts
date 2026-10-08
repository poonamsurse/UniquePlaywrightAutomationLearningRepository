import { test, expect } from '@playwright/test';

test("validate product table", async({page})=>
{
await page.goto("https://sdetqa.vercel.app/autoplay");

const table=page.locator('table').first();
const headers=table.locator('thead th');

const rows=table.locator('tbody tr');

console.log("total number of rows", await rows.count());

console.log("total number of column", await headers.count());

await expect(headers).toHaveCount(5);
await expect(rows).toHaveCount(4);


//read all data from third row
const thirdRowcells=rows.nth(2).locator('td');
console.log("Third row data:", await thirdRowcells.allTextContents());

await expect(thirdRowcells).toHaveText(['Keyboard','Electronics','$79','0','Out of Stock']);

//read all data from table()excluding header
const tableData: string[][]=[];

const rowcount=await rows.count();

for(let r=0;r<rowcount;r++)
{
    const cellvalues=await rows.nth(r).locator('td').allTextContents();//allInnerText()
    tableData.push(cellvalues);

    console.log(`Row ${r + 1}:`, cellvalues);

}
    ///ptint all productname

    const pn=[];

    for(let r=0;r<tableData.length;r++)
    {
 //console.log(tableData[r][0]);

 pn.push(tableData[r][0]);

    }

    
console.log("product names",pn);

expect(pn).toEqual([ 'Laptop', 'Mouse', 'Keyboard', 'Monitor']);

})