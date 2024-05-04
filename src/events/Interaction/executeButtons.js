export default async function executeButtons(interaction) {
    const button = interaction.client.buttons.get(interaction.customId)
    if (!button) {
        console.error(`No button matching ${interaction.customId} was found.`)
        return
    }
    try {
        await button.execute(interaction)
    } catch (error) {
        console.error(`Error executing ${interaction.customId}`)
        console.error(error)
    }
}