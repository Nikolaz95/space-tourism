import React from 'react'

//import css
import styles from './CrewContent.module.css';

const CrewContent = ({ data }) => {
    return (
        <div className={styles.crewContentCard}>
            <div className={styles.crewPageContentLeft}>
                <h1 className={styles.crewTitle} >02 Meet your crew</h1>
                <article className={styles.articleCrew}>
                    <h1 className={styles.crewArticleTitle} >{data.titleCrew}</h1>
                    <h2 className={styles.crewNames} >{data.name}</h2>
                    <p className={styles.crewDescription} >{data.description}</p>
                </article>
            </div>
            <div className={styles.crewPageContentRight} >
                <img src={data.img} alt={data.name} className={styles.imgCrew} />
            </div>
        </div>
    )
}

export default CrewContent