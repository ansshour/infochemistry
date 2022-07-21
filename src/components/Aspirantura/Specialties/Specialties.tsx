import styles from "./Specialties.module.css"

export const Specialties = () => {

    const classnames = [styles.first, styles.second, styles.third, styles.fouth]
    const data = [
        { title: "Неорганическая химия", link: "#", number: "1.4.1" },
        { title: "Физическая химия", link: "#", number: "1.4.4" },
        { title: "Хемоинформатика", link: "#", number: "1.4.5" },
        { title: " Высокомолекулярные соединения", link: "#", number: "1.4.7" },
    ]

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Специальности</h2>
            <div className={styles.table__wrapper}>
                <div className={styles.table}>
                    {data.map(({ title, link, number }, i) => {
                        return (
                            <div className={[styles.area, classnames[i]].join(" ")}>
                                <p className={styles.program__title}>{title}</p>
                                <a className={styles.program__link} href={link}>Учебный план</a>
                                <p className={styles.programNumber}>{number}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}