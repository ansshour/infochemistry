import { useState } from "react"
import styles from "./Radio.module.css"


type Props = {
    name: string;
    checked?: boolean;
}


export const Radio: React.FC<Props> = ({ name, checked }) => {

    const [active, setActive] = useState(false)

    return (
        <label>
            <div className={styles.radio}>
                <input type="radio" hidden className={styles.radioReal} name={name} checked={checked} />
                <div className={styles.internalRadio}>
                </div>
            </div >
        </label>
    )
}