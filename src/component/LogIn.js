import { useState } from "react";
import { MdPerson, MdLockOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "./index";
import { login, login_fail } from "../redux/actions";
function Login(params) {
    const [form,setForm] = useState({})
    const alert = useSelector((state) => state.alert);
    const dispatch = useDispatch()
    async function loginRes(form) {
        
        const res = await fetch(`http://localhost:5000/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              credentials: 'include',
              body: JSON.stringify(form)
            })
            if (res.status > 300) {
                dispatch(login_fail(await res.json()));
            } else {
                const ans = await res.json()
                localStorage.setItem('tok',ans.accessToken )
                dispatch(login(ans));
            }
            
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
    console.log(alert);
    return (
        <div className='login-page'>
            {alert.type ? <Alert alert={alert}/> : null}
            <label>
                <MdPerson/>
                <input type='text' name='login' onChange={e => inputs(e.target)}/>
            </label>
            <label>
                <MdLockOutline/>
                <input type='password' name='password' onChange={e => inputs(e.target)}/>
            </label>
            <button onClick={()=>loginRes(form)}>
                Войти
            </button>
        </div>
    )
}
export default Login;