import type { BaseEventInteractionCreate } from './main';
import type {
    CustomButtonInteraction,
    CustomCommandInteraction,
    CustomBaseMessageInteraction,
    CustomBaseModalInteraction,
    CustomSelectMenuInteraction
} from './interactionTypes';
import { PermissionResolvable } from 'discord.js';
import { StringSelectMenuBuilder, ButtonBuilder, ModalBuilder } from 'discord.js';

export interface BaseFileCommand<T extends string = string> extends BaseEventInteractionCreate {
    name: T;
    type: 'command';
    run: (interaction: CustomCommandInteraction) => Promise<unknown>;
}

export interface BaseFileMessage<T extends string = string> extends BaseEventInteractionCreate {
    data: undefined;
    name: T;
    subPrefix: string;
    permissions?: PermissionResolvable;
    type: 'message';
    execute: (interaction: CustomBaseMessageInteraction, args: any, prefix: any) => Promise<unknown>;
}

export interface BaseFileButton<T extends string = string> extends BaseEventInteractionCreate {
    data: ButtonBuilder;
    name: T;
    type: 'button';
    execute: (interaction: CustomButtonInteraction) => Promise<unknown>;
}

export interface BaseFileMenu<T extends string = string> extends BaseEventInteractionCreate {
    name: T;
    type: 'menu';
    data: StringSelectMenuBuilder;
    execute: (interaction: CustomSelectMenuInteraction) => Promise<unknown>;
}

export interface BaseFileModal<T extends string = string> extends BaseEventInteractionCreate {
    data: ModalBuilder;
    name: T;
    type: 'modal';
    execute: (interaction: CustomBaseModalInteraction, args: any) => Promise<unknown>;
}
