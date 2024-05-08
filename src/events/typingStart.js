import { Events } from "discord.js";
import UserDB from "../core/database/class/users.js";
import Guild from "../core/database/class/guilds.js";

export default {
    name: Events.TypingStart,
    /**
     * @param {import('../core/types/interactionTypes').CustomTypeMessage} typing
     */
    async execute(typing) {
        let users = new UserDB(typing.user.id);
        users.createUser();
        let guild = new Guild(typing.guild.id)
        guild.createGuild()
    }

}

