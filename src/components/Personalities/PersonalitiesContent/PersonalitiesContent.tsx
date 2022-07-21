import { useContext, useEffect } from "react"
import { PersonalitiesCard } from "./PersonalitiesCard/PersonalitiesCard"
import styles from "./PersonalitiesContent.module.css"
import { PersonalitiesContext } from "../Personalities"

type Personalities = {
    name: string;
    desc?: string;
    image?: string;
    phone?: string;
    mail?: string;
    resume?: string;
}

export const PersonalitiesContent = () => {
    const { personalitiesData, personalitiesName } = useContext(PersonalitiesContext);

    console.log(personalitiesData)
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>{personalitiesName}</p>
                {personalitiesName === "Групп-лидеры" && (
                    <div className={styles.elements}>
                        <img alt="element" src="./images/personalities/elements/1.png" />
                        <img alt="element" src="./images/personalities/elements/1.png" style={{ transform: "rotate(180deg)", alignSelf: "end" }} />
                        <img alt="element" src="./images/personalities/elements/1.png" />
                    </div>
                )}
                {personalitiesName === "Постдоки и стипендиаты ИТМО" && (
                    <div className={styles.elements} style={{ gridTemplateColumns: "1fr 1fr" }}>
                        <img alt="element" src="./images/personalities/elements/2.png" style={{ alignSelf: "end" }} />
                        <img alt="element" src="./images/personalities/elements/2.png" style={{ transform: "rotate(180deg)" }} />
                    </div>
                )}
                {personalitiesName === "Аспиранты" && (
                    <div className={styles.elements} style={{ gridTemplateColumns: "1fr 1fr", marginLeft: "50px" }}>
                        <img alt="element" src="./images/personalities/elements/3.png" style={{ alignSelf: "start" }} />
                        <img alt="element" src="./images/personalities/elements/3.png" style={{ alignSelf: "end", transform: "rotate(180deg)" }} />
                    </div>
                )}
                {personalitiesName === "Магистранты" && (
                    <div className={styles.elements} style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
                        <img alt="element" src="./images/personalities/elements/4.png" />
                        <img alt="element" src="./images/personalities/elements/4.png" />
                        <img alt="element" src="./images/personalities/elements/4.png" />
                    </div>
                )}
                {personalitiesName === "Бакалавры" && (
                    <div className={styles.elements} style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
                        <img alt="element" src="./images/personalities/elements/5.png" style={{ alignSelf: "end" }} />
                        <img alt="element" src="./images/personalities/elements/5.png" style={{ transform: "rotate(180deg)" }} />
                        <img alt="element" src="./images/personalities/elements/5.png" style={{ alignSelf: "end" }} />
                        <img alt="element" src="./images/personalities/elements/5.png" style={{ transform: "rotate(180deg)" }} />
                    </div>
                )}
                {personalitiesName === "Школьники" && (
                    <div className={styles.elements} style={{ gridTemplateColumns: "1fr" }} >
                        <img alt="element" src="./images/personalities/elements/6.png" style={{ transform: "translateX(20%)" }} />
                    </div>
                )}
                {personalitiesName === "Алюмни" && (
                    <div className={styles.elements} style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }} >
                        <img alt="element" src="./images/personalities/elements/7.png" />
                        <img alt="element" src="./images/personalities/elements/7.png" style={{ alignSelf: "end", transform: "rotate(180deg)" }} />
                        <img alt="element" src="./images/personalities/elements/7.png" />
                        <img alt="element" src="./images/personalities/elements/7.png" style={{ alignSelf: "end", transform: "rotate(180deg)" }} />
                    </div>
                )}
                {personalitiesName === "Персонал" && (
                    <div className={styles.elements} style={{ gridTemplateColumns: "1fr" }} >
                        <img alt="element" src="./images/personalities/elements/8.png" style={{ transform: "translateX(20%)" }} />
                    </div>
                )}
                {personalitiesName === "Практиканты" && (
                    <div className={styles.elements} style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }} >
                        <img alt="element" src="./images/personalities/elements/9.png" />
                        <img alt="element" src="./images/personalities/elements/9.png" style={{ alignSelf: "end", transform: "rotate(180deg)" }} />
                        <img alt="element" src="./images/personalities/elements/9.png" />
                    </div>
                )}
                {personalitiesName === "Администрация" && (
                    <div className={styles.elements} style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr", marginLeft: "70px" }} >
                        <img alt="element" src="./images/personalities/elements/10.png" width={136.84} height={132.66} />
                        <img alt="element" src="./images/personalities/elements/10.png" width={136.84} height={132.66} style={{ alignSelf: "end", transform: "rotate(180deg) " }} />
                    </div>
                )}
            </div>
            <div className={styles.content}>
                {personalitiesData.length % 2 === 0 ? (
                    personalitiesData.map(({ name, desc, image, phone, mail, resume }: Personalities) => {
                        return (
                            <PersonalitiesCard name={name} desc={desc} image={image} phone={phone} mail={mail} resume={resume} />
                        )
                    })
                ) : (
                    personalitiesData.map(({ name, desc, image, phone, mail, resume }: Personalities, i: number) => {
                        return (
                            (i === personalitiesData.length - 1) ? <PersonalitiesCard name={name} desc={desc} image={image} phone={phone} mail={mail} resume={resume} needResize={true} /> : <PersonalitiesCard name={name} desc={desc} image={image} phone={phone} mail={mail} resume={resume} />
                        )
                    })
                )}
            </div>
        </div >
    )
}