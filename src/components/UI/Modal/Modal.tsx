import styles from "../Modal/Modal.module.css"
import { GrClose } from "react-icons/gr";
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
                    {/* <div className={styles.close}><GrClose size={45} /></div> */}
                    <div className={styles.close} onClick={() => { setActive(false) }}>
                        <div className={[styles.line, styles.first].join(" ")}></div>
                        <div className={[styles.line, styles.second].join(" ")}></div>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}