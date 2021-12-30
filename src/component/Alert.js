import "../css/alert.css";
import { MdDone, MdOutlineWarning, MdClose } from "react-icons/md";
import { close_alert } from "../redux/actions";
import { useDispatch } from "react-redux";

function Alert({alert}) {
    const dispatch = useDispatch()
    switch (alert.type) {
        case 'error':
            return (
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
        case 'done':
            return (
                <section className={alert.type}>
                    <MdDone className={alert.type}/>
                    <p className={alert.type}>
                        {alert.message}
                    </p>
                    <button className={alert.type} onClick={() => dispatch(close_alert())}>
                        <MdClose/>
                    </button>
                </section>
            )
        default:
            break;
    }
    
}
export default Alert;