import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Breadcrumbs } from "../UI/Breadcrumbs/Breadcrumbs"
import { Button } from "../UI/Button/Button"
import { CategoryButton } from "../UI/CategoryButton/CategoryButton"
import { NewsCard } from "../UI/NewsCard/NewsCard"
import { SearchInput } from "../UI/SearchInput/SearchInput"
import styles from "./News.module.css"
import i18n from "../../utils/i18next"


type NewsOptions = {
    page?: number;
    page_size?: number;
    search?: string;
    sections?: string;
}

export const News = () => {

    const info = [
        { name: "Главная страница", link: "/" },
        { name: "Новости", link: "/news" },
    ]


    const [data, setData] = useState<any>([])
    const [search, setSearch] = useState("");



    const getNews = async ({ page, page_size, search, sections }: NewsOptions) => {
        const lang = localStorage.getItem("i18nextLng");
        let link = `http://78.140.243.10/api/news/?lang=${lang}`;
        if (page) {
            link = `${link}&page=${page}`
        }
        if (page_size) {
            link = `${link}&page_size=${page_size}`
        }
        if (search) {
            link = `${link}&search=${search}`
        }
        if (sections) {
            link = `${link}&sections=${sections}`
        }
        const data = await fetch(link)
        const { results } = await data.json();
        const filtredResults = results.map(({ headline, headline_eng, id, preview, publication_date, section }: any) => {
            if (lang === "ru") {
                return ({ headline: headline, id: id, preview: preview, publication_date: publication_date, section: section })
            }
            if (lang === "en") {
                return ({ headline: headline_eng, id: id, preview: preview, publication_date: publication_date, section: section })
            }
        })
        setData(filtredResults)
    }




    useEffect(() => {
        getNews({})
    }, [])



    const [isActiveBtns, setIsActiveBtns] = useState({ event: false, video: false, smi: false, other: false, external: false })

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

    useEffect(() => {
        const lang = localStorage.getItem("i18nextLng");
        let active: string[] = [];
        if (isActiveBtns.event) {
            active.push("event")
        }
        if (isActiveBtns.video) {
            active.push("video")
        }
        if (isActiveBtns.smi) {
            active.push("media_on_us ")
        }
        if (isActiveBtns.other) {
            active.push("other")
        }
        if (isActiveBtns.external) {
            active.push("external")
        }
        getNews({ sections: active.join(",") })
    }, [isActiveBtns])

    useEffect(() => {
        getNews({ search: search })
    }, [search])

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
                    <SearchInput
                        value={search}
                        onChange={(e: any) => { setSearch(e.target.value) }} />
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
                    {data.length ? (
                        <>
                            <div className={styles.first}>
                                {data.map(({ preview, headline, publication_date, section, id }: any, i: number) => {
                                    return (
                                        i < 3 ? (<Link to={`/news/${id}`}><NewsCard key={i} image={preview} text={headline} date={publication_date} category={section} /></Link>) : ""
                                    )
                                })}
                            </div>
                            <div className={styles.second}>
                                {data.map(({ preview, headline, publication_date, section, id }: any, i: number) => {
                                    return (
                                        i > 2 && i < 5 ? (<Link to={`/news/${id}`}><NewsCard key={i} image={preview} text={headline} date={publication_date} category={section} /></Link>) : ""
                                    )
                                })}
                            </div>
                            <div className={styles.third}>
                                {data.map(({ preview, headline, publication_date, section, id }: any, i: number) => {
                                    return (
                                        i > 4 ? (<Link to={`/news/${id}`}><NewsCard key={i} image={preview} text={headline} date={publication_date} category={section} /></Link>) : ""
                                    )
                                })}
                            </div>
                        </>
                    ) : (
                        <>
                        </>
                    )}

                    <div className={styles.loadMore}>
                        <Button>Показать еще</Button>
                    </div>
                </div>
            </div>
        </>
    )
}