import 'dotenv/config'
import { Client, GatewayIntentBits, Collection } from 'discord.js'
import BuildCollection from './src/core/build/BuildCollection.js';
import loadEvents from './src/core/build/BuildEvents.js';
import err from './src/core/error/ExceptionErros.js';
import reloadCommandsUpdateToSlash from './src/core/api/CommandUpdateToSlash.js';

const permiso = GatewayIntentBits;
const { ValidateError, handleUnhandledRejection } = err

const client = new Client({
    intents: [permiso.GuildMessages, permiso.MessageContent, permiso.Guilds, permiso.GuildWebhooks, permiso.GuildMessageTyping],
})

client.commands = await BuildCollection('commands')
client.buttons = await BuildCollection('buttons')
client.commandMessage = await BuildCollection('messages')
client.modals = await BuildCollection('modals')
client.menu = await BuildCollection('menus')

loadEvents(client)
ValidateError()
handleUnhandledRejection()
reloadCommandsUpdateToSlash()

client.login(process.env.AccessToken)