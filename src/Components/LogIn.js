import { useState } from "react";
import { MdPerson, MdLockOutline } from "react-icons/md";
function Login(params) {
    const [form,setForm] = useState({})
    async function loginRes(form) {
        
        const res = await fetch(`http://localhost:5000/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(form)
            })
            const ans = await res.json()
            localStorage.setItem('tok',ans.accessToken )
            console.log(ans);
    }
    function inputs(e) {
        switch (e.name) {
            case 'login':
                setForm({...form, login: e.value})
                break;
            case 'password':
                setForm({...form, password: e.value})
                break;
        
            default:
                break;
        }
    }
    return (
        <div className='login-page'>
            <label>
                <MdPerson/>
                <input type='text' name='login' onChange={e => inputs(e.target)}/>
            </label>
            <label>
                <MdLockOutline/>
                <input type='password' name='password' onChange={e => inputs(e.target)}/>
            </label>
            
                <img/>
            <button onClick={()=>loginRes(form)}>
                Войти
            </button>
        </div>
    )
}
export default Login;