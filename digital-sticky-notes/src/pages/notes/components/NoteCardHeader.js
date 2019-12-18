import React, { useState } from 'react';
import '../notes.scss'
import Popup from 'reactjs-popup'
import TextEditor from './TextEditor'

const NoteCardHeader = (props) => {
    const { noteGroupId, notes, editNote, deleteNote, section } = props;


    return (
        (notes !== undefined ? notes.map(note => {
            return <div key={note.id} className="noteCardHeader">
            <div className="container">
                <div className="buttons">
                    {/* <button onClick={() => editNote(note)}>E</button>
                    <button onClick={() => deleteNote(noteGroupId, note.id)}>D</button> */}

                </div>
                <Popup trigger={<button>Edit</button>} modal closeOnDocumentClick>
                        <TextEditor note={note}/>
                </Popup>
                <div className="noteCardTag">
                    <span>{section}</span>
                </div>
            </div>
            <h2>{note.title}</h2>
            <div>

            </div>
        </div>
        }) : null)
        
    )
}

export default NoteCardHeader;