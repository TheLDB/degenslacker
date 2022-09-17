# WIP (not finished)

# Meet Degenslacker

Degenslacker is a web app built for [Farcaster](https://farcaster.xyz), that allows you to create "feeds", and monitor specific casters.

When one of those users posts a cast, it gets sent to either a [Discord Webhook](), [Slack Webhook](), or another miscellanious webhook.

## How to use
To create your first feed, go to [https://degenslacker.xyz](https://degenslacker.xyz) and login with your Web3 wallet.

Once you've created a feed, add the users you want to monitor, and set up webhooks using the settings panel

- - - 
## Project Structure
### [degenslacker](./degenslacker/) - Web UI
The Web UI built with [Next](), [Typescript](), and [Tailwind]()

### [scripts](./scripts/)
Typescript functions that run on a cron job every 2 minutes and fetch new casts to send to the webhook(s)

## Credits
<img src="https://pbs.twimg.com/profile_images/1562128401405603841/2_2gRXIe_400x400.jpg" width="100" />

Massive credit to [@nichochar](https://twitter.com/nichochar), otherwise known as Pushix on Farcaster
- For the original idea
- For the name