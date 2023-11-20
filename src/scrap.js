import googleNewsScraper from "google-news-scraper";

async function fetchCryptoNews(searchTerm) {
  try {
    const articles = await googleNewsScraper({
      searchTerm: searchTerm,
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
// console.log("Last Articles", LastTenArticles);
    return articles.slice(0,10)
  } catch (error) {
    console.error("Error fetching news", error);
  }
}

export default fetchCryptoNews;
