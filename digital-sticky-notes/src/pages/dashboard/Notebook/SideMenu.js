import React from 'react'
import './sidemenu.scss'

import {NavLink, Link} from 'react-router-dom'

const SideMenu = ({ notebook }) => {
    return (
        <div className="sideMenu">
            <div className="user">
                <h2>{notebook.title}</h2>
            </div>
            {notebook.notes !== undefined ? notebook.notes.map(note => {
                return <div className="link" key={note._id}>
                <NavLink activeClassName="activeLink" to={`/notebook/${notebook._id}/${note._id}`}>{note.title}</NavLink>
            </div>
            }) : <h3>Loading...</h3>} 
            <div className="link">
                <a>Add new note</a>
            </div>
            <div className="link">
                <NavLink activeClassName="activeLink" to="/dashboard/notebooks">Back To My Notebooks</NavLink>
            </div>
            <div className="appTitle">
                <h4>Notes4You</h4>
            </div>
        </div>
    )
}

export default SideMenu