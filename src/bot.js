import { Telegraf } from "telegraf";
import "dotenv/config";
import fetchCryptoNews from "./scrap.js";
import sendMessage from "./utils.js";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Welcome! Send me a topic, and I'll fetch the news for you.");
});

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

bot.on("text", async (ctx) => {
  try {
    const searchTerm = ctx.message.text;
    const newsArticles = await fetchCryptoNews(searchTerm);
    for (const article of newsArticles) {
      if (!article.image) {
        console.log("Invalid No Article Image");
        continue;
      }
      const caption = `${article.title}\n${article.link}`;
      try {
        ctx.replyWithPhoto(article.image);
        ctx.reply(caption);
        await delay(5000); // Delay of 1 second between articles
      } catch (error) {
        console.error("Error sending article:", error);
        // Optionally notify the user about the failed article
        await ctx.reply(`Error sending article: ${article.title}`);
      }
    }
  } catch (error) {
    ctx.reply("Sorry, I couldn't fetch the news. Please try again later.");
  }
});

export default bot;
