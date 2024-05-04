import { StringSelectMenuBuilder, StringSelectMenuOptionBuilder, PermissionsBitField, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";
import BuildMenu from "../../core/schema/selectMenus.js";

export default BuildMenu({
    name: 'opciones',
    tysdfsdfpe: 'menu',
    data: new StringSelectMenuBuilder()
        .setCustomId('opciones')
        .setPlaceholder('Selecciona la opcion!')
        .addOptions(
            new StringSelectMenuOptionBuilder()
                .setLabel('Cerrar Ticket')
                .setDescription('(Mod) Cerrar ticket, conclusion del problema.')
                .setEmoji('🔒')
                .setValue('close'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Dar Rol Socio')
                .setDescription('(Mod) Ten el id del usuario copiado!!')
                .setEmoji('⭐')
                .setValue('socio'),
        ),
    /**
     * 
     * @param {import('../../core/types/interactionTypes.js').CustomSelectMenuInteraction} interaction 
     */
    async execute(interaction) {

        const value = interaction.values[0]

        switch (value) {
            case 'close':
                if (!interaction.member?.permissions?.has(PermissionsBitField.Flags.ManageMessages || PermissionsBitField.Flags.Administrator)) {
                    interaction.reply({
                        content: 'No eres moderador para usar este comando!',
                        ephemeral: true
                    })
                    return
                } else {
                    return interaction.channel.delete()
                }
            case 'socio':
                if (!interaction.member?.permissions?.has(PermissionsBitField.Flags.ManageMessages || PermissionsBitField.Flags.Administrator)) {
                    interaction.reply({
                        content: 'No eres moderador para usar este comando!',
                        ephemeral: true
                    })
                } else {
                    let modal = interaction.client.modals.get('modalSocio')?.data
                    return await interaction.showModal(modal);
                }
                break;

            default:
                return
                break;
        }
    }
})
