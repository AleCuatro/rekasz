import { Events } from "discord.js";
import UserDB from "../core/database/class/users.js";

export default {
    name: Events.TypingStart,
    once: false,
    /**
     * @param {import('../core/types/interactionTypes').CustomTypeMessage} typing
     */
    async execute(typing) {
        let users = new UserDB(typing.user.id);
        users.createUser();
    }

}

