import React from 'react'
import SideMenu from './SideMenu/SideMenu'
import Notebooks from '../notes/Notebooks/Notebooks'
import MyAccount from './MyAccount/MyAccount'
import Settings from './Settings/Settings'
import './dashboard.scss'

import {Route} from 'react-router-dom'


const Dashboard = ({ signOut }) => {
    return (
        <div className="mainContainer">
            <SideMenu signOut={signOut}/>
            
            <div className="rightCont">
                <Route exact path="/dashboard/notebooks" render={props => <Notebooks {...props}/>}/>
                <Route path="/dashboard/account" render={props => <MyAccount {...props}/>}/>
                <Route path="/dashboard/settings" render={props => <Settings {...props}/>}/>
            </div>
        </div>
    )
}

export default Dashboard