import React from 'react'
import NoteGroups from './NoteGroups'


const Notes = () => {
      return (
        <div>
            <h1>Notes</h1>
            {/* NOTES PAGE - ADD NOTE FORM & CURRENT NOTES - PASSING PROPS */}
                <NoteGroups />
            {/* <NoteCard notes={notes} /> */}
        </div>
      )
  
}

export default Notes