import { Breadcrumbs } from "../UI/Breadcrumbs/Breadcrumbs"
import { Button } from "../UI/Button/Button"
import { Input } from "../UI/Input/Input"
import styles from "./Contacts.module.css"
import { YMaps, Map, Placemark } from "react-yandex-maps";


const Maps = () => (
    <YMaps>
        <YMaps>
            <Map defaultState={{
                center: [59.927288, 30.338353],
                zoom: 18,
            }} width="100%" height="350px">
                <Placemark geometry={[59.927288, 30.338353]} />
            </Map>
        </YMaps >
    </YMaps >
);

export const Contacts = () => {

    const info = [
        { name: "Главная страница", link: "/" },
        { name: "О центре", link: "" },
        { name: "Контакты", link: "/contacts" },
    ]

    return (
        <>
            <Breadcrumbs info={info} />
            <div className={styles.container}>
                <div className={styles.title__wrapper}>
                    <h1 className={styles.title}>
                        Контакты
                    </h1>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.contact}>
                        <div className={styles.post}>
                            <p className={styles.title}>Директор</p>
                            <p>Скорб Екатерина Владимировна</p>
                        </div>
                        <div className={styles.number}>
                            <p className={styles.title}>Телефон</p>
                            <p>+7 (999) 210-39-77</p>
                        </div>
                        <div className={styles.email}>
                            <p className={styles.title}>Почта</p>
                            <p>skorb@itmo.ru</p>
                        </div>

                    </div>
                    <div className={styles.contact}>
                        <div className={styles.post}>
                            <p className={styles.title}>Проектный менеджер</p>
                            <p>Насонова Юлия Константиновна</p>
                        </div>
                        <div className={styles.number}>
                            <p className={styles.title}>Телефон</p>
                            <p>+7 (981) 955-03-82</p>
                        </div>
                        <div className={styles.email}>
                            <p className={styles.title}>Почта</p>
                            <p>nasonova@itmo.ru</p>
                        </div>
                    </div>
                </div>
                <div className={styles.address}>
                    <p className={styles.title}>Адрес</p>
                    <p>Россия, Санкт-Петербург, Ломоносова, д. 9, 191002 </p>
                </div>
                <div className={styles.map}>
                    <Maps />
                </div>
                <div className={styles.line}>

                </div>
                <div className={styles.contactForm}>
                    <div className={styles.text}>
                        <p className={styles.contactFormTitle}>Напишите нам!</p>
                        <p className={styles.contactFormDesc}>Если у вас остались вопросы по поводу формата, процесса обучения, поступления или по поводу сотрудничества.</p>
                    </div>
                    <div className={[styles.form, styles.first].join(" ")}>
                        <Input placeholder="e-mail" width={285} height={38} fontsize={18} />
                        <Input placeholder="Имя" width={285} height={38} fontsize={18} />
                    </div>
                    <div className={[styles.form, styles.second].join(" ")}>
                        <textarea className={styles.message} placeholder="Сообщение" />
                    </div>
                    <div className={styles.useless}>

                    </div>
                    <p className={styles.personalData}>Нажимая на кнопку “Отправить”, я соглашаюсь на обработку персональных данных.</p>
                    <div className={styles.submit}>
                        <div><Button width="131" height="33">Оправить</Button></div>
                    </div>
                </div>
            </div>
        </>
    )
}