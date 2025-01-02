import React from 'react'
import useCurrentYear from '../../../hooks/useCurrentYear';


//import css
import styles from './Footer.module.css';

//import img
import GitHub from '../../../assets/icons/icon-github.png';
import Gmail from '../../../assets/icons/icon-gmail.png';
import LinkeDin from '../../../assets/icons/icon-linkedin.png';
import Location from '../../../assets/icons/icon-location.png';
import CopyRight from '../../../assets/icons/icon-copyrights.png';

const Footer = () => {
    const currentYear = useCurrentYear();
    return (
        <footer className={styles.footerContent} >
            <div className={styles.footerMainContent} >
                <div className={styles.footerAddres}>
                    <h1>Address:</h1>
                    <address> Stockholm, Sweden
                        <a href="https://www.google.com/maps/place/Stockholm/@59.0968211,17.5065602,7.75z/data=!4m6!3m5!1s0x465f763119640bcb:0xa80d27d3679d7766!8m2!3d59.3293235!4d18.0685808!16zL20vMDZteHM?entry=ttu" target="_blank">
                            <img src={Location} alt="" className={styles.locationImg} />
                        </a>
                    </address>
                </div>

                <div className={styles.footerMidleContent}>
                    {/* <div className="footer-midle"> */}
                    <img src={CopyRight} alt="" className={styles.copyrghtImg} />
                    <span>Copyright</span>
                    <span>{currentYear} by Nikola Zovko</span>
                    {/* </div> */}
                </div>

                <div className={styles.contactFooter}>
                    <h1>Contact:</h1>
                    <div className={styles.contactFooterLink}>
                        <a href="mailto:nikolajoe95@gmail.com" target="_blank">
                            <img src={Gmail} alt="" className={styles.contactImg} title="Gmail" />
                        </a>
                        <a href="https://github.com/Nikolaz95" target="_blank">
                            <img src={GitHub} alt="" className={styles.contactImg} title="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/nikola-zovko-a50779247/" target="_blank">
                            <img src={LinkeDin} alt="" className={styles.contactImg} title="Linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer