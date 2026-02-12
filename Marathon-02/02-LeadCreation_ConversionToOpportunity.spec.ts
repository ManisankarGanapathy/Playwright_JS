import { expect, test } from '@playwright/test'

const lastName = 'Ross'
const firstName = 'Geller'
const companyName = 'Test Leaf'
const opportunityName = 'Singapore'

test('Create Lead and convert in to opportunity', async ({ page }) => {
    await page.goto('https://login.salesforce.com/')

    //Login
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()

    //Select Sales
    await page.locator(`//button[@title = 'App Launcher']`).click()
    await page.locator(`//button[text() = 'View All']`).click()
    await page.getByPlaceholder(`Search apps or items...`).fill(`Marketing`)
    await page.locator(`//mark[text() = 'Marketing']`).click()

    //Create Lead
    await page.locator(`//a[@title='Leads']`).click()
    await page.locator(`//div[@title='New']`).click()
    await page.locator(`//button[@name = 'salutation']`).click()
    await page.locator(`//*[text()='Mr.']`).click();
    await page.locator(`//input[@name = 'firstName']`).fill(firstName);
    await page.locator(`//input[@name = 'lastName']`).fill(lastName);
    await page.locator(`//input[@name = 'Company']`).fill(companyName)
    await page.locator(`//button[@name = 'SaveEdit']`).click()

    //Validate the Lead  is created
    page.setDefaultTimeout(5000)
    const successMessage = await page.locator(`//div[@data-key="success"]//a//div`).innerText()
    console.log('Success message for create lead is: ', successMessage)
    expect(successMessage).toContain(lastName)
    console.log('Lead[', lastName, '] created successfully')

    //Convert Lead
    await page.locator(`(//button[text()= 'Convert'])`).click()
    await page.locator(`//button[contains(text(), '${companyName}-')]`).click()
    const opportunity = page.locator(`//div[@class = 'createPanelExpanded']//input`)
    opportunity.clear()
    opportunity.fill(opportunityName)
    await page.locator(`(//button[text() = 'Convert'])[2]`).click()
    page.setDefaultTimeout(5000)
    const conversionMessage = await page.locator(`//div[@class = 'title']//h2`).innerText()
    console.log('Success message for conversion lead is: ', conversionMessage)
    expect(conversionMessage).toContain('Your lead has been converted')
    console.log('Lead[', lastName, '] converted successfully')

    //Validate Lead is not available
    await page.getByRole(`button`, { name: 'Go to Leads' }).click()
    await page.locator(`//input[@name = 'Lead-search-input']`).fill(lastName)
    await page.keyboard.press('Enter')
    page.setDefaultTimeout(5000)
    const result = await page.locator(`//h3`).nth(0).innerText()
    console.log('Result after lead conversion is: ', result)

    //Navigate to Opportuniity
    await page.locator(`//a[@title='Opportunities']`).click()
    await page.locator(`//input[@name = 'Opportunity-search-input']`).fill(opportunityName)
    await page.keyboard.press('Enter')
    await page.locator(`//span[contains(text(), '${opportunityName}')]`).click()
    page.setDefaultTimeout(5000)
    await page.locator(`//span[text() = 'Mark Stage as Complete']`).innerText()
    page.screenshot()
})