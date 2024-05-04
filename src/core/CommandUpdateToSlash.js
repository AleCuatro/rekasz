import fs from 'fs'
import 'dotenv/config'
import path from 'path'
import { REST, Routes } from 'discord.js'
import option from '../config/Guilds.js';
const { guildId } = option
import validateConf from '../config/validateConf.js';
import chalk from 'chalk';
const { validateCommand } = validateConf


const rest = new REST().setToken(process.env.AccessToken)


export default async function reloadCommandsUpdateToSlash() {
    async function commandUpdate() {
        let commands = {
            global: [],
            private: []
        };

        const foldersPath = path.join(process.cwd(), 'src', 'commands');
        const commandFolders = fs.readdirSync(foldersPath);

        for (const folder of commandFolders) {
            const commandsPath = path.join(foldersPath, folder);
            const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js') || file.endsWith('.ts'));

            for (const file of commandFiles) {
                const filePath = path.join(commandsPath, file);
                const fileUrl = new URL(`file://${filePath}`);
                const { default: command } = await import(fileUrl);

                if (validateCommand(command)) {
                    if (command.private) {
                        commands.private.push(command);
                    } else {
                        commands.global.push(command);
                    }
                }
            }
            return commands;
        }
    }

    const { private: privateCommands, global: globalCommands } = await commandUpdate();
    updatePrivate(privateCommands)
    updateGlobal(globalCommands)

    async function updatePrivate(commands) {
        try {
            console.log(chalk.white('[ ') + chalk.hex('#ff5733')('PRIVATE') + chalk.white(' ]') + chalk.greenBright(`· Started | in | ${chalk.white('0')} | application  ${chalk.white('(/)')} commands.`))
            const data =
                (await rest.put(Routes.applicationGuildCommands(process.env.id, guildId), {
                    body: commands
                })) || []

            console.log(chalk.white('[ ') + chalk.green('PRIVATE') + chalk.white(' ]') + chalk.greenBright(`· Done | in | ${chalk.white(data.length)} | application ${chalk.white('(/)')} commands.`))
        } catch (error) {
            console.error(error.rawError)
        }

    }

    async function updateGlobal(commands) {
        try {
            console.log(chalk.white('[ ') + chalk.hex('#ff5733')('GLOBAL') + chalk.white(' ]') + chalk.greenBright(`· Started | in | ${chalk.white('0')} | application ${chalk.white('(/)')} commands.`))
            const data =
                (await rest.put(Routes.applicationCommands(process.env.id), {
                    body: commands
                })) || []

            console.log(chalk.white('[ ') + chalk.green('GLOBAL') + chalk.white(' ]') + chalk.greenBright(`· Done | in | ${chalk.white(data.length)} | application ${chalk.white('(/)')} commands.`))
        } catch (error) {
            console.error(error.rawError)
        }
    }
}