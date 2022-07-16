import styles from "./SearchInput.module.css"

export const SearchInput = () => {
    return (
        <>
            <input className={styles.searchInput} placeholder="Поиск" />
        </>
    )
}