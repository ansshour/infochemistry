import { Routes, Route } from "react-router-dom";
import { About } from "./About/About";
import { Aspirantura } from "./Aspirantura/Aspirantura";
import { Contacts } from "./Contacts/Contacts";
import { Equipment } from "./Equipment/Equipment";
import { Main } from "./Main/Main";
import { MainDirections } from "./MainDirections/MainDirections";
import { Master } from "./Master/Master";
import { News } from "./News/News";
import { NewsDetail } from "./News/NewsDetail/NewsDetail";
import { Personalities } from "./Personalities/Personalities";
import { Publications } from "./Publications/Publications";
import { ScienceGroup } from "./ScienceGroup/ScienceGroup";
import { Vacancy } from "./Vacancy/Vacancy";
import { VideoDetail } from "./VideoLectures/VideoDetail/VideoDetail";
import { VideoLectures } from "./VideoLectures/VideoLectures";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/master" element={<Master />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/aspirantura" element={<Aspirantura />} />
            <Route path="/personalities" element={<Personalities />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/vacancy" element={<Vacancy />} />
            <Route path="/about" element={<About />} />
            <Route path="/main_directions" element={<MainDirections />} />
            <Route path="/science_groups" element={<ScienceGroup />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/video_lectures" element={<VideoLectures />} />
            <Route path="/video_lectures/:id" element={<VideoDetail />} />
            <Route path="/publications" element={<Publications />} />
        </Routes>
    )
}