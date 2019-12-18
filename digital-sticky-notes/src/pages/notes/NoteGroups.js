import React, { useState } from 'react';
import { connect } from 'react-redux'
import NoteCardHeader from './components/NoteCardHeader'
import './notes.scss'
import AddNote from './components/AddNote'

import { addNoteGroup, addNote } from './actions'

const NoteGroups = (props) => {
    const { editNote, noteToEdit, finishEdit }  = props;
    const { noteGroups } = props;
    // const [setNoteGroup, noteGroups, noteGroup, addNoteGroup, deleteNoteGroup, addNote, deleteNote] = useContext(NoteGroupsContext);
    // const [noteGroups, setNoteGroups] = useState([
    //     {id: 1, title: "Finished", notes: [
    //         {id: 1, title: 'Example Note 1', subtitle: 'SUBTITTLES', description: 'lorem ipsum '},
    //         {id: 2, title: 'Example Note 2', subtitle: 'SUBTITTLES', description: 'lorem ipsum '}
    //     ]}
    // ]);

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
    
    //delete note group
    // const deleteNoteGroup = (id) => {
    //     const newNoteGroups = noteGroups.filter(noteGroup => {
    //         return noteGroup.id !== id;
    //     })
    //     setNoteGroups(newNoteGroups)
    // }


    //deleteNote
    // const deleteNote = (noteGroupId, id) => {
    //     noteGroups.map(noteGroup => {
    //         if(noteGroup.id === noteGroupId) {
    //            const newNotes = noteGroup.notes.filter(note => {
    //                 return note.id !== id;
    //             })
    //             noteGroup.notes = newNotes;
    //             setNotes([])
    //         }
    //         return null;
    //     })
    // }
    //addNote
    const handleAddNote = () => {
        const { dispatch, noteGroupID } = props;
        const { text } = title;

        if(text) {
            setTitle("")
            dispatch(addNoteGroup(noteGroupID, text))
        }
        return
    }

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
            <div>
                <form onSubmit={e => handleAddNoteGroup(e)}>
                    <input type="text" name="title" placeholder="Title" value={title} onChange={event => handleTitleChange(event)}/>
                    <input type="text" name="section" placeholder="Section" value={section} onChange={event => handleSectionChange(event)}/>
                    <button onClick={e => handleAddNoteGroup(e)}>Add Note Group</button>
                </form>
            </div>
            <div className="noteGroups">

                {noteGroups !== undefined ? noteGroups.map(noteGroup => {
                   return <div className="noteGroup" key={noteGroup.id}>
                       {/* <button onClick={() => deleteNoteGroup(noteGroup.id)}>Delete Note Group</button> */}
                        <h2>{noteGroup.title}</h2>
                       <AddNote addNote={handleAddNote} noteGroupId={noteGroup.id} noteToEdit={noteToEdit} finishEdit={finishEdit} />
                       <NoteCardHeader noteGroupId={noteGroup.id} key={noteGroup.id} notes={noteGroup.notes} editNote={editNote} addNote={addNote} noteToEdit={noteToEdit} finishEdit={finishEdit} section={noteGroup.section}/>
                    </div>
                }) : null}
                
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    noteGroups: state.noteGroups
  })

export default connect(mapStateToProps)(NoteGroups)