import chalk from "chalk"
let error

const commandKeys = 'name, description, options, run' //'data, execute, scope, type or name'
function validateCommand(command) {

    if ('type' in command) {
        if (command.type === 'button' || command.type === 'menu' || command.type === 'modal') {
            if (command.name === undefined) {
                error = new Error(chalk.white('[') + chalk.red('ERR VALIDATION') + chalk.white(']') + chalk.bgRed(` The command '${command.name}' has a error the type undefined on the variable 'name'`))
                return console.log(error)
            } else if (command.data === undefined) {
                error = new Error(chalk.white('[') + chalk.red('ERR VALIDATION') + chalk.white(']') + chalk.bgRed(` The command '${command.name}' has a error the type undefined on the variable 'data'`))
                return console.log(error)
            } else {
                return ('name' in command && 'data' in command && 'execute' in command)
            }
        }
    } else {
        if ('name' in command) {
            if (command.private === undefined && 'global' in command) { return ('run' in command && 'description' in command) }
            if (command.global === undefined && 'private' in command) return ('run' in command && 'description' in command)
        }
    }
}




export default {
    commandKeys,
    validateCommand
}