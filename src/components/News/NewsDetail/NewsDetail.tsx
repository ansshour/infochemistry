import { join } from "path";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../../UI/Breadcrumbs/Breadcrumbs"
import styles from "./NewsDetail.module.css"
import icon1 from "./res/icon1.svg";
import icon2 from "./res/icon2.svg";

export const NewsDetail = () => {

    const [data, setData] = useState<any>({});


    const { id } = useParams()

    const getNewsDetail = async () => {
        const lang = localStorage.getItem("i18nextLng");
        const data = await fetch(`http://78.140.243.10/api/news/${id}/ `)
        const results = await data.json();
        if (lang === "ru") {
            setData({ headline: results.headline, location: results.location, section: results.section, preview: results.preview, publication_date: results.publication_date, content: results.content, has_english: results.has_english })
        }
        if (lang === "en") {
            setData({ headline: results.headline_eng, location: results.location_eng, section: results.section, preview: results.preview, publication_date: results.publication_date, content: results.content_eng, has_english: results.has_english })
        }
    }

    useEffect(() => {
        getNewsDetail()
    }, [])

    const info = [
        { name: "Главная страница", link: "/" },
        { name: "Новости", link: "/news" },
        { name: data.headline && (data.headline.length > 30 ? data.headline.split(" ").filter((word: string, i: number) => i < 7 && word).join(" ") + "..." : data.headline), link: "#" },
    ]

    function createMarkup(content: any) {
        return { __html: content };
    }

    return (
        <>
            {Object.keys(data).length ? (
                <>
                    <Breadcrumbs info={info} />
                    <div className={styles.container}>
                        <p className={styles.title}>{data.headline}</p>
                        <div className={styles.content}>
                            <div className={styles.top}>
                                <div className={styles.first}>
                                    <div className={styles.date}>
                                        <img src={icon1} alt="icon" />
                                        <div className={styles.dateContent}>{data.publication_date.slice(0, 10)}</div>
                                    </div>
                                    <div className={styles.place}>
                                        <img src={icon2} alt="icon" />
                                        <div>{data.location}</div>
                                    </div>
                                </div>
                                <div className={styles.categoryBtn}>
                                    {data.section}
                                </div>
                            </div>
                            <div className={styles.image} style={{ backgroundImage: `url(${data.preview})` }}></div>
                            <div className={styles.content} dangerouslySetInnerHTML={createMarkup(data.content)}></div>
                        </div>
                        {/* <div className={styles.changeNewsBlock}>
                            <div className={styles.prev}>
                                <p>{data.prev}</p>
                            </div>
                            <div className={styles.next}>
                                <p>{data.next}</p>
                            </div>
                            <span className={[styles.arrow, styles.prev].join(" ")}></span>
                            <span className={[styles.arrow, styles.next].join(" ")}></span>
                        </div> */}
                    </div>
                </>
            ) : (
                <>
                    <div>Ошибка</div>
                </>
            )}

        </>
    )
}