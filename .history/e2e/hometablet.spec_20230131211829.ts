import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: {width: 820, height: 1180}
})

test.describe("testing for home tablet", () => {
    test("Testing for colours on tablet", async ({ page }) => {
        await page.goto('http://localhost:3000')

        const main
    })
}) 