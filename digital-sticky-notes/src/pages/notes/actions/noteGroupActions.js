import { CONSTANTS } from '../actions'

export const addNoteGroup = (notegroup) => {
    return {
        type: CONSTANTS.ADD_NOTE_GROUP,
        payload: {notegroup}
    }
}