import {
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
    PermissionsBitField,
    ActionRowBuilder
} from "discord.js";
import BuildMenu from "../../core/schema/selectMenus.js";

export default BuildMenu({
    name: 'opciones',
    type: 'menu',
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
        const value = interaction.values[0];

        switch (value) {
            case 'close':
                if (!interaction.member?.permissions?.has(PermissionsBitField.Flags.ManageMessages || PermissionsBitField.Flags.Administrator)) {
                    await interaction.reply({
                        content: 'No eres moderador para usar este comando!',
                        ephemeral: true
                    });
                } else {
                    await interaction.reply({
                        content: 'Cerrando el ticket...',
                        ephemeral: true
                    });
                    await interaction.channel.delete();
                }
                break;

            case 'socio':
                if (!interaction.member?.permissions?.has(PermissionsBitField.Flags.ManageMessages || PermissionsBitField.Flags.Administrator)) {
                    await interaction.reply({
                        content: 'No eres moderador para usar este comando!',
                        ephemeral: true
                    });
                } else {
                    let modal = interaction.client.modals.get('modalSocio')?.data;
                    await interaction.showModal(modal);
                }
                break;

            default:
                await interaction.reply({
                    content: 'Opción no válida!',
                    ephemeral: true
                });
                break;
        }

        // Actualizar el mensaje original para mantener el menú de selección disponible
        await interaction.update({
            components: [new ActionRowBuilder().addComponents(interaction.component)]
        });
    }
});

