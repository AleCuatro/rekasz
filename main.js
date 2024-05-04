import 'dotenv/config'
import { Client, GatewayIntentBits, Collection } from 'discord.js'
import BuildCollection from './src/core/BuildCollection.js';
import loadEvents from './src/core/BuildEvents.js';
import ValidateErros from './src/core/ExceptionErros.js';
import reloadCommandsUpdateToSlash from './src/core/CommandUpdateToSlash.js';
import BuildReload from './src/core/BuildReloadCollectionSlash.js';


const permiso = GatewayIntentBits;

const client = new Client({
    intents: [permiso.GuildMessages, permiso.MessageContent, permiso.Guilds, permiso.GuildWebhooks],
})

client.commands = await BuildCollection('commands')
client.command = new Collection()
client.buttons = await BuildCollection('buttons')
client.commandMessage = await BuildCollection('messages')
client.modals = await BuildCollection('modals')
client.menu = await BuildCollection('menus')

loadEvents(client)
BuildReload(client)
ValidateErros()
reloadCommandsUpdateToSlash()

client.login(process.env.AccessToken)