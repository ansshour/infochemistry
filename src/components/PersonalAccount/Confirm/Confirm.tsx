import { Link } from "react-router-dom"
import { Button } from "../../UI/Button/Button"
import { Input } from "../../UI/Input/Input"
import styles from "./Confirm.module.css"

export const Confirm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.auth}>
                <div className={styles.top}>
                    <p className={styles.title}>Подтверждение</p>
                    <p className={styles.info}>На почту придет письмо с ссылкой
                        для подтверждения аккаунта</p>
                    <Link to="/"><Button width="171" height="33px" style={{ margin: "50px auto" }}>На главную</Button></Link>
                </div>
                <div className={styles.footer}>
                    <div className={styles.langToggler}>
                        <span className={styles.ru}>RU</span>
                        <span>/</span>
                        <span className={styles.en}>EN</span>
                    </div>
                    <Link className={styles.register} to="/auth">Войти</Link>
                </div>
            </div>
        </div>
    )
}