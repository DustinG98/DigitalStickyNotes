import React, { useState } from 'react'
import AddNote from './components/AddNote'
import NoteCard from './components/NoteCard'


const Notes = () => {
    //INITIAL STATE
    const [notes, setNotes] = useState([
        {id: 1, title: 'Example Note 1', subtitle: 'SubTitties', description: 'lorem ipsum '},
        {id: 2, title: 'Example Note 2', subtitle: 'SubTitties', description: 'lorem ipsum '}
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
        <div>
            <h1>Notes</h1>
            {/* NOTES PAGE - ADD NOTE FORM & CURRENT NOTES - PASSING PROPS */}
            <AddNote addNote={addNote} noteToEdit={noteToEdit} finishEdit={finishEdit} />
            <NoteCard notes={notes} deleteNote={deleteNote} editNote={editNote} />
        </div>
      )
  
}

export default Notes