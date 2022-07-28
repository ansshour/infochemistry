import React, { useEffect, useRef, useState } from "react";
import { Accordion } from "../UI/Accordion/Accordion"
import { Button } from "../UI/Button/Button";
import styles from "./TeacherPersonalAccount.module.css"
import selected from "./res/selected.svg"
import { SearchInput } from "../UI/SearchInput/SearchInput";
import { StudentCard } from "./studentCard/StudentCard";


type List = {
    item: string;
    id: number;
}


export const TeacherPersonalAccount = () => {


    const loadRef = useRef<HTMLInputElement | null>(null)
    const [activeLab, setActiveLab] = useState(0);

    const list1 = [
        { item: "Определение содержания железа (III) в растворе", id: 0 },
        { item: "Анализ смеси катионов III группы", id: 1 },
        { item: "Анализ смеси сухих солей", id: 2 },
        { item: "Анализ смеси катионов III группы", id: 3 }
    ]
    const list2 = [
        { item: "Определение содержания железа (III) в растворе", id: 4 },
        { item: "Анализ смеси катионов III группы", id: 5 },
        { item: "Анализ смеси сухих солей", id: 6 },
        { item: "Анализ смеси катионов III группы", id: 7 }
    ]
    const list3 = [
        { item: "Определение содержания железа (III) в растворе", id: 8 },
        { item: "Анализ смеси катионов III группы", id: 9 },
        { item: "Анализ смеси сухих солей", id: 10 },
        { item: "Анализ смеси катионов III группы", id: 11 }
    ]
    const list4 = [
        { item: "Определение содержания железа (III) в растворе", id: 12 },
        { item: "Анализ смеси катионов III группы", id: 13 },
        { item: "Анализ смеси сухих солей", id: 14 },
        { item: "Анализ смеси катионов III группы", id: 15 }
    ]

    const getList = (items: List[]) => {
        return (
            <ul className={styles.labsList}>
                {items.map(({ item, id }, i: number) =>
                    <li
                        key={i}
                        style={activeLab === id ? { color: "#4B960F" } : {}}
                        onClick={() => { setActiveLab(id) }}
                    >
                        <img alt="selected" src={selected} style={activeLab === id ? { visibility: "visible" } : { visibility: "hidden" }} />
                        {`${i + 1}.${item}`}
                    </li>)}
            </ul>
        )
    }


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <p className={styles.title}>Онлайн-лаборатория</p>
                    <Accordion name="Аналитическая химия" type={2} style={{ fontSize: "14px" }}>
                        {getList(list1)}
                    </Accordion>
                    <Accordion name="Органическая химия" type={2} style={{ fontSize: "14px" }}>
                        {getList(list2)}
                    </Accordion>
                    <Accordion name="Супрамолекулярная химия" type={2} style={{ fontSize: "14px" }}>
                        {getList(list3)}
                    </Accordion>
                    <Accordion name="Общая химия" type={2} style={{ fontSize: "14px" }}>
                        {getList(list4)}
                    </Accordion>

                    <Button style={{ padding: "7px 35px", marginTop: "40px", width: "200px" }}>Добавить ЛР</Button>
                </div>
                <div className={styles.wrapper__main}>
                    <div className={styles.main}>
                        <div className={styles.top}>
                            <p className={styles.title__main}>Успеваемость</p>
                            <SearchInput
                                style={{ maxWidth: "250px", justifySelf: "end", borderRadius: "20px" }}
                                placeholder="Поиск студента"
                            />
                        </div>
                        <div className={styles.table}>
                            <div className={styles.tableHead}>
                                <p className={styles.headTable}>ФИО</p>
                                <p className={styles.headTable}>Группа</p>
                                <p className={styles.headTable}>Вопросы сданы</p>
                                <p className={styles.headTable}>Скачать отчет</p>
                                <p className={styles.headTable}>Отметка о сдаче</p>
                            </div>
                            <StudentCard name="Абдуллаев Артур Азизович" group="O3144" isTrueQuestions={true} reportLink={"#"} />
                            <StudentCard name="Абдуллаев Артур Азизович" group="O3144" isTrueQuestions={true} reportLink={"#"} />
                            <StudentCard name="Абдуллаев Артур Азизович" group="O3144" isTrueQuestions={true} reportLink={"#"} />
                            <StudentCard name="Абдуллаев Артур Азизович" group="O3144" isTrueQuestions={true} reportLink={"#"} />
                        </div>

                    </div>
                </div>
                <div className={styles.right}>
                    <p className={styles.title}>Успеваемость</p>
                    <Button style={{ padding: "7px 35px" }}>Скачать таблицу</Button>
                </div>
            </div>
        </div >
    )
}