import React from 'react';
import '../../notes.scss'
import Popup from 'reactjs-popup'
import TextEditor from '../texteditor/TextEditor'

import { connect } from 'react-redux'

import { removeNote } from '../../actions'

 
const NoteCardHeader = (props) => {
    const { notes, section, noteGroupID } = props;
    
    const handleRemoveNote = (id) => {
        const { dispatch } = props;
        
        dispatch(removeNote(noteGroupID, id))

    }
    return (
        (notes !== undefined ? notes.map(note => {
            return <div key={note.id} className="noteCardHeader">
            <div className="container">
                <div className="buttons">
                    {/* <button onClick={() => editNote(note)}>E</button>
                    <button onClick={() => deleteNote(noteGroupId, note.id)}>D</button> */}
                    <Popup 
                    
                    trigger={<button style={{width: '70px', height: '25px', marginLeft: '10px'}}>View</button>}
                     modal 
                     closeOnDocumentClick={false}
                    >
                        {close => {
                            return <div>
                            <TextEditor close={close} note={note} style={ {zIndex: '9999'} }/>
                        </div>
                        }}
                    </Popup>
                    <button onClick={() => handleRemoveNote(note.id)}>Delete</button>
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

const mapStateToProps = state => ({
    noteGroups: state.noteGroups
  })

export default connect(mapStateToProps)(NoteCardHeader)