import styles from "./Select.module.css"
import arrow from "./res/arrow.svg"
import React, { MouseEvent, useState } from "react"
import { useEffect } from "react";

type Props = {
    items: string[];
    style?: React.CSSProperties;
    multiple?: boolean;
    activeEl: string[];
    setActiveEl: (arg: string[]) => void;
}

export const Select: React.FC<Props> = ({ style, multiple, items, activeEl, setActiveEl }) => {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (!multiple) {
            setActiveEl([items[0]])
        }
    }, [])

    const clickHandler = (item: string) => {
        if (multiple) {
            if (!activeEl.includes(item)) {
                setActiveEl([...activeEl, item]);
            } else {
                const newElems = activeEl.filter(elem => elem !== item)
                setActiveEl(newElems)
            }
        } else {
            setActiveEl([item])
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.select} onClick={() => { setIsOpen(!isOpen) }} style={{ ...style }}>
                <span className={styles.elems}>
                    {activeEl.map((elem, i) => <span key={i}>{elem}</span>)}
                </span>
                <img alt="arrow" src={arrow} className={styles.arrow} />
            </div>
            <div className={isOpen ? [styles.open, styles.active].join(" ") : styles.open}>
                {items.map((item, i) => <p
                    key={i}
                    data-name={item}
                    onClick={() => { clickHandler(item) }}
                    style={activeEl.includes(item) ? { backgroundColor: "rgba(25, 118, 210, 0.12)" } : {}}
                >{item}</p>)}
            </div>
        </div >
    )
}