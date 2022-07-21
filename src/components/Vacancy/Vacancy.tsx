import { Breadcrumbs } from "../UI/Breadcrumbs/Breadcrumbs"
import { Button } from "../UI/Button/Button"
import { CategoryButton } from "../UI/CategoryButton/CategoryButton"
import { SearchInput } from "../UI/SearchInput/SearchInput"
import { VacancyCard } from "../UI/VacancyCard/VacancyCard"
import styles from "./Vacancy.module.css"

export const Vacancy = () => {

    const info = [
        { name: "Главная страница", link: "/" },
        { name: "О центре", link: "" },
        { name: "Вакансии", link: "/vacancy" },
    ]

    const data = [
        {
            name: "Научный сотрудник PostDoc (Электрохимические сенсоры)", categories: ["Полная занятость", "Опыт: 1-3 года"], desc: `<p>Каким мы видим кандидата:<p>
        <ul>
        <li>степень кандидата химических наук;</li>
        <li>наличие минимум 7 публикаций в Scopus/Web Of Science с 2016 года;</li>
        <li>опыт работы в химической лаборатории (обязательно);</li>
        <li>опыт работы с аналитическим оборудованием и оптическими приб...</li>
        <ul>`,
            about: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quod, maxime accusantium necessitatibus harum reiciendis aliquam ut nobis. Eos nisi minus earum ullam quasi pariatur, amet repudiandae? Totam, vero sapiente."
        },
        {
            name: "Научный сотрудник PostDoc (Электрохимические сенсоры)", categories: ["Полная занятость", "Опыт: 1-3 года"], desc: `<p>Каким мы видим кандидата:<p>
        <ul>
        <li>степень кандидата химических наук;</li>
        <li>наличие минимум 7 публикаций в Scopus/Web Of Science с 2016 года;</li>
        <li>опыт работы в химической лаборатории (обязательно);</li>
        <li>опыт работы с аналитическим оборудованием и оптическими приб...</li>
        <ul>`,
        },
        {
            name: "Научный сотрудник PostDoc (Электрохимические сенсоры)", categories: ["Полная занятость", "Опыт: 1-3 года"], desc: `<p>Каким мы видим кандидата:<p>
        <ul>
        <li>степень кандидата химических наук;</li>
        <li>наличие минимум 7 публикаций в Scopus/Web Of Science с 2016 года;</li>
        <li>опыт работы в химической лаборатории (обязательно);</li>
        <li>опыт работы с аналитическим оборудованием и оптическими приб...</li>
        <ul>`,
        },
        {
            name: "Научный сотрудник PostDoc (Электрохимические сенсоры)", categories: ["Полная занятость", "Опыт: 1-3 года"], desc: `<p>Каким мы видим кандидата:<p>
        <ul>
        <li>степень кандидата химических наук;</li>
        <li>наличие минимум 7 публикаций в Scopus/Web Of Science с 2016 года;</li>
        <li>опыт работы в химической лаборатории (обязательно);</li>
        <li>опыт работы с аналитическим оборудованием и оптическими приб...</li>
        <ul>`,
        },
        {
            name: "Научный сотрудник PostDoc (Электрохимические сенсоры)", categories: ["Полная занятость", "Опыт: 1-3 года"], desc: `<p>Каким мы видим кандидата:<p>
        <ul>
        <li>степень кандидата химических наук;</li>
        <li>наличие минимум 7 публикаций в Scopus/Web Of Science с 2016 года;</li>
        <li>опыт работы в химической лаборатории (обязательно);</li>
        <li>опыт работы с аналитическим оборудованием и оптическими приб...</li>
        <ul>`,
        },
    ]


    return (
        <>
            <Breadcrumbs info={info} />
            <div className={styles.container}>
                <div className={styles.title__wrapper}>
                    <h1 className={styles.title}>
                        Вакансии
                    </h1>
                </div>
                <div className={styles.searchBlock}>
                    <SearchInput />
                    <Button width="96" height="35" >Поиск</Button>
                </div>
                <div className={styles.categoryBlock}>
                    <div className={styles.category}>
                        <p>По занятости</p>
                        <div>
                            <CategoryButton isActive={true} color="#63c018">Полная</CategoryButton>
                            <CategoryButton isActive={false} color="#63c018">Частичная</CategoryButton>
                        </div>
                    </div>
                    <div className={styles.category}>
                        <p>По опыту работы</p>
                        <div>
                            <CategoryButton isActive={true} color="#229fff">Нет</CategoryButton>
                            <CategoryButton isActive={false} color="#63c018">1 - 3 года</CategoryButton>
                        </div>
                    </div>
                    <div className={styles.category}>
                        <p>По уровню</p>
                        <div>
                            <CategoryButton isActive={true} color="#63c018">Магистратура</CategoryButton>
                            <CategoryButton isActive={false} color="#63c018">Аспирантура</CategoryButton>
                        </div>
                    </div>
                </div>
                <div className={styles.vacancyCards}>
                    {data.map(({ name, categories, desc, about }) => {
                        return (
                            <VacancyCard name={name} categories={categories} desc={desc} about={about} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}