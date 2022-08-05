import React from 'react';
import s from './messages.module.sass'
import {NavLink} from "react-router-dom";

const DialogWindow = (props) => {

    const senderLogin = props.senderLogin;
    const lastMessage = props.lastMessage;
    const dialogID = props.dialogID;

    return (
        <section className={s.section}>


            <img src={props.logo} alt=""/>
            <div className="text"><NavLink to={`./${dialogID}`}>
            <h4>{senderLogin}</h4>
            <p>{lastMessage}</p>
            </NavLink>
            </div>


        </section>
    );
};

export default DialogWindow;
