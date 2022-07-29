import React from 'react';
import s from './messages.module.sass'
import DialogWindow from './dialogwindow'
import logo1 from '../../images/gitlogo.jpg'
import logo2 from '../../images/logo1.jpg'
import logo3 from '../../images/logo3.jpg'
import logo4 from '../../images/logo4.jpg'
import logo5 from '../../images/logo5.jpg'

const Messages = () => {
    return (
        <main className={s.main}>
            <h1>messages</h1>
            <div className={s.Dialogs}>
            <div className={s.DialogWindows}>
            <DialogWindow img={logo1} UserName={'Exiltrip'} dialogID={"/messages/1"} LastMessage={"You: PIZDEEEC"}/>
            <DialogWindow img={logo2} UserName={'Vladimir Hohloeb'} dialogID={"/messages/2"} LastMessage={"norm, davai"}/>
            <DialogWindow img={logo3} UserName={'Analniy deboshir2009'} dialogID={"/messages/3"} LastMessage={"You: uroki sdelal?"}/>
            <DialogWindow img={logo4} UserName={'Arkasha Incest'} dialogID={"/messages/4"} LastMessage={"you: hochu tebya"}/>
            <DialogWindow img={logo5} UserName={'Shluha Tupaya'} dialogID={"/messages/5"} LastMessage={"Yamete kudasai"}/>
            </div>

            <div className={s.DialogMain}>
                <div className={s.DialogMainHeader}>
                    <img className={s.img} src={logo4} alt=""/>
                    <h4 className={s.h4}>Arkasha Incest</h4>
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
