import { Link } from "react-router-dom";
import styles from "./NewsCard.module.css"


type Props = {
    image: string;
    text: string;
    date: string;
    category: string;
}


export const NewsCard: React.FC<Props> = ({ image, text, date, category }) => {

    const getColorByCategory = (category: string) => {
        if (category === "other") {
            return "#C1E4FF"
        }
        if (category === "event") {
            return "#D0ECBA"
        }
    }

    const getCategory = (section: string) => {
        if (section === "event") {
            return "Мероприятие"
        }
        if (section === "video") {
            return "Видео"
        }
        if (section === "media_on_us ") {
            return "СМИ о нас"
        }
        if (section === "other") {
            return "Другое"
        }
        if (section === "external") {
            return "Внешний источник"
        }
    }

    const formatDate = (date: string) => {
        const dataSplit = date.slice(0, 10).split("-");
        const year = dataSplit[0];
        let month = "";
        switch (dataSplit[1]) {
            case "01":
                month = "января"
                break;
            case "02":
                month = "февраля"
                break;
            case "03":
                month = "марта"
                break;
            case "04":
                month = "апреля"
                break;
            case "05":
                month = "мая"
                break;
            case "06":
                month = "июня"
                break;
            case "07":
                month = "июля"
                break;
            case "08":
                month = "августа"
                break;
            case "09":
                month = "сентября"
                break;
        }
        const day = dataSplit[2];
        return `${day} ${month}, ${year}`
    }

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.image} style={{ backgroundImage: `url(${image})` }}>

                </div>
                <div className={styles.textWrapper}>
                    <p className={styles.text}>{text}</p>
                </div>
            </div>
            <div className={styles.footerCard}>
                <p className={styles.date}>{formatDate(date)}</p>
                <div className={styles.categoryButton} style={{ backgroundColor: `${getColorByCategory(category)}` }}>{getCategory(category)}</div>
            </div>
        </div>
    )
}