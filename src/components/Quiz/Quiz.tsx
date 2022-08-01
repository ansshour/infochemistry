import { useContext } from "react"
import { QuizContext } from "../CreateLab/CreateLab"
import styles from "./Quiz.module.css"
import { QuizCard } from "./QuizCard/QuizCard"
import add from "./res/add.svg";
import del from "./res/del.svg";
import photo from "./res/photo.svg";
import copy from "./res/copy.svg";

type Answer = {
    answer: string;
    isCorrect: boolean;
}

type Question = {
    id: number;
    question: string;
    multyple: boolean;
    answers: Answer[];
}

export const Quiz = () => {

    const { questionList, setQuestionList, activeQuestion } = useContext(QuizContext);

    const addQuestion = () => {
        setQuestionList([...questionList, { id: questionList.length, question: "", multyple: false, answers: [{ answer: "", isCorrect: false }] }])
    }

    const deleteQuestion = () => {
        setQuestionList((questionList: Question[]) => questionList.filter((question) => question.id !== activeQuestion))
    }

    const copyQuestion = () => {
        let question = questionList.filter((question: Question) => question.id === activeQuestion)
        question = question[0];
        question = { ...question, id: questionList.length };
        setQuestionList([...questionList, question])
        console.log(questionList)
    }

    return (
        <div className={styles.container}>
            <div className={styles.questions}>
                {questionList.map(({ question, id, multyple, answers }: Question) => {
                    return (
                        <QuizCard question={question} id={id} multyple={multyple} answers={answers} />
                    )
                })}
            </div>
            <div className={styles.control}>
                <img alt="add" src={add} onClick={addQuestion} />
                <img alt="del" src={del} onClick={deleteQuestion} />
                <img alt="photo" src={photo} />
                <img alt="copy" src={copy} onClick={copyQuestion} />
            </div>
        </div>
    )
}