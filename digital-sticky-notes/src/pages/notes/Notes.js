import React, { useState } from 'react'
import NoteGroups from './NoteGroups'


const Notes = () => {
  // const [noteToEdit, setNoteToEdit] = useState({})
  
  //     const editNote = (notes, noteID) => {
  //       let note = notes.id === noteID;
  //       setNoteToEdit(note)
  //     }
  
  //     //FINISH EDIT
  //     const finishEdit = (notes, editedNote) => {
  //       notes.map(note => {
  //         if(note.id === editedNote.id[0]) {
  //           note.title = editedNote.title;
  //           note.subtitle = editedNote.subtitle;
  //           note.description = editedNote.description;
  //           setNoteToEdit({})
  //         } return null;
  //       })
  //     }
      return (
        <div>
            <h1>Notes</h1>
            {/* NOTES PAGE - ADD NOTE FORM & CURRENT NOTES - PASSING PROPS */}
                <NoteGroups />
            {/* <NoteCard notes={notes} /> */}
        </div>
      )
  
}

export default Notes