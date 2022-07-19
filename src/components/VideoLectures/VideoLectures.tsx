import { Button } from "../UI/Button/Button"
import { Breadcrumbs } from "../UI/Breadcrumbs/Breadcrumbs"
import { CategoryButton } from "../UI/CategoryButton/CategoryButton"
import { SearchInput } from "../UI/SearchInput/SearchInput"
import styles from "./VideoLectures.module.css"
import { Chapter } from "./Chapter/Chapter"

export const VideoLectures = () => {

    const info = [
        { name: "Главная страница", link: "/" },
        { name: "О центре", link: "" },
        { name: "Видеолекции", link: "/video_lectures" },
    ]

    const data = [
        {
            icon: "./images/videoLectures/icon1.svg",
            title: "Неорганическая химия",
            numberVideos: 23,
            videos: [
                {
                    image: "#",
                    name: "Комплексные соединения",
                    authorName: "Екатерина Скорб",
                    date: "11.07.2022",
                    time: "1:00:59"
                },
                {
                    image: "#",
                    name: "Комплексные соединения",
                    authorName: "Екатерина Скорб",
                    date: "11.07.2022",
                    time: "1:00:59"
                },
                {
                    image: "#",
                    name: "Комплексные соединения",
                    authorName: "Екатерина Скорб",
                    date: "11.07.2022",
                    time: "1:00:59"
                }
            ],
        },
        {
            icon: "./images/videoLectures/icon2.svg",
            title: "Математический анализ (продвинутый уровень)",
            numberVideos: 11,
            videos: [
                {
                    image: "#",
                    name: "Сходимость последовательности",
                    authorName: "Бойцев Антон",
                    date: "11.07.2022",
                    time: "1:00:59"
                },
                {
                    image: "#",
                    name: "Комплексные тригонометрические функции",
                    authorName: "Бойцев Антон",
                    date: "11.07.2022",
                    time: "1:00:59"
                },
                {
                    image: "#",
                    name: "Бином Ньютона",
                    authorName: "Бойцев Антон",
                    date: "11.07.2022",
                    time: "1:00:59"
                }
            ],
        }
    ]

    return (
        <>
            <Breadcrumbs info={info} />
            <div className={styles.container}>
                <div className={styles.title__wrapper}>
                    <h1 className={styles.title}>
                        Видеолекции
                    </h1>
                </div>
                <div className={styles.searchBlock}>
                    <SearchInput />
                    <Button width="96" height="35" >Поиск</Button>
                </div>
                <div className={styles.categoryBlock}>
                    <div className={styles.category}>
                        <p>Бакалавриат</p>
                        <div className={styles.bacalavr}>
                            <CategoryButton isActive={false} color="#63c018">1 курс</CategoryButton>
                            <CategoryButton isActive={false} color="#63c018">2 курс</CategoryButton>
                            <CategoryButton isActive={false} color="#63c018">3 курс</CategoryButton>
                            <CategoryButton isActive={false} color="#63c018">4 курс</CategoryButton>
                        </div>
                    </div>
                    <div className={styles.category}>
                        <p>Магистратура</p>
                        <div className={styles.master}>
                            <CategoryButton isActive={false} color="#63C018">1 курс</CategoryButton>
                            <CategoryButton isActive={false} color="#63C018">2 курс</CategoryButton>
                        </div>
                    </div>
                </div>
                {data.map(({ icon, title, numberVideos, videos }) => <Chapter icon={icon} title={title} numberVideos={numberVideos} videos={videos} />)}
            </div>
        </>
    )
}