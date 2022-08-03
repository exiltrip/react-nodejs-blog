import React from 'react';
import s from './header.module.sass'
import {NavLink} from "react-router-dom";

const Header = () => {

    const urlId = localStorage.getItem('userLogin');
    const authorized = localStorage.getItem('authorized');

    function visible(){
        document.getElementById("auth").style.visibility = "visible";
    }
    function hidden(){
        document.getElementById("auth").style.visibility = "hidden";
    }

    function checkAuthorized()
    {
        if (authorized === 'true')
        {
            hidden();
        }
        else
        {
            visible();
        }
    }
    setTimeout(checkAuthorized, 0)
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <NavLink className={s.a} activeClassName={s.activeLink} to={`/profile?id=${urlId}`} >Profile</NavLink>
                <NavLink className={s.a} activeClassName={s.activeLink} to={`/messages?id=${urlId}`}>Messages</NavLink>
                <NavLink className={s.a} activeClassName={s.activeLink} to="/news">News</NavLink>
                <NavLink className={s.a} activeClassName={s.activeLink} to={`/music?id=${urlId}`}>Music</NavLink>
                <NavLink id="auth" className={s.a} activeClassName={s.activeLink} to="/authorization">Log In / Sign In</NavLink>

            </nav>
        </header>
    );
};

export default Header;
