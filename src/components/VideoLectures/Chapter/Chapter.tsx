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

const lang = localStorage.getItem("i18nextLng");

export const Chapter: React.FC<any> = ({ title, icon, numberVideos, videos }) => {

    console.log(title, numberVideos, videos)

    return (
        <div className={styles.container}>
            <div className={styles.topBlock}>
                <div className={styles.title__wrapper}>
                    {/* <img src={icon} alt="chapterIcon" className={styles.icon} /> */}
                    <p className={styles.title}>{title}</p>
                    <p className={styles.numberVideos}>{numberVideos}</p>
                </div>
                <span className={styles.moreBtn}>еще</span>
            </div>
            <div className={styles.videosContainer}>
                {videos.map(({ preview, name, name_eng, teacher, updated_at, id }: any) => <VideoCard
                    image={preview}
                    name={lang === "ru" ? name : name_eng}
                    authorName={lang === "ru" ? `${teacher.last_name} ${teacher.first_name} ${teacher.middle_name}` : `${teacher.last_name_eng} ${teacher.first_name_eng} ${teacher.middle_name_eng}`}
                    date={updated_at}
                    id={id} />)}
            </div>
        </div>
    )
}