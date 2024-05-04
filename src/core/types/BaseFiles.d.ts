import type { BaseEventInteractionCreate } from './main'
import type {
    CustomButtonInteraction,
    CustomCommandInteraction,
    CustomBaseMessageInteraction,
    CustomBaseModalInteraction,
    CustomSelectMenuInteraction
} from './interactionTypes'
import type { ButtonsNames, ModalNames, CommandsNames, MessagesNames } from './Names'

import { PermissionResolvable } from 'discord.js'
import { StringSelectMenuBuilder } from 'discord.js'

export interface BaseFileCommand extends BaseEventInteractionCreate {
    name: CommandsNames
    type: 'command'
    run: (interaction: CustomCommandInteraction) => Promise<unknown>
}
export interface BaseFileMessage extends BaseEventInteractionCreate {
    data: undefined
    name: MessagesNames
    subPrefix: string
    permissions?: PermissionResolvable
    type: 'message'
    execute: (interaction: CustomBaseMessageInteraction, args: any, prefix: any) => Promise<unknown>
}
export interface BaseFileButton extends BaseEventInteractionCreate {
    data: ButtonBuilder
    name: ButtonsNames
    type: 'button'
    execute: (interaction: CustomButtonInteraction) => Promise<unknown>
}

export interface BaseFileMenu extends BaseEventInteractionCreate {
    name: MenuNames
    type: 'menu'
    data: StringSelectMenuBuilder
    execute: (interaction: CustomSelectMenuInteraction) => Promise<unknown>
}

export interface BaseFileModal extends BaseEventInteractionCreate {
    data: ModalBuilder
    name: ModalNames
    type: 'modal'
    execute: (Interaction: CustomBaseModalInteraction, args: any) => Promise<unknown>
}
