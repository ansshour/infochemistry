import React, { useContext, useState } from "react";
import { QuizContext } from "../../CreateLab/CreateLab";
import { Checkbox } from "../../UI/Checkbox/Checkbox";
import { Radio } from "../../UI/Radio/Radio";
import styles from "./QuizCard.module.css"

type Answer = {
    answer: string;
    isCorrect: boolean;
}

type Props = {
    id: number;
    question: string;
    multyple: boolean;
    answers: Answer[];
}


type Question = {
    id: number;
    question: string;
    multyple: boolean;
    answers: Answer[];
}

export const QuizCard: React.FC<Props> = ({ id, question, multyple, answers }) => {

    const { questionList, setQuestionList, activeQuestion, setActiveQuestion } = useContext(QuizContext);

    const changeQuestion = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

        setQuestionList((questionList: Question[]) => {
            return (
                questionList.map((question: Question) => {
                    if (question.id === id) {
                        question.question = e.target.value
                    }
                    return question
                })
            )
        })

    }

    const changeMultiple = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuestionList((questionList: Question[]) => {
            return (
                questionList.map((question: Question) => {
                    if (question.id === id) {
                        question.multyple = !question.multyple;
                    }
                    return question
                })
            )
        })
    }

    const changeAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuestionList((questionList: Question[]) => {
            return (
                questionList.map((question: Question) => {
                    if (question.id === id) {
                        question.answers.map((answer: Answer, i: number) => {
                            console.log(String(id) + String(i), " /// ", Number(e.target.dataset.id))
                            if (String(id) + String(i) === e.target.dataset.id) {
                                answer.answer = e.target.value;
                                return answer
                            }
                        })
                    }
                    return question
                })
            )
        })
    }

    const addAnswer = (e: React.MouseEvent<HTMLSpanElement>) => {
        setQuestionList((questionList: Question[]) => {
            return (
                questionList.map((question: Question) => {
                    if (question.id === id) {
                        question.answers = [...question.answers, { answer: "", isCorrect: false }]
                    }
                    return question
                })
            )
        })
    }



    return (
        <div className={styles.container}
            style={activeQuestion === id ? { boxShadow: " 0px 0px 6px 4px rgba(169, 236, 255, 0.6)" } : {}}
            onClick={() => { setActiveQuestion(id) }}>
            <div className={styles.top}>
                <textarea value={question} onChange={changeQuestion} className={styles.question} placeholder="Введите вопрос" />
                <label className={styles.isMultiply}>
                    <Checkbox
                        checked={multyple} setChecked={changeMultiple} />
                    <p>Несколько ответов</p>
                </label>
            </div>
            <div className={styles.answers} style={{ marginTop: "20px" }}>
                {answers.map(({ answer, isCorrect }: Answer, i: number) => (
                    <div className={styles.answer}>
                        {multyple ? <Checkbox /> : <Radio name="question" />}
                        <input
                            value={answer}
                            onChange={changeAnswer}
                            data-id={id + i.toString()}
                            placeholder="Добавить вариант" />
                    </div>
                ))}
                <div
                    className={styles.addAnswer}
                    onClick={addAnswer}>Добавить вариант ответа</div>
            </div>
        </div >
    )
}