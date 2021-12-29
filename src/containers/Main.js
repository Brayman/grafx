import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_shedules } from "../redux/actions";
import { Schedule, Alert } from "../component"

function Main() {
    const dispatch = useDispatch();
    const schedules = useSelector((store) => store.schedules);
    useEffect(() =>  dispatch(fetch_shedules()),[schedules.length, dispatch])
    
    const alert = useSelector((store) => store.alert);
    return (
        <div>
            {alert.type ? <Alert alert={alert}/> : null}
            {schedules.length >= 1 ? schedules.map((item, i)=> <Schedule key={i} schedule={item}/>) : null}
        </div>
    )
}
export default Main;