import { CONSTANTS } from '../actions'

export const addNoteGroup = (title, section) => {
    return {
        type: CONSTANTS.ADD_NOTE_GROUP,
        payload: {title, section}
    }
}