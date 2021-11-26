import { useState } from "react";
import Editor from "../component/GrafEditor";
const worke = ['user1','user2','user3','user4','user5','user6']
function Creator(params) {
    const [workers, setWorkers] = useState([])
    const data = new Date();
    return (
        <div>
            <div>
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
            </div>
            <div>
                <button>День</button>
                <button>Ночь</button>
                <button>Отпуск</button>
            </div>
            <Editor team={worke} date={data}/>
        </div>
    )
}
export default Creator;