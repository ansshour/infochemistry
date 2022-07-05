// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Slider.css"
import styles from "./Slider.module.css"

type dataType = {
    image: string;
    text: string[];
    link: string;
}

type Props = {
    data: dataType[];
}

export const Slider: React.FC<Props> = ({ data }) => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {data.map(({ image, text, link }) => (
                <SwiperSlide>
                    <div className={styles.container}>
                        <div className={styles.image} style={{ backgroundImage: `url(${image})` }}>

                        </div>
                        <div className={styles.descriptions}>
                            {text.map((text) => (
                                <p className={styles.desc}>{text}</p>
                            ))}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}