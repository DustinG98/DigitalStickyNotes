import React, { useState, useEffect } from 'react'

const AddNote = ({ addNote, noteToEdit, finishEdit }) => {
    const [note, setNote] = useState({title: '', subtitle: '', description: '' });

    function isEmpty(obj) {
        for(let key in obj) {
            if(obj.hasOwnProperty(key))
            return false;
        }
        return true;
    }

    const handleSubmit = event => {
        event.preventDefault();
        setNote({ title: '', subtitle: '', description: '' });

        if(isEmpty(noteToEdit) === true) {
            addNote(note)
        } else {
            finishEdit(note)
        }
    }

    const handleChange = event => {
        setNote({ ...note, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        if(isEmpty(noteToEdit) === true) {
            setNote({ title: '', subtitle: '', description: '' })
        } else {
            setNote({ id: [noteToEdit.id], title: [noteToEdit.title], subtitle: [noteToEdit.subtitle], description: [noteToEdit.description] })
        }
    }, [noteToEdit])


    return (
        <div>
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