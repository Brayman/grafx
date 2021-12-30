import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetch_save_shedules, fetch_update_shedules, fetch_get_team } from '../redux/actions';
import '../App.css';
import { useHistory } from "react-router-dom";


function Editor({ emptyMonth, date, dayClick}) {
    const data = new Date(date);
    const [month,setMonth] = useState();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(emptyMonth);
    useEffect(() => {
        dispatch(fetch_get_team(user.login))  
        setMonth(emptyMonth)   
    },[]);
    const drawday = (element, i) => {
        const day = new Date(data.getFullYear(),data.getMonth(),i+1).getDay()
        return <td key={`day${i}`} className={`${ 6 === day || 0 === day ? 'weekend' : ''}`}>{i+1}</td>
    }
    if (!month) {
        return <h1>loading...</h1>
    }
    return (
        <div>
        <table>
            <tbody>
                <tr>
                    <td>{data.toLocaleDateString('ru-ru', {month: 'long'})}</td>
                    {month.team[0].days.map(drawday)}
                </tr>
                {month.team.map((user, row) => {
                    return (
                        
                        <tr key={row}>
                            <td>{user.worker}</td>
                            {month.team[row].days.map(( day, i, arr) => { 
                            return<td key={i} className={day.type} onClick={()=> {
                                if (!dayClick()) {
                                    return;
                                }
                                arr[i]= dayClick();
                                user.days[i] = dayClick();
                                user.hours = user.days.reduce((acc, day) =>  {
                                    if (!day.hours) {
                                        return acc
                                    }
                                    return acc + day.hours
                                    },0)
                                setMonth({...month, team: month.team})
                                }}
                            >{day.hours}</td>})}
                            <td>{month.team[row].hours}</td>
                        </tr>
                    )
                }
            )}
            </tbody>
        </table>
        {
            !month._id ? <button onClick={() => dispatch(fetch_save_shedules(month))}>Сохранить</button> :
            <button onClick={() => {
                    dispatch(fetch_update_shedules(month))
                    history.push("/")
                }
            }>Сохранить изменения</button>
        }
        </div>
    )
}

export default Editor;