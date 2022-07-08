import styles from "./Examples.module.css"

export const Examples = () => {

    const examples = [
        { name: "Самособирающиеся устройства биосовместимой электроники" },
        { name: "Мультисенсорная электрохимическая платформа в биотехнологии" },
        { name: "Синхронизация трех фотоэлектрохимических осцилляторов" },
        { name: "Изучение фундаментальных основ ферментативно-контролируемого осаждения гидроксиапатита" },
        { name: "Формирование органических и супрамолекулярных колец Лизеганга в микрофлюидной системе" },
    ]

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Примеры тематик выпускных работ</h2>
            <ul className={styles.list}>
                {examples.map(({ name }) => <li key={name}><img src="./images/examples/icon.svg" className={styles.icon} />{name}</li>)}
            </ul>
        </div>
    )
}