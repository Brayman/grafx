import { URL } from './index';
export const login = (payload) => ({
  type: 'LOGIN',
  payload
});
export const login_fail = (payload) => ({
  type: 'LOGIN_FAIL',
  payload
});
export const logout = () => ({
  type: 'LOGOUT'
});

export const fetch_login = payload => async (dispatch) => {
  const res = await fetch(`${URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(payload)
  })
  if (res.status > 300) {
    dispatch(login_fail(await res.json()));
  } else {
    const ans = await res.json()
    localStorage.setItem('tok',ans.accessToken )
    dispatch(login(ans));
  }    
}
export const fetch_logout = (payload) => async (dispatch) => {
    const res = await fetch(`${URL}/api/logout`,{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(payload)
    });
    localStorage.removeItem('tok');
    console.log(dispatch, payload);
    dispatch(logout(res.status));
     
};
export const fetch_registration = (form) => async dispatch => {
    const res = await fetch(`${URL}/api/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    const ans = await res.json()
    dispatch({
      type: "SIGNUP"
    })
    localStorage.setItem('tok', ans.accessToken);
}
export const fetch_refresh_sesion = (form) => async dispatch => {
  try {
    const res = await fetch(`${URL}/api/refresh`,{
      credentials: 'include'
    })
    if (res.status == 400) {
      dispatch({type: 'LOGIN_ERROR'});
    } else {
      const ans = await res.json()
      localStorage.setItem('tok', ans.accessToken) 
      dispatch(login(ans));
    }
  } catch (error) {
    console.error(error);
  }      
}
