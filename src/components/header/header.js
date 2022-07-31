import React from 'react';
import s from './header.module.sass'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <NavLink className={s.a} activeClassName={s.activeLink} to="/profile?id=2">Profile</NavLink>
                <NavLink className={s.a} activeClassName={s.activeLink} to="/messages">Messages</NavLink>
                <NavLink className={s.a} activeClassName={s.activeLink} to="/news">News</NavLink>
                <NavLink className={s.a} activeClassName={s.activeLink} to="/music">Music</NavLink>
                <NavLink className={s.a} activeClassName={s.activeLink} to="/authorization">Log In / Sign In</NavLink>
            </nav>
        </header>
    );
};

export default Header;
