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
     
}
