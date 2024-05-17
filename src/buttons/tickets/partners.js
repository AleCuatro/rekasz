import {
    ButtonBuilder,
    ButtonStyle,
    ChannelType,
    ThreadAutoArchiveDuration,
    EmbedBuilder,
    ActionRowBuilder
} from "discord.js";
import BuildButton from "../../core/schema/buttons.js";

const BUTTON_NAME = 'alianza';
const THREAD_NAME_PREFIX = '🌐 ― ';
const THREAD_REASON = 'alianza, socio';
const TICKET_OPENED_MESSAGE = 'tu ticket se ha sido abierto, favor espera en ';

const createThreadChannel = async (interaction) => {
    return await interaction.channel.threads.create({
        name: `${THREAD_NAME_PREFIX}${interaction.user.displayName}`,
        type: ChannelType.PrivateThread,
        autoArchiveDuration: ThreadAutoArchiveDuration.OneHour,
        reason: THREAD_REASON,
    });
};

const createEmbeds = () => {
    const embed = new EmbedBuilder()
        .setDescription('⠀ ⠀⠀⠀ **⌤ . SOPORTE A PARTNERS  . ⍢**⠀ ⠀⠀⠀ \n⠀ ⠀⠀⠀ ↯ aqui es donde te podremos ayudar \n`💡` **. Puedes mencionar a alguien de los Cazadores de Alianzas!**\n⠀⠀⠀ ⠀ ⌆ aqui estan los requisitos [REQUISITOS](https://canary.discord.com/channels/951839520247136296/1206750590349221909/1212687230657634306).')
        .setImage('https://media.discordapp.net/attachments/898817731267268618/1084709686546288690/b60a389de3e979a7a6d6f803ff2cb47b26876f2f-1.gif?width=431&height=35');

    const embed1 = new EmbedBuilder()
        .setImage('https://cdn.discordapp.com/attachments/1110035911942606858/1137203175737266196/BetterHandmadeGull-size_restricted.gif');

    return [embed1, embed];
};

const createMenuRow = (interaction) => {
    const menu = interaction.client.menu.get('opciones')?.data;
    return new ActionRowBuilder().addComponents(menu);
};

const sendThreadMessage = async (channel, interaction, row, embeds) => {
    await channel.send({
        content: `<@${interaction.user.id}> <@&1234250794493284353>`,
        embeds: embeds,
        components: [row],
    });
};

const replyInteraction = async (interaction, channel) => {
    await interaction.reply({
        content: `${interaction.user.tag}, ${TICKET_OPENED_MESSAGE} ${channel}`,
        ephemeral: true,
    });
};

export default BuildButton({
    name: BUTTON_NAME,
    type: 'button',
    data: new ButtonBuilder()
        .setCustomId(BUTTON_NAME)
        .setStyle(ButtonStyle.Secondary)
        .setEmoji('🎍'),

    async execute(interaction) {
        try {
            const channel = await createThreadChannel(interaction);
            const embeds = createEmbeds();
            const row = createMenuRow(interaction);

            await sendThreadMessage(channel, interaction, row, embeds);
            await replyInteraction(interaction, channel);
        } catch (error) {
            console.error('Error creating thread or sending message:', error);
            await interaction.reply({
                content: 'Hubo un error al crear el ticket. Por favor, intenta de nuevo más tarde.',
                ephemeral: true,
            });
        }
    }
});
