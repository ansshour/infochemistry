import { Breadcrumbs } from "../../UI/Breadcrumbs/Breadcrumbs"
import styles from "./VideoDetail.module.css"
import pdficon from "./res/pdficon.svg"
import downloadIcon from "./res/download.svg"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export const VideoDetail = () => {

    const lang = localStorage.getItem("i18nextLng");

    let { id } = useParams();

    const info = [
        { name: "Главная страница", link: "/" },
        { name: "Студентам", link: "" },
        { name: "Видеолекции", link: "/video_lectures" },
    ]

    const [data, setData] = useState<any>({})

    const getVideoData = async () => {
        const data = await fetch(`http://78.140.243.10/api/lectures/${id}/`);
        const response = await data.json();
        setData(response)
    }

    useEffect(() => {
        getVideoData()
    }, [])

    return (
        <>
            {Object.keys(data).length ? (
                <>
                    <Breadcrumbs info={info} />
                    <div className={styles.container}>
                        <h1 className={styles.title}>
                            {lang === "ru" ? data.name : data.name_eng}
                        </h1>
                        <div className={styles.video}>
                            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${data.link.split("/")[data.link.split("/").length - 1]}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <span className={styles.arrowRight} onClick={() => { id && (window.location.href = String(Number(id) + 1)) }}></span>
                            <span className={styles.arrowLeft} onClick={() => { id && (window.location.href = String(Number(id) - 1)) }}></span>
                        </div>
                        <p className={styles.teacherTitle}>Преподаватель</p>
                        <div className={styles.teacherInfo}>
                            <div className={styles.photo} style={{ backgroundImage: `url(${data.teacher.avatar})` }}>

                            </div>
                            <div className={styles.nameAndPost}>
                                <p className={styles.teacherName}>{lang === "ru" ? `${data.teacher.last_name} ${data.teacher.first_name} ${data.teacher.middle_name}` : `${data.teacher.last_name_eng} ${data.teacher.first_name_eng} ${data.teacher.middle_name_eng}`}</p>
                                {/* <p className={styles.teacherPost}>{data.teacher.post}</p> */}
                            </div>
                            <div className={styles.emails}>
                                <p>{data.teacher.contact_email}</p>
                            </div>
                        </div>
                        <div className={styles.desc_wrapp}>
                            <p className={styles.descTitle}>Описание</p>
                            <p className={styles.desc}>{lang === "ru" ? data.description : data.description_eng}</p>
                        </div>
                        <div className={styles.materials_wrapp}>
                            <p className={styles.materialTitle}>Материалы</p>
                            {data.attachments.map(({ file, id }: any) => {
                                return (
                                    <>
                                        <div className={styles.material} key={id}>
                                            <div className={styles.first}>
                                                <img src={pdficon} alt="pdficon" />
                                                <p className={styles.fileName}>{lang === "ru" ? data.name : data.name_eng}</p>
                                            </div>
                                            <div className={styles.second}>
                                                {/* <p className={styles.weight}>{data.file.weight}</p> */}
                                                <a href={file} download><img alt="downloadIcon" src={downloadIcon} /></a>

                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </>
            ) : (
                <>
                </>
            )
            }
        </>
    )
}