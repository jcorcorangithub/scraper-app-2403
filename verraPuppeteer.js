const puppeteer = require("puppeteer");
const fs = require("fs");
// const pdf = require("pdf-parse");

async function scrapePDF(){
    const verraProjectsUrl = 'https://registry.verra.org/app/search/VCS';
    
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto(verraProjectsUrl);
    const searchButton = '#verra-application > div > apx-search-page > div > apx-search-container > div > div.card-body > div > div.col.p-0.ml-2 > apx-search-selection-criteria > div > form > div.card-footer.fixed-bottom.bg-transparent.border-0.search-card > div > button:nth-child(1)';
    await page.waitForSelector(searchButton);
    page.click(searchButton);


    //////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////
    // for grabbing/downloading the pdf and saving it

    await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: '/Users/jamescorcoran/Desktop/scraper-app-2403/downloads/verraPDF'});
    const pdfButton = '#verra-application > div > apx-search-page > div > apx-search-container > div > div.card-body > div > div:nth-child(2) > apx-project-search-results > div > apx-search-results-header > div > button:nth-child(2)';
    // const pdfButton = '//*[@id="verra-application"]/div/apx-search-page/div/apx-search-container/div/div[2]/div/div[2]/apx-project-search-results/div/apx-search-results-header/div/button[2]'
    await page.waitForSelector(pdfButton);
    await page.click(pdfButton);

    const fileNames = fs.readdirSync('/Users/jamescorcoran/Desktop/scraper-app-2403/downloads/verraPDF');
    const fileData = fs.readFileSync(`/Users/jamescorcoran/Desktop/scraper-app-2403/downloads/verraPDF/${fileNames[0]}`);

    await Apify.setValue('MY-PDF', fileData, { contentType: 'application/pdf'});



    //////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////

    
    // await browser.close();
};

scrapePDF();