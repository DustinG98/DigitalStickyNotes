import React, { useState } from 'react';
import { Route, Link, Switch, Redirect, useHistory, useLocation } from 'react-router-dom'
import WelcomePage from './pages/welcome-page/WelcomePage'
import SignInPage from './pages/sign-in/sign-in-page'
import './App.scss'
import Notes from './pages/notes/Notes';




const App = () => {

    const fakeAuth = {
      isAuthenticated: false,
      authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
      },
      signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
      }
    }

    function PrivateRoute({ children, ...rest }) {
      return (
        <Route
          {...rest}
          render={({ location }) =>
            fakeAuth.isAuthenticated ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
    }



    return (
      <div>
        <nav className="navBar">
          <h1>Digital Sticky Notes</h1>
          {/* NAVBAR */}
          <Link className="navLink" to="/">Home</Link>
          <Link className="navLink" to="/notes">Notes</Link>
          <Link className="navLink" to="/login">Sign In</Link>
          {fakeAuth.isAuthenticated === true ? <input/> : null}
        </nav>
        {/* ROUTES FOR NAVBAR */}
        <Route exact path="/" render={props => <WelcomePage {...props}/>}/>
        <PrivateRoute path="/notes"> <Notes/> </PrivateRoute>
        <Route path="/login" render={props => <SignInPage {...props} fakeAuth={fakeAuth}/>}/>
        
      </div>
    )
}





export default App
