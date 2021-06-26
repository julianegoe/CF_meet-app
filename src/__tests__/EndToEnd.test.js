import puppeteer from 'puppeteer';

jest.setTimeout(30000);

describe('show/hide an event details', () => {
	let browser;
	let page;
	beforeAll(async () => {
		const config = {
			headless: false,
			slowMo: 250,
			ignoreDefaultArgs: ['--disable-extensions'], // ignores default setting that causes timeout errors
		};

		browser = await puppeteer.launch();
		page = await browser.newPage();
		await page.goto('http://localhost:3000/');
		await page.waitForSelector('.event');
	});

	afterAll(() => {
		browser.close();
	});

	test('An event element is collapsed by default', async () => {
		const eventDetails = await page.$('.event .event__Details');
		expect(eventDetails).toBeNull();
	});

	test('User can expand an event to see its details', async () => {
		await page.click('.event .details-btn');

		const eventDetails = await page.$('.event .event__Details');
		expect(eventDetails).toBeDefined();
	});

	test('User can collapse an event to hide its details', async () => {
		await page.click('.event .details-btn');
		const eventDetails = await page.$('.event .event__Details');
		expect(eventDetails).toBeNull();
	});
});

describe('filter events by city', () => {
	let browser;
	let page;
	beforeAll(async () => {
		const config = {
			headless: false,
			slowMo: 250,
			ignoreDefaultArgs: ['--disable-extensions'], // ignores default setting that causes timeout errors
		};

		browser = await puppeteer.launch();
		page = await browser.newPage();
		await page.goto('http://localhost:3000/');
		await page.waitForSelector('.event');
	});

	afterAll(() => {
		browser.close();
	});

	test('show default number of events when user has not searched for any city', async () => {
		const events = await page.$('.event');
		expect(events).toBeDefined();
	});

	test('show list of suggestions when user searches for Berlin', async () => {
		await page.$('.city');
		await page.focus('.city');
		await page.keyboard.type('Berlin');
		const suggestions = await page.waitForSelector('.suggestions');
		expect(suggestions).toBeDefined();
	});

	test('show only Berlin events when user selects Berlin from suggestions', async () => {
		await page.click('.suggestions li');
		await page.waitForSelector('.event');
		const events = await page.$('.event');
		let value = await events.evaluate((event) => event.textContent);
		expect(value).toContain('Berlin, Germany');
	});
});
