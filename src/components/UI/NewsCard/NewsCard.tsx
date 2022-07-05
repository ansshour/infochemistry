import styles from "./NewsCard.module.css"


type Props = {
    image: string;
    text: string;
    date: string;
    category: string;
}


export const NewsCard: React.FC<Props> = ({ image, text, date, category }) => {

    const getColorByCategory = (category: string) => {
        if (category === "Другое") {
            return "#C1E4FF"
        }
        if (category === "Мероприятие") {
            return "#D0ECBA"
        }
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
                <p className={styles.date}>{date}</p>
                <div className={styles.categoryButton} style={{ backgroundColor: `${getColorByCategory(category)}` }}>{category}</div>
            </div>
        </div>
    )
}