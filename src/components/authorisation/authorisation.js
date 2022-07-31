import React, {useEffect, useState} from 'react';
import s from './authorisation.module.sass'
const Authorization = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [login, setLogin] = useState();

    const [emailError, setEmailError] = useState('мыло не может быть пустым!');
    const [passwordError, setPasswordError] = useState('пароль не может быть пустым!');
    const [nameError, setNameError] = useState('имя не может быть пустым!');
    const [surnameError, setSurnameError] = useState('фамилия не может быть пустой!');
    const [loginError, setLoginError] = useState('логин не может быть пустым!');

    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [nameDirty, setNameDirty] = useState(false);
    const [surnameDirty, setSurnameDirty] = useState(false);
    const [loginDirty, setLoginDirty] = useState(false);

    const [formValid, setFormValid] = useState(false)
    useEffect(() => {
        if (emailError || passwordError || nameError || surnameError || loginError){
            setFormValid(false)
        }
        else{
            setFormValid(true)
        }

    },[emailError, passwordError, nameError, surnameError, loginError])

    const blurHandler = (e) =>  {
        switch (e.target.name){
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'name':
                setNameDirty(true)
                break
            case 'surname':
                setSurnameDirty(true)
                break
            case 'login':
                setLoginDirty(true)
                break
        }

    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('некорректный e-mail')
            if(!e.target.value){
                setEmailError('e-mail не может быть пустым!')
            }
        }
        else{
            setEmailError("")
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 4) {
            setPasswordError('слишком короткий пароль!')
            if(!e.target.value){
                setPasswordError('пароль не может быть пустым!')
            }
        }else{
            setPasswordError("")
        }
    }
    const nameHandler = (e) => {
        setName(e.target.value)
        if (e.target.value.length < 2) {
            setNameError('слишком короткое имя!')
            if(!e.target.value){
                setNameError('имя не может быть пустым!')
            }
        }else{
            setNameError("")
        }
    }
    const surnameHandler = (e) => {
        setSurname(e.target.value)
        if (e.target.value.length < 2) {
            setSurnameError('слишком короткая фамилия!')
            if(!e.target.value){
                setSurnameError('фамилия не может быть пустой!')
            }
        }else{
            setSurnameError("")
        }
    }
    const loginHandler = (e) => {
        setLogin(e.target.value)
        if (e.target.value.length < 4) {
            setLoginError('слишком короткий логин!')
            if(!e.target.value){
                setLoginError('логин не может быть пустым!')
            }
        }else{
            setLoginError("")
        }
    }

    return (
        <main>
            <form>
                <h1>Sign In</h1>

                {(emailDirty && emailError) && <div className={s.error} style={{color: "red"}}>{emailError}</div>}
                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="text" name="email" placeholder="Enter your e-mail"/>

                {(passwordDirty && passwordError) && <div className={s.error} style={{color: "red"}}>{passwordError}</div>}
                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type="password" name="password" placeholder="Enter your password"/>

                {(nameDirty && nameError) && <div className={s.error} style={{color: "red"}}>{nameError}</div>}
                <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} type="text" name="name" placeholder="Enter your name"/>

                {(surnameDirty && surnameError) && <div className={s.error} style={{color: "red"}}>{surnameError}</div>}
                <input onChange={e => surnameHandler(e)} value={surname} onBlur={e => blurHandler(e)} type="text" name="surname" placeholder="Enter your surname"/>

                {(loginDirty && loginError) && <div className={s.error} style={{color: "red"}}>{loginError}</div>}
                <input onChange={e => loginHandler(e)} value={login} onBlur={e => blurHandler(e)} type="text" name="login" placeholder="Enter your login"/>

                <button disabled={!formValid} type="submit">Sign In</button>

                <a href="/">уже зарегестрированны?</a>
            </form>
        </main>
    );
};

export default Authorization;
