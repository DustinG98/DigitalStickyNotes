import React from 'react';
import '../../notes.scss'
import Popup from 'reactjs-popup'
import TextEditor from '../texteditor/TextEditor'

const NoteCardHeader = (props) => {
    const { notes, section } = props;


    return (
        (notes !== undefined ? notes.map(note => {
            return <div key={note.id} className="noteCardHeader">
            <div className="container">
                <div className="buttons">
                    {/* <button onClick={() => editNote(note)}>E</button>
                    <button onClick={() => deleteNote(noteGroupId, note.id)}>D</button> */}
                    <Popup trigger={<button style={{width: '70px', height: '25px', marginLeft: '10px'}}>Edit</button>} modal closeOnDocumentClick>
                            <TextEditor note={note}/>
                    </Popup>

                </div>
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