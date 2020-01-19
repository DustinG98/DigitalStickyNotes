import React, { useEffect, useState } from 'react'
import SideMenu from './SideMenu'
import {axiosWithAuth} from '../../../auth/axiosWithAuth'

import { useParams } from 'react-router-dom'

const Notebook = () => {
    const params = useParams()

    const [notebook, setNotebook] = useState({})

    useEffect(() => {
        const userId = localStorage.getItem("user_id")
        axiosWithAuth().get(`/${userId}/notes/${params.id}`)
            .then(res => setNotebook(res.data))
    }, [])
    
    return (
        <div className="mainContainer">
            {console.log(notebook)}
            <SideMenu notebook={notebook}/>
            <h2>EDITOR</h2>
        </div>
    )
}

export default Notebook