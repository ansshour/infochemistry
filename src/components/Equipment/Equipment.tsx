import { useState } from "react"
import { Breadcrumbs } from "../UI/Breadcrumbs/Breadcrumbs"
import { EquipmentCard } from "../UI/EquipmentCard/EquipmentCard"
import { Modal } from "../UI/Modal/Modal"
import styles from "./Equipment.module.css"


const equipmentData = [
    { title: "Рентгеновский дифрактометр D2 PHASER", description: "D2 PHASER предназначен для решения большинства задач порошковой рентгенографии: качественного и количественного фазового анализа, определения ...", image: "./images/equipment/1.png", fullDesc: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem."] },
    { title: "Промышленный коллаборативный робот YuMi IRB 14000", description: "Используется для создания модульной автоматизированной системы, способной к непрерывному выполнению широкого спектра автоматизируемых химических ...", image: "./images/equipment/2.png", fullDesc: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem."] },
    { title: "Поляризационный микроскоп Olympus BX51", description: "Микроскоп BX51 предназначен для многочисленных научно-исследовательских задач. В НОЦ инфохимии с его помощью исследуется влияние состава ...", image: "./images/equipment/1.png", fullDesc: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem."] },
    { title: "Инвертированный микроскоп Leica DMi8", description: "Позволяет проводить исследования морфологического анализа самоорганизованных органических структур и инкапсулированных в них биологически активных молекул ...", image: "./images/equipment/1.png", fullDesc: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem."] },
    { title: "Электрохимический комплекс SVET/SIET/STELLARNET RAMAN", description: "Комплекc предназначен для изучения электрохимической активности материала на микроуровне: он позволяет изучать методом сканирующего вибрирующего ...", image: "./images/equipment/1.png", fullDesc: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem."] },
    { title: "Кварцевые микровесы EQCM 10M", description: "Инструмент измерения массы, принцип работы которого основан на зависимости частоты колебаний кварцевого резонатора от массы вещества, нанесенного на его ...", image: "./images/equipment/1.png", fullDesc: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem."] },
    { title: "Установка на основе сплава eGaIn", description: "Установка на основе сплава eGaIn применяется для изучения проводимости с «мягким контактом», а также для изучения фундаментальных свойств переноса заряда и исследования биохимических редокс систем....", image: "./images/equipment/1.png", fullDesc: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem."] },
    { title: "Ультразвуковой низкочастотный кавитационный комплекс", description: "Система предназначена для генерации ультразвуковых колебаний в жидкостях при контролируемом уровне активности кавитации ...", image: "./images/equipment/1.png", fullDesc: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat mollitia harum sapiente omnis explicabo, fugit repudiandae, qui inventore modi id cupiditate nihil enim molestiae natus reiciendis amet debitis in autem."] },
]

export const Equipment = () => {

    const info = [
        { name: "Главная страница", link: "/" },
        { name: "Исследования", link: "" },
        { name: "Оборудование", link: "/equipment" },
    ]

    return (
        <>
            <Breadcrumbs info={info} />
            <div className={styles.container}>
                <div className={styles.title__wrapper}>
                    <h1 className={styles.title}>
                        Оборудование
                    </h1>
                </div>
                <div className={styles.equipmentCards}>
                    {equipmentData.map(({ title, description, image, fullDesc }, i) => {
                        return (
                            <EquipmentCard key={title} title={title} description={description} image={image} fullDesc={fullDesc} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}