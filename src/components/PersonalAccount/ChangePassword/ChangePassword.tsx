import { Link } from "react-router-dom"
import { Button } from "../../UI/Button/Button"
import { Input } from "../../UI/Input/Input"
import styles from "./ChangePassword.module.css"

export const ChangePassword = () => {
    return (
        <div className={styles.container}>
            <div className={styles.auth}>
                <div className={styles.top}>
                    <p className={styles.title}>Новый пароль</p>
                    <div className={styles.inputs}>
                        <Input placeholder="Новый пароль" width={300} height={38} style={{ fontSize: "18px" }} />
                        <Input placeholder="Повторите пароль" width={300} height={38} style={{ fontSize: "18px" }} password={true} />
                    </div>
                    <Button width="171" height="33px" style={{ margin: "50px auto" }}>Войти</Button>
                </div>
                <div className={styles.footer}>
                    <div className={styles.langToggler}>
                        <span className={styles.ru}>RU</span>
                        <span>/</span>
                        <span className={styles.en}>EN</span>
                    </div>
                    <Link className={styles.register} to="/">Войти</Link>
                </div>
            </div>
        </div>
    )
}