

/**
* @param {import('../../core/types/interactionTypes').CustomSelectMenuInteraction} interaction
*/
export default async function executeMenu(interaction) {
    const menu = interaction.client.menu.get(interaction.customId)
    menu.execute(interaction)
}
