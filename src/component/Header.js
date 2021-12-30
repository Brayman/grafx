import  '../css/header-footer.css';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetch_refresh_sesion, fetch_get_team } from "../redux/actions";


function Header() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()
    let history = useHistory();
    const date = new Date()
    useEffect(() => {
        dispatch(fetch_refresh_sesion());  
    },[]);
    useEffect(() => {
        user.login ? dispatch(fetch_get_team(user.login)) : console.log("wait");       
    },[user]);
    return (
        <header>
            <div onClick={()=>history.push('/')}>
                {date.toLocaleDateString('ru-ru', { day: 'numeric', month: 'long', year: 'numeric'})}
            </div>
            {user.role === 'admin' ? <button onClick={()=>history.push('/creator')}>Добавить месяц</button> : null}
            {!user.login ? <button onClick={()=>history.push('/login')}>Войти</button> : <button onClick={()=>history.push('/profile')}>{user.login}</button>}
            
            
        </header>
    )
}
export default Header;