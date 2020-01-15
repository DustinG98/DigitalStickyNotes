import React from 'react';
import '../../notes.scss'
import Popup from 'reactjs-popup'
import TextEditor from '../texteditor/TextEditor'

import { connect } from 'react-redux'

import { removeNote } from '../../actions'

import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import OpenWithIcon from '@material-ui/icons/OpenWith';
 
const NoteCardHeader = (props) => {
    const { notes, section, noteGroupID } = props;
    
    const handleRemoveNote = (id) => {
        const { dispatch } = props;
        
        dispatch(removeNote(noteGroupID, id))

    }
    return (
        (notes !== undefined ? notes.map(note => {
            return <Card key={note.id} className="noteCardHeader">
            <div className="container">
                <div className="buttons">
                    {/* <button onClick={() => editNote(note)}>E</button>
                    <button onClick={() => deleteNote(noteGroupId, note.id)}>D</button> */}
                    <Popup 
                    
                    trigger={<Button variant="contained" color="primary"><OpenWithIcon/></Button>}
                     modal 
                     closeOnDocumentClick={false}
                    >
                        {close => {
                            return <div style={ {zIndex: '999'} }> 
                            <TextEditor close={close} note={note} />
                        </div>
                        }}
                    </Popup>
                    <Button variant="outlined" color="secondary" onClick={() => handleRemoveNote(note._id)}><DeleteForeverIcon/></Button>
                </div>
                <div className="noteCardTag">
                    <span>{section}</span>
                </div>
            </div>
            <h2>{note.title}</h2>
        </Card>
        }) : null)
        
    )
}

const mapStateToProps = state => ({
    noteGroups: state.noteGroups
  })

export default connect(mapStateToProps)(NoteCardHeader)