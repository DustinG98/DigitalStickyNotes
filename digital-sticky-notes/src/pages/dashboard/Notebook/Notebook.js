import React, { useEffect, useState } from 'react'
import SideMenu from './SideMenu'
import {axiosWithAuth} from '../../../auth/axiosWithAuth'

import './notebook.scss'

import TextEditor from '../../notes/components/texteditor/TextEditor'

import { useParams } from 'react-router-dom'

const Notebook = () => {
    const params = useParams()

    const [notebook, setNotebook] = useState({})
    const [currentNote, setCurrentNote] = useState({})
    useEffect(() => {
        const userId = localStorage.getItem("user_id")

        axiosWithAuth().get(`/${userId}/notes/${params.id}`)
            .then(res => {
                setNotebook(res.data);
            }) 
        axiosWithAuth().get(`/${userId}/notes/${params.id}/${params.noteId}`)
            .then(res => {
                setCurrentNote(res.data)
            })
    }, [params.id, params.noteId])





    
    return (
        <div className="mainContainer">
            <SideMenu notebook={notebook}/>
            <div className="rightCont">
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ color: '#2C6095' }}>{currentNote.title}</h1>
                </div>
                <TextEditor note={currentNote}/>
            </div>
        </div>
    )
}

export default Notebook