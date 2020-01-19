import React, { useState } from 'react'
import NoteGroups from './NoteGroups'
import SearchForm from './components/searchform/SearchForm'

const Notes = () => {
        const [ searchTerm, setSearchTerm ] = useState("")
      return (
          <div >
              <h1>My Notebooks</h1>
              {/* NOTES PAGE - ADD NOTE FORM & CURRENT NOTES - PASSING PROPS */}
                  <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
                  <NoteGroups searchTerm={searchTerm}/>
              {/* <NoteCard notes={notes} /> */}
          </div>
      )
  
}

export default Notes