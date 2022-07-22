import styles from "./BtnToggle.module.css"

type Variables = {
    id: number;
    name: string;
}

type Props = {
    variables: Variables[];
    activeColor: string;
    activeElement: number;
    setActiveElement: (id: number) => void;
}

export const BtnToggle: React.FC<Props> = ({ variables, activeColor, activeElement, setActiveElement }) => {
    return (
        <div className={styles.container}>
            {variables.map(({ name, id }) => <p
                key={name}
                style={id === activeElement ? { color: "white", backgroundColor: `${activeColor}` } : {}}
                onClick={() => { setActiveElement(id) }}
            >{name}</p>)}
        </div>
    )
}