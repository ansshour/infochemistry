import styles from "./Disciplines.module.css"

export const Disciplines = () => {

    const areas = ["биотехнологии", "химической технологии", "материаловедения", "информатики", "робототехники", "математики"]

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>Основные изучаемые дисциплины</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.textInfo}>
                    <ul className={styles.list}><b>При обучении студенты</b> получают передовые знания в области:
                        {areas.map((area, i) => <li>{area}</li>)}
                    </ul>
                </div>
                <div className={styles.table}>
                    <div className={[styles.area, styles.first].join(" ")}></div>
                    <div className={[styles.area, styles.second].join(" ")}></div>
                    <div className={[styles.area, styles.third].join(" ")}></div>
                    <div className={[styles.area, styles.fouth].join(" ")}></div>
                    <div className={[styles.area, styles.fivth].join(" ")}></div>
                </div>
            </div>
        </>
    )
}