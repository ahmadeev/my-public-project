import style from './Navbar.module.css'

function Navbar() {

    return (
        <>
            <nav className={style.navbar}> {/* можно оставить без className, но в css правило для блока nav */}
                <h2>полезные ссылки</h2>
            </nav>
        </>
    )
}

export default Navbar
