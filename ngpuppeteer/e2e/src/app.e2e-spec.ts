import * as puppeteer from 'puppeteer';

describe('workspace-project App', () => {
  it('Test Puppeteer screenshot', async () => {
    const browser = await puppeteer.launch({
      devtools: true,
      slowMo: 50 // slow down by 50ms
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:4200');
    await page.screenshot({ path: 'tmp/example.png' });

    await browser.close();
  });
});
