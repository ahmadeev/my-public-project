import Navbar from "../components/Navbar.jsx";
import styles from "../styles/Home.module.css";

function Home() {

    return (
        <>
            <div className={styles.wrapper}>
                <Navbar />
                <h1>
                    ДОМАШКА
                </h1>
            </div>

        </>
    )
}

export default Home
