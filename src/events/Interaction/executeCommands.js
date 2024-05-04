
export default async function executeCommands(interaction) {
    const command = await interaction.client.command.get(interaction.commandName)
    command.run(interaction)
}