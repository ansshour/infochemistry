import { useContext, useState } from "react"
import styles from "./Quote.module.css"
import icon from "./res/icon.svg"
import { Modal } from "../../../UI/Modal/Modal"

type Props = {
    authors: string;
    name: string;
    place: string;
    code: string;
    gost_citation: string;
    mla_citation: string;
    asa_citation: string;
}

export const Quote: React.FC<Props> = ({ authors, name, place, code, gost_citation, mla_citation, asa_citation }) => {

    const [isModalActive, setIsModalActive] = useState(false)

    return (
        <>
            <div className={styles.container}>
                <p className={styles.top}>{authors}</p>
                <p className={styles.middle}>{name}</p>
                <div className={styles.bottom}>
                    <p className={styles.place}>{place}</p>
                    <div className={styles.btn} onClick={() => { setIsModalActive(true) }}>
                        <img alt="icon" src={icon} />
                        <p>Цитировать</p>
                    </div>
                    <p className={styles.code}>{code}</p>
                </div>
            </div>
            <Modal active={isModalActive} setActive={setIsModalActive} withCloseBtn={false}>
                <div className={styles.modalContainer}>
                    <div className={styles.title__wrapper}>
                        <p className={styles.title}>
                            Публикации
                        </p>
                    </div>
                    <div className={styles.quote__modal}>
                        <p>ГОСТ</p>
                        <p>{gost_citation}</p>
                    </div>
                    <div className={styles.quote__modal}>
                        <p>MLA</p>
                        <p>{mla_citation}</p>
                    </div>
                    <div className={styles.quote__modal}>
                        <p>APA</p>
                        <p>{asa_citation}</p>
                    </div>
                </div>
            </Modal>
        </>
    )
}