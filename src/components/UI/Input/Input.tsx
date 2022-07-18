import styles from "./Input.module.css"

type Props = {
    placeholder: string;
    width?: number;
    height?: number;
    fontsize?: number;
    style?: any;
}

export const Input: React.FC<Props> = ({ placeholder, width, height, fontsize, style }) => {
    return (
        <input placeholder={placeholder} className={styles.input} style={{ maxWidth: `${width}px`, maxHeight: `${height}px`, fontSize: `${fontsize}px`, ...style }} />
    )
}