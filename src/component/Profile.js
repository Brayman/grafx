import { useEffect, useState } from "react";
import { FaTelegram } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetch_logout, fetch_get_team, fetch_get_users } from "../redux/actions"

function Profile() {
    const [workers, setWorkers] = useState([])
    useEffect(() => {
        dispatch(fetch_get_team("Brayman"))
        dispatch(fetch_get_users())
    },[])
    const dispatch = useDispatch();
    const {user, users, team} = useSelector((state) => state)

    function filter(el, i ,arr) {
        console.log(this);
        if (el.login == this.target) {
            setWorkers([...workers,el])
        } 
    }

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
                <div>
                    {team.map((item, i, arr) => {return <div>{item}</div>})}
                </div>
                <select onChange={(e) => users.find(filter, {target: e.target.value})}>
                    {users.map((item, i, arr) => {
                        return <option>{item.first_name||item.login}</option>
                    })}
                </select>
            </section>
        )
    } else {
        return <div>Loading...</div>
    }
}
export default Profile;