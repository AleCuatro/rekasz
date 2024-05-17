import path from 'path';
import fs from 'fs';
import chalk from 'chalk';

const eventsPath = path.resolve('src', 'events'); // Uso de path.resolve para mayor claridad

async function loadEvents(client) {
    try {
        const eventFiles = fs.readdirSync(eventsPath)
            .filter(file => file.endsWith('.js') || file.endsWith('.ts'));

        for (const file of eventFiles) {
            const filePath = path.join(eventsPath, file);
            const { default: event } = await import(`file://${filePath}`);

            console.log(
                chalk.white('[ ') + chalk.hex('#9370DB')('EVENT') + chalk.white(' ]') +
                chalk.greenBright(` ${chalk.hex('#00FFFF')(event.name)} online!`)
            );

            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args));
            } else {
                client.on(event.name, (...args) => event.execute(...args));
            }
        }
    } catch (error) {
        let errorMessage;

        if (error.message.includes("Cannot read properties of undefined")) {
            errorMessage = 'Some event file is empty or the event name is undefined!';
        } else if (error.message.includes("Cannot find module")) {
            errorMessage = 'Some file cannot be imported correctly, probably missing .js or .ts extension!';
        } else {
            errorMessage = error.message;
        }

        const err = new Error(
            chalk.white('[ ') + chalk.hex('#9370DB')('ERR EVENT') + chalk.white(' ]') +
            chalk.greenBright(` ${chalk.hex('#00FFFF')(errorMessage)}`)
        );

        console.error(err);
        console.error(error);
    }
}

export default loadEvents;
