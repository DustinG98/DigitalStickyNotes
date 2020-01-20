import React, { useState } from 'react'
import NoteGroups from '../NoteGroups'
import SearchForm from '../components/searchform/SearchForm'

import AddIcon from '@material-ui/icons/Add';


import './notebooks.scss'



const Notebooks = () => {
        const [ searchTerm, setSearchTerm ] = useState("")
        const [open, setOpen] = useState(false)
        const handleOpen = () => {
            setOpen(true);
          };
        
          const handleClose = () => {
            setOpen(false);
          };


      return (
          <div className="noteBooks">
            <div className="topBar">
              <h1>My Notebooks</h1>
              <div className="searchBox">
                <div id="searchForm" className="searchForm">
                    <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
                </div>
                <div>
                    <AddIcon style={{ cursor: 'pointer' }} fontSize="large" onClick={handleOpen}/>
                </div>
              </div>
            </div>
            <div className="allNotebooks">
              {/* NOTES PAGE - ADD NOTE FORM & CURRENT NOTES - PASSING PROPS */}
                  {<NoteGroups searchTerm={searchTerm} open={open} handleClose={handleClose} handleOpen={handleOpen}/>}
            </div>
              {/* <NoteCard notes={notes} /> */}
          </div>
      )
  
}

export default Notebooks