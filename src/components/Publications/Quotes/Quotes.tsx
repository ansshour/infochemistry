import { useContext, useState } from "react";
import { Quote } from "./Quote/Quote"
import styles from "./Quotes.module.css"
import { Modal } from "../../UI/Modal/Modal";


type Props = {
    data: any;
}

export const Quotes: React.FC<Props> = ({ data }) => {



    const concatPlace = (journal: string, year: number, pages: string) => {
        let result = "";
        if (journal) {
            result += journal;
        }
        if (year) {
            result += `, ${year}`;
        }
        if (pages) {
            result += `, ${pages}`;
        }
        return result
    }

    return (
        <>
            <div className={styles.quotes}>
                <span className={styles.year}>{data[0].year}</span>
                {data.map(({ authors, name, journal, if_score, sjr_score, year, pages, gost_citation, mla_citation, asa_citation }: any) => <Quote
                    authors={authors}
                    name={name}
                    place={concatPlace(journal, year, pages)}
                    code={`[IF: ${if_score}, SJR: ${sjr_score}]`}
                    mla_citation={mla_citation}
                    asa_citation={asa_citation}
                    gost_citation={gost_citation} />)}
            </div>
        </>
    )
}