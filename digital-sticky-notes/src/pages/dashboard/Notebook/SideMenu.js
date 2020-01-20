import React from 'react'
import './sidemenu.scss'

import { NavLink } from 'react-router-dom'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
                <button>Add new note</button>
            </div>
            <div className="link">
                <NavLink id="backToNotebooks" activeClassName="activeLink" to="/dashboard/notebooks"><ArrowBackIcon style={{ marginRight: '5%', fontSize: '2rem' }}/> My Notebooks</NavLink>
            </div>
            <div className="appTitle">
                <h4>Notes4You</h4>
            </div>
        </div>
    )
}

export default SideMenu