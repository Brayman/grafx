import React from 'react';
import './App.css';
import '../src/css/basic.css';
import Graf from './Graf';
import pack from '../package.json'
import { Header } from './Components';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App(params) {
    return (
        <div className='app'>
            <Header/>
            <Switch>
                <Route path='/'>
                    <Graf/>
                </Route>
            </Switch>
            <footer>
                version: {pack.version}
            </footer>
        </div>
    )
       
}

export default App;
