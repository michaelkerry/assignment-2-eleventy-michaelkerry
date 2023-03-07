
const EleventyFetch = require("@11ty/eleventy-fetch");


module.exports = async function(){
    const apiKey = process.env.NPS_API_KEY;

    let url = `https://developer.nps.gov/api/v1/parks?api_key=${apiKey}&limit=600`;
    let userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0';

    try {
        console.log(`url = ${url}`);
        let parks = await EleventyFetch(url, {
            fetchOptions: {
                headers: {
                    "User-Agent": userAgent,
                },
            },
            duration: "1d",
            type: "json",
        }).then((jsonData) => {
            return jsonData;
        });
        return(parks);
    } catch (err) {
        console.error(`something is wrong fetching data from ${url}`);
        console.log(err);
    }
}