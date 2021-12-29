import { useEffect, useState } from "react";
import { fetch_previous_shedule } from "../redux/actions"
import '../css/creator.css';

import {Editor, Panel} from "../component";
import { useDispatch, useSelector } from "react-redux";


function Creator({schedule}) {
    const [selectDay, setSelectDay] = useState()
    const [newMonth, createMonth] = useState()
    const dayClick = (activeItem) => {
        switch (activeItem) {
            case 'work-day':
                return {
                    type: 'first-day',
                    hours: 11
                }
            case 'night':
                return {
                    type: 'night',
                    hours: 10
                }
            case 'holiday':
                return {
                    type: 'holiday',
                    hours: null
                }
            case 'empty':
                return {
                    type: 'empty',
                    hours: null
                }
            default:
                break;
        }
    }
    const dispatch = useDispatch()
    useEffect(() => schedule ? createMonth(schedule) : () => null,[])
    const {previous_schedule, team} = useSelector((store) => store);
    return (
        <div>
            <div>
                <button className={'work-day' === selectDay ? 'active work-day' : 'work-day'}
                        onClick={(e) => setSelectDay(e.target.className)}
                >
                    День
                </button>
                <button className={'night' === selectDay ? 'active night' : 'night'}
                        onClick={(e) => setSelectDay(e.target.className)}
                >
                    Ночь
                </button>
                <button className={'empty' === selectDay ? 'active empty' : 'empty'}
                        onClick={(e) => setSelectDay(e.target.className)}
                >
                    Выходной
                </button>
                <button className={'holiday' === selectDay ? 'active holiday' : 'holiday'}
                        onClick={(e) => setSelectDay(e.target.className)}
                >
                    Отпуск
                </button>
            </div>
            <section className="schedule">
                { previous_schedule.team ? <section className="previous">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    {previous_schedule.team[0].days.length-1}
                                </td>
                                <td>
                                    {previous_schedule.team[0].days.length}
                                </td>
                            </tr>
                            {previous_schedule.team.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td className={item.days[item.days.length-2].type}>
                                            {item.days[item.days.length-2].hours}
                                        </td>
                                        <td className={item.days[item.days.length-1].type}>
                                            {item.days[item.days.length-1].hours}
                                        </td>
                                    </tr>
                                )
                            })} 
                            
                        </tbody>
                    </table>
                </section> : null}
                {
                    !newMonth ?  <Panel setDate={(e) => createMonth(e)} getPrev={(e) => dispatch(fetch_previous_shedule(e))}/>: 
                        <section  className='graf'>
                             <Editor team={team} date={newMonth} dayClick={() => dayClick(selectDay)}/>
                        </section>
                }
            </section>
            
            
        </div>
    )
}
export default Creator;