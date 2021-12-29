import { useEffect } from "react";
import { FaTelegram } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
    fetch_logout,
    fetch_get_users,
    fetch_save_team,
    fetch_update_team
} from "../redux/actions";
import TeamPanel from "./TeamPanel";
import '../css/profile.css';

function Profile() {
    const dispatch = useDispatch();
    const {user, users, team} = useSelector((state) => state)
    useEffect(() => {
        dispatch(fetch_get_users())
    },[dispatch])
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
                <TeamPanel  team={team}
                            users={users}
                            saveTeam={(team) => dispatch(fetch_save_team(team))}
                            updateTeam={(team) => dispatch(fetch_update_team(team, user.login))}
                />
            </section>
        )
    } else {
        return <div>Loading...</div>
    }
}
export default Profile;