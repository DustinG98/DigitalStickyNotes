import React from 'react'
import './myaccount.scss'

const MyAccount = ({user}) => {
    return (
        <div>
            {console.log(user)}
            <div className="topBar">
                <h1>My Account</h1>
            </div>
            <div className="userInfo">
                {Object.keys(user).length > 0 ? <div>
                    <h2>Username: <span className="bold">{user.username}</span></h2>
                    <h3>Email: <span className="bold">{user.email}</span></h3>
                    <h3># of Notebooks: <span className="bold">{user.noteGroups.length}</span></h3>
                </div> : <h2>Loading...</h2>}
            </div>
        </div>
    )
}

export default MyAccount