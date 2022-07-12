import styles from "./Admission.module.css"

export const Admission = () => {

    const dangerTextEnter = (text: string) => {
        return { __html: text };
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Поступление</h2>
            <div className={styles.info}>
                <p className={styles.text} dangerouslySetInnerHTML={dangerTextEnter(`
                <p>В этом году ты можешь подать абсолютно ВСЕ документы в Аспирантуру Университета ИТМО ДИСТАНЦИОННО!
                Подать документы и записаться на экзамены можно заранее, даже если на руках еще нет диплома магистра.</p>
                <br>
                <ul>
                    <li><b><span style = "font-size: 26px">1.</span></b> Заходи на сайт абитуриента и заполняй личный кабинет и анкету.</li>
                    <br>
                    <li><b><span style = "font-size: 26px">2.</span></b> Выбирай своё направление в науке и заполняй заявление в личном кабинете.</li>
                    <br>
                    <li><b><span style = "font-size: 26px">3.</span></b> Загружай непосредственно в систему abit.itmo.ru во вкладке "Печать и подача документов", раздел "Электронная подача". </li>
                </ul>
                `)} />
            </div>
        </div>
    )
}