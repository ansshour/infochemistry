import { Routes, Route } from "react-router-dom";
import { Main } from "./Main/Main";
import { Master } from "./Master/Master";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/master" element={<Master />} />
        </Routes>
    )
}