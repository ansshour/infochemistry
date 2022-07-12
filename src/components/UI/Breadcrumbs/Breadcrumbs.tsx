import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.css"

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
                {info.map(({ name, link }) => {
                    return (
                        <>
                            <Link to={link}>{name}</Link>
                            <img className={styles.arrow} src="./images/breadcrumbs/arrow.svg" />
                        </>
                    )
                })}
            </div>
        </div>
    )
}