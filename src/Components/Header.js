import  '../css/header-footer.css';
import { useHistory } from "react-router-dom";

function Header(params) {
    let history = useHistory();
   
    const date = new Date()
    return (
        <header>
            <div onClick={()=>history.push('/')}>
                {date.toLocaleDateString('ru-ru', { day: 'numeric', month: 'long', year: 'numeric'})}
            </div>
            
            <button onClick={()=>history.push('/login')}>Войти</button>
        </header>
    )
}
export default Header;