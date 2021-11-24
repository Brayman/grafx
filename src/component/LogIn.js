import { useState } from "react";
import { MdPerson, MdLockOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { loginRes } from "../redux/actions"
function Login(params) {
    const [form,setForm] = useState({})
    const dispatch = useDispatch()
    
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
            <button onClick={()=>dispatch(loginRes(form))}>
                Войти
            </button>
        </div>
    )
}
export default Login;