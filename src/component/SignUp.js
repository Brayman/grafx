import { useState } from "react";
import { MdPerson, MdLockOutline } from "react-icons/md";
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
                <input type='text' name='login' onChange={e => inputs(e.target)}/>
            </label>
            <label>
                <input type='text' name='first-name' onChange={e => inputs(e.target)}/>
            </label>
            <label>
                <input type='text' name='second-name' onChange={e => inputs(e.target)}/>
            </label>
            <label>
                <MdLockOutline/>
                <input type='password' name='password' onChange={e => inputs(e.target)}/>
            </label>
            <button onClick={()=>regRes(form)}>
                Регистрация
            </button>
        </div>
    )
}

export default SignUp;