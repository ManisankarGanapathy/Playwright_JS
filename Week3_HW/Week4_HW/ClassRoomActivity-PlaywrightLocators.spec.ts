/*
Write a Playwright script to perform the following actions on the Salesforce login page:
1. Navigate to the Salesforce login page.
2. Use different Playwright locator strategies to locate the username and password fields.
3. Enter sample credentials into the username and password fields.
4. Click the login button using a Playwright locator.
5. Verify that the login was successful by checking for a specific element on the landing page.

Sample credentials :
Username:dilipkumar.rajendran@testleaf.com
Password: TestLeaf@2025
*/

import { expect, test } from "@playwright/test";


test('Learn playwright locators', async ({ page }) => {

    await page.goto('https://login.salesforce.com/?locale=in');
    await page.getByRole('textbox', { name: 'Username' }).fill('dilipkumar.rajendran@testleaf.com')
    await page.getByRole("textbox", { name: "Password" }).fill('TestLeaf@2025');
    await page.getByRole("button", { name: "Log In" }).click();

    const validateText = await page.getByText('Opportunities', { exact: true }).innerText()
    expect(validateText).toContain('Opportunities')





})

