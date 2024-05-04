import { Client } from "discord.js"
import type { BaseFileButton, BaseFileCommand, BaseFileMenu, BaseFileModal } from './BaseFiles'
import type { MessagesNames, ButtonsNames, CommandsNames, ModalNames, MenuNames } from './Names'

export interface ClientCustom extends Client {
    commands: Collection<CommandsNames, BaseFileCommand>
    buttons: Collection<ButtonsNames, BaseFileButton>
    commandMessage: Collection<MessagesNames, BaseFileMessage>
    modals: Collection<ModalNames, BaseFileModal>
    menu: Collection<MenuNames, BaseFileMenu>
}