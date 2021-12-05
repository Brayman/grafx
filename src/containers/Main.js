import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_shedules } from "../redux/actions";
import { Schedule } from "../component"

function Main() {
    const dispatch = useDispatch()
    async function res() {
        
        const res = await fetch(`http://localhost:5000/api/schedules`)
        const ans = await res.json();
        dispatch(get_shedules(ans));
            
    }
    useEffect(() =>  res(),[])
    const schedules = useSelector((store) => store.schedules);
    return (
        <div>
            {schedules.length >= 1 ? schedules.map((item, i)=> <Schedule key={i} schedule={item}/>) : null}
        </div>
    )

    //schedules.map((item, i) => <Schedule schedule={item}/>
}
export default Main;