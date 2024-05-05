import chalk from "chalk";
import db from "../db.js";

export default class UserDB {
    constructor(id) {
        this.id = id
    }

    async createUser() {
        const info = await db.user.findFirst({ where: { id: this.id } })
        if (!info) {
            await db.user.create({ data: { id: this.id } }).then(() => {
                console.log(chalk.white('[ ') + chalk.hex('#f49b2a')('USERDB') + chalk.white(' ]') + chalk.greenBright(` ${chalk.hex('#00FFFF')(`${this.id} user creted`)} success!`))
            }).catch((e) => {
                let err = new Error(e)
                return console.log(chalk.white('[ ') + chalk.hex('#9370DB')('ERR USERDB') + chalk.white(' ]') + chalk.greenBright(` ${chalk.hex('#00FFFF')(err)}`))
            })
        }
    }
}