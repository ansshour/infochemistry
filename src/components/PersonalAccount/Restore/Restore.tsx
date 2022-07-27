import { Link } from "react-router-dom"
import { Button } from "../../UI/Button/Button"
import { Input } from "../../UI/Input/Input"
import styles from "./Restore.module.css"

export const Restore = () => {
    return (
        <div className={styles.container}>
            <div className={styles.auth}>
                <div className={styles.top}>
                    <p className={styles.title}>Сброс пароля</p>
                    <p className={styles.info}>На почту придет письмо с ссылкой сброса</p>
                    <div className={styles.inputs}>
                        <Input placeholder="e-mail" width={300} height={38} style={{ fontSize: "18px" }} />
                    </div>
                    <Button width="171" height="33px" style={{ margin: "50px auto" }}>Готово</Button>
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