import { useEffect, useState } from "react";
import '../css/schedule.css'

function Schedule({schedule}) {
    const [open,setOpen] = useState(false);
    const nowDate = new Date();
    const data = new Date(schedule.date);
    useEffect(()=> {
        if(nowDate.getMonth() === data.getMonth()) {
            setOpen(true)
        }
    })
    const drawday = (element, i) => {
        const day = new Date(data.getFullYear(),data.getMonth(),i+1).getDay()
        return <td key={`day${i}`} className={`${ 6 === day || 0 === day ? 'weekend' : ''}`}>{i+1}</td>
    }
    return open ? (
        <section  className='graf'>
            <table>
                <tbody>
                    <tr>
                        <td onClick={()=>setOpen(!open)}>{data.toLocaleDateString('ru-ru', {month: 'long'})}</td>
                        {schedule.team[0].days.map(drawday)}
                    </tr>
                        {schedule.team.map((user, row) => {
                            return (
                                <tr key={row}>
                                    <td>{user.worker}</td>
                                    {schedule.team[row].days.map(( day, i, arr) => { 
                                    return<td key={i} className={day.type}
                                    >{day.hours}</td>})}
                                    <td>{schedule.team[row].hours}</td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
        </section>
    ) : <button onClick={()=>setOpen(!open)}>{data.toLocaleDateString('ru-ru', {month: 'long'})}</button>
}
export default Schedule;