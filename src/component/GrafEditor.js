import { useState } from "react";
import Month from "../monthCreathor";
import '../App.css';


function Editor({team , date, dayClick}) {
    const data = new Date(date);
    const [month,setMonth] = useState(new Month(team, data.getTime() ));
    return (
        <table>
            <tbody>
                {team.map((username, row) => {
                    return (
                        <tr key={row}>
                            <td>{username}</td>
                            {month[username].days.map(( day, i, arr) => <td key={username+i} className={day.type} onClick={()=> {
                                if (!dayClick()) {
                                    return;
                                }
                                arr[i]= dayClick()
                                setMonth({...month, [username]: {days: arr, hours: month[username].days.reduce((acc, day) =>  acc + day.hours,0)}  })
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