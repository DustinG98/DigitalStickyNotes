import React, { useState } from 'react'
import NoteGroups from '../NoteGroups'
import SearchForm from '../components/searchform/SearchForm'
import SearchIcon from '@material-ui/icons/Search';




import './notebooks.scss'



const Notebooks = () => {
        const [ searchTerm, setSearchTerm ] = useState("")

        const [showSearch, setShowSearch] = useState(false)

        const showSearchForm = () => {
            setShowSearch(!showSearch)
        }
      return (
          <div className="noteBooks">
            <div className="topBar">
              <h1>My Notebooks</h1>
              <div className="searchBox">
                <div id="searchForm" className="searchForm">
                    <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
                </div>
              </div>
            </div>
            <div className="allNotebooks">
              {/* NOTES PAGE - ADD NOTE FORM & CURRENT NOTES - PASSING PROPS */}
                  <NoteGroups searchTerm={searchTerm}/>
            </div>
              {/* <NoteCard notes={notes} /> */}
          </div>
      )
  
}

export default Notebooks