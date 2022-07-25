import styles from "./ScheduleCard.module.css"
import teacherImg from "./res/teacher.svg"
import placeImg from "./res/place.svg"
import { useState } from "react";
import { FaClock } from "react-icons/fa";

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

    const [isShowDetailInfo, setIsShowDetailInfo] = useState(false);

    const timeToFormat = (time: string) => {
        let timeSplited = time.split(":");
        let nextTimeInMinutes = Number(timeSplited[0]) * 60 + Number(timeSplited[1]) + 90;
        return `${time} - ${Math.floor(nextTimeInMinutes / 60)}:${nextTimeInMinutes % 60}`
    }

    return (
        <>
            <div className={styles.container}
                onMouseLeave={() => {
                    setIsShowDetailInfo(false)
                }}
                style={teacher !== undefined || place !== undefined ? { height: "100%" } : { height: "100.09px" }}
                onMouseEnter={() => {
                    setIsShowDetailInfo(true)
                }
                }>
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
                {isShowDetailInfo &&
                    <div className={styles.detailInfo}>
                        <div className={styles.type__detail} style={{ backgroundColor: `${color}` }}>Лекция</div>
                        <p className={styles.name__detail}>{name}</p>
                        {teacher !== undefined && (
                            <div className={styles.teacher__detail}>
                                <img alt="teacherIcon" src={teacherImg} />
                                <p>{teacher}</p>
                            </div>
                        )}
                        {place !== undefined && (
                            <div className={styles.place__detail}>
                                <img alt="teacherIcon" src={placeImg} className={styles.icon__detail} />
                                <p>
                                    <p>{place.auditorium}</p>
                                    <p>{place.address}</p>
                                </p>
                            </div>
                        )}
                        <div className={styles.time__detail}>
                            <FaClock size="13" />
                            <p>{timeToFormat(time)}</p>
                        </div>
                    </div>}
            </div>
        </>
    )
}