import path from 'path';
import fs from 'fs';
import chalk from 'chalk';

const eventsPath = path.join(process.cwd(), 'src', 'events'); // Assuming events are in src/events

async function loadEvents(client) {
    try {
        const eventFiles = fs.readdirSync(eventsPath)
            .filter(file => file.endsWith('.js') || file.endsWith('.ts'));

        for (const file of eventFiles) {
            const filePath = path.join(eventsPath, file);
            const fileUrl = new URL(`file://${filePath}`);
            console.log(chalk.bgBlue('[Event]') + chalk.greenBright(` ${fileUrl.href}`))
            const { default: event } = await import(fileUrl.href);
            console.log(chalk.bgBlue('[Event]') + chalk.greenBright(` ${event.name} online!`))

            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args));
            } else {
                client.on(event.name, (...args) => event.execute(...args));
            }
        }
    } catch (error) {
        console.error('Error reading or processing event files:', error);
    }
}

export default loadEvents;
