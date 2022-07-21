import { useContext, useState } from "react"
import styles from "./Quote.module.css"
import icon from "./res/icon.svg"
import { PublicationsContext } from "../../Publications"
import { Modal } from "../../../UI/Modal/Modal"

type Props = {
    authors: string;
    name: string;
    place: string;
    code: string;
}

export const Quote: React.FC<Props> = ({ authors, name, place, code }) => {

    const { modalData } = useContext(PublicationsContext);
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
                        <p>{modalData.gost}</p>
                    </div>
                    <div className={styles.quote__modal}>
                        <p>MLA</p>
                        <p>{modalData.mla}</p>
                    </div>
                    <div className={styles.quote__modal}>
                        <p>APA</p>
                        <p>{modalData.apa}</p>
                    </div>
                </div>
            </Modal>
        </>
    )
}