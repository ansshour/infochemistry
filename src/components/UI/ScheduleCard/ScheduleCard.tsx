import styles from "./ScheduleCard.module.css"
import teacherImg from "./res/teacher.svg"
import placeImg from "./res/place.svg"

type Place = {
    auditorium: string;
    address: string;
}

type Props = {
    time: string;
    name: string;
    teacher?: string;
    place?: Place;
    color?: string;
}


export const ScheduleCard: React.FC<Props> = ({ time, name, teacher, place, color }) => {
    return (
        <div className={styles.container} style={teacher !== undefined || place !== undefined ? { height: "100%" } : { height: "100.09px" }}>
            <div className={styles.leftLine} style={{ backgroundColor: `${color}` }}>
                <div className={styles.content}>
                    <p className={styles.time} style={{ color: `${color}` }}>{time}</p>
                    <p className={styles.name}>{name}</p>
                    {teacher !== undefined && (
                        <div className={styles.teacher}>
                            <img alt="teacherIcon" src={teacherImg} />
                            <p>{teacher}</p>
                        </div>
                    )}
                    {place !== undefined && (
                        <div className={styles.place}>
                            <img alt="teacherIcon" src={placeImg} />
                            <p>
                                <p>{place.auditorium}</p>
                                <p>{place.address}</p>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}