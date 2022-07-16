import { Routes, Route } from "react-router-dom";
import { Aspirantura } from "./Aspirantura/Aspirantura";
import { Equipment } from "./Equipment/Equipment";
import { Main } from "./Main/Main";
import { Master } from "./Master/Master";
import { News } from "./News/News";
import { Personalities } from "./Personalities/Personalities";
import { Vacancy } from "./Vacancy/Vacancy";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/master" element={<Master />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/aspirantura" element={<Aspirantura />} />
            <Route path="/personalities" element={<Personalities />} />
            <Route path="/news" element={<News />} />
            <Route path="/vacancy" element={<Vacancy />} />
        </Routes>
    )
}