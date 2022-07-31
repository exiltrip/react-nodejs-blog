import React, { useEffect, useState } from 'react';
import s from './profile.module.sass'
import ProfileLogo from '../../images/gitlogo.jpg'
import Post from './Post'
import axios from 'axios';

const Profile = () => {



    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [person, setPerson] = useState([]);

    const url = new URL(document.location.href);
    const urlID = (url.searchParams.get('id'));

    const handleChange = event => {
        setContent(event.target.value);
    }
    const handleChangeTitle = event => {
        setTitle(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:8080/api/post`, { userID: 2, content, title })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setContent('');
                setTitle('');

                axios.get(`http://localhost:8080/api/post?id=${urlID}`)
                    .then(res => {
                        setPerson(res.data);
                    })
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/api/post?id=${urlID}`)
            .then(res => {
                setPerson(res.data);
            })
    }, [urlID]);



    return (
        <main className={s.main}>
            <div className={s.ProfileHeader}>
                <div className={s.ProfileLogo}><img className={s.ProfileLogo_img} src={ProfileLogo} alt="Profile Logo" /></div>
                <h1 className={s.h1}>EXILTRIP</h1>
            </div>

            <div className={s.Profile}>
                <h2 className={s.h2}>My posts</h2>
                <div className={s.InputBar}>
                    <input className={s.title} type="text" name="title" placeholder="title" value={title} onChange={handleChangeTitle} />
                    <input className={s.input} type="text" name="content" placeholder="New post" value={content} onChange={handleChange} />
                    <button className={s.SubmitPost} type="submit" onClick={handleSubmit}>Submit</button>
                </div>
                {person.map(message => <Post title={message.title} message={message.content} id={message.id }  />)}
            </div>
        </main>
    )


};

export default Profile;

