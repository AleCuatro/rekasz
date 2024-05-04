/**
 * @param {import('../types/BaseFiles').BaseFileModal} options
 * @returns {import('../types/BaseFiles').BaseFileModal}
 */
export default function BuildModal(options) {
    return {
        data: options.data,
        name: options.name,
        type: 'modal',
        execute: options.execute
    }
}