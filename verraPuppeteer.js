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

    axios.post('https://registry.verra.org/uiapi/resource/resource/search?$skip=0&count=true&$format=pdf&$exportFileName=allprojects.pdf', {
        // firstName: 'Fred',
        // lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    // axios("https://registry.verra.org/uiapi/resource/resource/search?$skip=0&count=true&$format=pdf&$exportFileName=allprojects.pdf", {
    //     "headers": {
    //         "accept": "application/pdf",
    //         "accept-language": "en-US,en;q=0.9",
    //         "cache-control": "no-cache",
    //         "content-type": "application/json",
    //         "pragma": "no-cache",
    //         "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\";v=\"99\"",
    //         "sec-ch-ua-mobile": "?0",
    //         "sec-ch-ua-platform": "\"macOS\"",
    //         "sec-fetch-dest": "empty",
    //         "sec-fetch-mode": "cors",
    //         "sec-fetch-site": "same-origin",
    //         "cookie": "ASPSESSIONIDAGTASAQS=FHCEBHGAMGJDPBKCIHKPHJEA; fpestid=i8UrwnBZ6Y3WOI67ryUEVU6WhUU-akt5di-UhvYSr-AkgjsGoH6ROQLksiA9gPM75D5Efw; _ga=GA1.2.738807081.1647904552; ASPSESSIONIDAETCQCRS=OBHHOOPBADHAFGFEHJJHPDAH; ASPSESSIONIDSGRTRRBR=EIIOCPJCHBHAACOIIAFKEJIC",
    //         "Referer": "https://registry.verra.org/app/search/VCS",
    //         "Referrer-Policy": "strict-origin-when-cross-origin"
    //     },
    //     "body": "{\"program\":\"VCS\",\"resourceStatuses\":[\"VCS_EX_CRD_PRD_VER_REQUESTED\",\"VCS_EX_CRD_PRD_REQUESTED\",\"VCS_EX_REGISTERED\",\"VCS_EX_REG_VER_APPR_REQUESTED\",\"VCS_EX_REGISTRATION_REQUESTED\",\"VCS_EX_REJ\",\"VCS_EX_UNDER_DEVELOPMENT_CLD\",\"VCS_EX_UNDER_DEVELOPMENT_OPN\",\"VCS_EX_UNDER_VALIDATION_CLD\",\"VCS_EX_UNDER_VALIDATION_OPN\",\"VCS_EX_CRED_TRANS_FRM_OTHER_PROG\",\"VCS_EX_WITHDRAWN\"]}",
    //     "method": "POST"
    //     });


    // const fileNames = fs.readdirSync('/Users/jamescorcoran/Desktop/scraper-app-2403/downloads/verraPDF');
    // const fileData = fs.readFileSync(`/Users/jamescorcoran/Desktop/scraper-app-2403/downloads/verraPDF/${fileNames[0]}`);

    // await Apify.setValue('MY-PDF', fileData, { contentType: 'application/pdf'});



    //////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////

    
    // await browser.close();
};

scrapePDF();