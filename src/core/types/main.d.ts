

import { Client, Collection } from 'discord.js';
import type { BaseFileButton, BaseFileCommand, BaseFileMenu, BaseFileModal, BaseFileMessage } from './BaseFiles';

export interface ClientCustom extends Client {
    commands: Collection<string, BaseFileCommand<string>>;
    buttons: Collection<string, BaseFileButton<string>>;
    commandMessage: Collection<string, BaseFileMessage<string>>;
    modals: Collection<string, BaseFileModal<string>>;
    menu: Collection<string, BaseFileMenu<string>>;
}
