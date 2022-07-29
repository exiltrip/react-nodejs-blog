import React from 'react';
import s from './messages.module.sass'
import {NavLink} from "react-router-dom";

const DialogWindow = (props) => {
    return (
        <section className={s.section}>


            <img src={props.img} alt=""/>
            <div className="text"><NavLink to={props.dialogID}>
            <h4>{props.UserName}</h4>
            <p>{props.LastMessage}</p>
            </NavLink>
            </div>


        </section>
    );
};

export default DialogWindow;
