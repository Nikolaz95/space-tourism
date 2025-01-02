import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';

//import css
import "./NavigationBar.css";

const NavigationBar = ({ toggleSideMenu, isSideMenuOpen }) => {
    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isSideMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => document.body.classList.remove('no-scroll');
    }, [isSideMenuOpen]);
    return (
        <nav className={`navigation-Content ${isSideMenuOpen ? "active" : "close"}`}>
            <ul className='bgStyleNavigation'>
                <li>
                    <NavLink to="/" className='navigation-style'>
                        <p>00</p>
                        <p>Home</p>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/destination" className='navigation-style'>
                        <p>01</p>
                        <p>Destination</p>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/crew" className='navigation-style'>
                        <p>02</p>
                        <p>Crew</p>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/tehnology" className='navigation-style'>
                        <p>03</p>
                        <p>Tehnology</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar