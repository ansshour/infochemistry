import styles from "./More.module.css"

export const More = () => {

    const dangerTextEnter = (text: string) => {
        return { __html: text };
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Еще</h2>
            <div className={styles.info__wrapper}>
                <p className={styles.text} dangerouslySetInnerHTML={dangerTextEnter(`
                <p>Столкнулись с трудностями в заполнении? Что-то пошло не так?</p>
                <br>
                <p>Пиши на сайт аспирантуры <b>aspirantura@itmo.ru</b> (тема письма "Поступление") или на почту <b>aastekolshchikova@itmo.ru.</b>
                Со всем поможем и подскажем!</p>
                <br>
                <p>Следи за новостями на сайте aspirantura.ifmo.ru, а также в группе аспирантов Университета ИТМО и в группе НОЦ Инфохиии Универистета ИТМО.</p>
                `)} />
            </div>
        </div>
    )
}