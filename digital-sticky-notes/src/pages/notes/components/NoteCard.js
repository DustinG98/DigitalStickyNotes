import React from 'react'
import '../notes.scss'

const Notes = ({notes, deleteNote, editNote}) => {

    //CONDITIONAL- IF THE NOTES ARE NOT EMPTY IT DISPLAYS THE NOTES, IF THERE IS NO NOTES IT DISPLAYS 'You have no notes left'
    const noteList = notes.length ? (
        notes.map(note => {
            return (
                <div className="noteCard" key={note.id}>
                    {/* NOTE CARDS */}
                    <div className="noteCardHeader">
                        <div className="container">
                            <div className="buttons">
                                <button onClick={() => editNote(note)}>E</button>
                                <button onClick={() => deleteNote(note.id)}>D</button>
                            </div>
                            <div  className="noteCardTag">
                                <span>JS</span>
                            </div>
                        </div>
                        <h2>{note.title}</h2>
                    </div>
                    
                    <h3>{note.subtitle}</h3>
                    <p>{note.description}</p>
                    
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