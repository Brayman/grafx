import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import { LogIn, SignUp } from "../Components";

const { useState } = require("react");

function LoginWindow(params) {
    let history = useHistory();
    const lok = useLocation();
    console.log(lok);
    const [page,setPage] = useState(lok.pathname)
    return (
        <div className='window'>
            <header className='tabs'>
                <div className={`${lok.pathname === '/login' ? 'active' : ''} tab`} onClick={() => history.push('./login')}>Вход</div>
                <div className={`${lok.pathname === '/signup' ? 'active' : ''} tab`} onClick={() => history.push('./signup')}>Регистрация</div>
            </header>
            {lok.pathname === '/login' ? <LogIn/> : <SignUp/>}
        </div>
    )
    
}

export default LoginWindow;