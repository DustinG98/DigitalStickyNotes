import React from 'react'
import '../notes.scss'

const Notes = ({notes, deleteNote, editNote}) => {

    //CONDITIONAL- IF THE NOTES ARE NOT EMPTY IT DISPLAYS THE NOTES, IF THERE IS NO NOTES IT DISPLAYS 'You have no notes left'
    const noteList = notes.length ? (
        notes.map(note => {
            return (
                <div className="noteCard" key={note.id}>
                    {/* NOTE CARDS */}
                    <div classname="bodySection">
                        <h3>{note.subtitle}</h3>
                        <p>{note.description}</p>
                    </div>
                </div>
            )
        })
    ) : (
        <p className="center">You have no notes left</p>
    )


    return (
        <div className="notes-container">
            {noteList}
        </div>
    )
}

export default Notes