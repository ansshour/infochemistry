import styles from "./CategoryButton.module.css"

type Props = {
    children: React.ReactNode;
    isActive: boolean;
    color: string;
}

export const CategoryButton: React.FC<Props> = ({ children, isActive, color }) => {
    return (
        <button className={styles.btn} style={isActive ? { fontWeight: "bold", border: `1px solid ${color}`, color: "black" } : {}}>
            {children}
        </button>
    )
}