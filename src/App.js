import React from 'react';
import Header from './components/header/header.js';
import Footer from "./components/footer/footer.js";
import Profile from "./components/profile/profile.js";
import Messages from "./components/messages/messages.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authorization from "./components/authorisation/authorisation";



const App = () => {
    return (

        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/messages/*" element={<Messages />} />
                <Route path="/authorization" element={<Authorization />} />
            </Routes>
            <Footer />
        </BrowserRouter>

    );
};

export default App;
