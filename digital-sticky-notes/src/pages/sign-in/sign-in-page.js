import React from 'react';
import SignIn from './components/sign-in.component'
import SignUp from './components/sign-up.component'
import { Route } from 'react-router-dom'

const SignInPage = () => {
    //SIGN IN/UP PAGE
    return (
        <div className="user-forms">
            {/* SETTING UP ROUTES FOR SIGNUP/SIGNIN */}
            <Route path="/login/sign-up" render={props => <SignUp {...props}/>}/>
            <Route exact path="/login" render={props => <SignIn {...props}/>}/>
        </div>
    )
}

export default SignInPage