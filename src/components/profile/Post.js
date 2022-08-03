import React,{useState} from 'react';
import s from './profile.module.sass'
import axios from "axios";
import {useNavigate} from "react-router";

const Post = (props) => {
    const url = new URL(document.location.href);
    const urlID = (url.searchParams.get('id'));
    const [person, setPerson] = useState([]);
    let [id, setId] = useState('');
    id = props.id;

    let navigate = useNavigate();

    const handleDelete = (event) => {
        event.preventDefault();
        axios.delete(`http://localhost:8080/api/post/${props.id}`, {id} )
            .then(res => {
                console.log(res);
                console.log(res.data);
                setId('');
                navigate(`../profile?id=${urlID + 1}`, { replace: true });
                navigate(`../profile?id=${urlID}`, { replace: true });
            })
    }

    return (
        <section className={s.section}>

            <div className={s.user}>
                <div className={s.user1231}>
                <div className={s.ProfileLogo}></div>
                <h2 className={s.h2}>{props.userLogin}</h2>
                </div>
                <button className={s.delete} type="submit" onClick={handleDelete}>delete</button>
            </div>

            <span className={s.title}>{props.title}</span>
            <span className={s.span}>{props.message}</span>

            <span className={s.span}>{props.symbol}</span>
            <span className={s.span}>{props.status}</span>

        </section>
    );
};

export default Post;
