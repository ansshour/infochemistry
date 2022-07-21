import styles from "./Partners.module.css"

const PartnersData = [
    { image: "./images/partners/gazprom.png", name: "gazprom" },
    { image: "./images/partners/unilevel.png", name: "unilevel" },
    { image: "./images/partners/BAT.png", name: "BAT" },
    { image: "./images/partners/biccad.png", name: "biccad" },
    { image: "./images/partners/cola.png", name: "cola" },
    { image: "./images/partners/sibur.png", name: "sibur" },
]

export const Partners = () => {
    return (
        <div className={styles.container}>
            <div className={styles.partners__container}>
                {PartnersData.map(({ image, name }) => (
                    <img src={image} key={name} alt={name} />
                ))}
            </div>
        </div >
    )
}