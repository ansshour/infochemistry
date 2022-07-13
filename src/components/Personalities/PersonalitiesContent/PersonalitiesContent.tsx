import { PersonalitiesCard } from "./PersonalitiesCard/PersonalitiesCard"
import styles from "./PersonalitiesContent.module.css"

const PersonalitiesData = [
    {
        name: `Скорб
    Екатерина Владимировна`, desc: `Директор, руководитель группы 
    "Молекулярно-организованные системы"`, phone: `+7 (999) 210 39 77`, mail: `skorb@itmo.ru`, resume: "#"
    },
    {
        name: `Скорб
    Екатерина Владимировна`, desc: `Директор, руководитель группы 
    "Молекулярно-организованные системы"`, phone: `+7 (999) 210 39 77`, mail: `skorb@itmo.ru`, resume: "#"
    },
    {
        name: `Скорб
    Екатерина Владимировна`, desc: `Директор, руководитель группы 
    "Молекулярно-организованные системы"`, phone: `+7 (999) 210 39 77`, mail: `skorb@itmo.ru`, resume: "#"
    },
    {
        name: `Скорб
    Екатерина Владимировна`, desc: `Директор, руководитель группы 
    "Молекулярно-организованные системы"`, phone: `+7 (999) 210 39 77`, mail: `skorb@itmo.ru`, resume: "#"
    },
    {
        name: `Скорб
    Екатерина Владимировна`, desc: `Директор, руководитель группы 
    "Молекулярно-организованные системы"`, phone: `+7 (999) 210 39 77`, mail: `skorb@itmo.ru`, resume: "#"
    },
    {
        name: `Скорб
    Екатерина Владимировна`, desc: `Директор, руководитель группы 
    "Молекулярно-организованные системы"`, phone: `+7 (999) 210 39 77`, mail: `skorb@itmo.ru`, resume: "#"
    },
    {
        name: `Скорб
    Екатерина Владимировна`, desc: `Директор, руководитель группы 
    "Молекулярно-организованные системы"`, phone: `+7 (999) 210 39 77`, mail: `skorb@itmo.ru`, resume: "#"
    },
    {
        name: `Скорб
    Екатерина Владимировна`, desc: `Директор, руководитель группы 
    "Молекулярно-организованные системы"`, phone: `+7 (999) 210 39 77`, mail: `skorb@itmo.ru`, resume: "#"
    },
    {
        name: `Скорб
    Екатерина Владимировна`, desc: `Директор, руководитель группы 
    "Молекулярно-организованные системы"`, phone: `+7 (999) 210 39 77`, mail: `skorb@itmo.ru`, resume: "#"
    },
    {
        name: `Скорб
    Екатерина Владимировна`, desc: `Директор, руководитель группы 
    "Молекулярно-организованные системы"`, phone: `+7 (999) 210 39 77`, mail: `skorb@itmo.ru`, resume: "#"
    },
    {
        name: `Скорб
    Екатерина Владимировна`, desc: `Директор, руководитель группы 
    "Молекулярно-организованные системы"`, phone: `+7 (999) 210 39 77`, mail: `skorb@itmo.ru`, resume: "#"
    },
    {
        name: `Скорб
    Екатерина Владимировна`, desc: `Директор, руководитель группы 
    "Молекулярно-организованные системы"`, phone: `+7 (999) 210 39 77`, mail: `skorb@itmo.ru`
    },

]

export const PersonalitiesContent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>Групп-лидеры</p>
            </div>
            <div className={styles.content}>
                {PersonalitiesData.map(({ name, desc, phone, mail, resume }) => {
                    return (
                        <PersonalitiesCard name={name} desc={desc} phone={phone} mail={mail} resume={resume} />
                    )
                })}
            </div>
        </div>
    )
}