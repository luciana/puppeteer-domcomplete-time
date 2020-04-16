

const puppeteer = require('puppeteer');
const testPage = require('./test.js');

async function startTest(url, repeat) {

	try{	
		process.setMaxListeners(Infinity); 

		const browser = await puppeteer.launch({
        	headless: true
    	});
		const page = await browser.newPage();	

		console.log(await testPage(page, url));
		await browser.close();
	} catch (err) {
		console.log("error starting test", err);
	}
		
};

module.exports = startTest;