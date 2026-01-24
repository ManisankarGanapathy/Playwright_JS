import { test, chromium, firefox, webkit } from "@playwright/test"



test('Test to launch RedBus in Edge', async () => {
    const browser = await chromium.launch({ channel: "msedge", headless: false })
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto(`https://www.redbus.in`)
    console.log("Page title:", await page.title())
    console.log("Page.URL:", page.url())
})

test('Test to launch Flipkart in webkit', async () => {
    const browser = await webkit.launch({ headless: false });
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto(`https://www.flipkart.com`)
    console.log("Page title:", await page.title())
    console.log("Page.URL:", page.url())
})
