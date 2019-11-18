import React from 'react'

const Notes = ({notes, deleteNote, editNote}) => {

    const noteList = notes.length ? (
        notes.map(note => {
            return (
                <div className="collection-item" key={note.id}>
                    <h1>{note.title}</h1>
                    <h2>{note.subtitle}</h2>
                    <p>{note.description}</p>
                    <button onClick={() => editNote(note)}>Edit</button>
                    <button onClick={() => deleteNote(note.id)}>Delete</button>
                </div>
            )
        })
    ) : (
        <p className="center">You have no notes left</p>
    )
    return (
        <div className="todos collection">
            {noteList}
        </div>
    )
}

export default Notes