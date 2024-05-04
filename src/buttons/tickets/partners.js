import { ButtonBuilder, ButtonStyle, ChannelType, ThreadAutoArchiveDuration, EmbedBuilder, ActionRowBuilder } from "discord.js";
import BuildButton from "../../core/schema/buttons.js";

export default BuildButton({
    name: 'alianza',
    type: 'button',
    data: new ButtonBuilder()
        .setCustomId('alianza')
        .setStyle(ButtonStyle.Secondary)
        .setEmoji('🎍'),

    async execute(interaction) {
        const channel = await interaction.channel.threads.create({
            name: `🌐 ― ${interaction.user.displayName}`,
            type: ChannelType.PrivateThread,
            autoArchiveDuration: ThreadAutoArchiveDuration.OneHour,
            reason: 'alianza, socio'
        })

        let menu = interaction.client.menu.get('opciones')?.data
        const row = new ActionRowBuilder().addComponents(menu)
        const embed = new EmbedBuilder()
            .setDescription('⠀ ⠀⠀⠀ **⌤ . SOPORTE A PARTNERS  . ⍢**⠀ ⠀⠀⠀ \n⠀ ⠀⠀⠀ ↯ aqui es donde te podremos ayudar \n`💡` **. Puedes mencionar a alguien de los Cazadores de Alianzas!**\n⠀⠀⠀ ⠀ ⌆ aqui estan los requisitos [REQUISITOS](https://canary.discord.com/channels/951839520247136296/1206750590349221909/1212687230657634306).')
            .setImage('https://media.discordapp.net/attachments/898817731267268618/1084709686546288690/b60a389de3e979a7a6d6f803ff2cb47b26876f2f-1.gif?width=431&height=35')
        const embed1 = new EmbedBuilder()
            .setImage('https://cdn.discordapp.com/attachments/1110035911942606858/1137203175737266196/BetterHandmadeGull-size_restricted.gif')
        await channel.send({
            content: `<@${interaction.user.id}> <@&1234250794493284353>`,
            embeds: [embed1, embed],
            components: [row]
        })

        await interaction.reply({
            content: `${interaction.user.tag}, tu ticket se ha sido abierto, favor espera en ${channel}`,
            ephemeral: true
        })
    }
})