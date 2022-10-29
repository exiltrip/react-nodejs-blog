import React, {useEffect, useState} from 'react';
import s from './messages.module.sass'
import DialogWindow from './dialogwindow'
import logo1 from '../../images/gitlogo.jpg'
import logo2 from '../../images/logo1.jpg'
import logo3 from '../../images/logo3.jpg'
import logo4 from '../../images/logo4.jpg'
import logo5 from '../../images/logo5.jpg'
import Post from "../profile/Post";
import axios from "axios";

const Messages = () => {


    const [dialogs, setDialog] = useState([])

    useEffect(() => {
        const url = new URL(document.location.href);
        const urlID = (url.searchParams.get('id'));
        axios.get(`http://localhost:8080/api/dialogs?id=${urlID}`)
            .then(res => {
                console.log(res.data);
                setDialog(res.data);
            })
    }, []);

    return (
        <main className={s.main}>
            <h1>messages</h1>
            <div className={s.Dialogs}>
            <div className={s.DialogWindows}>
            {dialogs.map(object => <DialogWindow logo={logo3} userName={object.senderlogin} dialogID={object.id} LastMessage={object.lastmessage} id={object.id }  />)}
            </div>

            <div className={s.DialogMain}>
                <div className={s.DialogMainHeader}>
                    <img className={s.img} src={logo4} alt=""/>
                    <h4 className={s.h4}>Sender Name</h4>
                </div>

                <div className={s.MessageBar}>
                    <input type="text" className={s.input} placeholder="New Message"/>
                    <button className={s.SendMessage}>Send</button>
                </div>
            </div>
            </div>
        </main>
    );
};

export default Messages;
