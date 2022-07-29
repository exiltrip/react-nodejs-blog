import React, {useEffect, useState} from 'react';
import s from './profile.module.sass'
import ProfileLogo from '../../images/gitlogo.jpg'
import Post from './Post'
import axios from 'axios';

const Profile = () => {

    const [content, setContent] = useState(0);

    const handleChange = event => {
        setContent({ "content": event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();

        axios.post(`http://localhost:8080/api/post`, { "userID": 2, content })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    useEffect(() => { axios.get(`http://localhost:8080/api/post?id=2`)
        .then(res => {
            const persons = res.data;
            this.setState({ persons });
            ;
        })});


    return (
        <main className={s.main}>
            <div className={s.ProfileHeader}>
                <div className={s.ProfileLogo}><img className={s.ProfileLogo_img} src={ProfileLogo} alt="Profile Logo"/></div>
                <h1 className={s.h1}>EXILTRIP</h1>
            </div>

            <div className={s.Profile}>
                <h2 className={s.h2}>My posts</h2>

                    <form className={s.InputBar} onSubmit={handleSubmit}>
                    <input className={s.input} type="text" name="content" placeholder="New post" onChange={handleChange} />
                    <button className={s.SubmitPost} type="submit" >Submit</button>
                    </form>

                    { this.state.persons.map(person => <Post message={person.content} />)}
            </div>
        </main>
    )


};

export default Profile;

