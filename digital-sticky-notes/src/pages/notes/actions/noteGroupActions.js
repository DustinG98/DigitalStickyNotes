import { CONSTANTS } from '../actions'

export const addNoteGroup = (title) => {
    return {
        type: CONSTANTS.ADD_NOTE_GROUP,
        payload: title
    }
}