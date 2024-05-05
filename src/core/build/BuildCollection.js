import path from 'path'
import fs from 'fs/promises'; // Using promises for async/await
import { Collection } from 'discord.js';
import validateConf from '../../config/validateConf.js';
const { commandKeys, validateCommand } = validateConf;

export default async function BuildCollection(pointFolder) {
    const collection = new Collection();
    const foldersPath = path.join(process.cwd(), 'src', pointFolder); // Use process.cwd() for current working directory

    try {
        const commandFolders = await fs.readdir(foldersPath);

        for (const folder of commandFolders) {
            const commandsPath = path.join(foldersPath, folder);
            const commandFiles = await fs.readdir(commandsPath);
            const filteredFiles = commandFiles.filter(file => file.endsWith('.js') || file.endsWith('.ts'));

            for (const file of filteredFiles) {
                const filePath = path.join(commandsPath, file);
                const fileUrl = new URL(`file://${filePath}`);
                const { default: command } = await import(fileUrl.href);// Dynamic import using await
                if (validateCommand(command)) {
                    collection.set(command.name, command)
                }
            }
        }
    } catch (error) {
        console.error('Error building collection:', error);
    }

    return collection;
}