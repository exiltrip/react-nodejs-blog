import React, {useState} from 'react';
import Header from './components/header/header.js';
import Footer from "./components/footer/footer.js";
import Profile from "./components/profile/profile.js";
import Messages from "./components/messages/messages.js";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Authorization from "./components/authorisation/authorisation";
import Protected from "./Protected";

const App = () => {


    const [isLoggedIn, setisLoggedIn] = useState(null);

    const logIn = () => {
        setisLoggedIn(true);
        localStorage.setItem('isLoggedIn', true);
    };
    const logOut = () => {
        setisLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        <Navigate to="/authorization" replace />;
    };

    return (

        <BrowserRouter>
            <Header isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} logOut={logOut}/>
            <Routes>
                <Route path="/profile" element={<Protected isLoggedIn={isLoggedIn}> <Profile /> </Protected>}/>
                <Route path="/messages/*" element={<Protected isLoggedIn={isLoggedIn}><Messages /></Protected>}/>
                <Route path="/authorization" element={<Authorization isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} logIn={logIn} />}/>
            </Routes>
            <Footer />
        </BrowserRouter>

    );
};

export default App;
