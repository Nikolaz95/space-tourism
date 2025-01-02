import React from 'react'
import titleName from '../../../hooks/useTitle';
import { NavLink } from 'react-router-dom';

//import css
import styles from './HomePage.module.css';
// Import img
import homeBg from '../../../assets/BGimages/BGhome-bg.jpg';
//import components
import ContentLayout from '../../layouts/ContentLayout/ContentLayout';
import Button from '../../layouts/Buttons/Button';



const HomePage = () => {
    titleName('Space Tourism');

    return (
        <>
            <ContentLayout backgroundImage={homeBg}>
                <main className={styles.mainContent}>
                    <section className={styles.homePageContent}>
                        <div className={styles.homePageContentLeft}>
                            <h1>So, you want to travel to</h1>
                            <h1>Space</h1>
                            <p>Let's face it; if you want to go space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience.</p>
                        </div>
                        <div className={styles.homePageContentRight}>
                            <NavLink to="/destination">
                                <Button variant="explore">
                                    <h1>Explore</h1>
                                </Button>
                            </NavLink>
                        </div>
                    </section>
                </main>
            </ContentLayout>
        </>
    )
}

export default HomePage