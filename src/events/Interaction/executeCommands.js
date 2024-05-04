
/**
* @param {import('../../core/types/interactionTypes').CustomCommandInteraction} interaction
*/
export default async function executeCommands(interaction) {
    const command = await interaction.client.commands.get(interaction.commandName)

    if (command.owner) {
        if (interaction.guild.ownerId !== interaction.user.id) return
    }


    command.run(interaction)
}