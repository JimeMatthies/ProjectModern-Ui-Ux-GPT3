import React, { useState } from "react";
/* import { BrowserRouter, Route, Routes } from 'react-router-dom'; */
import Brand from './components/Brand';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Blog from './containers/Blog';
import Features from './containers/Features';
import Header from './containers/Header';
import Posibility from './containers/Posibility';
import WhatGPT3 from './containers/WhatGPT3';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Posibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App;