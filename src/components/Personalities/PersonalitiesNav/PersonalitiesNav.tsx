import styles from "./PersonalitiesNav.module.css"
import { PersonalitiesContext } from "../Personalities"
import { useContext, useEffect } from "react";
import { PersonalitiesGroupLeaders } from "../PersonalitiesData/PersonalitiesData"
import { PersonalitiesPostdocs } from "../PersonalitiesData/PersonalitiesData"
import { PersonalitiesAspirants } from "../PersonalitiesData/PersonalitiesData"
import { PersonalitiesMaster } from "../PersonalitiesData/PersonalitiesData"
import { useTranslation } from "react-i18next"
import "../../../utils/i18next"

type Props = {
    active: any;
    setActive: (arg: number) => void;
}

export const PersonalitiesNav: React.FC<Props> = ({ active, setActive }) => {

    const { t } = useTranslation()

    const { setPersonalitiesData, setPersonalitiesName } = useContext(PersonalitiesContext);

    const getPersonalitiesInfo = (group: string) => {
        fetch(`http://78.140.243.10/api/people/?role=${group}`, {
        })
            .then(data => data.json())
            .then(response => setPersonalitiesData(response))
            .catch(err => console.log("Personalities error"))
    }

    useEffect(() => {
        if (active === 0) {
            getPersonalitiesInfo("group_leader")
        }
        if (active === 1) {
            getPersonalitiesInfo("postdoctoral")
        }
        if (active === 2) {
            getPersonalitiesInfo("doctoral_student")
        }
        if (active === 3) {
            getPersonalitiesInfo("masters_student")
        }
        if (active === 4) {
            getPersonalitiesInfo("bachelor_student")
        }
        if (active === 5) {
            getPersonalitiesInfo("school_student")
        }
        if (active === 6) {
            getPersonalitiesInfo("alumni")
        }
        if (active === 7) {
            getPersonalitiesInfo("staff")
        }
        if (active === 8) {
            getPersonalitiesInfo("practice_student")
        }
        if (active === 9) {
            getPersonalitiesInfo("administration")
        }

    }, [active])


    const personalitiesNav = [
        { name: t("personalities.nav.group_leaders"), icon: "./images/personalities/icon/1.svg" },
        { name: t("personalities.nav.postdocs"), icon: "./images/personalities/icon/2.svg" },
        { name: t("personalities.nav.aspirants"), icon: "./images/personalities/icon/3.svg" },
        { name: t("personalities.nav.masters"), icon: "./images/personalities/icon/4.svg" },
        { name: t("personalities.nav.backelors"), icon: "./images/personalities/icon/5.svg" },
        { name: t("personalities.nav.schoolstudents"), icon: "./images/personalities/icon/6.png" },
        { name: t("personalities.nav.alums"), icon: "./images/personalities/icon/7.svg" },
        { name: t("personalities.nav.staff"), icon: "./images/personalities/icon/8.svg" },
        { name: t("personalities.nav.practics"), icon: "./images/personalities/icon/9.svg" },
        { name: t("personalities.nav.admins"), icon: "./images/personalities/icon/10.svg" },
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