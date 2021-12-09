export const URL = 'http://localhost:5000';
// export const URL = 'https://graforwork.herokuapp.com/';

export {
    login,
    fetch_login,
    fetch_logout,
    fetch_registration,
    fetch_refresh_sesion
} from './user';
export { close_alert } from './alert';
export {
    set_schedule,
    get_shedules,
    fetch_shedules,
    fetch_save_shedules
} from './schedule';
