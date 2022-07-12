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
                            <Button height="27" width="122">Подписаться</Button>
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
                                <a href="https://yandex.ru/maps/org/universitet_itmo/1017559385/?indoorLevel=1&ll=30.338353%2C59.927288&utm_source=main_stripe_big&z=17.07" target="_blank"><FaMapMarkerAlt /><p>Санкт-Петербург, Ломоносова, д. 9, 191002</p></a>
                            </div>
                            <div className={styles.mail}>
                                <a href="mailto:skorb@itmo.ru"><FaEnvelope /><p>skorb@itmo.ru</p></a>
                            </div>
                            <div className={styles.phone}>
                                <a href="tel:+79992103977"><FaPhone /><p>+7-999-210-39-77</p></a>
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