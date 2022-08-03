import { useState } from "react";
import { Button } from "../Button/Button"
import { Modal } from "../Modal/Modal";
import styles from "./EquipmentCard.module.css"

type Props = {
    image: string;
    title: string;
    description: string;
    fullDesc?: string;
}

export const EquipmentCard: React.FC<Props> = ({ image, title, description, fullDesc }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={image} alt="equipment" />
                </div>
                <div className={styles.info}>
                    <div className={styles.top}>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.desc}>{description}</p>
                    </div>
                    <div className={styles.btn} onClick={() => { setIsModalOpen(true) }}>
                        <Button color="white" width="138" height="33">Подробнее</Button>
                    </div>
                </div>
            </div >
            <Modal active={isModalOpen} setActive={setIsModalOpen} >
                <div className={styles.modal__container}>
                    <p className={styles.modal__title}>{title}</p>
                    <div className={styles.modalImageBlock}>
                        <img className={styles.modal__image} src={image} alt="equipment" width={415} />
                    </div>
                    <p className={styles.desc__name}>Описание</p>
                    <div className={styles.descBlock}>
                        <p className={styles.modal__desc}>{fullDesc}</p>
                    </div>
                </div>
            </Modal>
        </>
    )
}