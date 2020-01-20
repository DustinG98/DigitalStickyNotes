import React from 'react'
import './sidemenu.scss'

import {NavLink, Link} from 'react-router-dom'

const SideMenu = ({ signOut, user, loading }) => {

    return (
        <div className="sideMenu">
        {loading ? <div className="user">
            <h2>Loading...</h2>
            </div> : <div className="user">
            <div className="userImg">
                <img src={require('./usertestimg.jpeg')} alt="user profile"/>
            </div>
            <h2>{user.username}</h2>
        </div>}
            <div className="link">
                <NavLink activeClassName="activeLink" to="/dashboard/notebooks">My Notebooks</NavLink>
            </div>
            <div className="link">
                <NavLink activeClassName="activeLink" to="/dashboard/account">My Account</NavLink>
            </div>
            <div className="link">
                <NavLink activeClassName="activeLink" to="/dashboard/settings">Settings</NavLink>
            </div>
            <div className="link">
                <Link to="/login" onClick={signOut}>Sign Out</Link>
            </div>
            <div className="appTitle">
                <h4>Notes4You</h4>
            </div>
        </div>
    )
}

export default SideMenu