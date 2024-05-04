export default async function ValidateErros() {
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