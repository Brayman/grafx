import { URL } from './index';
export const get_team = (payload) => ({
    type: 'GET_TEAM',
    payload
});
export const save_team = (payload) => ({
    type: 'SET_TEAM',
    payload
});
export const fail_get_team = (payload) => ({
    type: 'FAIL_GET_TEAM',
    payload
});
export const fetch_save_team = payload => async dispatch => {  
    const res = await fetch(`${URL}/api/team`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        const ans = await res.json()
        dispatch(save_team(ans));
}
export const fetch_update_team = (payload, login) => async dispatch => {  
    const res = await fetch(`${URL}/api/team/${login}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        const ans = await res.json()
        dispatch(save_team(ans));
}
export const fetch_get_team = payload => async dispatch => {  
    const res = await fetch(`${URL}/api/team/${payload}`)
    const ans = await res.json();

    if (res.status >= 400) {
        dispatch(fail_get_team(ans));
    } else {
        
        dispatch(get_team(ans));
    } 
    
}