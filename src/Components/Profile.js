import { FaTelegram } from "react-icons/fa";
function Profile({user}) {
    if (user.login) {
        return (
            <div>
                <p>
                    Логин: {user.login}
                </p>
                <p>
                    Имя: {user.first_name} {user.second_name}
                </p>
                <p>
                    <FaTelegram color='#0a96d5'/> {user.telegram.username}
                </p>
                
            </div>
        )
    } else {
        return <div>Loading...</div>
    }
        

}
export default Profile;