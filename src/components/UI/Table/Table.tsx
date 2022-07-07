import styles from "./Table.module.css"

type Props = {
    data: {
        title: string;
        image?: string;
        desc?: string;
    }[]
}

type Data = {
    title: string;
    image?: string;
    desc?: string;
}

const classnames = [styles.first, styles.second, styles.third, styles.fourth, styles.fifth, styles.sixth, styles.seventh, styles.eighth, styles.ninth, styles.tenth];

export const Table: React.FC<Props> = ({ data }) => {
    return (
        <div className={styles.container}>
            {data.map(({ title, image, desc }: Data, i: number) => {
                return (
                    <div className={[styles.content, classnames[i]].join(" ")}>
                        <div>
                            <p className={styles.title}>{title}</p>
                            {image ? (
                                <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
                            ) : ""}
                            <p className={styles.desc}>{desc}</p>
                        </div>
                        <div>
                            <p className={styles.counter}>{i < 9 ? `0${i + 1}` : i + 1}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}