import React, { useState } from 'react'
import { connect } from 'react-redux'
import '../notes.scss'
import { addNote } from '../actions'
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
                    <input type='text' name='title' placeholder="Title" value={title} onChange={(event) => handleChange(event)} />
                </div>
                {<button>Add Note!</button>}
            </form>
        </div>
    )
    
}

const mapStateToProps = state => ({
    noteGroups: state.noteGroups
  })

export default connect(mapStateToProps)(AddNote)