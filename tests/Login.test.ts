import { test, expect, chromium } from '@playwright/test';
require('dotenv').config();

const user_name = process.env.USER_NAME;
const password = process.env.PASSWORD;
const url = process.env.URL;

test('navigate to resources', async () => {
  test.slow();
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page  = await context.newPage();

  await page.goto(url);

  // Fill in the username.
  await page.fill('input[name="loginfmt"]', user_name);

  // Click the submit button.
  await page.click('input[type="submit"]#idSIButton9');

  // Fill in the password field
  await page.fill('input[name="passwd"]', password); // Replace with your actual password

  // Click the sign-in button
  await page.click('input[type="submit"]#idSIButton9');

  // Wait for the password field to be visible.
  //await page.waitForSelector('input[name="passwd"]');
 
  console.log("1 :", await page.title());
  // Click the Resources link.
  await page.getByRole('link', { name: 'Resources' }).click();
  
  console.log("2: ", await page.title());
  // Expects page to have a heading with the name of Resources.
  await expect(page.getByTitle('Resources')).toHaveText('Resources');
//  await expect(page.getByRole('heading', { name: 'Resources' })).toBeVisible();
});
