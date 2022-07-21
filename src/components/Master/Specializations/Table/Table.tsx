import { Accordion } from "../../../UI/Accordion/Accordion"
import styles from "./Table.module.css"

export const Table: React.FC<any> = ({ data }) => {

    const classnames = [styles.first, styles.second, styles.third]

    return (
        <div className={styles.table}>
            {/* <div className={[styles.area, styles.first].join(" ")}>

            </div>
            <div className={[styles.area, styles.second].join(" ")}>

            </div>
            <div className={[styles.area, styles.third].join(" ")}>

            </div> */}
            {data.map((elem: any, i: number) => {
                return (
                    <div className={[styles.area, classnames[i]].join(" ")}>
                        <p className={styles.title}>{elem.title}</p>
                        <ul className={styles.list}>
                            {elem.desc.map((item: any) => {
                                return typeof item === "string" ? (
                                    <li className={styles.listItem}>{item}</li>
                                ) : <Accordion name={item.title} open={item.info} />
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}