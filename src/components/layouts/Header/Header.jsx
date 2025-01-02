import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

//import css
import styles from './Header.module.css';

//import components
import Logo from '../Logo/Logo';
import NavigationBar from '../HeaderNavigation/NavigationBar';
import HamMenu from '../HamMenu/HamMenu';


const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(null);

    const toggleSideMenu = (e) => {
        e.stopPropagation();
        setIsSideMenuOpen((prevSideMenuOpen) => !prevSideMenuOpen);
    }

    const handleMobileSearchToggle = (isActive) => {
        setIsVisible(!isActive);
    };
    return (
        <header>
            <div className={styles.contentHeader} >
                <Logo />

                <NavigationBar toggleSideMenu={toggleSideMenu} isSideMenuOpen={isSideMenuOpen} />

                {/* hamburger */}
                {isVisible && (
                    <HamMenu toggleSideMenu={toggleSideMenu} isSideMenuOpen={isSideMenuOpen} />
                )}
                {/* hamburger */}

            </div>
        </header>
    )
}

export default Header