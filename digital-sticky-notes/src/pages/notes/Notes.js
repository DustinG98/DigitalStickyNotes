import React, { useContext } from 'react'
import NoteGroups from './NoteGroups'
import { NoteContext } from './contexts/NoteContext'


const Notes = () => {
  const [notes, deleteNote, editNote, addNote, noteToEdit, finishEdit] = useContext(NoteContext);
      return (
        <div>
            <h1>Notes</h1>
            {/* NOTES PAGE - ADD NOTE FORM & CURRENT NOTES - PASSING PROPS */}
            
            
            <NoteGroups notes={notes} deleteNote={deleteNote} editNote={editNote} addNote={addNote} noteToEdit={noteToEdit} finishEdit={finishEdit}/>
            {/* <NoteCard notes={notes} /> */}
        </div>
      )
  
}

export default Notes