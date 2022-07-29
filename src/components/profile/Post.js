import React from 'react';
import s from './profile.module.sass'

const Post = (props) => {
    return (
        <section className={s.section}>
            <div className={s.user}><div className={s.ProfileLogo}></div> <h2 className={s.h2}>exiltrip</h2></div>
            <span className={s.span}>{props.message}</span>
            <img className={s.span} src={props.img} alt="" />
        </section>
    );
};

export default Post;
