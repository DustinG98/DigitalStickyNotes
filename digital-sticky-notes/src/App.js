import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom'
import WelcomePage from './pages/welcome-page/WelcomePage'
import SignInPage from './pages/sign-in/sign-in-page'
import './App.scss'
import Notes from './pages/notes/Notes';
import PrivateRoute from './auth/PrivateRoute'
import Dashboard from './pages/dashboard/Dashboard';



const App = () => {
    const [isToken, setIsToken] = useState(false)
    useEffect(() => {
      if(localStorage.getItem("auth-token") === null){
        setIsToken(false)
      } else if(localStorage.getItem("auth-token") !== null) {
        setIsToken(true)
      }
    }, [])

    const signOut = () => {
      setIsToken(false);
      localStorage.removeItem("auth-token")
      localStorage.removeItem("user_id")
    }

    const setToken = (value) => {
      setIsToken(value)
    }

    return (
      <div>
        
        {/* ROUTES FOR NAVBAR */}
        <Route exact path="/" render={props => <WelcomePage signOut={signOut} isToken={isToken} setToken={setToken} {...props}/>}/>
        <PrivateRoute path="/dashboard"> <Dashboard/> </PrivateRoute>
        <Route path="/login" render={props => <SignInPage {...props} setIsToken={setToken}/>}/>
      </div>
    )
}





export default App
