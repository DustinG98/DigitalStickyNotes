import React from 'react'
import NavBar from '../../navBar'

const WelcomePage = ({ signOut, isToken, setToken }) => {
    //WELCOME PAGE
    return (
        <div>
            <NavBar signOut={signOut} isToken={isToken}/>
            <h1>Welcome to Notes4You</h1>
        </div>
    )
}

export default WelcomePage