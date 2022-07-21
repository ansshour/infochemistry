import { useContext, useState } from "react";
import { Quote } from "./Quote/Quote"
import styles from "./Quotes.module.css"
import { PublicationsContext } from "../Publications";
import { Modal } from "../../UI/Modal/Modal";

export const Quotes = () => {

    const { quoteData } = useContext(PublicationsContext);

    return (
        <>
            <div className={styles.quotes}>
                <span className={styles.year}>2021</span>
                {quoteData.map(({ authors, name, place, code }: any) => <Quote authors={authors} name={name} place={place} code={code} />)}
            </div>
        </>
    )
}