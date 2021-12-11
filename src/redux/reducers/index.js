import { combineReducers } from "redux";
import user from "./user";
import schedules from "./schedule";
import alert from "./alert";
import previous_schedule from "./previous_schedule";

export default combineReducers({
    user,
    alert,
    schedules,
    previous_schedule
});
