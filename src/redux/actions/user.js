export const login = (payload) => ({
  type: 'LOGIN',
  payload
});
export const logout = () => ({
  type: 'LOGOUT'
});

export const fetch_logout = (payload) => async (dispatch) => {
    const res = await fetch('http://localhost:5000/api/logout',{
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
    const res = await fetch(`http://localhost:5000/api/registration`, {
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
