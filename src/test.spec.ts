import { Page } from "puppeteer";

// declare const browser: puppeteer.Browser;
declare const page: Page;

describe('Google', () => {
    beforeAll(async () => {
      await page.goto('https://google.com')
    })
  
    it('should display "google" text on page', async () => {
      await expect(page).toMatch('google')
    })
  })