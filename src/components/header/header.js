import React from 'react';
import s from './header.module.sass'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    const urlId = localStorage.getItem('userLogin');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <NavLink className={s.a} activeClassName={s.activeLink} to={`/profile?id=${urlId}`} >Profile</NavLink>
                <NavLink className={s.a} activeClassName={s.activeLink} to={`/messages?id=${urlId}`}>Messages</NavLink>
                <NavLink className={s.a} activeClassName={s.activeLink} to="/news">News</NavLink>
                <NavLink className={s.a} activeClassName={s.activeLink} to={`/music?id=${urlId}`}>Music</NavLink>
                {isLoggedIn ? (
                    <button className={s.a} activeClassName={s.activeLink} onClick={props.logOut}>Logout</button>
                ) : (
                    <NavLink id="auth" className={s.a} activeClassName={s.activeLink} to="/authorization">Log In / Sign In</NavLink>
                )}


            </nav>
        </header>
    );
};

export default Header;
