import { Link } from "react-router-dom"
import { Button } from "../../UI/Button/Button"
import { Input } from "../../UI/Input/Input"
import styles from "./Auth.module.css"

export const Auth = () => {
    return (
        <div className={styles.container}>
            <div className={styles.auth}>
                <div className={styles.top}>
                    <p className={styles.title}>Вход</p>
                    <div className={styles.inputs}>
                        <Input placeholder="e-mail" width={300} height={38} style={{ fontSize: "18px" }} />
                        <Input placeholder="Пароль" width={300} height={38} style={{ fontSize: "18px" }} password={true} />
                    </div>
                    <Link className={styles.restorePass} to="/restore">Забыли пароль?</Link>
                    <Button width="171" height="33px" style={{ margin: "50px auto" }}>Войти</Button>
                </div>
                <div className={styles.footer}>
                    <div className={styles.langToggler}>
                        <span className={styles.ru}>RU</span>
                        <span>/</span>
                        <span className={styles.en}>EN</span>
                    </div>
                    <Link className={styles.register} to="/register">Регистрация</Link>
                </div>
            </div>
        </div>
    )
}