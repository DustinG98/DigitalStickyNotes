import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import './notes.scss'
import './notegroups.scss'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'

import { addNoteGroup, fetchInitState } from './actions'
import { fetchInitData } from './backend-requests/fetchInitData'
import CircularProgress from '@material-ui/core/CircularProgress';

import Modal from '@material-ui/core/Modal';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'; 

import {useHistory} from 'react-router-dom'


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#2C6095"
        },
        secondary: {
          main: "#E33D3D"
      }
    }
  })

  const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const NoteGroups = (props) => {
    const { noteGroups, searchTerm, open, handleClose } = props;
    const [title, setTitle] = useState("")
    const [section, setSection] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const history = useHistory()

    const { dispatch } = props;
    useEffect(() => {
        setIsLoading(true)
       fetchInitData()
        .then(res => {
            dispatch(fetchInitState(res))
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    }, [dispatch])

    //add note group
    const handleAddNoteGroup = (e) => {
        e.preventDefault()
        const { dispatch } = props;

        setTitle("")
        setSection("")
        dispatch(addNoteGroup(title, section))

         handleClose()
    }
    const filteredNoteGroups = noteGroups.filter(noteGroup => {
        if(noteGroup.title.includes(searchTerm)) {
            return noteGroup
        }
        return null;
    })

    //handle change
    const handleTitleChange = event => {
        setTitle(event.target.value)
    }
    const handleSectionChange = event => {
        setSection(event.target.value)
    }

    //handle open notegroup
    const handleOpenNoteGroup = (notebook) => {
        console.log(notebook)
        let firstNoteId = notebook.notes.length > 0 ? notebook.notes[0]._id : 0;
        console.log(firstNoteId)
        history.push(`/notebook/${notebook._id}/${firstNoteId}`)
    }
    return (
        <div>
            <Modal 
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
            >
                <div className="modal">
                    <div className="noteGroupForm">
                    <button className="close" style={{ zIndex: '10000' }} onClick={handleClose}>&times;</button>
                        
                        <form onSubmit={e => handleAddNoteGroup(e)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <h2>Add Notebook</h2>
                            <TextField required type="text" name="title" placeholder="Title" value={title} onChange={event => handleTitleChange(event)}/>
                            <TextField required type="text" name="section" placeholder="Section" value={section} onChange={event => handleSectionChange(event)}/>
                            {title && section !== "" ? 
                            <Button variant="contained" color="primary" type="submit" onClick={e => handleAddNoteGroup(e)}>Add Notebook</Button> 
                            : <Button variant="contained" color="primary" disabled>Add Notebook</Button>}
                        </form>
                    </div>
                </div>
            </Modal>
            <div className="noteGroups">
                <div className="topSection">
                    <h2>Notebook Title</h2>
                    <h2># Of Notes</h2>
                </div>
                {isLoading === false ? filteredNoteGroups === [] ? noteGroups.map(noteGroup => {
                   return <Card className="noteGroup" key={String(noteGroup._id)} onClick={() => handleOpenNoteGroup(noteGroup)}>
                       {/* <button onClick={() => deleteNoteGroup(noteGroup.id)}>Delete Note Group</button> */}
                        
                        <h2>{noteGroup.title}</h2>
                       {/* <AddNote noteGroupId={String(noteGroup._id)} />
                       <div style={{ overflowY: 'auto', width: '100%' }}>
                            <NoteCardHeader noteGroupID={noteGroup._id} key={noteGroup._id} notes={noteGroup.notes} section={noteGroup.section}/> 
                       </div> */}
                        <h2>{noteGroup.notes.length}</h2>
                    </Card>
                }) : filteredNoteGroups.map(noteGroup => {
                    return <Card className="noteGroup" key={noteGroup._id} onClick={() => handleOpenNoteGroup(noteGroup)}>
                       {/* <button onClick={() => deleteNoteGroup(noteGroup.id)}>Delete Note Group</button> */}
                        <h2>{noteGroup.title}</h2>
                       {/* <AddNote noteGroupId={noteGroup._id} />
                       <div style={{ overflowY: 'auto', width: '100%' }}>
                            <NoteCardHeader noteGroupID={noteGroup._id} key={noteGroup._id} notes={noteGroup.notes} section={noteGroup.section}/> 
                       </div> */}
                       <h2>{noteGroup.notes.length}</h2>
                    </Card>
                }) : <div style={{ display: 'flex', alignItems: 'center', marginTop: '5%'}}>
                        <ThemeProvider theme={theme}>
                            <CircularProgress color="primary"/>
                        </ThemeProvider>
                    </div>}
                
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    noteGroups: state.noteGroups
  })

export default connect(mapStateToProps)(NoteGroups)