import React from 'react'
import { NavLink } from 'react-router-dom'

//import css
import styles from './Logo.module.css';


// import img 
import Logoimg from "../../../assets/logo/spaceLogo.jpg"



const Logo = () => {
    return (
        <NavLink to="/" className={styles.logoImh}>
            <img src={Logoimg} className={styles.logoImg} alt="Logo" />
        </NavLink>
    )
}

export default Logo