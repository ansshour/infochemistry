import { useState, useRef, createContext, useEffect } from "react"
import { Breadcrumbs } from "../UI/Breadcrumbs/Breadcrumbs"
import { Button } from "../UI/Button/Button"
import { SearchInput } from "../UI/SearchInput/SearchInput"
import styles from "./Publications.module.css"
import { Quotes } from "./Quotes/Quotes"
import { ReactComponent as Left } from './res/left.svg';
import { ReactComponent as Right } from './res/right.svg';

export const PublicationsContext = createContext<any>(null); // пока хз че будет приходить, ПОТОМ ТИП НАПИСАТЬ!!!!!!!

export const Publications = () => {

    const [coverOffset, setCoverOffset] = useState(0);

    const ref = useRef<any>();
    const refContainer = useRef<any>();

    const info = [
        { name: "Главная страница", link: "/" },
        { name: "О центре", link: "" },
        { name: "Публикации", link: "/publications" },
    ]

    const data = {
        inTotal: 132,
        publishing: 23,
        authors: 205,
        totalYears: 15,
        images: ["./images/covers/1.svg", "./images/covers/2.svg", "./images/covers/3.svg", "./images/covers/4.svg", "./images/covers/5.svg", ""],
    }

    const [publicationsInfo, setPublicationsInfo] = useState<any>([]);

    const getInfo = async () => {
        const data = await fetch("http://78.140.243.10/api/publications/stats/");
        const response = await data.json();
        setPublicationsInfo(response)

    }


    const [publicationsData, setPublicationsData] = useState<any>([])

    const getPublicationsData = async () => {
        const data = await fetch(`http://78.140.243.10/api/publications/papers/?page=1&page_size=10000000`);
        const { results } = await data.json();
        setPublicationsData(results)
    }


    useEffect(() => {
        getPublicationsData()
        getInfo()
    }, [])

    const slideCovers = (direction: "left" | "right") => {
        let width = ref.current.offsetWidth + 35;
        const intoScreen = Math.round(refContainer.current.offsetWidth / width);
        if (direction === "left") {
            if (coverOffset < 0) {
                setCoverOffset(coverOffset + width);
            }
        }
        if (direction === "right") {
            if (coverOffset > -(data.images.length - intoScreen) * width) {
                setCoverOffset(coverOffset - width);
            }
        }
    }

    const dataSortByDate = (data: any) => {
        const publications: any = {};
        const result = [];
        data.forEach((elem: any) => {
            if (publications[elem.year]) {
                publications[elem.year] = [...publications[elem.year], elem]
            } else {
                publications[elem.year] = [];
                publications[elem.year] = [...publications[elem.year], elem]
            }
        })
        for (const key in publications) {
            result.push(publications[key])
        }
        return result
    }


    return (
        <>
            <Breadcrumbs info={info} />
            <div className={styles.container} ref={refContainer}>
                <div className={styles.title__wrapper}>
                    <h1 className={styles.title}>
                        Публикации
                    </h1>
                </div>
                <div className={styles.searchBlock}>
                    <SearchInput />
                    <Button height="35" >Поиск</Button>
                </div>
                <div className={styles.numbersBlock}>
                    <div className={styles.block}>
                        <p className={styles.blockTitle}>Всего</p>
                        <p className={styles.digit}>{publicationsInfo.paper_count}</p>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.blockTitle}>Издательств</p>
                        <p className={styles.digit}>{publicationsInfo.journals_count}</p>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.blockTitle}>Авторов</p>
                        <p className={styles.digit}>{publicationsInfo.authors_count}</p>
                    </div>
                    <div className={styles.block}>
                        <p className={styles.blockTitle}>За лет</p>
                        <p className={styles.digit}>{publicationsInfo.years_count}</p>
                    </div>
                </div>
                <p className={styles.subtitle}>Публикуются в изданиях:</p>
                <div className={styles.coversWrapper}>
                    <div className={styles.covers} style={{ transform: `translateX(${coverOffset}px)` }}>
                        {publicationsData.map(({ journal_cover }: any, i: number) => <div key={i} className={styles.cover} style={{ backgroundImage: `url(${journal_cover})` }} ref={ref}></div>)}
                    </div>
                </div>

                <div className={styles.navCoversWrapp}>
                    <div className={styles.navigate}>
                        <button className={styles.navigateBtns}><Left className={styles.left} onClick={() => { slideCovers("left") }} /></button>
                        <button className={styles.navigateBtns}><Right className={styles.right} onClick={() => { slideCovers("right") }} /></button>
                    </div>
                </div>
                <p className={styles.subtitle}>Публикации</p>
                <div className={styles.quotesWrapper}>
                    {dataSortByDate(publicationsData).reverse().map((item: any) => <Quotes data={item} />)}
                </div>
            </div>
        </>
    )
}