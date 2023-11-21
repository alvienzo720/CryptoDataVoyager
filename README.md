# CryptoDataVoyager

This Telegram bot is designed to fetch and share the latest news articles on cryptocurrencies. It uses the `google-news-scraper` package to scrape news from Google News based on the user's input search term.

## Features

- Fetches the latest crypto news articles based on user's input.
- Sends a photo of the news article along with its title and link.
- Handles errors and notifies users accordingly.

## How to Use

1. Start a chat with the bot.
2. Send a topic or keyword related to cryptocurrencies.
3. The bot will reply with the latest news articles related to the topic.

## Setup

### Prerequisites

- Node.js
- npm or yarn
- Telegram bot token

### Installation

1. Clone the repository:

2. Install dependencies:

3. Create a `.env` file and add your Telegram bot token:

4. Run the bot:


## Environment Variables

- `BOT_TOKEN` - Your Telegram bot token.
- `TELEGRAM_DELETE_MESSAGE_INTERVAL` - Message Interval.
- `WHITELISTED_USERS` - [user Id, User Id] an array of allowed users.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page] if you want to contribute.

## License

[MIT](LICENSE)

## Acknowledgments

- Google News Scraper
- Telegraf for Telegram bot framework
