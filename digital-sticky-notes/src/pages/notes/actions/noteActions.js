import { CONSTANTS } from '../actions'

export const addNote = (noteGroupID, text) => {
    return {
        type: CONSTANTS.ADD_NOTE,
        payload: {text, noteGroupID}
    }
}

export const removeNote = (noteGroupID, noteID) => {
    return {
        type: CONSTANTS.REMOVE_NOTE,
        payload: { noteGroupID, noteID }
    }
}