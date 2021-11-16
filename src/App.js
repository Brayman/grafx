import './App.css';
import Graf from './Graf';
import pack from '../package.json'
import { renderToString } from 'react-dom/server'

function App(params) {
    return <div className='app'>
        <Graf/>
        <footer>
            version: {pack.version}
        </footer>
    </div>
       
}

export default App;
