import styles from "./Quiz.module.css"
import add from "./res/add.svg"
import delI from "./res/del.svg"
import img from "./res/image.svg"
import copy from "./res/copy.svg"
import { QuizCard } from "./QuizCard/QuizCard"
import { useContext } from "react"
import { QuizContext } from "../CreateLab/CreateLab"


export const Quiz = () => {



    const { questionList, setQuestionList } = useContext(QuizContext)
    console.log(questionList)

    return (
        <div className={styles.container}>
            <div className={styles.questionList}>
                {questionList.map(({ question, multyple, answers, id }: any) => <QuizCard question={question} multyple={multyple} answers={answers} id={id} />)}
            </div>
            <div className={styles.controller}>
                <img alt="add" src={add} onClick={() => { setQuestionList([...questionList, { question: "", multyply: true, answers: ["", ""], id: Number(`${questionList.length}`) }]) }} />
                <img alt="delI" src={delI} />
                <img alt="img" src={img} />
                <img alt="copy" src={copy} />
            </div>
        </div>
    )
}