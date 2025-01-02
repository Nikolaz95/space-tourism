import React from 'react'
import titleName from '../../../hooks/useTitle';
import { useMoveBack } from '../../../hooks/useMoveBack';


//import css
import styles from './ErrorPage.module.css';


/* import img */
import Eror from "../../../assets/icons/icon-error.png"
import GoBack from "../../../assets/icons/icon-closebutton.png"


/* import components */
import Button from '../../layouts/Buttons/Button';

const ErrorPage = () => {
    const goBack = useMoveBack();
    titleName('Error Page 404');
    return (
        <div className={styles.errorContent}>
            <div className={styles.errorTopContent}>
                <Button variant="goBack" onClick={goBack}>
                    <img src={GoBack} alt="Go Back" className={styles.iconBtns} />
                    <p>Go Back</p>
                </Button>
            </div>
            <div className={styles.mainContent}>
                <img src={Eror} alt="Error Icon" className={styles.imgError} />
                <p className={`${styles.textError} ${styles.vibrate1}`}>This page does not exist</p>
                <img src={Eror} alt="Error Icon" className={styles.imgError} />
            </div>
        </div>
    )
}

export default ErrorPage