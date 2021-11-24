// const URL =  'http://localhost:5000';
const URL =  'https://graforwork.herokuapp.com';

export const login = (payload) => ({
    type: 'LOGIN',
    payload
  }); 

  export const tokenLogin = () => async dispatch => {
    
        const res = await fetch(`${URL}/api/refresh`,{
        
        credentials: 'include'
        })
        const ans = await res.json()
        localStorage.setItem('tok', ans.accessToken) 
        dispatch(login(ans));
       
}
export const loginRes =  (form) => async dispatch => {
        
  const res = await fetch(`${URL}/api/login`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(form)
      })
      const ans = await res.json()
      localStorage.setItem('tok',ans.accessToken )
      dispatch(login(ans));
}