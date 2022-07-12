import { Breadcrumbs } from "../UI/Breadcrumbs/Breadcrumbs"
import { FooterAbitPage } from "../UI/FooterAbitPage/FooterAbitPage"
import { ProgramCard } from "../UI/ProgramCard/ProgramCard"
import { About } from "./About/About"
import { Disciplines } from "./Disciplines/Disciplines"
import { Examples } from "./Examples/Examples"
import { Features } from "./Features/Features"
import styles from "./Master.module.css"
import { Specializations } from "./Specializations/Specializations"

export const Master = () => {

    const info = [
        { name: "Главная страница", link: "/" },
        { name: "Абитуриентам", link: "" },
        { name: "Магистратура", link: "/master" },
    ]

    return (
        <>
            <Breadcrumbs info={info} />
            <div className={[styles.container, styles.top].join(" ")}>
                <div className={styles.title__wrapper}>
                    <h1 className={styles.title}>
                        Магистратура
                        в НОЦ Инфохимия
                    </h1>
                </div>
                <ProgramCard years="2 года" lang="ENG" seats={[26, 10]} studyProgramLink="#" format="Очное обучение" />
            </div>
            <About />
            <Features />
            <Disciplines />
            <Specializations />
            <Examples />
            <FooterAbitPage />
        </>
    )
}