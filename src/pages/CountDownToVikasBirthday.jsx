import Timer from "../components/Timer.jsx";

import styles from "../styles/CountDownToVikasBirthday.module.css";
import Navbar from "../components/Navbar.jsx";

function CountDownToVikasBirthday() {

    return (
        <div className={styles.wrapper}>
            <Navbar/>
            <Timer
                title={"Счётчик дней до дня рождения Вики"}
                event={"до дня рождения Вики осталось:"}
                date_of_event_string={`${new Date().getFullYear() + 1}-12-20T00:00:00.000Z`}/>
        </div>
    )
}

export default CountDownToVikasBirthday
