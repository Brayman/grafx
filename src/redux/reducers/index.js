import { combineReducers } from "redux";
import user from "./user";
import schedules from "./schedule";

export default combineReducers({
    user,
    schedules
});
