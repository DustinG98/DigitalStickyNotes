import React, { useContext } from 'react';
import NoteCardHeader from './components/NoteCardHeader'
import './notes.scss'
import AddNote from './components/AddNote'
import { NoteContext } from './contexts/NoteContext'
import { NoteGroupsContext } from './contexts/NoteGroupsContext'

const NoteGroups = () => {
    const [editNote, noteToEdit, finishEdit] = useContext(NoteContext);
    const [setNoteGroup, noteGroups, noteGroup, addNoteGroup, deleteNoteGroup, addNote, deleteNote] = useContext(NoteGroupsContext);


    //handle submit
    const handleSubmit = event => {
        event.preventDefault();
        setNoteGroup({title: ""})
        addNoteGroup(noteGroup)
    }

    //handle change
    const handleChange = event => {
        setNoteGroup({...noteGroup, [event.target.name]: event.target.value})
    }
    return (
        <div>
            <div>
                <form onSubmit={event => handleSubmit(event)}>
                    <input type="text" name="title" placeholder="Title" value={noteGroup.title} onChange={event => handleChange(event)}/>
                    <button>Add Note Group</button>
                </form>
            </div>
            <div className="noteGroups">

                {noteGroups !== undefined ? noteGroups.map(noteGroup => {
                   return <div className="noteGroup" key={noteGroup.id}>
                       <button onClick={() => deleteNoteGroup(noteGroup.id)}>Delete Note Group</button>
                       <AddNote addNote={addNote} noteGroupId={noteGroup.id} noteToEdit={noteToEdit} finishEdit={finishEdit} />
                       <NoteCardHeader noteGroupId={noteGroup.id} key={noteGroup.id} notes={noteGroup.notes} deleteNote={deleteNote} editNote={editNote} addNote={addNote} noteToEdit={noteToEdit} finishEdit={finishEdit}/>
                    </div>
                }) : null}
                
            </div>
        </div>
    )
}

export default NoteGroups;