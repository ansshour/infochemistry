import styles from "./ProgramCard.module.css"
import { AiOutlinePaperClip } from "react-icons/ai";

type Props = {
    years: string;
    lang: string;
    seats: number[];
    studyProgramLink: string;
    format: string;
    programName?: string;
}

export const ProgramCard: React.FC<Props> = ({ years, lang, seats, studyProgramLink, format, programName }) => {
    return (
        <div className={styles.container}>
            <div className={styles.group}>
                <p className={styles.main}>{years}</p>
                <p className={styles.desc}>{format}</p>
            </div>
            <div className={styles.group}>
                <p className={styles.lang}>{lang}</p>
                <p className={styles.desc}>Язык обучения</p>
            </div>
            <div className={styles.group}>
                <p className={styles.main}>Места</p>
                <p className={styles.desc}>
                    <p>{`${seats[0]} - бюджетных`}</p>
                    <p>{`${seats[1]} - контрактных`}</p>
                </p>
            </div>
            <div className={styles.group}>
                <p className={styles.main}>{programName || "Учебный план"}</p>
                <div className={styles.studyProgramm}><a className={styles.desc} href={studyProgramLink}><AiOutlinePaperClip size="15" style={{ fill: "gray", marginRight: "5px" }} />Ссылка</a></div>
            </div>
        </div>
    )
}