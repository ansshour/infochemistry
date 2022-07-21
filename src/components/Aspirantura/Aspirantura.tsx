import { Breadcrumbs } from "../UI/Breadcrumbs/Breadcrumbs"
import { FooterAbitPage } from "../UI/FooterAbitPage/FooterAbitPage"
import { ProgramCard } from "../UI/ProgramCard/ProgramCard"
import { About } from "./About/About"
import { Features } from "./Features/Features"
import styles from "./Aspirantura.module.css"
import { url } from "inspector"
import { Specialties } from "./Specialties/Specialties"
import { Admission } from "./Admission/Admission"
import { Documents } from "./Documents/Documents"
import { More } from "./More/More"

export const Aspirantura = () => {

    const dangerTextEnter = (text: string) => {
        return { __html: text };
    }

    const info = [
        { name: "Главная страница", link: "/" },
        { name: "Абитуриентам", link: "" },
        { name: "Аспирантура", link: "/aspirantura" },
    ]

    return (
        <>
            <Breadcrumbs info={info} />
            <div className={[styles.container, styles.top].join(" ")}>
                <div className={styles.title__wrapper}>
                    <h1 className={styles.title}>
                        Аспирантура
                        в НОЦ Инфохимия
                    </h1>
                </div>
                <ProgramCard years="4 года" lang="ENG" seats={[10, 10]} programName="4 направления" studyProgramLink="#" format="Очное обучение" />
            </div>
            <div className={[styles.container, styles.about].join(" ")}>
                <h2 className={styles.aboutTitle}>
                    О программе
                </h2>
                <div className={styles.aboutBlock}>
                    <div className={styles.image} style={{ backgroundImage: `url("./images/aspirantura/1.png")` }}></div>
                    <div className={styles.text}>
                        <p className={styles.info} dangerouslySetInnerHTML={dangerTextEnter(`
                        <p>Дорогие магистры, абитуриенты аспирантуры!</p>

                        <p>Этот момент наступил - отдел Аспирантуры Университета ИТМО официально начал прием документов в 2020 году!</p>
                        <p>Пиши нам на почту skorb@itmo.ru, чтобы узнать о подробностях поступления, обучения и работы в НОЦ Инфохимии</p>
                        `)} />
                        <a className={styles.link} href="#">Буклет программы</a>
                    </div>
                </div>
            </div>
            <Features title="Особенности и преимущества" />
            <Specialties />
            <Admission />
            <Documents />
            <More />
            <FooterAbitPage />
        </>
    )
}