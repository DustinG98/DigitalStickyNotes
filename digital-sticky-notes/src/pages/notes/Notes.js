import React from 'react'
import NoteGroups from './NoteGroups'
import NoteContextProvider from './contexts/NoteContext'
import NoteGroupsProvider from './contexts/NoteGroupsContext'

const Notes = () => {
  
      return (
        <div>
            <h1>Notes</h1>
            {/* NOTES PAGE - ADD NOTE FORM & CURRENT NOTES - PASSING PROPS */}
            
            
            <NoteContextProvider>
              <NoteGroupsProvider>
                <NoteGroups/>
              </NoteGroupsProvider>
            </NoteContextProvider>
            {/* <NoteCard notes={notes} /> */}
        </div>
      )
  
}

export default Notes