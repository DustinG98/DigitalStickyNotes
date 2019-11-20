import React from 'react';
import NoteCardHeader from './components/NoteCardHeader'
import './notes.scss'

const NoteGroups = (props) => {
    const { notes, deleteNote, editNote, addNote, noteToEdit, finishEdit } = props;
    return (
        <div>
            
            <div className="noteGroups">
                <div>
                <NoteCardHeader notes={notes} deleteNote={deleteNote} editNote={editNote} addNote={addNote} noteToEdit={noteToEdit} finishEdit={finishEdit}/>
                </div>
                
            </div>
        </div>
    )
}

export default NoteGroups;