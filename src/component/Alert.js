import "../css/alert.css";
import { MdOutlineWarning, MdClose } from "react-icons/md";
import { close_alert } from "../redux/actions";
import { useDispatch } from "react-redux";

function Alert({alert}) {
    const dispatch = useDispatch()
    return(
        <section className={alert.type}>
            <MdOutlineWarning className={alert.type}/>
            <p className={alert.type}>
                
                {alert.message}
            </p>
            <button className={alert.type} onClick={() => dispatch(close_alert())}>
                <MdClose/>
            </button>
        </section>
    )
}
export default Alert;