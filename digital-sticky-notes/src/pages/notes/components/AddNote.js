import React, { useState, useEffect } from 'react'
import '../notes.scss'

const AddNote = ({ addNote, noteToEdit, finishEdit, noteGroupId }) => {
    //INITIAL NOTE STATE
    const [note, setNote] = useState({title: '', subtitle: '', description: '' });

    //EMPTY OBJECT FUNCTION
    function isEmpty(obj) {
        for(let key in obj) {
            if(obj.hasOwnProperty(key))
            return false;
        }
        return true;
    }


    //HANDLE SUBMIT -- RESETS FORM -- IF OBJECT IS EMPTY ADDS A NEW NOTE -- IF OBJECT IS NOT EMPTY IT FINISHES THE EDIT
    const handleSubmit = event => {
        event.preventDefault();
        setNote({ title: '', subtitle: '', description: '' });

        if(isEmpty(noteToEdit) === true) {
            addNote(note, noteGroupId)
        } else {
            finishEdit(note)
        }
    }

    //WHEN THE FORM CHANGES IT SETS THE NOTE'S STATE
    const handleChange = event => {
        setNote({ ...note, [event.target.name]: event.target.value })
    }

    //WATCHING noteToEdit, IF IT'S EMPTY IT SETS THE NOTE TO EMPTY STATE, IF IT'S NOT EMPTY IT SETS THE NOTE TO THE noteToEdit
    useEffect(() => {
        if(isEmpty(noteToEdit) === true) {
            setNote({ title: '', subtitle: '', description: '' })
        } else {
            setNote({ id: [noteToEdit.id], title: [noteToEdit.title], subtitle: [noteToEdit.subtitle], description: [noteToEdit.description] })
        }
    }, [noteToEdit])


    return (
        <div className="addNote">
            {/* ADD NEW NOTE FORM */}
            <form onSubmit={(event) => handleSubmit(event)}>
                <div>
                    <input type='text' name='title' placeholder="Title" value={note.title} onChange={(event) => handleChange(event)} />
                    <input type='text' name='subtitle' placeholder="subtitle" value={note.subtitle} onChange={(event) => handleChange(event)} />
                    <input type='text' name='description' placeholder="description" value={note.description} onChange={(event) => handleChange(event)} />
                </div>
                {(isEmpty(noteToEdit)) ? <button>Add Note!</button> : <button>Finish Edit</button>}
            </form>
        </div>
    )
    
}

export default AddNote