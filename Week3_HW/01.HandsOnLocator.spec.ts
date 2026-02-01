import { expect, test } from '@playwright/test'

const lastName = 'Rakesh'
const firstName = 'Roman'

test('01. Create Lead', async ({ page }) => {
    await page.goto('https://login.salesforce.com/')
    //Login
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()

    //Select Sales
    await page.locator(`//button[@title = 'App Launcher']`).click()
    await page.locator(`//button[text() = 'View All']`).click()
    await page.locator(`//p[text()='Sales']`).click();

    //Create Lead
    await page.locator(`//a[@title='Leads']`).click()
    await page.locator(`//div[@title='New']`).click()
    await page.locator(`//button[@name = 'salutation']`).click()
    await page.locator(`//*[text()='Mr.']`).click();
    await page.locator(`//input[@name = 'lastName']`).fill(lastName);
    await page.locator(`//input[@name = 'Company']`).fill('Test Leaf')
    await page.locator(`//button[@name = 'SaveEdit']`).click()

    //Validate the Lead  is created
    const successMessage = await page.locator(`//div[@data-key="success"]//a//div`).innerText()
    expect(successMessage).toContain(lastName)
    console.log('Lead[', lastName, '] created successfully')
})


test('02. Edit Lead', async ({ page }) => {
    await page.goto('https://login.salesforce.com/')
    //Login
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()

    //Select Sales
    await page.locator(`//button[@title = 'App Launcher']`).click()
    await page.locator(`//button[text() = 'View All']`).click()
    await page.locator(`//p[text()='Sales']`).click();

    //Search Lead
    await page.locator(`//a[@title='Leads']`).click()
    await page.locator(`//input[@name = 'Lead-search-input']`).fill(lastName)
    await page.keyboard.press('Enter')

    //Edit Lead
    await page.locator(`//span[contains(text(), '${lastName}')]`).click()
    await page.locator(`(//button[@name = 'Edit'])`).click()
    await page.getByPlaceholder('First Name').fill(firstName)
    await page.getByRole('textbox', { name: 'Title' }).fill('Playwright Engineer')
    await page.locator(`//button[@name = 'SaveEdit']`).click()


    //Validate the Lead  is created
    const successMessage = await page.locator(`//div[@data-key="success"]//span//span`).innerText()
    expect(successMessage).toContain('Success notification')
    console.log('Lead editted successfully')
})
    

test('03. Create Individual', async ({ page }) => {
    await page.goto('https://login.salesforce.com/')
    //Login
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()

    //Select Sales
    await page.locator(`//button[@title = 'App Launcher']`).click()
    await page.locator(`//button[text() = 'View All']`).click()
    await page.locator(`//p[text() = 'Individuals']`).click();

    //Create individual
    await page.locator(`(//a[@title = 'Individuals']//following-sibling::one-app-nav-bar-item-dropdown//a)[1]`).click()
    await page.locator(`//span[text() = 'New Individual']`).click()
    await page.getByPlaceholder('Last Name').fill(lastName)
    await page.locator(`//span[text() = 'Save']`).click()

    //Validate the Lead  is created
    const successMessage = await page.locator(`//div[@data-key="success"]//span//span`).innerText()
    expect(successMessage).toContain('Success notification')
    console.log('Individual created successfully')
}) 

test('04. Edit Individual', async ({ page }) => {
    await page.goto('https://login.salesforce.com/')
    //Login
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()

    //Select Sales
    await page.locator(`//button[@title = 'App Launcher']`).click()
    await page.locator(`//button[text() = 'View All']`).click()
    await page.locator(`//p[text() = 'Individuals']`).click();

    //Search individual
    await page.locator(`(//a[contains(@title, 'Individuals')]//following-sibling::one-app-nav-bar-item-dropdown//a)[1]`).click()
    await page.locator(`//input[@name = 'Individual-search-input']`).fill(lastName)
    await page.keyboard.press('Enter')

    //Edit Individual
    page.waitForTimeout(3000)
    await page.locator(`//a[@title='${lastName}']`).click()
    await page.locator(`//a[@title= 'Edit']`).click()
    await page.getByPlaceholder('First Name').fill(firstName)
    await page.locator(`//span[text() = 'Save']`).click()


    //Validate the Individual is saved
    const successMessage = await page.locator(`//div[@data-key="success"]//span//span`).innerText()
    expect(successMessage).toContain('Success notification')
    console.log('Lead editted successfully')
})
