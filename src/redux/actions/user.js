export const login = (payload) => ({
    type: 'LOGIN',
    payload
  });
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