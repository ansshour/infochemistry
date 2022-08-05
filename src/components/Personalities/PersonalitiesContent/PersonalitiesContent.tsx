import { useContext, useEffect } from "react"
import { PersonalitiesCard } from "./PersonalitiesCard/PersonalitiesCard"
import styles from "./PersonalitiesContent.module.css"
import { PersonalitiesContext } from "../Personalities"
import { useTranslation } from "react-i18next"

type Personalities = {
    name: string;
    desc?: string;
    image?: string;
    // phone?: string;
    mail?: string;
    resume?: string;
    //
    first_name: string;
    middle_name: string;
    last_name: string;
    bio?: string;
    phone?: string;
    cv_file?: string;
    first_name_eng?: string;
    middle_name_eng?: string;
    last_name_eng?: string;
    bio_eng: string;
}

export const PersonalitiesContent = () => {
    const { personalitiesData, personalitiesName } = useContext(PersonalitiesContext);
    const { t } = useTranslation();


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>{personalitiesName}</p>
                {personalitiesName === t("personalities.nav.group_leaders") && (
                    <div className={styles.elements}>
                        <img alt="element" src="./images/personalities/elements/1.png" />
                        <img alt="element" src="./images/personalities/elements/1.png" style={{ transform: "rotate(180deg)", alignSelf: "end" }} />
                        <img alt="element" src="./images/personalities/elements/1.png" />
                    </div>
                )}
                {personalitiesName === t("personalities.nav.postdocs") && (
                    <div className={styles.elements} style={{ gridTemplateColumns: "1fr 1fr" }}>
                        <img alt="element" src="./images/personalities/elements/2.png" style={{ alignSelf: "end" }} />
                        <img alt="element" src="./images/personalities/elements/2.png" style={{ transform: "rotate(180deg)" }} />
                    </div>
                )}
                {personalitiesName === t("personalities.nav.aspirants") && (
                    <div className={styles.elements} style={{ gridTemplateColumns: "1fr 1fr", marginLeft: "50px" }}>
                        <img alt="element" src="./images/personalities/elements/3.png" style={{ alignSelf: "start" }} />
                        <img alt="element" src="./images/personalities/elements/3.png" style={{ alignSelf: "end", transform: "rotate(180deg)" }} />
                    </div>
                )}
                {personalitiesName === t("personalities.nav.masters") && (
                    <div className={styles.elements} style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
                        <img alt="element" src="./images/personalities/elements/4.png" />
                        <img alt="element" src="./images/personalities/elements/4.png" />
                        <img alt="element" src="./images/personalities/elements/4.png" />
                    </div>
                )}
                {personalitiesName === t("personalities.nav.backelors") && (
                    <div className={styles.elements} style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
                        <img alt="element" src="./images/personalities/elements/5.png" style={{ alignSelf: "end" }} />
                        <img alt="element" src="./images/personalities/elements/5.png" style={{ transform: "rotate(180deg)" }} />
                        <img alt="element" src="./images/personalities/elements/5.png" style={{ alignSelf: "end" }} />
                        <img alt="element" src="./images/personalities/elements/5.png" style={{ transform: "rotate(180deg)" }} />
                    </div>
                )}
                {personalitiesName === t("personalities.nav.schoolstudents") && (
                    <div className={styles.elements} style={{ gridTemplateColumns: "1fr" }} >
                        <img alt="element" src="./images/personalities/elements/6.png" style={{ transform: "translateX(20%)" }} />
                    </div>
                )}
                {personalitiesName === t("personalities.nav.alums") && (
                    <div className={styles.elements} style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }} >
                        <img alt="element" src="./images/personalities/elements/7.png" />
                        <img alt="element" src="./images/personalities/elements/7.png" style={{ alignSelf: "end", transform: "rotate(180deg)" }} />
                        <img alt="element" src="./images/personalities/elements/7.png" />
                        <img alt="element" src="./images/personalities/elements/7.png" style={{ alignSelf: "end", transform: "rotate(180deg)" }} />
                    </div>
                )}
                {personalitiesName === t("personalities.nav.staff") && (
                    <div className={styles.elements} style={{ gridTemplateColumns: "1fr" }} >
                        <img alt="element" src="./images/personalities/elements/8.png" style={{ transform: "translateX(20%)" }} />
                    </div>
                )}
                {personalitiesName === t("personalities.nav.practics") && (
                    <div className={styles.elements} style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }} >
                        <img alt="element" src="./images/personalities/elements/9.png" />
                        <img alt="element" src="./images/personalities/elements/9.png" style={{ alignSelf: "end", transform: "rotate(180deg)" }} />
                        <img alt="element" src="./images/personalities/elements/9.png" />
                    </div>
                )}
                {personalitiesName === t("personalities.nav.admins") && (
                    <div className={styles.elements} style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr", marginLeft: "70px" }} >
                        <img alt="element" src="./images/personalities/elements/10.png" width={136.84} height={132.66} />
                        <img alt="element" src="./images/personalities/elements/10.png" width={136.84} height={132.66} style={{ alignSelf: "end", transform: "rotate(180deg) " }} />
                    </div>
                )}
            </div>
            <div className={styles.content}>
                {!personalitiesData.length ? (
                    <>
                        {/* // если нет контента, можно добавить сюда что-нибудь */}
                    </>
                ) : (
                    <>
                        {personalitiesData.length % 2 === 0 ? (
                            personalitiesData.map(({ first_name, last_name, middle_name, desc, image, phone, mail, resume, first_name_eng, middle_name_eng, last_name_eng, bio_eng, bio }: Personalities, i: number) => {
                                return (
                                    <PersonalitiesCard name={localStorage.getItem("i18nextLng") === "ru" ? `${last_name} ${first_name} ${middle_name}` : `${last_name_eng} ${middle_name_eng} ${middle_name}`} desc={localStorage.getItem("i18nextLng") === "ru" ? bio : bio_eng} image={image} phone={phone} mail={mail} resume={resume} />
                                )
                            })
                        ) : (
                            personalitiesData.map(({ first_name, last_name, middle_name, desc, image, phone, mail, resume }: Personalities, i: number) => {
                                return (
                                    (i === personalitiesData.length - 1) ? <PersonalitiesCard name={`${last_name} ${first_name} ${middle_name}`} desc={desc} image={image} phone={phone} mail={mail} resume={resume} needResize={true} /> : <PersonalitiesCard name={`${last_name} ${first_name} ${middle_name}`} desc={desc} image={image} phone={phone} mail={mail} resume={resume} />
                                )
                            })
                        )}
                    </>
                )}
            </div>
        </div >
    )
}