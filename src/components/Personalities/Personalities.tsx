import { useState, createContext, useEffect } from "react"
import { useTranslation } from "react-i18next"
import "../../utils/i18next"
import { Breadcrumbs } from "../UI/Breadcrumbs/Breadcrumbs"
import styles from "./Personalities.module.css"
import { PersonalitiesContent } from "./PersonalitiesContent/PersonalitiesContent"
import { PersonalitiesNav } from "./PersonalitiesNav/PersonalitiesNav"


export const PersonalitiesContext = createContext<any>(null)

export const Personalities = () => {

    const { t } = useTranslation();

    const info = [
        { name: t("personalities.breadcrumbs.main"), link: "/" },
        { name: t("personalities.breadcrumbs.about"), link: "" },
        { name: t("personalities.breadcrumbs.personalities"), link: "/personalities" },
    ]


    const [activePersonalies, setActivePersonalies] = useState<number>(0);
    const [personalitiesData, setPersonalitiesData] = useState([]);
    const [personalitiesName, setPersonalitiesName] = useState<string>("Групп-лидеры")



    return (
        <>
            <PersonalitiesContext.Provider value={{ personalitiesData, setPersonalitiesData, setPersonalitiesName, personalitiesName }}>
                <Breadcrumbs info={info} />
                <div className={styles.container}>
                    <div className={styles.title__wrapper}>
                        <h1 className={styles.title}>
                            {t("personalities.title")}
                        </h1>
                    </div>
                    <div className={styles.personalities}>
                        <PersonalitiesNav active={activePersonalies} setActive={setActivePersonalies} />
                        <PersonalitiesContent />
                    </div>
                </div>
            </PersonalitiesContext.Provider>
        </>
    )
}