import { useState } from "react";
import styles from "./Checkbox.module.css"
import activeIcon from "./res/active.svg"

type Props = {

}

export const Checkbox: React.FC<Props> = ({ }) => {

    return (
        <label>
            <input type="checkbox" hidden className={styles.realCheckbox}></input>
            <div
                className={styles.checkbox}>
                <img alt="active" src={activeIcon} className={styles.img} />
            </div>
        </label>
    )
}