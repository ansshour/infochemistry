import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.css"
import arrow from "./res/arrow.svg"

type Info = {
    name: string;
    link: string;
}

type Props = {
    info: Info[];
}

export const Breadcrumbs: React.FC<Props> = ({ info }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {info.map(({ name, link }, i: number) => {
                    return (
                        <div key={i} className={styles.Breadcrumb}>
                            <Link to={link}>{name}</Link>
                            <img className={styles.arrow} src={arrow} alt="arrow" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}