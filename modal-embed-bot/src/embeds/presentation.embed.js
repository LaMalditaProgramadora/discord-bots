import { EmbedBuilder } from "discord.js";

export const getPresentationEmbed = (fullName, alias) => {
  const responseEmbed = new EmbedBuilder()
    .setColor(0x0099ff)
    .setTitle("Presentación exitosa")
    .addFields({ name: "Nombre completo", value: fullName })
    .addFields({ name: "Alias", value: alias });
  return responseEmbed;
};
