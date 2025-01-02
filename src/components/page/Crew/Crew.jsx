import React from 'react'
import titleName from '../../../hooks/useTitle';

//import css
import styles from './Crew.module.css';

//import fetch data
import crewData from '../../../data/CrewData';

//  Import img
import crewBg from '../../../assets/BGimages/Bgcrew.jpg';


//  Import components
import ContentLayout from '../../layouts/ContentLayout/ContentLayout';
import SwiperCrew from '../../layouts/Swiper/SwiperCrew';


const Crew = () => {

    const sliderSettings = {
        320: { slidesPerView: 1, spaceBetween: 10 },
        660: { slidesPerView: 1, spaceBetween: 10 },
        960: { slidesPerView: 1, spaceBetween: 10 },
        1260: { slidesPerView: 1, spaceBetween: 10 },
        1600: { slidesPerView: 1, spaceBetween: 10 },
    };
    titleName('Space Tourism - Crew');

    return (
        <ContentLayout backgroundImage={crewBg}>
            <main className={styles.crewPageContent} >
                <SwiperCrew
                    sliderSettings={sliderSettings}
                    items={crewData}
                    className="crewSwiper" />
            </main>
        </ContentLayout>
    )
}

export default Crew