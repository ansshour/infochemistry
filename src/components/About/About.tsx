import { Breadcrumbs } from "../UI/Breadcrumbs/Breadcrumbs"
import { Slider } from "../UI/Slider/Slider"
import styles from "./About.module.css"

export const About = () => {

    const info = [
        { name: "Главная страница", link: "/" },
        { name: "О центре", link: "" },
        { name: "Немного о  центре", link: "/about" },
    ]

    const data = [
        {
            image: "./images/master/1.png", linkName: "Буклет программы", link: "#", text: [`Научно-образовательный центр Инфохимии (НОЦ Инфохимии) появился в Университете ИТМО благодаря развитию интердисциплинарных областей науки, что позволило рассмотреть одно из основных направлений деятельности университета – информационные технологии – на молекулярном уровне и в химических системах.`]
        },
        {
            image: "./images/master/2.png", linkName: "", link: "#", text: [`Инфохимия – одна из самых перспективных сфер исследований, и работа в данном направлении позволит Университету ИТМО стать флагманом современного научного мира как в России, так и за рубежом.`, `В этом направлении работают не только химики, но и биотехнологи, информатики, биологи, физики и другие; развитие этого направления немыслимо без интердисциплинарного научного подхода.
            `]
        },
        {
            image: "./images/master/3.png", linkName: "", link: "#", text: [`Научно-образовательный центр включает в себя несколько научных групп под руководством ведущих ученых и ученых мировой величины.`, `Научный консультант центра – Лауреат Нобелевской премии по химии профессор Жан-Мари Лен.`]
        },
    ]

    return (
        <>
            <Breadcrumbs info={info} />
            <div className={styles.container}>
                <div className={styles.title__wrapper}>
                    <h1 className={styles.title}>
                        Немного о центре
                    </h1>
                </div>
                <Slider data={data} />
                <div>
                    <p className={styles.subtitle}>Руководство</p>
                    <p className={styles.info}>Директор НОЦ Инфохимии и руководитель одной из научных групп Екатерина Скорб с 2013 г. руководила группой в институте им. Макса Планка (Потсдам, Германия). В 2016-2017 гг. она являлась приглашенным профессором в группе одного из самых цитируемых химиков современности Джорджа Вайтсайда в Университете Гарвард. С сентября 2017 г. Екатерина переехала в Россию в Университет ИТМО на должность профессора и основала научную группу «Инфохимия», которая в дальнейшем была преобразована в научно-образовательный центр.
                    </p>
                    <p className={styles.subtitle}>Возможности</p>
                    <div className={styles.table}>
                        <div className={styles.image}></div>
                        <div className={styles.text}>
                            <p>Сотрудники подразделения, студенты и молодые ученые имеют свободный доступ к высокотехнологичному приборному парку, что позволяет работать над собственным проектом и дает возможность публикации в высокорейтинговых международных научных журналах, таких как Nature, Science, Advanced Materials, Angew. Chem. Int. Ed., J. Am. Chem. Soc. и др. </p>
                            <p>Центр активно сотрудничает с индустриальными партнёрами различных отраслей. Такой подход позволяет создавать собственные стартапы и открывает возможности вывода разрабатываемых продуктов на реальный рынок России и мира
                                в целом.</p>
                        </div>
                        <img src="./images/aboutus/1.svg" className={styles.icon} />
                    </div>
                    <div className={styles.inform}>
                        <p className={styles.subtitle}>Набор компетенций у студентов</p>
                        <p className={styles.info}>Образование направлено на подготовку высококлассных специалистов с междисциплинарным пониманием сложных систем в химии и биологии и навыками их экспериментального исследования, моделирования и предсказания. Наши выпускники способны решать задачи персонализированной медицины и питания на новом уровне сбора и анализа Big Data, проводить исследования модельных систем, применять в своей работе принципы аналогии и синергетики. Более того, наши образовательные программы нацелены на разностороннее развитие личности. Программой предусмотрено изучение биологии, математики, информатики, физики и даже искусства, совершенствование иностранных языков в рамках работы с преподавателями из-за рубежа и стажировок в ведущих мировых научных центрах. Студенты НОЦ Инфохимии в процессе обучения проходят стажировки в лучших российских и зарубежных университетах, а также крупнейших индустриальных компаниях с возможностью последующего трудоустройства.
                        </p>
                    </div>
                    <div className={styles.labs}>
                        <p className={styles.subtitle}>Совместные лаборатории</p>
                        <p className={styles.smallInfo}>На базе центра созданы 2 совместные лаборатории:</p>
                        <div className={styles.tables}>
                            <div className={styles.labs__table}>
                                <div className={styles.labsTable__header}>Искусственный Интеллект (ИИ)
                                    для умных и функциональных материалов
                                </div>
                                <div className={styles.labsTable__body}>
                                    <div className={styles.labsTable__body__item}>
                                        <div className={styles.labsTableImage}></div>
                                        <div>
                                            <p className={styles.name}>проф. Константин Новоселов</p>
                                            <p className={styles.desc}>(лауреат Нобелевской премии по физике)</p>
                                        </div>
                                    </div>
                                    <div className={styles.labsTable__body__item}>
                                        <div className={styles.labsTableImage}></div>
                                        <div>
                                            <p className={styles.name}>проф. Дарья Андреева-Боймлер</p>
                                        </div>
                                    </div>
                                </div>
                                <img src="./images/aboutus/3.svg" className={styles.labsTable__icon} alt="icon" />
                            </div>
                            <div className={styles.labs__table}>
                                <div className={styles.labsTable__header}>Активные материалы и поверхности, Великобритания
                                </div>
                                <div className={styles.labsTable__body}>
                                    <div className={styles.labsTable__body__item}>
                                        <div className={styles.labsTableImage}></div>
                                        <div>
                                            <p className={styles.name}>проф. Дмитрий Щукин</p>
                                        </div>
                                    </div>
                                    <div className={styles.labsTable__body__item}>
                                        <div className={styles.labsTableImage}></div>
                                        <div>
                                            <p className={styles.name}>проф. Екатерина Скорб</p>
                                        </div>
                                    </div>
                                </div>
                                <img src="./images/aboutus/4.svg" className={styles.labsTable__icon} alt="icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.partners}>
                    <p className={styles.subtitle}>Международные партнёры</p>
                    <p className={styles.info}>НОЦ Инфохимии активно сотрудничает с ведущими зарубежными научно-исследовательскими лабораториями. Студенты имеют возможность стажироваться в научных группах под руководством профессора Джорджа Вайтсайда (Гарвардский университет, США), профессора Сергея Семёнова (Институт Вейцмана, Израиль), участвовать в совместном проекте с департаментом биоматериалов в институте им. Макса Планка
                        (г. Потсдам, Германия), пройти стажировку в Национальном Университете Сингапура под руководством профессора К.С. Новосёлова (Нобелевский лауреат по физике, 2010 г.) и профессора Д.В. Андреевой-Боймлер. Такое взаимодействие с международными партнерами позволяет молодым учёным научиться работать в научно-исследовательских лабораториях высшего уровня по всему миру, а также стать участниками интердисциплинарных международных проектов.

                        Магистранты и аспиранты регулярно посещают страны Европейского союза (Германия, Хорватия, Бельгия, Испания и др.) по программе Erasmus+, которая полностью покрывает все расходы (проезд, проживание) и даёт возможность поработать в современных зарубежных научных лабораториях. Научный консультант центра – лауреат Нобелевской премии по химии Жан-Мари Лен.</p>
                </div>
                <div className={styles.events}>
                    <p className={styles.subtitle}>Организация и участие в научно-популярных лекциях и мероприятиях</p>
                    <div className={[styles.table, styles.eventsTable].join(" ")}>
                        <div className={styles.text}>
                            <p>Сотрудники научного центра участвуют в проектах развития науки и технологий в обществе в качестве исследователей, консультантов, лекторов и др. </p>
                            <p>Работа ведется в различных направлениях, в сотрудничестве с индустриальными партнерами, образовательными организациями, органами власти. Проводятся форумы, конференции, митинги, стажировки, воркшопы и т.д.</p>
                        </div>
                        <div className={styles.image}></div>
                        <img src="./images/aboutus/2.svg" className={[styles.icon, styles.eventIcon].join(" ")} />
                    </div>
                </div>
                <div className={styles.educationActive}>
                    <p className={styles.subtitle}>Подход к образовательной деятельности</p>
                    <p className={styles.info}>Сегодня на базе научного центра развиваются самые актуальные научные направления и реализуются образовательные программы для бакалавров и магистров. Образование в НОЦ Инфохимии ведется в тесном контакте с выполнением научных проектов, в рамках подхода «образование через науку». Подготовка специалистов осуществляется по совершенно новому направлению, аналогов которого нет в России. Одна из немногих программ, развивающих данное направление и соответствующий научный подход, осуществляется только в Университете Гарвард. Программа магистратуры «Инфохимия / Infochemistry» реализуется на английском языке, с привлечением лучших зарубежных специалистов в исследуемой области. Студенты имеют уникальную возможность совершенствовать английский язык, обучаясь вместе с носителями языка и общаясь с преподавателями из разных стран. </p>
                </div>

            </div>

        </>
    )
}