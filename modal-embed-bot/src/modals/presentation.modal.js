import {
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} from "discord.js";

const modal = new ModalBuilder()
  .setCustomId("presentationModal")
  .setTitle("Obtén tu reporte de actividades");

const fullNameInput = new TextInputBuilder()
  .setCustomId("fullNameInput")
  .setLabel("Nombre completo")
  .setStyle(TextInputStyle.Short)
  .setRequired(true);

const aliasInput = new TextInputBuilder()
  .setCustomId("aliasInput")
  .setLabel("Alias")
  .setStyle(TextInputStyle.Short)
  .setRequired(true);

const fullNameActionRow = new ActionRowBuilder().addComponents(fullNameInput);
const aliasActionRow = new ActionRowBuilder().addComponents(aliasInput);
modal.addComponents(fullNameActionRow, aliasActionRow);

export const getPresentationModal = () => {
  return modal;
};
