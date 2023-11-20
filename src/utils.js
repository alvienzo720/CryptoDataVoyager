import "dotenv/config";
import bot from "./bot.js";

const normalizeeMessage = (message) => {
  return message
    .replaceAll("_", "\\_")
    .replaceAll("|", "\\|")
    .replaceAll(".", "\\.")
    .replaceAll("{", "\\{")
    .replaceAll("}", "\\}")
    .replaceAll("=", "\\=")
    .replaceAll("+", "\\+")
    .replaceAll(">", "\\>")
    .replaceAll("<", "\\<")
    .replaceAll("-", "\\-")
    .replaceAll("!", "\\!");
};

const sendMessage = async (message) => {
  try {
    for (const id of process.env.WHITELISTED_USERS) {
      await bot.telegram
        ?.sendMessage(id, normalizeeMessage(message), {
          parse_mode: "MarkdownV2",
          disable_web_page_preview: true,
        })
        .then(({ message_id }) => {
          if (delete_message) {
            setTimeout(() => {
              bot.telegram.deleteMessage(id, message_id),
                process.env.TELEGRAM_DELETE_MESSAGE_INTERVAL;
            });
          }
        })
        .catch((error) => {
          console.log("error:", error);
        });
    }
  } catch (error) {
    console.log("error:", error);
  }
};

export default  sendMessage ;
