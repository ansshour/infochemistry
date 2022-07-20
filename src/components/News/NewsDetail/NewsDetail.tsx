import { join } from "path";
import { Breadcrumbs } from "../../UI/Breadcrumbs/Breadcrumbs"
import styles from "./NewsDetail.module.css"
import icon1 from "./res/icon1.svg";
import icon2 from "./res/icon2.svg";

export const NewsDetail = () => {

    const data = {
        name: "Диалоги без галстуков. Путь к успеху",
        date: "20 апреля, 2022",
        place: "ИТШ №777, Санкт-Петербург",
        category: "Другое",
        image: "#",
        desc: "Директор Центра инфохимии Катя Скорб познакомила школьников ИТШ № 777 с подходами к созданию функциональных материалов, способных перестраивать свою структуру под внешними воздействиями.",
        prev: "Вебинар «Вдохновленные природой: биомиметические материалы для медицины»...",
        next: "Поздравляем победителей фудтех-хакатона Агама ❤ ИТМО!"

    }

    const info = [
        { name: "Главная страница", link: "/" },
        { name: "Новости", link: "/news" },
        { name: data.name, link: "#" },
    ]


    return (
        <>
            <Breadcrumbs info={info} />
            <div className={styles.container}>
                <p className={styles.title}>{data.name}</p>
                <div className={styles.content}>
                    <div className={styles.top}>
                        <div className={styles.first}>
                            <div className={styles.date}>
                                <img src={icon1} alt="icon" />
                                <p>{data.date}</p>
                            </div>
                            <div className={styles.place}>
                                <img src={icon2} alt="icon" />
                                <p>{data.place}</p>
                            </div>
                        </div>
                        <div className={styles.categoryBtn}>
                            {data.category}
                        </div>
                    </div>
                    <div className={styles.image} style={{ backgroundImage: `url(${data.image})` }}>

                    </div>
                    <p className={styles.desc}>{data.desc}</p>
                    <div className={styles.markdown}>

                    </div>
                </div>
                <div className={styles.changeNewsBlock}>
                    <div className={styles.prev}>
                        <p>{data.prev}</p>
                    </div>
                    <div className={styles.next}>
                        <p>{data.next}</p>
                    </div>
                    <span className={[styles.arrow, styles.prev].join(" ")}></span>
                    <span className={[styles.arrow, styles.next].join(" ")}></span>
                </div>
            </div>
        </>
    )
}