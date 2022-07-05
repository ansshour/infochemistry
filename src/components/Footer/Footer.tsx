import { Button } from "../UI/Button/Button"
import styles from "./Footer.module.css"
import { Input } from "../UI/Input/Input"
import { FaVk, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export const Footer = () => {

    const links = [
        { name: "Абитуриентам", link: "#" },
        { name: "Студентам", link: "#" },
        { name: "Исследования", link: "#" },
        { name: "Новости", link: "#" },
        { name: "О центре", link: "#" },
        { name: "Онлайн-образование", link: "#" },
    ]

    return (
        <>
            <div className={styles.wrapper}>
                <div className={[styles.container, styles.first].join(" ")}>
                    <div className={styles.left}>
                        <img src="./images/logo2.png" alt="logo" className={styles.logo} />
                        <div className={styles.search}>
                            <Input placeholder="e-mail" />
                            <Button height="27" width="162">Подписаться</Button>
                        </div>
                    </div>
                    <div className={styles.middle}>
                        <div className={styles.socialNetworks}>
                            <div className={styles.vk}>
                                <FaVk />
                            </div>
                            <div className={styles.inst}>
                                <FaInstagram />
                            </div>
                        </div>
                        <div className={styles.contacts}>
                            <div className={styles.address}>
                                <FaMapMarkerAlt /><a>Санкт-Петербург, Ломоносова, д. 9, 191002</a>
                            </div>
                            <div className={styles.mail}>
                                <FaEnvelope /><a>skorb@itmo.ru</a>
                            </div>
                            <div className={styles.phone}>
                                <FaPhone /><a>+7-999-210-39-77</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.links}>
                            {links.map(({ name, link }) => (
                                <a href={link} key={name}>{name}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={[styles.container, styles.second].join(" ")}>
                    <p>© 2022 ITMO University. All rights reserved</p>
                    <a href="#">Пользовательское соглашение</a>
                </div>
            </div>
        </>
    )
}