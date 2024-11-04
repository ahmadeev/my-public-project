import './Navbar.module.css'
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar() {

    return (
        <>
            <nav className={styles.navbar}> {/* можно оставить без className, но в css правило для блока nav */}
                <NavLink className={({isActive}) => isActive ? styles.active : ""} to="/">home</NavLink>
                <NavLink className={({isActive}) => isActive ? styles.active : ""} to="/ny">новый год</NavLink>
                <NavLink className={({isActive}) => isActive ? styles.active : ""} to="/vbd">др вики</NavLink>
            </nav>
        </>
    )
}

export default Navbar
