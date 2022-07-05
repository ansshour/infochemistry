import styles from "./Input.module.css"

type Props = {
    placeholder: string;
}

export const Input: React.FC<Props> = ({ placeholder }) => {
    return (
        <input placeholder="e-mail" className={styles.input} />
    )
}