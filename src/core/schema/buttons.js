/**
 * @param {import('../types/BaseFiles').BaseFileButton} options
 * @returns {import('../types/BaseFiles').BaseFileButton}
 */
export default function BuildButton(options) {
    return {
        name: options.name,
        type: 'button',
        data: options.data,
        execute: options.execute,
    }
}