import { test } from '@playwright/test'


test('', async ({ page }) => {
    await page.goto('http://leaftaps.com/opentaps/control/main')

    //Login
    await page.locator('#username').fill('Demosalesmanager')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.waitForTimeout(3000)
    let title = await page.title()
    console.log('Login successful and the page title is: ', title)
    await page.locator(`.crmsfa`).click()

    //Navigate to leads and create lead
    await page.locator(`//a[text() = 'Leads']`).click()
    await page.locator(`//a[text() = 'Create Lead']`).click()

    //Select the currency using different ways
        //Value
        await page.selectOption(`#createLeadForm_currencyUomId`, { value: 'ARA' })
        //VisibleTex
        await page.selectOption(`#createLeadForm_currencyUomId`, { label: 'ECS - Ecuador Sucre' })
        //Index
        await page.selectOption(`#createLeadForm_currencyUomId`, { index: 9 })

    // Print all the currency
    const dropdown = page.locator(`#createLeadForm_currencyUomId`);
    const dropDownCount = await dropdown.count();

    for (let index = 0; index < dropDownCount; index++) {
        console.log(await dropdown.nth(index).innerText());
    }

    //Check Submit
    const submit = page.locator(`//input[@value = 'Create Lead']`)
    console.log(submit)
    submit.click()
})