import { useState } from "react";
import { Checkbox } from "../../UI/Checkbox/Checkbox";
import { Radio } from "../../UI/Radio/Radio";
import styles from "./Question.module.css"

type Props = {
    title: string;
    number: number;
    manyAnswer: boolean;
    answers: string[];
}

export const Question: React.FC<Props> = ({ title, number, manyAnswer, answers }) => {

    const [activeRadioElement, setActiveRadioElement] = useState<number | null>(null)

    return (
        <div className={styles.container}>
            <p className={styles.title}>{number}.Вредными и опасными производственными факторами при проведении лабораторных и практических работ могут быть:</p>
            <ul className={styles.answersList}>
                {answers.map(item => (
                    <li>
                        {manyAnswer ? <Checkbox /> : <Radio name="question1" />}
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}