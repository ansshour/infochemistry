import { Button } from "../UI/Button/Button"
import styles from "./Header.module.css"
import { headerItems } from "./headerItems"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <>
            <div className={styles.container__wrapper}>
                <div className={styles.container}>
                    <Link to="/"><img src="./images/header/logo.png" height={33} className={styles.logo} /></Link>
                    {/* desktop menu */}
                    <nav className={styles.nav}>
                        <ul>
                            {headerItems.map(({ name, link, subElems, id }) => {
                                return (
                                    <div className={styles.menuElement}>
                                        <li key={name} className={styles.navItem}>
                                            <Link to={link}>{name}</Link>
                                            {subElems && (
                                                <ul className={styles.subMenu}>
                                                    {subElems?.map(({ name, link }) => <li key={name}><Link to={link}>{name}</Link></li>)}
                                                </ul>
                                            )}
                                        </li>
                                    </div>
                                )
                            })}
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
                </div >
            </div >
            <div className={menuOpen ? [styles.burgerMenu, styles.open].join(" ") : styles.burgerMenu}>
                <nav className={styles.navMobile}>
                    <ul>
                        {headerItems.map(({ name, link }) => (
                            <li key={name}><Link to={link}>{name}</Link></li>
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