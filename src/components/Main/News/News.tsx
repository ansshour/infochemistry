import { cp } from "fs"
import { Button } from "../../UI/Button/Button"
import { NewsCard } from "../../UI/NewsCard/NewsCard"
import styles from "./News.module.css"


const newsInfo = [ // будет приходить с апи
    { image: "./images/newsImage/1.png", text: "Еда для Арктики: как специальные консервы, плавленые сыры и зефир помогут восполнить необходимые человеку витамины и минералы", date: "22 марта, 2022", category: "Другое", color: "#C1E4FF" },
    { image: "./images/newsImage/1.png", text: "Бакалавриат “Инфохимия”", date: "28 апреля, 2022", category: "Мероприятие", color: "#D0ECBA" },
    { image: "./images/newsImage/1.png", text: "Вебинар «Вдохновленные природой: биомиметические материалы для медицины» с групп-лидером научно-образовательного центра инфохимии", date: "24 апреля, 2022", category: "Мероприятие", color: "#D0ECBA" },
]

export const News = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Новости</h2>
            <div className={styles.news__container}>
                {newsInfo.map(({ image, text, date, category }) => (
                    <NewsCard key={text} image={image} text={text} date={date} category={category} />
                ))}
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "70px" }}><Button width="144" height="35">Все новости</Button></div>
        </div>
    )
}