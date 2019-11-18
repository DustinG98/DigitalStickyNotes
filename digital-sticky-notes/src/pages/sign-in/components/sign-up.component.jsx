import React from 'react'
import '../sign-in-up.scss'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div>
            <form className="form">
                <h2>Sign Up</h2>
                <input name="Username" type="text" placeholder="Username"/>
                <input name="email" type="email" placeholder="Email"/>
                <input name="password" type="password" placeholder="Password"/>
                <input name="confirmPassword" type="password" placeholder="Confirm Password"/>
                <div className="user-buttons">
                    <button>Sign Up</button>
                    <Link to="/login">Have an account?</Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp