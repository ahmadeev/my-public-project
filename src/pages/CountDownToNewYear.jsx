import Timer from "../components/Timer.jsx";
import Snow from "../components/Snow.jsx";

import styles from "../styles/CountDownToNewYear.module.css";
import Navbar from "../components/Navbar.jsx";

function CountDownToNewYear() {

    return (
        <div className={styles.wrapper}>
            <Navbar/>
            <Snow/>
            <Timer
                title={"Счётчик дней до Нового года"}
                event={"до Нового года осталось:"}
                date_of_event_string={`${new Date().getFullYear() + 1}-01-01T00:00:00.000Z`}/>
        </div>
    )
}

export default CountDownToNewYear
