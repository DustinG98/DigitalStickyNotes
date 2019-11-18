import React from 'react';
import { Route, Link } from 'react-router-dom'
import WelcomePage from './pages/welcome-page/WelcomePage'
import Notes from './pages/notes/Notes'

const App = () => {

    
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/notes">Notes</Link>
        </nav>

        <Route exact path="/" render={props => <WelcomePage {...props}/>}/>
        <Route path="/notes" render={props => <Notes/>}/>
      </div>
    )
}

export default App
