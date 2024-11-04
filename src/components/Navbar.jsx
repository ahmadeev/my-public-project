import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar() {

    return (
        <>
            <nav className={styles.navbar}> {/* можно оставить без className, но в css правило для блока nav */}
                <NavLink to="/">home</NavLink>
                <NavLink to="/ny">новый год</NavLink>
                <NavLink to="/vbd">др вики</NavLink>
            </nav>
        </>
    )
}

export default Navbar
