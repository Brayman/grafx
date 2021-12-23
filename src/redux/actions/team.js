import { URL } from './index';
export const fetch_save_team = payload => async dispatch => {  
    const res = await fetch(`${URL}/api/team`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        const ans = await res.json()
        console.log(ans);
}
export const fetch_get_team = payload => async dispatch => {  
    const res = await fetch(`${URL}/api/team/${payload}`)
        const ans = await res.json()
        console.log(ans);
}