import { expect, test } from '@playwright/test'


test('Order Mobile in Service Now', async ({ page }) => {
    await page.goto('https://dev274283.service-now.com/')

    //Login
    await page.locator(`#user_name`).fill('admin')
    await page.locator(`#user_password`).fill('M7Afl8Nj-B^j')
    await page.locator(`#sysverb_login`).click()

    //Navigate to Service Catalog
    await page.getByRole('menuitem', {name: 'All'}).click()
    await page.getByText('Service Catalog').click()

    //Navigate to service catalogue and select iPhone
    const frame = await page.frameLocator(`#gsft_main`)
    await frame.locator(`//h2[contains(text(), 'Mobiles')]`).click()
    await frame.locator(`//strong[text() = 'Apple iPhone 13']`).click()

    //Fill the phone details and order
    await frame.locator(`//label[contains(text(), 'No')]`).click()
    await frame.locator(`(//select)[1]`).selectOption({ value: 'Unlimited' })
    page.setDefaultTimeout(5000)
    await frame.locator(`//button[text() = 'Order Now']`).dblclick()
    page.setDefaultTimeout(10000)
    const orderConfirmation = await frame.locator(`#sc_order_status_intro_text`).innerText()
    console.log('Order placed:', orderConfirmation)
    page.setDefaultTimeout(5000)
    page.screenshot()
})