const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeData() {
    try {
        // Fetch the HTML of the page
        const response = await axios.get('https://www.beazer.com/metro-landing/metroid=atlanta?LeadSourceID=20&utm_campaign=262009474&utm_term=search%20for%20homes&utm_source=google&utm_medium=cpc&medium=tsa&ds_rl=7252&gad_source=1&gclid=CjwKCAjw6c63BhAiEiwAF0EH1AWbBWqGAmjc5EvnHj37soA_KeqX_Uw1oVL-VpEqVtMR9-WIsAziWRoCwJAQAvD_BwE&gclsrc=aw.ds');
        
        // Load the HTML into cheerio
        const $ = cheerio.load(response.data);
        
        // Select elements with the specified class
        const items = [];
        $('.font40.bold.uppercase.OneLinkNoTx').each((index, element) => {
            items.push($(element).text().trim());
        });

        // Log the results
        console.log(items);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

scrapeData();
