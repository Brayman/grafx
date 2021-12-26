export const URL = 'http://localhost:5000';
// export const URL = 'https://graforwork.herokuapp.com/';

export {
    login,
    fetch_login,
    fetch_logout,
    fetch_registration,
    fetch_refresh_sesion,
    fetch_get_users
} from './user';
export { close_alert } from './alert';
export { 
    fetch_save_team,
    fetch_update_team,
    fetch_get_team
} from './team';
export {
    set_schedule,
    get_shedules,
    fetch_shedules,
    fetch_save_shedules,
    fetch_previous_shedule
} from './schedule';
