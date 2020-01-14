import React, { useState } from 'react';
import { Route, Link, Switch, Redirect, useHistory, useLocation } from 'react-router-dom'
import WelcomePage from './pages/welcome-page/WelcomePage'
import SignInPage from './pages/sign-in/sign-in-page'
import './App.scss'
import Notes from './pages/notes/Notes';
import PrivateRoute from './auth/PrivateRoute'



const App = () => {



    return (
      <div>
        <nav className="navBar">
          <h1>Digital Sticky Notes</h1>
          {/* NAVBAR */}
          <Link className="navLink" to="/">Home</Link>
          <Link className="navLink" to="/notes">Notes</Link>
          <Link className="navLink" to="/login">Sign In</Link>
        </nav>
        {/* ROUTES FOR NAVBAR */}
        <Route exact path="/" render={props => <WelcomePage {...props}/>}/>
        <PrivateRoute path="/notes"> <Notes/> </PrivateRoute>
        <Route path="/login" render={props => <SignInPage {...props}/>}/>
        
      </div>
    )
}





export default App
