import React, { createContext, useState } from 'react'

export const NoteContext = createContext();

const NoteContextProvider = (props) => {
  
  
      //EDIT NOTE
      const [noteToEdit, setNoteToEdit] = useState({})
  
      const editNote = (notes, noteID) => {
        let note = notes.id === noteID;
        setNoteToEdit(note)
      }
  
      //FINISH EDIT
      const finishEdit = (notes, editedNote) => {
        notes.map(note => {
          if(note.id === editedNote.id[0]) {
            note.title = editedNote.title;
            note.subtitle = editedNote.subtitle;
            note.description = editedNote.description;
            setNoteToEdit({})
          } return null;
        })
      }
    return (
        <NoteContext.Provider value={[noteToEdit, editNote, finishEdit]}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteContextProvider;