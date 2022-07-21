import { useState, useRef, createContext } from "react"
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

    const modalData = {
        gost: "Шалагина Г. Э., Шалагин С. В. Компьютерное моделирование в инфохимии: экологические вызовы и новые технологии //Устойчивое развитие регионов: опыт, проблемы, перспективы. – 2017. – С. 169-172.",
        mla: "Шалагина Г. Э., Шалагин С. В. Компьютерное моделирование в инфохимии: экологические вызовы и новые технологии //Устойчивое развитие регионов: опыт, проблемы, перспективы. – 2017. – С. 169-172.",
        apa: "Шалагина Г. Э., Шалагин С. В. Компьютерное моделирование в инфохимии: экологические вызовы и новые технологии //Устойчивое развитие регионов: опыт, проблемы, перспективы. – 2017. – С. 169-172.",
    }

    const quoteData = [
        {
            authors: "Shityakov S. Skorb E.V Forster C. Dankdekar T",
            name: "Scaffold searching of FDA and EMA-approved drugs identifies lead candidates for drug repurposing in Alzheimer's disease",
            place: "Frontiers in Chemistry, 2021",
            code: "[ IF: 10.041 , SJR: 2.287 ]",
        },
        {
            authors: "Shityakov S. Skorb E.V Forster C. Dankdekar T",
            name: "Scaffold searching of FDA and EMA-approved drugs identifies lead candidates for drug repurposing in Alzheimer's disease",
            place: "Frontiers in Chemistry, 2021",
            code: "[ IF: 10.041 , SJR: 2.287 ]",
        },
        {
            authors: "Shityakov S. Skorb E.V Forster C. Dankdekar T",
            name: "Scaffold searching of FDA and EMA-approved drugs identifies lead candidates for drug repurposing in Alzheimer's disease",
            place: "Frontiers in Chemistry, 2021",
            code: "[ IF: 10.041 , SJR: 2.287 ]",
        },
        {
            authors: "Shityakov S. Skorb E.V Forster C. Dankdekar T",
            name: "Scaffold searching of FDA and EMA-approved drugs identifies lead candidates for drug repurposing in Alzheimer's disease",
            place: "Frontiers in Chemistry, 2021",
            code: "[ IF: 10.041 , SJR: 2.287 ]",
        },
        {
            authors: "Shityakov S. Skorb E.V Forster C. Dankdekar T",
            name: "Scaffold searching of FDA and EMA-approved drugs identifies lead candidates for drug repurposing in Alzheimer's disease",
            place: "Frontiers in Chemistry, 2021",
            code: "[ IF: 10.041 , SJR: 2.287 ]",
        },
        {
            authors: "Shityakov S. Skorb E.V Forster C. Dankdekar T",
            name: "Scaffold searching of FDA and EMA-approved drugs identifies lead candidates for drug repurposing in Alzheimer's disease",
            place: "Frontiers in Chemistry, 2021",
            code: "[ IF: 10.041 , SJR: 2.287 ]",
        },
    ]

    const slideCovers = (direction: "left" | "right") => {
        let width = ref.current.offsetWidth + 35;
        const intoScreen = Math.round(refContainer.current.offsetWidth / width);
        console.log(refContainer.current.offsetWidth / width, " ", width)
        if (direction === "left") {
            if (coverOffset < 0) {
                setCoverOffset(coverOffset + width);
            }
        }
        if (direction === "right") {
            console.log(-(data.images.length - intoScreen) * width)
            if (coverOffset > -(data.images.length - intoScreen) * width) {
                setCoverOffset(coverOffset - width);
            }
        }
    }

    return (
        <>
            <PublicationsContext.Provider value={{ quoteData, modalData }} >
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
                            <p className={styles.digit}>{data.inTotal}</p>
                        </div>
                        <div className={styles.block}>
                            <p className={styles.blockTitle}>Издательств</p>
                            <p className={styles.digit}>{data.publishing}</p>
                        </div>
                        <div className={styles.block}>
                            <p className={styles.blockTitle}>Авторов</p>
                            <p className={styles.digit}>{data.authors}</p>
                        </div>
                        <div className={styles.block}>
                            <p className={styles.blockTitle}>За лет</p>
                            <p className={styles.digit}>{data.totalYears}</p>
                        </div>
                    </div>
                    <p className={styles.subtitle}>Публикуются в изданиях:</p>
                    <div className={styles.coversWrapper}>
                        <div className={styles.covers} style={{ transform: `translateX(${coverOffset}px)` }}>
                            {data.images.map((image: string, i: number) => <div key={i} className={styles.cover} style={{ backgroundImage: `url(${image})` }} ref={ref}></div>)}
                        </div>
                    </div>

                    <div className={styles.navCoversWrapp}>
                        <div className={styles.navigate}>
                            <Left className={styles.left} onClick={() => { slideCovers("left") }} />
                            <Right className={styles.right} onClick={() => { slideCovers("right") }} />
                        </div>
                    </div>
                    <p className={styles.subtitle}>Публикации</p>
                    <div className={styles.quotesWrapper}>
                        <Quotes />
                    </div>
                </div>
            </PublicationsContext.Provider>
        </>
    )
}