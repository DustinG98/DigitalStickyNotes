import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const SignIn = (props) => {
    //SIGN IN FORM
    const history = useHistory()

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    const handlesChange = (e) => {
        setCredentials({ ...credentials,[e.target.name]: e.target.value })
    }

    let login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/auth/users/signin', credentials)
            .then(res => {
                localStorage.setItem("auth-token", res.headers["auth-token"])
                localStorage.setItem("user_id", res.headers["user_id"])
                history.push('/notes')
            })
    }
    return (
        <div>
            <form className="form">
                <h2>Sign In</h2>
                <input value={credentials.email} onChange={e => handlesChange(e)} name="email" type="email" placeholder="Email"/>
                <input value={credentials.password} onChange={e => handlesChange(e)} name="password" type="password" placeholder="Password"/>
                <div className="user-buttons">
                    <button onClick={(e) => login(e)}>Sign In</button>
                    <Link to="/login/sign-up">Need an account?</Link>
                </div>
                
            </form>
        </div>
    )
}

export default SignIn