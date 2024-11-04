import {useEffect, useState} from 'react'
import styles from './Timer.module.css'

function Timer({ title, event, date_of_event_string }) {
    const date_of_event= new Date(date_of_event_string).getTime();

    const [time, setTime] = useState(new Date(date_of_event_string));

    useEffect(() => {
        document.title = title;
    })

    useEffect(() => {
        const interval_id = setInterval(() => {
            setTime(new Date(date_of_event - Date.now()));
        }, 1000)
        return () => clearInterval(interval_id)
    }, [date_of_event]);

    function formatDate(number) {
        if (number <= 9) {
            return '0' + number;
        }
        return number;
    }

    if (time.toISOString() === date_of_event_string) {
        return (
            <>
                <div className={styles.timer}>
                    <h1>Загрузка...</h1>
                </div>
            </>
        )
    }

    return (
        <>
            <div className={styles.timer}>
                <h1>{event.toUpperCase()}</h1>
                {/*<h2>{time.getMonth()} месяцев {time.getDate()} дней {time.getHours()} часов {time.getMinutes()} минут {time.getSeconds()} секунд</h2>*/}
                {/*<h2>{time.getMonth()} m : {time.getDate()} d : {time.getHours()} h : {time.getMinutes()} min : {time.getSeconds()} s</h2>*/}
                <h1>
                    {formatDate(time.getMonth())} : {formatDate(time.getDate())} : {formatDate(time.getHours())} : {formatDate(time.getMinutes())} : {formatDate(time.getSeconds())}
                </h1>
            </div>
        </>
    )
}

export default Timer
