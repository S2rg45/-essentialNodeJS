const puppeteer = require('puppeteer')

// (async() => {
async function as() {
    console.log("start")
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto('https://es.wijipedia.org/wiki/Node.js')
        // browser.close()
}

while (true) {
    as()
}
// })()