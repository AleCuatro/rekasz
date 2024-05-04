import { ModalBuilder, TextInputBuilder, EmbedBuilder, TextInputStyle } from "discord.js";
import BuildModal from "../../core/schema/modals.js";
import config from '../../config/Guilds.js'
const { partner } = config


export default BuildModal({
    name: 'modalSocio',
    type: 'modal',
    data: new ModalBuilder()
        .setCustomId('modalSocio')
        .setTitle('Añadir rol a nuevo socio!')
        .addComponents({
            components: [
                new TextInputBuilder()
                    .setCustomId('memberid')
                    .setStyle(TextInputStyle.Short)
                    .setLabel('Ingresa el ID del Usuario!')
                    .setMaxLength(30)
            ]
        }),
    /**
    * 
    * @param {import('../../core/types/interactionTypes.js').CustomBaseModalInteraction} interaction 
    */
    async execute(interaction) {
        const user = interaction.fields.getTextInputValue('memberid')
        const member = interaction.guild.members.fetch(user)
        await interaction.guild.members.cache.get(user).roles.add(partner)
        let role = interaction.guild.roles.cache.get(partner)
        let embed = new EmbedBuilder()
            .setDescription(`<:zakkieHeadpat:1227031048664252447> **${(await member).user.username}** recibio el rol \`${role.name}\` `)
        return interaction.reply({ embeds: [embed] })

    }
})