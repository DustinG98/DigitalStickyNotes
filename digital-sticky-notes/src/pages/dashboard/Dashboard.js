import React, { useState, useEffect } from 'react'
import SideMenu from './SideMenu/SideMenu'
import Notebooks from '../notes/Notebooks/Notebooks'
import MyAccount from './MyAccount/MyAccount'
import Settings from './Settings/Settings'
import './dashboard.scss'
import {axiosWithAuth} from '../../auth/axiosWithAuth'

import {Route} from 'react-router-dom'


const Dashboard = ({ signOut }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        const userID = localStorage.getItem('user_id')
        axiosWithAuth().get(`/${userID}`)
            .then(res => setUser(res.data))
    }, [])
    return (
        <div className="mainContainer">
            <Route path="/dashboard" render={props => <SideMenu signOut={signOut} user={user} {...props}/>}/>
            <div className="rightCont">
                <Route exact path="/dashboard/notebooks" render={props => <Notebooks {...props}/>}/>
                <Route path="/dashboard/account" render={props => <MyAccount user={user} {...props}/>}/>
                <Route path="/dashboard/settings" render={props => <Settings {...props}/>}/>
            </div>
        </div>
    )
}

export default Dashboard