import React from 'react';
import '../App.css';
import '../css/basic.css';
import Creator from './Creator';

import Graf from '../Graf';
import pack from '../../package.json'
import { Header, Profile } from '../component';
import LoginWindow from './LoginWindow';
import Main from './Main';
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { useSelector } from 'react-redux';
  

function App({params}) {
    const {user, schedules} = useSelector((state) => state);
    return (
        <div className='app'>
            <Header/>
            <Switch>
                
                <Route exact path='/'>
                    <Main/>
                </Route>
                <Route exact path='/profile'>
                    <Profile user={user}/>
                </Route>
                <Route exact path='/creator/:id'>
                    {user.role === 'admin' ? <Creator schedule={schedules}/> : <Redirect to='/'/>}
                </Route>
                <Route exact path='/creator'>
                    {user.role === 'admin' ? <Creator/> : <Redirect to='/'/>}
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
