import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import { LogIn, SignUp } from "../component";

function LoginWindow() {
    let history = useHistory();
    const lok = useLocation();
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