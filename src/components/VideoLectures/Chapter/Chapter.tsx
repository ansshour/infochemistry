import { VideoCard } from "../../UI/VideoCard/VideoCard";
import styles from "./Chapter.module.css"

type Videos = {
    image: string;
    name: string;
    authorName: string;
    date: string;
    time: string;
    id?: number;
}

type Props = {
    title: string;
    icon: string;
    numberVideos: number;
    videos: Videos[];
}


export const Chapter: React.FC<Props> = ({ title, icon, numberVideos, videos }) => {

    const clickChangeUrl = (id: number) => {
        window.location.href = window.location.href + "/" + id;
    }

    return (
        <div className={styles.container}>
            <div className={styles.topBlock}>
                <div className={styles.title__wrapper}>
                    <img src={icon} alt="chapterIcon" className={styles.icon} />
                    <p className={styles.title}>{title}</p>
                    <p className={styles.numberVideos}>{numberVideos}</p>
                </div>
                <span className={styles.moreBtn}>еще</span>
            </div>
            <div className={styles.videosContainer}>
                {videos.map(({ image, name, authorName, date, time, id }) => <VideoCard image={image} name={name} authorName={authorName} date={date} time={time} id={id} />)}
            </div>
        </div>
    )
}