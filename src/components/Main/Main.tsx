import { Button } from "../UI/Button/Button";
import styles from "./Main.module.css";
import { useState } from "react";
import { Partners } from "./Partners/Partners";
import { About } from "./About/About";
import { News } from "./News/News";

export const Main = () => {

    const [activeElement, setActiveElement] = useState(0);

    const image = [
        { styles: [styles.image1, styles.image].join(" "), text: "О центре" },
        { styles: [styles.image2, styles.image].join(" "), text: "Студентам" },
        { styles: [styles.image3, styles.image].join(" "), text: "Абитуриентам" }
    ];


    return (
        <>
            <div className={[styles.container, styles.topSection].join(" ")}>
                <div className={styles.leftSide}>
                    <div className={styles.title__wrapper}>
                        <h1 className={styles.title}>
                            Infochemistry
                            Scientific
                            Center
                        </h1>
                    </div>
                    <Button color="white" width="142" height="33">Контакты</Button>
                    <div className={styles.socialNetworks}>
                        <a href="#"><div className={styles.vk}><img src="./images/main/vk.png" /></div></a>
                        <a href="#"><div className={styles.inst}><img src="./images/main/inst.png" /></div></a>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    {image.map(({ styles, text }, i) => <div key={i} className={styles} onClick={() => { setActiveElement(i) }} style={activeElement === i ? { flex: "2" } : {}}><p style={activeElement === i ? { writingMode: "horizontal-tb", transform: "none" } : {}}>{text}</p></div>)}
                </div>
            </div>
            <Partners />
            <About />
            <News />
        </>
    )
}