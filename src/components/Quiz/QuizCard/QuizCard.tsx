import React, { useContext, useState } from "react";
import { QuizContext } from "../../CreateLab/CreateLab";
import { Checkbox } from "../../UI/Checkbox/Checkbox"
import { Radio } from "../../UI/Radio/Radio";
import styles from "./QuizCard.module.css"

type Props = {
    question: string;
    multyple: boolean;
    answers: string[];
    id: number;
}

export const QuizCard: React.FC<Props> = ({ question, multyple, answers, id }) => {

    const { questionList, setQuestionList } = useContext(QuizContext)

    const changeName = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let newList = questionList.map((item: Props) => {
            if (item.id === Number(e.target.dataset.id)) {
                item.question = e.target.value;
                return item
            } else {
                return item
            }
        })
        setQuestionList(newList)
    }

    const changeAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
        const answerId = Number(e.target.dataset.aid);
        let newList = questionList.map((item: Props) => {
            if (item.id === Number(e.target.dataset.id)) {
                item.answers[answerId] = e.target.value;
                return item
            } else {
                return item
            }
        })
        setQuestionList(newList)
    }


    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <textarea
                    className={styles.question}
                    placeholder="Введите вопрос"
                    value={question}
                    onChange={changeName}
                    data-id={id}
                />

                <label className={styles.isMiltiply}>
                    <Checkbox /> Несколько ответов?
                </label>
            </div>
            <div className={styles.answers}>
                {answers.map((text, i) => {
                    return (
                        <div className={styles.answer}>
                            {multyple ? <Checkbox /> : <Radio name="answer" />}
                            <input
                                className={styles.answer_input}
                                placeholder="Введите вариант"
                                value={text}
                                onChange={changeAnswer}
                                data-aId={i}
                                data-id={id}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}