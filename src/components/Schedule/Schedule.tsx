import { useState } from "react"
import { Breadcrumbs } from "../UI/Breadcrumbs/Breadcrumbs"
import { BtnToggle } from "../UI/BtnToggle/BtnToggle"
import { ScheduleCard } from "../UI/ScheduleCard/ScheduleCard"
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

    const weeks = [
        { rus: "Понедельник", id: 0 },
        { rus: "Вторник", id: 1 },
        { rus: "Среда", id: 2 },
        { rus: "Четверг", id: 3 },
        { rus: "Пятница", id: 4 },
        { rus: "Суббота", id: 5 },
    ]

    const times = [
        { time: "8:20", id: 0 },
        { time: "10:00", id: 2 },
        { time: "11:40", id: 3 },
        { time: "13:30", id: 4 },
        { time: "15:20", id: 5 },
        { time: "17:00", id: 6 },
        { time: "18:40", id: 7 },
        { time: "20:20", id: 8 },
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
                <div className={styles.scheaduleWrapper}>
                    <div className={styles.Weeks}>
                        {weeks.map(({ rus }) => <p>{rus}</p>)}
                    </div>
                    <p className={styles.timeWrite}>Время</p>
                    <div className={styles.times}>
                        {times.map(({ time }) => <p>{time}</p>)}
                    </div>
                    <div className={styles.scheduleGrid}>
                        <div className={styles.dayOfWeek}>
                            <div className={styles.area}><ScheduleCard time="8:20" name="Неорганическая химия" teacher="Скорб Екатерина Владимировна" place={{ auditorium: "ауд.1123", address: "ул.Ломоносова, 9" }} color="#A50AFF" /></div>
                            <div className={styles.area}><ScheduleCard time="10:00" name="Неорганическая химия" teacher="Скорб Екатерина Владимировна" place={{ auditorium: "ауд.1123", address: "ул.Ломоносова, 9" }} color="#A50AFF" /></div>
                            <div className={styles.area}><ScheduleCard time="11:40" name="Неорганическая химия" teacher="Скорб Екатерина Владимировна" place={{ auditorium: "ауд.1123", address: "ул.Ломоносова, 9" }} color="#A50AFF" />
                                <ScheduleCard time="11:40" name="Неорганическая химия" teacher="Скорб Екатерина Владимировна" place={{ auditorium: "ауд.1123", address: "ул.Ломоносова, 9" }} color="#A50AFF" /></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                        </div>
                        <div className={styles.dayOfWeek}>
                            <div className={styles.area}></div>
                            <div className={styles.area}><ScheduleCard time="10:00" name="Неорганическая химия" teacher="Скорб Екатерина Владимировна" place={{ auditorium: "ауд.1123", address: "ул.Ломоносова, 9" }} color="#0091FF" /></div>
                            <div className={styles.area}><ScheduleCard time="11:40" name="Дополнительные главы линейной алгебры" teacher="Тушавин Глеб Владимирович" place={{ auditorium: "ауд.1320", address: "ул.Ломоносова, 9" }} color="#F7B500" /></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                        </div>
                        <div className={styles.dayOfWeek}>
                            <div className={styles.area}><ScheduleCard time="8:20" name="Физика" place={{ auditorium: "ауд.543Б", address: "Биржевая линия, 16" }} color="#0091FF" /></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                        </div>
                        <div className={styles.dayOfWeek}>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}><ScheduleCard time="11:40" name="Молекулярное моделирование и машинное обучение" teacher="Нестеров Павел Вячеславович" place={{ auditorium: "ауд.1123", address: "ул.Ломоносова, 9" }} color="#F7B500" /></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                        </div>
                        <div className={styles.dayOfWeek}>
                            <div className={styles.area}><ScheduleCard time="8:20" name="История" color="#0091FF" /></div>
                            <div className={styles.area}><ScheduleCard time="10:00" name="Программирование" teacher="Блохина Елена Николаевна" place={{ auditorium: "ауд.304", address: "Кронверский, 49" }} color="#A50AFF" /></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                        </div>
                        <div className={styles.dayOfWeek}>
                            <div className={styles.area}><ScheduleCard time="8:20" name="Программирование" teacher="Блохина Елена Николаевна" place={{ auditorium: "ауд.304", address: "Кронверский, 49" }} color="#A50AFF" /></div>
                            <div className={styles.area}>
                                <ScheduleCard time="10:00" name="Программирование" teacher="Блохина Елена Николаевна" place={{ auditorium: "ауд.304", address: "Кронверский, 49" }} color="#A50AFF" />
                                {/* <ScheduleCard time="10:00" name="Программирование" teacher="Блохина Елена Николаевна" place={{ auditorium: "ауд.304", address: "Кронверский, 49" }} color="#A50AFF" /> */}
                            </div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                            <div className={styles.area}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}