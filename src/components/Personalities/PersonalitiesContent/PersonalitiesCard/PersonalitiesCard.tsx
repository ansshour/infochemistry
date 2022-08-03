import styles from "./PersonalitiesCard.module.css"

type Props = {
    name: string;
    desc?: string;
    phone?: string;
    mail?: string;
    resume?: string;
    image?: string;
    needResize?: boolean;
    //
    bio?: string;
    cv_file?: string;
}

export const PersonalitiesCard: React.FC<Props> = ({ name, desc, phone, mail, resume, image, needResize, bio, cv_file }, i) => {

    return (
        <div className={needResize ? [styles.container, styles.resize].join(" ") : styles.container} style={i % 2 !== 0 ? { borderBottom: "none", borderRight: "none" } : {}}>
            <div className={styles.imageContainer}>
                <div className={styles.image} style={{ backgroundImage: `url(${image})` }}>

                </div>
            </div>
            <div className={styles.info}>
                <p className={styles.name}>{name}
                </p>
                <p className={styles.desc}>
                    {bio}
                </p>
                <div className={styles.contacts}>
                    <div className={styles.phone} style={!phone?.length ? { display: "none" } : {}}>
                        <img src={"./images/personalities/content/Call.svg"} alt="call" />
                        <p>{phone}</p>
                    </div>
                    <div className={styles.mail} style={!mail?.length ? { display: "none" } : {}}>
                        <img src={"./images/personalities/content/Message.svg"} alt="Message" />
                        <p>{mail}</p>
                    </div>
                    <div className={styles.resume} style={!resume?.length ? { display: "none" } : {}}>
                        <img src={"./images/personalities/content/Document.svg"} alt="Document" />
                        <a href={cv_file}>Резюме</a>
                    </div>
                </div>
            </div>
        </div>
    )
}