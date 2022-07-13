import styles from "./PersonalitiesNav.module.css"

type Props = {
    active: any;
    setActive: (arg: number) => void;
}

export const PersonalitiesNav: React.FC<Props> = ({ active, setActive }) => {

    const personalitiesNav = [
        { name: "Групп-лидеры", icon: "./images/personalities/icon/1.svg" },
        { name: "Постдоки и стипендиаты ИТМО", icon: "./images/personalities/icon/2.svg" },
        { name: "Аспиранты", icon: "./images/personalities/icon/3.svg" },
        { name: "Магистранты", icon: "./images/personalities/icon/4.svg" },
        { name: "Бакалавры", icon: "./images/personalities/icon/5.svg" },
        { name: "Школьники", icon: "./images/personalities/icon/6.svg" },
        { name: "Алюмни", icon: "./images/personalities/icon/7.svg" },
        { name: "Персонал", icon: "./images/personalities/icon/8.svg" },
        { name: "Практиканты", icon: "./images/personalities/icon/9.svg" },
        { name: "Администрация", icon: "./images/personalities/icon/10.svg" },
    ]

    return (
        <>
            <nav className={styles.personalities__nav}>
                {personalitiesNav.map(({ name, icon }, i) => {
                    return (
                        <div className={styles.personalities__nav__item} key={name} style={active === i ? { backgroundColor: "#E2F6FB" } : {}} onClick={() => { setActive(i) }}>
                            <img src={icon} alt={name} />
                            <p>{name}</p>
                        </div>
                    )
                })}
            </nav>
            <div className={styles.personalities__table}>

            </div>
        </>
    )
}