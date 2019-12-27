import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = (props) => {
    //SIGN IN FORM
    return (
        <div>
            <form className="form">
                <h2>Sign In</h2>
                <input name="email" type="email" placeholder="Email"/>
                <input name="password" type="password" placeholder="Password"/>
                <div className="user-buttons">
                    <button onClick={(e) => props.login(e)}>Sign In</button>
                    <Link to="/login/sign-up">Need an account?</Link>
                </div>
                
            </form>
        </div>
    )
}

export default SignIn