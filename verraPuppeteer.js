const puppeteer = require("puppeteer");
const fs = require("fs");
// const pdf = require("pdf-parse");
const axios = require('axios');

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

    // await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: '/Users/jamescorcoran/Desktop/scraper-app-2403/downloads/verraPDF'});
    // const pdfButton = '#verra-application > div > apx-search-page > div > apx-search-container > div > div.card-body > div > div:nth-child(2) > apx-project-search-results > div > apx-search-results-header > div > button:nth-child(2)';
    // // const pdfButton = '//*[@id="verra-application"]/div/apx-search-page/div/apx-search-container/div/div[2]/div/div[2]/apx-project-search-results/div/apx-search-results-header/div/button[2]'
    // await page.waitForSelector(pdfButton);
    // await page.click(pdfButton);

    axios.post('https://registry.verra.org/uiapi/resource/resource/search?$skip=0&count=true&$format=pdf&$exportFileName=allprojects.pdf',{})
      .then(function (response) {
        // console.log(response);
        // const fileNames = fs.readdirSync('/Users/jamescorcoran/Desktop/scraper-app-2403/downloads/verraPDF');
        // const fileData = fs.readFileSync(`/Users/jamescorcoran/Desktop/scraper-app-2403/downloads/verraPDF/${fileNames[0]}`);
        // Apify.setValue('MY-PDF', response.data, { contentType: 'application/pdf'});
        fs.writeFileSync('/Users/jamescorcoran/Desktop/scraper-app-2403/downloads/verraPDF.pdf', response.data, (err) => {
            if (err)
              console.log(err);
            else {
              console.log("File written successfully\n");
              console.log(response.data);
            //   console.log("The written has the following contents:");
            //   console.log(fs.readFileSync("/Users/jamescorcoran/Desktop/scraper-app-2403/downloads/verraPDF", "utf8"));
            }
          });
      })
      .catch(function (error) {
        console.log(error);
      });


    // const fileNames = fs.readdirSync('/Users/jamescorcoran/Desktop/scraper-app-2403/downloads/verraPDF');
    // const fileData = fs.readFileSync(`/Users/jamescorcoran/Desktop/scraper-app-2403/downloads/verraPDF/${fileNames[0]}`);

    // await Apify.setValue('MY-PDF', fileData, { contentType: 'application/pdf'});



    //////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////

    
    // await browser.close();
};

scrapePDF();