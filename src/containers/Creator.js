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
    
    return (
        <div>

            <section>
                <div className='create-options-panel'>
                    <select className='month-input' onChange={(e)=>console.log(e.target)}>
                        {month.map((item, i, arr) => {
                            if (selectDate == i) {
                                return <option selected>{item}</option>
                            }
                            return <option key={i} >{item}</option>
                        })}
                    </select>
                    <input type='number' className='year-input' placeholder='Год'/>
                    <button>Создать</button>
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
                <button className={'work-day' === selectDay ? 'active work-day' : 'work-day'} onClick={() => setSelectDay('work-day')}>
                    День</button>
                <button className='night'>Ночь</button>
                <button className='holiday'>Отпуск</button>
            </div>
            <section>
                <Editor team={worke} date={data}/>
            </section>
            
        </div>
    )
}
export default Creator;