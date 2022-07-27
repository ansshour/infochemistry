import styles from "./Button.module.css"

type Props = {
    children: React.ReactNode;
    color?: string;
    width?: string;
    height?: string;
    style?: React.CSSProperties;
}

export const Button: React.FC<Props> = ({ children, color, width, height, style }) => {
    return (
        <button className={color === 'white' ? [styles.container, styles.white].join(" ") : styles.container} style={{ maxWidth: `${width}px`, height: `${height}px`, ...style }}>
            {children}
        </button>
    )
}