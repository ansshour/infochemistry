import styles from "../Modal/Modal.module.css"
type Props = {
    active: boolean;
    setActive: (arg: boolean) => void;
    children?: React.ReactNode;
}
export const Modal = ({ active, setActive, children }: Props) => {
    return (
        <>
            <div className={active ? `${styles.modal} ${styles.active}` : `${styles.modal}`} onClick={() => setActive(false)}>
                <div className={active ? `${styles.content} ${styles.active}` : `${styles.content}`} onClick={e => e.stopPropagation()}>
                    {children}</div>
            </div>
        </>
    )
}