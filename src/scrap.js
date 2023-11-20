import googleNewsScraper from "google-news-scraper";

export async function fetchCryptoNews(searchTerm) {
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
    const LastTenArticles = articles.slice(0, 10);
    console.log("Last Articles", LastTenArticles);
  } catch (error) {
    console.error("Error fetching news", error);
  }
}

fetchCryptoNews("Python");
