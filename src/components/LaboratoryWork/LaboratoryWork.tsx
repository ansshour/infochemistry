import React, { useEffect, useRef, useState } from "react";
import { Accordion } from "../UI/Accordion/Accordion"
import { Button } from "../UI/Button/Button";
import styles from "./LaboratoryWork.module.css"
import selected from "./res/selected.svg"
import deleteIcon from "./res/delete.svg"
import downloadIcon from "./res/download.svg"
import accept from "./res/accept.svg";
import { Question } from "./Question/Question";


type List = {
    item: string;
    id: number;
}


export const LaboratoryWork = () => {


    const loadRef = useRef<HTMLInputElement | null>(null)
    const [activeLab, setActiveLab] = useState(0);
    const [reportState, setReportState] = useState<"notLoad" | "load" | "send">("notLoad")
    const [file, setFile] = useState<any>()

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

    const labsList = [
        { name: "Аналитическая химия", list: list1 },
        { name: "Органическая химия", list: list2 },
        { name: "Супрамолекулярная химия", list: list3 },
        { name: "Общая химия", list: list4 },
    ]

    const questions = [
        { number: 1, title: "При возникновении в кабинете во время занятий чрезвычайных ситуаций", manyAnswer: true, answers: ["покинуть здание по плану эвакуации;", "не допускать паники и подчиняться только указаниям учителя;", "погуглить, что делать в данной ситуации;",] },
        { number: 2, title: "Вредными и опасными производственными факторами при проведении лабораторных и практических работ могут быть:", manyAnswer: false, answers: ["Порезы рук при небрежном обращении с лабораторной посудой;", "Химические ожоги при работе с химреактивами;", "Испорченные реагенты;", "Отравления токсичными веществами;"] }
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

    useEffect(() => {
        console.log(file)
    }, [file])

    const onChangeInputLoadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = { ...e.target.files, date: new Date().toLocaleString() }
            setFile(file)
            setReportState("load")
        }

    }

    const loadBtnClick = () => {
        loadRef.current?.click();
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <p className={styles.title}>Онлайн-лаборатория</p>
                    {labsList.map(({ name, list }) => <Accordion name={name}>{getList(list)}</Accordion>)}

                </div>
                <div className={styles.main__wrapper}>
                    <div className={styles.main}>
                        <div className={styles.lab}></div>
                        <div className={styles.quiz}>
                            <p className={styles.quiz__title}>Вопросы к работе</p>
                            <div className={styles.questions}>
                                {questions.map(({ number, title, manyAnswer, answers }) => <Question number={number} title={title} manyAnswer={manyAnswer} answers={answers} />)}
                            </div>

                            <Button style={{ margin: "30px auto", marginBottom: "0", padding: "7px 35px" }}>Отправить</Button>


                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <p className={styles.title}>Отчет</p>
                    {reportState === "notLoad" && (
                        <>
                            <p className={styles.fileNotFound}>Файл не найдет</p>
                            <Button style={{ padding: "7px 35px" }} onClick={loadBtnClick}>Загрузить</Button>
                            <input type="file" ref={loadRef} onChange={onChangeInputLoadFile} hidden />
                        </>
                    )}
                    {reportState === "load" && (
                        <>
                            <div className={styles.loadedFileInfo}>
                                <div className={styles.area}>
                                    <p>{file[0].name}</p>
                                </div>
                                <div className={styles.delete} onClick={() => { setReportState("notLoad") }}>
                                    <img alt="delete" src={deleteIcon} width={12} />
                                </div>
                            </div>
                            <p className={styles.date}>Последняя загрузка {file.date}</p>
                            <Button style={{ padding: "7px 35px" }} onClick={() => { setReportState("send") }}>Загрузить</Button>
                        </>
                    )}
                    {reportState === "send" && (
                        <>
                            <div className={styles.loadedFileInfo}>
                                <div className={styles.area}>
                                    <p>{file[0].name}</p>
                                </div>
                                <div className={styles.delete} onClick={() => { setReportState("notLoad") }}>
                                    <img alt="download" src={downloadIcon} width={9} style={{ transform: "translateX(-1.5px)" }} />
                                </div>
                                <div className={styles.sent}>
                                    <img src={accept} alt="accept" />
                                    <p>Сдано/07.07.2022</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}