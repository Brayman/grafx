import { combineReducers } from "redux";
import user from "./user";
import schedules from "./schedule";
import alert from "./alert";
import previous_schedule from "./previous_schedule";
import team from "./team";
import users from "./users";

export default combineReducers({
    user,
    users,
    alert,
    schedules,
    previous_schedule,
    team
});
