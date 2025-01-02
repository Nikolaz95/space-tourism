import React from 'react'

//swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CrewContent from '../../page/Crew/CrewContent/CrewContent';

const SwiperCrew = ({ sliderSettings, items, className }) => {
    return (
        <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            effect="creative"
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={sliderSettings}
            className={className} >
            {items.map((data) => (
                <SwiperSlide key={data.id}>
                    <CrewContent data={data} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SwiperCrew