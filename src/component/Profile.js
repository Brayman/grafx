import { FaTelegram } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetch_logout } from "../redux/actions/user"

function Profile({user}) {
    const dispatch = useDispatch();
    if (user.login) {
        return (
            <section>
                <h2>
                    Логин: {user.login}
                </h2>
                <button onClick={() => dispatch(fetch_logout())}>Выход</button>
                <p>
                    Имя: {user.first_name} {user.second_name}
                </p>
                <p>
                    <FaTelegram color='#0a96d5'/> {user.telegram.username}
                </p>
                
            </section>
        )
    } else {
        return <div>Loading...</div>
    }
        

}
export default Profile;