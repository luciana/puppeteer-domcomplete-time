

const puppeteer = require('puppeteer');
const testPage = require('./test.js');

async function startTest() {

		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		console.log(await testPage(page));
		await browser.close();
};

module.exports = startTest;