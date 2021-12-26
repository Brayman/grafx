import { useEffect, useState } from "react";
import { FaTelegram } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetch_logout, fetch_get_team, fetch_get_users, fetch_save_team } from "../redux/actions";
import TeamPanel from "./TeamPanel";
import '../css/profile.css';

function Profile() {
    const dispatch = useDispatch();
    const {user, users, team} = useSelector((state) => state)
    useEffect(() => {
        dispatch(fetch_get_team(user.login))
        dispatch(fetch_get_users())
    },[])
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
                />
            </section>
        )
    } else {
        return <div>Loading...</div>
    }
}
export default Profile;