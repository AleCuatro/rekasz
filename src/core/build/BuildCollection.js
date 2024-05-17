import path from 'path';
import fs from 'fs/promises';
import { Collection } from 'discord.js';
import validateConf from '../../config/validateConf.js';

const { validateCommand } = validateConf;

export default async function buildCollection(pointFolder) {
    const collection = new Collection();
    const foldersPath = path.resolve('src', pointFolder);

    try {
        await fs.mkdir(foldersPath, { recursive: true });

        const commandFolders = await fs.readdir(foldersPath);

        for (const folder of commandFolders) {
            const commandsPath = path.join(foldersPath, folder);
            const commandFiles = await fs.readdir(commandsPath);

            await Promise.all(commandFiles
                .filter(file => file.endsWith('.js') || file.endsWith('.ts'))
                .map(async (file) => {
                    const filePath = path.join(commandsPath, file);
                    const { default: command } = await import(`file://${filePath}`);
                    if (validateCommand(command)) {
                        collection.set(command.name, command);
                    }
                })
            );
        }
    } catch (error) {
        console.error('Error building collection:', error);
    }

    return collection;
}

