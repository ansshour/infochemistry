import { useState } from "react";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import styles from "./VacancyCard.module.css"

type Props = {
    name: string;
    categories: string[];
    desc: string;
}

const dangerTextEnter = (text: string) => {
    return { __html: text };
}

export const VacancyCard: React.FC<Props> = ({ name, categories, desc }) => {

    const [modalActive, SetModalActive] = useState(false);

    return (
        <>
            <div className={styles.container}>
                <p className={styles.name}>{name}</p>
                <div className={styles.buttons}>
                    <button className={styles.employmentBtn}>{categories[0]}</button>
                    <button className={styles.workExperienceBtn}>{categories[1]}</button>
                </div>
                <p className={styles.desc} dangerouslySetInnerHTML={dangerTextEnter(desc)} />
                <div className={styles.footr}><span onClick={() => { SetModalActive(true) }}><Button>Подробнее</Button></span></div>
            </div>
            <Modal active={modalActive} setActive={SetModalActive}>
                <div className={styles.modal__container}>
                    <p className={styles.modal__title}>{name}</p>
                    <div className={styles.buttons}>
                        <button className={styles.employmentBtn}>{categories[0]}</button>
                        <button className={styles.workExperienceBtn}>{categories[1]}</button>
                    </div>
                    <p className={styles.desc__name} dangerouslySetInnerHTML={dangerTextEnter(desc)} />
                </div>
            </Modal>
        </>
    )
}