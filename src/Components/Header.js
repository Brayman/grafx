import  '../css/header-footer.css';
import { useHistory } from "react-router-dom";

function Header(params) {
    let history = useHistory();
    async function req(params, url) {

        if (params == 'post') {
            const res = await fetch(`http://localhost:5000/api/${url}`, {
            method: 'POST',
           
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({login: 'Brayman', password: '8292913'})
            })
            const ans = await res.json()
            localStorage.setItem('tok',ans.accessToken )
            console.log(ans);
        } else {
            console.log(localStorage);
            const res = await fetch('http://localhost:5000/api/user',{
                headers: {
                    "Authorization": `Baarer ${localStorage.tok}`,
                }
            })
            const ans = await res.json()
            console.log(ans);
        }
        
    }
    const date = new Date()
    return (
        <header>
            {date.toLocaleDateString('ru-ru', { day: 'numeric', month: 'long', year: 'numeric'})}
            <button onClick={()=>req('post','registration')}>Зарегистрироваться</button>
            <button onClick={()=>history.push('/login')}>Войти</button>
            <button onClick={()=>req()}>GET</button>
        </header>
    )
}
export default Header;