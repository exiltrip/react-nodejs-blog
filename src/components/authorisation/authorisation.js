import React, {useState} from 'react';
import s from './authorisation.module.sass'
const Authorization = () => {

    const { user, rememberMe } = useState();

    const handleFormSubmit = () => {
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('user', rememberMe ? user : '');
    };
    const handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        this.setState({ [input.name]: value });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                User: <input name="user" value={user} onChange={handleChange}/>
            </label>
            <label>
                <input name="rememberMe" checked={rememberMe} onChange={handleChange} type="checkbox"/> Remember me
            </label>
            <button type="submit">Sign In</button>
        </form>
    );
};

export default Authorization;
