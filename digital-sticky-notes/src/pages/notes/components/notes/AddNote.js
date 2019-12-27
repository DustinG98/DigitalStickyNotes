import React, { useState } from 'react'
import { connect } from 'react-redux'
import '../../notes.scss'
import { addNote } from '../../actions'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const AddNote = (props) => {
    const { noteGroupId } = props
    //INITIAL NOTE STATE
    const [title, setTitle] = useState("");


    //HANDLE SUBMIT -- RESETS FORM -- IF OBJECT IS EMPTY ADDS A NEW NOTE -- IF OBJECT IS NOT EMPTY IT FINISHES THE EDIT
    const handleSubmit = event => {
        event.preventDefault();
        setTitle("")
        const { dispatch } = props

        dispatch(addNote(noteGroupId, title))
    }

    //WHEN THE FORM CHANGES IT SETS THE NOTE'S STATE
    const handleChange = event => {
        setTitle(event.target.value)
    }

    return (
        <div className="addNote">
            {/* ADD NEW NOTE FORM */}
            <form onSubmit={(event) => handleSubmit(event)}>
                <div>
                    <TextField type='text' name='title' placeholder="Title" value={title} onChange={(event) => handleChange(event)} />
                </div>
                {title !== "" ? <Button type="submit" color="primary" variant="contained">Add Note!</Button> : <Button type="submit" color="primary" variant="contained" disabled>Add Note!</Button>}
            </form>
        </div>
    )
    
}

const mapStateToProps = state => ({
    noteGroups: state.noteGroups
  })

export default connect(mapStateToProps)(AddNote)