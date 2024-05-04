

export default async function executeModals(interaction) {
    const modal = interaction.client.modals.get(interaction.customId)
    modal.execute(interaction)

}