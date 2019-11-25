import React, { useState } from 'react';
import NoteCardHeader from './components/NoteCardHeader'
import './notes.scss'
import AddNote from './components/AddNote'

const NoteGroups = (props) => {
    const { editNote, noteToEdit, finishEdit } = props;
 
    //noteGroups
    const [noteGroups, setNoteGroups] = useState([
        {id: 1, title: "Finished", notes: [
            {id: 1, title: 'Example Note 1', subtitle: 'SUBTITTLES', description: 'lorem ipsum '},
            {id: 2, title: 'Example Note 2', subtitle: 'SUBTITTLES', description: 'lorem ipsum '}
        ]}
    ]);

    const [noteGroup, setNoteGroup] = useState({title: "", notes: []})
    //add note group
    const addNoteGroup = (noteGroup) => {
        noteGroup.id = Math.random();
        setNoteGroups([...noteGroups, noteGroup])
    }
    
    //delete note group
    const deleteNoteGroup = (id) => {
        const newNoteGroups = noteGroups.filter(noteGroup => {
            return noteGroup.id !== id;
        })
        setNoteGroups(newNoteGroups)
    }

    const [notes, setNotes] = useState([]);
    //deleteNote
    const deleteNote = (noteGroupId, id) => {
        noteGroups.map(noteGroup => {
            if(noteGroup.id === noteGroupId) {
               const newNotes = noteGroup.notes.filter(note => {
                    return note.id !== id;
                })
                noteGroup.notes = newNotes;
                setNotes([])
            }
            return null;
        })
    }
    //addNote
    const addNote = (note, id) => {
        noteGroups.map(noteGroup => {
            if(noteGroup.id === id) {
                noteGroup.notes.push(note);
            }
            setNotes([])
            return null;
        })
    }

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

                {noteGroups.map(noteGroup => {
                   return <div className="noteGroup" key={noteGroup.id}>
                       
                       <AddNote addNote={addNote} noteGroupId={noteGroup.id} noteToEdit={noteToEdit} finishEdit={finishEdit} />
                       <NoteCardHeader noteGroupId={noteGroup.id} key={noteGroup.id} notes={noteGroup.notes} deleteNote={deleteNote} editNote={editNote} addNote={addNote} noteToEdit={noteToEdit} finishEdit={finishEdit}/>
                    </div>
                })}
                
            </div>
        </div>
    )
}

export default NoteGroups;