import { Events } from 'discord.js'
import executeCommands from './Interaction/executeCommands.js'
import executeButtons from './Interaction/executeButtons.js'
import executeMenu from './Interaction/executeMenu.js'
import executeModals from './Interaction/executeModals.js'

export default {
    name: Events.InteractionCreate,
    once: false,
    async execute(interaction) {
        const command = await interaction.client.commands.get(interaction.commandName)
        if (interaction.isChatInputCommand()) {
            executeCommands(interaction)
        }
        if (interaction.isAutocomplete()) {
            if (command) {
                command.autocomplete(interaction)
            }
        }
        if (interaction.isButton()) {
            await executeButtons(interaction)
        }

        if (interaction.isModalSubmit()) {
            await executeModals(interaction)
        }
        if (interaction.isStringSelectMenu()) {
            await executeMenu(interaction)
        }
    }
}