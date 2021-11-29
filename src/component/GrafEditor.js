import { useState } from "react";
import Month from "../monthCreathor";
import '../App.css';


function Editor({team , date, dayClick}) {
    const data = new Date(date);
    const [month,setMonth] = useState(new Month(team, data.getTime() ));
    const drawday = (element, i) => {
        const day = new Date(data.getFullYear(),data.getMonth(),i+1).getDay()
        return <td key={`day${i}`} className={`${ 6 === day || 0 === day ? 'weekend' : ''}`}>{i+1}</td>
    }
    return (
        <table>
            <tbody>
                <tr>
                    <td>{data.toLocaleDateString('ru-ru', {month: 'long'})}</td>
                    {month[team[1]].days.map(drawday)}
                </tr>
                {team.map((username, row) => {
                    return (
                        
                        <tr key={row}>
                            <td>{username}</td>
                            {month[username].days.map(( day, i, arr) => <td key={username+i} className={day.type} onClick={()=> {
                                if (!dayClick()) {
                                    return;
                                }
                                arr[i]= dayClick()
                                setMonth({...month, [username]: {days: arr, hours: month[username].days.reduce((acc, day) =>  {
                                    if (!day.hours) {
                                        return acc
                                    }
                                    return acc + day.hours
                                },0)}  })
                                }}
                            onContextMenu={()=> console.log(day)}
                            >{day.hours}</td>)}
                            <td>{month[username].hours}</td>
                        </tr>
                    )
                }
            )}
            </tbody>
        </table>
    )
}

export default Editor;