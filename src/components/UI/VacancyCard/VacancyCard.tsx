import { useState } from "react";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import styles from "./VacancyCard.module.css"

type Props = {
    name: string;
    categories: string[];
    desc: string;
    about?: string;
}

const dangerTextEnter = (text: string) => {
    return { __html: text };
}

export const VacancyCard: React.FC<Props> = ({ name, categories, desc, about }) => {

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
                    <div className={styles.line}></div>
                    <p className={styles.title__about}>О центре</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quod, maxime accusantium necessitatibus harum reiciendis aliquam ut nobis. Eos nisi minus earum ullam quasi pariatur, amet repudiandae? Totam, vero sapiente.</p>
                    <div className={styles.line}></div>
                    <p className={styles.title__about}>Научная группа: Хемометрика</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quod, maxime accusantium necessitatibus harum reiciendis aliquam ut nobis. Eos nisi minus earum ullam quasi pariatur, amet repudiandae? Totam, vero sapiente.</p>
                    <div className={styles.line}></div>
                    <p className={styles.title__about}>Идеальный кандидат</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quod, maxime accusantium necessitatibus harum reiciendis aliquam ut nobis. Eos nisi minus earum ullam quasi pariatur, amet repudiandae? Totam, vero sapiente.</p>
                    <div className={styles.line}></div>
                    <p className={styles.title__about}>Условия</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quod, maxime accusantium necessitatibus harum reiciendis aliquam ut nobis. Eos nisi minus earum ullam quasi pariatur, amet repudiandae? Totam, vero sapiente.</p>
                </div>
            </Modal>
        </>
    )
}