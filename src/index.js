import express from "express";
import bot from "./bot.js"

const app = express();

const start = async () => {
  console.log(`---`.repeat(10));
  console.log(`starting bot  🤖 `);
  console.log(`---`.repeat(10));

  try {
    await bot.launch();
    console.log("Bot launched successfully.");
  } catch (error) {
    console.error("Error launching bot:", error);
  }
};

start();
app.listen(5000, () => {
  console.log("Server listening on port 5000! We are Good to go 👍");
});
