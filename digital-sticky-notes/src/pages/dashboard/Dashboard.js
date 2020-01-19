import React from 'react'
import SideMenu from './SideMenu/SideMenu'
import Notes from '../notes/Notes'
import MyAccount from './MyAccount/MyAccount'
import Settings from './Settings/Settings'
import './dashboard.scss'

import {Route} from 'react-router-dom'


const Dashboard = () => {
    return (
        <div className="mainContainer">
            <SideMenu/>
            <div className="rightCont">
                <Route exact path="/dashboard/notebooks" render={props => <Notes {...props}/>}/>
                <Route path="/dashboard/account" render={props => <MyAccount {...props}/>}/>
                <Route path="/dashboard/settings" render={props => <Settings {...props}/>}/>
            </div>
        </div>
    )
}

export default Dashboard