import  '../css/header-footer.css';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { tokenLogin } from "../redux/actions";


function Header(params) {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()
    let history = useHistory();
    
    const date = new Date()
    useEffect(() => {
        // dispatch(tokenLogin())
    },[]);
    
    return (
        <header>
            <div onClick={()=>history.push('/')}>
                {date.toLocaleDateString('ru-ru', { day: 'numeric', month: 'long', year: 'numeric'})}
            </div>
            
            <button onClick={()=>history.push('/login')}>Войти</button>
            <button onClick={()=>history.push('/profile')}>{user.login}</button>
        </header>
    )
}
export default Header;