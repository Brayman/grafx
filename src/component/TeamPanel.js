import { useEffect, useState } from "react";
import { MdDone, MdClear } from "react-icons/md";
function WorkerInput({add, cancel}) {
    const [name, setName] = useState({first_name: ''})
    return(
        <div className="worker_input">
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <button className="button_ok" onClick={()=>add({first_name: name})}><MdDone/></button>
            <button className="button_cancel" onClick={()=>cancel()}><MdClear/></button>
        </div>
    )
}

function Team({team, users, saveTeam, updateTeam}) {
    const [workers, setWorkers] = useState([])
    const [options, changeOption] = useState({
        edit: false,
        select: true
    })
    function filter(el, i ,arr) {
        console.log(el, this);
        if (el.first_name == this.target) {
            console.log(el);
            setWorkers([...workers,el])
        }
        if (this.target === "Акаунт без профиля") {
            changeOption({...options,select: false})
        }
    }
    function delete_item(name) {
        let arr =[];
        workers.map((item) => {
            if (item.first_name !== name) {
                return arr = [...arr,item];
            }
        })
        setWorkers(arr)
    }
    if (!options.edit) {
        return (
            <section className="team">
                {team.map((item, i, arr) => {return <div className="worker">{item.first_name}</div>})}
                <button className="team_button" onClick={() => {setWorkers(team); changeOption({...options,edit: true})}}>Изменить</button>
            </section>
        )
    } else {
        return (
            <section className="team">
                {workers.map((item, i, arr) => {return <div className="worker">{item.first_name}<MdClear onClick={() => delete_item(item.first_name)}/></div>})}
                {!options.select ? <WorkerInput add={(e) =>{changeOption({...options,select: true}); setWorkers([...workers,e])}} cancel={(e) =>changeOption({...options,select: true})}/> : <select className="team_select" onChange={(e) => users.find(filter, {target: e.target.value})}>
                    <option selected/>
                    {users.map((item, i, arr) => {
                        return <option>{item.first_name||item.login}</option>
                    })}
                    <option>Акаунт без профиля</option>
                </select>}
                { team.lenght !== 0 ? 
                    <button className="team_button" onClick={() => {updateTeam(workers); changeOption({...options,edit: false}) }}>Обновить</button> 
                    : 
                    <button className="team_button" onClick={() => {saveTeam(workers); changeOption({...options,edit: false}) }}>Сохранить</button>
                }
            </section>
        )
    }
}
export default Team;