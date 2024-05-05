import chalk from "chalk";


async function ValidateError() {
    process.on('unhandledRejection', (error, promise) => {
        console.log('PLEASE INCLUDE THIS INFORMATION IF YOU ASK FOR HELP ABOUT THE FOLLOWING ERROR:');
        console.log('An error was not caught');
        if (error instanceof Error) {
            console.log(`Uncaught ${error.name}`);
            console.log(error.stack); // Include the error stack trace for more details
            if (promise) {
                console.log('Rejected Promise:', promise);
            }
        }
    });
}

function getErrorFilePath(error) {
    const stack = error.stack;
    const filePathLine = stack.split('\n')[1];
    const filePath = filePathLine.trim().replace(/^at (?:new )?Object\.<anonymous> \((.*)\)$/, '$1');
    return filePath;
}

async function handleUnhandledRejection() {
    process.on('uncaughtException', (err) => {
        const filePath = getErrorFilePath(err);
        console.error(chalk.white('[ ') + chalk.hex('#ec0303')('ERROR') + chalk.white(' ]') + chalk.greenBright(` Caught exception: ${chalk.yellow(err.message)}`));
        console.error(chalk.white('[ ') + chalk.hex('#ec0303')('ORIGIN ERROR') + chalk.white(' ]') + chalk.greenBright(` ${chalk.yellow(filePath)}`));
    });
}


export default {
    ValidateError,
    handleUnhandledRejection
}