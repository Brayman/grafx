import { useState } from "react";
import { MdPerson, MdLockOutline, MdOutlinePersonPin } from "react-icons/md";
import "../css/sign.css";

function SignUp() {
    const [form,setForm] = useState({})
    async function regRes(form) {
        
        const res = await fetch(`http://localhost:5000/api/registration`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(form)
            })
            const ans = await res.json()
            localStorage.setItem('tok',ans.accessToken )
            
            
    }
    function inputs(e) {
        switch (e.name) {
            case 'login':
                setForm({...form, login: e.value})
                break;
            case 'password':
                setForm({...form, password: e.value})
                break;
            case 'first-name':
                setForm({...form, first_name: e.value})
                break;
            case 'second-name':
                setForm({...form, second_name: e.value})
                break;
            default:
                break;
        }
    }
    return (
        <div className='sign-page'>
            <label>
                <MdPerson/>
                <input  type='text'
                        name='login'
                        placeholder='Введите логин'
                        onChange={e => inputs(e.target)}
                />
            </label>
            <label>
                <MdOutlinePersonPin/>
                <input  type='text'
                        name='first-name'
                        placeholder='Имя'
                        onChange={e => inputs(e.target)}
                />
            </label>
            <label>
                <MdOutlinePersonPin/>
                <input  type='text'
                        name='second-name'
                        onChange={e => inputs(e.target)}
                        placeholder='Фамилия'
                />
            </label>
            <label>
                <MdLockOutline/>
                <input  type='password'
                        name='password'
                        placeholder='Введите пароль'
                        onChange={e => inputs(e.target)}
                />
            </label>
            <label>
                <MdLockOutline/>
                <input  type='password'
                        name='verify'
                        placeholder='Повторите пароль'
                        onChange={e => inputs(e.target)}
                />
            </label>
            <button onClick={()=>regRes(form)}>
                Регистрация
            </button>
        </div>
    )
}

export default SignUp;