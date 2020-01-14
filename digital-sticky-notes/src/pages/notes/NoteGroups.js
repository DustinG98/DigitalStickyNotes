import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import NoteCardHeader from './components/notes/NoteCardHeader'
import './notes.scss'
import './notegroups.scss'
import AddNote from './components/notes/AddNote'

import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { addNoteGroup, fetchInitState } from './actions'
import { fetchInitData } from './backend-requests/fetchInitData'

const NoteGroups = (props) => {
    const { noteGroups, searchTerm } = props;
    const [title, setTitle] = useState("")
    const [section, setSection] = useState("")
    const { dispatch } = props;
    useEffect(() => {
       fetchInitData()
        .then(res => dispatch(fetchInitState(res)))
    }, [dispatch])

    //add note group
    const handleAddNoteGroup = (e) => {
        e.preventDefault()
        const { dispatch } = props;

        setTitle("")
        setSection("")
         dispatch(addNoteGroup(title, section))
    }

    const filteredNoteGroups = noteGroups.filter(noteGroup => {
        if(noteGroup.title.includes(searchTerm)) {
            return noteGroup
        }
        return null;
    })

    //handle change
    const handleTitleChange = event => {
        setTitle(event.target.value)
    }
    const handleSectionChange = event => {
        setSection(event.target.value)
    }
    return (
        <div>
            <div className="noteGroupForm" >
                <form onSubmit={e => handleAddNoteGroup(e)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '40%' }}>
                    <TextField required type="text" name="title" placeholder="Title" value={title} onChange={event => handleTitleChange(event)}/>
                    <TextField required type="text" name="section" placeholder="Section" value={section} onChange={event => handleSectionChange(event)}/>
                    {title && section !== "" ? 
                    <Button variant="contained" color="primary" type="submit" onClick={e => handleAddNoteGroup(e)}>Add Note Group</Button> 
                    : <Button variant="contained" color="primary" disabled>Add Note Group</Button>}
                </form>
            </div>
            <div className="noteGroups">

                {filteredNoteGroups === [] ? noteGroups.map(noteGroup => {
                   return <Card className="noteGroup" key={noteGroup._id}>
                       {/* <button onClick={() => deleteNoteGroup(noteGroup.id)}>Delete Note Group</button> */}
                        <h2>{noteGroup.title}</h2>
                       <AddNote noteGroupId={noteGroup.id} />
                       <div style={{ overflowY: 'auto', width: '100%' }}>
                            <NoteCardHeader noteGroupID={noteGroup.id} key={noteGroup.id} notes={noteGroup.notes} section={noteGroup.section}/> 
                       </div>
                    </Card>
                }) : filteredNoteGroups.map(noteGroup => {
                    return <Card className="noteGroup" key={noteGroup._id}>
                       {/* <button onClick={() => deleteNoteGroup(noteGroup.id)}>Delete Note Group</button> */}
                        <h2>{noteGroup.title}</h2>
                       <AddNote noteGroupId={noteGroup.id} />
                       <div style={{ overflowY: 'auto', width: '100%' }}>
                            <NoteCardHeader noteGroupID={noteGroup.id} key={noteGroup.id} notes={noteGroup.notes} section={noteGroup.section}/> 
                       </div>
                    </Card>
                })}
                
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    noteGroups: state.noteGroups
  })

export default connect(mapStateToProps)(NoteGroups)