import React from 'react'
import NoteGroups from './NoteGroups'
import NoteContextProvider from './contexts/NoteContext'

const Notes = () => {
  
      return (
        <div>
            <h1>Notes</h1>
            {/* NOTES PAGE - ADD NOTE FORM & CURRENT NOTES - PASSING PROPS */}
            
            
            <NoteContextProvider><NoteGroups/></NoteContextProvider>
            {/* <NoteCard notes={notes} /> */}
        </div>
      )
  
}

export default Notes