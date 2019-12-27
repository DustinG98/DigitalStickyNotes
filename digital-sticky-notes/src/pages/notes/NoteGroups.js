import React, { useState } from 'react';
import { connect } from 'react-redux'
import NoteCardHeader from './components/notes/NoteCardHeader'
import './notes.scss'
import AddNote from './components/notes/AddNote'

import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { addNoteGroup } from './actions'

const NoteGroups = (props) => {
    const { noteGroups } = props;
    const [title, setTitle] = useState("")
    const [section, setSection] = useState("")
    //add note group
    const handleAddNoteGroup = (e) => {
        e.preventDefault()
        const { dispatch } = props;

        setTitle("")
        setSection("")
         dispatch(addNoteGroup(title, section))
    }

    // const handleAddNote = () => {
    //     const { dispatch, noteGroupID } = props;
    //     const { text } = title;

    //     if(text) {
    //         setTitle("")
    //         dispatch(addNoteGroup(noteGroupID, text))
    //     }
    //     return
    // }



    //handle submit
    // const handleSubmit = event => {
    //     event.preventDefault();
    //     setNoteGroup({title: ""})
    //     addNoteGroup(noteGroup)
    // }

    //handle change
    const handleTitleChange = event => {
        setTitle(event.target.value)
    }
    const handleSectionChange = event => {
        setSection(event.target.value)
    }
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                <form onSubmit={e => handleAddNoteGroup(e)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '40%' }}>
                    <TextField required type="text" name="title" placeholder="Title" value={title} onChange={event => handleTitleChange(event)}/>
                    <TextField required type="text" name="section" placeholder="Section" value={section} onChange={event => handleSectionChange(event)}/>
                    {title && section !== "" ? 
                    <Button variant="contained" color="primary" type="submit" onClick={e => handleAddNoteGroup(e)}>Add Note Group</Button> 
                    : <Button variant="contained" color="primary" disabled>Add Note Group</Button>}
                </form>
            </div>
            <div className="noteGroups">

                {noteGroups !== undefined ? noteGroups.map(noteGroup => {
                   return <Card className="noteGroup" key={noteGroup.id}>
                       {/* <button onClick={() => deleteNoteGroup(noteGroup.id)}>Delete Note Group</button> */}
                        <h2>{noteGroup.title}</h2>
                       <AddNote noteGroupId={noteGroup.id} />
                       <div style={{ overflowY: 'auto', width: '100%' }}>
                            <NoteCardHeader noteGroupID={noteGroup.id} key={noteGroup.id} notes={noteGroup.notes} section={noteGroup.section}/> 
                       </div>
                    </Card>
                }) : null}
                
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    noteGroups: state.noteGroups
  })

export default connect(mapStateToProps)(NoteGroups)