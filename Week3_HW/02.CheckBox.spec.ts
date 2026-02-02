import { expect, test } from '@playwright/test'


test('Chek Box', async ({ page }) => {
    // 1. Navigate to https://leafground.com/checkbox.xhtml 
    await page.goto('https://leafground.com/checkbox.xhtml')

    // 2. Click on the "Basic Checkbox.” 
    await page.locator(`//span[text() = 'Basic']`).click()

    // 3. Click on the "Notification Checkbox."
    await page.locator(`//span[text() = 'Ajax']`).click()

    // 4. Verify that the expected message is displayed.
    const successMessage_CheckBox = await page.locator(`.ui-growl-title`).innerText()
    expect(successMessage_CheckBox).toContain('Checked')

    // 5. Click on your favorite language (assuming it's related to checkboxes). 
    await page.locator(`//label[text() = 'Java']`).click()
    await page.locator(`//label[text() = 'Javascript']`).click()

    // 6. Click on the "Tri-State Checkbox." 
    await page.locator(`(//h5[text() = 'Tri State Checkbox']//parent::div//div)[3]`).click()

    // 7. Verify which tri-state option has been chosen. 
    console.log('State selected is: ', await page.locator(`//p[contains(text(), 'State')]`).innerText())

    // 8. Click on the "Toggle Switch." 
    await page.locator(`//div[contains(@class, 'toggleswitch-slider')]`).click()

    // 9. Verify that the expected message is displayed.
    await page.waitForTimeout(3000);
    const successMessage_ToggleSwitch = await page.locator(`//span[text() = 'Checked']`).innerText()
    expect(successMessage_ToggleSwitch).toContain('Checked')

    // 10. Verify if the Checkbox is disabled.
    const status = await page.locator(`//span[text() = 'Disabled']//preceding-sibling::div[1]`).isDisabled()
    console.log('Checkbox disabled?, ', status)

    // 11. Select multiple options on the page (details may be needed). 
    await page.locator(`//ul[@data-label='Cities']`).click()
    await page.locator(`//li[@data-item-value = 'Miami']//label`).click()
    await page.locator(`//li[@data-item-value = 'Amsterdam']//label`).click()

    // 12. Perform any additional actions or verifications required.

    // 13. Close the web browser when done.
    await page.close()
})