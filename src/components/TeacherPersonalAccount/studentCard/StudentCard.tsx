import { Checkbox } from "../../UI/Checkbox/Checkbox"
import styles from "./StudentCard.module.css"
import downloadIcon from "./res/download.svg"


type Props = {
    name: string;
    group: string;
    isTrueQuestions: boolean;
    reportLink: string;
}

export const StudentCard: React.FC<Props> = ({ name, group, isTrueQuestions, reportLink }) => {
    return (
        <div className={styles.studentCard}>
            <div className={styles.fio}>
                <div className={styles.avatar}></div>
                <p className={styles.name}>{name}</p>
            </div>
            <p className={styles.group}>
                {group}
            </p>
            <p className={styles.isTrueQuestions}>{isTrueQuestions ? "да" : "нет"}</p>
            <div className={styles.downloadReport}>
                <a href={reportLink} download><img alt="download" src={downloadIcon} /></a>
            </div>
            <div>
                <Checkbox />
            </div>
        </div>
    )
}