import { useState } from "react";
import styles from "./Checkbox.module.css"
import activeIcon from "./res/active.svg"

type Props = {

}

export const Checkbox: React.FC<Props> = ({ }) => {

    const [active, setActive] = useState(false)

    return (
        <div
            className={active ? [styles.checkbox, styles.active].join(" ") : styles.checkbox}
            onClick={() => { setActive(!active) }}
        >
            <img alt="active" src={activeIcon} style={active ? { opacity: "1" } : {}} className={styles.img} />
        </div>
    )
}