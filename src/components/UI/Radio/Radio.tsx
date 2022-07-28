import { useState } from "react"
import styles from "./Radio.module.css"



export const Radio = () => {


    const [active, setActive] = useState(false)

    return (
        <div className={styles.radio}
            onClick={() => { setActive(!active) }}>
            <div className={active ? [styles.internalRadio, styles.active].join(" ") : styles.internalRadio}>

            </div>
        </div>
    )
}