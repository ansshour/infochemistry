import { Button } from "../UI/Button/Button"
import { Breadcrumbs } from "../UI/Breadcrumbs/Breadcrumbs"
import { CategoryButton } from "../UI/CategoryButton/CategoryButton"
import { SearchInput } from "../UI/SearchInput/SearchInput"
import styles from "./VideoLectures.module.css"
import { Chapter } from "./Chapter/Chapter"
import { useEffect, useState } from "react"


type VideoLecturesOptions = {
    page?: number;
    page_size?: number;
    search?: string;
}

export const VideoLectures = () => {

    const info = [
        { name: "Главная страница", link: "/" },
        { name: "О центре", link: "" },
        { name: "Видеолекции", link: "/video_lectures" },
    ];

    const lang = localStorage.getItem("i18nextLng");
    const [data, setData] = useState<any>([]);

    const getVideoLectures = async ({ page, page_size, search }: VideoLecturesOptions) => {
        let link = `http://78.140.243.10/api/lecture_series/?lang=${lang === "ru" ? "ru" : "eng"}`;
        if (page) {
            link = `${link}&page=${page}`
        }
        if (page_size) {
            link = `${link}&page_size=${page_size}`
        }
        if (search) {
            link = `${link}&search=${search}`
        }
        const data = await fetch(link)
        const { results } = await data.json();
        setData(results)
    }

    useEffect(() => {
        getVideoLectures({})
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])



    return (
        <>
            {data && (
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
                            <Button width="100%" height="35" >Поиск</Button>
                        </div>
                        <div className={styles.chapters}>
                            {data.map(({ name, name_eng, lectures }: any) => <Chapter icon={""} title={lang === "ru" ? name : name_eng} numberVideos={lectures.length} videos={lectures} />)}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}