import { useState } from "react"
import { Breadcrumbs } from "../UI/Breadcrumbs/Breadcrumbs"
import { BtnToggle } from "../UI/BtnToggle/BtnToggle"
import { Warning } from "../UI/Warning/Warning"
import styles from "./Schedule.module.css"

export const Schedule = () => {

    const [activeWeek, setActiveWeek] = useState(0)
    const [activeGroup, setActiveGroup] = useState(0)

    const info = [
        { name: "Главная страница", link: "/" },
        { name: "Студентам", link: "" },
        { name: "Расписание", link: "/schedule" },
    ]

    const weekVariables = [
        { id: 0, name: "Все" },
        { id: 1, name: "Четные" },
        { id: 2, name: "Нечетные" },
    ]

    const groupVariables = [
        { id: 0, name: "О3143" },
        { id: 1, name: "О3144" },
    ]

    return (
        <>
            <Breadcrumbs info={info} />
            <div className={styles.container}>
                <div className={styles.title__wrapper}>
                    <h1 className={styles.title}>
                        Расписание
                    </h1>
                </div>
                <div className={styles.numberWeek}>
                    <p>17 неделя, нечет.</p>
                </div>
                <div className={styles.topBlock}>
                    <div className={styles.week}>
                        <p className={styles.topBlock__title}>Неделя</p>
                        <BtnToggle variables={weekVariables} activeColor="#63C018" activeElement={activeWeek} setActiveElement={setActiveWeek} />
                    </div>
                    <div className={styles.groups}>
                        <p className={styles.topBlock__title}>Группа</p>
                        <BtnToggle variables={groupVariables} activeColor="#229FFF" activeElement={activeGroup} setActiveElement={setActiveGroup} />
                    </div>
                    <div className={styles.warningBlock}>
                        <Warning text="Выберите поток Soft-skills 1 марта с 10:00" />
                    </div>
                </div>
            </div>
        </>
    )
}