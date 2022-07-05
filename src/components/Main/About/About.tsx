import styles from "./About.module.css"
import { Representive } from "./Representive/Representive"


export const About = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>О центре</h2>
            <div className={[styles.representives, styles.first].join(" ")}>
                <div className={styles.representive__wrapper}>
                    <div className={styles.desc}>
                        <p><span className={styles.green}>Инфохимия</span> – область экспериментальной
                            химии, изучающая возможность обработки информации
                            на молекулярном уровне.</p>
                        <p>Интердисциплинарные области науки привели к тому, что в лучшем IТ-университете России, Университете ИТМО, возник <span className={styles.green}>научно-образовательный центр Инфохимии.</span></p>
                    </div>
                    <Representive name="Жан-Мари Лен" text={[`научный консультант центра, профессор Страсбургского университета, лауреат Нобелевской премии по химии.`]} image="../images/about/1.png" />
                </div>
                <div className={styles.representive__wrapper}>
                    <div className={[styles.desc, styles.second__desc].join(" ")}>
                        <p>В нашем центре мы работаем по <span className={styles.green}>многим направлениям:</span> от создания искусственной клетки до систем программирования бактериальных биопленок, изучения и моделирования нелинейных химических процессов.</p>
                    </div>
                    <Representive name="Екатерина Скорб" text={[`Директор НОЦ инфохимии, профессор.`, `Ранее руководила группой в Потсдаме, Германия и работала в Гарвардском университете.`]} image="../images/about/2.png" />
                </div>
            </div>
        </div>
    )
}