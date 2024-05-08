import chalk from "chalk";
import db from "../db.js";

export default class Guild {
    constructor(id) {
        this.id = id;
        this.server = {}; // Inicializa server como un objeto vacío en el constructor
        this.servidor(); // Llama a la función servidor en el constructor
    }

    async servidor() {
        try {
            const guildData = await db.guild.findFirst({ where: { id: this.id }, include: { ConfigPartner: true } });
            if (guildData) {
                const { id, prefix, ConfigPartner } = guildData;
                // Asigna el objeto con id y prefix a this.server
                this.server = { id, prefix, ConfigPartner };
            } else {
                console.log(chalk.white('[ ') + chalk.hex('#f49b2a')('GUILDB') + chalk.white(' ]') + chalk.redBright(` No se encontraron datos para el gremio con ID ${this.id}`));
            }
        } catch (error) {
            console.log(chalk.white('[ ') + chalk.hex('#9370DB')('ERR GUILDB') + chalk.white(' ]') + chalk.redBright(` Error al obtener datos del gremio: ${error.message}`));
        }
    }

    async createGuild() {
        const info = await db.guild.findFirst({ where: { id: this.id } });
        if (!info) {
            await db.guild.create({ data: { id: this.id } }).then(async () => {
                console.log(chalk.white('[ ') + chalk.hex('#f49b2a')('GUILDB') + chalk.white(' ]') + chalk.greenBright(` ${chalk.hex('#00FFFF')(`${this.id} guild creted`)} success!`));
                await db.configPartner.create({ data: { guildID: this.id } });
            }).catch((e) => {
                let err = new Error(e);
                console.log(chalk.white('[ ') + chalk.hex('#9370DB')('ERR GUILDB') + chalk.white(' ]') + chalk.redBright(` ${err}`));
            });
        }
    }
}
