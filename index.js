const puppeteer = require('puppeteer');
const dotenv = require('dotenv');
dotenv.config();

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

visitNewTab = async function (url, browser) {
	let page = await browser.newPage();
	await page.setDefaultNavigationTimeout(0);
	await page.goto(url);
	await delay(10000);
	await page.close();
};

const main = async function () {
	let urls = process.env.URLS.split(' ');
	console.log(urls);
	const browser = await puppeteer.launch({ headless: false });
	for (const url of urls) {
		await visitNewTab(url, browser);
		await delay(2000);
	}
	// urls.forEach(async (url) => {
	// 	await visitNewTab(url, browser);
	// 	await delay(5000);
	// });
	// await visitNewTab(urls[0], browser);
	await browser.close();
};

main();

// const test = async function () {
// for (let i = 0; i < 30; i++) {
// 	console.log('index: ', i);
// 	await delay(3000);
// }
// 	let urls = process.env.URLS.split(' ');
// 	console.log(urls);
// 	urls.forEach(async (url) => {
// 		main(url);
// 		await delay(6000);
// 	});
// };
// test();
