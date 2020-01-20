import React from 'react';
import SignIn from './components/sign-in.component'
import SignUp from './components/sign-up.component'
import { Route } from 'react-router-dom'
import NavBar from '../../navBar'

const SignInPage = (props) => {
    //SIGN IN/UP PAGE
    const setToken = (value) => {
        props.setIsToken(value)
    }
    return (
        <div>
            <NavBar/>
            {/* SETTING UP ROUTES FOR SIGNUP/SIGNIN */}
            <div  className="user-forms">
                <Route path="/login/sign-up" render={props => <SignUp {...props} />}/>
                <Route exact path="/login" render={props => <SignIn {...props} setIsToken={setToken}/>}/>
            </div>
        </div>
    )
}

export default SignInPage