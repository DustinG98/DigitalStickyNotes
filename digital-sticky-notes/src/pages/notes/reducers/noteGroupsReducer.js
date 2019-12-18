import { CONSTANTS } from "../actions"

const initialState = [
    {id: 1, title: "Finished", notes: [
        {id: 1, title: 'Example Note 1'},
        {id: 2, title: 'Example Note 3'}
    ]}
]

const noteGroupsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.ADD_NOTE_GROUP:
            
            const newNoteGroup = {
                title: action.payload,
                id: Date.now(),
                notes: []
            }
            return [...state, newNoteGroup];
        case CONSTANTS.ADD_NOTE:
            const newNote = {
                title: action.payload.text,
                id: Date.now()
            }
            const newState = state.map(noteGroup => {
                if(noteGroup.id === action.payload.noteGroupID) {
                    return {
                        ...noteGroup,
                        notes: [...noteGroup.notes, newNote]
                    }
                } else {
                    return noteGroup
                }
            })
            return newState;
        default: 
            return state;
    }
}

export default noteGroupsReducer