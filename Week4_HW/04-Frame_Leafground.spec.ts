import { expect, test } from '@playwright/test'


test('04. Frames in Leafground', async ({ page }) => {
    await page.goto('https://leafground.com/frame.xhtml')

    //Interact with the Click Me button inside frame
    const clickMe = page.frameLocator(`[src="default.xhtml"]`).getByRole('button')
    await clickMe.click()
    // Assert the text changed after clicking the button
    const changedText = await clickMe.innerText()
    console.log("Click text updated as: ", changedText)

    //Get the total count of frames present in the page
    const totalFrames = page.frames()
    console.log('Total Frames in the page is: ', totalFrames.length)

    //Interact with the Click Me button present inside the nested frames
    const nestedCick = page.frameLocator(`[src="page.xhtml"]`).frameLocator('#frame2').getByRole('button')
    await nestedCick.click()
    // Assert the text changed after clicking the button
    const changedText_nestedCick = await nestedCick.innerText()
    console.log("Click text in nested frame updated as: ", changedText_nestedCick)
})