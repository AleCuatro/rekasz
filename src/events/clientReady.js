import chalk from "chalk"
import { Events } from "discord.js"

export default {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        console.log(chalk.white('[ ') + chalk.hex('#FFD700')('CLIENT') + chalk.white(' ]') + chalk.greenBright(`${chalk.hex('#00FFFF')(` ${client.user.username} is logged! and can now use it commands`)}`))

    }
}
