import { Collection, SlashCommandBuilder } from "discord.js";

const presentationCommand = {
  data: new SlashCommandBuilder().setName("modal").setDescription("Preséntate"),
};

export const addCommandsToClient = (client) => {
  client.commands = new Collection();
  client.commands.set("modal", presentationCommand.modal);
};

export const getCommandsJSON = () => {
  let commands = [presentationCommand.data.toJSON()];
  return commands;
};
