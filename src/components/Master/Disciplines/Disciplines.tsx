import { Accordion } from "../../UI/Accordion/Accordion";
import styles from "./Disciplines.module.css"

export const Disciplines = () => {

    const areas = ["биотехнологии", "химической технологии", "материаловедения", "информатики", "робототехники", "математики"]
    const data = [
        { title: "Общеуниверситетские дисциплины", content: ["* Креативные технологии", "* Создание технологического бизнеса", "* Элективная дисциплина Soft Skills"] },
        { title: "Основные модульные дисциплины", content: ["* Обработка и анализ данных", "* Прикладной искусственный интеллект", { name: "Инфохимия", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt, quasi doloribus natus harum, dignissimos ratione, ipsum temporibus quidem veritatis non quod numquam sapiente laboriosam vero. Ullam laboriosam beatae debitis." }] },
        { title: "Специальные дисциплины по выбору", content: [{ name: "Курс углубленной биохимии", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt, quasi doloribus natus harum, dignissimos ratione, ipsum temporibus quidem veritatis non quod numquam sapiente laboriosam vero. Ullam laboriosam beatae debitis." }, { name: "От логических операций к ионотронным устройствам", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt, quasi doloribus natus harum, dignissimos ratione, ipsum temporibus quidem veritatis non quod numquam sapiente laboriosam vero. Ullam laboriosam beatae debitis." }] },
        { title: "Научный магистерский семинар​" },
        { title: "Английский язык в профессиональной сфере" },
    ]

    const classnames = [styles.first, styles.second, styles.third, styles.fouth, styles.fivth];

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
                    {data.map((data: any, i: number) => {
                        return (
                            <div className={[styles.area, classnames[i]].join(" ")}>
                                <p className={styles.tableTitle}>{data.title}</p>
                                <ul className={styles.tableList}>
                                    {data.content && (
                                        data.content.map((content: any) => {
                                            if (typeof content === "string") {
                                                return (<li className={styles.listItem}>{content}</li>)
                                            } else {
                                                return (<li className={styles.listItem}><Accordion name={content.name} open={content.text} /></li>)
                                            }
                                        })
                                    )}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}