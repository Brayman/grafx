import React from 'react';
import './App.css';
import Graf from './Graf';
import pack from '../package.json'
import { renderToString } from 'react-dom/server'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App(params) {
    return (
        <div className='app'>
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
