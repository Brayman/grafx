import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import '../css/creator.css';
import Graf from "../Graf";

import Editor from "../component/GrafEditor";
const worke = ['user1','user2','user3','user4','user5','user6']
function Creator(params) {
    const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    const [workers, setWorkers] = useState([])
    const date = new Date();
    const [selectDate, setSelectDate] = useState({
        month: date.getMonth(),
        year: date.getFullYear()
    })
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


    return (
        <div>

            <section>
                <div className='create-options-panel'>
                    <select className='month-input' value={selectDate.month} onChange={(e)=>setSelectDate({...selectDate,month: e.target.value})}>
                        {month.map((item, i, arr) => {
                            
                            return <option key={i} value={i} >{item}</option>
                        })}
                    </select>
                    <input type='number' className='year-input' placeholder='Год' defaultValue={selectDate.year} onChange={(e)=>setSelectDate({...selectDate,year: e.target.value})}/>
                    <button onClick={() => createMonth(new Date(selectDate.year, selectDate.month, 1).getTime())} >Создать</button>
                </div>
                <div className='more-panel'>
                    <BiChevronDown/> дополнительные параметры    
                </div>
            </section>
            {/* <div>
                <input type='month'/>
                <select onChange={(e) => { console.log(e.target.value); setWorkers([...workers,e.target.value])}}>
                    {worke.map((item, i, arr) => {
                        return <option>{item}</option>
                    })}
                </select>
                <div>
                    {workers.map((item, i, arr) => {return <div>{item}</div>})}
                </div>
                <button>Выбрать</button>
            </div> */}
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
            {
                newMonth ? <section  className='graf'>
                <Editor team={worke} date={newMonth} dayClick={() => dayClick(selectDay)}/>
            </section> : null
            }
            
            
        </div>
    )
}
export default Creator;