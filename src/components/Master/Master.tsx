import { ProgramCard } from "../UI/ProgramCard/ProgramCard"
import { About } from "./About/About"
import styles from "./Master.module.css"

export const Master = () => {
    return (
        <>
            <div className={[styles.container, styles.top].join(" ")}>
                <div className={styles.title__wrapper}>
                    <h1 className={styles.title}>
                        Магистратура
                        в НОЦ Инфохимия
                    </h1>
                </div>
                <ProgramCard years="2 года" lang="ENG" seats={[26, 10]} studyProgramLink="#" format="Очное обучение" />
            </div>
            <About />
        </>
    )
}