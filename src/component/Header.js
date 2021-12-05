import  '../css/header-footer.css';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { login } from "../redux/actions";


function Header() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()
    let history = useHistory();
    async function req() {
            try {
                const res = await fetch('http://localhost:5000/api/refresh',{
                
                credentials: 'include'
                })
                if (res.status == 400) {
                    dispatch({type: 'LOGIN_ERROR'});
                } else {
                    const ans = await res.json()
                    localStorage.setItem('tok', ans.accessToken) 
                    dispatch(login(ans));
                }
            } catch (error) {
                
                console.error(error);
            }      
    }
    const date = new Date()
    useEffect(() => {
        req();        
    },[]);
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