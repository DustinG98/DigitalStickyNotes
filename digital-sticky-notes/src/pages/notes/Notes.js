import React, { useState } from 'react'
import NoteGroups from './NoteGroups'
import SearchForm from './components/searchform/SearchForm'

const Notes = () => {
        const [ searchTerm, setSearchTerm ] = useState("")
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1>Notes</h1>
            {console.log(searchTerm)}
            {/* NOTES PAGE - ADD NOTE FORM & CURRENT NOTES - PASSING PROPS */}
                <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
                <NoteGroups searchTerm={searchTerm}/>
            {/* <NoteCard notes={notes} /> */}
        </div>
      )
  
}

export default Notes