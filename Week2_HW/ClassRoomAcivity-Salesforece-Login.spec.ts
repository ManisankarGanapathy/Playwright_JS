import { test } from '@playwright/test'


test('', async ({ page }) => {
    await page.goto('https://login.salesforce.com/')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('input[name=pw]').fill('TestLeaf@2025')
    await page.locator('input[name=Login]').click()
    await page.locator('a[title=Home]').click()
    let title = await page.title()
    console.log('Login successful and the page title is: ',title)
})