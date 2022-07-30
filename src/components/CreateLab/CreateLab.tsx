import { Breadcrumbs } from "../UI/Breadcrumbs/Breadcrumbs"
import { Button } from "../UI/Button/Button"
import { Input } from "../UI/Input/Input"
import { Select } from "../UI/Select/Select"
import styles from "./CreateLab.module.css"
import { Editor } from "@tinymce/tinymce-react"
import { createContext, useRef, useState } from "react"
import { Quiz } from "../Quiz/Quiz"

const info = [
    { name: "ЛК преподавателя", link: "/teacher_personal_account" },
    { name: "Создание новой ЛР", link: "" },
]

type Questions = {
    question: string;
    multyple: boolean;
    answers: string[];
}

export const QuizContext = createContext<any>(null)

export const CreateLab = () => {
    const questions = [
        { question: "Вредными и опасными производственными факторами при проведении лабораторных и практических работ могут быть:", multyple: true, answers: ["Порезы рук при небрежном обращении с лабораторной посудой;"], id: 0 },
        {
            question: "Вредными и опасными производственными факторами при проведении лабораторных и практических работ могут быть:", multyple: false,
            answers: ["2Порезы рук при небрежном обращении с лабораторной посудой;", "3Порезы рук при небрежном обращении с лабораторной посудой;"], id: 1
        },
    ]
    const editorRef = useRef<any>();
    const [groupList, setGroupList] = useState<string[]>([])
    const [questionList, setQuestionList] = useState<Questions[]>(questions)
    return (
        <>
            <QuizContext.Provider value={{ questionList: questionList, setQuestionList: setQuestionList }}>
                <Breadcrumbs info={info} />
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <div className={styles.editor}>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                initialValue="<p>This is the initial content of the editor.</p>"
                                init={{
                                    height: 460,
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar: 'undo redo | formatselect | ' +
                                        'bold italic backcolor | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat | help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                            />
                        </div>
                        <div className={styles.editInfo}>
                            <div className={styles.name}>
                                <p className={styles.title}>Название</p>
                                <Input placeholder="Название" style={{ height: "38px", fontSize: "18px" }} />
                            </div>
                            <div className={styles.group}>
                                <p className={styles.title}>Группы</p>
                                <Select items={["03144", "03145", "03146"]} multiple activeEl={groupList} setActiveEl={setGroupList} />
                            </div>
                            <div className={styles.quiz}>
                                <div className={styles.title}>Квиз</div>
                                <Quiz />
                            </div>
                        </div>
                    </div>
                    <Button style={{ margin: "30px auto", marginBottom: "0", padding: "7px 35px" }}>Сохранить</Button>
                </div>
            </QuizContext.Provider>
        </>
    )
}