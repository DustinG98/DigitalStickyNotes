import { CONSTANTS } from '../actions'

export const addNote = (noteGroupID, text) => {
    return {
        type: CONSTANTS.ADD_NOTE,
        payload: {text, noteGroupID}
    }
}