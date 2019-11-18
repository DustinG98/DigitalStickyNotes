import React from 'react';
import { Route, Link } from 'react-router-dom'
import WelcomePage from './pages/welcome-page/WelcomePage'
import Notes from './pages/notes/Notes'
import SignInPage from './pages/sign-in/sign-in-page'
import './App.scss'

const App = () => {

    
    return (
      <div>
        <nav className="navBar">
          <h1>Digital Sticky Notes</h1>
          <Link className="navLink" to="/">Home</Link>
          <Link className="navLink" to="/notes">Notes</Link>
          <Link className="navLink" to="/login">Sign In</Link>
        </nav>

        <Route exact path="/" render={props => <WelcomePage {...props}/>}/>
        <Route path="/notes" render={props => <Notes/>}/>
        <Route path="/login" render={props => <SignInPage/>}/>
        
      </div>
    )
}

export default App
