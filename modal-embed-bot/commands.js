import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
import { getCommandsJSON } from "./src/commands/presentation.command.js";

dotenv.config();

const commands = getCommandsJSON();
const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log(commands);
    await rest
      .put(
        Routes.applicationGuildCommands(
          process.env.DISCORD_APPLICATION_ID,
          process.env.DISCORD_SERVER_ID
        ),
        { body: commands }
      )
      .then((result) => {
        console.log(result);
      });
    console.log("Actualización de comandos correcta.");
  } catch (error) {
    console.error(error);
  }
})();
