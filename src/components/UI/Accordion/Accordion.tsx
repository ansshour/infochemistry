import { useState } from "react";
import styles from "./Accordion.module.css"

type Props = {
    name: string;
    open?: string;
    type?: number;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export const Accordion: React.FC<Props> = ({ name, open, type, style, children }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container} style={{ ...style }}>
            <div className={styles.accordion}
                onClick={() => { setIsOpen(!isOpen) }}
                style={type === 2 ? { justifyContent: "space-between" } : {}}>
                <img
                    className={isOpen ? [styles.arrow, styles.open].join(" ") : styles.arrow}
                    src="./images/arrow.svg"
                    alt="arrow"
                    style={type === 2 ? { order: "1" } : {}}
                />
                <p>{name}</p>
            </div>
            <div className={isOpen ? [styles.content, styles.show].join(" ") : styles.content}>
                {children ? (
                    <p className={styles.text}>{children}</p>
                ) : (
                    <p className={styles.text}>{open}</p>
                )}
            </div>
        </div >
    )
}