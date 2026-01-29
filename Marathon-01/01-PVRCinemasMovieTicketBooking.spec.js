import { expect, test } from '@playwright/test'


test('PVR Login', async ({ page }) => {
    await page.goto('https://www.pvrcinemas.com/')

    //Select Location
    await page.locator(`//h6[text() = 'Chennai']`).click()

    //Select the movie details
    await page.locator(`//span[text() = 'Cinema']`).click()
    await page.locator(`//div[@id = 'cinema']//span`).click()
    await page.locator(`//span[contains(text(), 'Marina')]`).click()
    await page.locator(`//span[contains(text(), 'Tomorrow')]`).click()
    await page.locator(`(//span[text() = 'LOCKDOWN'])[2]`).click()
    await page.locator(`//span[text() = '06:35 PM']`).click()
    await page.locator(`//div[contains(@class, 'lefts')]//button`).click()

    //Select Seat
    await page.locator(`button:text-is("Accept")`).click()
    await page.locator(`.seat-current-pvr`).first().click();

    //Validate the ticket details
    const seatNumber = await page.locator(`//div[@class = 'seat-number']//p`).textContent()
    const price = await page.locator(`//div[@class = 'grand-prices']//h6`).textContent()
    expect(seatNumber).toContain('F12')
    expect.soft(price).toContain('242.61')

    //Validate the page title
    await expect(page).toHaveTitle("PVR Cinemas");

    //Proceed to booking
    await page.locator(`//button[text() = 'Proceed']`).click()

    await page.waitForTimeout(10000)
})