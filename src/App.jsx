import React from "react";
import Blog from "./components/Blog";
import Brand from "./components/Brand";
import Cta from "./components/Cta";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Posibility from "./components/Posibility";
import WhatGPT3 from "./components/WhatGPT3";

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