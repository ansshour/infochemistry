import { Routes, Route } from "react-router-dom";
import { Aspirantura } from "./Aspirantura/Aspirantura";
import { Equipment } from "./Equipment/Equipment";
import { Main } from "./Main/Main";
import { Master } from "./Master/Master";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/master" element={<Master />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/aspirantura" element={<Aspirantura />} />
            <Route path="/bachelor" element={<a href='https://ichem.itmo.ru/' target="_blank" />} />
            <Route path="/school" element={<a href='https://ichem.itmo.ru/' target="_blank" />} />
        </Routes>
    )
}