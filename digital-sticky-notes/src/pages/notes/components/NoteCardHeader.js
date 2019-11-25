import React from 'react';
import '../notes.scss'


const NoteCardHeader = (props) => {
    const { noteGroupId, notes, editNote, deleteNote } = props;
    return (
        notes.map(note => {
            return <div className="noteCardHeader">
            <div className="container">
                <div className="buttons">
                    <button onClick={() => editNote(note)}>E</button>
                    <button onClick={() => deleteNote(noteGroupId, note.id)}>D</button>
                </div>
                <div  className="noteCardTag">
                    <span>JS</span>
                </div>
            </div>
            <h2>{note.title}</h2>
            <div>

            </div>
        </div>
        })
        
    )
}

export default NoteCardHeader;