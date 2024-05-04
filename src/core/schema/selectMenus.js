/**
 * @param {import('../types/BaseFiles').BaseFileMenu} options
 * @returns {import('../types/BaseFiles').BaseFileMenu}
 */
export default function BuildMenu(options) {
    return {
        name: options.name,
        type: 'menu',
        data: options.data,
        execute: options.execute,
    }
}