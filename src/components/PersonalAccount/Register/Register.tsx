import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../../UI/Button/Button"
import { Input } from "../../UI/Input/Input"
import styles from "./Register.module.css"

export const Register = () => {

    const [fields, setFields] = useState({ surname: "", name: "", midName: "", group: "", email: "", password: "" })

    const changeFields = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFields({ ...fields, [e.target.name]: e.target.value })
    }

    return (
        <div className={styles.container}>
            <div className={styles.auth}>
                <div className={styles.top}>
                    <p className={styles.title}>Регистрация</p>
                    <div className={styles.inputs}>
                        <div>
                            <p className={styles.lable}>О себе</p>
                            <div className={styles.group}>
                                <Input placeholder="Фамилия" height={38} style={{ fontSize: "18px" }} name="surname" value={fields.surname} onChange={changeFields} />
                                <Input placeholder="Имя" height={38} style={{ fontSize: "18px" }} name="name" value={fields.name} onChange={changeFields} />
                                <Input placeholder="Отчество" height={38} style={{ fontSize: "18px" }} name="midname" value={fields.midName} onChange={changeFields} />
                                <Input placeholder="Учебная группа" height={38} style={{ fontSize: "18px" }} name="group" value={fields.group} onChange={changeFields} />
                            </div>
                        </div>
                        <div>
                            <p className={styles.lable}>Данные для входа</p>
                            <div className={styles.group}>
                                <Input placeholder="e-mail" height={38} style={{ fontSize: "18px" }} name="email" value={fields.email} onChange={changeFields} />
                                <Input placeholder="Пароль" height={38} password={true} style={{ fontSize: "18px" }} name="password" value={fields.password} onChange={changeFields} />
                            </div>
                        </div>
                    </div>
                    <Button height="33px" style={{ margin: "50px auto", padding: "0 20px" }}>Зарегистрироваться</Button>
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