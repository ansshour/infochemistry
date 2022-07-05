import { Button } from "../UI/Button/Button"
import styles from "./Header.module.css"
import { headerItems } from "./headerItems"
import { useState } from "react"

export const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className={styles.container__wrapper}>
                <div className={styles.container}>
                    <img src="./images/header/logo.png" height={33} className={styles.logo} />
                    {/* desktop menu */}
                    <nav className={styles.nav}>
                        <ul>
                            {headerItems.map(({ name, link }) => (
                                <li key={name}><a href={link}>{name}</a></li>
                            ))}
                        </ul>
                    </nav>
                    <div className={styles.buttons}>
                        <div className={styles.langToggler}>
                            <span>RU</span>
                            <span>/</span>
                            <span>EN</span>
                        </div>
                        <Button>Войти</Button>
                    </div>
                    {/* desktop menu */}
                    {/* mobile menu */}
                    <div className={menuOpen ? [styles.burger, styles.open].join(" ") : styles.burger} onClick={() => { setMenuOpen(!menuOpen) }}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {/* mobile menu */}
                </div>
            </div >
            <div className={menuOpen ? [styles.burgerMenu, styles.open].join(" ") : styles.burgerMenu}>
                <nav className={styles.navMobile}>
                    <ul>
                        {headerItems.map(({ name, link }) => (
                            <li key={name}><a href={link}>{name}</a></li>
                        ))}
                    </ul>
                    <div className={[styles.buttons, styles.buttonsMobile].join(" ")}>
                        <div className={styles.langToggler}>
                            <span>RU</span>
                            <span>/</span>
                            <span>EN</span>
                        </div>
                        <Button>Войти</Button>
                    </div>
                </nav>
            </div>
        </>
    )
}