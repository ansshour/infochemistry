import { useState } from "react"
import { Breadcrumbs } from "../UI/Breadcrumbs/Breadcrumbs"
import { Button } from "../UI/Button/Button"
import { CategoryButton } from "../UI/CategoryButton/CategoryButton"
import { NewsCard } from "../UI/NewsCard/NewsCard"
import { SearchInput } from "../UI/SearchInput/SearchInput"
import styles from "./News.module.css"

export const News = () => {

    const info = [
        { name: "Главная страница", link: "/" },
        { name: "Новости", link: "/news" },
    ]


    const data = [
        { image: "./images/news/1.png", text: "Еда для Арктики: как специальные консервы, плавленые сыры и зефир помогут восполнить необходимые человеку витамины и минералы", date: "22 марта, 2022", category: "Другое" },
        { image: "./images/news/2.png", text: "Бакалавриат “Инфохимия”", date: "28 апреля, 2022", category: "Мероприятие" },
        { image: "./images/news/3.png", text: "Вебинар «Вдохновленные природой: биомиметические материалы для медицины» с групп-лидером научно-образовательного центра инфохимии", date: "24 апреля, 2022", category: "Мероприятие" },
        { image: "./images/news/4.png", text: "5 школьников выиграли СТАЖИРОВКИ в Центре инфохимии по итогам хакатона «Горизонты науки», который прошел в эти выходные в Кванториуме Санкт-Петербурга", date: "19 апреля, 2022", category: "Мероприятие" },
        { image: "./images/news/5.png", text: "Объявлены победители конкурса интердисциплинарных проектов IChem Prize, который проводят Центр инфохимии Университета ИТМО и Академия талантов Санкт-Петербурга.", date: "22 марта, 2022", category: "Мероприятие" },
        { image: "./images/news/6.png", text: "Бакалавриат “Инфохимия”", date: "28 апреля, 2022", category: "Мероприятие" },
        { image: "./images/news/7.png", text: "Вебинар «Вдохновленные природой: биомиметические материалы для медицины» с групп-лидером научно-образовательного центра инфохимии", date: "24 апреля, 2022", category: "Мероприятие" },
        { image: "./images/news/8.png", text: "Еда для Арктики: как специальные консервы, плавленые сыры и зефир помогут восполнить необходимые человеку витамины и минералы", date: "22 марта, 2022", category: "Другое" },
    ]


    const [isActiveBtns, setIsActiveBtns] = useState({ event: true, video: false, smi: false, other: true, external: false })

    const eventBtnClickHandler = () => {
        setIsActiveBtns({ ...isActiveBtns, event: !isActiveBtns.event })
    }

    const videoBtnClickHandler = () => {
        setIsActiveBtns({ ...isActiveBtns, video: !isActiveBtns.video })
    }

    const smiBtnClickHandler = () => {
        setIsActiveBtns({ ...isActiveBtns, smi: !isActiveBtns.smi })
    }
    const otherBtnClickHandler = () => {
        setIsActiveBtns({ ...isActiveBtns, other: !isActiveBtns.other })
    }
    const externalBtnClickHandler = () => {
        setIsActiveBtns({ ...isActiveBtns, external: !isActiveBtns.external })
    }

    return (
        <>
            <Breadcrumbs info={info} />
            <div className={styles.container}>
                <div className={styles.title__wrapper}>
                    <h1 className={styles.title}>
                        Новости
                    </h1>
                </div>
                <div className={styles.searchBlock}>
                    <SearchInput />
                    <Button width="96" height="35" >Поиск</Button>
                </div>
                <div className={styles.categoriesBlock}>
                    <p className={styles.categoryTitle}>Категории</p>
                    <div className={styles.categoryButtons}>
                        <span onClick={eventBtnClickHandler}><CategoryButton isActive={isActiveBtns.event} color="#63c018">Мероприятие</CategoryButton></span>
                        <span onClick={videoBtnClickHandler}><CategoryButton isActive={isActiveBtns.video} color="#63c018">Видео</CategoryButton></span>
                        <span onClick={smiBtnClickHandler}><CategoryButton isActive={isActiveBtns.smi} color="#63c018">СМИ о нас</CategoryButton></span>
                        <span onClick={otherBtnClickHandler}><CategoryButton isActive={isActiveBtns.other} color="#229fff">Другое</CategoryButton></span>
                        <span onClick={externalBtnClickHandler}><CategoryButton isActive={isActiveBtns.external} color="#63c018">Внешний источник</CategoryButton></span>
                    </div>
                </div>
                <div className={styles.newsBlock}>
                    <div className={styles.first}>
                        {data.map(({ image, text, date, category }, i) => {
                            return (
                                i < 3 ? <NewsCard image={image} text={text} date={date} category={category} /> : ""
                            )
                        })}
                    </div>
                    <div className={styles.second}>
                        {data.map(({ image, text, date, category }, i) => {
                            return (
                                i > 2 && i < 5 ? <NewsCard image={image} text={text} date={date} category={category} /> : ""
                            )
                        })}
                    </div>
                    <div className={styles.third}>
                        {data.map(({ image, text, date, category }, i) => {
                            return (
                                i > 4 && i < 8 ? <NewsCard image={image} text={text} date={date} category={category} /> : ""
                            )
                        })}
                    </div>
                    <div className={styles.loadMore}>
                        <Button>Показать еще</Button>
                    </div>
                </div>
            </div>
        </>
    )
}