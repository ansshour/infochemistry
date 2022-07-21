import styles from "./PersonalitiesNav.module.css"
import { PersonalitiesContext } from "../Personalities"
import { useContext, useEffect } from "react";
import { PersonalitiesGroupLeaders } from "../PersonalitiesData/PersonalitiesData"
import { PersonalitiesPostdocs } from "../PersonalitiesData/PersonalitiesData"
import { PersonalitiesAspirants } from "../PersonalitiesData/PersonalitiesData"
import { PersonalitiesMaster } from "../PersonalitiesData/PersonalitiesData"

type Props = {
    active: any;
    setActive: (arg: number) => void;
}

export const PersonalitiesNav: React.FC<Props> = ({ active, setActive }) => {



    const { setPersonalitiesData, setPersonalitiesName } = useContext(PersonalitiesContext);

    useEffect(() => {
        if (active === 0) {
            setPersonalitiesData(PersonalitiesGroupLeaders)
        }
        if (active === 1) {
            setPersonalitiesData(PersonalitiesPostdocs)
        }
        if (active === 2) {
            setPersonalitiesData(PersonalitiesAspirants)
        }
        if (active === 3) {
            setPersonalitiesData(PersonalitiesMaster)
        }
        if (active === 4) {
            setPersonalitiesData(PersonalitiesGroupLeaders)
        }
        if (active === 5) {
            setPersonalitiesData(PersonalitiesAspirants)
        }
        if (active === 6) {
            setPersonalitiesData(PersonalitiesPostdocs)
        }
        if (active === 7) {
            setPersonalitiesData(PersonalitiesGroupLeaders)
        }
        if (active === 8) {
            setPersonalitiesData(PersonalitiesPostdocs)
        }
        if (active === 9) {
            setPersonalitiesData(PersonalitiesGroupLeaders)
        }

    }, [active])

    const personalitiesNav = [
        { name: "Групп-лидеры", icon: "./images/personalities/icon/1.svg" },
        { name: "Постдоки и стипендиаты ИТМО", icon: "./images/personalities/icon/2.svg" },
        { name: "Аспиранты", icon: "./images/personalities/icon/3.svg" },
        { name: "Магистранты", icon: "./images/personalities/icon/4.svg" },
        { name: "Бакалавры", icon: "./images/personalities/icon/5.svg" },
        { name: "Школьники", icon: "./images/personalities/icon/6.png" },
        { name: "Алюмни", icon: "./images/personalities/icon/7.svg" },
        { name: "Персонал", icon: "./images/personalities/icon/8.svg" },
        { name: "Практиканты", icon: "./images/personalities/icon/9.svg" },
        { name: "Администрация", icon: "./images/personalities/icon/10.svg" },
    ]

    return (
        <>
            <nav className={styles.personalities__nav}>
                {personalitiesNav.map(({ name, icon }, i) => {
                    return (
                        <div className={styles.personalities__nav__item} key={name} style={active === i ? { backgroundColor: "#E2F6FB", fontWeight: "bold" } : {}} onClick={() => { setActive(i); setPersonalitiesName(name) }}>
                            <img src={icon} alt={name} />
                            <p>{name}</p>
                        </div>
                    )
                })}
            </nav>
        </>
    )
}