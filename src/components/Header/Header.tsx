import { Button } from "../UI/Button/Button"
import styles from "./Header.module.css"
import { headerItems } from "./headerItems"
import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "./res/logo.png"

export const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <>
            <div className={styles.container__wrapper}>
                <div className={styles.container}>
                    <Link to="/"><img src={logo} height={33} className={styles.logo} /></Link>
                    {/* desktop menu */}
                    <nav className={styles.nav}>
                        <ul>
                            {headerItems.map(({ name, link, subElems }) => {
                                return (
                                    <div className={styles.menuElement} key={name}>
                                        <li className={styles.navItem}>
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
                        {headerItems.map(({ name, link, subElems }) => (
                            <div className={styles.menuElement__mobile} key={name}>
                                <li key={name} className={styles.navItem__mobile}>
                                    <Link to={link}>{name}</Link>
                                    {subElems && (
                                        <ul className={styles.subMenu__mobile}>
                                            {subElems?.map(({ name, link }) => <li className={styles.menuSubItems__mobile} key={name}><Link to={link}>{name}</Link></li>)}
                                        </ul>
                                    )}
                                </li>
                            </div>
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