import fs from 'fs'
import 'dotenv/config'
import path from 'path'
import { REST, Routes } from 'discord.js'
import servers from '../config/Guilds.js';
import validateConf from '../config/validateConf.js';
const { commandKeys, validateCommand } = validateConf
console.log(servers)

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

                } else {
                    console.log(`[WARNING] The command at ${filePath} is missing a required ${commandKeys} property.`);
                }
            }
        }
        return commands;
    }

    const { private: privateCommands } = await commandUpdate();
    const { global: globalCommands } = await commandUpdate();
    updatePrivate(privateCommands)
    updateGlobal(globalCommands)

    async function updatePrivate(commands) {
        try {
            console.log(`·  Private | Started | in | application (/) commands.`)
            const data =
                (await rest.put(Routes.applicationGuildCommands(process.env.id, '951839520247136296'), {
                    body: commands
                })) || []

            console.log(`·  Private | Done | in  | ${data.length} application (/) commands.`)
        } catch (error) {
            console.error(error.rawError)
        }

    }

    async function updateGlobal(commands) {
        try {
            console.log(`·  Global | Started | in | application (/) commands.`)
            const data =
                (await rest.put(Routes.applicationCommands(process.env.id), {
                    body: commands
                })) || []

            console.log(`·  Global | Done | in  | ${data.length} application (/) commands.`)
        } catch (error) {
            console.error(error.rawError)
        }
    }
}