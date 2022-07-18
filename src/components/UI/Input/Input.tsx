import styles from "./Input.module.css"

type Props = {
    placeholder: string;
    width?: number;
    height?: number;
    fontsize?: number;
}

export const Input: React.FC<Props> = ({ placeholder, width, height, fontsize }) => {
    return (
        <input placeholder={placeholder} className={styles.input} style={{ width: `${width}px`, height: `${height}px`, fontSize: `${fontsize}px` }} />
    )
}