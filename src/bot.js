import {Telegraf} from "telegraf"
import "dotenv/config"

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Welcome to the bot!");
});

export default bot
