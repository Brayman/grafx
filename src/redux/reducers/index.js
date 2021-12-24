import { combineReducers } from "redux";
import user from "./user";
import schedules from "./schedule";
import alert from "./alert";
import team from "./team";
import users from "./users";

export default combineReducers({
    user,
    users,
    alert,
    schedules,
    team
});
