import { test, expect } from '@playwright/test';

test.describe('Favorite Drink Checkboxes Validation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice-automation.com/form-fields/');
  });
    const drinks = ['Water', 'Milk', 'Coffee', 'Wine', 'Ctrl-Alt-Delight' ];

  test('1.Validate all favorite drink checkboxes are present and can be checked/unchecked', async ({ page }) => {

    for (const drink of drinks) {
      const checkbox = page.getByLabel(drink);
      //console.log("checkbox :",checkbox)
      await expect(checkbox).toBeVisible();
      await expect(checkbox).not.toBeChecked();

      // Check the box
      await checkbox.check();
      await expect(checkbox).toBeChecked();

      // Uncheck the box
      await checkbox.uncheck();
      await expect(checkbox).not.toBeChecked();
    }
  });

  test('Validate at least one drink must be selected (form validation)', async ({ page }) => {
   for (const drink of drinks) {
      const checkbox = page.getByLabel(drink);
      console.log("checkbox :",checkbox)

      if(drink==='water')
      {
      // Check the box
      await checkbox.check();
      await expect(checkbox).toBeChecked();
      }}
  });

  test('2.Validate multiple drinks can be selected', async ({ page }) => {
    await page.getByLabel('Water').check();
    await page.getByLabel('Milk').check();

    await expect(page.getByLabel('Water')).toBeChecked();
    await expect(page.getByLabel('Milk')).toBeChecked();
    await expect(page.getByLabel('Coffee')).not.toBeChecked();
    await expect(page.getByLabel('Wine')).not.toBeChecked();
  });

});