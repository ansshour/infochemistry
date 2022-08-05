import styles from "./Loader.module.css"

export const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.preloader}>
                <div className={styles.preloader__row}>
                    <div className={styles.preloader__item}></div>
                    <div className={styles.preloader__item}></div>
                </div>
            </div>
        </div>
    )
}