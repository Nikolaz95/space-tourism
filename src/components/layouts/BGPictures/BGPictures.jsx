import React from 'react'

//import css
import styles from './BGPictures.module.css';



const BGPictures = ({ image }) => {
    return (
        <div className={styles.bgPictureContent}>
            <img className={styles.bgPicture} src={image} alt="Background" />
        </div>
    )
}

export default BGPictures