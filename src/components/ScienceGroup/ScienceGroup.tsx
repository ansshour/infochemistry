import { useEffect, useState } from "react"
import { Breadcrumbs } from "../UI/Breadcrumbs/Breadcrumbs"
import styles from "./ScienceGroup.module.css"
import { ScienceGroupTable } from "./ScienceGroupTable/ScienceGroupTable"

export const ScienceGroup = () => {

    const icons = ["./images/scienceGroup/1.svg", "./images/scienceGroup/2.svg", "./images/scienceGroup/3.svg"]

    let activeIconIndex = 0;

    const lang = localStorage.getItem("i18nextLng");

    const info = [
        { name: "Главная страница", link: "/" },
        { name: "Исследования", link: "" },
        { name: "Группы", link: "/science_groups" },
    ]

    // const data = [
    //     {
    //         groupName: "Инфохимия", photo: "", name: "Скорб Екатерина", email: "skorb@itmo.ru", tasks: ["Создание искусственной химической клетки", "Химический компьютинг", "Химия высоких энергий", "Самоорганизация молекул и наночастиц"], area: [{ title: "Создание искусственной химической клетки", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются графами." }, { title: "Химия высоких энергий", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются молекулярными графами." }, { title: "Химический компьютинг", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются молекулярными графами." }, { title: "Самоорганизация молекул и наночастиц", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются графами." }]
    //     },
    //     {
    //         groupName: "Инфохимия", photo: "", name: "Скорб Екатерина", email: "skorb@itmo.ru", tasks: ["Создание искусственной химической клетки", "Химический компьютинг", "Химия высоких энергий", "Самоорганизация молекул и наночастиц"], area: [{ title: "Создание искусственной химической клетки", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются графами." }, { title: "Химия высоких энергий", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются молекулярными графами." }, { title: "Химический компьютинг", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются молекулярными графами." }, { title: "Самоорганизация молекул и наночастиц", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются графами." }]
    //     },
    //     {
    //         groupName: "Инфохимия", photo: "", name: "Скорб Екатерина", email: "skorb@itmo.ru", tasks: ["Создание искусственной химической клетки", "Химический компьютинг", "Химия высоких энергий", "Самоорганизация молекул и наночастиц"], area: [{ title: "Создание искусственной химической клетки", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются графами." }, { title: "Химия высоких энергий", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются молекулярными графами." }, { title: "Химический компьютинг", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются молекулярными графами." }, { title: "Самоорганизация молекул и наночастиц", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются графами." }]
    //     },
    //     {
    //         groupName: "Инфохимия", photo: "", name: "Скорб Екатерина", email: "skorb@itmo.ru", tasks: ["Создание искусственной химической клетки", "Химический компьютинг", "Химия высоких энергий", "Самоорганизация молекул и наночастиц"], area: [{ title: "Создание искусственной химической клетки", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются графами." }, { title: "Химия высоких энергий", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются молекулярными графами." }, { title: "Химический компьютинг", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются молекулярными графами." }, { title: "Самоорганизация молекул и наночастиц", desc: "Применение компьютерных методов и дискретной математики в химии. Например, молекулы моделируются графами." }]
    //     },
    // ]

    const [data, setData] = useState([])

    const getScienseGroup = async () => {
        try {
            const data = await fetch(`http://78.140.243.10/api/research_groups/?lang=${lang === "ru" ? "ru" : "eng"}`)
            const response = await data.json();
            setData(response)
        } catch (err) {
            console.error(err, "getScienseGroup error")
        }
    }

    useEffect(() => {
        getScienseGroup()
    }, [])

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
                    {data.map(({ name, name_eng, leader, projects, id }: any, i: number) => {
                        const icon = icons[activeIconIndex];
                        activeIconIndex === 2 ? activeIconIndex = 0 : activeIconIndex++;
                        const area = projects.map((task: any) => {
                            if (lang === "ru") {
                                return { title: task.name, desc: task.description, id: id }
                            } else {
                                return { title: task.name_eng, desc: task.description_eng, id: id }
                            }
                        })
                        const tasks = projects.map((task: any) => {
                            if (lang === "ru") {
                                return { name: task.name, id: task.id }
                            } else {
                                return { name: task.name_eng, id: task.id }
                            }
                        })
                        return (
                            <ScienceGroupTable
                                groupName={lang === "ru" ? name : name_eng}
                                photo={leader.avatar}
                                name={lang === "ru" ? `${leader.last_name} ${leader.first_name} ${leader.middle_name}` : `${leader.last_name_eng} ${leader.first_name_eng} ${leader.middle_name_eng}`}
                                email={leader.contact_email}
                                tasks={tasks}
                                area={area}
                                icon={icon}
                                id={id}
                                key={`${name} ${id}`} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}