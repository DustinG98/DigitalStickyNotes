import React from 'react'
import NavBar from '../../navBar'
import { Route } from 'react-router-dom'
import SignInPage from '../sign-in/sign-in-page'

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