import { Client, Events, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { startReminderJob } from "./src/services/crono.service.js";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on(Events.ClientReady, () => {
  console.log("crono-bot está en línea");
  // Pattern:
  // "second(0-59) minute(0-59) hour(0-23) dayOfMonth(1-31) month(1-12) dayOfWeek(0-6)
  startReminderJob(client, "0 0 13 * * 0-6");
});

client.login(process.env.DISCORD_TOKEN);
