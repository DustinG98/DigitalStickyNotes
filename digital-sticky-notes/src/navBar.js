import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ signOut, isToken }) => {
    return (
        <nav className="navBar">
          <h1>Notes4You</h1>
          {/* NAVBAR */}
          <Link className="navLink" to="/">Home</Link>
          <Link className="navLink" to="/dashboard/notebooks">Dashboard</Link>
          {isToken ? <Link className="navLink" onClick={signOut} to="/login">Sign Out</Link>  :<Link className="navLink" to="/login">Sign In</Link>}
        </nav>
    )
}

export default NavBar