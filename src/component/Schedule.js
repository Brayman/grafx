import { useEffect, useState } from "react";
import { MdCreate } from "react-icons/md";
import { useDispatch } from "react-redux";
import { get_shedule } from "../redux/actions"
import '../css/schedule.css'
import { useHistory } from "react-router-dom";

function Schedule({schedule}) {
    const [open,setOpen] = useState(false);
    const nowDate = new Date();
    const data = new Date(schedule.date);
    const dispatch = useDispatch();
    const history = useHistory()
    useEffect(()=> {
        if(nowDate.getMonth() === data.getMonth()) {
            setOpen(true)
        }
    })
    const drawday = (element, i) => {
        const day = new Date(data.getFullYear(),data.getMonth(),i+1).getDay();
        if (nowDate.getDate() == i+1) {
            return <td key={`day${i}`} className={`today ${ 6 === day || 0 === day ? ' weekend' : ''}`}>{i+1}</td>
        }
        return <td key={`day${i}`} className={`${ 6 === day || 0 === day ? 'weekend' : ''}`}>{i+1}</td>
    }
    return open ? (
        <section  className='graf'>
            <table>
                <tbody>
                    <tr>
                        <td className="button" onClick={()=>setOpen(!open)}>
                            {data.toLocaleDateString('ru-ru', {month: 'long'})}
                        </td>
                        {schedule.team[0].days.map(drawday)}
                        <td className="button" onClick={()=> {history.push(`/creator/${schedule._id}`);dispatch(get_shedule(schedule))}}>
                            <MdCreate/>
                        </td>
                    </tr>
                        {schedule.team.map((user, row) => {
                            return (
                                <tr key={row}>
                                    <td>{user.worker}</td>
                                    {schedule.team[row].days.map(( day, i, arr) => { 
                                    return<td key={i} className={`${nowDate.getDate() == i+1 ? 'today' : ''} ${day.type}`}
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