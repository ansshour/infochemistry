import { useState } from "react";
import styles from "./Accordion.module.css"


type Props = {
    name: string;
    open: string;
}

export const Accordion: React.FC<Props> = ({ name, open }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.accordion} onClick={() => { setIsOpen(!isOpen) }}>
                <img className={isOpen ? [styles.arrow, styles.open].join(" ") : styles.arrow} src="./images/arrow.svg" />
                <p>{name}</p>
            </div>
            <div className={isOpen ? [styles.content, styles.show].join(" ") : styles.content}>
                <p className={styles.text}>{open}</p>
            </div>
        </div >
    )
}