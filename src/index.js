import googleNewsScraper from "google-news-scraper"


async function fetchCryptoNews() {
  try {
    const articles = await googleNewsScraper({
      searchTerm: "Crypto", 
      prettyURLs: true,
      queryVars: {
        hl: "en-US",
        gl: "US",
        ceid: "US:en",
      },
      timeframe: "1d",
      puppeteerArgs: [], 
    });
    console.log("Articles", articles);
  } catch (error) {
    console.error("Error fetching news", error);
  }
}

fetchCryptoNews();
