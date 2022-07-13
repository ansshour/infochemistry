import { useState } from "react"
import { Breadcrumbs } from "../UI/Breadcrumbs/Breadcrumbs"
import styles from "./Personalities.module.css"
import { PersonalitiesContent } from "./PersonalitiesContent/PersonalitiesContent"
import { PersonalitiesNav } from "./PersonalitiesNav/PersonalitiesNav"

export const Personalities = () => {

    const info = [
        { name: "Главная страница", link: "/" },
        { name: "О центре", link: "" },
        { name: "Персоналии", link: "/personalities" },
    ]

    const [activePersonalies, setActivePersonalies] = useState<number>(0);

    return (
        <>
            <Breadcrumbs info={info} />
            <div className={styles.container}>
                <div className={styles.title__wrapper}>
                    <h1 className={styles.title}>
                        Персоналии
                    </h1>
                </div>
                <div className={styles.personalities}>
                    <PersonalitiesNav active={activePersonalies} setActive={setActivePersonalies} />
                    <PersonalitiesContent />
                </div>
            </div>
        </>
    )
}