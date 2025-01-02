import React from 'react'


//import css
import styles from './ContentLayout.module.css';


//import img
import BGPictures from '../BGPictures/BGPictures';

const ContentLayout = ({ children, backgroundImage }) => {

    return (
        <>
            <BGPictures image={backgroundImage} />
            <section className={styles.contentLayout}>
                {children}
            </section>
        </>
    )
}

export default ContentLayout