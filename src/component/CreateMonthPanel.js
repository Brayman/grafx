import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

function Panel({ setDate, getPrev}) {
    const date = new Date();
    const [selectDate, setSelectDate] = useState({
        month: date.getMonth(),
        year: date.getFullYear()
    });
    return (
        <section>
            <div className='create-options-panel'>
                <select className='month-input' value={selectDate.month} onChange={(e)=>setSelectDate({...selectDate,month: e.target.value})}>
                        {month.map((item, i, arr) => {
                            
                            return <option key={i} value={i} >{item}</option>
                        })}
                    </select>
                    <input type='number' className='year-input' placeholder='Год' defaultValue={selectDate.year} onChange={(e)=>setSelectDate({...selectDate,year: e.target.value})}/>
                    <button onClick={() => {
                        setDate(new Date(selectDate.year, selectDate.month, 1).getTime())
                        getPrev(new Date(selectDate.year, selectDate.month-1, 1))
                    }}>Создать</button>
                </div>
                <div className='more-panel'>
                    <BiChevronDown/> дополнительные параметры    
                </div>
        </section>
    )
    
}
export default Panel;