import React from 'react'

//import css
import styles from './Button.module.css';

const Button = ({ onClick, children, variant, icon, className }) => {
    return (
        <button onClick={onClick} className={`${styles.button} ${styles[variant]} ${className}`}>
            {icon && <img src={icon} alt="icon" className={styles.iconBtns} />}
            {children}
        </button>
    )
}

export default Button