import React, { createContext, useState } from 'react';

export const NoteGroupsContext = createContext();

const NoteGroupsProvider = (props) => {
        //noteGroups
        const [noteGroups, setNoteGroups] = useState([
            {id: 1, title: "Finished", notes: [
                {id: 1, title: 'Example Note 1', subtitle: 'SUBTITTLES', description: 'lorem ipsum '},
                {id: 2, title: 'Example Note 2', subtitle: 'SUBTITTLES', description: 'lorem ipsum '}
            ]}
        ]);
    
        const [noteGroup, setNoteGroup] = useState({title: "", notes: []})
        //add note group
        const addNoteGroup = (noteGroup) => {
            noteGroup.id = Math.random();
            setNoteGroups([...noteGroups, noteGroup])
        }
        
        //delete note group
        const deleteNoteGroup = (id) => {
            const newNoteGroups = noteGroups.filter(noteGroup => {
                return noteGroup.id !== id;
            })
            setNoteGroups(newNoteGroups)
        }
    
        const [notes, setNotes] = useState([]);
        //deleteNote
        const deleteNote = (noteGroupId, id) => {
            noteGroups.map(noteGroup => {
                if(noteGroup.id === noteGroupId) {
                   const newNotes = noteGroup.notes.filter(note => {
                        return note.id !== id;
                    })
                    noteGroup.notes = newNotes;
                    setNotes([])
                }
                return null;
            })
        }
        //addNote
        const addNote = (note, id) => {
            noteGroups.map(noteGroup => {
                if(noteGroup.id === id) {
                    noteGroup.notes.push(note);
                }
                setNotes([])
                return null;
            })
        }
    return (
        <NoteGroupsContext.Provider value={[noteGroups,setNoteGroups, noteGroup, setNoteGroup, addNoteGroup, deleteNoteGroup, notes, deleteNote, addNote]}>
            {props.children}
        </NoteGroupsContext.Provider>
    )
}

export default NoteGroupsProvider;