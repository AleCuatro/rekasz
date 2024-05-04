const commandKeys = 'name, description, options, run' //'data, execute, scope, type or name'
function validateCommand(command) {
    return (
        command && 'run' in command && 'name' in command && 'description' in command
    )
}

export default {
    commandKeys,
    validateCommand
}