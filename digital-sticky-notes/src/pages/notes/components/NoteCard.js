import React from 'react'

const Notes = ({notes, deleteNote, editNote}) => {

    //CONDITIONAL- IF THE NOTES ARE NOT EMPTY IT DISPLAYS THE NOTES, IF THERE IS NO NOTES IT DISPLAYS 'You have no notes left'
    const noteList = notes.length ? (
        notes.map(note => {
            return (
                <div className="collection-item" key={note.id}>
                    {/* NOTE CARDS */}
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