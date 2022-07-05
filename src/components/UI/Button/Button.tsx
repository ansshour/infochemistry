import styles from "./Button.module.css"

type Props = {
    children: React.ReactNode;
    color?: string;
    width?: string;
    height?: string;
}

export const Button: React.FC<Props> = ({ children, color, width, height }) => {
    return (
        <button className={color === 'white' ? [styles.container, styles.white].join(" ") : styles.container} style={{ width: `${width}px`, height: `${height}px` }}>
            {children}
        </button>
    )
}