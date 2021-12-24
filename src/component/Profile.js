import { useEffect, useState } from "react";
import { FaTelegram } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
    fetch_logout,
    fetch_get_team
} from "../redux/actions"

function Profile({user}) {
    const [team, setTeam] = useState();
    const dispatch = useDispatch();
    useEffect(() => setTeam(dispatch(fetch_get_team("Brayman"))),[])
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
                {/* <select onChange={(e) => { console.log(e.target.value); setWorkers([...workers,e.target.value])}}>
                    {worke.map((item, i, arr) => {
                        return <option>{item}</option>
                    })}
                </select> 
                <div>
                    { team[0] ? team.map((item, i, arr) => {return <div>{item}</div>}) : null}
                </div>*/}
                <button>Выбрать</button>
            </div>
            </section>
        )
    } else {
        return <div>Loading...</div>
    }
        

}
export default Profile;