import { Client, Events, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { getPresentationModal } from "./src/modals/presentation.modal.js";
import { getPresentationEmbed } from "./src/embeds/presentation.embed.js";
import { addCommandsToClient } from "./src/commands/presentation.command.js";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

addCommandsToClient(client);

client.on(Events.ClientReady, () => {
  console.log("modal-embed-bot está en línea");
});

client.on(Events.InteractionCreate, async (interaction) => {
  try {
    if (interaction.commandName === "modal") {
      const responseModal = getPresentationModal();
      interaction.showModal(responseModal);
    }
  } catch (error) {
    console.error(error);
  }
});

client.on(Events.InteractionCreate, async (interaction) => {
  try {
    if (interaction.isModalSubmit()) {
      const fullName = interaction.fields.getTextInputValue("fullNameInput");
      const alias = interaction.fields.getTextInputValue("aliasInput");
      const responseEmbed = getPresentationEmbed(fullName, alias);
      interaction.reply({ embeds: [responseEmbed] });
    }
  } catch (error) {
    console.error(error);
  }
});

client.login(process.env.DISCORD_TOKEN);
