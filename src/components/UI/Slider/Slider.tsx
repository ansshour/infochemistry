import { useState } from "react";
import styles from "./Slider.module.css"


type Props = {
    image: string;
    text: string[];
    link: string;
    linkName: string;
}

export const Slider: React.FC<any> = ({ data }) => {

    const [elementOffset, setElementOffset] = useState(0);
    let [activeElement, setActiveElement] = useState(0);


    const nextHundler = () => {
        if (elementOffset > -(data.length - 1) * 100) {
            setElementOffset(elementOffset - 100)
            setActiveElement(activeElement + 1)
        } else {
            setElementOffset(0)
            setActiveElement(0)
        }
    }

    const prevHundler = () => {
        if (elementOffset < 0) {
            setElementOffset(elementOffset + 100)
            setActiveElement(activeElement - 1)
        } else {
            setElementOffset(-(data.length - 1) * 100)
            setActiveElement(data.length - 1)
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.prev} onClick={prevHundler}></div>
            <div className={styles.slider}>
                <div className={styles.activeElement} style={{ transform: `translateX(${elementOffset}%)` }}>
                    {data.map((elem: Props) => {
                        return (
                            <div className={styles.slide}>
                                <div className={styles.image} style={{ backgroundImage: `url(${elem.image})` }}></div>
                                <div className={styles.text}>
                                    {elem.text.map((text: string) => <p key={text}>{text}</p>)}
                                    <a className={styles.link} href={elem.link}>{elem.linkName}</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.next} onClick={nextHundler}></div>
            <div className={styles.points}>
                {data.map((elem: Props, id: number) => (
                    id === activeElement ? <div className={styles.point} style={{ backgroundColor: "black" }} key={id}></div> : <div className={styles.point} key={id}></div>
                ))}
            </div>
        </div >
    )
}