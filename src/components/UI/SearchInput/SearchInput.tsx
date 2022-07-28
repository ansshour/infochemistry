import styles from "./SearchInput.module.css"

type Props = {
    style?: React.CSSProperties;
    placeholder?: string;
}

export const SearchInput: React.FC<Props> = ({ style, placeholder }) => {
    return (
        <>
            <input className={styles.searchInput} placeholder={`${placeholder ? placeholder : "Поиск"}`} style={{ ...style }} />
        </>
    )
}