import { useState } from "react";
import Month from "../monthCreathor";


function Editor({team , date}) {
    const data = new Date(date);
    const [month,setMonth] = useState(new Month(team, data.getTime() ))
    console.log(team , date);
    
    return (
        <table>
            <tbody>
                {team.map((item, it) => {
              return (
                  <tr>
                        {month[item].days.map((ite, i) => <td onClick={()=> {
                            console.log(month)
                            const line =month[team[it]]
                            line.days[i]= {...line.days[i], hours: 1}
                            console.log();
                            setMonth({...month, [team[it]]: {...line, days: line.days}  })
                        }}>{ite.hours}</td>)}
                  </tr>
              )
              
              
          }
          )}
        </tbody>
    </table>
    )
}

export default Editor;