
import { EmbedBuilder, ActionRowBuilder } from 'discord.js'

export default {
    name: 'tickets',
    description: 'agrega el panel de tickets',
    private: true,
    owner: true,
    /**
  * @param {import('../../core/types/interactionTypes').CustomCommandInteraction} interaction
  */
    async run(interaction) {
        let embed1 = new EmbedBuilder()
            .setImage('https://media.discordapp.net/attachments/1160773869641142365/1236113504235294800/image0-4.png?ex=6636d3e9&is=66358269&hm=d880a6efad5e46bf059bd40dd80ac0559aeed0d79b9b4ff07181b1d741311f7d&=&format=webp&quality=lossless&width=1439&height=208')
            .setDescription("## ✨﹒୨୧﹒Tickets ﹒︵\n\n୧  🍭  ₊ Recordamos a nuestros usuarios de no abrir tickets sin un asunto ˒♡! ⊹ 🛒\n\n⠀\n⠀０１⠀❱❱⠀.⠀🎍⠀𓂃⠀PARTNERS\n\n⠀０２⠀ʬʬ⠀🍙⠀ᨓ⠀.⠀POSTULAR\n\n⠀０３⠀❱❱⠀.⠀🌱⠀𓂃⠀PROPUESTA\n\n⠀０４⠀ʬʬ⠀🐇⠀ᨓ⠀.⠀RECLAMAR\n\n⠀０５⠀❱❱⠀.⠀🌿⠀𓂃⠀OTRA COSA\n⠀")
            .setColor(0x5e2a2a)
        let partner = interaction.client.buttons.get('alianza')?.data
        const row = new ActionRowBuilder().addComponents(partner)
        return interaction.channel.send({ embeds: [embed1], components: [row] })
    }
}