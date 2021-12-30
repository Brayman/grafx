import { URL } from './index';
export const set_schedule = (payload) => ({
    type: 'SET_SCHEDULE',
    payload
})
export const get_prev_schedule = (payload) => ({
    type: 'GET_PREVIOUS_SCHEDULE',
    payload
})
export const get_shedules = payload => ({
    type: 'GET_SCHEDULES',
    payload
})
export const fail_get_shedules = payload => ({
    type: 'FAIL_GET_SCHEDULES',
    payload
  })
export const get_shedule = payload => ({
    type: 'GET_SCHEDULE',
    payload
})
export const fetch_shedules = payload => async dispatch => {
        
    const res = await fetch(`${URL}/api/schedules`)
    
    if (res.status >= 400) {
        dispatch(fail_get_shedules);
    } else {
        const ans = await res.json();
        dispatch(get_shedules(ans));
    }     
}
export const fetch_save_shedules = payload => async dispatch => {  
    const res = await fetch(`${URL}/api/schedule`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
}
export const fetch_update_shedules = payload => async dispatch => {  
    const res = await fetch(`${URL}/api/schedule/${payload._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(payload)
    })
    const ans = await res.json();
    if (res.status >= 400) {
        dispatch(fail_get_shedules);
    } else {
        dispatch(get_shedules(ans));
    } 
}
export const fetch_previous_shedule = payload => async dispatch => {  
    const res = await fetch(`${URL}/api/schedule/${payload}`)
    const ans = await res.json();
    dispatch(get_prev_schedule(ans));
}