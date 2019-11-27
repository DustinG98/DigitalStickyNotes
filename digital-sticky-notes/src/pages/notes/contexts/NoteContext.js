import React, { createContext, useState } from 'react'

export const NoteContext = createContext();

const NoteContextProvider = (props) => {
     //INITIAL STATE
     const [notes, setNotes] = useState([
        {id: 1, title: 'Example Note 1', subtitle: 'SUBTITTLES', description: 'lorem ipsum '},
        {id: 2, title: 'Example Note 2', subtitle: 'SUBTITTLES', description: 'lorem ipsum '}
      ]);
      
      //DELETE NOTE
      const deleteNote = (id) => {
        const newNotes = notes.filter(note => {
          return note.id !== id;
        })
        setNotes(newNotes)
      }

      //ADD NOTE
      const addNote = (note) => {
        note.id = Math.random();
        setNotes([...notes, note])
      }
  
  
      //EDIT NOTE
      const [noteToEdit, setNoteToEdit] = useState({})
  
      const editNote = note => {
        setNoteToEdit(note)
      }
  
      //FINISH EDIT
      const finishEdit = editedNote => {
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
        <NoteContext.Provider value={[addNote, deleteNote, noteToEdit, editNote, finishEdit]}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteContextProvider;