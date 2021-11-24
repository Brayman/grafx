import React from 'react';
import '../App.css';
import '../css/basic.css';

import Graf from '../Graf';
import pack from '../../package.json'
import { Header, Profile } from '../components';
import LoginWindow from './LoginWindow';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useSelector } from 'react-redux';
  

function App({params}) {
    const user = useSelector((state) => state.user);
    return (
        <div className='app'>
            <Header/>
            <Switch>
                
                <Route exact path='/'>
                    <Graf/>
                </Route>
                <Route exact path='/profile'>
                    <Profile user={user}/>
                </Route>
                <Route exact path='/login'>
                    <LoginWindow/>
                </Route>
                <Route exact path='/signup'>
                    <LoginWindow/>
                </Route>
            </Switch>
            <footer>
                version: {pack.version}
            </footer>
        </div>
    )
       
}

export default App;
