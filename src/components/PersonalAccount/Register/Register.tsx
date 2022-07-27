import { Link } from "react-router-dom"
import { Button } from "../../UI/Button/Button"
import { Input } from "../../UI/Input/Input"
import styles from "./Register.module.css"

export const Register = () => {
    return (
        <div className={styles.container}>
            <div className={styles.auth}>
                <div className={styles.top}>
                    <p className={styles.title}>Регистрация</p>
                    <div className={styles.inputs}>
                        <div>
                            <p className={styles.lable}>О себе</p>
                            <div className={styles.group}>
                                <Input placeholder="Фамилия" height={38} style={{ fontSize: "18px" }} />
                                <Input placeholder="Имя" height={38} style={{ fontSize: "18px" }} />
                                <Input placeholder="Отчество" height={38} style={{ fontSize: "18px" }} />
                                <Input placeholder="Учебная группа" height={38} style={{ fontSize: "18px" }} />
                            </div>
                        </div>
                        <div>
                            <p className={styles.lable}>Данные для входа</p>
                            <div className={styles.group}>
                                <Input placeholder="e-mail" height={38} style={{ fontSize: "18px" }} />
                                <Input placeholder="Пароль" height={38} password={true} style={{ fontSize: "18px" }} />
                            </div>
                        </div>
                    </div>
                    <Button width="171" height="33px" style={{ margin: "50px auto" }}>Зарегистрироваться</Button>
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