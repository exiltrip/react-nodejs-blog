import React from 'react';
import s from './header.module.sass'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <NavLink className={s.a} activeClassName={s.activeLink} to="/profile">Profile</NavLink>
                <NavLink className={s.a} activeClassName={s.activeLink} to="/messages">Messages</NavLink>
                <NavLink className={s.a} activeClassName={s.activeLink} to="/news">News</NavLink>
                <NavLink className={s.a} activeClassName={s.activeLink} to="/music">Music</NavLink>
                <NavLink className={s.a} activeClassName={s.activeLink} to="/settings">Settings</NavLink>
            </nav>
        </header>
    );
};

export default Header;
