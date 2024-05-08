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
            const { default: event } = await import(fileUrl.href);
            console.log(chalk.white('[ ') + chalk.hex('#9370DB')('EVENT') + chalk.white(' ]') + chalk.greenBright(` ${chalk.hex('#00FFFF')(event.name)} online!`))
            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args));
            } else {
                client.on(event.name, (...args) => event.execute(...args));
            }
        }
    } catch (error) {
        if (error.message.includes("Cannot read properties of undefined")) {
            const err = new Error(chalk.white('[ ') + chalk.hex('#9370DB')('ERR EVENT') + chalk.white(' ]') + chalk.greenBright(` ${chalk.hex('#00FFFF')('some event file is empty of otherwise variable the name this undefined!')}`))
            console.log(err)
        }
        if (error.message.includes("Cannot find module")) {
            const err = new Error(chalk.white('[ ') + chalk.hex('#9370DB')('ERR EVENT') + chalk.white(' ]') + chalk.greenBright(` ${chalk.hex('#00FFFF')('some file dont import of the way correct the most probality is that missing extension .js or .ts!')}`))
            console.log(err)
        }
        console.log(error)
    }
}

export default loadEvents;
