import { useState } from "react";
import { MdPerson, MdLockOutline, MdOutlinePersonPin } from "react-icons/md";
import { fetch_registration } from "../redux/actions";
import "../css/sign.css";
import { useDispatch } from "react-redux";

function SignUp() {
    const [form, setForm] = useState({});
    const [verify, setVerify] = useState(true);
    const dispatch = useDispatch();
    function inputs(e) {
        switch (e.name) {
            case 'login':
                setForm({...form, login: e.value})
                break;
            case 'verify':
                setForm({...form, repit_pass: e.value})
                setVerify(form.password === e.value)
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
            <label className={ verify ? '' : 'error'}>
                <MdLockOutline/>
                <input  type='password'
                        name='verify'
                        placeholder='Повторите пароль'
                        onBlur={e => inputs(e.target)}
                />
            </label>
            <button onClick={()=>dispatch(fetch_registration(form))}>
                Регистрация
            </button>
        </div>
    )
}

export default SignUp;