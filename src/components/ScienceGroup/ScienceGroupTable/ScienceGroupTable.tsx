import styles from "./ScienceGroupTable.module.css"

type Area = {
    title: string;
    desc: string;
}

type Props = {
    groupName: string;
    photo: string;
    name: string;
    email: string;
    tasks: string[];
    area: Area[];
    icon: string;
}

const classnames = [styles.first, styles.second, styles.third, styles.fourth]

export const ScienceGroupTable: React.FC<Props> = ({ groupName, photo, name, email, tasks, area, icon }) => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <img className={styles.icon} src={icon} />
                <p className={styles.groupName}>{groupName}</p>
                <div className={styles.representative}>
                    <div className={styles.image} style={{ backgroundImage: `url(${photo})` }}></div>
                    <div className={styles.info}>
                        <p className={styles.name}>{name}</p>
                        <div className={styles.email}>
                            <img alt="email icon" src="./images/scienceGroup/email.svg" />
                            <p>{email}</p>
                        </div>
                    </div>
                </div>
                <ul className={styles.tasksList}>
                    {tasks.map((task) => <li>{task}</li>)}
                </ul>
            </div>
            {area.map(({ title, desc }: Area, i: number) => {
                return (
                    <div className={[styles.area, classnames[i]].join(" ")}>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.desc}>{desc}</p>
                    </div>
                )
            })}
        </div>
    )
}