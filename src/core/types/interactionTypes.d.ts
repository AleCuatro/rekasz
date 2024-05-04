import type {
    BaseInteraction,
    ButtonInteraction,
    ChatInputCommandInteraction,
    Message,
    GuildMember,
    ModalSubmitInteraction,
    PermissionsBitField,
    StringSelectMenuInteraction,
    AutocompleteInteraction,
    StringSelectMenuComponent,
    Typing,
    GuildChannel
} from 'discord.js'
import type { ClientCustom } from './main'

export interface CustomBaseInteraction extends BaseInteraction {
    client: ClientCustom
}
export interface ChannelDelete extends GuildChannel {
    client: ClientCustom
}

export interface CustomTypeMessage extends Typing {
    client: ClientCustom
}
export interface CustomButtonInteraction extends ButtonInteraction {
    client: ClientCustom
}
export interface CustomCommandInteraction extends ChatInputCommandInteraction {
    client: ClientCustom
}
export interface CustomBaseMessageInteraction extends Message {
    client: ClientCustom
}
export interface CustomBaseModalInteraction extends ModalSubmitInteraction {
    client: ClientCustom
}
export interface CustomBaseGuildMember extends GuildMember {
    client: ClientCustom
}
export interface CustomSelectMenuInteraction extends StringSelectMenuInteraction {
    client: ClientCustom
}
export interface CustomAutocompleteInteraction extends AutocompleteInteraction {
    client: ClientCustom
}
