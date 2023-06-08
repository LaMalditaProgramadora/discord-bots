import { CronJob } from "cron";
import dotenv from "dotenv";

dotenv.config();

export const startReminderJob = (client, pattern) => {
  let reminderJob = new CronJob(pattern, () => {
    client.channels.cache
      .get(process.env.DISCORD_CHANNEL_ID)
      .send(new Date() + "Esto es un recordatorio :D");
  });
  reminderJob.start();
};
