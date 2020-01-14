import { CONSTANTS } from "../actions"

import { axiosWithAuth } from '../../../auth/axiosWithAuth'

// const initialState = [
//     {   
//         id: 1, 
//         title: "Finished",
//         section: "JS",
//         notes: [
//             {id: 1, title: 'Example Note 1'},
//             {id: 2, title: 'Example Note 3'}
//         ]}
// ]


let initialState = [];




const addNoteGroup = (noteGroup) => {
    const user_id = localStorage.getItem("user_id")
    axiosWithAuth().post(`/${user_id}/notes`, {
        title: noteGroup.title,
        section: noteGroup.section
    })
        .then(res => console.log(res))
}


// const initialState = []

const noteGroupsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.FETCH_INIT_STATE:
            return action.payload.data;
        case CONSTANTS.ADD_NOTE_GROUP:
            
            const newNoteGroup = {
                title: action.payload.title,
                section: action.payload.section,
                id: Date.now(),
                notes: []
            }
            addNoteGroup(newNoteGroup);
            return [...state, newNoteGroup];
        case CONSTANTS.ADD_NOTE:
            const newNote = {
                title: action.payload.text,
                id: Date.now()
            }
            let newState = state.map(noteGroup => {
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
        case CONSTANTS.REMOVE_NOTE:
            let theNoteGroup;
            state.forEach(noteGroup => {
                if(noteGroup.id === action.payload.noteGroupID) {
                    theNoteGroup = noteGroup
                }
            })
            let newNotes = theNoteGroup.notes.filter(note => {
                return note.id !== action.payload.noteID
            })
            let newStateNoteGroups = state.map(noteGroup => {
                if(noteGroup.id === action.payload.noteGroupID) {
                    return {
                        ...noteGroup,
                        notes: newNotes
                    }
                } else {
                    return noteGroup;
                }
            })
            return newStateNoteGroups;
        default: 
            return state;
    }
}

export default noteGroupsReducer