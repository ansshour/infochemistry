import { Breadcrumbs } from "../../UI/Breadcrumbs/Breadcrumbs"
import styles from "./VideoDetail.module.css"
import pdficon from "./res/pdficon.svg"
import downloadIcon from "./res/download.svg"

export const VideoDetail = () => {

    const info = [
        { name: "Главная страница", link: "/" },
        { name: "Студентам", link: "" },
        { name: "Видеолекции", link: "/video_lectures" },
    ]

    const data =
        { name: "Комплексные тригонометрические функции", video: "AOWg3-K24to", teacher: { name: "Бойцев Антон Александрович", photo: "#", post: "Кандидат физико-математических наук", email: ["boitsevanton@gmail.com", "boitsevanton@itmo.ru"] }, desc: "Тригонометри́ческие фу́нкции — элементарные функции, которые исторически возникли при рассмотрении прямоугольных треугольников и выражали зависимости длин сторон этих треугольников от острых углов при гипотенузе (или, что равнозначно, зависимость хорд и высот от центрального угла дуги в круге). Эти функции нашли широкое применение в самых разных областях науки. По мере развития математики определение тригонометрических функций было расширено, в современном понимании их аргументом может быть произвольное вещественное или комплексное число.", file: { name: "Комплексные тригонометрические функции.pdf", link: "#", weight: "1,47 Мб" } }
    return (
        <>
            <Breadcrumbs info={info} />
            <div className={styles.container}>
                <h1 className={styles.title}>
                    {data.name}
                </h1>
                <div className={styles.video}>
                    <iframe width="100%" height="630px" src={`https://www.youtube.com/embed/${data.video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <span className={styles.arrowRight}></span>
                    <span className={styles.arrowLeft}></span>
                </div>
                <p className={styles.teacherTitle}>Преподаватель</p>
                <div className={styles.teacherInfo}>
                    <div className={styles.photo} style={{ backgroundImage: `url(${data.teacher.photo})` }}>

                    </div>
                    <div className={styles.nameAndPost}>
                        <p className={styles.teacherName}>{data.teacher.name}</p>
                        <p className={styles.teacherPost}>{data.teacher.post}</p>
                    </div>
                    <div className={styles.emails}>
                        {data.teacher.email.map((email) => <p>{email}</p>)}
                    </div>
                </div>
                <div className={styles.desc_wrapp}>
                    <p className={styles.descTitle}>Описание</p>
                    <p className={styles.desc}>{data.desc}</p>
                </div>
                <div className={styles.materials_wrapp}>
                    <p className={styles.materialTitle}>Материалы</p>
                    <div className={styles.material}>
                        <div className={styles.first}>
                            <img src={pdficon} alt="pdficon" />
                            <p className={styles.fileName}>{data.file.name}</p>
                        </div>
                        <div className={styles.second}>
                            <p className={styles.weight}>{data.file.weight}</p>
                            <a href={data.file.link}><img alt="downloadIcon" src={downloadIcon} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}