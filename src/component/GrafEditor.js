import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetch_save_shedules } from '../redux/actions';
import Month from "../monthCreathor";
import '../App.css';


function Editor({team , date, dayClick}) {
    const data = new Date(date);
    const [month,setMonth] = useState();
    const schedule = useSelector((state) => state.schedules);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setMonth(new Month(team, data.getTime() ))        
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
        <button onClick={() => dispatch(fetch_save_shedules(month))}>Сохранить</button>
        </div>
    )
}

export default Editor;