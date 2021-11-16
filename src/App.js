import './App.css';
import Graf from './Graf';
import {name, version, author} from '../package.json'
import { renderToString } from 'react-dom/server'

function App(params) {
    return <div className='app'>
        <Graf/>
        <footer>
           <h4>{name} version: {version}</h4>
           <h6>Created by {author}</h6>
        </footer>
    </div>
       
}

export default App;
