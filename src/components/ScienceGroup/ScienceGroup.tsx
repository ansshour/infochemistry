import { Breadcrumbs } from "../UI/Breadcrumbs/Breadcrumbs"
import styles from "./ScienceGroup.module.css"
import { ScienceGroupTable } from "./ScienceGroupTable/ScienceGroupTable"

export const ScienceGroup = () => {

    const icons = ["./images/scienceGroup/1.svg", "./images/scienceGroup/2.svg", "./images/scienceGroup/3.svg"]

    let activeIconIndex = 0;

    const info = [
        { name: "Главная страница", link: "/" },
        { name: "Исследования", link: "" },
        { name: "Группы", link: "/science_groups" },
    ]

    const data = [
        {
            groupName: "Инфохимия", photo: "", name: "Скорб Екатерина", email: "skorb@itmo.ru", tasks: ["Создание искусственной химической клетки", "Химический компьютинг", "Химия высоких энергий", "Самоорганизация молекул и наночастиц"], area: [{ title: "Создание искусственной химической клетки", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются графами." }, { title: "Химия высоких энергий", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются молекулярными графами." }, { title: "Химический компьютинг", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются молекулярными графами." }, { title: "Самоорганизация молекул и наночастиц", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются графами." }]
        },
        {
            groupName: "Инфохимия", photo: "", name: "Скорб Екатерина", email: "skorb@itmo.ru", tasks: ["Создание искусственной химической клетки", "Химический компьютинг", "Химия высоких энергий", "Самоорганизация молекул и наночастиц"], area: [{ title: "Создание искусственной химической клетки", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются графами." }, { title: "Химия высоких энергий", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются молекулярными графами." }, { title: "Химический компьютинг", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются молекулярными графами." }, { title: "Самоорганизация молекул и наночастиц", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются графами." }]
        },
        {
            groupName: "Инфохимия", photo: "", name: "Скорб Екатерина", email: "skorb@itmo.ru", tasks: ["Создание искусственной химической клетки", "Химический компьютинг", "Химия высоких энергий", "Самоорганизация молекул и наночастиц"], area: [{ title: "Создание искусственной химической клетки", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются графами." }, { title: "Химия высоких энергий", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются молекулярными графами." }, { title: "Химический компьютинг", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются молекулярными графами." }, { title: "Самоорганизация молекул и наночастиц", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются графами." }]
        },
        {
            groupName: "Инфохимия", photo: "", name: "Скорб Екатерина", email: "skorb@itmo.ru", tasks: ["Создание искусственной химической клетки", "Химический компьютинг", "Химия высоких энергий", "Самоорганизация молекул и наночастиц"], area: [{ title: "Создание искусственной химической клетки", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются графами." }, { title: "Химия высоких энергий", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются молекулярными графами." }, { title: "Химический компьютинг", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются молекулярными графами." }, { title: "Самоорганизация молекул и наночастиц", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются графами." }]
        },
    ]

    return (
        <>
            <Breadcrumbs info={info} />
            <div className={styles.container}>
                <div className={styles.title__wrapper}>
                    <h1 className={styles.title}>
                        Научные группы
                    </h1>
                </div>
                <div className={styles.cards}>
                    {data.map(({ groupName, photo, name, email, tasks, area }, i: number) => {
                        const icon = icons[activeIconIndex];
                        activeIconIndex === 2 ? activeIconIndex = 0 : activeIconIndex++;
                        return (
                            <ScienceGroupTable groupName={groupName} photo={photo} name={name} email={email} tasks={tasks} area={area} icon={icon} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}